import { NextRequest } from 'next/server'
import {
  buildPrompt,
  isAiFeature,
  type AiFeature,
  type ChatTurn,
} from '../../../lib/ai/prompts'
import { generate } from '../../../lib/ai/gemini'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
// Hint for hosts that respect Next.js maxDuration (Vercel today, and
// increasingly Amplify). Gemini Flash usually replies in 3–15s but larger
// articles can push toward 30s.
export const maxDuration = 60

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

  try {
    const text = await generate(prompt, abortController.signal)
    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') {
      return jsonError('Request aborted.', 499)
    }

    const raw = err instanceof Error ? err.message : ''
    const statusMatch = raw.match(/\[(\d{3})\s/)
    const upstreamStatus = statusMatch ? Number(statusMatch[1]) : 0

    if (upstreamStatus === 429 || upstreamStatus === 503) {
      return jsonError(
        'The AI service is temporarily overloaded or the free quota is exhausted. Please try again in a few minutes.',
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
}
