import Link from 'next/link'
import { LuArrowLeft } from 'react-icons/lu'
import { PulseLocaleSwitcher } from '../PulseLocaleSwitcher'
import { PULSE_APP_NAME } from '../../lib/constants'
import { getPulseAppPath, type PulseLocale } from '../../lib/pulse/locales'
import { getPulseMessages } from '../../lib/pulse/messages'
import type { PulseFaqSection } from '../../lib/pulse/messages/types'
import { PulseDocumentLang } from './PulseDocumentLang'

interface PulseSupportPageProps {
  locale: PulseLocale
}

export function PulseSupportPage({ locale }: PulseSupportPageProps) {
  const messages = getPulseMessages(locale).support
  const pulsePath = getPulseAppPath(locale)
  const privacyPath = getPulseAppPath(locale, 'privacy')
  const htmlLang = locale === 'en' ? undefined : locale === 'zh-Hans' ? 'zh-Hans' : locale

  const faqSections: PulseFaqSection[] = [
    messages.gettingStarted,
    messages.accounts,
    messages.cloudSync,
    messages.migration,
    messages.notifications,
    messages.accountPrivacy,
  ]

  return (
    <article className='container max-w-2xl py-16 md:py-24' lang={htmlLang}>
      <PulseDocumentLang locale={locale} />
      <div className='flex flex-wrap items-center justify-between gap-4 mb-10'>
        <Link
          href={pulsePath}
          className='inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors duration-fast'>
          <LuArrowLeft size={16} aria-hidden='true' />
          {PULSE_APP_NAME}
        </Link>
        <PulseLocaleSwitcher locale={locale} pathSuffix='support' />
      </div>

      <header className='mb-10'>
        <h1 className='font-mono text-3xl md:text-4xl font-medium text-text-primary mb-4'>{messages.title}</h1>
        <p className='text-text-secondary text-lg leading-relaxed'>{renderAppNameEmphasis(messages.intro)}</p>
      </header>

      <div className='space-y-10 text-text-secondary leading-relaxed'>
        {faqSections.map((section) => (
          <section key={section.title}>
            <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>{section.title}</h2>
            <div className='space-y-5'>
              {section.items.map((item) => (
                <div key={item.question}>
                  <h3 className='font-mono text-base font-medium text-text-primary mb-2'>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>
            {messages.requirements.title}
          </h2>
          <p>{messages.requirements.body}</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>{messages.contact.title}</h2>
          <p className='mb-2'>{messages.contact.body}</p>
          <p className='mb-4'>
            <a
              href='mailto:ozanbatusss@gmail.com'
              className='text-accent hover:text-accent-hover transition-colors'>
              ozanbatusss@gmail.com
            </a>
          </p>
          <p>
            <Link href={privacyPath} className='text-accent hover:text-accent-hover transition-colors'>
              {messages.privacyPolicyLink}
            </Link>
          </p>
        </section>
      </div>
    </article>
  )
}

function renderAppNameEmphasis(text: string) {
  const index = text.indexOf(PULSE_APP_NAME)
  if (index < 0) {
    return text
  }

  return (
    <>
      {text.slice(0, index)}
      <strong className='text-text-primary'>{PULSE_APP_NAME}</strong>
      {text.slice(index + PULSE_APP_NAME.length)}
    </>
  )
}
