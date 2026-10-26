export interface PulseVideoMessages {
  ariaLabel: string
  playLabel: string
  unsupported: string
}

export interface PulseFeatureShowcase {
  title: string
  badge: string
  description: string
  imageFile: 'focus-running.png' | 'menubar.png' | 'settings.png'
  alt: string
}

export interface PulseNativeFeature {
  title: string
  description: string
}

export interface PulseFaqItem {
  question: string
  answer: string
}

export interface PulseFaqSection {
  title: string
  items: PulseFaqItem[]
}

export interface PulseLandingMessages {
  metaTitle: string
  metaDescription: string
  heroImageAlt: string
  backToProjects: string
  availableOnAppStore: string
  availabilityLine: string
  eyebrow: string
  tagline: string
  description: string
  downloadCta: string
  watchDemo: string
  supportCta: string
  stats: {
    platformLabel: string
    platformValue: string
    languagesLabel: string
    languagesValue: string
    dataLabel: string
    dataValue: string
    builtWithLabel: string
    builtWithValue: string
  }
  demo: {
    eyebrow: string
    title: string
    description: string
    caption: string
  }
  rhythm: {
    eyebrow: string
    title: string
    description: string
  }
  featureShowcases: PulseFeatureShowcase[]
  history: {
    eyebrow: string
    title: string
    description: string
    items: string[]
    imageAlt: string
  }
  feedback: {
    eyebrow: string
    title: string
    description: string
    items: string[]
    settingsImageAlt: string
    celebrationImageAlt: string
    soundNames: string[]
    animalNames: string[]
  }
  native: {
    eyebrow: string
    title: string
    description: string
    features: PulseNativeFeature[]
  }
  privacy: {
    eyebrow: string
    title: string
    description: string
    items: string[]
  }
  closing: {
    title: string
    description: string
    getSupport: string
    privacy: string
  }
}

export interface PulseSupportMessages {
  metaTitle: string
  metaDescription: string
  title: string
  intro: string
  gettingStarted: PulseFaqSection
  accounts: PulseFaqSection
  cloudSync: PulseFaqSection
  migration: PulseFaqSection
  notifications: PulseFaqSection
  pomodoroPro: PulseFaqSection
  purchases: PulseFaqSection
  focusProtection: PulseFaqSection
  accountPrivacy: PulseFaqSection
  requirements: {
    title: string
    body: string
  }
  contact: {
    title: string
    body: string
  }
  privacyPolicyLink: string
}

export interface PulsePrivacyMessages {
  metaTitle: string
  metaDescription: string
  title: string
  subtitle: string
  lastUpdated: string
  summary: {
    title: string
    body: string
  }
  localData: {
    title: string
    body: string
    migrationSafety: string
  }
  accountAndSync: {
    title: string
    intro: string
    items: string[]
    closing: string
  }
  processors: {
    title: string
    bodyBeforeSupabase: string
    bodyAfterSupabase: string
    orWord: string
    bodyAfterProviders: string
    bodyAfterRevenueCat: string
  }
  purchases: {
    title: string
    bodyBeforeRevenueCat: string
    bodyAfterRevenueCat: string
  }
  focusProtection: {
    title: string
    body: string
  }
  retention: {
    title: string
    items: string[]
  }
  export: {
    title: string
    body: string
  }
  analytics: {
    title: string
    introBeforeLink: string
    introAfterLink: string
    identifier: string
    learnMore: string
    faqLabel: string
  }
  appStoreUpdates: {
    title: string
    body: string
  }
  launchAtLogin: {
    title: string
    body: string
  }
  notifications: {
    title: string
    body: string
  }
  whatWeDoNotDo: {
    title: string
    items: string[]
  }
  children: {
    title: string
    body: string
  }
  changes: {
    title: string
    body: string
  }
  contact: {
    title: string
    body: string
  }
}

export interface PulseMessages {
  languageLabel: string
  video: PulseVideoMessages
  landing: PulseLandingMessages
  support: PulseSupportMessages
  privacy: PulsePrivacyMessages
}
