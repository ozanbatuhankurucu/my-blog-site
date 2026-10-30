'use client'

import { useEffect } from 'react'
import { PULSE_LOCALE_CONFIG, type PulseLocale } from '../../lib/pulse/locales'

interface PulseDocumentLangProps {
  locale: PulseLocale
}

export function PulseDocumentLang({ locale }: PulseDocumentLangProps) {
  useEffect(() => {
    const previousLang = document.documentElement.lang
    const previousDir = document.documentElement.getAttribute('dir')
    const config = PULSE_LOCALE_CONFIG[locale]

    document.documentElement.lang = config.languageTag
    document.documentElement.setAttribute('dir', config.dir)

    return () => {
      document.documentElement.lang = previousLang || 'en'
      if (previousDir) {
        document.documentElement.setAttribute('dir', previousDir)
      } else {
        document.documentElement.removeAttribute('dir')
      }
    }
  }, [locale])

  return null
}
