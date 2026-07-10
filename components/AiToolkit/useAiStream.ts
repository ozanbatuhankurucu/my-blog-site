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

const parseSseChunk = (
  buffer: string
): { events: Array<{ event: string; data: string }>; remainder: string } => {
  const events: Array<{ event: string; data: string }> = []
  const parts = buffer.split('\n\n')
  const remainder = parts.pop() ?? ''

  for (const raw of parts) {
    if (!raw.trim()) continue
    let event = 'message'
    const dataLines: string[] = []
    for (const line of raw.split('\n')) {
      if (line.startsWith('event:')) event = line.slice(6).trim()
      else if (line.startsWith('data:')) dataLines.push(line.slice(5).trimStart())
    }
    const data = dataLines.join('\n').replace(/\\n/g, '\n')
    events.push({ event, data })
  }

  return { events, remainder }
}

/**
 * Small client hook that POSTs to `/api/ai` and streams SSE tokens back into
 * component state. Cancellation happens through an `AbortController`; the
 * server aborts the model call as soon as the request signal fires.
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

    let fullText = ''

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

      if (!response.ok || !response.body) {
        let message = `Request failed with status ${response.status}.`
        try {
          const data = await response.json()
          if (data?.error) message = data.error
        } catch {
          // ignore
        }
        throw new Error(message)
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let streamError: string | null = null

      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const { events, remainder } = parseSseChunk(buffer)
        buffer = remainder

        for (const { event, data } of events) {
          if (event === 'token') {
            fullText += data
            setText(fullText)
            options.onToken?.(data, fullText)
          } else if (event === 'error') {
            streamError = data || 'Streaming failed.'
          } else if (event === 'done') {
            // handled below when the reader closes
          }
        }
      }

      if (streamError) {
        throw new Error(streamError)
      }

      setStatus('done')
      options.onDone?.(fullText)
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        setStatus('idle')
        return
      }
      const message =
        err instanceof Error ? err.message : 'Unexpected streaming error.'
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
