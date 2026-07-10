import {
  GoogleGenerativeAI,
  type GenerativeModel,
} from '@google/generative-ai'

// Aliases maintained by Google that always point to the current stable
// free-tier Flash models. Concrete names (e.g. `gemini-2.5-flash`) were
// locked out for new API keys in 2026, so we deliberately use the aliases
// to stay evergreen. If the primary alias is overloaded (503) we fall
// back to the lighter Lite alias, which shares a separate capacity pool
// and is far less likely to be busy.
const PRIMARY_MODEL = 'gemini-flash-latest'
const FALLBACK_MODEL = 'gemini-flash-lite-latest'
const MODEL_CHAIN = [PRIMARY_MODEL, FALLBACK_MODEL]

const MAX_ATTEMPTS_PER_MODEL = 2
const BASE_RETRY_DELAY_MS = 400

let cachedClient: GoogleGenerativeAI | null = null

const getClient = (): GoogleGenerativeAI => {
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY
  if (!apiKey) {
    throw new Error(
      'GOOGLE_GEMINI_API_KEY is not set. Add it to .env.local to enable the AI toolkit.'
    )
  }
  if (!cachedClient) {
    cachedClient = new GoogleGenerativeAI(apiKey)
  }
  return cachedClient
}

const getModel = (name: string): GenerativeModel =>
  getClient().getGenerativeModel({
    model: name,
    generationConfig: {
      temperature: 0.4,
      topP: 0.95,
      maxOutputTokens: 2048,
    },
  })

const extractStatus = (err: unknown): number | null => {
  if (!err || typeof err !== 'object') return null
  const anyErr = err as Record<string, unknown>
  if (typeof anyErr.status === 'number') return anyErr.status
  const message = typeof anyErr.message === 'string' ? anyErr.message : ''
  const match = message.match(/\[(\d{3})\s/)
  return match ? Number(match[1]) : null
}

const isTransient = (err: unknown): boolean => {
  const status = extractStatus(err)
  if (status === null) return false
  return status === 429 || status === 500 || status === 502 || status === 503
}

const sleep = (ms: number, signal?: AbortSignal): Promise<void> =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort)
      resolve()
    }, ms)
    const onAbort = () => {
      clearTimeout(timer)
      reject(new DOMException('Aborted', 'AbortError'))
    }
    if (signal) {
      if (signal.aborted) {
        clearTimeout(timer)
        reject(new DOMException('Aborted', 'AbortError'))
        return
      }
      signal.addEventListener('abort', onAbort, { once: true })
    }
  })

const openStream = async (
  prompt: string,
  signal?: AbortSignal
): Promise<{
  model: string
  stream: AsyncGenerator<{ text: () => string }, void, unknown>
}> => {
  let lastError: unknown

  for (const modelName of MODEL_CHAIN) {
    for (let attempt = 1; attempt <= MAX_ATTEMPTS_PER_MODEL; attempt += 1) {
      if (signal?.aborted) {
        throw new DOMException('Aborted', 'AbortError')
      }
      try {
        const result = await getModel(modelName).generateContentStream(prompt)
        return {
          model: modelName,
          stream: result.stream as AsyncGenerator<
            { text: () => string },
            void,
            unknown
          >,
        }
      } catch (err) {
        lastError = err
        if (!isTransient(err)) throw err
        if (attempt < MAX_ATTEMPTS_PER_MODEL) {
          await sleep(BASE_RETRY_DELAY_MS * attempt, signal)
        }
      }
    }
  }

  if (lastError instanceof Error) throw lastError
  throw new Error(
    'The AI service is temporarily overloaded. Please try again in a moment.'
  )
}

/**
 * Stream Gemini output for a single-turn prompt as a `ReadableStream<string>`
 * of text chunks. Automatically retries on transient upstream errors (429,
 * 500, 502, 503) and falls back to a lighter Flash-Lite model if the primary
 * one stays unavailable. Once tokens start flowing the stream is committed,
 * so retries only apply to the initial request phase.
 */
export const streamGenerate = async (
  prompt: string,
  signal?: AbortSignal
): Promise<ReadableStream<string>> => {
  const { stream } = await openStream(prompt, signal)

  return new ReadableStream<string>({
    async start(controller) {
      const abortHandler = () => {
        controller.error(new DOMException('Aborted', 'AbortError'))
      }
      signal?.addEventListener('abort', abortHandler)

      try {
        for await (const chunk of stream) {
          if (signal?.aborted) break
          const text = chunk.text()
          if (text) controller.enqueue(text)
        }
        controller.close()
      } catch (err) {
        controller.error(err)
      } finally {
        signal?.removeEventListener('abort', abortHandler)
      }
    },
  })
}

export const GEMINI_MODEL = PRIMARY_MODEL
