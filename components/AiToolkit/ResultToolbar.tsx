'use client'

import { FC, useState } from 'react'
import cx from 'classnames'
import { LuCheck, LuCopy, LuRefreshCw, LuSquare } from 'react-icons/lu'
import { getArticleMessages } from '../../lib/article-localization'
import type { PostLocale } from '../types'

interface ResultToolbarProps {
  onRegenerate: () => void
  onCopy?: () => void
  onStop?: () => void
  isStreaming: boolean
  canCopy: boolean
  canRegenerate: boolean
  textToCopy: string
  locale?: PostLocale
}

const buttonBase =
  'inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium ' +
  'text-text-muted hover:text-text-primary ' +
  'bg-transparent hover:bg-bg-hover ' +
  'transition-all duration-fast ' +
  'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-elevated ' +
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-text-muted'

const ResultToolbar: FC<ResultToolbarProps> = ({
  onRegenerate,
  onCopy,
  onStop,
  isStreaming,
  canCopy,
  canRegenerate,
  textToCopy,
  locale = 'en'
}) => {
  const [copied, setCopied] = useState(false)
  const messages = getArticleMessages(locale).ai.toolbar

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
      onCopy?.()
    } catch (err) {
      console.error(messages.copyError, err)
    }
  }

  return (
    <div className="flex items-center justify-end gap-1">
      {isStreaming && onStop && (
        <button type="button" onClick={onStop} className={cx(buttonBase)}>
          <LuSquare size={14} />
          <span>{messages.stop}</span>
        </button>
      )}
      <button
        type="button"
        onClick={onRegenerate}
        disabled={isStreaming || !canRegenerate}
        className={cx(buttonBase)}
        aria-label={messages.regenerateAria}
      >
        <LuRefreshCw size={14} />
        <span>{messages.regenerate}</span>
      </button>
      <button
        type="button"
        onClick={handleCopy}
        disabled={!canCopy}
        className={cx(buttonBase)}
        aria-label={copied ? messages.copied : messages.copyAria}
      >
        {copied ? (
          <>
            <LuCheck size={14} className="text-success" />
            <span className="text-success">{messages.copied}</span>
          </>
        ) : (
          <>
            <LuCopy size={14} />
            <span>{messages.copy}</span>
          </>
        )}
      </button>
    </div>
  )
}

export default ResultToolbar
