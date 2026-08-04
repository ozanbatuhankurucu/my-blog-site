import type { AiFeature, AiLocale, ChatTurn } from '../../lib/ai/prompts'

interface CacheInput {
  feature: AiFeature
  slug: string
  articleRevision: string
  locale: AiLocale
  question?: string
  history?: ChatTurn[]
}

interface CacheEntry {
  signature: string
  text: string
  expiresAt: number
  lastAccessedAt: number
}

type CacheStore = Record<string, CacheEntry>

const STORAGE_KEY = 'article-ai-response-cache-v2'
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000
const MAX_CACHE_ENTRIES = 50

const createSignature = (input: CacheInput): string =>
  JSON.stringify({
    feature: input.feature,
    slug: input.slug,
    articleRevision: input.articleRevision,
    locale: input.locale,
    question: input.question?.trim() ?? '',
    history: input.history ?? []
  })

const hash = (value: string): string => {
  let result = 2166136261
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index)
    result = Math.imul(result, 16777619)
  }
  return (result >>> 0).toString(36)
}

const readStore = (): CacheStore => {
  if (typeof window === 'undefined') return {}

  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
    return parsed && typeof parsed === 'object' ? (parsed as CacheStore) : {}
  } catch {
    return {}
  }
}

const writeStore = (store: CacheStore): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
  } catch {
    // Storage may be unavailable in private browsing or disabled by policy.
  }
}

export const getCachedAiResponse = (input: CacheInput): string | null => {
  const signature = createSignature(input)
  const key = hash(signature)
  const store = readStore()
  const entry = store[key]

  if (
    !entry ||
    entry.signature !== signature ||
    entry.expiresAt <= Date.now() ||
    typeof entry.text !== 'string'
  ) {
    if (entry) {
      delete store[key]
      writeStore(store)
    }
    return null
  }

  entry.lastAccessedAt = Date.now()
  writeStore(store)
  return entry.text
}

export const setCachedAiResponse = (
  input: CacheInput,
  text: string
): void => {
  if (!text) return

  const signature = createSignature(input)
  const store = readStore()
  const now = Date.now()
  store[hash(signature)] = {
    signature,
    text,
    expiresAt: now + CACHE_TTL_MS,
    lastAccessedAt: now
  }

  const entries = Object.entries(store).sort(
    ([, a], [, b]) => b.lastAccessedAt - a.lastAccessedAt
  )
  writeStore(Object.fromEntries(entries.slice(0, MAX_CACHE_ENTRIES)))
}
