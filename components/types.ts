/**
 * Shared TypeScript types for the blog application
 */

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
}

// Project status types
export type ProjectStatus = 'completed' | 'progress' | 'todo'

// Project feature with optional link
export interface ProjectFeature {
  text: string
  link?: string
}

// Project data structure
export interface Project {
  title: string
  description: string
  githubUrl: string
  img: string
  stack: string[]
  createdAt: string
  status: ProjectStatus
  updatedAt: string
  url?: string
  features?: ProjectFeature[]
  featuresTitle?: string
  useColumnCount?: boolean
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
