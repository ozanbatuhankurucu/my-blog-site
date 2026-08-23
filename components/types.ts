/**
 * Shared TypeScript types for the blog application
 */

export type PostLocale = 'en' | 'tr'

// Blog post categories
export type CategoryType =
  | 'Artificial Intelligence'
  | 'ReactJS'
  | 'NextJS'
  | 'TypeScript'
  | 'JavaScript'
  | 'CSS'
  | 'TailwindCSS'
  | 'HTML'
  | 'Self-improvement'

// Blog post metadata from frontmatter
export interface PostMetadata {
  title: string
  date: string
  category: CategoryType
  img: string
  slug: string
  description?: string
  locale: PostLocale
  availableLocales: PostLocale[]
}

export interface PostContent {
  data: PostMetadata
  content: string
  rawContent: string
}

// Lightweight per-post record used for client-side search
export interface PostSearchRecord {
  slug: string
  title: string
  description: string
  category: CategoryType
  content: string
}

// Project status types
export type ProjectStatus = 'completed' | 'progress' | 'todo'

// Project feature with optional link
export interface ProjectFeature {
  text: string
  link?: string
}

export interface ProjectAction {
  label: string
  href: string
  external?: boolean
}

// Project data structure
export interface Project {
  slug: string
  title: string
  category: string
  description: string
  outcome: string
  githubUrl?: string
  img: string
  imgAlt: string
  imgAspectRatio?: string
  imgFit?: 'cover' | 'contain'
  stack: string[]
  highlights: string[]
  createdAt: string
  status: ProjectStatus
  updatedAt: string
  primaryAction: ProjectAction
  secondaryAction?: ProjectAction
  url?: string
  features?: ProjectFeature[]
  featuresTitle?: string
}

// Timeline item for About page
export interface TimelineItem {
  year: string
  title: string
  company: string
  location?: string
  description: string
  current?: boolean
  milestone?: boolean
  education?: boolean
}

// Tag component variants
export type TagVariant = 'default' | 'outline' | 'status'
export type TagStatus = 'success' | 'warning' | 'error' | 'info'
export type TagSize = 'sm' | 'md'

// Button component variants
export type ButtonVariant = 'primary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

// Table of contents entry extracted from a post's markdown
export interface TocHeading {
  id: string
  text: string
  level: 2 | 3
}
