import { PULSE_APP_PATH, SITE_URL } from '../constants'

export const PULSE_LOCALES = [
  'en',
  'tr',
  'de',
  'zh-Hans',
  'ja',
  'pt-BR',
  'ko',
  'hi',
  'ru',
  'vi',
  'fr',
  'es',
] as const

export type PulseLocale = (typeof PULSE_LOCALES)[number]

export type PulsePathSuffix = '' | 'support' | 'privacy'

export interface PulseLocaleConfig {
  /** URL path segment; empty for English (unprefixed). */
  pathPrefix: string
  /** BCP 47 language tag for hreflang / HTML lang. */
  languageTag: string
  /** Open Graph locale code. */
  openGraphLocale: string
  /** Native language name shown in the language selector. */
  nativeName: string
  /** Short chip label for compact UI. */
  shortName: string
}

export const PULSE_LOCALE_CONFIG: Record<PulseLocale, PulseLocaleConfig> = {
  en: {
    pathPrefix: '',
    languageTag: 'en-US',
    openGraphLocale: 'en_US',
    nativeName: 'English',
    shortName: 'EN',
  },
  tr: {
    pathPrefix: '/tr',
    languageTag: 'tr-TR',
    openGraphLocale: 'tr_TR',
    nativeName: 'Türkçe',
    shortName: 'TR',
  },
  de: {
    pathPrefix: '/de',
    languageTag: 'de-DE',
    openGraphLocale: 'de_DE',
    nativeName: 'Deutsch',
    shortName: 'DE',
  },
  'zh-Hans': {
    pathPrefix: '/zh-Hans',
    languageTag: 'zh-Hans',
    openGraphLocale: 'zh_CN',
    nativeName: '简体中文',
    shortName: '中文',
  },
  ja: {
    pathPrefix: '/ja',
    languageTag: 'ja-JP',
    openGraphLocale: 'ja_JP',
    nativeName: '日本語',
    shortName: 'JA',
  },
  'pt-BR': {
    pathPrefix: '/pt-BR',
    languageTag: 'pt-BR',
    openGraphLocale: 'pt_BR',
    nativeName: 'Português (Brasil)',
    shortName: 'PT',
  },
  ko: {
    pathPrefix: '/ko',
    languageTag: 'ko-KR',
    openGraphLocale: 'ko_KR',
    nativeName: '한국어',
    shortName: 'KO',
  },
  hi: {
    pathPrefix: '/hi',
    languageTag: 'hi-IN',
    openGraphLocale: 'hi_IN',
    nativeName: 'हिन्दी',
    shortName: 'HI',
  },
  ru: {
    pathPrefix: '/ru',
    languageTag: 'ru-RU',
    openGraphLocale: 'ru_RU',
    nativeName: 'Русский',
    shortName: 'RU',
  },
  vi: {
    pathPrefix: '/vi',
    languageTag: 'vi-VN',
    openGraphLocale: 'vi_VN',
    nativeName: 'Tiếng Việt',
    shortName: 'VI',
  },
  fr: {
    pathPrefix: '/fr',
    languageTag: 'fr-FR',
    openGraphLocale: 'fr_FR',
    nativeName: 'Français',
    shortName: 'FR',
  },
  es: {
    pathPrefix: '/es',
    languageTag: 'es-ES',
    openGraphLocale: 'es_ES',
    nativeName: 'Español',
    shortName: 'ES',
  },
}

/** Locales that have dedicated screenshot assets under /images/pulse-pomodoro/{locale}. */
export const PULSE_LOCALES_WITH_IMAGES = new Set<PulseLocale>(['en', 'tr'])

export const PULSE_LOCALE_COOKIE = 'pulse-locale'

/** Compact aria labels for the language selector (kept separate from full message catalogs). */
export const PULSE_LANGUAGE_SELECTOR_LABELS: Record<PulseLocale, string> = {
  en: 'Page language',
  tr: 'Sayfa dili',
  de: 'Seitensprache',
  'zh-Hans': '页面语言',
  ja: 'ページの言語',
  'pt-BR': 'Idioma da página',
  ko: '페이지 언어',
  hi: 'पृष्ठ की भाषा',
  ru: 'Язык страницы',
  vi: 'Ngôn ngữ trang',
  fr: 'Langue de la page',
  es: 'Idioma de la página',
}

export const PULSE_NON_DEFAULT_LOCALES = PULSE_LOCALES.filter(
  (locale): locale is Exclude<PulseLocale, 'en'> => locale !== 'en'
)

export function isPulseLocale(value: string): value is PulseLocale {
  return (PULSE_LOCALES as readonly string[]).includes(value)
}

export function normalizePulseLocale(value: string | null | undefined): PulseLocale | null {
  if (!value) {
    return null
  }

  if (isPulseLocale(value)) {
    return value
  }

  const lower = value.toLowerCase()

  if (lower === 'zh' || lower.startsWith('zh-cn') || lower.startsWith('zh-hans')) {
    return 'zh-Hans'
  }

  if (lower === 'pt' || lower.startsWith('pt-br')) {
    return 'pt-BR'
  }

  if (lower.startsWith('es')) {
    return 'es'
  }

  const base = lower.split('-')[0]
  const match = PULSE_LOCALES.find((locale) => locale.toLowerCase() === base)
  return match ?? null
}

export function getPulseAppPath(locale: PulseLocale = 'en', pathSuffix: PulsePathSuffix | string = ''): string {
  const suffix = pathSuffix ? `/${String(pathSuffix).replace(/^\//, '')}` : ''
  return `${PULSE_LOCALE_CONFIG[locale].pathPrefix}${PULSE_APP_PATH}${suffix}`
}

export function getPulseAbsoluteUrl(locale: PulseLocale = 'en', pathSuffix: PulsePathSuffix | string = ''): string {
  return `${SITE_URL}${getPulseAppPath(locale, pathSuffix)}`
}

export function getPulseLanguageAlternates(pathSuffix: PulsePathSuffix | string = '') {
  const languages: Record<string, string> = {
    'x-default': getPulseAbsoluteUrl('en', pathSuffix),
  }

  for (const locale of PULSE_LOCALES) {
    languages[PULSE_LOCALE_CONFIG[locale].languageTag] = getPulseAbsoluteUrl(locale, pathSuffix)
  }

  return languages
}

export function getPulseImageDir(locale: PulseLocale = 'en'): string {
  const imageLocale = PULSE_LOCALES_WITH_IMAGES.has(locale) ? locale : 'en'
  return imageLocale === 'en' ? '/images/pulse-pomodoro' : `/images/pulse-pomodoro/${imageLocale}`
}

export function getPulseAlternateOpenGraphLocales(locale: PulseLocale): string[] {
  return PULSE_LOCALES.filter((item) => item !== locale).map(
    (item) => PULSE_LOCALE_CONFIG[item].openGraphLocale
  )
}

export function negotiatePulseLocale(acceptLanguageHeader: string | null): PulseLocale {
  if (!acceptLanguageHeader) {
    return 'en'
  }

  const candidates = acceptLanguageHeader
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';')
      const qParam = params.find((param) => param.trim().startsWith('q='))
      const quality = qParam ? Number(qParam.split('=')[1]) : 1
      return { tag: tag.trim(), quality: Number.isFinite(quality) ? quality : 0 }
    })
    .filter((item) => item.tag)
    .sort((a, b) => b.quality - a.quality)

  for (const candidate of candidates) {
    const matched = normalizePulseLocale(candidate.tag)
    if (matched) {
      return matched
    }
  }

  return 'en'
}
