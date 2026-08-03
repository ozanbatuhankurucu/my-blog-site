'use client'

import { FC } from 'react'
import { LuSparkles } from 'react-icons/lu'
import MarkdownStream from '../MarkdownStream'
import ResultToolbar from '../ResultToolbar'
import { LoadingHint, ErrorBox, EmptyState } from '../StatusMessages'
import { useAiStream } from '../useAiStream'
import { Button } from '../../Button'
import { getArticleMessages } from '../../../lib/article-localization'
import type { PostLocale } from '../../types'

interface SummaryTabProps {
  title: string
  article: string
  cachedText: string
  onText: (text: string) => void
  locale: PostLocale
}

const SummaryTab: FC<SummaryTabProps> = ({
  title,
  article,
  cachedText,
  onText,
  locale
}) => {
  const { text, status, error, run, cancel } = useAiStream()
  const messages = getArticleMessages(locale).ai.summary

  const currentText = status === 'idle' ? cachedText : text

  const handleRegenerate = () => {
    onText('')
    run({
      feature: 'summary',
      title,
      article,
      locale,
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
        locale={locale}
      />

      {status === 'error' && error ? (
        <ErrorBox message={error} onRetry={handleRegenerate} locale={locale} />
      ) : null}

      {!hasContent && isStreaming && <LoadingHint label={messages.loading} />}

      {!hasContent && !isStreaming && status !== 'error' && (
        <EmptyState
          title={messages.emptyTitle}
          description={messages.emptyDescription}
          action={
            <Button
              size="sm"
              variant="primary"
              onClick={handleRegenerate}
              className="mx-auto"
            >
              <LuSparkles size={14} className="mr-1.5" />
              {messages.action}
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
