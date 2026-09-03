/**
 * Shared constants used across the application
 * Centralized to avoid duplication and ensure consistency
 */

// Navigation links used in Header and Footer
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/aboutMe', label: 'About' },
] as const

// Social media links
export const SOCIAL_LINKS = [
  {
    href: 'https://twitter.com/ozankurucu_',
    label: 'Twitter',
    platform: 'twitter',
  },
  {
    href: 'https://github.com/ozanbatuhankurucu',
    label: 'GitHub',
    platform: 'github',
  },
  {
    href: 'https://www.linkedin.com/in/ozan-batuhan-kurucu-66b120182/',
    label: 'LinkedIn',
    platform: 'linkedin',
  },
  {
    href: 'mailto:ozanbatuhankurucu@gmail.com',
    label: 'Email',
    platform: 'email',
  },
] as const

// Resume/CV link
export const RESUME_URL = 'https://my-portfolio-ozan.s3.eu-central-1.amazonaws.com/pdfFiles/OZAN+BATUHAN+KURUCU+(2).pdf'

// Site metadata
export const SITE_URL = 'https://www.ozanbatuhankurucu.com'

export const PULSE_APP_NAME = 'Pomodoro: Work & Study Timer'

export const PULSE_APP_VERSION = '1.3'

export const PULSE_APP_PATH = '/pomodoro-work-study-timer'

export type PulseLocale = 'en' | 'tr'

export const getPulseAppPath = (locale: PulseLocale = 'en'): string =>
  locale === 'en' ? PULSE_APP_PATH : `/tr${PULSE_APP_PATH}`

export const getPulseLanguageAlternates = (pathSuffix = '') => {
  const suffix = pathSuffix ? `/${pathSuffix.replace(/^\//, '')}` : ''
  const enPath = `${SITE_URL}${PULSE_APP_PATH}${suffix}`
  const trPath = `${SITE_URL}/tr${PULSE_APP_PATH}${suffix}`

  return {
    'en-US': enPath,
    'tr-TR': trPath,
    'x-default': enPath,
  }
}

export const PULSE_IMAGE_DIR = '/images/pulse-pomodoro'

export const getPulseImageDir = (locale: PulseLocale = 'en'): string =>
  locale === 'en' ? PULSE_IMAGE_DIR : `${PULSE_IMAGE_DIR}/tr`

export const PULSE_APP_STORE_URL =
  'https://apps.apple.com/us/app/pulse-pomodoro/id6803482095?mt=12'

export const SITE_CONFIG = {
  name: 'Ozan Batuhan Kurucu',
  title: 'Frontend Engineer',
  company: 'Arena Physica',
  domain: 'ozanbatuhankurucu.com',
  logo: 'ozan.dev',
  description: 'Frontend engineer writing about React, TypeScript, and building for the web.',
} as const

// Tech stack used in About page
export const TECH_STACK = [
  'Next.js',
  'React',
  'ReactNative',
  'TypeScript',
  'TailwindCSS',
  'Styled Components',
  'HTML/CSS',
  'Git',
] as const

// AI Tools used
export const AI_TOOLS = [
  'ChatGPT',
  'Claude',
  'Cursor',
] as const

// Type exports for type safety
export type NavLink = typeof NAV_LINKS[number]
export type SocialLink = typeof SOCIAL_LINKS[number]
export type SocialPlatform = SocialLink['platform']
