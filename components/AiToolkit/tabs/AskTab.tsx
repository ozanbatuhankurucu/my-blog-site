'use client'

import {
  FC,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import cx from 'classnames'
import { LuArrowUp, LuSquare } from 'react-icons/lu'
import MarkdownStream from '../MarkdownStream'
import { ErrorBox } from '../StatusMessages'
import { useAiStream } from '../useAiStream'
import type { AskMessage } from '../types'

interface AskTabProps {
  title: string
  article: string
  messages: AskMessage[]
  onMessagesChange: (messages: AskMessage[]) => void
}

const MAX_QUESTION_CHARS = 500
const MAX_HISTORY_TURNS = 8

const generateId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

const AskTab: FC<AskTabProps> = ({
  title,
  article,
  messages,
  onMessagesChange,
}) => {
  const { text, status, error, run, cancel } = useAiStream()
  const [input, setInput] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isStreaming = status === 'streaming'

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [messages, text])

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`
  }, [input])

  const submit = async (question: string) => {
    if (!question || isStreaming) return

    const userMsg: AskMessage = {
      id: generateId(),
      role: 'user',
      content: question,
    }
    const historySnapshot = [...messages, userMsg]
    onMessagesChange(historySnapshot)
    setInput('')

    const history = messages.slice(-MAX_HISTORY_TURNS).map(({ role, content }) => ({
      role,
      content,
    }))

    let finalText = ''
    await run({
      feature: 'ask',
      title,
      article,
      question,
      history,
      onToken: (_chunk, fullText) => {
        finalText = fullText
      },
      onDone: (fullText) => {
        finalText = fullText
      },
    })

    if (finalText) {
      const assistantMsg: AskMessage = {
        id: generateId(),
        role: 'assistant',
        content: finalText,
      }
      onMessagesChange([...historySnapshot, assistantMsg])
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit(input.trim())
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit(input.trim())
    }
  }

  const handleRetry = () => {
    if (messages.length === 0) return
    const lastUser = [...messages].reverse().find((m) => m.role === 'user')
    if (!lastUser) return
    const trimmed = messages.slice(
      0,
      messages.findIndex((m) => m.id === lastUser.id)
    )
    onMessagesChange(trimmed)
    submit(lastUser.content)
  }

  const showStreamingBubble = isStreaming || (status === 'error' && text.length > 0)

  return (
    <div className="flex flex-col h-full min-h-0">
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto pr-1 -mr-1 space-y-4"
      >
        {messages.length === 0 && !isStreaming && (
          <div className="py-6">
            <p className="font-mono text-sm text-text-primary mb-1">
              Ask anything about this article
            </p>
            <p className="text-sm text-text-muted mb-4">
              Answers are grounded strictly in the article content.
            </p>
            <div className="flex flex-col gap-2">
              {[
                'Give me the TL;DR in one sentence.',
                'What problem does this article solve?',
                'Which part should I read first?',
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => submit(suggestion)}
                  className={cx(
                    'text-left text-sm px-3 py-2 rounded-md',
                    'bg-bg-surface hover:bg-bg-hover',
                    'text-text-secondary hover:text-text-primary',
                    'border border-border-subtle hover:border-border-default',
                    'transition-colors duration-fast',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
                  )}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => {
          const isUser = msg.role === 'user'
          return (
            <div
              key={msg.id}
              className={cx('flex', isUser ? 'justify-end' : 'justify-start')}
            >
              <div
                className={cx(
                  'max-w-[92%] rounded-md px-3 py-2 text-sm',
                  isUser
                    ? 'bg-bg-surface text-text-primary border border-border-subtle'
                    : 'bg-transparent text-text-primary w-full'
                )}
              >
                {isUser ? (
                  <p className="whitespace-pre-wrap break-words">
                    {msg.content}
                  </p>
                ) : (
                  <MarkdownStream text={msg.content} />
                )}
              </div>
            </div>
          )
        })}

        {showStreamingBubble && (
          <div className="flex justify-start">
            <div className="max-w-[92%] w-full rounded-md px-3 py-2 text-sm bg-transparent text-text-primary">
              <MarkdownStream text={text} isStreaming={isStreaming} />
            </div>
          </div>
        )}

        {status === 'error' && error && (
          <ErrorBox message={error} onRetry={handleRetry} />
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-3 pt-3 border-t border-border-subtle"
      >
        <div
          className={cx(
            'flex items-end gap-2 rounded-md border transition-colors duration-fast',
            'bg-bg-surface',
            'border-border-subtle focus-within:border-accent'
          )}
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) =>
              setInput(e.target.value.slice(0, MAX_QUESTION_CHARS))
            }
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Server Components neden daha hızlı?"
            aria-label="Ask a question about the article"
            className={cx(
              'flex-1 resize-none bg-transparent px-3 py-2 text-sm',
              'text-text-primary placeholder:text-text-muted',
              'focus:outline-none'
            )}
            style={{ maxHeight: 160 }}
            disabled={isStreaming}
          />
          {isStreaming ? (
            <button
              type="button"
              onClick={cancel}
              className={cx(
                'flex items-center justify-center w-8 h-8 mr-1 mb-1 rounded-md',
                'bg-bg-hover text-text-primary',
                'hover:bg-bg-elevated transition-colors duration-fast',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
              )}
              aria-label="Stop generating"
            >
              <LuSquare size={14} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim()}
              className={cx(
                'flex items-center justify-center w-8 h-8 mr-1 mb-1 rounded-md',
                'bg-accent text-bg-base',
                'hover:bg-accent-hover transition-colors duration-fast',
                'disabled:opacity-40 disabled:cursor-not-allowed',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated'
              )}
              aria-label="Send question"
            >
              <LuArrowUp size={16} />
            </button>
          )}
        </div>
        <div className="mt-1.5 flex items-center justify-between text-[11px] text-text-muted">
          <span>Enter to send · Shift+Enter for newline</span>
          <span>
            {input.length}/{MAX_QUESTION_CHARS}
          </span>
        </div>
      </form>
    </div>
  )
}

export default AskTab
