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
    metaTitle: `${PULSE_APP_NAME} — Minuteur de focus pour iPhone et Mac`,
    metaDescription: `${PULSE_APP_NAME} est un minuteur Pomodoro discret pour iPhone et Mac avec Focus History, Daily Focus Goals, connexion Apple et Google, et synchronisation offline-first entre vos appareils.`,
    heroImageAlt: `Minuteur de focus et aperçu de l’historique hebdomadaire de ${PULSE_APP_NAME}`,
    backToProjects: 'Retour aux projets',
    availableOnAppStore: 'Disponible sur l’App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Minuteur de focus pour iPhone et Mac',
    tagline: 'Un minuteur Pomodoro doux pour vous aider à vous concentrer — sur iPhone et dans la barre de menus du Mac.',
    description: `Lancez une session Focus, faites une pause et gardez votre historique avec vous. Connectez-vous avec Apple ou Google pour que Daily Focus Goals, Focus History et les préférences synchronisées restent liés à votre compte sur iPhone et Mac — pendant que le minuteur fonctionne toujours hors ligne.`,
    downloadCta: 'Télécharger sur l’App Store',
    watchDemo: 'Voir en action',
    supportCta: 'Assistance',
    stats: {
      platformLabel: 'Plateformes',
      platformValue: 'iPhone et Mac',
      languagesLabel: 'Langues',
      languagesValue: '12 langues',
      dataLabel: 'Sync',
      dataValue: 'Offline-first',
      builtWithLabel: 'Construit avec',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Une façon plus calme de se concentrer',
      title: 'Votre minuteur est là quand vous en avez besoin — et disparaît quand vous n’en avez plus.',
      description: `Sur Mac, ouvrez ${PULSE_APP_NAME} depuis la barre de menus, choisissez une session et fermez le popover. Sur iPhone, démarrez Focus depuis l’accueil et continuez avec Live Activities sur les appareils pris en charge. Le minuteur continue pendant que vous travaillez.`,
      caption:
        'Minuteurs Focus et pause, Daily Focus Goals, Focus History, suivi des séries, localisation en 12 langues et alertes de fin optionnelles.',
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
          'Le compte à rebours avance discrètement pendant que vous travaillez. Pausez, réinitialisez ou sautez — vous gardez le contrôle sur iPhone et Mac.',
        imageFile: 'focus-running.png',
        alt: `Session Focus de ${PULSE_APP_NAME} avec commandes de pause et compte à rebours`,
      },
      {
        title: 'Barre de menus',
        badge: 'Mac',
        description:
          'Sur Mac, affichez ou masquez le temps restant dans la barre de menus. L’élément d’état à largeur fixe reste en place sans déplacer le popover, jusqu’à 120:00.',
        imageFile: 'menubar.png',
        alt: `Compte à rebours de ${PULSE_APP_NAME} affiché dans la barre de menus macOS`,
      },
      {
        title: 'Personnalisation',
        badge: 'Vos règles',
        description:
          'Durées flexibles, Daily Focus Goals, sons et animations de fin, 12 langues d’interface et préférences d’apparence.',
        imageFile: 'settings.png',
        alt: `Réglages de ${PULSE_APP_NAME} pour les durées, alertes de fin, langue et objectifs`,
      },
    ],
    history: {
      eyebrow: 'Des progrès sans pression',
      title: 'Voyez le travail s’accumuler.',
      description:
        'Ouvrez Focus History pour consulter totaux et séries. Lorsque vous êtes connecté, l’historique peut se synchroniser entre votre iPhone et votre Mac pour que vos progrès vous suivent.',
      items: ['Temps de focus total', 'Nombre de sessions terminées', 'Série en cours', 'Meilleure série', 'Daily Focus Goals'],
      imageAlt: `Historique de focus hebdomadaire de ${PULSE_APP_NAME} avec sessions, heures de focus et série`,
    },
    feedback: {
      eyebrow: 'Un retour doux, à votre façon',
      title: 'Faites de la fin une récompense.',
      description: `Choisissez parmi six sons de fin apaisants et six célébrations animales, ou désactivez l’un ou l’autre. ${PULSE_APP_NAME} affiche le bon message à la fin d’une session Focus, Pause courte ou Pause longue.`,
      items: [
        'Titre et sous-titre de fin adaptés à la session',
        'Interface en 12 langues avec la langue système par défaut',
        'Préférences de langue et d’apparence sur chaque appareil',
        'Rappels de motivation optionnels sur iPhone',
      ],
      settingsImageAlt: `Réglages de ${PULSE_APP_NAME} pour les durées, la langue, les sons de fin et les objectifs`,
      celebrationImageAlt: `Animation de célébration du lapin de ${PULSE_APP_NAME} à la fin d’une session`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Singe', 'Koala', 'Chat', 'Renard', 'Panda', 'Lapin'],
    },
    native: {
      eyebrow: 'Natif par conception',
      title: 'Conçu pour se sentir chez soi sur les appareils Apple.',
      description: `SwiftUI, AppKit et les conventions système gardent ${PULSE_APP_NAME} rapide et familier — avec des libellés VoiceOver et la prise en charge de Reduce Motion partout.`,
      features: [
        {
          title: 'Barre de menus Mac et accueil iPhone',
          description: 'Un compagnon discret dans la barre de menus sur Mac, et une expérience d’accueil concentrée sur iPhone.',
        },
        {
          title: 'Reste précis',
          description:
            'Les sessions restent correctes après veille, réveil et relances ; l’historique est enregistré à l’échéance réelle.',
        },
        {
          title: 'Sync offline-first',
          description:
            'Continuez à vous concentrer sans connexion. De retour en ligne, les changements effectués connecté se synchronisent avec votre compte.',
        },
        {
          title: 'Parle votre langue',
          description:
            'Interface complète en 12 langues avec la langue système par défaut et remplacement manuel dans Réglages.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privé by design',
      title: 'Votre focus reste le vôtre.',
      description: `${PULSE_APP_NAME} utilise un compte pour synchroniser l’historique entre vos appareils. Nous ne stockons que ce dont la sync a besoin, ne vendons jamais vos données et gardons l’analytique séparée de votre Focus History.`,
      items: [
        'Connexion avec Apple ou Google',
        'Focus offline-first sur chaque appareil',
        'Synchronisation cloud pour l’historique et les préférences synchronisées',
        'Aucun réseau publicitaire',
        'Supprimez votre compte à tout moment dans Réglages',
      ],
    },
    closing: {
      title: 'Faites de la place pour un travail concentré.',
      description: `Obtenez ${PULSE_APP_NAME} sur l’App Store pour iPhone et Mac, ou consultez la politique de confidentialité et la page d’assistance si vous avez besoin d’aide.`,
      getSupport: 'Obtenir de l’aide',
      privacy: 'Confidentialité',
    },
  },
  support: {
    metaTitle: `Assistance ${PULSE_APP_NAME}`,
    metaDescription: `Assistance, FAQ et aide compte pour ${PULSE_APP_NAME} sur iPhone et Mac — Pomodoro Pro, achats, Focus Protection, connexion, sync et suppression de compte.`,
    title: `Assistance ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} est un minuteur Pomodoro discret pour iPhone et Mac. Connectez-vous avec Apple ou Google pour synchroniser Focus History entre vos appareils. Sur iPhone, l’option Pomodoro Pro débloque Focus Protection, des tags personnalisés et Tag Insights.`,
    gettingStarted: {
      title: 'Pour commencer',
      items: [
        {
          question: 'Comment démarrer une session Focus ?',
          answer:
            'Sur Mac, cliquez sur l’icône de l’app dans la barre de menus, choisissez Focus, Pause courte ou Pause longue, puis appuyez sur Démarrer. Sur iPhone, ouvrez l’app, choisissez une session sur l’accueil et appuyez sur Démarrer. Vous pouvez quitter l’app pendant que le minuteur tourne.',
        },
        {
          question: 'Comment modifier les durées Focus et Pause ?',
          answer:
            'Ouvrez Réglages et ajustez les durées Focus, Pause courte et Pause longue. Vous pouvez aussi choisir un rythme prédéfini, puis affiner les minutes.',
        },
        {
          question: 'Comment configurer Daily Focus Goals ?',
          answer:
            'Dans Réglages, indiquez combien de sessions Focus vous voulez chaque jour. La progression apparaît sur l’accueil et dans Focus History.',
        },
        {
          question: 'Comment consulter Focus History ?',
          answer:
            'Ouvrez Focus History depuis l’app (sur Mac, depuis le popover ou le menu d’état). Vous verrez totaux, séries et progression hebdomadaire.',
        },
        {
          question: 'Comment changer la langue et l’apparence ?',
          answer:
            'Dans Réglages, choisissez Langue (Système ou une langue prise en charge) et Apparence (Système, Clair ou Sombre). Ces préférences restent sur chaque appareil et ne sont pas synchronisées.',
        },
      ],
    },
    accounts: {
      title: 'Comptes',
      items: [
        {
          question: 'Pourquoi la connexion est-elle requise ?',
          answer:
            'Un compte permet à Focus History, Daily Focus Goals et les préférences synchronisées de rester avec vous sur iPhone et Mac. Les nouvelles installations demandent de se connecter avant d’utiliser le minuteur. Les appareils qui mettent à jour depuis d’anciennes versions peuvent garder l’historique local utilisable jusqu’à la connexion. Les achats Pomodoro Pro restent également liés à votre compte connecté.',
        },
        {
          question: 'Comment me connecter avec Apple ou Google ?',
          answer:
            'Sur l’écran de connexion, choisissez Continuer avec Apple ou Continuer avec Google et terminez le flux du fournisseur. Apple peut proposer Hide My Email.',
        },
        {
          question: 'Comment me déconnecter ?',
          answer:
            'Ouvrez Réglages → Compte → Se déconnecter. Si des changements ne sont pas encore synchronisés, l’app peut vous demander de synchroniser d’abord ou de vous déconnecter quand même. Se déconnecter ne supprime pas votre compte.',
        },
        {
          question: 'Comment me reconnecter ?',
          answer:
            'Utilisez la même méthode Apple ou Google sur l’écran de connexion. Votre historique cloud est restauré pour ce compte sur l’appareil.',
        },
        {
          question: 'Que se passe-t-il si j’utilise un autre compte ?',
          answer:
            'Chaque compte a son propre historique. Se connecter à un autre compte ne fusionne pas des historiques sans lien. Choisissez avec soin avant de confirmer une revendication d’historique sur un appareil qui a déjà des sessions locales.',
        },
        {
          question: 'Puis-je lier Apple et Google au même compte ?',
          answer:
            'Oui. Dans Réglages → Compte, vous pouvez lier l’autre méthode de connexion si elle n’est pas déjà utilisée par un autre compte.',
        },
      ],
    },
    cloudSync: {
      title: 'Synchronisation cloud',
      items: [
        {
          question: 'Qu’est-ce qui se synchronise entre appareils ?',
          answer:
            'L’historique des sessions Focus et pause (y compris le tag choisi), les tags que vous créez, les enregistrements Daily Focus Goal, les données de compte liées aux séries, et les préférences synchronisées comme durées de session, objectif quotidien, son, animations, son de fin et animal de célébration.',
        },
        {
          question: 'Que se passe-t-il sans internet ?',
          answer:
            'Une fois connecté, vous pouvez continuer à utiliser le minuteur hors ligne. Les nouvelles sessions et changements restent sur l’appareil jusqu’à ce qu’une connexion soit disponible.',
        },
        {
          question: 'Que se passe-t-il lorsque je suis de nouveau en ligne ?',
          answer:
            'L’app synchronise les changements en attente avec votre compte. La sync est offline-first et finit par être cohérente — ce n’est pas une collaboration en temps réel instantanée.',
        },
        {
          question: 'Comment utiliser le même compte sur iPhone et Mac ?',
          answer:
            'Installez l’app sur les deux appareils et connectez-vous avec le même compte Apple ou Google. Une fois la restauration terminée, Focus History peut apparaître sur les deux.',
        },
        {
          question: 'Et si l’historique manque ?',
          answer:
            'Vérifiez que vous êtes connecté au même compte, attendez la fin de la restauration/sync, puis rouvrez Focus History. Si vous vous êtes connecté à un autre compte, vous verrez l’historique de ce compte.',
        },
      ],
    },
    migration: {
      title: 'Mise à jour depuis une ancienne version',
      items: [
        {
          question: 'Qu’advient-il de mon historique local existant ?',
          answer:
            'L’historique local existant n’est pas supprimé silencieusement. Après connexion, l’app demande avant d’ajouter cet historique à votre compte.',
        },
        {
          question: 'Comment revendiquer mon historique ?',
          answer:
            'Connectez-vous au compte qui doit posséder l’historique, consultez l’écran Ajouter votre historique, puis choisissez Ajouter à ce compte. Utilisez un autre compte si le compte affiché est incorrect. Les sessions ne peuvent pas être déplacées vers un autre compte plus tard.',
        },
        {
          question: 'Et si les réglages de l’appareil et du compte diffèrent ?',
          answer:
            'L’app peut demander si vous gardez les réglages de cet appareil ou ceux du compte. Langue, apparence, notifications et rappels de motivation restent locaux à l’appareil.',
        },
      ],
    },
    notifications: {
      title: 'Notifications',
      items: [
        {
          question: 'Comment activer les notifications sur iPhone ?',
          answer:
            'Ouvrez Réglages → Notifications et choisissez Activer, ou ouvrez les Réglages système si l’autorisation a été refusée auparavant.',
        },
        {
          question: 'Comment fonctionnent les rappels de motivation ?',
          answer:
            'Sur iPhone, ouvrez Réglages → Rappels de motivation et activez-les une fois les notifications autorisées. Vous pouvez les mettre en pause ou définir des heures silencieuses. Ils sont optionnels et désactivés par défaut.',
        },
        {
          question: 'Et si les notifications sont désactivées ?',
          answer:
            'Les alertes de fin de session et les rappels de motivation nécessitent l’autorisation de notification. Utilisez Réglages → Notifications → Ouvrir Réglages pour les activer dans les Réglages iOS.',
        },
        {
          question: 'Comment fonctionnent Live Activities ?',
          answer:
            'Sur les iPhone pris en charge, une Live Activity optionnelle peut afficher une session active sur l’écran verrouillé et la Dynamic Island. L’autorisation est demandée lorsque vous activez les fonctionnalités associées.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Qu’est-ce que Pomodoro Pro ?',
          answer:
            'Pomodoro Pro est un achat intégré optionnel sur iPhone. Il débloque Focus Protection, des tags personnalisés (vos propres noms et couleurs) et Tag Insights (temps de focus par tag sur la semaine et le mois). Le minuteur, les tags intégrés, Focus History et la sync restent disponibles sans Pro.',
        },
        {
          question: 'Quelles options d’achat sont disponibles ?',
          answer:
            'Pomodoro Pro est proposé en abonnement Mensuel, abonnement Annuel ou achat unique Lifetime. Les abonnements se renouvellent automatiquement sauf annulation au moins 24 heures avant la fin de la période en cours. Lifetime est facturé une seule fois et n’est pas un abonnement.',
        },
        {
          question: 'Où acheter ou voir Pomodoro Pro ?',
          answer:
            'Sur iPhone, ouvrez Réglages → Pomodoro Pro, ou touchez la puce protection sur l’accueil. Vous devez être connecté. Pro reste lié à votre compte sur chaque appareil où vous vous connectez.',
        },
        {
          question: 'Comment restaurer les achats ?',
          answer:
            'Utilisez Restaurer les achats sur le paywall ou dans Réglages → Pomodoro Pro. Les achats effectués avec le même compte Apple passent sur le compte auquel vous êtes connecté. Si rien n’est trouvé, vérifiez que vous utilisez le compte Apple qui a acheté Pro et réessayez en ligne.',
        },
      ],
    },
    purchases: {
      title: 'Abonnements et achats',
      items: [
        {
          question: 'Comment gérer ou annuler un abonnement ?',
          answer:
            'Les abonnements sont facturés par Apple. Sur iPhone, ouvrez Réglages → Pomodoro Pro → Gérer l’abonnement, ou allez dans Réglages → [votre nom] → Abonnements et sélectionnez l’app. Annulez au moins 24 heures avant le renouvellement pour éviter le prochain prélèvement. Supprimer l’app ou votre compte Pomodoro n’annule pas un abonnement.',
        },
        {
          question: 'Comment demander un remboursement ?',
          answer:
            'Les remboursements sont gérés par Apple. Visitez reportaproblem.apple.com, connectez-vous avec le compte Apple utilisé pour l’achat, trouvez la transaction et soumettez une demande de remboursement. Nous ne pouvons pas traiter nous-mêmes les remboursements App Store.',
        },
        {
          question: 'Et si un achat échoue ou Pro ne se débloque pas ?',
          answer:
            'Restez connecté, vérifiez votre connexion réseau et réessayez. Si le paiement est en attente (par exemple Demander à acheter), Pro se débloque après approbation. Si vous avez déjà payé, utilisez Restaurer les achats. Pour un problème de paiement sur un abonnement actif, mettez à jour votre moyen de paiement dans les réglages App Store.',
        },
        {
          question: 'Et si j’achète Lifetime alors qu’un abonnement est actif ?',
          answer:
            'Lifetime débloque Pro de façon permanente, mais un abonnement existant n’est pas annulé automatiquement. Désactivez le renouvellement automatique dans les réglages d’abonnement App Store pour ne pas être facturé à nouveau.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Qu’est-ce que Focus Protection ?',
          answer:
            'Focus Protection est une fonctionnalité Pomodoro Pro sur iPhone. Elle utilise les API Screen Time d’Apple pour bloquer les apps, catégories ou sites web que vous choisissez pendant une session Focus. Les pauses ne sont jamais bloquées. À la fin de la session, les apps bloquées se déverrouillent automatiquement.',
        },
        {
          question: 'Comment la configurer ?',
          answer:
            'Avec Pro actif, touchez la puce Focus Protection sur l’accueil (ou ouvrez-la depuis Réglages). Autorisez l’accès Screen Time lorsque demandé, choisissez quoi bloquer, puis activez Focus Protection. Démarrez une session Focus pour appliquer les boucliers.',
        },
        {
          question: 'Comment la désactiver ou déverrouiller les apps ?',
          answer:
            'Ouvrez la feuille Focus Protection et choisissez Désactiver maintenant, ou désactivez la fonctionnalité. Après la fin d’une session, vous pouvez aussi utiliser Déverrouiller les apps sur l’écran de bouclier. Pour retirer entièrement l’accès Screen Time de l’app, allez dans Réglages iOS → Screen Time → Apps avec accès Screen Time.',
        },
        {
          question: 'Et si Focus Protection ne fonctionne pas ?',
          answer:
            'Vérifiez que Pro est actif, que l’accès Screen Time est autorisé et que vous avez sélectionné des apps ou catégories à bloquer. Focus Protection s’applique uniquement pendant les sessions Focus, pas les pauses. Si l’accès a été révoqué dans les Réglages système, ouvrez l’app et autorisez à nouveau l’accès. Redémarrer l’iPhone peut aider après un changement d’autorisation.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Compte et confidentialité',
      items: [
        {
          question: 'Comment supprimer mon compte ?',
          answer:
            'Connectez-vous, ouvrez Réglages → Compte → Supprimer le compte, puis confirmez. Votre compte et l’historique de focus synchronisé sont définitivement supprimés de notre base active. C’est irréversible. La suppression nécessite une connexion réseau. Supprimer votre compte n’annule pas un abonnement App Store — gérez-le dans les réglages App Store.',
        },
        {
          question: 'Que change la suppression du compte ?',
          answer:
            'Les données cloud synchronisées pour ce compte sont supprimées, l’autorisation Sign in with Apple est révoquée si elle est stockée, l’enregistrement d’achat lié à votre compte est demandé à être supprimé chez notre fournisseur d’achats, et les données du compte sont retirées de l’appareil où vous supprimez. Les copies locales sur d’autres appareils ne peuvent plus se synchroniser ; supprimez l’app ou effacez-les là-bas si besoin. Les sauvegardes du fournisseur peuvent conserver les données supprimées pendant une fenêtre de récupération limitée. Apple conserve ses propres enregistrements de transactions App Store.',
        },
        {
          question: 'Comment exporter mes données ?',
          answer:
            'Réglages → Compte → Exporter mes données enregistre un fichier JSON avec sessions, objectifs quotidiens, réglages synchronisés et profil de compte. Les données locales non revendiquées peuvent aussi être exportées depuis l’écran de connexion.',
        },
        {
          question: 'Où se trouve la politique de confidentialité ?',
          answer:
            'Ouvrez la politique de confidentialité sur le site produit, ou utilisez le lien confidentialité sur les pages produit de ce site.',
        },
      ],
    },
    requirements: {
      title: 'Configuration requise',
      body: 'iPhone : iOS 17 ou version ultérieure. Mac : macOS 14.6 ou version ultérieure. Les achats Pomodoro Pro et Focus Protection sont disponibles sur iPhone.',
    },
    contact: {
      title: 'Contact',
      body: 'Pour de l’aide, des retours ou des signalements de bugs :',
    },
    privacyPolicyLink: 'Politique de confidentialité',
  },
  privacy: {
    metaTitle: `Politique de confidentialité de ${PULSE_APP_NAME}`,
    metaDescription: `Politique de confidentialité de ${PULSE_APP_NAME} : connexion Apple et Google, sync cloud, achats Pomodoro Pro via RevenueCat, Focus Protection, analytique et suppression de compte sur Mac et iPhone.`,
    title: 'Politique de confidentialité',
    subtitle: `${PULSE_APP_NAME} — Minuteur Pomodoro pour Mac et iPhone`,
    lastUpdated: 'Dernière mise à jour : 26 octobre 2026',
    summary: {
      title: 'Résumé',
      body: `Lorsque vous vous connectez avec Apple ou Google, votre compte garde votre historique de focus, vos objectifs quotidiens et vos réglages de minuteur synchronisés entre Mac et iPhone. Nous ne stockons que ce dont l’app a besoin : votre adresse e-mail, un identifiant de compte et les données de focus que vous créez. Nous ne les vendons jamais, ne les utilisons pas pour la publicité et ne les partageons pas avec notre fournisseur d’analytique. Si vous achetez Pomodoro Pro sur iPhone, notre fournisseur d’achats RevenueCat conserve l’historique d’achat lié à votre compte pour que Pro fonctionne sur chaque appareil où vous vous connectez. Les choix d’apps de Focus Protection ne quittent jamais votre iPhone. Vous pouvez exporter vos données ou supprimer votre compte à tout moment depuis Réglages. Séparément, l’app peut envoyer des analyses d’usage anonymes et respectueuses de la vie privée pour améliorer les parcours de focus.`,
    },
    localData: {
      title: 'Données stockées sur votre appareil',
      body: 'Vos réglages de minuteur, préférences de session et historique de focus sont enregistrés localement sur Mac ou iPhone via le stockage système standard, pour que le minuteur continue hors ligne. Chaque compte connecté sur un appareil a son propre stockage local. Votre session de connexion est conservée dans le trousseau système. Langue, apparence, ouverture à la connexion, notifications et rappels de motivation restent sur chaque appareil et ne sont pas synchronisés. Le contenu de l’historique de focus lui-même n’est pas envoyé à notre fournisseur d’analytique.',
      migrationSafety:
        'Lors de votre première connexion sur un appareil qui a déjà un historique de focus, l’app demande avant de déplacer cet historique vers votre compte. Jusqu’à confirmation du déplacement sur nos serveurs, plus 90 jours, l’app conserve l’ancienne copie locale et un fichier de sauvegarde local sur l’appareil comme filet de sécurité, puis les supprime automatiquement.',
    },
    accountAndSync: {
      title: 'Votre compte et données synchronisées',
      intro: 'Si vous vous connectez, nous traitons :',
      items: [
        'Coordonnées : l’adresse e-mail partagée par Sign in with Apple (éventuellement une adresse relais privée via Hide My Email) ou Google. Nous ne demandons pas votre nom.',
        'Identifiants : un ID de compte créé à la connexion, et un ID aléatoire par installation, utilisés uniquement pour la sync et pour identifier quel appareil a effectué un changement.',
        'Données de focus : sessions focus et pause terminées et supprimées (horaires, durées, jour local et fuseau horaire, et le tag choisi), les tags que vous créez (nom et couleur), objectifs quotidiens, votre meilleure série, et réglages synchronisés (durées de session, objectif quotidien, son, animations, son de fin, animal de célébration).',
      ],
      closing:
        'Ces données servent uniquement à la sync, l’historique et les fonctionnalités de compte. Elles sont liées à votre compte, ne sont pas utilisées pour le suivi, et ne sont pas partagées avec des tiers autres que les sous-traitants ci-dessous.',
    },
    processors: {
      title: 'Sous-traitants et lieu de stockage',
      bodyBeforeSupabase: 'Les données de compte et de sync sont stockées chez',
      bodyAfterSupabase:
        ' (base de données et authentification) dans l’Union européenne. La connexion est gérée par',
      orWord: 'ou',
      bodyAfterProviders:
        ', selon l’option choisie. Les achats Pomodoro Pro sont gérés avec',
      bodyAfterRevenueCat:
        ' (voir Achats ci-dessous). Les données sont chiffrées en transit et l’accès est restreint pour que chaque compte ne lise que ses propres données.',
    },
    purchases: {
      title: 'Achats (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro est vendu via l’App Store ; Apple gère le paiement et nous ne voyons jamais vos coordonnées de paiement. Pour débloquer Pro sur chaque appareil où vous vous connectez, l’app partage votre identifiant de compte avec',
      bodyAfterRevenueCat:
        ', qui conserve l’historique d’achat (produits achetés, dates d’achat et de renouvellement, statut d’abonnement) lié à cet identifiant. Ces données servent uniquement à accorder et restaurer l’accès Pro, ne sont pas utilisées pour le suivi et ne sont pas partagées avec notre fournisseur d’analytique. Pro nécessite un compte connecté ; rien n’est envoyé à RevenueCat avant votre connexion.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection utilise le framework Screen Time d’Apple (Family Controls) pour bloquer les apps, catégories et sites web que vous choisissez pendant une session de focus. Apple ne donne à l’app que des jetons opaques pour vos choix : nous ne pouvons pas voir quelles apps ou sites vous avez choisis, comment vous les utilisez, ni d’autres données Screen Time. Vos choix restent sur cet iPhone, ne sont jamais téléversés ni synchronisés, et ne sont pas envoyés à notre fournisseur d’analytique. Vous pouvez désactiver Focus Protection dans l’app à tout moment, ou retirer l’accès de l’app dans Réglages → Screen Time → Apps avec accès Screen Time.',
    },
    retention: {
      title: 'Conservation, sauvegardes et suppression',
      items: [
        'Vos données synchronisées sont conservées tant que votre compte existe.',
        'Supprimer le compte (Réglages → Compte → Supprimer le compte) supprime définitivement votre compte et toutes les données synchronisées de notre base active, révoque l’autorisation Sign in with Apple de l’app si elle est stockée, demande à RevenueCat de supprimer l’enregistrement d’achat lié à votre compte, et retire les données du compte sur l’appareil où vous supprimez. Les copies locales sur vos autres appareils ne peuvent plus se synchroniser et y restent jusqu’à suppression de l’app ou retrait depuis l’écran de connexion lorsque proposé.',
        'Notre fournisseur de base de données conserve des sauvegardes quotidiennes pendant 7 jours. Les données supprimées peuvent rester dans ces sauvegardes jusqu’à expiration ; elles servent uniquement à la reprise après sinistre. Nous pouvons aussi conserver une sauvegarde hebdomadaire chiffrée jusqu’à 90 jours pour le même objectif.',
        'Supprimer votre compte n’annule pas un abonnement App Store ; gérez-le ou annulez-le dans les réglages de votre compte Apple. Apple conserve son propre enregistrement de vos transactions App Store.',
        'Se déconnecter ne supprime rien. Les changements non encore synchronisés restent sur l’appareil jusqu’à reconnexion du même compte.',
        'Les enregistrements d’analytique sont traités par TelemetryDeck selon ses pratiques de conservation et ne servent pas à restaurer votre Focus History.',
      ],
    },
    export: {
      title: 'Export',
      body: 'Réglages → Compte → Exporter mes données enregistre un fichier JSON avec vos sessions, objectifs quotidiens, réglages synchronisés et profil de compte. Les données pas encore déplacées vers un compte peuvent aussi être exportées depuis l’écran de connexion.',
    },
    analytics: {
      title: 'Analytique',
      introBeforeLink: 'Nous utilisons',
      introAfterLink:
        ', un service d’analytique axé sur la confidentialité, pour comprendre comment l’app est utilisée (par exemple : sessions Focus ou Pause démarrées ou terminées, modifications de l’objectif quotidien, changements de réglages, résultats d’autorisation de notification, événements de rappels de motivation, et si l’onboarding est terminé). Les signaux n’incluent ni texte libre, ni noms, ni e-mails, ni le contenu de votre Focus History.',
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
      title: 'Ouverture à la connexion (Mac)',
      body: 'Si vous activez l’ouverture à la connexion dans Réglages sur Mac, l’app utilise les API système macOS pour s’enregistrer comme élément de connexion. Cette préférence est sous votre contrôle et peut être désactivée à tout moment.',
    },
    notifications: {
      title: 'Notifications et Live Activities (iPhone)',
      body: 'Sur iPhone, les notifications locales optionnelles, les rappels de motivation et les Live Activities vous aident à voir quand une session se termine ou à revenir doucement au focus. L’autorisation n’est demandée que lorsque vous choisissez d’activer ces fonctionnalités. Le contenu des notifications reste sur votre appareil.',
    },
    whatWeDoNotDo: {
      title: 'Ce que nous ne faisons pas',
      items: [
        'Aucun réseau publicitaire',
        'Aucune vente d’informations personnelles',
        'Aucun accès à vos contacts, photos, position précise, caméra ou microphone pour l’analytique',
      ],
    },
    children: {
      title: 'Enfants',
      body: `${PULSE_APP_NAME} ne collecte pas sciemment d’informations personnelles auprès d’enfants au-delà de ce qu’un compte nécessite pour la sync, comme décrit ci-dessus. Les signaux d’analytique sont anonymes et n’incluent pas de contenu personnel.`,
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
