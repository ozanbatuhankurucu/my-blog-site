import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import { getPostMetadata } from "../../../components/utils"
import moment from "moment"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Tag } from "../../../components/Tag"

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
  const content = fs.readFileSync(file, "utf8")
  const matterResult = matter(content)
  return matterResult
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
  const { title, img, description } = post.data

  return {
    title,
    description,
    openGraph: {
      title,
      description: description,
      url: `https://www.ozanbatuhankurucu.com/posts/${slug}`,
      type: "article",
      siteName: "Ozan Batuhan Kurucu Blog",
      images: {
        url: `https://www.ozanbatuhankurucu.com${img}`,
        width: 1200,
        height: 630,
        alt: `${title} Image`
      }
    }
  }
}

const PostPage = ({ params }: Props) => {
  const slug = params.slug
  const post = getPostContent(slug)
  const readingTime = calculateReadingTime(post.content)

  return (
    <section className="blog-template">
      <div className="container max-w-[800px]">
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
          <div className="flex items-center gap-3 text-text-muted text-sm">
            <time dateTime={post.data.date}>
              {moment(post.data.date).format("MMMM D, YYYY")}
            </time>
            <span className="text-border-default">•</span>
            <span>{readingTime} min read</span>
          </div>
        </header>

        {/* Article content */}
        <article className="prose-custom">
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
