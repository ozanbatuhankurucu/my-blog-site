import type { AiFeature, ChatTurn } from '../../lib/ai/prompts'
import type { PostLocale } from '../types'

export type { AiFeature, ChatTurn }

export interface AskMessage extends ChatTurn {
  id: string
}

export interface TabDefinition {
  id: AiFeature
  label: string
}

export interface AiToolkitProps {
  slug: string
  articleRevision: string
  locale: PostLocale
  isOpen: boolean
  onClose: () => void
}
