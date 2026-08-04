import { createHash } from 'crypto'
import { NextRequest } from 'next/server'
import {
  buildPrompt,
  isAiFeature,
  isAiLocale,
  type AiFeature,
  type AiLocale,
  type ChatTurn,
} from '../../../lib/ai/prompts'
import {
  generate,
  isGeminiConfigured,
} from '../../../lib/ai/gemini'
import { buildLocalResponse } from '../../../lib/ai/article-analysis'
import { getPostContent } from '../../../components/utils'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
// Hint for hosts that respect Next.js maxDuration (Vercel today, and
// increasingly Amplify). Gemini Flash usually replies in 3–15s but larger
// articles can push toward 30s.
export const maxDuration = 60

interface RequestBody {
  feature: AiFeature
  slug: string
  locale: AiLocale
  question?: string
  history?: ChatTurn[]
}

const MAX_QUESTION_CHARS = 500
const MAX_HISTORY_TURNS = 6
const MAX_HISTORY_MESSAGE_CHARS = 2_000
const MAX_REQUEST_BYTES = 32_000

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 10
const rateLimitStore = new Map<string, number[]>()

type AiSource = 'gemini' | 'local'

interface AiResponse {
  text: string
  source: AiSource
}

interface CacheEntry extends AiResponse {
  expiresAt: number
}

const CACHE_VERSION = 'v2'
const MAX_CACHE_ENTRIES = 250
const GEMINI_CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000
const LOCAL_CACHE_TTL_MS = 60 * 60 * 1000
const GEMINI_COOLDOWN_MS = 15 * 60 * 1000
const responseCache = new Map<string, CacheEntry>()
const inFlightRequests = new Map<string, Promise<AiResponse>>()
let geminiUnavailableUntil = 0

const OUTPUT_TOKEN_LIMITS: Record<AiFeature, number> = {
  summary: 512,
  keyPoints: 768,
  ask: 1024,
  explain: 1536,
}

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

const isSameOrigin = (req: NextRequest): boolean => {
  const origin = req.headers.get('origin')
  const host = req.headers.get('host')
  if (!origin || !host) return true

  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
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
    typeof turn.content === 'string' &&
    turn.content.length <= MAX_HISTORY_MESSAGE_CHARS
  )
}

const parseBody = (raw: unknown): RequestBody | null => {
  if (!raw || typeof raw !== 'object') return null
  const body = raw as Record<string, unknown>
  if (!isAiFeature(body.feature)) return null
  if (
    typeof body.slug !== 'string' ||
    !/^[a-z0-9-]+$/.test(body.slug) ||
    body.slug.length > 150
  ) {
    return null
  }

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
    slug: body.slug,
    locale: isAiLocale(body.locale) ? body.locale : 'en',
    question,
    history,
  }
}

const getCachedResponse = (key: string): AiResponse | null => {
  const cached = responseCache.get(key)
  if (!cached) return null
  if (cached.expiresAt <= Date.now()) {
    responseCache.delete(key)
    return null
  }

  responseCache.delete(key)
  responseCache.set(key, cached)
  return { text: cached.text, source: cached.source }
}

const setCachedResponse = (key: string, response: AiResponse): void => {
  const ttl =
    response.source === 'gemini' ? GEMINI_CACHE_TTL_MS : LOCAL_CACHE_TTL_MS
  responseCache.set(key, {
    ...response,
    expiresAt: Date.now() + ttl,
  })

  while (responseCache.size > MAX_CACHE_ENTRIES) {
    const oldestKey = responseCache.keys().next().value as string | undefined
    if (!oldestKey) break
    responseCache.delete(oldestKey)
  }
}

const createCacheKey = (prompt: string): string =>
  createHash('sha256')
    .update(`${CACHE_VERSION}:${prompt}`)
    .digest('hex')

const getErrorStatus = (error: unknown): number | null => {
  if (!error || typeof error !== 'object') return null
  const record = error as Record<string, unknown>
  if (typeof record.status === 'number') return record.status
  const message = typeof record.message === 'string' ? record.message : ''
  const match = message.match(/\[(\d{3})\s/)
  return match ? Number(match[1]) : null
}

const createResponse = (result: AiResponse): Response =>
  new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'private, no-store',
      'X-AI-Source': result.source,
    },
  })

export async function POST(req: NextRequest) {
  if (!isSameOrigin(req)) {
    return jsonError('Cross-origin requests are not allowed.', 403)
  }

  const contentLength = Number(req.headers.get('content-length') ?? 0)
  if (contentLength > MAX_REQUEST_BYTES) {
    return jsonError('Request payload is too large.', 413)
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

  const post = getPostContent(body.slug, body.locale)
  if (!post) {
    return jsonError('Article not found.', 404)
  }

  let prompt: string
  try {
    prompt = buildPrompt(body.feature, {
      title: post.data.title,
      article: post.content,
      locale: body.locale,
      question: body.question,
      history: body.history,
    })
  } catch (err) {
    return jsonError(
      err instanceof Error ? err.message : 'Failed to build prompt.',
      400
    )
  }

  const cacheKey = createCacheKey(prompt)
  const cached = getCachedResponse(cacheKey)
  if (cached) return createResponse(cached)

  const existingRequest = inFlightRequests.get(cacheKey)
  if (existingRequest) {
    return createResponse(await existingRequest)
  }

  const canUseGemini =
    isGeminiConfigured() && Date.now() >= geminiUnavailableUntil
  const canCallGemini =
    canUseGemini && checkRateLimit(getClientIp(req))

  const request = (async (): Promise<AiResponse> => {
    if (canCallGemini) {
      try {
        const text = await generate(
          prompt,
          undefined,
          OUTPUT_TOKEN_LIMITS[body.feature]
        )
        return { text, source: 'gemini' }
      } catch (error) {
        geminiUnavailableUntil = Date.now() + GEMINI_COOLDOWN_MS
        const status = getErrorStatus(error)
        console.warn(
          `[ai] Gemini unavailable${status ? ` (${status})` : ''}; using local article analysis.`
        )
      }
    }

    return {
      text: buildLocalResponse({
        feature: body.feature,
        article: post.content,
        locale: body.locale,
        question: body.question,
      }),
      source: 'local',
    }
  })()

  inFlightRequests.set(cacheKey, request)
  try {
    const result = await request
    setCachedResponse(cacheKey, result)
    return createResponse(result)
  } finally {
    inFlightRequests.delete(cacheKey)
  }
}
