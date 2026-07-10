'use client'

import { FC, useEffect } from 'react'
import { LuListChecks } from 'react-icons/lu'
import MarkdownStream from '../MarkdownStream'
import ResultToolbar from '../ResultToolbar'
import { LoadingHint, ErrorBox, EmptyState } from '../StatusMessages'
import { useAiStream } from '../useAiStream'
import { Button } from '../../Button'

interface KeyPointsTabProps {
  title: string
  article: string
  cachedText: string
  onText: (text: string) => void
  isActive: boolean
}

const KeyPointsTab: FC<KeyPointsTabProps> = ({
  title,
  article,
  cachedText,
  onText,
  isActive,
}) => {
  const { text, status, error, run, cancel } = useAiStream()

  const currentText = status === 'idle' ? cachedText : text

  useEffect(() => {
    onText(text)
  }, [text, onText])

  useEffect(() => {
    if (isActive && !cachedText && status === 'idle') {
      run({ feature: 'keyPoints', title, article })
    }
  }, [isActive, cachedText, status, run, title, article])

  const handleRegenerate = () => {
    onText('')
    run({ feature: 'keyPoints', title, article })
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
        <LoadingHint label="Extracting key points..." />
      )}

      {!hasContent && !isStreaming && status !== 'error' && (
        <EmptyState
          title="No key points yet"
          description="Get the 5–8 most important takeaways from this article."
          action={
            <Button
              size="sm"
              variant="primary"
              onClick={handleRegenerate}
              className="mx-auto"
            >
              <LuListChecks size={14} className="mr-1.5" />
              Extract key points
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

export default KeyPointsTab
