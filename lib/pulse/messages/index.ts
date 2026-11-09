import type { PulseLocale } from '../locales'
import { enMessages } from './en'
import { trMessages } from './tr'
import { deMessages } from './de'
import { jaMessages } from './ja'
import { koMessages } from './ko'
import { zhHansMessages } from './zh-Hans'
import { zhHantMessages } from './zh-Hant'
import type { PulseMessages } from './types'

const messages: Record<PulseLocale, PulseMessages> = {
  en: enMessages,
  tr: trMessages,
  de: deMessages,
  ja: jaMessages,
  ko: koMessages,
  'zh-Hans': zhHansMessages,
  'zh-Hant': zhHantMessages,
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
