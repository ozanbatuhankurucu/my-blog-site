import { Metadata } from 'next'
import { SITE_URL } from '../../../lib/constants'

export const metadata: Metadata = {
  title: 'Pulse Pomodoro Privacy Policy',
  description: 'Privacy policy for Pulse Pomodoro, a menu bar Pomodoro timer for Mac.',
  alternates: {
    canonical: `${SITE_URL}/pulse-pomodoro/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PulsePomodoroPrivacyPage() {
  return (
    <article className="container max-w-2xl py-16 md:py-24">
      <header className="mb-10">
        <h1 className="font-mono text-3xl md:text-4xl font-medium text-text-primary mb-4">Privacy Policy</h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-2">
          <strong className="text-text-primary">Pulse Pomodoro</strong> — menu bar Pomodoro timer for Mac
        </p>
        <p className="text-text-muted text-sm">Last updated: August 20, 2026</p>
      </header>

      <div className="space-y-10 text-text-secondary leading-relaxed">
        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Summary</h2>
          <p>Pulse Pomodoro does not collect, store, or transmit any personal data.</p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Data collection</h2>
          <p className="mb-4">Pulse Pomodoro does not collect any information from you. The app:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Does not require an account or sign-in</li>
            <li>Does not use analytics or advertising</li>
            <li>Does not make network requests</li>
            <li>Does not access your files, contacts, location, camera, or microphone</li>
          </ul>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Data stored on your device</h2>
          <p>
            Your timer settings, session preferences, and focus history are saved locally on your Mac using standard
            macOS storage. This data never leaves your device.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Launch at Login</h2>
          <p>
            If you enable Launch at Login in Settings, Pulse Pomodoro uses macOS system APIs to register as a login
            item. This preference is controlled by you and can be disabled at any time.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Children</h2>
          <p>Pulse Pomodoro does not collect personal information from anyone, including children.</p>
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
