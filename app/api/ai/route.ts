import { NextRequest } from 'next/server'
import {
  buildPrompt,
  isAiFeature,
  type AiFeature,
  type ChatTurn,
} from '../../../lib/ai/prompts'
import { streamGenerate } from '../../../lib/ai/gemini'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface RequestBody {
  feature: AiFeature
  title: string
  article: string
  question?: string
  history?: ChatTurn[]
}

const MAX_QUESTION_CHARS = 500
const MAX_HISTORY_TURNS = 8

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 20
const rateLimitStore = new Map<string, number[]>()

const getClientIp = (req: NextRequest): string => {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  const real = req.headers.get('x-real-ip')
  if (real) return real
  return 'anonymous'
}

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now()
  const cutoff = now - RATE_LIMIT_WINDOW_MS
  const timestamps = (rateLimitStore.get(ip) ?? []).filter((t) => t > cutoff)
  if (timestamps.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(ip, timestamps)
    return false
  }
  timestamps.push(now)
  rateLimitStore.set(ip, timestamps)
  return true
}

const jsonError = (message: string, status: number): Response =>
  new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })

const isChatTurn = (value: unknown): value is ChatTurn => {
  if (!value || typeof value !== 'object') return false
  const turn = value as Record<string, unknown>
  return (
    (turn.role === 'user' || turn.role === 'assistant') &&
    typeof turn.content === 'string'
  )
}

const parseBody = (raw: unknown): RequestBody | null => {
  if (!raw || typeof raw !== 'object') return null
  const body = raw as Record<string, unknown>
  if (!isAiFeature(body.feature)) return null
  if (typeof body.title !== 'string' || !body.title.trim()) return null
  if (typeof body.article !== 'string' || !body.article.trim()) return null

  const question =
    typeof body.question === 'string' ? body.question.trim() : undefined
  if (body.feature === 'ask' && (!question || question.length === 0)) {
    return null
  }
  if (question && question.length > MAX_QUESTION_CHARS) return null

  const history: ChatTurn[] = Array.isArray(body.history)
    ? body.history.filter(isChatTurn).slice(-MAX_HISTORY_TURNS)
    : []

  return {
    feature: body.feature,
    title: body.title,
    article: body.article,
    question,
    history,
  }
}

const encodeSseEvent = (event: string, data: unknown): Uint8Array => {
  const payload =
    typeof data === 'string' ? data : JSON.stringify(data ?? null)
  return new TextEncoder().encode(
    `event: ${event}\ndata: ${payload.replace(/\n/g, '\\n')}\n\n`
  )
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  if (!checkRateLimit(ip)) {
    return jsonError('Rate limit exceeded. Please try again in a few minutes.', 429)
  }

  let rawBody: unknown
  try {
    rawBody = await req.json()
  } catch {
    return jsonError('Invalid JSON body.', 400)
  }

  const body = parseBody(rawBody)
  if (!body) {
    return jsonError('Invalid request payload.', 400)
  }

  let prompt: string
  try {
    prompt = buildPrompt(body.feature, {
      title: body.title,
      article: body.article,
      question: body.question,
      history: body.history,
    })
  } catch (err) {
    return jsonError(
      err instanceof Error ? err.message : 'Failed to build prompt.',
      400
    )
  }

  const abortController = new AbortController()
  req.signal.addEventListener('abort', () => abortController.abort())

  let modelStream: ReadableStream<string>
  try {
    modelStream = await streamGenerate(prompt, abortController.signal)
  } catch (err) {
    const raw = err instanceof Error ? err.message : ''
    const statusMatch = raw.match(/\[(\d{3})\s/)
    const upstreamStatus = statusMatch ? Number(statusMatch[1]) : 0

    if (upstreamStatus === 429 || upstreamStatus === 503) {
      return jsonError(
        'The AI service is temporarily overloaded. Please try again in a few seconds.',
        503
      )
    }
    if (upstreamStatus === 401 || upstreamStatus === 403) {
      return jsonError(
        'The AI service rejected the request. Check the server API key configuration.',
        502
      )
    }
    return jsonError(
      raw || 'Failed to reach the AI provider.',
      upstreamStatus >= 400 && upstreamStatus < 600 ? upstreamStatus : 500
    )
  }

  const sseStream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const reader = modelStream.getReader()
      try {
        while (true) {
          const { value, done } = await reader.read()
          if (done) break
          if (value) controller.enqueue(encodeSseEvent('token', value))
        }
        controller.enqueue(encodeSseEvent('done', ''))
        controller.close()
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Streaming failed.'
        controller.enqueue(encodeSseEvent('error', message))
        controller.close()
      }
    },
    cancel() {
      abortController.abort()
    },
  })

  return new Response(sseStream, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  })
}
