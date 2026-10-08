'use client'

import { useEffect } from 'react'
import { PULSE_LOCALE_CONFIG, type PulseLocale } from '../../lib/pulse/locales'

interface PulseDocumentLangProps {
  locale: PulseLocale
}

export function PulseDocumentLang({ locale }: PulseDocumentLangProps) {
  useEffect(() => {
    const previous = document.documentElement.lang
    document.documentElement.lang = PULSE_LOCALE_CONFIG[locale].languageTag
    return () => {
      document.documentElement.lang = previous || 'en'
    }
  }, [locale])

  return null
}
