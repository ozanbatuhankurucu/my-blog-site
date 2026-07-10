'use client'

import { FC, useState } from 'react'
import cx from 'classnames'
import { LuCheck, LuCopy, LuRefreshCw, LuSquare } from 'react-icons/lu'

interface ResultToolbarProps {
  onRegenerate: () => void
  onCopy?: () => void
  onStop?: () => void
  isStreaming: boolean
  canCopy: boolean
  canRegenerate: boolean
  textToCopy: string
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
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
      onCopy?.()
    } catch (err) {
      console.error('Failed to copy AI response:', err)
    }
  }

  return (
    <div className="flex items-center justify-end gap-1">
      {isStreaming && onStop && (
        <button type="button" onClick={onStop} className={cx(buttonBase)}>
          <LuSquare size={14} />
          <span>Stop</span>
        </button>
      )}
      <button
        type="button"
        onClick={onRegenerate}
        disabled={isStreaming || !canRegenerate}
        className={cx(buttonBase)}
        aria-label="Regenerate response"
      >
        <LuRefreshCw size={14} />
        <span>Regenerate</span>
      </button>
      <button
        type="button"
        onClick={handleCopy}
        disabled={!canCopy}
        className={cx(buttonBase)}
        aria-label={copied ? 'Copied!' : 'Copy response'}
      >
        {copied ? (
          <>
            <LuCheck size={14} className="text-success" />
            <span className="text-success">Copied!</span>
          </>
        ) : (
          <>
            <LuCopy size={14} />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  )
}

export default ResultToolbar
