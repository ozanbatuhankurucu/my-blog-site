import { Metadata } from 'next'
import { SITE_URL } from '../../../lib/constants'

export const metadata: Metadata = {
  title: 'Pulse Pomodoro Support',
  description: 'Support and getting started guide for Pulse Pomodoro, a menu bar Pomodoro timer for Mac.',
  alternates: {
    canonical: `${SITE_URL}/pulse-pomodoro/support`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PulsePomodoroSupportPage() {
  return (
    <article className="container max-w-2xl py-16 md:py-24">
      <header className="mb-10">
        <h1 className="font-mono text-3xl md:text-4xl font-medium text-text-primary mb-4">
          Pulse Pomodoro Support
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          <strong className="text-text-primary">Pulse Pomodoro</strong> is a simple menu bar Pomodoro timer for Mac.
        </p>
      </header>

      <div className="space-y-10 text-text-secondary leading-relaxed">
        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-4">Getting started</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Click the Pulse icon in your menu bar (top-right area of the screen).</li>
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
