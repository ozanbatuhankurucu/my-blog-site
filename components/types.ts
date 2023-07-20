export type CategoryType =
  | 'Featured Article'
  | 'HTML'
  | 'JavaScript'
  | 'Self-improvement'
  | 'TypeScript'
export interface PostMetadata {
  title: string
  date: string
  category: CategoryType
  img: string
  slug: string
}
