import { notFound, redirect } from 'next/navigation'
import { PulseLandingPage } from '../../../components/pulse/PulseLandingPage'
import {
  getPulseAppPath,
  isPulseLocale,
  PULSE_NON_DEFAULT_LOCALES,
  type PulseLocale,
} from '../../../lib/pulse/locales'
import { createPulseLandingMetadata } from '../../../lib/pulse/metadata'

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

  return createPulseLandingMetadata(params.locale)
}

export default function LocalizedPulsePomodoroPage({ params }: PageProps) {
  if (params.locale === 'en') {
    redirect(getPulseAppPath('en'))
  }

  if (!isPulseLocale(params.locale)) {
    notFound()
  }

  return <PulseLandingPage locale={params.locale as Exclude<PulseLocale, 'en'>} />
}
