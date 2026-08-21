import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  LuArrowLeft,
  LuClock3,
  LuHistory,
  LuMonitor,
  LuSettings2,
  LuShieldCheck,
  LuSparkles,
} from 'react-icons/lu'
import { ButtonLink } from '../../components/Button'
import PulseDemoVideo from '../../components/PulseDemoVideo'
import { WatchPulseDemoButton } from '../../components/WatchPulseDemoButton'
import { Tag } from '../../components/Tag'
import { SITE_CONFIG, SITE_URL } from '../../lib/constants'
import { PROJECTS } from '../projects'

const pulseProject = PROJECTS.find((project) => project.slug === 'pulse-pomodoro')!
const pageTitle = 'Pulse Pomodoro — A calm Pomodoro timer for macOS'
const pageDescription =
  'A free, native macOS menu-bar Pomodoro timer with focus history, customizable sessions, gentle alerts, and no data collection.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/pulse-pomodoro`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/pulse-pomodoro`,
    type: 'website',
    siteName: `${SITE_CONFIG.name} Blog`,
    images: [
      {
        url: '/images/pulse-pomodoro/focus-dashboard.jpg',
        width: 1024,
        height: 576,
        alt: pulseProject.imgAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/images/pulse-pomodoro/focus-dashboard.jpg'],
  },
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pulse Pomodoro',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS 14.6 or later',
  description: pageDescription,
  url: `${SITE_URL}/pulse-pomodoro`,
  downloadUrl: `${SITE_URL}/pulse-pomodoro`,
  author: {
    '@type': 'Person',
    name: SITE_CONFIG.name,
    url: SITE_URL,
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/PreOrder',
  },
  featureList: pulseProject.features?.map((feature) => feature.text),
  screenshot: `${SITE_URL}${pulseProject.img}`,
}

const sessions = [
  {
    title: 'Focus',
    duration: '25 min',
    description: 'Settle into one task with a clear, distraction-free countdown.',
    image: '/images/pulse-pomodoro/focus-session-running.jpg',
    alt: 'Pulse Pomodoro focus session counting down in the menu bar',
  },
  {
    title: 'Short Break',
    duration: '5 min',
    description: 'Step away briefly and return with a little more room to think.',
    image: '/images/pulse-pomodoro/short-break.jpg',
    alt: 'Pulse Pomodoro short break ready to start',
  },
  {
    title: 'Long Break',
    duration: '15 min',
    description: 'Recover after a longer stretch of focused work.',
    image: '/images/pulse-pomodoro/long-break.jpg',
    alt: 'Pulse Pomodoro long break ready to start',
  },
]

const nativeFeatures = [
  {
    icon: LuMonitor,
    title: 'Lives in the menu bar',
    description: 'No Dock icon and no main window competing for your attention.',
  },
  {
    icon: LuClock3,
    title: 'Stays accurate',
    description: 'End-date-based timing remains correct across sleep, wake, and relaunches.',
  },
  {
    icon: LuShieldCheck,
    title: 'Keeps data local',
    description: 'Your settings and focus history never leave your Mac.',
  },
]

