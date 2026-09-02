import Link from 'next/link'
import { getPulseAppPath, type PulseLocale } from '../lib/constants'

interface PulseLocaleSwitcherProps {
  locale: PulseLocale
  pathSuffix?: string
}

const LABELS: Record<PulseLocale, { ariaLabel: string; en: string; tr: string }> = {
  en: {
    ariaLabel: 'Page language',
    en: 'EN',
    tr: 'TR',
  },
  tr: {
    ariaLabel: 'Sayfa dili',
    en: 'EN',
    tr: 'TR',
  },
}

export function PulseLocaleSwitcher({
  locale,
  pathSuffix = '',
}: PulseLocaleSwitcherProps) {
  const labels = LABELS[locale]
  const suffix = pathSuffix ? `/${pathSuffix.replace(/^\//, '')}` : ''

  return (
    <nav
      aria-label={labels.ariaLabel}
      className='inline-flex items-center rounded-md border border-border-subtle bg-bg-surface p-1'>
      {(['en', 'tr'] as const).map((availableLocale) => {
        const isCurrent = availableLocale === locale
        const label = availableLocale === 'en' ? labels.en : labels.tr

        return (
          <Link
            key={availableLocale}
            href={`${getPulseAppPath(availableLocale)}${suffix}`}
            hrefLang={availableLocale === 'en' ? 'en-US' : 'tr-TR'}
            aria-current={isCurrent ? 'page' : undefined}
            className={
              isCurrent
                ? 'rounded px-2.5 py-1 text-xs font-medium bg-accent-muted text-accent'
                : 'rounded px-2.5 py-1 text-xs font-medium text-text-muted hover:text-text-primary hover:bg-bg-hover transition-colors duration-fast'
            }>
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
