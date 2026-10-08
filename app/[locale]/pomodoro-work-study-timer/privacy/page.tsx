import { notFound, redirect } from 'next/navigation'
import { PulsePrivacyPage } from '../../../../components/pulse/PulsePrivacyPage'
import {
  getPulseAppPath,
  isPulseLocale,
  PULSE_NON_DEFAULT_LOCALES,
  type PulseLocale,
} from '../../../../lib/pulse/locales'
import { createPulsePrivacyMetadata } from '../../../../lib/pulse/metadata'

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

  return createPulsePrivacyMetadata(params.locale)
}

export default function LocalizedPulsePomodoroPrivacyPage({ params }: PageProps) {
  if (params.locale === 'en') {
    redirect(getPulseAppPath('en', 'privacy'))
  }

  if (!isPulseLocale(params.locale)) {
    notFound()
  }

  return <PulsePrivacyPage locale={params.locale as Exclude<PulseLocale, 'en'>} />
}
