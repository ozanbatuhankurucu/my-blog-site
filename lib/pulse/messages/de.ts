import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const deMessages: PulseMessages = {
  languageLabel: 'Seitensprache',
  video: {
    ariaLabel: `${PULSE_APP_NAME} Produktüberblick`,
    playLabel: 'Überblick abspielen',
    unsupported: 'Ihr Browser unterstützt eingebettete Videos nicht.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Menüleisten-Pomodoro-Timer für macOS`,
    metaDescription: `${PULSE_APP_NAME} ist ein nativer macOS-Pomodoro-Timer mit neu gestalteter Popover-Oberfläche, vollständiger Fokus-Historie, sitzungsbewussten Hinweisen und Unterstützung für 12 Sprachen.`,
    heroImageAlt: `${PULSE_APP_NAME} Fokus-Timer und wöchentliche Historie im Überblick`,
    backToProjects: 'Zurück zu den Projekten',
    availableOnAppStore: 'Erhältlich im Mac App Store',
    eyebrow: 'Menüleisten-Pomodoro-Timer',
    tagline: 'Ein ruhiger Pomodoro-Timer, der in Ihrer Menüleiste lebt.',
    description: `Bleiben Sie fokussiert, ohne den Schreibtisch zu überladen. Starten Sie eine Fokus-Sitzung, machen Sie eine Pause und lassen Sie ${PULSE_APP_NAME} Ihren Fortschritt mit der vollständigen Fokus-Historie still im Hintergrund verfolgen.`,
    downloadCta: 'Im Mac App Store laden',
    watchDemo: 'In Aktion ansehen',
    supportCta: 'Support',
    stats: {
      platformLabel: 'Plattform',
      platformValue: 'Natives macOS',
      languagesLabel: 'Sprachen',
      languagesValue: '12 Sprachen',
      dataLabel: 'Datenerhebung',
      dataValue: 'Keine',
      builtWithLabel: 'Erstellt mit',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Eine ruhigere Art zu fokussieren',
      title: 'Ihr Timer ist da, wenn Sie ihn brauchen—und weg, wenn nicht.',
      description: `Öffnen Sie ${PULSE_APP_NAME} aus der Menüleiste, wählen Sie eine Sitzung und schließen Sie das Popover. Der Timer läuft weiter, während Sie arbeiten. Beim ersten Start zeigt eine kurze Einführung, wo Sie ihn finden — und respektiert Reduce Motion, wenn aktiviert.`,
      caption:
        'Neugestaltete Sitzungssteuerung, vollständige Fokus-Historie, Lokalisierung in 12 Sprachen, sitzungsbewusste Abschlussmeldungen und Einstellungen.',
    },
    rhythm: {
      eyebrow: 'Ein Rhythmus, den Sie steuern',
      title: 'Fokus, Pause, Erholung, Wiederholung.',
      description: `${PULSE_APP_NAME} schlägt vor, was als Nächstes kommt, startet aber nie eine Sitzung für Sie. Jede Dauer lässt sich an Ihren Tag anpassen.`,
    },
    featureShowcases: [
      {
        title: 'Fokus',
        badge: '1–120 Min.',
        description:
          'Der Countdown läuft leise, während Sie arbeiten. Pausieren, zurücksetzen oder überspringen — der Menüleisten-Timer bleibt fest verankert.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} Fokus-Sitzung mit Pausesteuerung und Countdown in der Menüleiste`,
      },
      {
        title: 'Menüleiste',
        badge: 'Stabiler Countdown',
        description:
          'Restzeit sofort ein- oder ausblenden. Das Status-Element mit fester Breite bleibt bis 120:00 an Ort und Stelle, ohne das Popover zu verschieben.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} Countdown in der macOS-Menüleiste`,
      },
      {
        title: 'Anpassung',
        badge: 'Ihre Regeln',
        description:
          'Flexible Dauern, Abschlussklänge und Animationen, 12 UI-Sprachen und Start bei Anmeldung.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} Einstellungen für Dauern, Abschlussmeldungen, Sprache und Start bei Anmeldung`,
      },
    ],
    history: {
      eyebrow: 'Fortschritt ohne Druck',
      title: 'Sehen Sie, wie die Arbeit sich summiert.',
      description:
        'Öffnen Sie das vollständige Historie-Fenster über das Popover oder das Statusmenü. Summen und Streaks zeigen Ihren Fortschritt, ohne Fokus zu einem weiteren Dashboard zu machen.',
      items: ['Gesamte Fokuszeit', 'Abgeschlossene Sitzungen', 'Aktuelle Serie', 'Beste Serie'],
      imageAlt: `${PULSE_APP_NAME} wöchentliche Fokus-Historie mit Sitzungsanzahl, Fokusstunden und Serie`,
    },
    feedback: {
      eyebrow: 'Sanftes Feedback, auf Ihre Art',
      title: 'Abschluss soll sich lohnen.',
      description: `Wählen Sie aus sechs ruhigen Abschlussklängen und sechs Tierfeiern — oder schalten Sie beides aus. ${PULSE_APP_NAME} zeigt die passende Meldung, wenn eine Fokus-, Kurz- oder Langpausensitzung endet.`,
      items: [
        'Sitzungsbewusster Abschlusstitel und Untertitel',
        'UI in 12 Sprachen mit Systemsprache als Standard',
        'Sprachüberschreibung in den Einstellungen: System oder jede unterstützte Sprache',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} Einstellungen für Dauern, Sprache, Abschlussklänge und Start bei Anmeldung`,
      celebrationImageAlt: `${PULSE_APP_NAME} Hasen-Feieranimation beim Abschluss einer Sitzung`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Affe', 'Koala', 'Katze', 'Fuchs', 'Panda', 'Hase'],
    },
    native: {
      eyebrow: 'Native by design',
      title: 'Gebaut, um sich auf Ihrem Mac zu Hause zu fühlen.',
      description: `SwiftUI, AppKit und macOS-Systemkonventionen halten ${PULSE_APP_NAME} schnell, vertraut und zuverlässig — mit VoiceOver-Beschriftungen und Reduce-Motion-Unterstützung durchgängig.`,
      features: [
        {
          title: 'Lebt in der Menüleiste',
          description: 'Kein Dock-Symbol und kein Hauptfenster, das um Ihre Aufmerksamkeit konkurriert.',
        },
        {
          title: 'Bleibt präzise',
          description:
            'Sitzungen bleiben über Ruhezustand, Aufwachen und Neustarts korrekt; die Historie wird zum tatsächlichen Endzeitpunkt gespeichert.',
        },
        {
          title: 'Daten bleiben lokal',
          description: 'Ihre Einstellungen und Fokus-Historie verlassen Ihren Mac nie.',
        },
        {
          title: 'Spricht Ihre Sprache',
          description:
            'Vollständige UI in 12 Sprachen mit Systemsprache als Standard und manueller Überschreibung in den Einstellungen.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privat von Anfang an',
      title: 'Ihr Fokus ist kein Datenpunkt.',
      description: `${PULSE_APP_NAME} erhebt keine Daten. Keine Konten, keine Analytik, keine Werbung, keine Netzwerkanfragen. Alles bleibt auf Ihrem Mac.`,
      items: [
        'Keine Anmeldung',
        'Keine Cloud-Synchronisation',
        'Kein Tracking',
        'Kein Zugriff auf persönliche Dateien',
        'Keine Daten verlassen Ihren Mac',
      ],
    },
    closing: {
      title: 'Schaffen Sie Raum für fokussierte Arbeit.',
      description: `Holen Sie sich ${PULSE_APP_NAME} im Mac App Store — oder lesen Sie die Datenschutzrichtlinie und die Support-Seite, wenn Sie Hilfe brauchen.`,
      getSupport: 'Support erhalten',
      privacy: 'Datenschutz',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Support`,
    metaDescription: `Support und Einstiegsleitfaden für ${PULSE_APP_NAME}, einen Menüleisten-Pomodoro-Timer für den Mac.`,
    title: `${PULSE_APP_NAME} Support`,
    intro: `${PULSE_APP_NAME} ist ein einfacher Menüleisten-Pomodoro-Timer für den Mac.`,
    gettingStarted: {
      title: 'Erste Schritte',
      steps: [
        'Klicken Sie auf das App-Symbol in der Menüleiste (oben rechts auf dem Bildschirm).',
        'Wählen Sie Fokus, Kurzpause oder Langpause.',
        'Drücken Sie Start. Sie können das Popover schließen, während der Timer läuft.',
      ],
    },
    settings: {
      title: 'Einstellungen',
      body: 'Öffnen Sie den Tab Einstellungen, um Sitzungsdauern, Abschlussklänge, Menüleisten-Animationen und Start bei Anmeldung zu ändern.',
    },
    history: {
      title: 'Vollständige Fokus-Historie',
      body: 'Öffnen Sie die vollständige Historie über das Popover oder das Statusmenü der Menüleiste, um Ihre gesamte Fokuszeit, abgeschlossene Sitzungen, aktuelle Serie und beste Serie zu sehen.',
    },
    requirements: {
      title: 'Voraussetzungen',
      body: 'macOS 14.6 oder neuer.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Für Hilfe, Feedback oder Fehlermeldungen:',
    },
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Datenschutzrichtlinie`,
    metaDescription: `Datenschutzrichtlinie für ${PULSE_APP_NAME}, einen Pomodoro-Timer für Mac und iPhone.`,
    title: 'Datenschutzrichtlinie',
    subtitle: `${PULSE_APP_NAME} — Pomodoro-Timer für Mac und iPhone`,
    lastUpdated: 'Zuletzt aktualisiert: 24. September 2026',
    summary: {
      title: 'Zusammenfassung',
      body: `${PULSE_APP_NAME} erfordert kein Konto und erhebt keine Namen, E-Mails oder persönliche Inhalte. Die App kann anonyme, datenschutzschonende Nutzungsanalytik senden, damit wir Fokusabläufe verbessern können. Ihre Timer-Einstellungen und Fokus-Historie bleiben auf Ihrem Gerät.`,
    },
    localData: {
      title: 'Auf Ihrem Gerät gespeicherte Daten',
      body: 'Ihre Timer-Einstellungen, Sitzungspräferenzen und Fokus-Historie werden lokal auf Ihrem Mac oder iPhone mit dem standardmäßigen Systemspeicher gespeichert. Der Inhalt der Fokus-Historie selbst wird nicht an unseren Analytik-Anbieter hochgeladen.',
    },
    analytics: {
      title: 'Analytik',
      introBeforeLink: 'Wir nutzen',
      introAfterLink:
        ', einen datenschutzorientierten Analytik-Dienst, um zu verstehen, wie die App genutzt wird (zum Beispiel: gestartete oder abgeschlossene Fokus- oder Pausensitzungen, Änderungen am Tagesziel, Einstellungsänderungen und ob die Einführung abgeschlossen wurde). Signale enthalten keinen Freitext, keine Namen, keine E-Mails und keine Inhalte Ihrer Fokus-Historie.',
      identifier:
        'TelemetryDeck erkennt Installationen über eine gehashte, gerätebezogene Kennung und kann nicht-persönliche Gerätemetadaten anhängen (etwa Modell, Betriebssystemversion und Gebietsschema). Diese Daten werden nur für Analytik verwendet, von uns nicht mit Ihrer Identität verknüpft und nicht zum Tracking über Apps oder Websites anderer Unternehmen genutzt.',
      learnMore: 'Mehr erfahren:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App-Store-Updates',
      body: 'Wenn Sie in den Einstellungen „Nach Updates suchen“ verwenden, kann die App Apple kontaktieren, um zu prüfen, ob im App Store eine neuere Version verfügbar ist.',
    },
    launchAtLogin: {
      title: 'Start bei Anmeldung (Mac)',
      body: 'Wenn Sie auf dem Mac in den Einstellungen Start bei Anmeldung aktivieren, registriert die App sich über macOS-System-APIs als Anmeldeobjekt. Diese Einstellung steuern Sie selbst und können sie jederzeit deaktivieren.',
    },
    notifications: {
      title: 'Benachrichtigungen und Live Activities (iPhone)',
      body: 'Auf dem iPhone helfen optionale lokale Benachrichtigungen und Live Activities dabei zu sehen, wann eine Sitzung endet. Die Berechtigung wird nur angefragt, wenn Sie diese Funktionen aktivieren. Der Inhalt der Benachrichtigungen bleibt auf Ihrem Gerät.',
    },
    whatWeDoNotDo: {
      title: 'Was wir nicht tun',
      items: [
        'Kein Konto und keine Anmeldung',
        'Keine Werbenetzwerke',
        'Kein Verkauf personenbezogener Daten',
        'Kein Zugriff auf Kontakte, Fotos, präzisen Standort, Kamera oder Mikrofon für Analytik',
      ],
    },
    children: {
      title: 'Kinder',
      body: `${PULSE_APP_NAME} erhebt wissentlich keine personenbezogenen Daten von Kindern. Analytik-Signale sind anonym und enthalten keine persönlichen Inhalte.`,
    },
    changes: {
      title: 'Änderungen',
      body: 'Wenn sich diese Richtlinie ändert, wird die aktualisierte Fassung unter dieser URL veröffentlicht.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Fragen zu dieser Richtlinie:',
    },
  },
}
