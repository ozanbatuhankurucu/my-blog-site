import fs from 'fs'
import matter from 'gray-matter'
import { PostMetadata, PostSearchRecord } from './types'

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
