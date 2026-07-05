import fs from 'fs'
import matter from 'gray-matter'
import { PostMetadata, PostSearchRecord, TocHeading } from './types'

export const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownArticles = files.filter((file) => file.endsWith('.md'))

  // Get gray-matter data from each file.
  const articles = markdownArticles.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      img: matterResult.data.img,
      category: matterResult.data.category,
      description: matterResult.data.description || '',
      slug: fileName.replace('.md', '')
    }
  })

  return articles
}

// Convert markdown body to plain, lowercased, searchable text.
// Intentionally dependency-free: good enough for substring token matching.
const SEARCH_CONTENT_MAX_CHARS = 2000

const markdownToPlainText = (markdown: string): string =>
  markdown
    // Remove fenced code blocks and their contents
    .replace(/```[\s\S]*?```/g, ' ')
    // Remove inline code
    .replace(/`[^`]*`/g, ' ')
    // Images: ![alt](url) -> alt
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    // Links: [text](url) -> text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    // Reference-style links: [text][ref] -> text
    .replace(/\[([^\]]+)\]\[[^\]]*\]/g, '$1')
    // Raw HTML tags
    .replace(/<[^>]+>/g, ' ')
    // Headings / blockquote / list markers at line starts
    .replace(/^\s{0,3}(#{1,6}\s+|>\s+|[-*+]\s+|\d+\.\s+)/gm, '')
    // Emphasis / bold / strikethrough markers
    .replace(/(\*\*|__|\*|_|~~)/g, '')
    // Horizontal rules
    .replace(/^\s*([-*_])\1{2,}\s*$/gm, ' ')
    // Collapse whitespace
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()

// Mirrors markdown-to-jsx's built-in slugify so the ids we generate for the
// TOC exactly match the ids the renderer sets on <h2>/<h3> elements.
const slugifyHeading = (source: string): string =>
  source
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ðÐ]/g, 'd')
    .replace(/[ÈÉÊËéèêë]/g, 'e')
    .replace(/[ÏïÎîÍíÌì]/g, 'i')
    .replace(/[Ññ]/g, 'n')
    .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
    .replace(/[ÜüÛûÚúÙù]/g, 'u')
    .replace(/[ŸÿÝý]/g, 'y')
    .replace(/[^a-z0-9- ]/gi, '')
    .replace(/ /gi, '-')
    .toLowerCase()

const stripInlineMarkdown = (text: string): string =>
  text
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    .replace(/~~([^~]+)~~/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim()

// Extract H2 and H3 headings from a markdown string for the article TOC.
// The generated id matches markdown-to-jsx's own slugify so hash links resolve.
export const extractTocHeadings = (markdown: string): TocHeading[] => {
  const withoutFencedCode = markdown.replace(/```[\s\S]*?```/g, '')
  const lines = withoutFencedCode.split('\n')
  const headings: TocHeading[] = []

  for (const line of lines) {
    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line)
    if (!match) continue

    const level = match[1].length as 2 | 3
    const rawText = match[2]
    const text = stripInlineMarkdown(rawText)
    if (!text) continue

    headings.push({
      id: slugifyHeading(rawText),
      text,
      level
    })
  }

  return headings
}

export const getPostSearchIndex = (): PostSearchRecord[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownArticles = files.filter((file) => file.endsWith('.md'))

  return markdownArticles.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
    const { data, content } = matter(fileContents)
    const plain = markdownToPlainText(content).slice(0, SEARCH_CONTENT_MAX_CHARS)

    return {
      slug: fileName.replace('.md', ''),
      title: data.title ?? '',
      description: data.description ?? '',
      category: data.category,
      content: plain
    }
  })
}
