import { notFound, redirect } from 'next/navigation'
import { PulseSupportPage } from '../../../../components/pulse/PulseSupportPage'
import {
  getPulseAppPath,
  isPulseLocale,
  PULSE_NON_DEFAULT_LOCALES,
  type PulseLocale,
} from '../../../../lib/pulse/locales'
import { createPulseSupportMetadata } from '../../../../lib/pulse/metadata'

interface PageProps {
  params: { locale: string }
}

export function generateStaticParams() {
  return PULSE_NON_DEFAULT_LOCALES.map((locale) => ({ locale }))
}

export function generateMetadata({ params }: PageProps) {
  if (!isPulseLocale(params.locale) || params.locale === 'en') {
    return {}
  }

  return createPulseSupportMetadata(params.locale)
}

export default function LocalizedPulsePomodoroSupportPage({ params }: PageProps) {
  if (params.locale === 'en') {
    redirect(getPulseAppPath('en', 'support'))
  }

  if (!isPulseLocale(params.locale)) {
    notFound()
  }

  return <PulseSupportPage locale={params.locale as Exclude<PulseLocale, 'en'>} />
}
