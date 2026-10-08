'use client'

import { useRouter } from 'next/navigation'
import {
  getPulseAppPath,
  PULSE_LANGUAGE_SELECTOR_LABELS,
  PULSE_LOCALE_CONFIG,
  PULSE_LOCALE_COOKIE,
  PULSE_LOCALES,
  type PulseLocale,
} from '../lib/pulse/locales'

interface PulseLocaleSwitcherProps {
  locale: PulseLocale
  pathSuffix?: string
}

function persistPulseLocale(locale: PulseLocale) {
  const maxAge = 60 * 60 * 24 * 365
  document.cookie = `${PULSE_LOCALE_COOKIE}=${encodeURIComponent(locale)}; path=/; max-age=${maxAge}; samesite=lax`
}

export function PulseLocaleSwitcher({ locale, pathSuffix = '' }: PulseLocaleSwitcherProps) {
  const router = useRouter()
  const ariaLabel = PULSE_LANGUAGE_SELECTOR_LABELS[locale]
  const suffix = pathSuffix ? `/${pathSuffix.replace(/^\//, '')}` : ''
  const selectId = `pulse-locale-switcher-${locale}-${pathSuffix || 'home'}`

  return (
    <nav aria-label={ariaLabel} className='inline-flex items-center'>
      <label className='sr-only' htmlFor={selectId}>
        {ariaLabel}
      </label>
      <select
        id={selectId}
        value={locale}
        onChange={(event) => {
          const nextLocale = event.target.value as PulseLocale
          persistPulseLocale(nextLocale)
          router.push(`${getPulseAppPath(nextLocale)}${suffix}`)
        }}
        className='
          appearance-none rounded-md border border-border-subtle bg-bg-surface
          px-3 py-1.5 pr-8 text-xs font-medium text-text-primary
          hover:bg-bg-hover transition-colors duration-fast
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
          focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base
          max-w-[12rem] sm:max-w-[16rem]
        '
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.6rem center',
        }}>
        {PULSE_LOCALES.map((availableLocale) => (
          <option
            key={availableLocale}
            value={availableLocale}
            lang={PULSE_LOCALE_CONFIG[availableLocale].languageTag}>
            {PULSE_LOCALE_CONFIG[availableLocale].nativeName}
          </option>
        ))}
      </select>
    </nav>
  )
}
