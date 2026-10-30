import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const caMessages: PulseMessages = {
  languageLabel: 'Idioma de la pàgina',
  video: {
    ariaLabel: `Presentació del producte ${PULSE_APP_NAME}`,
    playLabel: 'Reproduir presentació',
    unsupported: 'El teu navegador no admet vídeo incrustat.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Temporitzador de concentració per a iPhone i Mac`,
    metaDescription: `${PULSE_APP_NAME} és un temporitzador Pomodoro tranquil per a iPhone i Mac amb historial de concentració, objectius diaris, inici de sessió amb Apple i Google, i sincronització offline-first entre els teus dispositius.`,
    heroImageAlt: `Temporitzador de concentració i historial setmanal de ${PULSE_APP_NAME}`,
    backToProjects: 'Torna als projectes',
    availableOnAppStore: 'Disponible a l’App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Temporitzador de concentració per a iPhone i Mac',
    tagline: 'Un temporitzador Pomodoro suau que t’ajuda a concentrar-te — a l’iPhone i a la barra de menús del Mac.',
    description: `Inicia una sessió de concentració, fes una pausa i porta l’historial amb tu. Inicia sessió amb Apple o Google perquè els objectius diaris, l’historial de concentració i les preferències sincronitzades segueixin vinculats al teu compte a l’iPhone i al Mac — mentre el temporitzador continua funcionant sense connexió.`,
    downloadCta: 'Baixa-ho a l’App Store',
    watchDemo: 'Mira-ho en acció',
    supportCta: 'Suport',
    stats: {
      platformLabel: 'Plataformes',
      platformValue: 'iPhone i Mac',
      languagesLabel: 'Idiomes',
      languagesValue: '48 idiomes',
      dataLabel: 'Sincronització',
      dataValue: 'Offline-first',
      builtWithLabel: 'Creat amb',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Una manera més silenciosa de concentrar-te',
      title: 'El temporitzador hi és quan el necessites — i desapareix quan no.',
      description: `Al Mac, obre ${PULSE_APP_NAME} des de la barra de menús, tria una sessió i tanca el popover. A l’iPhone, inicia la concentració des de l’Inici i continua amb Live Activities en dispositius compatibles. El temporitzador segueix mentre tu treballes.`,
      caption:
        'Temporitzadors de concentració i pausa, objectius diaris, historial de concentració, seguiment de ratxes, localització en 48 idiomes i alertes de finalització opcionals.',
    },
    rhythm: {
      eyebrow: 'Un ritme que controles tu',
      title: 'Concentració, pausa, recuperació, repetició.',
      description: `${PULSE_APP_NAME} suggereix el següent pas, però mai inicia una sessió per tu. Cada durada es pot ajustar al teu dia.`,
    },
    featureShowcases: [
      {
        title: 'Concentració',
        badge: '1–120 min',
        description:
          'El compte enrere avança en silenci mentre treballes. Pausa, reinicia o salta — mantens el control a l’iPhone i al Mac.',
        imageFile: 'focus-running.png',
        alt: `Sessió de concentració de ${PULSE_APP_NAME} amb controls de pausa i compte enrere`,
      },
      {
        title: 'Barra de menús',
        badge: 'Mac',
        description:
          'Al Mac, mostra o amaga el temps restant a la barra de menús. L’element d’estat d’amplada fixa es manté al seu lloc sense desplaçar el popover, fins a 120:00.',
        imageFile: 'menubar.png',
        alt: `Compte enrere de ${PULSE_APP_NAME} a la barra de menús de macOS`,
      },
      {
        title: 'Personalització',
        badge: 'Les teves regles',
        description:
          'Durades flexibles, objectius diaris, sons i animacions de finalització, 48 idiomes d’interfície i preferències d’aparença.',
        imageFile: 'settings.png',
        alt: `Configuració de ${PULSE_APP_NAME} per a durades, alertes de finalització, idioma i objectius`,
      },
    ],
    history: {
      eyebrow: 'Progrés sense pressió',
      title: 'Mira com s’acumula la feina.',
      description:
        'Obre l’historial de concentració per revisar totals i ratxes. Si has iniciat sessió, l’historial es pot sincronitzar entre l’iPhone i el Mac perquè el progrés et segueixi.',
      items: ['Temps total de concentració', 'Sessions completades', 'Ratxa actual', 'Millor ratxa', 'Objectius diaris'],
      imageAlt: `Historial setmanal de concentració de ${PULSE_APP_NAME} amb sessions, hores de concentració i ratxa`,
    },
    feedback: {
      eyebrow: 'Feedback suau, a la teva manera',
      title: 'Fes que acabar se senti gratificant.',
      description: `Tria entre sis sons de finalització tranquils i sis celebracions amb animals, o desactiva qualsevol d’ells. ${PULSE_APP_NAME} mostra el missatge adequat quan acaba una sessió de concentració, pausa curta o pausa llarga.`,
      items: [
        'Títol i subtítol de finalització segons la sessió',
        'Interfície en 48 idiomes amb l’idioma del sistema per defecte',
        'Preferències d’idioma i aparença a cada dispositiu',
        'Recordatoris de motivació opcionals a l’iPhone',
      ],
      settingsImageAlt: `Configuració de ${PULSE_APP_NAME} per a durades, idioma, sons de finalització i objectius`,
      celebrationImageAlt: `Animació de celebració del conill de ${PULSE_APP_NAME} en completar una sessió`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Mico', 'Coala', 'Gat', 'Guineu', 'Panda', 'Conill'],
    },
    native: {
      eyebrow: 'Nativa per disseny',
      title: 'Feta per sentir-se com a casa als dispositius Apple.',
      description: `SwiftUI, AppKit i les convencions del sistema mantenen ${PULSE_APP_NAME} ràpid i familiar — amb etiquetes VoiceOver i compatibilitat amb Redueix el moviment a tota l’app.`,
      features: [
        {
          title: 'Barra de menús al Mac i Inici a l’iPhone',
          description: 'Un company discret a la barra de menús al Mac i una experiència d’Inici concentrada a l’iPhone.',
        },
        {
          title: 'Es manté precís',
          description:
            'Les sessions continuen sent correctes després del repòs, l’activació i els reinicis; l’historial es registra en el termini real.',
        },
        {
          title: 'Sincronització offline-first',
          description:
            'Segueix concentrant-te sense connexió. Quan tornis a estar en línia, els canvis amb sessió iniciada es sincronitzen amb el teu compte.',
        },
        {
          title: 'Parla el teu idioma',
          description:
            'Interfície completa en 48 idiomes amb l’idioma del sistema per defecte i canvi manual a Configuració.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privada per disseny',
      title: 'La teva concentració continua sent teva.',
      description: `${PULSE_APP_NAME} utilitza un compte perquè l’historial es pugui sincronitzar entre els teus dispositius. Només guardem el que la sincronització necessita, mai venem les teves dades i mantenim l’anàlisi separada del teu historial de concentració.`,
      items: [
        'Inici de sessió amb Apple o Google',
        'Concentració offline-first a cada dispositiu',
        'Sincronització al núvol per a historial i preferències sincronitzades',
        'Sense xarxes publicitàries',
        'Elimina el teu compte quan vulguis a Configuració',
      ],
    },
    closing: {
      title: 'Fes espai per a la feina concentrada.',
      description: `Aconsegueix ${PULSE_APP_NAME} a l’App Store per a iPhone i Mac, o consulta la política de privadesa i la pàgina de suport si necessites ajuda.`,
      getSupport: 'Obtenir suport',
      privacy: 'Privadesa',
    },
  },
  support: {
    metaTitle: `Suport de ${PULSE_APP_NAME}`,
    metaDescription: `Suport, preguntes freqüents i ajuda amb el compte de ${PULSE_APP_NAME} a l’iPhone i al Mac — Pomodoro Pro, compres, Protecció de la concentració, inici de sessió, sincronització i eliminació del compte.`,
    title: `Suport de ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} és un temporitzador Pomodoro tranquil per a iPhone i Mac. Inicia sessió amb Apple o Google per sincronitzar l’historial de concentració entre els teus dispositius. A l’iPhone, Pomodoro Pro opcional desbloqueja la Protecció de la concentració, etiquetes personalitzades i anàlisi d’etiquetes.`,
    gettingStarted: {
      title: 'Primers passos',
      items: [
        {
          question: 'Com inicio una sessió de concentració?',
          answer:
            'Al Mac, fes clic a la icona de l’app a la barra de menús, tria Concentració, Pausa curta o Pausa llarga i prem Inicia. A l’iPhone, obre l’app, tria una sessió a l’Inici i prem Inicia. Pots sortir de l’app mentre el temporitzador està en marxa.',
        },
        {
          question: 'Com canvio les durades de concentració i pausa?',
          answer:
            'Obre Configuració i modifica les durades de Concentració, Pausa curta i Pausa llarga. També pots triar un ritme predefinit i ajustar els minuts.',
        },
        {
          question: 'Com configuro els objectius diaris?',
          answer:
            'A Configuració, indica quantes sessions de concentració vols cada dia. El progrés apareix a l’Inici i a l’historial de concentració.',
        },
        {
          question: 'Com veig l’historial de concentració?',
          answer:
            'Obre l’historial de concentració des de l’app (al Mac, des del popover o el menú d’estat). Veuràs totals, ratxes i progrés setmanal.',
        },
        {
          question: 'Com canvio l’idioma i l’aparença?',
          answer:
            'A Configuració, tria Idioma (Sistema o un idioma compatible) i Aparença (Sistema, Clar o Fosc). Aquestes preferències romanen a cada dispositiu i no es sincronitzen.',
        },
      ],
    },
    accounts: {
      title: 'Comptes',
      items: [
        {
          question: 'Per què cal iniciar sessió?',
          answer:
            'Un compte permet que l’historial de concentració, els objectius diaris i les preferències sincronitzades et segueixin a l’iPhone i al Mac. Les instal·lacions noves demanen iniciar sessió abans d’utilitzar el temporitzador. Els dispositius que actualitzen des de versions antigues poden seguir utilitzant l’historial local fins que iniciïs sessió. Les compres de Pomodoro Pro també romanen al teu compte amb sessió iniciada.',
        },
        {
          question: 'Com inicio sessió amb Apple o Google?',
          answer:
            'A la pantalla d’inici de sessió, tria Continua amb Apple o Continua amb Google i completa el flux del proveïdor. Apple pot oferir Hide My Email.',
        },
        {
          question: 'Com tanco sessió?',
          answer:
            'Obre Configuració → Compte → Tanca sessió. Si hi ha canvis que encara no s’han sincronitzat, l’app et pot demanar que sincronitzis primer o que tanquis sessió igualment. Tancar sessió no elimina el teu compte.',
        },
        {
          question: 'Com torno a iniciar sessió?',
          answer:
            'Utilitza el mateix mètode d’Apple o Google a la pantalla d’inici de sessió. El teu historial al núvol es restaura per a aquest compte al dispositiu.',
        },
        {
          question: 'Què passa si utilitzo un altre compte?',
          answer:
            'Cada compte té el seu propi historial. Iniciar sessió amb un altre compte no fusiona historials diferents. Tria amb cura abans de confirmar una reclamació d’historial en un dispositiu que ja té sessions locals.',
        },
        {
          question: 'Puc vincular Apple i Google al mateix compte?',
          answer:
            'Sí. A Configuració → Compte pots vincular l’altre mètode d’inici de sessió si no l’utilitza ja un altre compte.',
        },
      ],
    },
    cloudSync: {
      title: 'Sincronització al núvol',
      items: [
        {
          question: 'Què es sincronitza entre dispositius?',
          answer:
            'Historial de sessions de concentració i pausa (inclosa l’etiqueta que has triat), les etiquetes que crees, registres d’objectiu diari, dades del compte relacionades amb ratxes i preferències sincronitzades com durades de sessió, objectiu diari, so, animacions, so de finalització i animal de celebració.',
        },
        {
          question: 'Què passa sense internet?',
          answer:
            'Després d’iniciar sessió, pots seguir utilitzant el temporitzador sense connexió. Les sessions i canvis nous romanen al dispositiu fins que hi hagi connexió.',
        },
        {
          question: 'Què passa quan torno a estar en línia?',
          answer:
            'L’app sincronitza els canvis pendents amb el teu compte. La sincronització és offline-first i acaba sent coherent — no és col·laboració en temps real instantània.',
        },
        {
          question: 'Com utilitzo el mateix compte a l’iPhone i al Mac?',
          answer:
            'Instal·la l’app als dos dispositius i inicia sessió amb el mateix compte d’Apple o Google. Quan acabi la restauració, l’historial de concentració pot aparèixer als dos.',
        },
        {
          question: 'I si falta historial?',
          answer:
            'Confirma que has iniciat sessió amb el mateix compte, espera que acabi la restauració o sincronització i revisa l’historial de concentració de nou. Si has iniciat sessió amb un altre compte, veuràs l’historial d’aquell compte.',
        },
      ],
    },
    migration: {
      title: 'Actualitzar des d’una versió anterior',
      items: [
        {
          question: 'Què passa amb el meu historial local existent?',
          answer:
            'L’historial local existent no s’elimina en silenci. Després d’iniciar sessió, l’app pregunta abans d’afegir aquell historial al teu compte.',
        },
        {
          question: 'Com reclamo el meu historial?',
          answer:
            'Inicia sessió al compte que ha de ser propietari de l’historial, revisa la pantalla Afegeix el teu historial i tria Afegeix a aquest compte. Utilitza un altre compte si el mostrat és incorrecte. Les sessions no es poden moure a un altre compte més endavant.',
        },
        {
          question: 'Què passa si la configuració del dispositiu i del compte difereixen?',
          answer:
            'L’app pot preguntar si conserves la configuració d’aquest dispositiu o la del compte. Idioma, aparença, notificacions i recordatoris de motivació romanen locals al dispositiu.',
        },
      ],
    },
    notifications: {
      title: 'Notificacions',
      items: [
        {
          question: 'Com activo les notificacions a l’iPhone?',
          answer:
            'Obre Configuració → Notificacions i tria Activa, o obre Configuració del sistema si el permís es va denegar abans.',
        },
        {
          question: 'Com funcionen els recordatoris de motivació?',
          answer:
            'A l’iPhone, obre Configuració → Recordatoris de motivació i activa’ls després de permetre notificacions. Pots pausar-los o definir hores silencioses. Són opcionals i venen desactivats per defecte.',
        },
        {
          question: 'Què passa si les notificacions estan desactivades?',
          answer:
            'Les alertes de fi de sessió i els recordatoris de motivació necessiten permís de notificacions. Utilitza Configuració → Notificacions → Obre Configuració per activar-les a Configuració d’iOS.',
        },
        {
          question: 'Com funcionen Live Activities?',
          answer:
            'En iPhones compatibles, una Live Activity opcional pot mostrar una sessió activa a la pantalla de bloqueig i la Dynamic Island. Es demana permís quan actives les funcions relacionades.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Què és Pomodoro Pro?',
          answer:
            'Pomodoro Pro és una compra dins l’app opcional a l’iPhone. Desbloqueja la Protecció de la concentració, etiquetes personalitzades (els teus propis noms i colors) i anàlisi d’etiquetes (temps de concentració per etiqueta en setmana i mes). El temporitzador, les etiquetes integrades, l’historial de concentració i la sincronització segueixen disponibles sense Pro.',
        },
        {
          question: 'Quines opcions de compra hi ha?',
          answer:
            'Pomodoro Pro s’ofereix com a subscripció Mensual, subscripció Anual o compra única Lifetime. Les subscripcions es renoven automàticament llevat que cancel·lis almenys 24 hores abans del final del període actual. Lifetime es cobra una vegada i no és una subscripció.',
        },
        {
          question: 'On compro o veig Pomodoro Pro?',
          answer:
            'A l’iPhone, obre Configuració → Pomodoro Pro o toca la xip de protecció a l’Inici. Has d’haver iniciat sessió. Pro roman al teu compte a cada dispositiu on iniciïs sessió.',
        },
        {
          question: 'Com restauro les compres?',
          answer:
            'Utilitza Restaura compres al paywall o a Configuració → Pomodoro Pro. Les compres fetes amb el mateix compte d’Apple passen al compte en què tens sessió iniciada. Si no es troba res, confirma que utilitzes el compte d’Apple que va comprar Pro i torna-ho a provar en línia.',
        },
      ],
    },
    purchases: {
      title: 'Subscripcions i compres',
      items: [
        {
          question: 'Com gestiono o cancel·lo una subscripció?',
          answer:
            'Les subscripcions les factura Apple. A l’iPhone, obre Configuració → Pomodoro Pro → Gestiona subscripció, o ves a Configuració → [el teu nom] → Subscripcions i selecciona l’app. Cancel·la almenys 24 hores abans de la renovació per evitar el següent càrrec. Eliminar l’app o el teu compte de Pomodoro no cancel·la una subscripció.',
        },
        {
          question: 'Com sol·licito un reemborsament?',
          answer:
            'Els reemborsaments els gestiona Apple. Visita reportaproblem.apple.com, inicia sessió amb el compte d’Apple utilitzat per a la compra, troba la transacció i envia una sol·licitud de reemborsament. No podem processar reemborsaments de l’App Store nosaltres mateixos.',
        },
        {
          question: 'Què passa si una compra falla o Pro no es desbloqueja?',
          answer:
            'Mantén la sessió iniciada, comprova la connexió de xarxa i torna-ho a provar. Si el pagament està pendent (per exemple Demana per comprar), Pro es desbloqueja després de l’aprovació. Si ja has pagat, utilitza Restaura compres. Si hi ha problemes de pagament en una subscripció activa, actualitza el teu mètode de pagament a la configuració de l’App Store.',
        },
        {
          question: 'Què passa si compro Lifetime amb una subscripció activa?',
          answer:
            'Lifetime desbloqueja Pro de manera permanent, però una subscripció existent no es cancel·la automàticament. Desactiva la renovació automàtica a la configuració de subscripció de l’App Store per no tornar a cobrar-se.',
        },
      ],
    },
    focusProtection: {
      title: 'Protecció de la concentració',
      items: [
        {
          question: 'Què és la Protecció de la concentració?',
          answer:
            'La Protecció de la concentració és una funció de Pomodoro Pro a l’iPhone. Utilitza les API de Screen Time d’Apple per bloquejar les apps, categories o llocs web que triïs mentre corre una sessió de concentració. Les pauses mai es bloquegen. En acabar la sessió, les apps bloquejades es desbloquegen soles.',
        },
        {
          question: 'Com la configuro?',
          answer:
            'Amb Pro actiu, toca la xip Protecció de la concentració a l’Inici (o obre-la des de Configuració). Permet l’accés a Screen Time quan es demani, tria què bloquejar i activa la Protecció de la concentració. Inicia una sessió de concentració per aplicar els escuts.',
        },
        {
          question: 'Com la desactivo o desbloquejo apps?',
          answer:
            'Obre el full Protecció de la concentració i tria Desactiva ara, o desactiva la funció. Després d’acabar una sessió també pots utilitzar Desbloqueja apps a la pantalla d’escut. Per eliminar completament l’accés Screen Time de l’app, ves a Configuració d’iOS → Screen Time → Apps amb accés a Screen Time.',
        },
        {
          question: 'Què passa si la Protecció de la concentració no funciona?',
          answer:
            'Confirma que Pro està actiu, que l’accés a Screen Time està permès i que has seleccionat apps o categories per bloquejar. La Protecció de la concentració només s’aplica durant sessions de concentració, no en pauses. Si has revocat l’accés a Configuració del sistema, obre l’app i torna a permetre’l. Reiniciar l’iPhone pot ajudar després d’un canvi de permís.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Compte i privadesa',
      items: [
        {
          question: 'Com elimino el meu compte?',
          answer:
            'Inicia sessió, obre Configuració → Compte → Elimina compte i confirma. El teu compte i l’historial de concentració sincronitzat s’eliminen permanentment de la nostra base de dades activa. No es pot desfer. L’eliminació requereix connexió de xarxa. Eliminar el teu compte no cancel·la una subscripció de l’App Store; gestiona-la a la configuració de l’App Store.',
        },
        {
          question: 'Què afecta l’eliminació del compte?',
          answer:
            'S’eliminen les dades al núvol sincronitzades d’aquell compte, es revoca l’autorització de Sign in with Apple quan estigui emmagatzemada, es sol·licita eliminar el registre de compra vinculat al teu compte al nostre proveïdor de compres, i es retiren les dades del compte del dispositiu on elimines. Les còpies locals en altres dispositius ja no es poden sincronitzar; elimina l’app o esborra-les allà si cal. Les còpies de seguretat del proveïdor poden conservar dades eliminades durant un període limitat de recuperació. Apple conserva els seus propis registres de transaccions de l’App Store.',
        },
        {
          question: 'Com exporto les meves dades?',
          answer:
            'Configuració → Compte → Exporta les meves dades desa un fitxer JSON amb sessions, objectius diaris, configuració sincronitzada i perfil de compte. Les dades locals no reclamades també es poden exportar des de la pantalla d’inici de sessió.',
        },
        {
          question: 'On és la política de privadesa?',
          answer:
            'Obre la política de privadesa al lloc web del producte o utilitza l’enllaç de privadesa a les pàgines de producte d’aquest lloc.',
        },
      ],
    },
    requirements: {
      title: 'Requisits',
      body: 'iPhone: iOS 17 o posterior. Mac: macOS 14.6 o posterior. Les compres de Pomodoro Pro i la Protecció de la concentració estan disponibles a l’iPhone.',
    },
    contact: {
      title: 'Contacte',
      body: 'Per a ajuda, comentaris o informes d’errors:',
    },
    privacyPolicyLink: 'Política de privadesa',
  },
  privacy: {
    metaTitle: `Política de privadesa de ${PULSE_APP_NAME}`,
    metaDescription: `Política de privadesa de ${PULSE_APP_NAME}: inici de sessió amb Apple i Google, sincronització al núvol, compres Pomodoro Pro via RevenueCat, Protecció de la concentració, anàlisi i eliminació del compte a Mac i iPhone.`,
    title: 'Política de privadesa',
    subtitle: `${PULSE_APP_NAME} — Temporitzador Pomodoro per a Mac i iPhone`,
    lastUpdated: 'Darrera actualització: 26 d’octubre de 2026',
    summary: {
      title: 'Resum',
      body: `Quan inicies sessió amb Apple o Google, el teu compte manté sincronitzats entre Mac i iPhone el teu historial de concentració, objectius diaris i configuració del temporitzador. Només emmagatzemem el que l’app necessita per a això: la teva adreça de correu electrònic, un identificador de compte i les dades de concentració que crees. Mai les venem, no les utilitzem per a publicitat ni les compartim amb el nostre proveïdor d’anàlisi. Si compres Pomodoro Pro a l’iPhone, el nostre proveïdor de compres RevenueCat conserva el teu historial de compres vinculat al teu compte perquè Pro funcioni a cada dispositiu on iniciïs sessió. Les eleccions d’apps de la Protecció de la concentració mai surten del teu iPhone. Pots exportar les teves dades o eliminar el teu compte en qualsevol moment des de Configuració. Per separat, l’app pot enviar anàlisi d’ús anònima i respectuosa amb la privadesa per millorar els fluxos de concentració.`,
    },
    localData: {
      title: 'Dades emmagatzemades al teu dispositiu',
      body: 'La teva configuració del temporitzador, preferències de sessió i historial de concentració es guarden localment al teu Mac o iPhone amb l’emmagatzematge estàndard del sistema, perquè el temporitzador segueixi funcionant sense connexió. Cada compte amb sessió iniciada en un dispositiu té el seu propi emmagatzematge local. La teva sessió d’inici es guarda al clauer del sistema. Idioma, aparença, obertura en iniciar sessió, notificacions i recordatoris de motivació romanen a cada dispositiu i no es sincronitzen. El contingut de l’historial de concentració no es puja al nostre proveïdor d’anàlisi.',
      migrationSafety:
        'Quan inicies sessió per primera vegada en un dispositiu que ja té historial de concentració, l’app pregunta abans de moure aquell historial al teu compte. Fins que el trasllat es confirmi als nostres servidors, més 90 dies, l’app conserva la còpia local anterior i un fitxer de còpia de seguretat local al dispositiu com a xarxa de seguretat, i després els elimina automàticament.',
    },
    accountAndSync: {
      title: 'El teu compte i dades sincronitzades',
      intro: 'Si inicies sessió, tractem:',
      items: [
        'Informació de contacte: l’adreça de correu compartida per Sign in with Apple (pot ser una adreça de retransmissió privada mitjançant Hide My Email) o Google. No sol·licitem el teu nom.',
        'Identificadors: un ID de compte creat en iniciar sessió i un ID aleatori per instal·lació, utilitzats només per sincronitzar i identificar quin dispositiu ha fet un canvi.',
        'Dades de concentració: sessions de concentració i pausa completades i eliminades (hores, durades, dia local i zona horària, i l’etiqueta que has triat), les etiquetes que crees (nom i color), objectius diaris, la teva millor ratxa i configuració sincronitzada (durades de sessió, objectiu diari, so, animacions, so de finalització, animal de celebració).',
      ],
      closing:
        'Aquestes dades s’utilitzen només per a sincronització, historial i funcions de compte. Estan vinculades al teu compte, no s’utilitzen per a seguiment i no es comparteixen amb tercers llevat dels encarregats del tractament indicats a continuació.',
    },
    processors: {
      title: 'Encarregats del tractament i ubicació',
      bodyBeforeSupabase: 'Les dades de compte i sincronització s’emmagatzemen amb',
      bodyAfterSupabase:
        ' (base de dades i autenticació) a la Unió Europea. L’inici de sessió el gestiona',
      orWord: 'o',
      bodyAfterProviders:
        ', segons l’opció que triïs. Les compres de Pomodoro Pro es gestionen amb',
      bodyAfterRevenueCat:
        ' (consulta Compres a continuació). Les dades es xifren en trànsit i l’accés està restringit perquè cada compte només pugui llegir les seves pròpies dades.',
    },
    purchases: {
      title: 'Compres (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro es ven a través de l’App Store; Apple gestiona el pagament i nosaltres mai veiem les teves dades de pagament. Per desbloquejar Pro a cada dispositiu on iniciïs sessió, l’app comparteix el teu ID de compte amb',
      bodyAfterRevenueCat:
        ', que conserva el teu historial de compres (productes comprats, dates de compra i renovació, i estat de subscripció) vinculat a aquell ID. Aquestes dades s’utilitzen només per concedir i restaurar l’accés Pro, no s’utilitzen per a seguiment i no es comparteixen amb el nostre proveïdor d’anàlisi. Pro requereix un compte amb sessió iniciada; no s’envia res a RevenueCat abans que iniciïs sessió.',
    },
    focusProtection: {
      title: 'Protecció de la concentració (iPhone)',
      body: 'La Protecció de la concentració utilitza el framework Screen Time d’Apple (Family Controls) per bloquejar les apps, categories i llocs web que triïs mentre corre una sessió de concentració. Apple només dóna a l’app tokens opacs de les teves eleccions: no podem veure quines apps o llocs has triat, com les utilitzes ni altres dades de Screen Time. Les teves eleccions romanen en aquell iPhone, mai es pengen ni es sincronitzen, i no s’envien al nostre proveïdor d’anàlisi. Pots desactivar la Protecció de la concentració a l’app en qualsevol moment, o eliminar l’accés de l’app a Configuració → Screen Time → Apps amb accés a Screen Time.',
    },
    retention: {
      title: 'Conservació, còpies de seguretat i eliminació',
      items: [
        'Les teves dades sincronitzades es conserven mentre existeixi el teu compte.',
        'Eliminar compte (Configuració → Compte → Elimina compte) elimina permanentment el teu compte i totes les dades sincronitzades de la nostra base de dades activa, revoca l’autorització de Sign in with Apple de l’app quan estigui emmagatzemada, demana a RevenueCat que elimini el registre de compra vinculat al teu compte i retira les dades del compte del dispositiu on elimines. Les còpies locals en altres dispositius ja no es poden sincronitzar i romanen allà fins que eliminis l’app en aquells dispositius o les retiris des de la pantalla d’inici de sessió quan s’ofereixi.',
        'El nostre proveïdor de base de dades conserva còpies de seguretat diàries durant 7 dies. Les dades eliminades poden romandre en aquelles còpies fins que caduquin; només s’utilitzen per a recuperació davant desastres. També podem conservar una còpia setmanal xifrada fins a 90 dies amb el mateix fi.',
        'Eliminar el teu compte no cancel·la una subscripció de l’App Store; gestiona-la o cancel·la-la a la configuració del teu compte d’Apple. Apple conserva el seu propi registre de les teves transaccions de l’App Store.',
        'Tancar sessió no elimina res. Els canvis que encara no s’han sincronitzat romanen al dispositiu fins que el mateix compte torni a iniciar sessió.',
        'Els registres d’anàlisi els gestiona TelemetryDeck segons les seves pràctiques de conservació i no s’utilitzen per restaurar el teu historial de concentració.',
      ],
    },
    export: {
      title: 'Exportació',
      body: 'Configuració → Compte → Exporta les meves dades desa un fitxer JSON amb les teves sessions, objectius diaris, configuració sincronitzada i perfil de compte. Les dades que encara no s’han mogut a un compte també es poden exportar des de la pantalla d’inici de sessió.',
    },
    analytics: {
      title: 'Anàlisi',
      introBeforeLink: 'Utilitzem',
      introAfterLink:
        ', un servei d’anàlisi centrat en la privadesa, per entendre com s’utilitza l’app (per exemple: sessions de concentració o pausa iniciades o completades, canvis en l’objectiu diari, canvis de configuració, resultats del permís de notificacions, esdeveniments de recordatoris de motivació i si s’ha completat l’onboarding). Les senyals no inclouen text lliure, noms, correus electrònics ni el contingut del teu historial de concentració.',
      identifier:
        'TelemetryDeck identifica les instal·lacions amb un identificador xifrat (hash) limitat al dispositiu i pot adjuntar metadades de dispositiu no personals (com el model, la versió del sistema operatiu i la configuració regional). Aquestes dades s’utilitzen només per a anàlisi, no es vinculen a la teva identitat per part nostra i no s’utilitzen per a seguiment entre apps o llocs web d’altres empreses.',
      learnMore: 'Més informació:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Actualitzacions de l’App Store',
      body: 'Si utilitzes «Cerca actualitzacions» a Configuració, l’app pot contactar amb Apple per comprovar si hi ha una versió més recent disponible a l’App Store.',
    },
    launchAtLogin: {
      title: 'Obertura en iniciar sessió (Mac)',
      body: 'Si actives Obertura en iniciar sessió a Configuració al Mac, l’app utilitza les API del sistema macOS per registrar-se com a element d’inici de sessió. Aquesta preferència està sota el teu control i pots desactivar-la en qualsevol moment.',
    },
    notifications: {
      title: 'Notificacions i Live Activities (iPhone)',
      body: 'A l’iPhone, les notificacions locals opcionals, els recordatoris de motivació i les Live Activities t’ajuden a veure quan acaba una sessió o a tornar suaument a la concentració. El permís només es demana quan tries activar aquestes funcions. El contingut de les notificacions roman al teu dispositiu.',
    },
    whatWeDoNotDo: {
      title: 'El que no fem',
      items: [
        'Sense xarxes publicitàries',
        'Sense venda d’informació personal',
        'Sense accés als teus contactes, fotos, ubicació precisa, càmera o micròfon per a anàlisi',
      ],
    },
    children: {
      title: 'Menors',
      body: `${PULSE_APP_NAME} no recull a consciència informació personal de menors més enllà del que un compte necessita per sincronitzar, com es descriu a dalt. Les senyals d’anàlisi són anònimes i no inclouen contingut personal.`,
    },
    changes: {
      title: 'Canvis',
      body: 'Si aquesta política canvia, la versió actualitzada es publicarà en aquesta URL.',
    },
    contact: {
      title: 'Contacte',
      body: 'Preguntes sobre aquesta política:',
    },
  },
}
