'use client'

import { FC } from 'react'
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
}

const KeyPointsTab: FC<KeyPointsTabProps> = ({
  title,
  article,
  cachedText,
  onText,
}) => {
  const { text, status, error, run, cancel } = useAiStream()

  const currentText = status === 'idle' ? cachedText : text

  const handleRegenerate = () => {
    onText('')
    run({
      feature: 'keyPoints',
      title,
      article,
      onToken: (_chunk, fullText) => onText(fullText),
      onDone: (fullText) => onText(fullText),
    })
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
          description="Extract the important takeaways from this article."
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