export default function PulsePomodoroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <div className="overflow-hidden">
        <section className="container py-16 md:py-24 relative">
          <div
            className="absolute top-16 right-0 w-64 h-64 rounded-full bg-accent-muted blur-3xl"
            aria-hidden="true"
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors duration-fast mb-12"
          >
            <LuArrowLeft size={16} aria-hidden="true" />
            Back to projects
          </Link>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="animate-slide-up">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Tag variant="status" status="warning" size="md">
                  Coming soon on the Mac App Store
                </Tag>
                <span className="font-mono text-sm text-text-muted">Free · macOS 14.6+</span>
              </div>
              <p className="font-mono text-sm text-accent mb-4">Pulse Pomodoro</p>
              <h1 className="font-mono text-4xl md:text-6xl font-medium text-text-primary mb-6">
                Focus gently.
                <br />
                Finish intentionally.
              </h1>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                A native Pomodoro timer designed to live quietly in your menu bar—
                always within reach, never in the way.
              </p>
              <div className="flex flex-wrap gap-3">
                <WatchPulseDemoButton />
                <ButtonLink href="/pulse-pomodoro/support" variant="ghost" size="lg">
                  Support
                </ButtonLink>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-accent-muted rounded-lg translate-x-3 translate-y-3" aria-hidden="true" />
              <div className="relative aspect-video overflow-hidden rounded-lg border border-border-default bg-bg-elevated">
                <Image
                  src="/images/pulse-pomodoro/focus-dashboard.jpg"
                  alt={pulseProject.imgAlt}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <dl className="relative grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-24 pt-8 border-t border-border-subtle">
            <div>
              <dt className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Platform</dt>
              <dd className="text-text-primary">Native macOS</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Price</dt>
              <dd className="text-text-primary">Free</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Data collection</dt>
              <dd className="text-text-primary">None</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Built with</dt>
              <dd className="text-text-primary">SwiftUI + AppKit</dd>
            </div>
          </dl>
        </section>

        <section id="demo" className="container py-16 md:py-24">
          <div className="max-w-3xl mb-10">
            <p className="font-mono text-sm text-accent mb-3">A quieter way to focus</p>
            <h2 className="font-mono text-3xl md:text-4xl text-text-primary mb-4">
              Your timer is there when you need it—and gone when you do not.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Open Pulse from the menu bar, choose a session, and close the popover.
              The timer keeps working while you do.
            </p>
          </div>
          <div className="rounded-lg border border-border-default bg-bg-elevated p-2 sm:p-3">
            <PulseDemoVideo />
          </div>
          <p className="text-text-muted text-sm mt-4">
            Product walkthrough showing session controls, history, completion feedback, and settings.
          </p>
        </section>

        <section className="border-y border-border-subtle bg-bg-elevated">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mb-12">
              <p className="font-mono text-sm text-accent mb-3">A rhythm you control</p>
              <h2 className="font-mono text-3xl md:text-4xl text-text-primary mb-4">
                Focus, pause, recover, repeat.
              </h2>
              <p className="text-text-secondary text-lg">
                Pulse suggests what comes next but never starts a session for you. Every duration can be adjusted to fit your day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sessions.map((session) => (
                <article key={session.title} className="rounded-lg border border-border-subtle bg-bg-base overflow-hidden">
                  <div className="relative aspect-video border-b border-border-subtle">
                    <Image
                      src={session.image}
                      alt={session.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <h3 className="font-mono text-xl text-text-primary">{session.title}</h3>
                      <Tag variant="outline" size="sm">{session.duration}</Tag>
                    </div>
                    <p className="text-text-secondary">{session.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-24">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-border-default bg-bg-elevated">
              <Image
                src="/images/pulse-pomodoro/focus-dashboard.jpg"
                alt="Pulse weekly focus history showing daily sessions, total focus time, and streak"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <LuHistory className="text-accent mb-6" size={32} aria-hidden="true" />
              <p className="font-mono text-sm text-accent mb-3">Progress without pressure</p>
              <h2 className="font-mono text-3xl md:text-4xl text-text-primary mb-5">
                See the work adding up.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                A compact weekly history gives you enough context to build momentum without turning focus into another dashboard to manage.
              </p>
              <ul className="space-y-3">
                {['Daily session counts', 'Weekly focus summaries', 'All-time focused hours', 'Consecutive-day streaks'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="md:order-last grid grid-cols-2 gap-4">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-border-default bg-bg-elevated col-span-2">
                <Image
                  src="/images/pulse-pomodoro/settings.jpg"
                  alt="Pulse settings for durations, completion sounds, animal animations, and launch at login"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-border-default bg-bg-elevated col-span-2">
                <Image
                  src="/images/pulse-pomodoro/panda-celebration.jpg"
                  alt="Panda celebration animation appearing below the macOS menu bar"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <LuSparkles className="text-accent mb-6" size={32} aria-hidden="true" />
              <p className="font-mono text-sm text-accent mb-3">Gentle feedback, your way</p>
              <h2 className="font-mono text-3xl md:text-4xl text-text-primary mb-5">
                Make finishing feel rewarding.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Choose from six calm completion sounds and six animal celebrations, or turn either one off. Pulse adapts to how quiet—or playful—you want your workspace to feel.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Crystal Chime', 'Soft Bell', 'Zen Gong', 'Panda', 'Fox', 'Rabbit'].map((choice) => (
                  <Tag key={choice} variant="outline" size="md">{choice}</Tag>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border-subtle bg-bg-elevated">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mb-12">
              <p className="font-mono text-sm text-accent mb-3">Native by design</p>
              <h2 className="font-mono text-3xl md:text-4xl text-text-primary mb-4">
                Built to feel at home on your Mac.
              </h2>
              <p className="text-text-secondary text-lg">
                SwiftUI, AppKit, and macOS system conventions keep Pulse fast, familiar, and dependable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nativeFeatures.map(({ icon: Icon, title, description }) => (
                <article key={title} className="p-6 rounded-lg border border-border-subtle bg-bg-base">
                  <Icon className="text-accent mb-5" size={28} aria-hidden="true" />
                  <h3 className="font-mono text-xl text-text-primary mb-3">{title}</h3>
                  <p className="text-text-secondary leading-relaxed">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="rounded-lg border border-border-default bg-bg-elevated p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <LuShieldCheck className="text-success mb-6" size={36} aria-hidden="true" />
                <p className="font-mono text-sm text-success mb-3">Private by default</p>
                <h2 className="font-mono text-3xl md:text-4xl text-text-primary mb-5">
                  Your focus is not a data point.
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Pulse has no account, analytics, advertising, or network requests. Settings and history stay in local macOS storage.
                </p>
              </div>
              <ul className="space-y-4">
                {['No sign-in', 'No cloud sync', 'No tracking', 'No access to personal files', 'No data leaves your Mac'].map((item) => (
                  <li key={item} className="flex items-center gap-3 p-4 rounded-md bg-bg-base border border-border-subtle text-text-primary">
                    <LuShieldCheck className="text-success" size={18} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container pb-16 md:pb-24">
          <div className="text-center py-16 md:py-24 border-y border-border-subtle">
            <LuSettings2 className="text-accent mx-auto mb-6" size={32} aria-hidden="true" />
            <Tag variant="status" status="warning" size="md">
              Coming soon on the Mac App Store
            </Tag>
            <h2 className="font-mono text-3xl md:text-4xl text-text-primary mt-6 mb-4">
              Make space for focused work.
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              Pulse Pomodoro will be free to download. Until then, read the privacy policy or get support.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink href="/pulse-pomodoro/support" variant="primary" size="lg">
                Get support
              </ButtonLink>
              <ButtonLink href="/pulse-pomodoro/privacy" variant="ghost" size="lg">
                Privacy
              </ButtonLink>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
