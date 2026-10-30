import Image from 'next/image'
import Link from 'next/link'
import {
  LuArrowLeft,
  LuArrowUpRight,
  LuClock3,
  LuGlobe,
  LuHistory,
  LuMonitor,
  LuSettings2,
  LuShieldCheck,
  LuSparkles,
} from 'react-icons/lu'
import { ButtonLink } from '../Button'
import PulseDemoVideo from '../PulseDemoVideo'
import { PulseLocaleSwitcher } from '../PulseLocaleSwitcher'
import { Tag } from '../Tag'
import { WatchPulseDemoButton } from '../WatchPulseDemoButton'
import { PulseDocumentLang } from './PulseDocumentLang'
import { PULSE_APP_NAME, PULSE_APP_STORE_URL } from '../../lib/constants'
import {
  getPulseAppPath,
  getPulseImageDir,
  PULSE_LOCALE_CONFIG,
  type PulseLocale,
} from '../../lib/pulse/locales'
import { createPulseSoftwareJsonLd } from '../../lib/pulse/metadata'
import { getPulseMessages } from '../../lib/pulse/messages'
import { PROJECTS } from '../../app/projects'

const screenshotAspectRatio = '1024 / 640'

const nativeIcons = [LuMonitor, LuClock3, LuShieldCheck, LuGlobe] as const

interface PulseLandingPageProps {
  locale: PulseLocale
}

