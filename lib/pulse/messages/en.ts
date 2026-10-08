import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const enMessages: PulseMessages = {
  languageLabel: 'Page language',
  video: {
    ariaLabel: `${PULSE_APP_NAME} product walkthrough`,
    playLabel: 'Play walkthrough',
    unsupported: 'Your browser does not support embedded video.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Menu bar Pomodoro timer for macOS`,
    metaDescription: `${PULSE_APP_NAME} is a native macOS Pomodoro timer with a redesigned popover, full focus history, session-aware alerts, and support for 12 languages.`,
    heroImageAlt: `${PULSE_APP_NAME} focus timer and weekly history overview`,
    backToProjects: 'Back to projects',
    availableOnAppStore: 'Available on the Mac App Store',
    eyebrow: 'Menu bar Pomodoro timer',
    tagline: 'A gentle Pomodoro timer that lives in your menu bar.',
    description: `Stay focused without cluttering your desktop. Start a focus session, take a break, and let ${PULSE_APP_NAME} track your progress with full focus history — quietly, in the background.`,
    downloadCta: 'Download on the Mac App Store',
    watchDemo: 'Watch it in action',
    supportCta: 'Support',
    stats: {
      platformLabel: 'Platform',
      platformValue: 'Native macOS',
      languagesLabel: 'Languages',
      languagesValue: '12 languages',
      dataLabel: 'Data collection',
      dataValue: 'None',
      builtWithLabel: 'Built with',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'A quieter way to focus',
      title: 'Your timer is there when you need it—and gone when you do not.',
      description: `Open ${PULSE_APP_NAME} from the menu bar, choose a session, and close the popover. The timer keeps working while you do. On first launch, a brief introduction shows you where to find it — respecting Reduce Motion when enabled.`,
      caption:
        'Redesigned session controls, full focus history, 12-language localization, session-aware completion alerts, and settings.',
    },
    rhythm: {
      eyebrow: 'A rhythm you control',
      title: 'Focus, pause, recover, repeat.',
      description: `${PULSE_APP_NAME} suggests what comes next but never starts a session for you. Every duration can be adjusted to fit your day.`,
    },
    featureShowcases: [
      {
        title: 'Focus',
        badge: '1–120 min',
        description:
          'The countdown runs quietly while you work. Pause, reset, or skip while the menu bar timer stays anchored.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} focus session running with pause controls and menu bar countdown`,
      },
      {
        title: 'Menu bar',
        badge: 'Stable countdown',
        description:
          'Show or hide the remaining time instantly. The fixed-width status item stays put without shifting the popover, up to 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} countdown displayed in the macOS menu bar`,
      },
      {
        title: 'Customisation',
        badge: 'Your rules',
        description:
          'Flexible durations, completion sounds and animations, 12 UI languages, and launch at login.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} settings for durations, completion alerts, language, and launch at login`,
      },
    ],
    history: {
      eyebrow: 'Progress without pressure',
      title: 'See the work adding up.',
      description:
        'Open the full history window from the popover or status menu. Totals and streaks show your progress without turning focus into another dashboard to manage.',
      items: ['Total focus time', 'Completed session count', 'Current streak', 'Best streak'],
      imageAlt: `${PULSE_APP_NAME} weekly focus history with session counts, focused hours, and streak`,
    },
    feedback: {
      eyebrow: 'Gentle feedback, your way',
      title: 'Make finishing feel rewarding.',
      description: `Choose from six calm completion sounds and six animal celebrations, or turn either one off. ${PULSE_APP_NAME} shows the right message when a Focus, Short Break, or Long Break session ends.`,
      items: [
        'Session-aware completion title and subtitle',
        'UI in 12 languages with system-language default',
        'Language override in Settings: System or any supported language',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} settings for durations, language, completion sounds, and launch at login`,
      celebrationImageAlt: `${PULSE_APP_NAME} rabbit celebration animation when a session completes`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Monkey', 'Koala', 'Cat', 'Fox', 'Panda', 'Rabbit'],
    },
    native: {
      eyebrow: 'Native by design',
      title: 'Built to feel at home on your Mac.',
      description: `SwiftUI, AppKit, and macOS system conventions keep ${PULSE_APP_NAME} fast, familiar, and dependable — with VoiceOver labels and Reduce Motion support throughout.`,
      features: [
        {
          title: 'Lives in the menu bar',
          description: 'No Dock icon and no main window competing for your attention.',
        },
        {
          title: 'Stays accurate',
          description:
            'Sessions remain correct across sleep, wake, and relaunches, with history recorded at the actual deadline.',
        },
        {
          title: 'Keeps data local',
          description: 'Your settings and focus history never leave your Mac.',
        },
        {
          title: 'Speaks your language',
          description:
            'Full UI in 12 languages with system-language default and manual override in Settings.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Private by default',
      title: 'Your focus is not a data point.',
      description: `${PULSE_APP_NAME} collects no data. No accounts, analytics, advertising, or network requests. Everything stays on your Mac.`,
      items: [
        'No sign-in',
        'No cloud sync',
        'No tracking',
        'No access to personal files',
        'No data leaves your Mac',
      ],
    },
    closing: {
      title: 'Make space for focused work.',
      description: `Get ${PULSE_APP_NAME} from the Mac App Store, or read the privacy policy and support page if you need help.`,
      getSupport: 'Get support',
      privacy: 'Privacy',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Support`,
    metaDescription: `Support and getting started guide for ${PULSE_APP_NAME}, a menu bar Pomodoro timer for Mac.`,
    title: `${PULSE_APP_NAME} Support`,
    intro: `${PULSE_APP_NAME} is a simple menu bar Pomodoro timer for Mac.`,
    gettingStarted: {
      title: 'Getting started',
      steps: [
        'Click the app icon in your menu bar (top-right area of the screen).',
        'Choose Focus, Short Break, or Long Break.',
        'Press Start. You can close the popover while the timer runs.',
      ],
    },
    settings: {
      title: 'Settings',
      body: 'Open the Settings tab to change session lengths, completion sounds, menu bar animations, and Launch at Login.',
    },
    history: {
      title: 'Full focus history',
      body: 'Open Full History from the popover or the menu bar status menu to see your total focus time, completed sessions, current streak, and best streak.',
    },
    requirements: {
      title: 'Requirements',
      body: 'macOS 14.6 or later.',
    },
    contact: {
      title: 'Contact',
      body: 'For help, feedback, or bug reports:',
    },
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Privacy Policy`,
    metaDescription: `Privacy policy for ${PULSE_APP_NAME}, a Pomodoro timer for Mac and iPhone.`,
    title: 'Privacy Policy',
    subtitle: `${PULSE_APP_NAME} — Pomodoro timer for Mac and iPhone`,
    lastUpdated: 'Last updated: September 24, 2026',
    summary: {
      title: 'Summary',
      body: `${PULSE_APP_NAME} does not require an account and does not collect names, emails, or personal content. The app may send anonymous, privacy-preserving usage analytics so we can improve focus flows. Your timer settings and focus history stay on your device.`,
    },
    localData: {
      title: 'Data stored on your device',
      body: 'Your timer settings, session preferences, and focus history are saved locally on your Mac or iPhone using standard system storage. Focus history content itself is not uploaded to our analytics provider.',
    },
    analytics: {
      title: 'Analytics',
      introBeforeLink: 'We use',
      introAfterLink:
        ', a privacy-focused analytics service, to understand how the app is used (for example: focus or break sessions started or completed, daily goal changes, settings changes, and whether onboarding finished). Signals do not include free-form text, names, emails, or your focus history contents.',
      identifier:
        'TelemetryDeck identifies installs with a hashed device-scoped identifier and may attach non-personal device metadata (such as model, OS version, and locale). This data is used only for analytics, is not linked to your identity by us, and is not used for tracking across other companies’ apps or websites.',
      learnMore: 'Learn more:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store updates',
      body: 'If you use “Check for Updates” in Settings, the app may contact Apple to see whether a newer version is available on the App Store.',
    },
    launchAtLogin: {
      title: 'Launch at Login (Mac)',
      body: 'If you enable Launch at Login in Settings on Mac, the app uses macOS system APIs to register as a login item. This preference is controlled by you and can be disabled at any time.',
    },
    notifications: {
      title: 'Notifications and Live Activities (iPhone)',
      body: 'On iPhone, optional local notifications and Live Activities help you see when a session ends. Permission is requested only when you choose to enable those features. Notification content stays on your device.',
    },
    whatWeDoNotDo: {
      title: 'What we do not do',
      items: [
        'No account or sign-in',
        'No advertising networks',
        'No sale of personal information',
        'No access to your contacts, photos, precise location, camera, or microphone for analytics',
      ],
    },
    children: {
      title: 'Children',
      body: `${PULSE_APP_NAME} does not knowingly collect personal information from children. Analytics signals are anonymous and do not include personal content.`,
    },
    changes: {
      title: 'Changes',
      body: 'If this policy changes, the updated version will be posted at this URL.',
    },
    contact: {
      title: 'Contact',
      body: 'Questions about this policy:',
    },
  },
}
