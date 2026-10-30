import type { PulseLocale } from '../locales'
import { enMessages } from './en'
import { idMessages } from './id'
import { msMessages } from './ms'
import { caMessages } from './ca'
import { csMessages } from './cs'
import { daMessages } from './da'
import { deMessages } from './de'
import { esMessages } from './es'
import { frMessages } from './fr'
import { hrMessages } from './hr'
import { itMessages } from './it'
import { ltMessages } from './lt'
import { huMessages } from './hu'
import { nlMessages } from './nl'
import { nbMessages } from './nb'
import { plMessages } from './pl'
import { ptBRMessages } from './pt-BR'
import { ptPTMessages } from './pt-PT'
import { roMessages } from './ro'
import { skMessages } from './sk'
import { slMessages } from './sl'
import { fiMessages } from './fi'
import { svMessages } from './sv'
import { viMessages } from './vi'
import { trMessages } from './tr'
import { elMessages } from './el'
import { bgMessages } from './bg'
import { kkMessages } from './kk'
import { ruMessages } from './ru'
import { ukMessages } from './uk'
import { heMessages } from './he'
import { urMessages } from './ur'
import { arMessages } from './ar'
import { mrMessages } from './mr'
import { hiMessages } from './hi'
import { bnMessages } from './bn'
import { paMessages } from './pa'
import { guMessages } from './gu'
import { orMessages } from './or'
import { taMessages } from './ta'
import { teMessages } from './te'
import { knMessages } from './kn'
import { mlMessages } from './ml'
import { thMessages } from './th'
import { koMessages } from './ko'
import { jaMessages } from './ja'
import { zhHansMessages } from './zh-Hans'
import { zhHantMessages } from './zh-Hant'
import type { PulseMessages } from './types'

const messages: Record<PulseLocale, PulseMessages> = {
  en: enMessages,
  id: idMessages,
  ms: msMessages,
  ca: caMessages,
  cs: csMessages,
  da: daMessages,
  de: deMessages,
  es: esMessages,
  fr: frMessages,
  hr: hrMessages,
  it: itMessages,
  lt: ltMessages,
  hu: huMessages,
  nl: nlMessages,
  nb: nbMessages,
  pl: plMessages,
  'pt-BR': ptBRMessages,
  'pt-PT': ptPTMessages,
  ro: roMessages,
  sk: skMessages,
  sl: slMessages,
  fi: fiMessages,
  sv: svMessages,
  vi: viMessages,
  tr: trMessages,
  el: elMessages,
  bg: bgMessages,
  kk: kkMessages,
  ru: ruMessages,
  uk: ukMessages,
  he: heMessages,
  ur: urMessages,
  ar: arMessages,
  mr: mrMessages,
  hi: hiMessages,
  bn: bnMessages,
  pa: paMessages,
  gu: guMessages,
  or: orMessages,
  ta: taMessages,
  te: teMessages,
  kn: knMessages,
  ml: mlMessages,
  th: thMessages,
  ko: koMessages,
  ja: jaMessages,
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
