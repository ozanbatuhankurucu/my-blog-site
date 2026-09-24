import { Metadata } from 'next'
import Link from 'next/link'
import { LuArrowLeft } from 'react-icons/lu'
import { PulseLocaleSwitcher } from '../../../components/PulseLocaleSwitcher'
import { getPulseLanguageAlternates, PULSE_APP_NAME, PULSE_APP_PATH, SITE_URL } from '../../../lib/constants'

export const metadata: Metadata = {
  title: `${PULSE_APP_NAME} Privacy Policy`,
  description: `Privacy policy for ${PULSE_APP_NAME}, a Pomodoro timer for Mac and iPhone.`,
  alternates: {
    canonical: `${SITE_URL}${PULSE_APP_PATH}/privacy`,
    languages: getPulseLanguageAlternates('privacy'),
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PulsePomodoroPrivacyPage() {
  return (
    <article className="container max-w-2xl py-16 md:py-24">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <Link
          href={PULSE_APP_PATH}
          className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors duration-fast">
          <LuArrowLeft size={16} aria-hidden="true" />
          {PULSE_APP_NAME}
        </Link>
        <PulseLocaleSwitcher locale="en" pathSuffix="privacy" />
      </div>

      <header className="mb-10">
        <h1 className="font-mono text-3xl md:text-4xl font-medium text-text-primary mb-4">Privacy Policy</h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-2">
          <strong className="text-text-primary">{PULSE_APP_NAME}</strong> — Pomodoro timer for Mac and iPhone
        </p>
        <p className="text-text-muted text-sm">Last updated: September 24, 2026</p>
      </header>

      <div className="space-y-10 text-text-secondary leading-relaxed">
        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Summary</h2>
          <p>
            {PULSE_APP_NAME} does not require an account and does not collect names, emails, or personal content. The app
            may send anonymous, privacy-preserving usage analytics so we can improve focus flows. Your timer settings and
            focus history stay on your device.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Data stored on your device</h2>
          <p>
            Your timer settings, session preferences, and focus history are saved locally on your Mac or iPhone using
            standard system storage. Focus history content itself is not uploaded to our analytics provider.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Analytics</h2>
          <p className="mb-4">
            We use{' '}
            <a
              href="https://telemetrydeck.com"
              className="text-accent hover:text-accent-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              TelemetryDeck
            </a>
            , a privacy-focused analytics service, to understand how the app is used (for example: focus or break sessions
            started or completed, daily goal changes, settings changes, and whether onboarding finished). Signals do not
            include free-form text, names, emails, or your focus history contents.
          </p>
          <p className="mb-4">
            TelemetryDeck identifies installs with a hashed device-scoped identifier and may attach non-personal device
            metadata (such as model, OS version, and locale). This data is used only for analytics, is not linked to your
            identity by us, and is not used for tracking across other companies&apos; apps or websites.
          </p>
          <p>
            Learn more:{' '}
            <a
              href="https://telemetrydeck.com/docs/guides/privacy-faq/"
              className="text-accent hover:text-accent-hover transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              TelemetryDeck Privacy FAQ
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">App Store updates</h2>
          <p>
            If you use &ldquo;Check for Updates&rdquo; in Settings, the app may contact Apple to see whether a newer
            version is available on the App Store.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Launch at Login (Mac)</h2>
          <p>
            If you enable Launch at Login in Settings on Mac, the app uses macOS system APIs to register as a login item.
            This preference is controlled by you and can be disabled at any time.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">
            Notifications and Live Activities (iPhone)
          </h2>
          <p>
            On iPhone, optional local notifications and Live Activities help you see when a session ends. Permission is
            requested only when you choose to enable those features. Notification content stays on your device.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">What we do not do</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>No account or sign-in</li>
            <li>No advertising networks</li>
            <li>No sale of personal information</li>
            <li>No access to your contacts, photos, precise location, camera, or microphone for analytics</li>
          </ul>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Children</h2>
          <p>
            {PULSE_APP_NAME} does not knowingly collect personal information from children. Analytics signals are
            anonymous and do not include personal content.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Changes</h2>
          <p>If this policy changes, the updated version will be posted at this URL.</p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Contact</h2>
          <p>
            Questions about this policy:{' '}
            <a href="mailto:ozanbatusss@gmail.com" className="text-accent hover:text-accent-hover transition-colors">
              ozanbatusss@gmail.com
            </a>
          </p>
        </section>
      </div>
    </article>
  )
}
