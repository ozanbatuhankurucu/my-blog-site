import {
  GoogleGenerativeAI,
  type GenerativeModel,
} from '@google/generative-ai'

// Flash-Lite consumes less free-tier capacity than Flash. A request is never
// retried automatically: retrying quota errors only burns more of the same
// project-level allowance.
const MODEL = 'gemini-flash-lite-latest'
const DEFAULT_MAX_OUTPUT_TOKENS = 1024

let cachedClient: GoogleGenerativeAI | null = null

const getClient = (): GoogleGenerativeAI => {
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY
  if (!apiKey) {
    throw new Error(
      'GOOGLE_GEMINI_API_KEY is not set. Add it to the deployment environment to enable the AI toolkit.'
    )
  }
  if (!cachedClient) {
    cachedClient = new GoogleGenerativeAI(apiKey)
  }
  return cachedClient
}

const getModel = (maxOutputTokens: number): GenerativeModel =>
  getClient().getGenerativeModel({
    model: MODEL,
    generationConfig: {
      temperature: 0.4,
      topP: 0.95,
      maxOutputTokens,
    },
  })

/**
 * Generate one text response from Gemini. Quota and transient errors are
 * intentionally returned to the caller without another provider request.
 *
 * We intentionally avoid SSE / streaming here because AWS Amplify's SSR
 * runtime (Lambda + CloudFront) buffers responses, which causes streamed
 * responses to sit in memory until the Lambda times out and returns 504.
 * A single JSON response works reliably on every host.
 */
export const generate = async (
  prompt: string,
  signal?: AbortSignal,
  maxOutputTokens = DEFAULT_MAX_OUTPUT_TOKENS
): Promise<string> => {
  if (signal?.aborted) {
    throw new DOMException('Aborted', 'AbortError')
  }

  const result = await getModel(maxOutputTokens).generateContent(prompt)
  if (signal?.aborted) {
    throw new DOMException('Aborted', 'AbortError')
  }

  return result.response.text()
}

export const isGeminiConfigured = (): boolean =>
  Boolean(process.env.GOOGLE_GEMINI_API_KEY)

export const GEMINI_MODEL = MODEL
