'use client'

import { FC, memo } from 'react'
import Markdown from 'markdown-to-jsx'
import cx from 'classnames'

interface MarkdownStreamProps {
  text: string
  isStreaming?: boolean
  className?: string
}

/**
 * Renders streaming markdown output using the same `markdown-to-jsx` pipeline
 * as the blog post body so headings, lists, code, and links look consistent
 * with the rest of the article. A blinking caret is appended while the model
 * is still emitting tokens.
 */
const MarkdownStream: FC<MarkdownStreamProps> = ({
  text,
  isStreaming = false,
  className,
}) => {
  const trimmed = text.trimEnd()
  return (
    <div className={cx('ai-toolkit-markdown prose-custom', className)}>
      {trimmed ? (
        <Markdown
          options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
              },
            },
          }}
        >
          {trimmed}
        </Markdown>
      ) : null}
      {isStreaming && (
        <span
          aria-hidden="true"
          className="inline-block w-[2px] h-[1em] align-[-0.1em] ml-0.5 bg-accent animate-pulse"
        />
      )}
    </div>
  )
}

export default memo(MarkdownStream)
