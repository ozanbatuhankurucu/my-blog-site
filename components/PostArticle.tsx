import { createHash } from 'crypto'
import Markdown from 'markdown-to-jsx'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getArticleMessages,
  getCategoryLabel,
  getPostPath,
  POST_LOCALE_CONFIG
} from '../lib/article-localization'
import { SITE_CONFIG, SITE_URL } from '../lib/constants'
import type { PostLocale } from './types'
import {
  extractTocHeadings,
  getPostContent,
  slugifyHeading
} from './utils'
import AiToolkitLauncher from './AiToolkit/AiToolkitLauncher'
import DownloadArticleButton from './DownloadArticleButton'
import { Tag } from './Tag'
import TableOfContents from './TableOfContents'

const DynamicPreBlock = dynamic(() => import('./PreBlock'), {
  ssr: false
})

interface PostArticleProps {
  slug: string
  locale: PostLocale
}

const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

const formatPostDate = (date: string, locale: PostLocale): string =>
  new Intl.DateTimeFormat(POST_LOCALE_CONFIG[locale].languageTag, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${date}T00:00:00Z`))

export const generatePostMetadata = (
  slug: string,
  locale: PostLocale
): Metadata => {
  const post = getPostContent(slug, locale)
  if (!post) notFound()

  const postPath = getPostPath(slug, locale)
  const postUrl = `${SITE_URL}${postPath}`
  const hasTurkishTranslation = post.data.availableLocales.includes('tr')
  const languageAlternates: Record<string, string> = {
    'en-US': `${SITE_URL}${getPostPath(slug, 'en')}`,
    'x-default': `${SITE_URL}${getPostPath(slug, 'en')}`
  }

  if (hasTurkishTranslation) {
    languageAlternates['tr-TR'] = `${SITE_URL}${getPostPath(slug, 'tr')}`
  }

  return {
    title: post.data.title,
    description: post.data.description,
    alternates: {
      canonical: postUrl,
      languages: languageAlternates
    },
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      url: postUrl,
      type: 'article',
      locale: POST_LOCALE_CONFIG[locale].openGraphLocale,
      alternateLocale: hasTurkishTranslation
        ? [
            POST_LOCALE_CONFIG[locale === 'en' ? 'tr' : 'en'].openGraphLocale
          ]
        : undefined,
      siteName: `${SITE_CONFIG.name} Blog`,
      publishedTime: post.data.date,
      authors: [SITE_CONFIG.name],
      images: {
        url: post.data.img,
        width: 1200,
        height: 630,
        alt: post.data.title
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: post.data.title,
      description: post.data.description,
      images: [post.data.img]
    }
  }
}

const PostArticle = ({ slug, locale }: PostArticleProps) => {
  const post = getPostContent(slug, locale)
  if (!post) notFound()

  const messages = getArticleMessages(locale)
  const readingTime = calculateReadingTime(post.content)
  const tocHeadings = extractTocHeadings(post.content)
  const postUrl = `${SITE_URL}${getPostPath(slug, locale)}`
  const articleRevision = createHash('sha256')
    .update(post.content)
    .digest('hex')
    .slice(0, 12)

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.data.title,
    description: post.data.description,
    image: `${SITE_URL}${post.data.img}`,
    datePublished: post.data.date,
    inLanguage: POST_LOCALE_CONFIG[locale].languageTag,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.name,
      url: SITE_URL
    },
    publisher: {
      '@type': 'Person',
      name: SITE_CONFIG.name,
      url: SITE_URL
    },
    url: postUrl,
    mainEntityOfPage: postUrl
  }

  return (
    <section
      className="blog-template"
      lang={locale}
      data-article-locale={locale}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <div className="w-full max-w-[800px] mx-auto px-4 md:px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors duration-fast group"
          >
            <span className="transition-transform duration-fast group-hover:-translate-x-1">
              ←
            </span>
            {messages.backToPosts}
          </Link>

          <nav
            aria-label={messages.languageLabel}
            className="inline-flex items-center rounded-md border border-border-subtle bg-bg-surface p-1"
          >
            {post.data.availableLocales.map((availableLocale) => {
              const isCurrent = availableLocale === locale
              const label =
                availableLocale === 'en' ? messages.english : messages.turkish

              return (
                <Link
                  key={availableLocale}
                  href={getPostPath(slug, availableLocale)}
                  hrefLang={
                    POST_LOCALE_CONFIG[availableLocale].languageTag
                  }
                  aria-current={isCurrent ? 'page' : undefined}
                  className={
                    isCurrent
                      ? 'rounded px-2.5 py-1 text-xs font-medium bg-accent-muted text-accent'
                      : 'rounded px-2.5 py-1 text-xs font-medium text-text-muted hover:text-text-primary hover:bg-bg-hover transition-colors duration-fast'
                  }
                >
                  {label}
                </Link>
              )
            })}
          </nav>
        </div>

        <header className="mb-12">
          {post.data.category && (
            <div className="mb-4">
              <Tag variant="default" size="sm">
                {getCategoryLabel(post.data.category, locale)}
              </Tag>
            </div>
          )}

          <h1 className="font-mono text-3xl md:text-4xl font-medium text-text-primary mb-4">
            {post.data.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-3 text-text-muted text-sm">
            <div className="flex flex-wrap items-center gap-3">
              <time dateTime={post.data.date}>
                {formatPostDate(post.data.date, locale)}
              </time>
              <span className="text-border-default">•</span>
              <span>
                {readingTime} {messages.minRead}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <AiToolkitLauncher
                slug={slug}
                articleRevision={articleRevision}
                locale={locale}
              />
              <DownloadArticleButton
                content={post.content}
                filename={`${slug}.${locale}.md`}
                locale={locale}
              />
            </div>
          </div>
        </header>

        <TableOfContents headings={tocHeadings} locale={locale} />

        <article id="article-content" className="prose-custom">
          <Markdown
            options={{
              slugify: slugifyHeading,
              overrides: {
                pre: DynamicPreBlock
              }
            }}
          >
            {post.content}
          </Markdown>
        </article>

        <footer className="mt-16 pt-8 border-t border-border-subtle">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-fast group"
          >
            <span className="transition-transform duration-fast group-hover:-translate-x-1">
              ←
            </span>
            {messages.backToAllPosts}
          </Link>
        </footer>
      </div>
    </section>
  )
}

export default PostArticle

