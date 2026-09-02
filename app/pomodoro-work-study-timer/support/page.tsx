import { Metadata } from 'next'
import Link from 'next/link'
import { LuArrowLeft } from 'react-icons/lu'
import { PulseLocaleSwitcher } from '../../../components/PulseLocaleSwitcher'
import { getPulseLanguageAlternates, PULSE_APP_NAME, PULSE_APP_PATH, SITE_URL } from '../../../lib/constants'

export const metadata: Metadata = {
  title: `${PULSE_APP_NAME} Support`,
  description: `Support and getting started guide for ${PULSE_APP_NAME}, a menu bar Pomodoro timer for Mac.`,
  alternates: {
    canonical: `${SITE_URL}${PULSE_APP_PATH}/support`,
    languages: getPulseLanguageAlternates('support'),
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PulsePomodoroSupportPage() {
  return (
    <article className="container max-w-2xl py-16 md:py-24">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <Link
          href={PULSE_APP_PATH}
          className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors duration-fast">
          <LuArrowLeft size={16} aria-hidden="true" />
          {PULSE_APP_NAME}
        </Link>
        <PulseLocaleSwitcher locale="en" pathSuffix="support" />
      </div>

      <header className="mb-10">
        <h1 className="font-mono text-3xl md:text-4xl font-medium text-text-primary mb-4">
          {PULSE_APP_NAME} Support
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          <strong className="text-text-primary">{PULSE_APP_NAME}</strong> is a simple menu bar Pomodoro timer for Mac.
        </p>
      </header>

      <div className="space-y-10 text-text-secondary leading-relaxed">
        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Getting started</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Click the app icon in your menu bar (top-right area of the screen).</li>
            <li>Choose Focus, Short Break, or Long Break.</li>
            <li>
              Press <strong className="text-text-primary">Start</strong>. You can close the popover while the timer runs.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Settings</h2>
          <p>
            Open the <strong className="text-text-primary">Settings</strong> tab to change session lengths, completion
            sounds, menu bar animations, and Launch at Login.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Requirements</h2>
          <p>macOS 14.6 or later.</p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Contact</h2>
          <p className="mb-2">For help, feedback, or bug reports:</p>
          <p>
            <a href="mailto:ozanbatusss@gmail.com" className="text-accent hover:text-accent-hover transition-colors">
              ozanbatusss@gmail.com
            </a>
          </p>
        </section>
      </div>
    </article>
  )
}
