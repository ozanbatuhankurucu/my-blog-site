import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const frMessages: PulseMessages = {
  languageLabel: 'Langue de la page',
  video: {
    ariaLabel: `Présentation produit de ${PULSE_APP_NAME}`,
    playLabel: 'Lire la présentation',
    unsupported: 'Votre navigateur ne prend pas en charge la vidéo intégrée.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Minuteur Pomodoro pour la barre de menus macOS`,
    metaDescription: `${PULSE_APP_NAME} est un minuteur Pomodoro natif pour macOS, avec un popover redessiné, un historique de focus complet, des alertes adaptées à la session et une prise en charge de 12 langues.`,
    heroImageAlt: `Minuteur de focus et aperçu de l’historique hebdomadaire de ${PULSE_APP_NAME}`,
    backToProjects: 'Retour aux projets',
    availableOnAppStore: 'Disponible sur le Mac App Store',
    eyebrow: 'Minuteur Pomodoro pour la barre de menus',
    tagline: 'Un minuteur Pomodoro discret qui vit dans votre barre de menus.',
    description: `Restez concentré sans encombrer votre bureau. Lancez une Focus Session, faites une pause et laissez ${PULSE_APP_NAME} suivre vos progrès avec l’historique de focus complet — en silence, en arrière-plan.`,
    downloadCta: 'Télécharger sur le Mac App Store',
    watchDemo: 'Voir en action',
    supportCta: 'Assistance',
    stats: {
      platformLabel: 'Plateforme',
      platformValue: 'macOS natif',
      languagesLabel: 'Langues',
      languagesValue: '12 langues',
      dataLabel: 'Collecte de données',
      dataValue: 'Aucune',
      builtWithLabel: 'Construit avec',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Une façon plus calme de se concentrer',
      title: 'Votre minuteur est là quand vous en avez besoin—et disparaît quand vous n’en avez plus.',
      description: `Ouvrez ${PULSE_APP_NAME} depuis la barre de menus, choisissez une session et fermez le popover. Le minuteur continue pendant que vous travaillez. Au premier lancement, une brève introduction vous indique où le trouver — en respectant Reduce Motion s’il est activé.`,
      caption:
        'Commandes de session redessinées, historique de focus complet, localisation en 12 langues, alertes de fin adaptées à la session et réglages.',
    },
    rhythm: {
      eyebrow: 'Un rythme que vous contrôlez',
      title: 'Focus, pause, récupération, répétition.',
      description: `${PULSE_APP_NAME} suggère la suite, mais ne lance jamais une session à votre place. Chaque durée peut être ajustée à votre journée.`,
    },
    featureShowcases: [
      {
        title: 'Focus',
        badge: '1–120 min',
        description:
          'Le compte à rebours tourne discrètement pendant que vous travaillez. Pausez, réinitialisez ou sautez — le minuteur de la barre de menus reste ancré.',
        imageFile: 'focus-running.png',
        alt: `Session Focus de ${PULSE_APP_NAME} avec commandes de pause et compte à rebours dans la barre de menus`,
      },
      {
        title: 'Barre de menus',
        badge: 'Compte à rebours stable',
        description:
          'Affichez ou masquez le temps restant instantanément. L’élément d’état à largeur fixe reste en place sans déplacer le popover, jusqu’à 120:00.',
        imageFile: 'menubar.png',
        alt: `Compte à rebours de ${PULSE_APP_NAME} affiché dans la barre de menus macOS`,
      },
      {
        title: 'Personnalisation',
        badge: 'Vos règles',
        description:
          'Durées flexibles, sons et animations de fin, 12 langues d’interface et lancement à la connexion.',
        imageFile: 'settings.png',
        alt: `Réglages de ${PULSE_APP_NAME} pour les durées, alertes de fin, langue et lancement à la connexion`,
      },
    ],
    history: {
      eyebrow: 'Des progrès sans pression',
      title: 'Voyez le travail s’accumuler.',
      description:
        'Ouvrez la fenêtre d’historique complet depuis le popover ou le menu d’état. Totaux et séries montrent vos progrès sans transformer le focus en un tableau de bord de plus.',
      items: ['Temps de focus total', 'Nombre de sessions terminées', 'Série en cours', 'Meilleure série'],
      imageAlt: `Historique de focus hebdomadaire de ${PULSE_APP_NAME} avec sessions, heures de focus et série`,
    },
    feedback: {
      eyebrow: 'Un retour doux, à votre façon',
      title: 'Faites de la fin une récompense.',
      description: `Choisissez parmi six sons de fin apaisants et six célébrations animales, ou désactivez l’un ou l’autre. ${PULSE_APP_NAME} affiche le bon message à la fin d’une session Focus, Pause courte ou Pause longue.`,
      items: [
        'Titre et sous-titre de fin adaptés à la session',
        'Interface en 12 langues avec la langue système par défaut',
        'Remplacement de la langue dans Réglages : Système ou toute langue prise en charge',
      ],
      settingsImageAlt: `Réglages de ${PULSE_APP_NAME} pour les durées, la langue, les sons de fin et le lancement à la connexion`,
      celebrationImageAlt: `Animation de célébration du lapin de ${PULSE_APP_NAME} à la fin d’une session`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Singe', 'Koala', 'Chat', 'Renard', 'Panda', 'Lapin'],
    },
    native: {
      eyebrow: 'Natif par conception',
      title: 'Conçu pour se sentir chez vous sur votre Mac.',
      description: `SwiftUI, AppKit et les conventions système macOS gardent ${PULSE_APP_NAME} rapide, familier et fiable — avec des libellés VoiceOver et la prise en charge de Reduce Motion partout.`,
      features: [
        {
          title: 'Vit dans la barre de menus',
          description: 'Pas d’icône dans le Dock, pas de fenêtre principale qui rivalise pour votre attention.',
        },
        {
          title: 'Reste précis',
          description:
            'Les sessions restent correctes après veille, réveil et relances ; l’historique est enregistré à l’échéance réelle.',
        },
        {
          title: 'Garde les données en local',
          description: 'Vos réglages et votre historique de focus ne quittent jamais votre Mac.',
        },
        {
          title: 'Parle votre langue',
          description:
            'Interface complète en 12 langues avec la langue système par défaut et remplacement manuel dans Réglages.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privé par défaut',
      title: 'Votre focus n’est pas un point de données.',
      description: `${PULSE_APP_NAME} ne collecte aucune donnée. Pas de comptes, d’analytique, de publicité ni de requêtes réseau. Tout reste sur votre Mac.`,
      items: [
        'Pas de connexion',
        'Pas de synchronisation cloud',
        'Pas de suivi',
        'Pas d’accès aux fichiers personnels',
        'Aucune donnée ne quitte votre Mac',
      ],
    },
    closing: {
      title: 'Faites de la place pour un travail concentré.',
      description: `Obtenez ${PULSE_APP_NAME} sur le Mac App Store, ou consultez la politique de confidentialité et la page d’assistance si vous avez besoin d’aide.`,
      getSupport: 'Obtenir de l’aide',
      privacy: 'Confidentialité',
    },
  },
  support: {
    metaTitle: `Assistance ${PULSE_APP_NAME}`,
    metaDescription: `Assistance et guide de démarrage pour ${PULSE_APP_NAME}, un minuteur Pomodoro pour la barre de menus sur Mac.`,
    title: `Assistance ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} est un minuteur Pomodoro simple pour la barre de menus sur Mac.`,
    gettingStarted: {
      title: 'Pour commencer',
      steps: [
        'Cliquez sur l’icône de l’app dans la barre de menus (en haut à droite de l’écran).',
        'Choisissez Focus, Pause courte ou Pause longue.',
        'Appuyez sur Démarrer. Vous pouvez fermer le popover pendant que le minuteur tourne.',
      ],
    },
    settings: {
      title: 'Réglages',
      body: 'Ouvrez l’onglet Réglages pour modifier les durées de session, les sons de fin, les animations de la barre de menus et le lancement à la connexion.',
    },
    history: {
      title: 'Historique de focus complet',
      body: 'Ouvrez l’historique complet depuis le popover ou le menu d’état de la barre de menus pour voir votre temps de focus total, vos sessions terminées, votre série en cours et votre meilleure série.',
    },
    requirements: {
      title: 'Configuration requise',
      body: 'macOS 14.6 ou version ultérieure.',
    },
    contact: {
      title: 'Contact',
      body: 'Pour de l’aide, des retours ou des signalements de bugs :',
    },
  },
  privacy: {
    metaTitle: `Politique de confidentialité de ${PULSE_APP_NAME}`,
    metaDescription: `Politique de confidentialité de ${PULSE_APP_NAME}, un minuteur Pomodoro pour Mac et iPhone.`,
    title: 'Politique de confidentialité',
    subtitle: `${PULSE_APP_NAME} — Minuteur Pomodoro pour Mac et iPhone`,
    lastUpdated: 'Dernière mise à jour : 24 septembre 2026',
    summary: {
      title: 'Résumé',
      body: `${PULSE_APP_NAME} ne nécessite pas de compte et ne collecte ni noms, ni e-mails, ni contenu personnel. L’app peut envoyer des analyses d’usage anonymes et respectueuses de la vie privée afin d’améliorer les parcours de focus. Vos réglages de minuteur et votre historique de focus restent sur votre appareil.`,
    },
    localData: {
      title: 'Données stockées sur votre appareil',
      body: 'Vos réglages de minuteur, préférences de session et historique de focus sont enregistrés localement sur votre Mac ou iPhone via le stockage système standard. Le contenu de l’historique de focus lui-même n’est pas envoyé à notre fournisseur d’analytique.',
    },
    analytics: {
      title: 'Analytique',
      introBeforeLink: 'Nous utilisons',
      introAfterLink:
        ', un service d’analytique axé sur la confidentialité, pour comprendre comment l’app est utilisée (par exemple : sessions Focus ou Pause démarrées ou terminées, modifications de l’objectif quotidien, changements de réglages, et si l’onboarding est terminé). Les signaux n’incluent ni texte libre, ni noms, ni e-mails, ni le contenu de votre historique de focus.',
      identifier:
        'TelemetryDeck identifie les installations avec un identifiant haché lié à l’appareil et peut joindre des métadonnées d’appareil non personnelles (comme le modèle, la version du système d’exploitation et la locale). Ces données servent uniquement à l’analytique, ne sont pas liées à votre identité par nous, et ne sont pas utilisées pour le suivi entre les apps ou sites d’autres entreprises.',
      learnMore: 'En savoir plus :',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Mises à jour App Store',
      body: 'Si vous utilisez « Rechercher des mises à jour » dans Réglages, l’app peut contacter Apple pour vérifier si une version plus récente est disponible sur l’App Store.',
    },
    launchAtLogin: {
      title: 'Lancement à la connexion (Mac)',
      body: 'Si vous activez le lancement à la connexion dans Réglages sur Mac, l’app utilise les API système macOS pour s’enregistrer comme élément de connexion. Cette préférence est sous votre contrôle et peut être désactivée à tout moment.',
    },
    notifications: {
      title: 'Notifications et Live Activities (iPhone)',
      body: 'Sur iPhone, les notifications locales optionnelles et les Live Activities vous aident à voir quand une session se termine. L’autorisation n’est demandée que lorsque vous choisissez d’activer ces fonctionnalités. Le contenu des notifications reste sur votre appareil.',
    },
    whatWeDoNotDo: {
      title: 'Ce que nous ne faisons pas',
      items: [
        'Pas de compte ni de connexion',
        'Pas de réseaux publicitaires',
        'Pas de vente d’informations personnelles',
        'Pas d’accès à vos contacts, photos, position précise, caméra ou microphone pour l’analytique',
      ],
    },
    children: {
      title: 'Enfants',
      body: `${PULSE_APP_NAME} ne collecte pas sciemment d’informations personnelles auprès d’enfants. Les signaux d’analytique sont anonymes et n’incluent pas de contenu personnel.`,
    },
    changes: {
      title: 'Modifications',
      body: 'Si cette politique change, la version mise à jour sera publiée à cette URL.',
    },
    contact: {
      title: 'Contact',
      body: 'Questions concernant cette politique :',
    },
  },
}
