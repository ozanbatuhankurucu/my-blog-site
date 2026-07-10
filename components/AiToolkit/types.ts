import type { AiFeature, ChatTurn } from '../../lib/ai/prompts'

export type { AiFeature, ChatTurn }

export interface AskMessage extends ChatTurn {
  id: string
}

export interface TabDefinition {
  id: AiFeature
  label: string
}

export interface AiToolkitProps {
  title: string
  article: string
  isOpen: boolean
  onClose: () => void
}
