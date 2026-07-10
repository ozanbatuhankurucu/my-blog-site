'use client'

import { FC, useEffect } from 'react'
import { LuSparkles } from 'react-icons/lu'
import MarkdownStream from '../MarkdownStream'
import ResultToolbar from '../ResultToolbar'
import { LoadingHint, ErrorBox, EmptyState } from '../StatusMessages'
import { useAiStream } from '../useAiStream'
import { Button } from '../../Button'

interface SummaryTabProps {
  title: string
  article: string
  cachedText: string
  onText: (text: string) => void
}

const SummaryTab: FC<SummaryTabProps> = ({
  title,
  article,
  cachedText,
  onText,
}) => {
  const { text, status, error, run, cancel } = useAiStream()

  const currentText = status === 'idle' ? cachedText : text

  useEffect(() => {
    onText(text)
  }, [text, onText])

  const handleRegenerate = () => {
    onText('')
    run({ feature: 'summary', title, article })
  }

  const isStreaming = status === 'streaming'
  const hasContent = currentText.length > 0

  return (
    <div className="flex flex-col gap-3">
      <ResultToolbar
        onRegenerate={handleRegenerate}
        onStop={cancel}
        isStreaming={isStreaming}
        canCopy={hasContent && !isStreaming}
        canRegenerate={!isStreaming}
        textToCopy={currentText}
      />

      {status === 'error' && error ? (
        <ErrorBox message={error} onRetry={handleRegenerate} />
      ) : null}

      {!hasContent && isStreaming && <LoadingHint label="Summarizing article..." />}

      {!hasContent && !isStreaming && status !== 'error' && (
        <EmptyState
          title="No summary yet"
          description="Generate a quick 4–6 sentence recap of this article."
          action={
            <Button
              size="sm"
              variant="primary"
              onClick={handleRegenerate}
              className="mx-auto"
            >
              <LuSparkles size={14} className="mr-1.5" />
              Summarize
            </Button>
          }
        />
      )}

      {hasContent && (
        <MarkdownStream text={currentText} isStreaming={isStreaming} />
      )}
    </div>
  )
}

export default SummaryTab
