import type { PulseLocale } from '../locales'
import { deMessages } from './de'
import { enMessages } from './en'
import { esMessages } from './es'
import { frMessages } from './fr'
import { hiMessages } from './hi'
import { jaMessages } from './ja'
import { koMessages } from './ko'
import { ptBRMessages } from './pt-BR'
import { ruMessages } from './ru'
import { trMessages } from './tr'
import type { PulseMessages } from './types'
import { viMessages } from './vi'
import { zhHansMessages } from './zh-Hans'

const messages: Record<PulseLocale, PulseMessages> = {
  en: enMessages,
  tr: trMessages,
  de: deMessages,
  'zh-Hans': zhHansMessages,
  ja: jaMessages,
  'pt-BR': ptBRMessages,
  ko: koMessages,
  hi: hiMessages,
  ru: ruMessages,
  vi: viMessages,
  fr: frMessages,
  es: esMessages,
}

export function getPulseMessages(locale: PulseLocale): PulseMessages {
  return messages[locale]
}

export function assertPulseMessagesComplete(locale: PulseLocale): void {
  const catalog = messages[locale]
  if (!catalog?.landing?.metaTitle || !catalog?.support?.metaTitle || !catalog?.privacy?.metaTitle) {
    throw new Error(`Incomplete Pulse messages for locale: ${locale}`)
  }
}

export type { PulseMessages }
