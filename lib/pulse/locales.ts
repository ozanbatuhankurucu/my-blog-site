import { PULSE_APP_PATH, SITE_URL } from '../constants'

/**
 * App Store / iOS localizations for Pomodoro: Work & Study Timer (iOS 1.13).
 * Source of truth: PulseIOS CFBundleLocalizations + Localizable.xcstrings (7 languages).
 * English is unprefixed; other locales use /{locale}/pomodoro-work-study-timer/...
 */
export const PULSE_LOCALES = ['en', 'tr', 'de', 'ja', 'ko', 'zh-Hans', 'zh-Hant'] as const

export type PulseLocale = (typeof PULSE_LOCALES)[number]

export type PulsePathSuffix = '' | 'support' | 'privacy'

export type PulseTextDirection = 'ltr' | 'rtl'

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
  /** Document text direction. */
  dir: PulseTextDirection
}

export const PULSE_LOCALE_CONFIG: Record<PulseLocale, PulseLocaleConfig> = {
  en: {
    pathPrefix: '',
    languageTag: 'en-GB',
    openGraphLocale: 'en_GB',
    nativeName: 'English',
    shortName: 'EN',
    dir: 'ltr',
  },
  tr: {
    pathPrefix: '/tr',
    languageTag: 'tr-TR',
    openGraphLocale: 'tr_TR',
    nativeName: 'Türkçe',
    shortName: 'TR',
    dir: 'ltr',
  },
  de: {
    pathPrefix: '/de',
    languageTag: 'de-DE',
    openGraphLocale: 'de_DE',
    nativeName: 'Deutsch',
    shortName: 'DE',
    dir: 'ltr',
  },
  ja: {
    pathPrefix: '/ja',
    languageTag: 'ja-JP',
    openGraphLocale: 'ja_JP',
    nativeName: '日本語',
    shortName: 'JA',
    dir: 'ltr',
  },
  ko: {
    pathPrefix: '/ko',
    languageTag: 'ko-KR',
    openGraphLocale: 'ko_KR',
    nativeName: '한국어',
    shortName: 'KO',
    dir: 'ltr',
  },
  'zh-Hans': {
    pathPrefix: '/zh-Hans',
    languageTag: 'zh-Hans',
    openGraphLocale: 'zh_CN',
    nativeName: '简体中文',
    shortName: '中文',
    dir: 'ltr',
  },
  'zh-Hant': {
    pathPrefix: '/zh-Hant',
    languageTag: 'zh-Hant',
    openGraphLocale: 'zh_TW',
    nativeName: '繁體中文',
    shortName: '繁中',
    dir: 'ltr',
  },
}

/** Locales that have dedicated screenshot assets under /images/pulse-pomodoro/{locale}. */
export const PULSE_LOCALES_WITH_IMAGES = new Set<PulseLocale>(['en', 'tr'])

export const PULSE_RTL_LOCALES = new Set<PulseLocale>(
  PULSE_LOCALES.filter((locale) => PULSE_LOCALE_CONFIG[locale].dir === 'rtl')
)

export const PULSE_LOCALE_COOKIE = 'pulse-locale'

/** Compact aria labels for the language selector (kept separate from full message catalogs). */
export const PULSE_LANGUAGE_SELECTOR_LABELS: Record<PulseLocale, string> = {
  en: 'Page language',
  tr: 'Sayfa dili',
  de: 'Seitensprache',
  ja: 'ページの言語',
  ko: '페이지 언어',
  'zh-Hans': '页面语言',
  'zh-Hant': '頁面語言',
}

/**
 * Former Pomodoro marketing locales that used to have published URLs.
 * Kept for permanent redirects to the English pages.
 */
export const PULSE_RETIRED_LOCALES = [
  'id',
  'ms',
  'ca',
  'cs',
  'da',
  'es',
  'fr',
  'hr',
  'it',
  'lt',
  'hu',
  'nl',
  'nb',
  'pl',
  'pt-BR',
  'pt-PT',
  'ro',
  'sk',
  'sl',
  'fi',
  'sv',
  'vi',
  'el',
  'bg',
  'kk',
  'ru',
  'uk',
  'he',
  'ur',
  'ar',
  'mr',
  'hi',
  'bn',
  'pa',
  'gu',
  'or',
  'ta',
  'te',
  'kn',
  'ml',
  'th',
] as const

export type PulseRetiredLocale = (typeof PULSE_RETIRED_LOCALES)[number]

export const PULSE_NON_DEFAULT_LOCALES = PULSE_LOCALES.filter(
  (locale): locale is Exclude<PulseLocale, 'en'> => locale !== 'en'
)

export function isPulseLocale(value: string): value is PulseLocale {
  return (PULSE_LOCALES as readonly string[]).includes(value)
}

export function isPulseRetiredLocale(value: string): value is PulseRetiredLocale {
  return (PULSE_RETIRED_LOCALES as readonly string[]).includes(value)
}

export function normalizePulseLocale(value: string | null | undefined): PulseLocale | null {
  if (!value) {
    return null
  }

  if (isPulseLocale(value)) {
    return value
  }

  const lower = value.toLowerCase()

  if (lower === 'en' || lower.startsWith('en-')) {
    return 'en'
  }

  if (lower === 'zh' || lower.startsWith('zh-cn') || lower.startsWith('zh-hans') || lower === 'zh-sg') {
    return 'zh-Hans'
  }

  if (lower.startsWith('zh-tw') || lower.startsWith('zh-hk') || lower.startsWith('zh-mo') || lower.startsWith('zh-hant')) {
    return 'zh-Hant'
  }

  if (lower.startsWith('de')) {
    return 'de'
  }

  if (lower.startsWith('tr')) {
    return 'tr'
  }

  if (lower.startsWith('ja')) {
    return 'ja'
  }

  if (lower.startsWith('ko')) {
    return 'ko'
  }

  return null
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
