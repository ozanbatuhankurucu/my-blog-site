import type { Metadata } from 'next'
import { PULSE_APP_NAME, PULSE_APP_STORE_URL, PULSE_APP_VERSION, SITE_CONFIG, SITE_URL } from '../constants'
import {
  getPulseAbsoluteUrl,
  getPulseAlternateOpenGraphLocales,
  getPulseAppPath,
  getPulseImageDir,
  getPulseLanguageAlternates,
  PULSE_LOCALE_CONFIG,
  type PulseLocale,
  type PulsePathSuffix,
} from './locales'
import { getPulseMessages } from './messages'

export function createPulseLandingMetadata(locale: PulseLocale): Metadata {
  const messages = getPulseMessages(locale).landing
  const config = PULSE_LOCALE_CONFIG[locale]
  const path = getPulseAppPath(locale)
  const imageDir = getPulseImageDir(locale)
  const heroImage = `${imageDir}/hero.png`

  return {
    title: messages.metaTitle,
    description: messages.metaDescription,
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: getPulseLanguageAlternates(),
    },
    openGraph: {
      title: messages.metaTitle,
      description: messages.metaDescription,
      url: `${SITE_URL}${path}`,
      type: 'website',
      locale: config.openGraphLocale,
      alternateLocale: getPulseAlternateOpenGraphLocales(locale),
      siteName: `${SITE_CONFIG.name} Blog`,
      images: [
        {
          url: heroImage,
          width: 1024,
          height: 640,
          alt: messages.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.metaTitle,
      description: messages.metaDescription,
      images: [heroImage],
    },
  }
}

export function createPulseSupportMetadata(locale: PulseLocale): Metadata {
  const messages = getPulseMessages(locale).support
  const path = getPulseAppPath(locale, 'support')

  return {
    title: messages.metaTitle,
    description: messages.metaDescription,
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: getPulseLanguageAlternates('support'),
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function createPulsePrivacyMetadata(locale: PulseLocale): Metadata {
  const messages = getPulseMessages(locale).privacy
  const path = getPulseAppPath(locale, 'privacy')

  return {
    title: messages.metaTitle,
    description: messages.metaDescription,
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: getPulseLanguageAlternates('privacy'),
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function createPulseSoftwareJsonLd(locale: PulseLocale, featureList?: string[]) {
  const messages = getPulseMessages(locale).landing
  const path = getPulseAppPath(locale)
  const imageDir = getPulseImageDir(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: PULSE_APP_NAME,
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'macOS 14.6 or later',
    softwareVersion: PULSE_APP_VERSION,
    description: messages.metaDescription,
    url: `${SITE_URL}${path}`,
    downloadUrl: PULSE_APP_STORE_URL,
    inLanguage: [PULSE_LOCALE_CONFIG[locale].languageTag],
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.name,
      url: SITE_URL,
    },
    featureList,
    screenshot: `${SITE_URL}${imageDir}/hero.png`,
  }
}

export function resolvePulsePathSuffix(pathSuffix?: string): PulsePathSuffix {
  if (!pathSuffix) {
    return ''
  }

  const normalized = pathSuffix.replace(/^\//, '')
  if (normalized === 'support' || normalized === 'privacy') {
    return normalized
  }

  return ''
}

export { getPulseAbsoluteUrl }
