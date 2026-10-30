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
    metaTitle: `${PULSE_APP_NAME} — Focus timer for iPhone and Mac`,
    metaDescription: `${PULSE_APP_NAME} is a calm Pomodoro timer for iPhone and Mac with Focus History, Daily Focus Goals, Apple and Google sign-in, and offline-first sync across your devices.`,
    heroImageAlt: `${PULSE_APP_NAME} focus timer and weekly history overview`,
    backToProjects: 'Back to projects',
    availableOnAppStore: 'Available on the App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Focus timer for iPhone and Mac',
    tagline: 'A gentle Pomodoro timer that helps you focus — on iPhone and in your Mac menu bar.',
    description: `Start a Focus session, take a break, and keep your history with you. Sign in with Apple or Google so Daily Focus Goals, Focus History, and synced preferences stay with your account across iPhone and Mac — while the timer still works offline.`,
    downloadCta: 'Download on the App Store',
    watchDemo: 'Watch it in action',
    supportCta: 'Support',
    stats: {
      platformLabel: 'Platforms',
      platformValue: 'iPhone & Mac',
      languagesLabel: 'Languages',
      languagesValue: '48 languages',
      dataLabel: 'Sync',
      dataValue: 'Offline-first',
      builtWithLabel: 'Built with',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'A quieter way to focus',
      title: 'Your timer is there when you need it—and gone when you do not.',
      description: `On Mac, open ${PULSE_APP_NAME} from the menu bar, choose a session, and close the popover. On iPhone, start Focus from Home and keep going with Live Activities on supported devices. The timer keeps working while you do.`,
      caption:
        'Focus and break timers, Daily Focus Goals, Focus History, streak tracking, 48-language localization, and optional completion alerts.',
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
          'The countdown runs quietly while you work. Pause, reset, or skip — you stay in control on iPhone and Mac.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} focus session running with pause controls and countdown`,
      },
      {
        title: 'Menu bar',
        badge: 'Mac',
        description:
          'On Mac, show or hide the remaining time in the menu bar. The fixed-width status item stays put without shifting the popover, up to 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} countdown displayed in the macOS menu bar`,
      },
      {
        title: 'Customisation',
        badge: 'Your rules',
        description:
          'Flexible durations, Daily Focus Goals, completion sounds and animations, 48 UI languages, and appearance preferences.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} settings for durations, completion alerts, language, and goals`,
      },
    ],
    history: {
      eyebrow: 'Progress without pressure',
      title: 'See the work adding up.',
      description:
        'Open Focus History to review totals and streaks. When you are signed in, history can sync across your iPhone and Mac so progress follows you.',
      items: ['Total focus time', 'Completed session count', 'Current streak', 'Best streak', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} weekly focus history with session counts, focused hours, and streak`,
    },
    feedback: {
      eyebrow: 'Gentle feedback, your way',
      title: 'Make finishing feel rewarding.',
      description: `Choose from six calm completion sounds and six animal celebrations, or turn either one off. ${PULSE_APP_NAME} shows the right message when a Focus, Short Break, or Long Break session ends.`,
      items: [
        'Session-aware completion title and subtitle',
        'UI in 48 languages with system-language default',
        'Language and appearance preferences on each device',
        'Optional motivation reminders on iPhone',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} settings for durations, language, completion sounds, and goals`,
      celebrationImageAlt: `${PULSE_APP_NAME} rabbit celebration animation when a session completes`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Monkey', 'Koala', 'Cat', 'Fox', 'Panda', 'Rabbit'],
    },
    native: {
      eyebrow: 'Native by design',
      title: 'Built to feel at home on Apple devices.',
      description: `SwiftUI, AppKit, and system conventions keep ${PULSE_APP_NAME} fast and familiar — with VoiceOver labels and Reduce Motion support throughout.`,
      features: [
        {
          title: 'Mac menu bar & iPhone Home',
          description: 'A quiet menu bar companion on Mac, and a focused Home experience on iPhone.',
        },
        {
          title: 'Stays accurate',
          description:
            'Sessions remain correct across sleep, wake, and relaunches, with history recorded at the actual deadline.',
        },
        {
          title: 'Offline-first sync',
          description:
            'Keep focusing without a connection. When you are back online, signed-in changes sync to your account.',
        },
        {
          title: 'Speaks your language',
          description:
            'Full UI in 48 languages with system-language default and manual override in Settings.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Private by design',
      title: 'Your focus stays yours.',
      description: `${PULSE_APP_NAME} uses an account so history can sync between your devices. We store only what sync needs, never sell your data, and keep analytics separate from your focus history.`,
      items: [
        'Sign in with Apple or Google',
        'Offline-first focus on each device',
        'Cloud sync for history and synced preferences',
        'No advertising networks',
        'Delete your account anytime in Settings',
      ],
    },
    closing: {
      title: 'Make space for focused work.',
      description: `Get ${PULSE_APP_NAME} on the App Store for iPhone and Mac, or read the privacy policy and support page if you need help.`,
      getSupport: 'Get support',
      privacy: 'Privacy',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Support`,
    metaDescription: `Support, FAQ, and account help for ${PULSE_APP_NAME} on iPhone and Mac — including Pomodoro Pro, purchases, Focus Protection, sign-in, sync, and account deletion.`,
    title: `${PULSE_APP_NAME} Support`,
    intro: `${PULSE_APP_NAME} is a calm Pomodoro timer for iPhone and Mac. Sign in with Apple or Google to sync Focus History across your devices. On iPhone, optional Pomodoro Pro unlocks Focus Protection, custom tags, and tag insights.`,
    gettingStarted: {
      title: 'Getting started',
      items: [
        {
          question: 'How do I start a Focus session?',
          answer:
            'On Mac, click the app icon in the menu bar, choose Focus, Short Break, or Long Break, then press Start. On iPhone, open the app, choose a session on Home, and press Start. You can leave the app while the timer runs.',
        },
        {
          question: 'How do I change Focus and Break durations?',
          answer:
            'Open Settings and adjust Focus, Short Break, and Long Break lengths. You can also pick a preset rhythm, then fine-tune the minutes.',
        },
        {
          question: 'How do I configure Daily Focus Goals?',
          answer:
            'In Settings, set how many Focus sessions you want each day. Progress appears on Home and in Focus History.',
        },
        {
          question: 'How do I view Focus History?',
          answer:
            'Open Focus History from the app (on Mac, from the popover or status menu). You will see totals, streaks, and weekly progress.',
        },
        {
          question: 'How do I change language and appearance?',
          answer:
            'In Settings, choose Language (System or a supported language) and Appearance (System, Light, or Dark). These preferences stay on each device and are not synced.',
        },
      ],
    },
    accounts: {
      title: 'Accounts',
      items: [
        {
          question: 'Why is sign-in required?',
          answer:
            'An account lets Focus History, Daily Focus Goals, and synced preferences stay with you across iPhone and Mac. New installs ask you to sign in before using the timer. Devices upgrading from older versions may keep local history usable until you sign in. Pomodoro Pro purchases also stay with your signed-in account.',
        },
        {
          question: 'How do I sign in with Apple or Google?',
          answer:
            'On the sign-in screen, choose Continue with Apple or Continue with Google and finish the provider flow. Apple may offer Hide My Email.',
        },
        {
          question: 'How do I sign out?',
          answer:
            'Open Settings → Account → Sign out. If some changes have not synced yet, the app may ask you to sync first or sign out anyway. Signing out does not delete your account.',
        },
        {
          question: 'How do I sign back in?',
          answer:
            'Use the same Apple or Google method on the sign-in screen. Your cloud history restores to that account on the device.',
        },
        {
          question: 'What happens if I use a different account?',
          answer:
            'Each account has its own history. Signing into another account does not merge unrelated histories. Choose carefully before confirming a history claim on a device that already has local sessions.',
        },
        {
          question: 'Can I link Apple and Google to the same account?',
          answer:
            'Yes. In Settings → Account you can link the other sign-in method when it is not already used by a different account.',
        },
      ],
    },
    cloudSync: {
      title: 'Cloud synchronization',
      items: [
        {
          question: 'What syncs between devices?',
          answer:
            'Focus and break session history (including the tag you chose), the tags you create, Daily Focus Goal records, streak-related account data, and synced preferences such as session lengths, daily goal, sound, animations, completion sound, and celebration animal.',
        },
        {
          question: 'What happens without internet?',
          answer:
            'After you are signed in, you can keep using the timer offline. New sessions and changes stay on the device until a connection is available.',
        },
        {
          question: 'What happens when I am back online?',
          answer:
            'The app syncs pending changes with your account. Sync is offline-first and eventually consistent — it is not instantaneous real-time collaboration.',
        },
        {
          question: 'How do I use the same account on iPhone and Mac?',
          answer:
            'Install the app on both devices and sign in with the same Apple or Google account. After restore finishes, Focus History can appear on both.',
        },
        {
          question: 'What if history is missing?',
          answer:
            'Confirm you are signed into the same account, wait for restore/sync to finish, and check Focus History again. If you signed into a different account, that account will show its own history.',
        },
      ],
    },
    migration: {
      title: 'Upgrading from an older version',
      items: [
        {
          question: 'What happens to my existing local history?',
          answer:
            'Existing local history is not silently deleted. After sign-in, the app asks before adding that history to your account.',
        },
        {
          question: 'How should I claim my history?',
          answer:
            'Sign into the account that should own the history, review the Add your history screen, then choose Add to this account. Use a different account if the shown account is wrong. Sessions cannot be moved to another account later.',
        },
        {
          question: 'What if device and account settings differ?',
          answer:
            'The app may ask whether to keep this device’s settings or use account settings. Language, appearance, notifications, and motivation reminders stay device-local.',
        },
      ],
    },
    notifications: {
      title: 'Notifications',
      items: [
        {
          question: 'How do I enable notifications on iPhone?',
          answer:
            'Open Settings → Notifications and choose Enable, or open system Settings if permission was previously denied.',
        },
        {
          question: 'How do Motivation reminders work?',
          answer:
            'On iPhone, open Settings → Motivation reminders and turn them on after notifications are allowed. You can pause them or set quiet hours. They are optional and off by default.',
        },
        {
          question: 'What if notifications are disabled?',
          answer:
            'Session-end alerts and motivation reminders need notification permission. Use Settings → Notifications → Open Settings to turn them on in iOS Settings.',
        },
        {
          question: 'How do Live Activities work?',
          answer:
            'On supported iPhones, an optional Live Activity can show an active session on the Lock Screen and Dynamic Island. Permission is requested when you enable related features.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'What is Pomodoro Pro?',
          answer:
            'Pomodoro Pro is an optional in-app purchase on iPhone. It unlocks Focus Protection, custom tags (your own names and colors), and Tag Insights (week and month focus time by tag). The timer, built-in tags, Focus History, and sync stay available without Pro.',
        },
        {
          question: 'What purchase options are available?',
          answer:
            'Pomodoro Pro is offered as a Monthly subscription, a Yearly (Annual) subscription, or a Lifetime one-time purchase. Subscriptions renew automatically unless you cancel at least 24 hours before the end of the current period. Lifetime is charged once and is not a subscription.',
        },
        {
          question: 'Where do I buy or see Pomodoro Pro?',
          answer:
            'On iPhone, open Settings → Pomodoro Pro, or tap the protection chip on Home. You must be signed in. Pro stays with your account on every device you sign in on.',
        },
        {
          question: 'How do I restore purchases?',
          answer:
            'Use Restore Purchases on the paywall or in Settings → Pomodoro Pro. Purchases made with the same Apple Account move to the account you are signed in to. If nothing is found, confirm you are using the Apple Account that bought Pro and try again while online.',
        },
      ],
    },
    purchases: {
      title: 'Subscriptions and purchases',
      items: [
        {
          question: 'How do I manage or cancel a subscription?',
          answer:
            'Subscriptions are billed by Apple. On iPhone, open Settings → Pomodoro Pro → Manage Subscription, or go to Settings → [your name] → Subscriptions and select the app. Cancel at least 24 hours before renewal to avoid the next charge. Deleting the app or your Pomodoro account does not cancel a subscription.',
        },
        {
          question: 'How do I request a refund?',
          answer:
            'Refunds are handled by Apple. Visit reportaproblem.apple.com, sign in with the Apple Account used for the purchase, find the transaction, and submit a refund request. We cannot process App Store refunds ourselves.',
        },
        {
          question: 'What if a purchase fails or Pro does not unlock?',
          answer:
            'Stay signed in, check your network connection, and try again. If payment is pending (for example Ask to Buy), Pro unlocks after approval. If you already paid, use Restore Purchases. For payment problems on an active subscription, update your payment method in App Store settings.',
        },
        {
          question: 'What if I buy Lifetime while a subscription is active?',
          answer:
            'Lifetime unlocks Pro permanently, but an existing subscription is not canceled automatically. Turn off auto-renew in App Store subscription settings so you are not charged again.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'What is Focus Protection?',
          answer:
            'Focus Protection is a Pomodoro Pro feature on iPhone. It uses Apple’s Screen Time APIs to block the apps, categories, or websites you choose while a Focus session runs. Breaks are never blocked. When the session ends, blocked apps unlock automatically.',
        },
        {
          question: 'How do I set it up?',
          answer:
            'With Pro active, tap the Focus Protection chip on Home (or open it from Settings). Allow Screen Time access when asked, choose what to block, then turn Focus Protection on. Start a Focus session to apply the shields.',
        },
        {
          question: 'How do I turn it off or unlock apps?',
          answer:
            'Open the Focus Protection sheet and choose Turn Off Now, or turn the feature off. After a session ends you can also use Unlock Apps on the shield screen. To remove the app’s Screen Time access entirely, go to iOS Settings → Screen Time → Apps with Screen Time Access.',
        },
        {
          question: 'What if Focus Protection is not working?',
          answer:
            'Confirm Pro is active, Screen Time access is allowed, and you selected apps or categories to block. Focus Protection only applies during Focus sessions, not breaks. If access was revoked in system Settings, open the app and allow access again. Restarting the iPhone can help after a permission change.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Account and privacy',
      items: [
        {
          question: 'How do I delete my account?',
          answer:
            'Sign in, open Settings → Account → Delete account, then confirm. Your account and synced focus history are permanently deleted from our live database. This cannot be undone. Deletion requires a network connection. Deleting your account does not cancel an App Store subscription — manage that in App Store settings.',
        },
        {
          question: 'What does account deletion affect?',
          answer:
            'Synced cloud data for that account is removed, Sign in with Apple authorization is revoked when stored, the purchase record linked to your account is asked to be deleted from our purchase provider, and the account’s data is removed from the device where you delete it. Local copies on other devices can no longer sync; remove the app or clear them there if needed. Provider backups may retain deleted data for a limited recovery window. Apple keeps its own App Store transaction records.',
        },
        {
          question: 'How do I export my data?',
          answer:
            'Settings → Account → Export my data saves a JSON file with sessions, daily goal targets, synced settings, and account profile. Unclaimed local data can also be exported from the sign-in screen.',
        },
        {
          question: 'Where is the Privacy Policy?',
          answer:
            'Open the Privacy Policy from the product website, or use the privacy link on this site’s product pages.',
        },
      ],
    },
    requirements: {
      title: 'Requirements',
      body: 'iPhone: iOS 17 or later. Mac: macOS 14.6 or later. Pomodoro Pro purchases and Focus Protection are available on iPhone.',
    },
    contact: {
      title: 'Contact',
      body: 'For help, feedback, or bug reports:',
    },
    privacyPolicyLink: 'Privacy Policy',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Privacy Policy`,
    metaDescription: `Privacy policy for ${PULSE_APP_NAME}, covering Apple and Google sign-in, cloud sync, Pomodoro Pro purchases via RevenueCat, Focus Protection, analytics, and account deletion on Mac and iPhone.`,
    title: 'Privacy Policy',
    subtitle: `${PULSE_APP_NAME} — Pomodoro timer for Mac and iPhone`,
    lastUpdated: 'Last updated: October 26, 2026',
    summary: {
      title: 'Summary',
      body: `When you sign in with Apple or Google, your account keeps your focus history, daily goals, and timer settings in sync between your Mac and iPhone. We store only what the app needs for that: your email address, an account identifier, and the focus data you create. We never sell it, never use it for advertising, and never share it with our analytics provider. If you buy Pomodoro Pro on iPhone, our purchase provider RevenueCat keeps your purchase history linked to your account so Pro works on every device you sign in on. Focus Protection’s app choices never leave your iPhone. You can export your data or delete your account at any time from Settings. Separately, the app may send anonymous, privacy-preserving usage analytics so we can improve focus flows.`,
    },
    localData: {
      title: 'Data stored on your device',
      body: 'Your timer settings, session preferences, and focus history are saved locally on your Mac or iPhone using standard system storage, so the timer keeps working offline. Each account signed in on a device has its own separate local store. Your sign-in session is kept in the system Keychain. Language, appearance, Launch at Login, notification, and motivation reminder settings stay on each device and are not synced. Focus history content itself is not uploaded to our analytics provider.',
      migrationSafety:
        'When you first sign in on a device that already has focus history, the app asks before moving that history into your account. Until the move is confirmed on our servers, plus 90 days, the app keeps the previous local copy and a local backup file on the device as a safety net, then removes them automatically.',
    },
    accountAndSync: {
      title: 'Your account and synced data',
      intro: 'If you sign in, we process:',
      items: [
        'Contact info: the email address shared by Sign in with Apple (which may be a private relay address via Hide My Email) or Google. We do not request your name.',
        'Identifiers: an account ID created at sign-in, and a random ID for each install, used only to sync and to identify which device made a change.',
        'Focus data: completed and deleted focus and break sessions (times, durations, local day and time zone, and the tag you chose), the tags you create (name and color), daily goal targets, your best streak, and the synced settings (session lengths, daily goal, sound, animations, completion sound, celebration animal).',
      ],
      closing:
        'This data is used only to provide sync, history, and account features. It is linked to your account, is not used for tracking, and is not shared with third parties other than the processors below.',
    },
    processors: {
      title: 'Processors and storage location',
      bodyBeforeSupabase: 'Account and sync data is stored with',
      bodyAfterSupabase:
        '(database and authentication) in the European Union. Sign-in is handled by',
      orWord: 'or',
      bodyAfterProviders:
        ', depending on the option you choose. Pomodoro Pro purchases are managed with',
      bodyAfterRevenueCat:
        '(see Purchases below). Data is encrypted in transit, and access is restricted so each account can read only its own data.',
    },
    purchases: {
      title: 'Purchases (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro is sold through the App Store; Apple handles payment, and we never see your payment details. To unlock Pro on every device you sign in on, the app shares your account ID with',
      bodyAfterRevenueCat:
        ', which keeps your purchase history (products bought, purchase and renewal dates, and subscription status) linked to that ID. This data is used only to grant and restore Pro access, is not used for tracking, and is not shared with our analytics provider. Pro requires a signed-in account; nothing is sent to RevenueCat before you sign in.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection uses Apple’s Screen Time framework (Family Controls) to block the apps, categories, and websites you choose while a focus session runs. Apple gives the app only opaque tokens for your choices: we cannot see which apps or websites you picked, how you use them, or any other Screen Time data. Your choices stay on that iPhone, are never uploaded or synced, and are not sent to our analytics provider. You can turn Focus Protection off in the app at any time, or remove the app’s access in Settings → Screen Time → Apps with Screen Time Access.',
    },
    retention: {
      title: 'Retention, backups, and deletion',
      items: [
        'Your synced data is kept for as long as your account exists.',
        'Delete account (Settings → Account → Delete account) permanently deletes your account and all synced data from our live database, revokes the app’s Sign in with Apple authorization when one is stored, asks RevenueCat to delete the purchase record linked to your account, and removes that account’s data from the device you delete it on. Local copies on your other devices can no longer sync and stay there until you delete the app on those devices, or remove them from the sign-in screen when it offers to.',
        'Our database provider keeps daily backups for 7 days. Deleted data may remain in those backups until they expire; backups are used only for disaster recovery. We may also keep an encrypted weekly backup for up to 90 days for the same purpose.',
        'Deleting your account does not cancel an App Store subscription; manage or cancel it in your Apple Account settings. Apple keeps its own record of your App Store transactions.',
        'Signing out does not delete anything. Changes that have not synced yet stay on the device until the same account signs in again.',
        'Analytics records are handled by TelemetryDeck under its retention practices and are not used to restore your focus history.',
      ],
    },
    export: {
      title: 'Export',
      body: 'Settings → Account → Export my data saves a JSON file with your sessions, daily goal targets, synced settings, and account profile. Data that has not been moved into an account yet can also be exported from the sign-in screen.',
    },
    analytics: {
      title: 'Analytics',
      introBeforeLink: 'We use',
      introAfterLink:
        ', a privacy-focused analytics service, to understand how the app is used (for example: focus or break sessions started or completed, daily goal changes, settings changes, notification permission results, motivation reminder events, and whether onboarding finished). Signals do not include free-form text, names, emails, or your focus history contents.',
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
      body: 'On iPhone, optional local notifications, motivation reminders, and Live Activities help you see when a session ends or gently return to focus. Permission is requested only when you choose to enable those features. Notification content stays on your device.',
    },
    whatWeDoNotDo: {
      title: 'What we do not do',
      items: [
        'No advertising networks',
        'No sale of personal information',
        'No access to your contacts, photos, precise location, camera, or microphone for analytics',
      ],
    },
    children: {
      title: 'Children',
      body: `${PULSE_APP_NAME} does not knowingly collect personal information from children beyond what an account needs to sync, as described above. Analytics signals are anonymous and do not include personal content.`,
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
