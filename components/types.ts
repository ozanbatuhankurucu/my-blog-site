export type CategoryType =
  | 'Featured Article'
  | 'HTML'
  | 'JavaScript'
  | 'Self-improvement'
  | 'TypeScript'
  | 'NextJS'
  | 'ReactJS'
  | 'CSS'
	| 'TailwindCSS'
export interface PostMetadata {
  title: string
  date: string
  category: CategoryType
  img: string
  slug: string
}
