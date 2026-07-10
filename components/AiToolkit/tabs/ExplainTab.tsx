'use client'

import { FC, useEffect } from 'react'
import { LuBaby } from 'react-icons/lu'
import MarkdownStream from '../MarkdownStream'
import ResultToolbar from '../ResultToolbar'
import { LoadingHint, ErrorBox, EmptyState } from '../StatusMessages'
import { useAiStream } from '../useAiStream'
import { Button } from '../../Button'

interface ExplainTabProps {
  title: string
  article: string
  cachedText: string
  onText: (text: string) => void
}

const ExplainTab: FC<ExplainTabProps> = ({
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
    run({ feature: 'explain', title, article })
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

      {!hasContent && isStreaming && (
        <LoadingHint label="Rewriting for a junior reader..." />
      )}

      {!hasContent && !isStreaming && status !== 'error' && (
        <EmptyState
          title="No explanation yet"
          description="Get a junior-friendly rewrite with analogies and jargon defined."
          action={
            <Button
              size="sm"
              variant="primary"
              onClick={handleRegenerate}
              className="mx-auto"
            >
              <LuBaby size={14} className="mr-1.5" />
              Explain simply
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

export default ExplainTab
