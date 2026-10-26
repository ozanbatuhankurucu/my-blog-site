import Link from 'next/link'
import { LuArrowLeft } from 'react-icons/lu'
import { PulseLocaleSwitcher } from '../PulseLocaleSwitcher'
import { PULSE_APP_NAME } from '../../lib/constants'
import { getPulseAppPath, type PulseLocale } from '../../lib/pulse/locales'
import { getPulseMessages } from '../../lib/pulse/messages'
import { PulseDocumentLang } from './PulseDocumentLang'

interface PulsePrivacyPageProps {
  locale: PulseLocale
}

export function PulsePrivacyPage({ locale }: PulsePrivacyPageProps) {
  const messages = getPulseMessages(locale).privacy
  const supportPath = getPulseAppPath(locale, 'support')
  const pulsePath = getPulseAppPath(locale)
  const htmlLang = locale === 'en' ? undefined : locale === 'zh-Hans' ? 'zh-Hans' : locale

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
        <PulseLocaleSwitcher locale={locale} pathSuffix='privacy' />
      </div>

      <header className='mb-10'>
        <h1 className='font-mono text-3xl md:text-4xl font-medium text-text-primary mb-4'>{messages.title}</h1>
        <p className='text-text-secondary text-lg leading-relaxed mb-2'>{messages.subtitle}</p>
        <p className='text-text-muted text-sm'>{messages.lastUpdated}</p>
      </header>

      <div className='space-y-10 text-text-secondary leading-relaxed'>
        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>{messages.summary.title}</h2>
          <p>{messages.summary.body}</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>{messages.localData.title}</h2>
          <p className='mb-4'>{messages.localData.body}</p>
          <p>{messages.localData.migrationSafety}</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>
            {messages.accountAndSync.title}
          </h2>
          <p className='mb-4'>{messages.accountAndSync.intro}</p>
          <ul className='list-disc list-inside space-y-2 mb-4'>
            {messages.accountAndSync.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{messages.accountAndSync.closing}</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>{messages.processors.title}</h2>
          <p>
            {messages.processors.bodyBeforeSupabase}{' '}
            <a
              href='https://supabase.com/privacy'
              className='text-accent hover:text-accent-hover transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Supabase
            </a>{' '}
            {messages.processors.bodyAfterSupabase}{' '}
            <a
              href='https://www.apple.com/legal/privacy/'
              className='text-accent hover:text-accent-hover transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Apple
            </a>{' '}
            {messages.processors.orWord}{' '}
            <a
              href='https://policies.google.com/privacy'
              className='text-accent hover:text-accent-hover transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Google
            </a>
            {messages.processors.bodyAfterProviders}{' '}
            <a
              href='https://www.revenuecat.com/privacy'
              className='text-accent hover:text-accent-hover transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              RevenueCat
            </a>{' '}
            {messages.processors.bodyAfterRevenueCat}
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>{messages.purchases.title}</h2>
          <p>
            {messages.purchases.bodyBeforeRevenueCat}{' '}
            <a
              href='https://www.revenuecat.com/privacy'
              className='text-accent hover:text-accent-hover transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              RevenueCat
            </a>
            {messages.purchases.bodyAfterRevenueCat}
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>
            {messages.focusProtection.title}
          </h2>
          <p>{messages.focusProtection.body}</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>{messages.retention.title}</h2>
          <ul className='list-disc list-inside space-y-2'>
            {messages.retention.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>{messages.export.title}</h2>
          <p>{messages.export.body}</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>{messages.analytics.title}</h2>
          <p className='mb-4'>
            {messages.analytics.introBeforeLink}{' '}
            <a
              href='https://telemetrydeck.com'
              className='text-accent hover:text-accent-hover transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              TelemetryDeck
            </a>
            {messages.analytics.introAfterLink}
          </p>
          <p className='mb-4'>{messages.analytics.identifier}</p>
          <p>
            {messages.analytics.learnMore}{' '}
            <a
              href='https://telemetrydeck.com/docs/guides/privacy-faq/'
              className='text-accent hover:text-accent-hover transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              {messages.analytics.faqLabel}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>
            {messages.appStoreUpdates.title}
          </h2>
          <p>{messages.appStoreUpdates.body}</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>
            {messages.launchAtLogin.title}
          </h2>
          <p>{messages.launchAtLogin.body}</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>
            {messages.notifications.title}
          </h2>
          <p>{messages.notifications.body}</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>
            {messages.whatWeDoNotDo.title}
          </h2>
          <ul className='list-disc list-inside space-y-2'>
            {messages.whatWeDoNotDo.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>{messages.children.title}</h2>
          <p>{messages.children.body}</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>{messages.changes.title}</h2>
          <p>{messages.changes.body}</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>{messages.contact.title}</h2>
          <p>
            {messages.contact.body}{' '}
            <a
              href='mailto:ozanbatusss@gmail.com'
              className='text-accent hover:text-accent-hover transition-colors'>
              ozanbatusss@gmail.com
            </a>
          </p>
          <p className='mt-4'>
            <Link href={supportPath} className='text-accent hover:text-accent-hover transition-colors'>
              {getPulseMessages(locale).landing.closing.getSupport}
            </Link>
          </p>
        </section>
      </div>
    </article>
  )
}
