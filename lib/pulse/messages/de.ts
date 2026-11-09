import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const deMessages: PulseMessages = {
  languageLabel: 'Seitensprache',
  video: {
    ariaLabel: `${PULSE_APP_NAME} Produktvorstellung`,
    playLabel: 'Vorstellung abspielen',
    unsupported: 'Ihr Browser unterstützt keine eingebetteten Videos.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Fokus-Timer für iPhone und Mac`,
    metaDescription: `${PULSE_APP_NAME} ist ein ruhiger Pomodoro-Timer für iPhone und Mac mit Focus History, Daily Focus Goals, Anmeldung mit Apple und Google sowie offline-first-Synchronisierung über Ihre Geräte.`,
    heroImageAlt: `${PULSE_APP_NAME} Fokus-Timer und wöchentliche Verlaufsübersicht`,
    backToProjects: 'Zurück zu den Projekten',
    availableOnAppStore: 'Im App Store verfügbar',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Fokus-Timer für iPhone und Mac',
    tagline: 'Ein sanfter Pomodoro-Timer, der Ihnen beim Fokussieren hilft — auf dem iPhone und in der Mac-Menüleiste.',
    description: `Starten Sie eine Fokus-Sitzung, machen Sie eine Pause und behalten Sie Ihren Verlauf bei sich. Melden Sie sich mit Apple oder Google an, damit Daily Focus Goals, Focus History und synchronisierte Einstellungen mit Ihrem Konto auf iPhone und Mac bleiben — während der Timer auch offline weiterläuft.`,
    downloadCta: 'Im App Store laden',
    watchDemo: 'In Aktion ansehen',
    supportCta: 'Support',
    stats: {
      platformLabel: 'Plattformen',
      platformValue: 'iPhone & Mac',
      languagesLabel: 'Sprachen',
      languagesValue: '7 Sprachen',
      dataLabel: 'Sync',
      dataValue: 'Offline-first',
      builtWithLabel: 'Entwickelt mit',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Eine ruhigere Art zu fokussieren',
      title: 'Ihr Timer ist da, wenn Sie ihn brauchen — und weg, wenn nicht.',
      description: `Öffnen Sie ${PULSE_APP_NAME} auf dem Mac über die Menüleiste, wählen Sie eine Sitzung und schließen Sie das Popover. Auf dem iPhone starten Sie Fokus von der Startseite und arbeiten auf unterstützten Geräten mit Live Activities weiter. Der Timer läuft weiter, während Sie arbeiten.`,
      caption:
        'Fokus- und Pausen-Timer, Daily Focus Goals, Focus History, Serien-Tracking, Lokalisierung in 7 Sprachen und optionale Abschlussbenachrichtigungen.',
    },
    rhythm: {
      eyebrow: 'Ein Rhythmus, den Sie steuern',
      title: 'Fokussieren, pausieren, erholen, wiederholen.',
      description: `${PULSE_APP_NAME} schlägt vor, was als Nächstes kommt, startet aber nie eine Sitzung für Sie. Jede Dauer lässt sich an Ihren Tag anpassen.`,
    },
    featureShowcases: [
      {
        title: 'Fokus',
        badge: '1–120 Min.',
        description:
          'Der Countdown läuft leise, während Sie arbeiten. Pausieren, zurücksetzen oder überspringen — Sie behalten die Kontrolle auf iPhone und Mac.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} laufende Fokus-Sitzung mit Pausesteuerung und Countdown`,
      },
      {
        title: 'Menüleiste',
        badge: 'Mac',
        description:
          'Zeigen oder verbergen Sie die verbleibende Zeit in der Mac-Menüleiste. Das Status-Element mit fester Breite bleibt an Ort und Stelle, ohne das Popover zu verschieben — bis zu 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} Countdown in der macOS-Menüleiste`,
      },
      {
        title: 'Anpassung',
        badge: 'Ihre Regeln',
        description:
          'Flexible Dauern, Daily Focus Goals, Abschlussklänge und Animationen, 7 UI-Sprachen und Erscheinungsbild-Einstellungen.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} Einstellungen für Dauern, Abschlussbenachrichtigungen, Sprache und Ziele`,
      },
    ],
    history: {
      eyebrow: 'Fortschritt ohne Druck',
      title: 'Sehen Sie, wie sich die Arbeit summiert.',
      description:
        'Öffnen Sie Focus History, um Summen und Serien zu prüfen. Wenn Sie angemeldet sind, kann der Verlauf zwischen iPhone und Mac synchronisiert werden, sodass der Fortschritt Ihnen folgt.',
      items: ['Gesamte Fokuszeit', 'Anzahl abgeschlossener Sitzungen', 'Aktuelle Serie', 'Beste Serie', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} wöchentlicher Fokusverlauf mit Sitzungsanzahl, Fokusstunden und Serie`,
    },
    feedback: {
      eyebrow: 'Sanftes Feedback, auf Ihre Weise',
      title: 'Machen Sie das Abschließen belohnend.',
      description: `Wählen Sie aus sechs ruhigen Abschlussklängen und sechs Tier-Feieranimationen oder schalten Sie beides aus. ${PULSE_APP_NAME} zeigt die passende Meldung, wenn eine Fokus-, Kurzpausen- oder Langpausen-Sitzung endet.`,
      items: [
        'Sitzungsbezogene Abschlussüberschrift und Untertitel',
        'UI in 7 Sprachen mit Systemsprache als Standard',
        'Sprach- und Erscheinungsbild-Einstellungen auf jedem Gerät',
        'Optionale Benachrichtigungen und Live Activities auf dem iPhone',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} Einstellungen für Dauern, Sprache, Abschlussklänge und Ziele`,
      celebrationImageAlt: `${PULSE_APP_NAME} Hasen-Feieranimation beim Abschluss einer Sitzung`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Affe', 'Koala', 'Katze', 'Fuchs', 'Panda', 'Hase'],
    },
    native: {
      eyebrow: 'Von Grund auf nativ',
      title: 'Gebaut, um sich auf Apple-Geräten wie zu Hause anzufühlen.',
      description: `SwiftUI, AppKit und Systemkonventionen halten ${PULSE_APP_NAME} schnell und vertraut — mit VoiceOver-Beschriftungen und Reduce-Motion-Unterstützung durchgängig.`,
      features: [
        {
          title: 'Mac-Menüleiste & iPhone-Startseite',
          description: 'Ein ruhiger Menüleisten-Begleiter auf dem Mac und ein fokussiertes Startseiten-Erlebnis auf dem iPhone.',
        },
        {
          title: 'Bleibt genau',
          description:
            'Sitzungen bleiben über Ruhezustand, Aufwachen und Neustarts korrekt; der Verlauf wird zum tatsächlichen Endzeitpunkt erfasst.',
        },
        {
          title: 'Offline-first-Synchronisierung',
          description:
            'Bleiben Sie ohne Verbindung fokussiert. Wenn Sie wieder online sind, werden angemeldete Änderungen mit Ihrem Konto synchronisiert.',
        },
        {
          title: 'Spricht Ihre Sprache',
          description:
            'Vollständige UI auf Englisch, Türkisch, Deutsch, Japanisch, Koreanisch, Vereinfachtem Chinesisch und Traditionellem Chinesisch, mit Systemsprache als Standard und manueller Auswahl in den Einstellungen.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privat by Design',
      title: 'Ihr Fokus bleibt Ihrer.',
      description: `${PULSE_APP_NAME} nutzt ein Konto, damit der Verlauf zwischen Ihren Geräten synchronisiert werden kann. Wir speichern nur, was für die Synchronisierung nötig ist, verkaufen Ihre Daten nie und halten Analysen von Ihrem Fokusverlauf getrennt.`,
      items: [
        'Anmeldung mit Apple oder Google',
        'Offline-first-Fokus auf jedem Gerät',
        'Cloud-Sync für Verlauf und synchronisierte Einstellungen',
        'Keine Werbenetzwerke',
        'Konto jederzeit in den Einstellungen löschen',
      ],
    },
    closing: {
      title: 'Schaffen Sie Raum für fokussierte Arbeit.',
      description: `Holen Sie sich ${PULSE_APP_NAME} im App Store für iPhone und Mac, oder lesen Sie die Datenschutzrichtlinie und die Support-Seite, wenn Sie Hilfe brauchen.`,
      getSupport: 'Support erhalten',
      privacy: 'Datenschutz',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Support`,
    metaDescription: `Support, FAQ und Kontohilfe für ${PULSE_APP_NAME} auf iPhone und Mac — einschließlich Pomodoro Pro, kostenlosen Testphasen, Limited-Annual-Angeboten, Focus Protection, Anmeldung, Sync und Kontolöschung.`,
    title: `${PULSE_APP_NAME} Support`,
    intro: `${PULSE_APP_NAME} ist ein ruhiger Pomodoro-Timer für iPhone und Mac. Melden Sie sich mit Apple oder Google an, um Focus History über Ihre Geräte zu synchronisieren. Auf dem iPhone schaltet optionales Pomodoro Pro Focus Protection, benutzerdefinierte Tags, Tag Insights, Stopwatch Mode, Session Notes und Custom Breaks frei.`,
    gettingStarted: {
      title: 'Erste Schritte',
      items: [
        {
          question: 'Wie starte, pausiere, setze ich fort oder beende ich eine Fokus-Sitzung?',
          answer:
            'Klicken Sie auf dem Mac auf das App-Symbol in der Menüleiste, wählen Sie Fokus, Kurzpause oder Langpause und tippen Sie auf Start. Öffnen Sie auf dem iPhone die App, wählen Sie eine Sitzung und tippen Sie auf Start. Pausieren und Fortsetzen erfolgen über die Steuerelemente der laufenden Sitzung. Wenn der Countdown endet, wird die Sitzung automatisch abgeschlossen; Sie können auch über die Steuerelemente stoppen oder überspringen. Sie können die App verlassen, während der Timer läuft.',
        },
        {
          question: 'Wie funktionieren Fokus- und Pausen-Timer?',
          answer:
            'Fokus ist für konzentrierte Arbeit. Kurzpause und Langpause sind Erholungssitzungen. Die App kann nach dem Abschluss vorschlagen, was als Nächstes kommt, startet die nächste Sitzung aber nie automatisch für Sie. Öffnen Sie die Einstellungen, um die Längen von Fokus, Kurzpause und Langpause anzupassen oder einen vorgegebenen Rhythmus zu wählen und die Minuten feinzujustieren.',
        },
        {
          question: 'Wie funktionieren Tags und benutzerdefinierte Tags?',
          answer:
            'Sie können Sitzungen kostenlos mit integrierten Tags kennzeichnen. Pomodoro Pro auf dem iPhone schaltet benutzerdefinierte Tags mit eigenen Namen und Farben frei. Der gewählte Tag wird mit der Sitzung gespeichert und kann mit Ihrem Konto synchronisiert werden.',
        },
        {
          question: 'Wie funktionieren Daily Focus Goals und Serien?',
          answer:
            'Legen Sie in den Einstellungen fest, wie viele Fokus-Sitzungen Sie pro Tag möchten. Der Fortschritt erscheint auf der Startseite und in Focus History. Serien zählen aufeinanderfolgende Tage mit abgeschlossenen Fokus-Sitzungen, wenn Sie angemeldet sind.',
        },
        {
          question: 'Wie sehe ich Produktivitätsstatistiken und den Sitzungsverlauf?',
          answer:
            'Öffnen Sie Focus History / Übersicht, um Summen, Serien, Wochenfortschritt und vergangene Sitzungen zu prüfen. Pomodoro Pro schaltet reichere Tag Insights und zusätzliche Verlaufsfilter auf dem iPhone frei.',
        },
        {
          question: 'Wie ändere ich Sprache und Erscheinungsbild?',
          answer:
            'Wählen Sie in den Einstellungen Sprache (System oder eine unterstützte Sprache) und Erscheinungsbild (System, Hell oder Dunkel). Diese Einstellungen bleiben auf jedem Gerät und werden nicht synchronisiert. Unterstützte Sprachen sind Englisch, Türkisch, Deutsch, Japanisch, Koreanisch, Vereinfachtes Chinesisch und Traditionelles Chinesisch.',
        },
      ],
    },
    accounts: {
      title: 'Konten',
      items: [
        {
          question: 'Warum ist eine Anmeldung erforderlich?',
          answer:
            'Ein Konto lässt Focus History, Daily Focus Goals und synchronisierte Einstellungen auf iPhone und Mac bei Ihnen bleiben. Neue Installationen bitten Sie vor Nutzung des Timers um Anmeldung. Geräte, die von älteren Versionen aktualisieren, können den lokalen Verlauf bis zur Anmeldung nutzbar halten. Pomodoro-Pro-Käufe bleiben ebenfalls bei Ihrem angemeldeten Konto.',
        },
        {
          question: 'Wie melde ich mich mit Apple oder Google an?',
          answer:
            'Wählen Sie auf dem Anmeldebildschirm „Weiter mit Apple“ oder „Weiter mit Google“ und schließen Sie den Anbieterfluss ab. Apple kann „Meine E-Mail-Adresse verbergen“ anbieten.',
        },
        {
          question: 'Wie melde ich mich ab?',
          answer:
            'Öffnen Sie Einstellungen → Konto → Abmelden. Wenn einige Änderungen noch nicht synchronisiert wurden, kann die App Sie bitten, zuerst zu synchronisieren oder trotzdem abzumelden. Abmelden löscht Ihr Konto nicht.',
        },
        {
          question: 'Wie melde ich mich wieder an?',
          answer:
            'Verwenden Sie dieselbe Apple- oder Google-Methode auf dem Anmeldebildschirm. Ihr Cloud-Verlauf wird auf diesem Gerät für dieses Konto wiederhergestellt.',
        },
        {
          question: 'Was passiert, wenn ich ein anderes Konto verwende?',
          answer:
            'Jedes Konto hat seinen eigenen Verlauf. Die Anmeldung bei einem anderen Konto führt keine unabhängigen Verläufe zusammen. Wählen Sie sorgfältig, bevor Sie auf einem Gerät mit lokalen Sitzungen eine Verlaufsübernahme bestätigen.',
        },
        {
          question: 'Kann ich Apple und Google mit demselben Konto verknüpfen?',
          answer:
            'Ja. Unter Einstellungen → Konto können Sie die andere Anmeldemethode verknüpfen, wenn sie nicht bereits von einem anderen Konto genutzt wird.',
        },
      ],
    },
    cloudSync: {
      title: 'Cloud-Synchronisierung',
      items: [
        {
          question: 'Was wird zwischen Geräten synchronisiert?',
          answer:
            'Fokus- und Pausen-Sitzungsverlauf (einschließlich des gewählten Tags und etwaiger Sitzungsnotizen), von Ihnen erstellte Tags, Daily-Focus-Goal-Einträge, serienbezogene Kontodaten und synchronisierte Einstellungen wie Sitzungslängen, Tagesziel, Sound, Animationen, Abschlussklang und Feiertier.',
        },
        {
          question: 'Was passiert ohne Internet?',
          answer:
            'Nach der Anmeldung können Sie den Timer offline weiter nutzen. Neue Sitzungen und Änderungen bleiben auf dem Gerät, bis eine Verbindung verfügbar ist.',
        },
        {
          question: 'Was passiert, wenn ich wieder online bin?',
          answer:
            'Die App synchronisiert ausstehende Änderungen mit Ihrem Konto. Die Synchronisierung ist offline-first und letztlich konsistent — keine sofortige Echtzeit-Zusammenarbeit.',
        },
        {
          question: 'Wie nutze ich dasselbe Konto auf iPhone und Mac?',
          answer:
            'Installieren Sie die App auf beiden Geräten und melden Sie sich mit demselben Apple- oder Google-Konto an. Nach Abschluss der Wiederherstellung kann Focus History auf beiden erscheinen.',
        },
        {
          question: 'Was, wenn der Verlauf fehlt?',
          answer:
            'Bestätigen Sie, dass Sie im selben Konto angemeldet sind, warten Sie auf den Abschluss von Wiederherstellung/Sync und prüfen Sie Focus History erneut. Wenn Sie sich bei einem anderen Konto angemeldet haben, zeigt dieses seinen eigenen Verlauf.',
        },
      ],
    },
    migration: {
      title: 'Aktualisierung von einer älteren Version',
      items: [
        {
          question: 'Was geschieht mit meinem vorhandenen lokalen Verlauf?',
          answer:
            'Vorhandener lokaler Verlauf wird nicht stillschweigend gelöscht. Nach der Anmeldung fragt die App, bevor dieser Verlauf Ihrem Konto hinzugefügt wird.',
        },
        {
          question: 'Wie sollte ich meinen Verlauf übernehmen?',
          answer:
            'Melden Sie sich bei dem Konto an, dem der Verlauf gehören soll, prüfen Sie den Bildschirm „Verlauf hinzufügen“ und wählen Sie „Zu diesem Konto hinzufügen“. Verwenden Sie ein anderes Konto, wenn das angezeigte Konto falsch ist. Sitzungen können später nicht auf ein anderes Konto verschoben werden.',
        },
        {
          question: 'Was, wenn Geräte- und Kontoeinstellungen abweichen?',
          answer:
            'Die App kann fragen, ob die Einstellungen dieses Geräts oder die Kontoeinstellungen behalten werden sollen. Sprache, Erscheinungsbild, Benachrichtigungseinstellungen und Focus-Protection-Auswahl bleiben gerätelokal.',
        },
      ],
    },
    notifications: {
      title: 'Benachrichtigungen und Live Activities',
      items: [
        {
          question: 'Wie aktiviere ich Benachrichtigungen auf dem iPhone?',
          answer:
            'Öffnen Sie Einstellungen → Benachrichtigungen und wählen Sie Aktivieren, oder öffnen Sie die Systemeinstellungen, wenn die Berechtigung zuvor verweigert wurde. Sitzungsende-Hinweise benötigen die Benachrichtigungsberechtigung.',
        },
        {
          question: 'Wie funktionieren Live Activities?',
          answer:
            'Auf unterstützten iPhones kann eine optionale Live Activity eine aktive Sitzung auf dem Sperrbildschirm und in der Dynamic Island anzeigen. Sie können Live Activities in den Einstellungen ein- oder ausschalten. Live Activities nutzen keine Push-Benachrichtigungen von unseren Servern.',
        },
        {
          question: 'Was, wenn Benachrichtigungen deaktiviert sind?',
          answer:
            'Ohne Benachrichtigungsberechtigung können Sitzungsende-Hinweise nicht erscheinen. Nutzen Sie Einstellungen → Benachrichtigungen → Einstellungen öffnen, um sie in den iOS-Einstellungen zu aktivieren.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Was ist kostenlos und was gehört zu Pomodoro Pro?',
          answer:
            'Kostenlos umfasst Fokus- und Pausen-Timer, integrierte Tags, Focus-History-Grundlagen, Daily Focus Goals, Serien, Anmeldung und Cloud-Sync. Pomodoro Pro auf dem iPhone schaltet Focus Protection, benutzerdefinierte Tags, Tag Insights, Stopwatch Mode, Session Notes, Custom Breaks, das Bearbeiten oder Löschen vergangener Sitzungen sowie reichere Statistikfilter frei.',
        },
        {
          question: 'Welche Kaufoptionen gibt es?',
          answer:
            'Pomodoro Pro wird als monatliches Abonnement, jährliches Abonnement, Limited-Annual-Angebot (falls verfügbar) oder Lifetime-Einmalkauf angeboten. Abonnements verlängern sich automatisch, sofern Sie nicht mindestens 24 Stunden vor Ende des aktuellen Zeitraums kündigen. Lifetime wird einmal berechnet und ist kein Abonnement.',
        },
        {
          question: 'Was ist das Limited-Annual-Angebot?',
          answer:
            'Limited Annual ist ein rabattiertes jährliches Pomodoro-Pro-Abonnement, das für begrenzte Zeit für berechtigte Nutzer erscheinen kann, die Pro noch nicht gekauft haben. Es schaltet dieselbe Pro-Berechtigung frei wie der reguläre Jahresplan. Die Verfügbarkeit ist zeitlich begrenzt und nicht für jedes Konto garantiert.',
        },
        {
          question: 'Enthalten Abonnements eine kostenlose Testphase?',
          answer:
            'Berechtigte monatliche oder jährliche Abonnements können eine kostenlose Testphase enthalten. Die Paywall zeigt eine kostenlose Testphase nur, wenn die Berechtigung für Ihr Apple-Konto bestätigt ist; die Testdauer erscheint vor der Bestätigung auf der Paywall und im App-Store-Kaufblatt. Lifetime enthält keine Testphase. Wenn Sie nicht berechtigt sind, wird der Standardpreis angezeigt.',
        },
        {
          question: 'Wo kaufe oder sehe ich Pomodoro Pro?',
          answer:
            'Öffnen Sie auf dem iPhone Einstellungen → Pomodoro Pro. Sie müssen angemeldet sein. Pro bleibt bei Ihrem Konto auf jedem Gerät, auf dem Sie sich anmelden.',
        },
        {
          question: 'Wie stelle ich Käufe wieder her?',
          answer:
            'Nutzen Sie „Käufe wiederherstellen“ auf der Paywall oder unter Einstellungen → Pomodoro Pro. Käufe mit demselben Apple-Konto werden dem Konto zugeordnet, bei dem Sie angemeldet sind. Wenn nichts gefunden wird, bestätigen Sie, dass Sie das Apple-Konto verwenden, mit dem Pro gekauft wurde, und versuchen Sie es online erneut.',
        },
      ],
    },
    purchases: {
      title: 'Abonnements und Käufe',
      items: [
        {
          question: 'Wie verwalte oder kündige ich ein Abonnement?',
          answer:
            'Abonnements werden von Apple abgerechnet. Öffnen Sie auf dem iPhone Einstellungen → Pomodoro Pro → Abonnement verwalten, oder gehen Sie zu Einstellungen → [Ihr Name] → Abonnements und wählen Sie die App. Kündigen Sie mindestens 24 Stunden vor der Verlängerung, um die nächste Belastung zu vermeiden. Das Löschen der App oder Ihres Pomodoro-Kontos kündigt kein Abonnement.',
        },
        {
          question: 'Wie beantrage ich eine Rückerstattung?',
          answer:
            'Rückerstattungen werden von Apple bearbeitet. Besuchen Sie reportaproblem.apple.com, melden Sie sich mit dem für den Kauf verwendeten Apple-Konto an, finden Sie die Transaktion und senden Sie eine Rückerstattungsanfrage. Wir können App-Store-Rückerstattungen nicht selbst bearbeiten.',
        },
        {
          question: 'Was, wenn ein Kauf fehlschlägt oder Pro nicht freigeschaltet wird?',
          answer:
            'Bleiben Sie angemeldet, prüfen Sie Ihre Netzwerkverbindung und versuchen Sie es erneut. Wenn die Zahlung aussteht (z. B. „Zum Kaufen fragen“), wird Pro nach der Freigabe freigeschaltet. Wenn Sie bereits bezahlt haben, nutzen Sie „Käufe wiederherstellen“. Bei Zahlungsproblemen bei einem aktiven Abonnement aktualisieren Sie Ihre Zahlungsmethode in den App-Store-Einstellungen.',
        },
        {
          question: 'Was, wenn ich Lifetime kaufe, während ein Abonnement aktiv ist?',
          answer:
            'Lifetime schaltet Pro dauerhaft frei, aber ein bestehendes Abonnement wird nicht automatisch gekündigt. Deaktivieren Sie die automatische Verlängerung in den App-Store-Abonnementeinstellungen, damit Sie nicht erneut belastet werden.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Was ist Focus Protection?',
          answer:
            'Focus Protection ist eine Pomodoro-Pro-Funktion auf dem iPhone. Sie nutzt Apples Screen-Time-APIs, um die von Ihnen gewählten Apps, Kategorien oder Websites während einer Fokus-Sitzung zu blockieren. Pausen werden nie blockiert. Wenn die Sitzung endet, werden blockierte Apps automatisch freigegeben. Ihre Blockierauswahl bleibt auf diesem iPhone und wird weder hochgeladen noch synchronisiert.',
        },
        {
          question: 'Wie richte ich es ein?',
          answer:
            'Öffnen Sie bei aktivem Pro Einstellungen → Focus Protection. Erlauben Sie den Screen-Time-Zugriff, wenn Sie dazu aufgefordert werden, wählen Sie, was blockiert werden soll, und schalten Sie Focus Protection ein. Starten Sie eine Fokus-Sitzung, um die Sperren anzuwenden.',
        },
        {
          question: 'Wie schalte ich es aus oder entsperre Apps?',
          answer:
            'Öffnen Sie Focus Protection in den Einstellungen und schalten Sie die Funktion aus, oder nutzen Sie die Entsperroptionen auf dem Sperrbildschirm nach einer Sitzung. Um den Screen-Time-Zugriff der App vollständig zu entfernen, gehen Sie zu iOS-Einstellungen → Bildschirmzeit → Apps mit Bildschirmzeit-Zugriff.',
        },
        {
          question: 'Was, wenn Focus Protection nicht funktioniert?',
          answer:
            'Bestätigen Sie, dass Pro aktiv ist, der Screen-Time-Zugriff erlaubt ist und Sie Apps oder Kategorien zum Blockieren ausgewählt haben. Focus Protection gilt nur während Fokus-Sitzungen, nicht in Pausen. Wenn der Zugriff in den Systemeinstellungen widerrufen wurde, öffnen Sie die App und erlauben Sie den Zugriff erneut. Ein Neustart des iPhones kann nach einer Berechtigungsänderung helfen.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Konto und Datenschutz',
      items: [
        {
          question: 'Wie lösche ich mein Konto?',
          answer:
            'Melden Sie sich an, öffnen Sie Einstellungen → Konto → Konto löschen und bestätigen Sie. Ihr Konto und der synchronisierte Fokusverlauf werden dauerhaft aus unserer Live-Datenbank gelöscht. Das kann nicht rückgängig gemacht werden. Zum Löschen ist eine Netzwerkverbindung erforderlich. Das Löschen Ihres Kontos kündigt kein App-Store-Abonnement — verwalten Sie das in den App-Store-Einstellungen.',
        },
        {
          question: 'Was betrifft die Kontolöschung?',
          answer:
            'Synchronisierte Cloud-Daten für dieses Konto werden entfernt, die Sign-in-with-Apple-Autorisierung wird widerrufen, wenn gespeichert, der mit Ihrem Konto verknüpfte Kaufdatensatz wird bei unserem Kaufanbieter zur Löschung angefragt, und die Kontodaten werden vom Gerät entfernt, auf dem Sie löschen. Lokale Kopien auf anderen Geräten können nicht mehr synchronisieren; entfernen Sie die App dort oder löschen Sie sie bei Bedarf. Anbieter-Backups können gelöschte Daten für ein begrenztes Wiederherstellungsfenster behalten. Apple behält eigene App-Store-Transaktionsdaten.',
        },
        {
          question: 'Wie exportiere ich meine Daten?',
          answer:
            'Einstellungen → Konto → Meine Daten exportieren speichert eine JSON-Datei mit Sitzungen, Tageszielwerten, synchronisierten Einstellungen und Kontoprofil. Noch nicht übernommene lokale Daten können auch vom Anmeldebildschirm exportiert werden.',
        },
        {
          question: 'Wo finde ich die Datenschutzrichtlinie?',
          answer:
            'Öffnen Sie die Datenschutzrichtlinie auf der Produktwebsite oder nutzen Sie den Datenschutz-Link auf den Produktseiten dieser Site.',
        },
      ],
    },
    requirements: {
      title: 'Voraussetzungen',
      body: 'iPhone: iOS 17 oder neuer. Mac: macOS 14.6 oder neuer. Pomodoro-Pro-Käufe, kostenlose Testphasen, Limited-Annual-Angebote und Focus Protection sind auf dem iPhone verfügbar.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Für Hilfe, Feedback oder Fehlerberichte:',
    },
    privacyPolicyLink: 'Datenschutzrichtlinie',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Datenschutzrichtlinie`,
    metaDescription: `Datenschutzrichtlinie für ${PULSE_APP_NAME}, einschließlich Anmeldung mit Apple und Google, Cloud-Sync, Pomodoro-Pro-Käufen über RevenueCat, Focus Protection, Analysen, Kontolöschung und Datenschutzrechten auf Mac und iPhone.`,
    title: 'Datenschutzrichtlinie',
    subtitle: `${PULSE_APP_NAME} — Pomodoro-Timer für Mac und iPhone`,
    lastUpdated: 'Zuletzt aktualisiert: 9. November 2026',
    summary: {
      title: 'Zusammenfassung',
      body: `Wenn Sie sich mit Apple oder Google anmelden, hält Ihr Konto Fokusverlauf, Tagesziele und Timer-Einstellungen zwischen Mac und iPhone synchron. Wir speichern nur, was die App dafür braucht: Ihre E-Mail-Adresse, eine Konto-ID und die von Ihnen erstellten Fokusdaten. Wir verkaufen sie nie, nutzen sie nie für Werbung und teilen sie nie mit unserem Analyseanbieter. Wenn Sie Pomodoro Pro auf dem iPhone kaufen — einschließlich Monatlich, Jährlich, Limited Annual, Lifetime oder einer berechtigten kostenlosen Testphase — speichert unser Kaufanbieter RevenueCat Ihre Kauf- und Berechtigungshistorie verknüpft mit Ihrem Konto, damit Pro auf jedem Gerät funktioniert, auf dem Sie sich anmelden. Die App-Auswahl von Focus Protection verlässt Ihr iPhone nie. Sie können Ihre Daten jederzeit in den Einstellungen exportieren oder Ihr Konto löschen. Separat kann die App anonyme, datenschutzschonende Nutzungsanalysen senden, damit wir Fokusabläufe verbessern können.`,
    },
    localData: {
      title: 'Auf Ihrem Gerät gespeicherte Daten',
      body: 'Ihre Timer-Einstellungen, Sitzungspräferenzen und Ihr Fokusverlauf werden lokal auf Ihrem Mac oder iPhone mit Standard-Systemspeicher gespeichert, damit der Timer offline weiterläuft. Jedes auf einem Gerät angemeldete Konto hat einen eigenen lokalen Speicher. Ihre Anmeldesitzung wird in der System-Schlüsselkette gehalten. Sprache, Erscheinungsbild, Bei Anmeldung starten, Benachrichtigungseinstellungen, Live-Activity-Einstellungen und Focus-Protection-Auswahl bleiben auf jedem Gerät und werden nicht synchronisiert. Der Inhalt des Fokusverlaufs selbst wird nicht an unseren Analyseanbieter hochgeladen.',
      migrationSafety:
        'Wenn Sie sich erstmals auf einem Gerät mit vorhandenem Fokusverlauf anmelden, fragt die App, bevor dieser Verlauf in Ihr Konto verschoben wird. Bis die Verschiebung auf unseren Servern bestätigt ist, zuzüglich 90 Tagen, behält die App die vorherige lokale Kopie und eine lokale Sicherungsdatei auf dem Gerät als Sicherheitsnetz und entfernt sie danach automatisch.',
    },
    accountAndSync: {
      title: 'Ihr Konto und synchronisierte Daten',
      intro: 'Wenn Sie sich anmelden, verarbeiten wir:',
      items: [
        'Kontaktdaten: die von Sign in with Apple (ggf. eine private Relay-Adresse über Hide My Email) oder Google geteilte E-Mail-Adresse. Wir fragen nicht nach Ihrem Namen.',
        'Kennungen: eine bei der Anmeldung erstellte Konto-ID und eine zufällige ID pro Installation, nur zum Synchronisieren und zur Identifikation, welches Gerät eine Änderung vorgenommen hat.',
        'Fokusdaten: abgeschlossene und gelöschte Fokus- und Pausensitzungen (Zeiten, Dauern, lokaler Tag und Zeitzone, gewählter Tag und etwaige Sitzungsnotizen), von Ihnen erstellte Tags (Name und Farbe), Tageszielwerte, Ihre beste Serie und die synchronisierten Einstellungen (Sitzungslängen, Tagesziel, Sound, Animationen, Abschlussklang, Feiertier).',
      ],
      closing:
        'Diese Daten werden nur genutzt, um Sync-, Verlaufs- und Kontofunktionen bereitzustellen. Sie sind mit Ihrem Konto verknüpft, werden nicht zum Tracking verwendet und nicht an Dritte außer den unten genannten Auftragsverarbeitern weitergegeben.',
    },
    processors: {
      title: 'Auftragsverarbeiter und Speicherort',
      bodyBeforeSupabase: 'Konto- und Sync-Daten werden bei',
      bodyAfterSupabase:
        '(Datenbank und Authentifizierung) in der Europäischen Union gespeichert. Die Anmeldung erfolgt über',
      orWord: 'oder',
      bodyAfterProviders:
        ', je nach gewählter Option. Pomodoro-Pro-Käufe und -Berechtigungen werden mit',
      bodyAfterRevenueCat:
        'verwaltet (siehe Käufe unten). Daten werden während der Übertragung verschlüsselt, und der Zugriff ist so eingeschränkt, dass jedes Konto nur seine eigenen Daten lesen kann.',
    },
    purchases: {
      title: 'Käufe (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro wird über den App Store als monatliche, jährliche, Limited-Annual- (falls angeboten) und Lifetime-Produkte verkauft; berechtigte Abonnements können eine vor dem Kauf angezeigte kostenlose Testphase enthalten. Apple wickelt die Zahlung ab, und wir sehen Ihre Zahlungskartendaten nie. Um Pro auf jedem Gerät freizuschalten, auf dem Sie sich anmelden, teilt die App Ihre Konto-ID mit',
      bodyAfterRevenueCat:
        ', das Ihre Kauf- und Berechtigungshistorie (gekaufte Produkte, Kauf- und Verlängerungsdaten, Test- oder Abonnementstatus sowie Lifetime-Freischaltung) mit dieser ID verknüpft. Diese Daten dienen nur dazu, Pro-Zugang zu gewähren und wiederherzustellen, werden nicht zum Tracking verwendet und nicht mit unserem Analyseanbieter geteilt. Pro erfordert ein angemeldetes Konto; vor der Anmeldung wird nichts an RevenueCat gesendet.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection nutzt Apples Screen-Time-Frameworks (einschließlich Family Controls, Managed Settings und Device Activity), um die von Ihnen gewählten Apps, Kategorien und Websites während einer Fokus-Sitzung zu blockieren. Apple stellt der App nur undurchsichtige Token für Ihre Auswahl bereit: Wir können nicht sehen, welche Apps oder Websites Sie gewählt haben, wie Sie sie nutzen oder andere Screen-Time-Nutzungsinformationen. Ihre Auswahl bleibt auf diesem iPhone, wird nie auf unsere Server hochgeladen oder synchronisiert und nicht an unseren Analyseanbieter gesendet. Wir erheben oder verkaufen keine Screen-Time-Daten. Sie können Focus Protection jederzeit in der App ausschalten oder den Zugriff der App unter Einstellungen → Bildschirmzeit → Apps mit Bildschirmzeit-Zugriff entfernen.',
    },
    retention: {
      title: 'Aufbewahrung, Backups und Löschung',
      items: [
        'Ihre synchronisierten Daten werden so lange aufbewahrt, wie Ihr Konto existiert.',
        'Konto löschen (Einstellungen → Konto → Konto löschen) löscht Ihr Konto und alle synchronisierten Daten dauerhaft aus unserer Live-Datenbank, widerruft die Sign-in-with-Apple-Autorisierung der App, sofern gespeichert, bittet RevenueCat, den mit Ihrem Konto verknüpften Kaufdatensatz zu löschen, und entfernt die Daten dieses Kontos von dem Gerät, auf dem Sie löschen. Lokale Kopien auf Ihren anderen Geräten können nicht mehr synchronisieren und bleiben dort, bis Sie die App auf diesen Geräten löschen oder sie auf dem Anmeldebildschirm entfernen, wenn dies angeboten wird.',
        'Unser Datenbankanbieter speichert tägliche Backups für 7 Tage. Gelöschte Daten können in diesen Backups bis zu deren Ablauf verbleiben; Backups dienen nur der Notfallwiederherstellung. Wir können auch ein verschlüsseltes wöchentliches Backup bis zu 90 Tage für denselben Zweck aufbewahren.',
        'Das Löschen Ihres Kontos kündigt kein App-Store-Abonnement; verwalten oder kündigen Sie es in Ihren Apple-Kontoeinstellungen. Apple behält eigene Aufzeichnungen Ihrer App-Store-Transaktionen.',
        'Abmelden löscht nichts. Noch nicht synchronisierte Änderungen bleiben auf dem Gerät, bis dasselbe Konto sich erneut anmeldet.',
        'Analysedatensätze werden von TelemetryDeck gemäß dessen Aufbewahrungspraktiken verarbeitet und nicht verwendet, um Ihren Fokusverlauf wiederherzustellen.',
      ],
    },
    export: {
      title: 'Export',
      body: 'Einstellungen → Konto → Meine Daten exportieren speichert eine JSON-Datei mit Ihren Sitzungen, Tageszielwerten, synchronisierten Einstellungen und Ihrem Kontoprofil. Daten, die noch nicht in ein Konto übernommen wurden, können auch vom Anmeldebildschirm exportiert werden.',
    },
    analytics: {
      title: 'Analysen',
      introBeforeLink: 'Wir nutzen',
      introAfterLink:
        ', einen datenschutzorientierten Analysedienst, um zu verstehen, wie die App genutzt wird (zum Beispiel: gestartete oder abgeschlossene Fokus- oder Pausensitzungen, geöffneter Verlauf, Einstellungänderungen, Ergebnisse der Benachrichtigungsberechtigung, Abschluss des Onboardings sowie ausgewählte Prüf- oder Migrationsdiagnosen). Signale enthalten keinen Freitext, keine Namen, E-Mails, Sitzungsnotizen oder Inhalte Ihres Fokusverlaufs.',
      identifier:
        'TelemetryDeck identifiziert Installationen mit einer gehashten gerätebezogenen Kennung und kann nicht-personenbezogene Gerätemetadaten anhängen (z. B. Modell, OS-Version und Locale). Diese Daten dienen nur der Analyse, werden von uns nicht mit Ihrer Identität verknüpft und nicht zum Tracking über Apps oder Websites anderer Unternehmen verwendet.',
      learnMore: 'Mehr erfahren:',
      faqLabel: 'TelemetryDeck Datenschutz-FAQ',
    },
    appStoreUpdates: {
      title: 'App-Store-Updates',
      body: 'Wenn Sie in den Einstellungen „Nach Updates suchen“ nutzen, kann die App Apple kontaktieren, um zu prüfen, ob im App Store eine neuere Version verfügbar ist.',
    },
    launchAtLogin: {
      title: 'Bei Anmeldung starten (Mac)',
      body: 'Wenn Sie auf dem Mac in den Einstellungen „Bei Anmeldung starten“ aktivieren, registriert die App sich über macOS-System-APIs als Anmeldeobjekt. Diese Einstellung steuern Sie selbst und können sie jederzeit deaktivieren.',
    },
    notifications: {
      title: 'Benachrichtigungen und Live Activities (iPhone)',
      body: 'Auf dem iPhone helfen optionale lokale Benachrichtigungen und Live Activities dabei, das Sitzungsende zu erkennen oder eine aktive Sitzung auf dem Sperrbildschirm und in der Dynamic Island sichtbar zu halten. Die Berechtigung wird angefordert, wenn Sie zugehörige Funktionen aktivieren. Benachrichtigungs- und Live-Activity-Inhalte bleiben auf Ihrem Gerät und werden nicht an unsere Server gesendet.',
    },
    whatWeDoNotDo: {
      title: 'Was wir nicht tun',
      items: [
        'Keine Werbenetzwerke',
        'Kein Verkauf personenbezogener Daten',
        'Kein Zugriff auf Kontakte, Fotos, präzisen Standort, Kamera oder Mikrofon für Analysen',
        'Keine Erhebung oder kein Upload von Screen-Time-Nutzungsdetails über die undurchsichtigen Token hinaus, die Apple für Focus Protection auf Ihrem Gerät bereitstellt',
      ],
    },
    children: {
      title: 'Kinder',
      body: `${PULSE_APP_NAME} erhebt wissentlich keine personenbezogenen Daten von Kindern über das hinaus, was ein Konto zur Synchronisierung braucht, wie oben beschrieben. Analysesignale sind anonym und enthalten keine persönlichen Inhalte.`,
    },
    privacyRights: {
      title: 'Ihre Datenschutzrechte (einschließlich DSGVO/GDPR und KVKK)',
      intro:
        'Je nachdem, wo Sie leben, können Sie Rechte nach der Datenschutz-Grundverordnung der EU/des Vereinigten Königreichs (DSGVO/GDPR), dem türkischen Gesetz zum Schutz personenbezogener Daten (KVKK) und ähnlichen Gesetzen haben. Vorbehaltlich des geltenden Rechts können dazu gehören:',
      items: [
        'Auskunft über die personenbezogenen Daten verlangen, die wir zu Ihrem Konto speichern',
        'Berichtigung unrichtiger personenbezogener Daten verlangen',
        'Ihre Daten aus der App exportieren (Einstellungen → Konto → Meine Daten exportieren)',
        'Ihr Konto und synchronisierte Daten löschen (Einstellungen → Konto → Konto löschen) oder uns um Hilfe bei der Löschung bitten',
        'Bestimmter Verarbeitung widersprechen oder sie einschränken, soweit das Gesetz dieses Recht vorsieht',
        'Beschwerde bei Ihrer örtlichen Datenschutzbehörde einlegen',
      ],
      closing:
        'Konto- und Sync-Daten werden in der Europäischen Union bei unserem Auftragsverarbeiter Supabase gespeichert. Um diese Rechte auszuüben, nutzen Sie die In-App-Steuerungen, sofern verfügbar, oder kontaktieren Sie uns unter der unten stehenden E-Mail-Adresse. Wir reagieren auf verifizierte Anfragen wie gesetzlich vorgeschrieben. Wir verkaufen keine personenbezogenen Daten.',
    },
    changes: {
      title: 'Änderungen',
      body: 'Wenn sich diese Richtlinie ändert, wird die aktualisierte Fassung unter dieser URL mit einem neuen Datum „Zuletzt aktualisiert“ veröffentlicht.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Fragen zu dieser Richtlinie oder zu Datenschutzrechten:',
    },
  },
}
