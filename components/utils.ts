import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import {
  CategoryType,
  PostContent,
  PostLocale,
  PostMetadata,
  PostSearchRecord,
  TocHeading
} from './types'

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts')
const POST_SLUG_PATTERN = /^[a-z0-9-]+$/

const getLocaleDirectory = (locale: PostLocale): string =>
  locale === 'en' ? POSTS_DIRECTORY : path.join(POSTS_DIRECTORY, locale)

const getPostFilePath = (slug: string, locale: PostLocale): string =>
  path.join(getLocaleDirectory(locale), `${slug}.md`)

const getMarkdownFiles = (locale: PostLocale): string[] => {
  const directory = getLocaleDirectory(locale)
  if (!fs.existsSync(directory)) return []

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name)
}

const getAvailableLocales = (slug: string): PostLocale[] => {
  const locales: PostLocale[] = ['en']
  if (fs.existsSync(getPostFilePath(slug, 'tr'))) locales.push('tr')
  return locales
}

const getRequiredString = (
  data: Record<string, unknown>,
  field: string,
  filePath: string
): string => {
  const value = data[field]
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`Missing required "${field}" frontmatter in ${filePath}`)
  }
  return value
}

export const getPostContent = (
  slug: string,
  locale: PostLocale = 'en'
): PostContent | null => {
  if (!POST_SLUG_PATTERN.test(slug)) return null

  const englishPath = getPostFilePath(slug, 'en')
  const localizedPath = getPostFilePath(slug, locale)
  if (!fs.existsSync(englishPath) || !fs.existsSync(localizedPath)) return null

  const englishSource = fs.readFileSync(englishPath, 'utf8')
  const englishPost = matter(englishSource)
  const englishData = englishPost.data as Record<string, unknown>
  const englishTitle = getRequiredString(englishData, 'title', englishPath)
  const englishDate = getRequiredString(englishData, 'date', englishPath)
  const englishImage = getRequiredString(englishData, 'img', englishPath)
  const englishCategory = getRequiredString(
    englishData,
    'category',
    englishPath
  ) as CategoryType

  if (locale === 'en') {
    return {
      data: {
        title: englishTitle,
        date: englishDate,
        img: englishImage,
        category: englishCategory,
        description: getRequiredString(
          englishData,
          'description',
          englishPath
        ),
        slug,
        locale,
        availableLocales: getAvailableLocales(slug)
      },
      content: englishPost.content,
      rawContent: englishSource
    }
  }

  const localizedSource = fs.readFileSync(localizedPath, 'utf8')
  const localizedPost = matter(localizedSource)
  const localizedData = localizedPost.data as Record<string, unknown>

  return {
    data: {
      title: getRequiredString(localizedData, 'title', localizedPath),
      date: englishDate,
      img: englishImage,
      category: englishCategory,
      description: getRequiredString(
        localizedData,
        'description',
        localizedPath
      ),
      slug,
      locale,
      availableLocales: getAvailableLocales(slug)
    },
    content: localizedPost.content,
    rawContent: localizedSource
  }
}

export const getPostMetadata = (
  locale: PostLocale = 'en'
): PostMetadata[] =>
  getMarkdownFiles(locale).map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const post = getPostContent(slug, locale)
    if (!post) {
      throw new Error(
        `Localized post "${fileName}" does not have a matching English source`
      )
    }
    return post.data
  })

export const hasPostTranslation = (
  slug: string,
  locale: PostLocale
): boolean => {
  if (!POST_SLUG_PATTERN.test(slug)) return false
  return fs.existsSync(getPostFilePath(slug, locale))
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
export const slugifyHeading = (source: string): string =>
  source
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ðÐ]/g, 'd')
    .replace(/[ÈÉÊËéèêë]/g, 'e')
    .replace(/[ÏïÎîÍíÌìİı]/g, 'i')
    .replace(/[Ññ]/g, 'n')
    .replace(/[øØœŒÕõÔôÓóÒòÖö]/g, 'o')
    .replace(/[ÜüÛûÚúÙù]/g, 'u')
    .replace(/[ŸÿÝý]/g, 'y')
    .replace(/[Ğğ]/g, 'g')
    .replace(/[Şş]/g, 's')
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
  const markdownArticles = getMarkdownFiles('en')

  return markdownArticles.map((fileName) => {
    const fileContents = fs.readFileSync(
      path.join(POSTS_DIRECTORY, fileName),
      'utf8'
    )
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
