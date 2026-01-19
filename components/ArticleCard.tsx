'use client'

import moment from 'moment'
import Link from 'next/link'
import { FC } from 'react'
import { Tag } from './Tag'
import { PostMetadata } from './types'

interface ArticleCardProps extends Pick<PostMetadata, 'date' | 'title' | 'slug' | 'category' | 'description'> {
  // Inherits date, title, slug, category, description from PostMetadata
}

export const ArticleCard: FC<ArticleCardProps> = ({
  date,
  title,
  slug,
  category,
  description,
}) => {
  // Calculate reading time estimate (rough estimate based on title length)
  const readingTime = Math.max(3, Math.ceil(title.length / 10))

  return (
    <Link href={`/posts/${slug}`} className="group block">
      <article
        className="
          h-full p-6 rounded-lg
          bg-bg-elevated border border-border-subtle
          transition-all duration-base ease-out-custom
          hover:border-border-default hover:-translate-y-0.5
          focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-bg-base
        "
      >
        {/* Category tag */}
        {category && (
          <div className="mb-4">
            <Tag variant="default" size="sm">
              {category}
            </Tag>
          </div>
        )}

        {/* Title */}
        <h3
          className="
            font-mono text-xl font-medium text-text-primary
            line-clamp-2 mb-3
            group-hover:text-accent transition-colors duration-fast
          "
        >
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-text-secondary text-sm line-clamp-2 mb-4">
            {description}
          </p>
        )}

        {/* Metadata */}
        <div className="flex items-center gap-2 text-text-muted text-xs">
          <time dateTime={date}>
            {moment(date).format('MMM D, YYYY')}
          </time>
          <span className="text-border-default">•</span>
          <span>{readingTime} min read</span>
        </div>
      </article>
    </Link>
  )
}
