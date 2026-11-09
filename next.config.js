/** Former Pomodoro marketing locales redirected to English pages (iOS 1.13 keeps 7 languages). */
const PULSE_RETIRED_LOCALES = [
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
]

const PULSE_SUPPORTED_LOCALES_WITH_PREFIX = ['tr', 'de', 'ja', 'ko', 'zh-Hans', 'zh-Hant']

const PULSE_PATH_SUFFIXES = ['', '/support', '/privacy']

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    const retiredPulseRedirects = PULSE_RETIRED_LOCALES.flatMap((locale) =>
      PULSE_PATH_SUFFIXES.map((suffix) => ({
        source: `/${locale}/pomodoro-work-study-timer${suffix}`,
        destination: `/pomodoro-work-study-timer${suffix}`,
        permanent: true,
      }))
    )

    const retiredLegacyPulseRedirects = PULSE_RETIRED_LOCALES.flatMap((locale) =>
      PULSE_PATH_SUFFIXES.map((suffix) => ({
        source: `/${locale}/pulse-pomodoro${suffix}`,
        destination: `/pomodoro-work-study-timer${suffix}`,
        permanent: true,
      }))
    )

    const supportedLegacyPulseRedirects = PULSE_SUPPORTED_LOCALES_WITH_PREFIX.flatMap((locale) =>
      PULSE_PATH_SUFFIXES.map((suffix) => ({
        source: `/${locale}/pulse-pomodoro${suffix}`,
        destination: `/${locale}/pomodoro-work-study-timer${suffix}`,
        permanent: true,
      }))
    )

    return [
      {
        source: '/pulse-pomodoro',
        destination: '/pomodoro-work-study-timer',
        permanent: true,
      },
      {
        source: '/pulse-pomodoro/support',
        destination: '/pomodoro-work-study-timer/support',
        permanent: true,
      },
      {
        source: '/pulse-pomodoro/privacy',
        destination: '/pomodoro-work-study-timer/privacy',
        permanent: true,
      },
      ...supportedLegacyPulseRedirects,
      ...retiredPulseRedirects,
      ...retiredLegacyPulseRedirects,
    ]
  },
}

module.exports = nextConfig
