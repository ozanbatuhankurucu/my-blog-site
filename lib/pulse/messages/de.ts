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
    metaTitle: `${PULSE_APP_NAME} — Fokus-Timer für iPhone und Mac`,
    metaDescription: `${PULSE_APP_NAME} ist ein ruhiger Pomodoro-Timer für iPhone und Mac mit Focus History, Daily Focus Goals, Anmeldung mit Apple und Google sowie offline-first Synchronisation auf all Ihren Geräten.`,
    heroImageAlt: `${PULSE_APP_NAME} Fokus-Timer und wöchentliche Historie im Überblick`,
    backToProjects: 'Zurück zu den Projekten',
    availableOnAppStore: 'Im App Store erhältlich',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Fokus-Timer für iPhone und Mac',
    tagline: 'Ein sanfter Pomodoro-Timer, der beim Fokussieren hilft — auf dem iPhone und in der Mac-Menüleiste.',
    description: `Starten Sie eine Fokus-Sitzung, machen Sie eine Pause und behalten Sie Ihre Historie bei. Melden Sie sich mit Apple oder Google an, damit Daily Focus Goals, Focus History und synchronisierte Einstellungen mit Ihrem Konto auf iPhone und Mac bleiben — während der Timer offline weiterläuft.`,
    downloadCta: 'Im App Store laden',
    watchDemo: 'In Aktion ansehen',
    supportCta: 'Support',
    stats: {
      platformLabel: 'Plattformen',
      platformValue: 'iPhone & Mac',
      languagesLabel: 'Sprachen',
      languagesValue: '12 Sprachen',
      dataLabel: 'Sync',
      dataValue: 'Offline-first',
      builtWithLabel: 'Erstellt mit',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Eine ruhigere Art zu fokussieren',
      title: 'Ihr Timer ist da, wenn Sie ihn brauchen — und weg, wenn nicht.',
      description: `Öffnen Sie ${PULSE_APP_NAME} auf dem Mac aus der Menüleiste, wählen Sie eine Sitzung und schließen Sie das Popover. Auf dem iPhone starten Sie Fokus auf dem Home-Bildschirm und nutzen auf unterstützten Geräten Live Activities. Der Timer läuft weiter, während Sie arbeiten.`,
      caption:
        'Fokus- und Pausen-Timer, Daily Focus Goals, Focus History, Streak-Tracking, Lokalisierung in 12 Sprachen und optionale Abschlussbenachrichtigungen.',
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
          'Der Countdown läuft leise, während Sie arbeiten. Pausieren, zurücksetzen oder überspringen — auf iPhone und Mac behalten Sie die Kontrolle.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} Fokus-Sitzung mit Pausesteuerung und Countdown`,
      },
      {
        title: 'Menüleiste',
        badge: 'Mac',
        description:
          'Auf dem Mac die Restzeit in der Menüleiste ein- oder ausblenden. Das Status-Element mit fester Breite bleibt bis 120:00 an Ort und Stelle, ohne das Popover zu verschieben.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} Countdown in der macOS-Menüleiste`,
      },
      {
        title: 'Anpassung',
        badge: 'Ihre Regeln',
        description:
          'Flexible Dauern, Daily Focus Goals, Abschlussklänge und Animationen, 12 UI-Sprachen und Darstellungsoptionen.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} Einstellungen für Dauern, Abschlussbenachrichtigungen, Sprache und Ziele`,
      },
    ],
    history: {
      eyebrow: 'Fortschritt ohne Druck',
      title: 'Sehen Sie, wie sich die Arbeit summiert.',
      description:
        'Öffnen Sie Focus History, um Summen und Streaks zu prüfen. Wenn Sie angemeldet sind, kann die Historie zwischen iPhone und Mac synchronisiert werden, damit Ihr Fortschritt mitkommt.',
      items: ['Gesamte Fokuszeit', 'Abgeschlossene Sitzungen', 'Aktuelle Serie', 'Beste Serie', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} wöchentliche Fokus-Historie mit Sitzungsanzahl, Fokusstunden und Serie`,
    },
    feedback: {
      eyebrow: 'Sanftes Feedback, auf Ihre Art',
      title: 'Abschluss soll sich lohnen.',
      description: `Wählen Sie aus sechs ruhigen Abschlussklängen und sechs Tierfeiern — oder schalten Sie beides aus. ${PULSE_APP_NAME} zeigt die passende Meldung, wenn eine Fokus-, Kurz- oder Langpausensitzung endet.`,
      items: [
        'Sitzungsbezogener Abschlusstitel und Untertitel',
        'UI in 12 Sprachen mit Systemsprache als Standard',
        'Sprach- und Darstellungseinstellungen auf jedem Gerät',
        'Optionale Motivations-Erinnerungen auf dem iPhone',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} Einstellungen für Dauern, Sprache, Abschlussklänge und Ziele`,
      celebrationImageAlt: `${PULSE_APP_NAME} Hasen-Feieranimation beim Abschluss einer Sitzung`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Affe', 'Koala', 'Katze', 'Fuchs', 'Panda', 'Hase'],
    },
    native: {
      eyebrow: 'Native by design',
      title: 'Gebaut, um sich auf Apple-Geräten zu Hause zu fühlen.',
      description: `SwiftUI, AppKit und Systemkonventionen halten ${PULSE_APP_NAME} schnell und vertraut — mit VoiceOver-Beschriftungen und Reduce-Motion-Unterstützung durchgängig.`,
      features: [
        {
          title: 'Mac-Menüleiste & iPhone-Home',
          description: 'Ein unaufdringlicher Menüleisten-Begleiter auf dem Mac und ein fokussiertes Home-Erlebnis auf dem iPhone.',
        },
        {
          title: 'Bleibt präzise',
          description:
            'Sitzungen bleiben über Ruhezustand, Aufwachen und Neustarts korrekt; die Historie wird zum tatsächlichen Endzeitpunkt gespeichert.',
        },
        {
          title: 'Offline-first Sync',
          description:
            'Fokussieren Sie ohne Verbindung weiter. Sobald Sie wieder online sind, synchronisieren angemeldete Änderungen mit Ihrem Konto.',
        },
        {
          title: 'Spricht Ihre Sprache',
          description:
            'Vollständige UI in 12 Sprachen mit Systemsprache als Standard und manueller Auswahl in den Einstellungen.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privat by design',
      title: 'Ihr Fokus bleibt Ihrer.',
      description: `${PULSE_APP_NAME} nutzt ein Konto, damit die Historie zwischen Ihren Geräten synchronisiert werden kann. Wir speichern nur, was die Synchronisation braucht, verkaufen Ihre Daten nie und halten Analytik von Ihrer Fokus-Historie getrennt.`,
      items: [
        'Anmeldung mit Apple oder Google',
        'Offline-first Fokus auf jedem Gerät',
        'Cloud-Sync für Historie und synchronisierte Einstellungen',
        'Keine Werbenetzwerke',
        'Konto jederzeit in den Einstellungen löschen',
      ],
    },
    closing: {
      title: 'Schaffen Sie Raum für fokussierte Arbeit.',
      description: `Holen Sie sich ${PULSE_APP_NAME} im App Store für iPhone und Mac — oder lesen Sie die Datenschutzrichtlinie und die Support-Seite, wenn Sie Hilfe brauchen.`,
      getSupport: 'Support erhalten',
      privacy: 'Datenschutz',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Support`,
    metaDescription: `Support, FAQ und Konto-Hilfe für ${PULSE_APP_NAME} auf iPhone und Mac — einschließlich Pomodoro Pro, Käufe, Focus Protection, Anmeldung, Sync und Kontolöschung.`,
    title: `${PULSE_APP_NAME} Support`,
    intro: `${PULSE_APP_NAME} ist ein ruhiger Pomodoro-Timer für iPhone und Mac. Melden Sie sich mit Apple oder Google an, um Focus History zwischen Ihren Geräten zu synchronisieren. Auf dem iPhone schaltet optionales Pomodoro Pro Focus Protection, eigene Tags und Tag Insights frei.`,
    gettingStarted: {
      title: 'Erste Schritte',
      items: [
        {
          question: 'Wie starte ich eine Fokus-Sitzung?',
          answer:
            'Auf dem Mac klicken Sie auf das App-Symbol in der Menüleiste, wählen Fokus, Kurzpause oder Langpause und drücken Start. Auf dem iPhone öffnen Sie die App, wählen auf Home eine Sitzung und drücken Start. Sie können die App schließen, während der Timer läuft.',
        },
        {
          question: 'Wie ändere ich Fokus- und Pausendauern?',
          answer:
            'Öffnen Sie die Einstellungen und passen Sie die Längen für Fokus, Kurzpause und Langpause an. Sie können auch ein vorgegebenes Rhythmus-Profil wählen und die Minuten feinjustieren.',
        },
        {
          question: 'Wie richte ich Daily Focus Goals ein?',
          answer:
            'Legen Sie in den Einstellungen fest, wie viele Fokus-Sitzungen Sie pro Tag möchten. Der Fortschritt erscheint auf Home und in Focus History.',
        },
        {
          question: 'Wie sehe ich Focus History?',
          answer:
            'Öffnen Sie Focus History in der App (auf dem Mac über das Popover oder das Statusmenü). Sie sehen Summen, Streaks und wöchentlichen Fortschritt.',
        },
        {
          question: 'Wie ändere ich Sprache und Darstellung?',
          answer:
            'Wählen Sie in den Einstellungen Sprache (System oder eine unterstützte Sprache) und Erscheinungsbild (System, Hell oder Dunkel). Diese Einstellungen bleiben auf jedem Gerät und werden nicht synchronisiert.',
        },
      ],
    },
    accounts: {
      title: 'Konten',
      items: [
        {
          question: 'Warum ist eine Anmeldung erforderlich?',
          answer:
            'Ein Konto sorgt dafür, dass Focus History, Daily Focus Goals und synchronisierte Einstellungen mit Ihnen auf iPhone und Mac bleiben. Neue Installationen verlangen eine Anmeldung, bevor Sie den Timer nutzen. Geräte, die von älteren Versionen upgraden, können lokale Historie bis zur Anmeldung weiter nutzbar halten. Pomodoro-Pro-Käufe bleiben ebenfalls bei Ihrem angemeldeten Konto.',
        },
        {
          question: 'Wie melde ich mich mit Apple oder Google an?',
          answer:
            'Wählen Sie auf dem Anmeldebildschirm Mit Apple fortfahren oder Mit Google fortfahren und schließen Sie den Anbieter-Flow ab. Apple kann Hide My Email anbieten.',
        },
        {
          question: 'Wie melde ich mich ab?',
          answer:
            'Öffnen Sie Einstellungen → Konto → Abmelden. Wenn Änderungen noch nicht synchronisiert wurden, kann die App Sie bitten, zuerst zu synchronisieren oder trotzdem abzumelden. Abmelden löscht Ihr Konto nicht.',
        },
        {
          question: 'Wie melde ich mich wieder an?',
          answer:
            'Verwenden Sie auf dem Anmeldebildschirm dieselbe Apple- oder Google-Methode. Ihre Cloud-Historie wird für dieses Konto auf dem Gerät wiederhergestellt.',
        },
        {
          question: 'Was passiert, wenn ich ein anderes Konto verwende?',
          answer:
            'Jedes Konto hat seine eigene Historie. Die Anmeldung bei einem anderen Konto führt keine fremden Historien zusammen. Wählen Sie sorgfältig, bevor Sie einen Historien-Claim auf einem Gerät bestätigen, das bereits lokale Sitzungen hat.',
        },
        {
          question: 'Kann ich Apple und Google demselben Konto zuordnen?',
          answer:
            'Ja. Unter Einstellungen → Konto können Sie die andere Anmeldemethode verknüpfen, wenn sie nicht bereits von einem anderen Konto genutzt wird.',
        },
      ],
    },
    cloudSync: {
      title: 'Cloud-Synchronisation',
      items: [
        {
          question: 'Was wird zwischen Geräten synchronisiert?',
          answer:
            'Historie von Fokus- und Pausensitzungen (einschließlich des gewählten Tags), von Ihnen erstellte Tags, Daily-Focus-Goal-Einträge, streak-bezogene Kontodaten und synchronisierte Einstellungen wie Sitzungsdauern, Tagesziel, Ton, Animationen, Abschlussklang und Feiertier.',
        },
        {
          question: 'Was passiert ohne Internet?',
          answer:
            'Nach der Anmeldung können Sie den Timer offline weiter nutzen. Neue Sitzungen und Änderungen bleiben auf dem Gerät, bis eine Verbindung verfügbar ist.',
        },
        {
          question: 'Was passiert, wenn ich wieder online bin?',
          answer:
            'Die App synchronisiert ausstehende Änderungen mit Ihrem Konto. Die Synchronisation ist offline-first und eventual consistent — keine sofortige Echtzeit-Kollaboration.',
        },
        {
          question: 'Wie nutze ich dasselbe Konto auf iPhone und Mac?',
          answer:
            'Installieren Sie die App auf beiden Geräten und melden Sie sich mit demselben Apple- oder Google-Konto an. Nach Abschluss der Wiederherstellung kann Focus History auf beiden erscheinen.',
        },
        {
          question: 'Was, wenn Historie fehlt?',
          answer:
            'Prüfen Sie, ob Sie mit demselben Konto angemeldet sind, warten Sie, bis Wiederherstellung/Sync abgeschlossen ist, und öffnen Sie Focus History erneut. Bei einem anderen Konto sehen Sie dessen eigene Historie.',
        },
      ],
    },
    migration: {
      title: 'Upgrade von einer älteren Version',
      items: [
        {
          question: 'Was passiert mit meiner bestehenden lokalen Historie?',
          answer:
            'Bestehende lokale Historie wird nicht stillschweigend gelöscht. Nach der Anmeldung fragt die App, bevor diese Historie Ihrem Konto hinzugefügt wird.',
        },
        {
          question: 'Wie übernehme ich meine Historie?',
          answer:
            'Melden Sie sich mit dem Konto an, dem die Historie gehören soll, prüfen Sie den Bildschirm Historie hinzufügen und wählen Sie Zu diesem Konto hinzufügen. Verwenden Sie ein anderes Konto, wenn das angezeigte Konto falsch ist. Sitzungen können später nicht auf ein anderes Konto verschoben werden.',
        },
        {
          question: 'Was, wenn Geräte- und Kontoeinstellungen abweichen?',
          answer:
            'Die App kann fragen, ob Sie die Einstellungen dieses Geräts oder die Kontoeinstellungen behalten möchten. Sprache, Erscheinungsbild, Benachrichtigungen und Motivations-Erinnerungen bleiben gerätelokal.',
        },
      ],
    },
    notifications: {
      title: 'Benachrichtigungen',
      items: [
        {
          question: 'Wie aktiviere ich Benachrichtigungen auf dem iPhone?',
          answer:
            'Öffnen Sie Einstellungen → Benachrichtigungen und wählen Sie Aktivieren, oder öffnen Sie die Systemeinstellungen, wenn die Berechtigung zuvor verweigert wurde.',
        },
        {
          question: 'Wie funktionieren Motivations-Erinnerungen?',
          answer:
            'Öffnen Sie auf dem iPhone Einstellungen → Motivations-Erinnerungen und schalten Sie sie ein, nachdem Benachrichtigungen erlaubt sind. Sie können pausieren oder Ruhezeiten festlegen. Sie sind optional und standardmäßig aus.',
        },
        {
          question: 'Was, wenn Benachrichtigungen deaktiviert sind?',
          answer:
            'Sitzungs-Endbenachrichtigungen und Motivations-Erinnerungen benötigen die Benachrichtigungsberechtigung. Nutzen Sie Einstellungen → Benachrichtigungen → Einstellungen öffnen, um sie in den iOS-Einstellungen zu aktivieren.',
        },
        {
          question: 'Wie funktionieren Live Activities?',
          answer:
            'Auf unterstützten iPhones kann eine optionale Live Activity eine aktive Sitzung auf dem Sperrbildschirm und in der Dynamic Island anzeigen. Die Berechtigung wird angefragt, wenn Sie zugehörige Funktionen aktivieren.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Was ist Pomodoro Pro?',
          answer:
            'Pomodoro Pro ist ein optionaler In-App-Kauf auf dem iPhone. Er schaltet Focus Protection, eigene Tags (Ihre Namen und Farben) und Tag Insights (wöchentliche und monatliche Fokuszeit nach Tag) frei. Timer, integrierte Tags, Focus History und Sync bleiben ohne Pro verfügbar.',
        },
        {
          question: 'Welche Kaufoptionen gibt es?',
          answer:
            'Pomodoro Pro wird als Monatsabo, Jahresabo (Annual) oder einmaliger Lifetime-Kauf angeboten. Abos verlängern sich automatisch, sofern Sie nicht mindestens 24 Stunden vor Periodenende kündigen. Lifetime wird einmal berechnet und ist kein Abo.',
        },
        {
          question: 'Wo kaufe oder sehe ich Pomodoro Pro?',
          answer:
            'Öffnen Sie auf dem iPhone Einstellungen → Pomodoro Pro oder tippen Sie auf den Schutz-Chip auf Home. Sie müssen angemeldet sein. Pro bleibt mit Ihrem Konto auf jedem Gerät, auf dem Sie sich anmelden.',
        },
        {
          question: 'Wie stelle ich Käufe wieder her?',
          answer:
            'Nutzen Sie Käufe wiederherstellen auf der Paywall oder unter Einstellungen → Pomodoro Pro. Käufe mit demselben Apple-Konto werden dem Konto zugeordnet, mit dem Sie angemeldet sind. Wenn nichts gefunden wird, prüfen Sie das Apple-Konto, mit dem Sie Pro gekauft haben, und versuchen Sie es online erneut.',
        },
      ],
    },
    purchases: {
      title: 'Abos und Käufe',
      items: [
        {
          question: 'Wie verwalte oder kündige ich ein Abo?',
          answer:
            'Abos werden von Apple abgerechnet. Öffnen Sie auf dem iPhone Einstellungen → Pomodoro Pro → Abo verwalten oder Einstellungen → [Ihr Name] → Abonnements und wählen Sie die App. Kündigen Sie mindestens 24 Stunden vor der Verlängerung, um die nächste Abbuchung zu vermeiden. App oder Pomodoro-Konto löschen kündigt kein Abo.',
        },
        {
          question: 'Wie beantrage ich eine Erstattung?',
          answer:
            'Erstattungen bearbeitet Apple. Besuchen Sie reportaproblem.apple.com, melden Sie sich mit dem Apple-Konto der Kauftransaktion an, finden Sie die Transaktion und reichen Sie eine Erstattungsanfrage ein. App-Store-Erstattungen können wir nicht selbst bearbeiten.',
        },
        {
          question: 'Was, wenn ein Kauf fehlschlägt oder Pro nicht freigeschaltet wird?',
          answer:
            'Bleiben Sie angemeldet, prüfen Sie die Netzverbindung und versuchen Sie es erneut. Bei ausstehender Zahlung (z. B. „Frag zum Kaufen“) wird Pro nach Freigabe freigeschaltet. Wenn Sie bereits bezahlt haben, nutzen Sie Käufe wiederherstellen. Bei Zahlungsproblemen bei aktivem Abo aktualisieren Sie die Zahlungsmethode in den App-Store-Einstellungen.',
        },
        {
          question: 'Was, wenn ich Lifetime kaufe, während ein Abo aktiv ist?',
          answer:
            'Lifetime schaltet Pro dauerhaft frei, ein bestehendes Abo wird jedoch nicht automatisch gekündigt. Deaktivieren Sie die automatische Verlängerung in den App-Store-Abo-Einstellungen, damit nicht erneut abgebucht wird.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Was ist Focus Protection?',
          answer:
            'Focus Protection ist eine Pomodoro-Pro-Funktion auf dem iPhone. Sie nutzt Apples Screen-Time-APIs, um die von Ihnen gewählten Apps, Kategorien oder Websites während einer Fokus-Sitzung zu blockieren. Pausen werden nie blockiert. Nach Sitzungsende werden blockierte Apps automatisch freigegeben.',
        },
        {
          question: 'Wie richte ich es ein?',
          answer:
            'Bei aktivem Pro tippen Sie auf den Focus-Protection-Chip auf Home (oder öffnen Sie ihn in den Einstellungen). Erlauben Sie Screen-Time-Zugriff, wählen Sie Blockierungen und schalten Sie Focus Protection ein. Starten Sie eine Fokus-Sitzung, damit die Sperren greifen.',
        },
        {
          question: 'Wie schalte ich es aus oder entsperre ich Apps?',
          answer:
            'Öffnen Sie das Focus-Protection-Blatt und wählen Sie Jetzt ausschalten oder deaktivieren Sie die Funktion. Nach Sitzungsende können Sie auch Apps entsperren auf dem Sperrbildschirm nutzen. Um den Screen-Time-Zugriff der App vollständig zu entfernen, gehen Sie zu iOS-Einstellungen → Bildschirmzeit → Apps mit Bildschirmzeit-Zugriff.',
        },
        {
          question: 'Was, wenn Focus Protection nicht funktioniert?',
          answer:
            'Prüfen Sie, ob Pro aktiv ist, Screen-Time-Zugriff erlaubt ist und Apps oder Kategorien zum Blockieren gewählt wurden. Focus Protection gilt nur während Fokus-Sitzungen, nicht in Pausen. Wurde der Zugriff in den Systemeinstellungen entzogen, öffnen Sie die App und erlauben Sie den Zugriff erneut. Ein Neustart des iPhone kann nach einer Berechtigungsänderung helfen.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Konto und Datenschutz',
      items: [
        {
          question: 'Wie lösche ich mein Konto?',
          answer:
            'Melden Sie sich an, öffnen Sie Einstellungen → Konto → Konto löschen und bestätigen Sie. Ihr Konto und synchronisierte Fokus-Historie werden dauerhaft aus unserer Live-Datenbank gelöscht. Das kann nicht rückgängig gemacht werden. Die Löschung erfordert eine Netzwerkverbindung. Kontolöschung kündigt kein App-Store-Abo — verwalten Sie das in den App-Store-Einstellungen.',
        },
        {
          question: 'Was bewirkt die Kontolöschung?',
          answer:
            'Synchronisierte Cloud-Daten für dieses Konto werden entfernt, die Sign-in-with-Apple-Autorisierung wird widerrufen, wenn gespeichert, der mit Ihrem Konto verknüpfte Kauf-Datensatz soll beim Kauf-Anbieter gelöscht werden, und die Kontodaten werden auf dem Gerät entfernt, auf dem Sie löschen. Lokale Kopien auf anderen Geräten können nicht mehr synchronisieren; entfernen Sie die App dort oder löschen Sie die Daten, falls nötig. Anbieter-Backups können gelöschte Daten für ein begrenztes Wiederherstellungsfenster aufbewahren. Apple führt eigene App-Store-Transaktionsaufzeichnungen.',
        },
        {
          question: 'Wie exportiere ich meine Daten?',
          answer:
            'Einstellungen → Konto → Meine Daten exportieren speichert eine JSON-Datei mit Sitzungen, Tageszielen, synchronisierten Einstellungen und Kontoprofil. Nicht übernommene lokale Daten können auch vom Anmeldebildschirm exportiert werden.',
        },
        {
          question: 'Wo finde ich die Datenschutzrichtlinie?',
          answer:
            'Öffnen Sie die Datenschutzrichtlinie auf der Produktwebsite oder nutzen Sie den Datenschutz-Link auf den Produktseiten dieser Website.',
        },
      ],
    },
    requirements: {
      title: 'Voraussetzungen',
      body: 'iPhone: iOS 17 oder neuer. Mac: macOS 14.6 oder neuer. Pomodoro-Pro-Käufe und Focus Protection sind auf dem iPhone verfügbar.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Für Hilfe, Feedback oder Fehlermeldungen:',
    },
    privacyPolicyLink: 'Datenschutzrichtlinie',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Datenschutzrichtlinie`,
    metaDescription: `Datenschutzrichtlinie für ${PULSE_APP_NAME}: Anmeldung mit Apple und Google, Cloud-Sync, Pomodoro-Pro-Käufe über RevenueCat, Focus Protection, Analytik und Kontolöschung auf Mac und iPhone.`,
    title: 'Datenschutzrichtlinie',
    subtitle: `${PULSE_APP_NAME} — Pomodoro-Timer für Mac und iPhone`,
    lastUpdated: 'Zuletzt aktualisiert: 26. Oktober 2026',
    summary: {
      title: 'Zusammenfassung',
      body: `Wenn Sie sich mit Apple oder Google anmelden, hält Ihr Konto Fokus-Historie, Tagesziele und Timer-Einstellungen zwischen Mac und iPhone synchron. Wir speichern nur, was die App dafür braucht: Ihre E-Mail-Adresse, eine Konto-Kennung und die von Ihnen erzeugten Fokusdaten. Wir verkaufen sie nicht, nutzen sie nicht für Werbung und teilen sie nicht mit unserem Analytik-Anbieter. Wenn Sie Pomodoro Pro auf dem iPhone kaufen, speichert unser Kauf-Anbieter RevenueCat Ihre Kaufhistorie verknüpft mit Ihrem Konto, damit Pro auf jedem Gerät funktioniert, auf dem Sie angemeldet sind. Die App-Auswahl von Focus Protection verlässt Ihr iPhone nie. Sie können Ihre Daten jederzeit in den Einstellungen exportieren oder Ihr Konto löschen. Separat kann die App anonyme, datenschutzschonende Nutzungsanalytik senden, damit wir Fokusabläufe verbessern können.`,
    },
    localData: {
      title: 'Auf Ihrem Gerät gespeicherte Daten',
      body: 'Ihre Timer-Einstellungen, Sitzungspräferenzen und Fokus-Historie werden lokal auf Mac oder iPhone mit dem standardmäßigen Systemspeicher gespeichert, damit der Timer offline weiterläuft. Jedes auf einem Gerät angemeldete Konto hat einen eigenen lokalen Speicher. Ihre Anmeldesitzung wird in der System-Schlüsselkette aufbewahrt. Sprache, Erscheinungsbild, Start bei Anmeldung, Benachrichtigungen und Motivations-Erinnerungen bleiben auf jedem Gerät und werden nicht synchronisiert. Der Inhalt der Fokus-Historie selbst wird nicht an unseren Analytik-Anbieter hochgeladen.',
      migrationSafety:
        'Wenn Sie sich auf einem Gerät erstmals anmelden, das bereits Fokus-Historie hat, fragt die App, bevor diese Historie in Ihr Konto verschoben wird. Bis die Verschiebung auf unseren Servern bestätigt ist, plus 90 Tage, behält die App die frühere lokale Kopie und eine lokale Sicherungsdatei auf dem Gerät als Sicherheitsnetz und entfernt sie anschließend automatisch.',
    },
    accountAndSync: {
      title: 'Ihr Konto und synchronisierte Daten',
      intro: 'Wenn Sie sich anmelden, verarbeiten wir:',
      items: [
        'Kontaktinfo: die von Sign in with Apple (ggf. private Relay-Adresse über Hide My Email) oder Google geteilte E-Mail-Adresse. Wir fragen nicht nach Ihrem Namen.',
        'Kennungen: eine bei der Anmeldung erstellte Konto-ID und eine zufällige ID pro Installation, nur für Sync und um zu erkennen, welches Gerät eine Änderung vorgenommen hat.',
        'Fokusdaten: abgeschlossene und gelöschte Fokus- und Pausensitzungen (Zeiten, Dauern, lokaler Tag und Zeitzone sowie das gewählte Tag), von Ihnen erstellte Tags (Name und Farbe), Tagesziele, Ihre beste Serie und synchronisierte Einstellungen (Sitzungsdauern, Tagesziel, Ton, Animationen, Abschlussklang, Feiertier).',
      ],
      closing:
        'Diese Daten dienen nur Sync, Historie und Kontofunktionen. Sie sind mit Ihrem Konto verknüpft, werden nicht zum Tracking genutzt und nicht an Dritte außer den unten genannten Auftragsverarbeitern weitergegeben.',
    },
    processors: {
      title: 'Auftragsverarbeiter und Speicherort',
      bodyBeforeSupabase: 'Konto- und Sync-Daten werden bei',
      bodyAfterSupabase:
        ' (Datenbank und Authentifizierung) in der Europäischen Union gespeichert. Die Anmeldung wird abhängig von Ihrer Wahl von',
      orWord: 'oder',
      bodyAfterProviders:
        ' abgewickelt. Pomodoro-Pro-Käufe werden verwaltet mit',
      bodyAfterRevenueCat:
        ' (siehe Käufe unten). Daten werden bei der Übertragung verschlüsselt; der Zugriff ist so beschränkt, dass jedes Konto nur seine eigenen Daten lesen kann.',
    },
    purchases: {
      title: 'Käufe (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro wird über den App Store verkauft; Apple wickelt die Zahlung ab, und wir sehen Ihre Zahlungsdaten nie. Damit Pro auf jedem Gerät freigeschaltet wird, auf dem Sie angemeldet sind, teilt die App Ihre Konto-ID mit',
      bodyAfterRevenueCat:
        ', das Ihre Kaufhistorie (gekaufte Produkte, Kauf- und Verlängerungsdaten, Abostatus) mit dieser ID verknüpft. Diese Daten dienen nur der Freischaltung und Wiederherstellung von Pro, werden nicht zum Tracking genutzt und nicht an unseren Analytik-Anbieter weitergegeben. Pro erfordert ein angemeldetes Konto; vor der Anmeldung wird nichts an RevenueCat gesendet.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection nutzt Apples Screen-Time-Framework (Family Controls), um die von Ihnen gewählten Apps, Kategorien und Websites während einer Fokus-Sitzung zu blockieren. Apple gibt der App nur undurchsichtige Token für Ihre Auswahl: Wir sehen nicht, welche Apps oder Websites Sie gewählt haben, wie Sie sie nutzen oder andere Screen-Time-Daten. Ihre Auswahl bleibt auf diesem iPhone, wird nie hochgeladen oder synchronisiert und nicht an unseren Analytik-Anbieter gesendet. Sie können Focus Protection jederzeit in der App ausschalten oder den Zugriff unter Einstellungen → Bildschirmzeit → Apps mit Bildschirmzeit-Zugriff entfernen.',
    },
    retention: {
      title: 'Aufbewahrung, Backups und Löschung',
      items: [
        'Ihre synchronisierten Daten werden aufbewahrt, solange Ihr Konto besteht.',
        'Konto löschen (Einstellungen → Konto → Konto löschen) löscht Ihr Konto und alle synchronisierten Daten dauerhaft aus unserer Live-Datenbank, widerruft die Sign-in-with-Apple-Autorisierung der App, wenn gespeichert, bittet RevenueCat, den mit Ihrem Konto verknüpften Kauf-Datensatz zu löschen, und entfernt die Kontodaten auf dem Gerät, auf dem Sie löschen. Lokale Kopien auf anderen Geräten können nicht mehr synchronisieren und bleiben dort, bis Sie die App auf diesen Geräten löschen oder sie über den Anmeldebildschirm entfernen, wenn angeboten.',
        'Unser Datenbankanbieter bewahrt tägliche Backups 7 Tage auf. Gelöschte Daten können in diesen Backups verbleiben, bis sie ablaufen; Backups dienen nur der Notfallwiederherstellung. Wir können zusätzlich bis zu 90 Tage ein verschlüsseltes Wochenbackup für denselben Zweck aufbewahren.',
        'Kontolöschung kündigt kein App-Store-Abo; verwalten oder kündigen Sie es in Ihren Apple-Kontoeinstellungen. Apple führt eigene App-Store-Transaktionsaufzeichnungen.',
        'Abmelden löscht nichts. Noch nicht synchronisierte Änderungen bleiben auf dem Gerät, bis sich dasselbe Konto wieder anmeldet.',
        'Analytik-Einträge werden von TelemetryDeck gemäß dessen Aufbewahrungspraxis verarbeitet und nicht zur Wiederherstellung Ihrer Fokus-Historie genutzt.',
      ],
    },
    export: {
      title: 'Export',
      body: 'Einstellungen → Konto → Meine Daten exportieren speichert eine JSON-Datei mit Ihren Sitzungen, Tageszielen, synchronisierten Einstellungen und Kontoprofil. Daten, die noch nicht in ein Konto übernommen wurden, können auch vom Anmeldebildschirm exportiert werden.',
    },
    analytics: {
      title: 'Analytik',
      introBeforeLink: 'Wir nutzen',
      introAfterLink:
        ', einen datenschutzorientierten Analytik-Dienst, um zu verstehen, wie die App genutzt wird (z. B. gestartete oder abgeschlossene Fokus- oder Pausensitzungen, Änderungen am Tagesziel, Einstellungsänderungen, Ergebnisse der Benachrichtigungsberechtigung, Motivations-Erinnerungs-Ereignisse und ob das Onboarding abgeschlossen wurde). Signale enthalten keinen Freitext, keine Namen, keine E-Mails und keine Inhalte Ihrer Fokus-Historie.',
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
      body: 'Auf dem iPhone helfen optionale lokale Benachrichtigungen, Motivations-Erinnerungen und Live Activities dabei zu sehen, wann eine Sitzung endet, oder sanft zurück in den Fokus zu finden. Die Berechtigung wird nur angefragt, wenn Sie diese Funktionen aktivieren. Der Inhalt der Benachrichtigungen bleibt auf Ihrem Gerät.',
    },
    whatWeDoNotDo: {
      title: 'Was wir nicht tun',
      items: [
        'Keine Werbenetzwerke',
        'Kein Verkauf personenbezogener Informationen',
        'Kein Zugriff auf Kontakte, Fotos, präzisen Standort, Kamera oder Mikrofon für Analytik',
      ],
    },
    children: {
      title: 'Kinder',
      body: `${PULSE_APP_NAME} erhebt wissentlich keine personenbezogenen Daten von Kindern über das hinaus, was ein Konto für die Synchronisation benötigt, wie oben beschrieben. Analytik-Signale sind anonym und enthalten keine persönlichen Inhalte.`,
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
