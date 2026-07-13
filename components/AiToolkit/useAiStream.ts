'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { AiFeature, ChatTurn } from '../../lib/ai/prompts'

export type AiStreamStatus = 'idle' | 'streaming' | 'done' | 'error'

export interface RunOptions {
  feature: AiFeature
  title: string
  article: string
  question?: string
  history?: ChatTurn[]
  onToken?: (chunk: string, fullText: string) => void
  onDone?: (fullText: string) => void
}

interface UseAiStreamReturn {
  text: string
  status: AiStreamStatus
  error: string | null
  run: (options: RunOptions) => Promise<void>
  cancel: () => void
  reset: () => void
}

/**
 * Client hook that POSTs to `/api/ai` and returns the generated text. The
 * server responds with a single JSON body (`{ text }`) rather than SSE so
 * the request works reliably on hosts that buffer responses (AWS Amplify's
 * Lambda + CloudFront setup, corporate proxies, etc.). The hook keeps the
 * `streaming` status name and `onToken` callback for API compatibility with
 * the earlier streaming version; `onToken` simply fires once with the full
 * result before `onDone`.
 */
export const useAiStream = (): UseAiStreamReturn => {
  const [text, setText] = useState('')
  const [status, setStatus] = useState<AiStreamStatus>('idle')
  const [error, setError] = useState<string | null>(null)
  const controllerRef = useRef<AbortController | null>(null)

  const cancel = useCallback(() => {
    controllerRef.current?.abort()
    controllerRef.current = null
  }, [])

  const reset = useCallback(() => {
    cancel()
    setText('')
    setStatus('idle')
    setError(null)
  }, [cancel])

  useEffect(() => {
    return () => {
      controllerRef.current?.abort()
    }
  }, [])

  const run = useCallback(async (options: RunOptions) => {
    controllerRef.current?.abort()
    const controller = new AbortController()
    controllerRef.current = controller

    setText('')
    setError(null)
    setStatus('streaming')

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          feature: options.feature,
          title: options.title,
          article: options.article,
          question: options.question,
          history: options.history ?? [],
        }),
      })

      let payload: { text?: string; error?: string } = {}
      try {
        payload = await response.json()
      } catch {
        // response was not JSON (e.g. an upstream gateway error page)
      }

      if (!response.ok) {
        throw new Error(
          payload.error || `Request failed with status ${response.status}.`
        )
      }

      const fullText = typeof payload.text === 'string' ? payload.text : ''
      setText(fullText)
      setStatus('done')
      options.onToken?.(fullText, fullText)
      options.onDone?.(fullText)
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        setStatus('idle')
        return
      }
      const message =
        err instanceof Error ? err.message : 'Unexpected error.'
      setError(message)
      setStatus('error')
    } finally {
      if (controllerRef.current === controller) {
        controllerRef.current = null
      }
    }
  }, [])

  return { text, status, error, run, cancel, reset }
}
