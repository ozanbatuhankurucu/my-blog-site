import { PULSE_APP_PATH, SITE_URL } from '../constants'

/**
 * App Store / iOS String Catalog locales for Pomodoro: Work & Study Timer.
 * Source of truth: PulseIOS Localizable.xcstrings + Xcode knownRegions (48 languages).
 * Order: English first (unprefixed default), then AppLanguage picker order excluding English.
 */
export const PULSE_LOCALES = [
  'en',
  'id',
  'ms',
  'ca',
  'cs',
  'da',
  'de',
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
  'tr',
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
  'ko',
  'ja',
  'zh-Hans',
  'zh-Hant',
] as const

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
    languageTag: 'en-US',
    openGraphLocale: 'en_US',
    nativeName: 'English',
    shortName: 'EN',
    dir: 'ltr',
  },
  id: {
    pathPrefix: '/id',
    languageTag: 'id-ID',
    openGraphLocale: 'id_ID',
    nativeName: 'Bahasa Indonesia',
    shortName: 'ID',
    dir: 'ltr',
  },
  ms: {
    pathPrefix: '/ms',
    languageTag: 'ms-MY',
    openGraphLocale: 'ms_MY',
    nativeName: 'Bahasa Melayu',
    shortName: 'MS',
    dir: 'ltr',
  },
  ca: {
    pathPrefix: '/ca',
    languageTag: 'ca-ES',
    openGraphLocale: 'ca_ES',
    nativeName: 'Català',
    shortName: 'CA',
    dir: 'ltr',
  },
  cs: {
    pathPrefix: '/cs',
    languageTag: 'cs-CZ',
    openGraphLocale: 'cs_CZ',
    nativeName: 'Čeština',
    shortName: 'CS',
    dir: 'ltr',
  },
  da: {
    pathPrefix: '/da',
    languageTag: 'da-DK',
    openGraphLocale: 'da_DK',
    nativeName: 'Dansk',
    shortName: 'DA',
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
  es: {
    pathPrefix: '/es',
    languageTag: 'es-ES',
    openGraphLocale: 'es_ES',
    nativeName: 'Español',
    shortName: 'ES',
    dir: 'ltr',
  },
  fr: {
    pathPrefix: '/fr',
    languageTag: 'fr-FR',
    openGraphLocale: 'fr_FR',
    nativeName: 'Français',
    shortName: 'FR',
    dir: 'ltr',
  },
  hr: {
    pathPrefix: '/hr',
    languageTag: 'hr-HR',
    openGraphLocale: 'hr_HR',
    nativeName: 'Hrvatski',
    shortName: 'HR',
    dir: 'ltr',
  },
  it: {
    pathPrefix: '/it',
    languageTag: 'it-IT',
    openGraphLocale: 'it_IT',
    nativeName: 'Italiano',
    shortName: 'IT',
    dir: 'ltr',
  },
  lt: {
    pathPrefix: '/lt',
    languageTag: 'lt-LT',
    openGraphLocale: 'lt_LT',
    nativeName: 'Lietuvių',
    shortName: 'LT',
    dir: 'ltr',
  },
  hu: {
    pathPrefix: '/hu',
    languageTag: 'hu-HU',
    openGraphLocale: 'hu_HU',
    nativeName: 'Magyar',
    shortName: 'HU',
    dir: 'ltr',
  },
  nl: {
    pathPrefix: '/nl',
    languageTag: 'nl-NL',
    openGraphLocale: 'nl_NL',
    nativeName: 'Nederlands',
    shortName: 'NL',
    dir: 'ltr',
  },
  nb: {
    pathPrefix: '/nb',
    languageTag: 'nb-NO',
    openGraphLocale: 'nb_NO',
    nativeName: 'Norsk bokmål',
    shortName: 'NB',
    dir: 'ltr',
  },
  pl: {
    pathPrefix: '/pl',
    languageTag: 'pl-PL',
    openGraphLocale: 'pl_PL',
    nativeName: 'Polski',
    shortName: 'PL',
    dir: 'ltr',
  },
  'pt-BR': {
    pathPrefix: '/pt-BR',
    languageTag: 'pt-BR',
    openGraphLocale: 'pt_BR',
    nativeName: 'Português (Brasil)',
    shortName: 'PT',
    dir: 'ltr',
  },
  'pt-PT': {
    pathPrefix: '/pt-PT',
    languageTag: 'pt-PT',
    openGraphLocale: 'pt_PT',
    nativeName: 'Português (Portugal)',
    shortName: 'PT-PT',
    dir: 'ltr',
  },
  ro: {
    pathPrefix: '/ro',
    languageTag: 'ro-RO',
    openGraphLocale: 'ro_RO',
    nativeName: 'Română',
    shortName: 'RO',
    dir: 'ltr',
  },
  sk: {
    pathPrefix: '/sk',
    languageTag: 'sk-SK',
    openGraphLocale: 'sk_SK',
    nativeName: 'Slovenčina',
    shortName: 'SK',
    dir: 'ltr',
  },
  sl: {
    pathPrefix: '/sl',
    languageTag: 'sl-SI',
    openGraphLocale: 'sl_SI',
    nativeName: 'Slovenščina',
    shortName: 'SL',
    dir: 'ltr',
  },
  fi: {
    pathPrefix: '/fi',
    languageTag: 'fi-FI',
    openGraphLocale: 'fi_FI',
    nativeName: 'Suomi',
    shortName: 'FI',
    dir: 'ltr',
  },
  sv: {
    pathPrefix: '/sv',
    languageTag: 'sv-SE',
    openGraphLocale: 'sv_SE',
    nativeName: 'Svenska',
    shortName: 'SV',
    dir: 'ltr',
  },
  vi: {
    pathPrefix: '/vi',
    languageTag: 'vi-VN',
    openGraphLocale: 'vi_VN',
    nativeName: 'Tiếng Việt',
    shortName: 'VI',
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
  el: {
    pathPrefix: '/el',
    languageTag: 'el-GR',
    openGraphLocale: 'el_GR',
    nativeName: 'Ελληνικά',
    shortName: 'EL',
    dir: 'ltr',
  },
  bg: {
    pathPrefix: '/bg',
    languageTag: 'bg-BG',
    openGraphLocale: 'bg_BG',
    nativeName: 'Български',
    shortName: 'BG',
    dir: 'ltr',
  },
  kk: {
    pathPrefix: '/kk',
    languageTag: 'kk-KZ',
    openGraphLocale: 'kk_KZ',
    nativeName: 'Қазақ тілі',
    shortName: 'KK',
    dir: 'ltr',
  },
  ru: {
    pathPrefix: '/ru',
    languageTag: 'ru-RU',
    openGraphLocale: 'ru_RU',
    nativeName: 'Русский',
    shortName: 'RU',
    dir: 'ltr',
  },
  uk: {
    pathPrefix: '/uk',
    languageTag: 'uk-UA',
    openGraphLocale: 'uk_UA',
    nativeName: 'Українська',
    shortName: 'UK',
    dir: 'ltr',
  },
  he: {
    pathPrefix: '/he',
    languageTag: 'he-IL',
    openGraphLocale: 'he_IL',
    nativeName: 'עברית',
    shortName: 'HE',
    dir: 'rtl',
  },
  ur: {
    pathPrefix: '/ur',
    languageTag: 'ur-PK',
    openGraphLocale: 'ur_PK',
    nativeName: 'اردو',
    shortName: 'UR',
    dir: 'rtl',
  },
  ar: {
    pathPrefix: '/ar',
    languageTag: 'ar',
    openGraphLocale: 'ar_SA',
    nativeName: 'العربية',
    shortName: 'AR',
    dir: 'rtl',
  },
  mr: {
    pathPrefix: '/mr',
    languageTag: 'mr-IN',
    openGraphLocale: 'mr_IN',
    nativeName: 'मराठी',
    shortName: 'MR',
    dir: 'ltr',
  },
  hi: {
    pathPrefix: '/hi',
    languageTag: 'hi-IN',
    openGraphLocale: 'hi_IN',
    nativeName: 'हिन्दी',
    shortName: 'HI',
    dir: 'ltr',
  },
  bn: {
    pathPrefix: '/bn',
    languageTag: 'bn-BD',
    openGraphLocale: 'bn_BD',
    nativeName: 'বাংলা',
    shortName: 'BN',
    dir: 'ltr',
  },
  pa: {
    pathPrefix: '/pa',
    languageTag: 'pa-IN',
    openGraphLocale: 'pa_IN',
    nativeName: 'ਪੰਜਾਬੀ',
    shortName: 'PA',
    dir: 'ltr',
  },
  gu: {
    pathPrefix: '/gu',
    languageTag: 'gu-IN',
    openGraphLocale: 'gu_IN',
    nativeName: 'ગુજરાતી',
    shortName: 'GU',
    dir: 'ltr',
  },
  or: {
    pathPrefix: '/or',
    languageTag: 'or-IN',
    openGraphLocale: 'or_IN',
    nativeName: 'ଓଡ଼ିଆ',
    shortName: 'OR',
    dir: 'ltr',
  },
  ta: {
    pathPrefix: '/ta',
    languageTag: 'ta-IN',
    openGraphLocale: 'ta_IN',
    nativeName: 'தமிழ்',
    shortName: 'TA',
    dir: 'ltr',
  },
  te: {
    pathPrefix: '/te',
    languageTag: 'te-IN',
    openGraphLocale: 'te_IN',
    nativeName: 'తెలుగు',
    shortName: 'TE',
    dir: 'ltr',
  },
  kn: {
    pathPrefix: '/kn',
    languageTag: 'kn-IN',
    openGraphLocale: 'kn_IN',
    nativeName: 'ಕನ್ನಡ',
    shortName: 'KN',
    dir: 'ltr',
  },
  ml: {
    pathPrefix: '/ml',
    languageTag: 'ml-IN',
    openGraphLocale: 'ml_IN',
    nativeName: 'മലയാളം',
    shortName: 'ML',
    dir: 'ltr',
  },
  th: {
    pathPrefix: '/th',
    languageTag: 'th-TH',
    openGraphLocale: 'th_TH',
    nativeName: 'ไทย',
    shortName: 'TH',
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
  ja: {
    pathPrefix: '/ja',
    languageTag: 'ja-JP',
    openGraphLocale: 'ja_JP',
    nativeName: '日本語',
    shortName: 'JA',
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
  id: 'Bahasa halaman',
  ms: 'Bahasa halaman',
  ca: 'Idioma de la pàgina',
  cs: 'Jazyk stránky',
  da: 'Sidesprog',
  de: 'Seitensprache',
  es: 'Idioma de la página',
  fr: 'Langue de la page',
  hr: 'Jezik stranice',
  it: 'Lingua della pagina',
  lt: 'Puslapio kalba',
  hu: 'Oldal nyelve',
  nl: 'Pagina taal',
  nb: 'Side språk',
  pl: 'Język strony',
  'pt-BR': 'Idioma da página',
  'pt-PT': 'Idioma da página',
  ro: 'Limba paginii',
  sk: 'Jazyk stránky',
  sl: 'Jezik strani',
  fi: 'Sivun kieli',
  sv: 'Sidans språk',
  vi: 'Ngôn ngữ trang',
  tr: 'Sayfa dili',
  el: 'Γλώσσα σελίδας',
  bg: 'Език на страницата',
  kk: 'Бет тілі',
  ru: 'Язык страницы',
  uk: 'Мова сторінки',
  he: 'שפת העמוד',
  ur: 'صفحے کی زبان',
  ar: 'لغة الصفحة',
  mr: 'पृष्ठाची भाषा',
  hi: 'पृष्ठ की भाषा',
  bn: 'পৃষ্ঠার ভাষা',
  pa: 'ਪੰਨੇ ਦੀ ਭਾਸ਼ਾ',
  gu: 'પૃષ્ઠની ભાષા',
  or: 'ପୃଷ୍ଠାର ଭାଷା',
  ta: 'பக்க மொழி',
  te: 'పేజీ భాష',
  kn: 'ಪುಟದ ಭಾಷೆ',
  ml: 'പേജ് ഭാഷ',
  th: 'ภาษาของหน้า',
  ko: '페이지 언어',
  ja: 'ページの言語',
  'zh-Hans': '页面语言',
  'zh-Hant': '頁面語言',
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

  if (lower === 'zh' || lower.startsWith('zh-cn') || lower.startsWith('zh-hans') || lower === 'zh-sg') {
    return 'zh-Hans'
  }

  if (lower.startsWith('zh-tw') || lower.startsWith('zh-hk') || lower.startsWith('zh-mo') || lower.startsWith('zh-hant')) {
    return 'zh-Hant'
  }

  if (lower === 'pt' || lower.startsWith('pt-br')) {
    return 'pt-BR'
  }

  if (lower.startsWith('pt-pt') || lower === 'pt-pt') {
    return 'pt-PT'
  }

  if (lower.startsWith('nb') || lower.startsWith('nn') || lower === 'no') {
    return 'nb'
  }

  if (lower.startsWith('iw')) {
    return 'he'
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