export function PulseLandingPage({ locale }: PulseLandingPageProps) {
  const messages = getPulseMessages(locale)
  const landing = messages.landing
  const pulsePath = getPulseAppPath(locale)
  const pulseImageDir = getPulseImageDir(locale)
  const pulseProject = PROJECTS.find((project) => project.slug === 'pomodoro-work-study-timer')
  const softwareJsonLd = createPulseSoftwareJsonLd(
    locale,
    pulseProject?.features?.map((feature) => feature.text)
  )
  const localeConfig = PULSE_LOCALE_CONFIG[locale]
  const isRtl = localeConfig.dir === 'rtl'

  return (
    <>
      <PulseDocumentLang locale={locale} />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <div className='overflow-hidden' lang={localeConfig.languageTag} dir={localeConfig.dir}>
        <section className='container py-12 md:py-24 relative'>
          <div
            className='pointer-events-none absolute top-16 right-0 w-64 h-64 rounded-full bg-accent-muted blur-3xl'
            aria-hidden='true'
          />
          <div className='relative z-10 flex flex-wrap items-center justify-between gap-4 mb-12'>
            <Link
              href='/projects'
              className='inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors duration-fast'>
              <LuArrowLeft
                size={16}
                aria-hidden='true'
                className={isRtl ? '-scale-x-100' : undefined}
              />
              {landing.backToProjects}
            </Link>
            <PulseLocaleSwitcher locale={locale} />
          </div>

          <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            <div className='animate-slide-up'>
              <div className='flex flex-wrap items-center gap-3 mb-6'>
                <Tag variant='status' status='success' size='md'>
                  {landing.availableOnAppStore}
                </Tag>
                <span className='font-mono text-sm text-text-muted'>{landing.availabilityLine}</span>
              </div>
              <p className='font-mono text-sm text-accent mb-4'>{landing.eyebrow}</p>
              <h1 className='font-mono text-4xl md:text-5xl font-medium text-text-primary mb-6'>
                {PULSE_APP_NAME}
              </h1>
              <p className='text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-4'>
                {landing.tagline}
              </p>
              <p className='text-text-secondary text-lg leading-relaxed max-w-2xl mb-8'>
                {landing.description}
              </p>
              <div className='flex flex-wrap gap-3'>
                <ButtonLink href={PULSE_APP_STORE_URL} external variant='primary' size='lg'>
                  {landing.downloadCta}
                  <LuArrowUpRight className='ml-2' size={16} aria-hidden='true' />
                </ButtonLink>
                <WatchPulseDemoButton label={landing.watchDemo} />
                <ButtonLink href={`${pulsePath}/support`} variant='ghost' size='lg'>
                  {landing.supportCta}
                </ButtonLink>
              </div>
            </div>

            <div className='relative animate-fade-in'>
              <div
                className='absolute inset-0 bg-accent-muted rounded-lg translate-x-3 translate-y-3'
                aria-hidden='true'
              />
              <div
                className='relative overflow-hidden rounded-lg border border-border-default bg-bg-elevated'
                style={{ aspectRatio: screenshotAspectRatio }}>
                <Image
                  src={`${pulseImageDir}/hero.png`}
                  alt={landing.heroImageAlt}
                  fill
                  priority
                  sizes='(min-width: 768px) 50vw, 100vw'
                  className='object-cover'
                />
              </div>
            </div>
          </div>

          <dl className='relative grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-24 pt-8 border-t border-border-subtle'>
            <div>
              <dt className='font-mono text-xs text-text-muted uppercase tracking-wider mb-2'>
                {landing.stats.platformLabel}
              </dt>
              <dd className='text-text-primary'>{landing.stats.platformValue}</dd>
            </div>
            <div>
              <dt className='font-mono text-xs text-text-muted uppercase tracking-wider mb-2'>
                {landing.stats.languagesLabel}
              </dt>
              <dd className='text-text-primary'>{landing.stats.languagesValue}</dd>
            </div>
            <div>
              <dt className='font-mono text-xs text-text-muted uppercase tracking-wider mb-2'>
                {landing.stats.dataLabel}
              </dt>
              <dd className='text-text-primary'>{landing.stats.dataValue}</dd>
            </div>
            <div>
              <dt className='font-mono text-xs text-text-muted uppercase tracking-wider mb-2'>
                {landing.stats.builtWithLabel}
              </dt>
              <dd className='text-text-primary'>{landing.stats.builtWithValue}</dd>
            </div>
          </dl>
        </section>

        <section id='demo' className='container py-16 md:py-24'>
          <div className='max-w-3xl mb-10'>
            <p className='font-mono text-sm text-accent mb-3'>{landing.demo.eyebrow}</p>
            <h2 className='font-mono text-3xl md:text-4xl text-text-primary mb-4'>{landing.demo.title}</h2>
            <p className='text-text-secondary text-lg leading-relaxed'>{landing.demo.description}</p>
          </div>
          <div className='rounded-lg border border-border-default bg-bg-elevated p-2 sm:p-3'>
            <PulseDemoVideo
              locale={locale}
              ariaLabel={messages.video.ariaLabel}
              playLabel={messages.video.playLabel}
              unsupported={messages.video.unsupported}
            />
          </div>
          <p className='text-text-muted text-sm mt-4'>{landing.demo.caption}</p>
        </section>

        <section className='border-y border-border-subtle bg-bg-elevated'>
          <div className='container py-16 md:py-24'>
            <div className='max-w-3xl mb-12'>
              <p className='font-mono text-sm text-accent mb-3'>{landing.rhythm.eyebrow}</p>
              <h2 className='font-mono text-3xl md:text-4xl text-text-primary mb-4'>{landing.rhythm.title}</h2>
              <p className='text-text-secondary text-lg'>{landing.rhythm.description}</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {landing.featureShowcases.map((feature) => (
                <article
                  key={feature.title}
                  className='rounded-lg border border-border-subtle bg-bg-base overflow-hidden'>
                  <div
                    className='relative border-b border-border-subtle'
                    style={{ aspectRatio: screenshotAspectRatio }}>
                    <Image
                      src={`${pulseImageDir}/${feature.imageFile}`}
                      alt={feature.alt}
                      fill
                      sizes='(min-width: 768px) 33vw, 100vw'
                      className='object-cover'
                    />
                  </div>
                  <div className='p-6'>
                    <div className='flex items-center justify-between gap-4 mb-3'>
                      <h3 className='font-mono text-xl text-text-primary'>{feature.title}</h3>
                      <Tag variant='outline' size='sm'>
                        {feature.badge}
                      </Tag>
                    </div>
                    <p className='text-text-secondary'>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='container py-16 md:py-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-24'>
            <div
              className='relative overflow-hidden rounded-lg border border-border-default bg-bg-elevated'
              style={{ aspectRatio: screenshotAspectRatio }}>
              <Image
                src={`${pulseImageDir}/history.png`}
                alt={landing.history.imageAlt}
                fill
                sizes='(min-width: 768px) 50vw, 100vw'
                className='object-cover'
              />
            </div>
            <div>
              <LuHistory className='text-accent mb-6' size={32} aria-hidden='true' />
              <p className='font-mono text-sm text-accent mb-3'>{landing.history.eyebrow}</p>
              <h2 className='font-mono text-3xl md:text-4xl text-text-primary mb-5'>{landing.history.title}</h2>
              <p className='text-text-secondary text-lg leading-relaxed mb-6'>{landing.history.description}</p>
              <ul className='space-y-3'>
                {landing.history.items.map((item) => (
                  <li key={item} className='flex items-center gap-3 text-text-secondary'>
                    <span className='w-2 h-2 rounded-full bg-accent' aria-hidden='true' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center'>
            <div className='md:order-last grid grid-cols-2 gap-4'>
              <div
                className='relative overflow-hidden rounded-lg border border-border-default bg-bg-elevated col-span-2'
                style={{ aspectRatio: screenshotAspectRatio }}>
                <Image
                  src={`${pulseImageDir}/settings.png`}
                  alt={landing.feedback.settingsImageAlt}
                  fill
                  sizes='(min-width: 768px) 50vw, 100vw'
                  className='object-cover'
                />
              </div>
              <div
                className='relative overflow-hidden rounded-lg border border-border-default bg-bg-elevated col-span-2'
                style={{ aspectRatio: screenshotAspectRatio }}>
                <Image
                  src={`${pulseImageDir}/celebration.png`}
                  alt={landing.feedback.celebrationImageAlt}
                  fill
                  sizes='(min-width: 768px) 50vw, 100vw'
                  className='object-cover'
                />
              </div>
            </div>
            <div>
              <LuSparkles className='text-accent mb-6' size={32} aria-hidden='true' />
              <p className='font-mono text-sm text-accent mb-3'>{landing.feedback.eyebrow}</p>
              <h2 className='font-mono text-3xl md:text-4xl text-text-primary mb-5'>{landing.feedback.title}</h2>
              <p className='text-text-secondary text-lg leading-relaxed mb-6'>{landing.feedback.description}</p>
              <ul className='space-y-3 mb-6'>
                {landing.feedback.items.map((item) => (
                  <li key={item} className='flex items-center gap-3 text-text-secondary'>
                    <span className='w-2 h-2 rounded-full bg-accent' aria-hidden='true' />
                    {item}
                  </li>
                ))}
              </ul>
              <div className='flex flex-wrap gap-2 mb-4'>
                {landing.feedback.soundNames.map((choice) => (
                  <Tag key={choice} variant='outline' size='md'>
                    {choice}
                  </Tag>
                ))}
              </div>
              <div className='flex flex-wrap gap-2'>
                {landing.feedback.animalNames.map((choice) => (
                  <Tag key={choice} variant='outline' size='md'>
                    {choice}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className='border-y border-border-subtle bg-bg-elevated'>
          <div className='container py-16 md:py-24'>
            <div className='max-w-3xl mb-12'>
              <p className='font-mono text-sm text-accent mb-3'>{landing.native.eyebrow}</p>
              <h2 className='font-mono text-3xl md:text-4xl text-text-primary mb-4'>{landing.native.title}</h2>
              <p className='text-text-secondary text-lg'>{landing.native.description}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {landing.native.features.map((feature, index) => {
                const Icon = nativeIcons[index] ?? LuMonitor
                return (
                  <article key={feature.title} className='p-6 rounded-lg border border-border-subtle bg-bg-base'>
                    <Icon className='text-accent mb-5' size={28} aria-hidden='true' />
                    <h3 className='font-mono text-xl text-text-primary mb-3'>{feature.title}</h3>
                    <p className='text-text-secondary leading-relaxed'>{feature.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className='container py-16 md:py-24'>
          <div className='rounded-lg border border-border-default bg-bg-elevated p-6 md:p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center'>
              <div>
                <LuShieldCheck className='text-success mb-6' size={36} aria-hidden='true' />
                <p className='font-mono text-sm text-success mb-3'>{landing.privacy.eyebrow}</p>
                <h2 className='font-mono text-3xl md:text-4xl text-text-primary mb-5'>{landing.privacy.title}</h2>
                <p className='text-text-secondary text-lg leading-relaxed'>{landing.privacy.description}</p>
              </div>
              <ul className='space-y-4'>
                {landing.privacy.items.map((item) => (
                  <li
                    key={item}
                    className='flex items-center gap-3 p-4 rounded-md bg-bg-base border border-border-subtle text-text-primary'>
                    <LuShieldCheck className='text-success shrink-0' size={18} aria-hidden='true' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className='container pb-16 md:pb-24'>
          <div className='text-center py-16 md:py-24 border-y border-border-subtle'>
            <LuSettings2 className='text-accent mx-auto mb-6' size={32} aria-hidden='true' />
            <Tag variant='status' status='success' size='md'>
              {landing.availableOnAppStore}
            </Tag>
            <h2 className='font-mono text-3xl md:text-4xl text-text-primary mt-6 mb-4'>{landing.closing.title}</h2>
            <p className='text-text-secondary text-lg max-w-2xl mx-auto mb-8'>{landing.closing.description}</p>
            <div className='flex flex-wrap justify-center gap-3'>
              <ButtonLink href={PULSE_APP_STORE_URL} external variant='primary' size='lg'>
                {landing.downloadCta}
                <LuArrowUpRight className='ml-2' size={16} aria-hidden='true' />
              </ButtonLink>
              <ButtonLink href={`${pulsePath}/support`} variant='ghost' size='lg'>
                {landing.closing.getSupport}
              </ButtonLink>
              <ButtonLink href={`${pulsePath}/privacy`} variant='ghost' size='lg'>
                {landing.closing.privacy}
              </ButtonLink>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
