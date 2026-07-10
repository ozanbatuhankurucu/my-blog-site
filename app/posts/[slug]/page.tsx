import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import { extractTocHeadings, getPostMetadata } from "../../../components/utils"
import moment from "moment"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Tag } from "../../../components/Tag"
import TableOfContents from "../../../components/TableOfContents"
import DownloadArticleButton from "../../../components/DownloadArticleButton"
import AiToolkitLauncher from "../../../components/AiToolkit/AiToolkitLauncher"
import { SITE_CONFIG, SITE_URL } from "../../../lib/constants"

// Use dynamic import to render the component on the client side
const DynamicPreBlock = dynamic(() => import("../../../components/PreBlock"), {
  ssr: false
})

const calculateReadingTime = (text: string) => {
  const wordsPerMinute = 200
  const words = text.split(/\s+/).length
  const readingTime = Math.ceil(words / wordsPerMinute)
  return readingTime
}

const getPostContent = (slug: string) => {
  const folder = "posts/"
  const file = `${folder}${slug}.md`
  const rawContent = fs.readFileSync(file, "utf8")
  const matterResult = matter(rawContent)
  return { ...matterResult, rawContent }
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

type Props = {
  params: { slug: string }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const slug = params.slug
  const post = getPostContent(slug)
  const { title, img, description, date } = post.data
  const postUrl = `${SITE_URL}/posts/${slug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: postUrl,
      type: "article",
      siteName: `${SITE_CONFIG.name} Blog`,
      publishedTime: date,
      authors: [SITE_CONFIG.name],
      images: {
        url: img,
        width: 1200,
        height: 630,
        alt: title,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [img],
    },
    alternates: {
      canonical: postUrl,
    },
  }
}

const PostPage = ({ params }: Props) => {
  const slug = params.slug
  const post = getPostContent(slug)
  const readingTime = calculateReadingTime(post.content)
  const tocHeadings = extractTocHeadings(post.content)

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.data.title,
    description: post.data.description,
    image: `${SITE_URL}${post.data.img}`,
    datePublished: post.data.date,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.name,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: SITE_CONFIG.name,
      url: SITE_URL,
    },
    url: `${SITE_URL}/posts/${slug}`,
    mainEntityOfPage: `${SITE_URL}/posts/${slug}`,
  }

  return (
    <section className="blog-template">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <div className="w-full max-w-[800px] mx-auto px-4 md:px-6">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors duration-fast mb-8 group"
        >
          <span className="transition-transform duration-fast group-hover:-translate-x-1">←</span>
          Back to posts
        </Link>

        {/* Article header */}
        <header className="mb-12">
          {/* Category */}
          {post.data.category && (
            <div className="mb-4">
              <Tag variant="default" size="sm">
                {post.data.category}
              </Tag>
            </div>
          )}

          {/* Title */}
          <h1 className="font-mono text-3xl md:text-4xl font-medium text-text-primary mb-4">
            {post.data.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-between gap-3 text-text-muted text-sm">
            <div className="flex items-center gap-3">
              <time dateTime={post.data.date}>
                {moment(post.data.date).format("MMMM D, YYYY")}
              </time>
              <span className="text-border-default">•</span>
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <AiToolkitLauncher
                title={post.data.title}
                article={post.rawContent}
              />
              <DownloadArticleButton
                content={post.rawContent}
                filename={`${slug}.md`}
              />
            </div>
          </div>
        </header>

        {/* Table of contents (inline on mobile, sticky sidebar on xl+) */}
        <TableOfContents headings={tocHeadings} />

        {/* Article content */}
        <article id="article-content" className="prose-custom">
          <Markdown
            options={{
              overrides: {
                pre: DynamicPreBlock
              }
            }}
          >
            {post.content}
          </Markdown>
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border-subtle">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-fast group"
          >
            <span className="transition-transform duration-fast group-hover:-translate-x-1">←</span>
            Back to all posts
          </Link>
        </footer>
      </div>
    </section>
  )
}

export default PostPage
