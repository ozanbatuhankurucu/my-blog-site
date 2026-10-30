import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const nlMessages: PulseMessages = {
  languageLabel: 'Paginataal',
  video: {
    ariaLabel: `Productrondleiding van ${PULSE_APP_NAME}`,
    playLabel: 'Rondleiding afspelen',
    unsupported: 'Je browser ondersteunt geen ingesloten video.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Focustimer voor iPhone en Mac`,
    metaDescription: `${PULSE_APP_NAME} is een rustige Pomodoro-timer voor iPhone en Mac met Focus History, Daily Focus Goals, inloggen met Apple en Google en offline-first synchronisatie tussen je apparaten.`,
    heroImageAlt: `Focustimer en overzicht van de wekelijkse geschiedenis van ${PULSE_APP_NAME}`,
    backToProjects: 'Terug naar projecten',
    availableOnAppStore: 'Beschikbaar in de App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Focustimer voor iPhone en Mac',
    tagline: 'Een rustige Pomodoro-timer die je helpt focussen, op iPhone en in de menubalk van je Mac.',
    description: `Start een Focussessie, neem pauze en houd je geschiedenis bij de hand. Log in met Apple of Google, zodat Daily Focus Goals, Focus History en gesynchroniseerde voorkeuren bij je account blijven op iPhone en Mac, terwijl de timer ook offline blijft werken.`,
    downloadCta: 'Download in de App Store',
    watchDemo: 'Bekijk hoe het werkt',
    supportCta: 'Ondersteuning',
    stats: {
      platformLabel: 'Platforms',
      platformValue: 'iPhone en Mac',
      languagesLabel: 'Talen',
      languagesValue: '48 talen',
      dataLabel: 'Synchronisatie',
      dataValue: 'Offline-first',
      builtWithLabel: 'Gemaakt met',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Een rustigere manier om te focussen',
      title: 'Je timer is er wanneer je hem nodig hebt en verdwijnt wanneer dat niet zo is.',
      description: `Open ${PULSE_APP_NAME} op de Mac vanuit de menubalk, kies een sessie en sluit de popover. Start Focus op de iPhone vanuit Home en ga op ondersteunde apparaten verder met Live Activities. De timer blijft werken terwijl jij bezig bent.`,
      caption:
        'Timers voor focus en pauzes, Daily Focus Goals, Focus History, bijhouden van reeksen, lokalisatie in 48 talen en optionele meldingen bij voltooiing.',
    },
    rhythm: {
      eyebrow: 'Een ritme dat jij bepaalt',
      title: 'Focus, pauzeer, herstel, herhaal.',
      description: `${PULSE_APP_NAME} stelt voor wat hierna komt, maar start nooit zelf een sessie. Elke duur kan aan je dag worden aangepast.`,
    },
    featureShowcases: [
      {
        title: 'Focus',
        badge: '1–120 min',
        description:
          'De timer telt rustig af terwijl je werkt. Pauzeer, stel opnieuw in of sla over: jij houdt de controle op iPhone en Mac.',
        imageFile: 'focus-running.png',
        alt: `Lopende focussessie in ${PULSE_APP_NAME} met pauzeknoppen en afteltimer`,
      },
      {
        title: 'Menubalk',
        badge: 'Mac',
        description:
          'Toon of verberg op de Mac de resterende tijd in de menubalk. Het statusitem met vaste breedte blijft op zijn plek zonder de popover te verschuiven, tot 120:00.',
        imageFile: 'menubar.png',
        alt: `Afteltimer van ${PULSE_APP_NAME} in de macOS-menubalk`,
      },
      {
        title: 'Aanpassing',
        badge: 'Jouw regels',
        description:
          'Flexibele duur, Daily Focus Goals, geluiden en animaties bij voltooiing, 48 interfacetalen en weergavevoorkeuren.',
        imageFile: 'settings.png',
        alt: `Instellingen van ${PULSE_APP_NAME} voor duur, voltooiingsmeldingen, taal en doelen`,
      },
    ],
    history: {
      eyebrow: 'Vooruitgang zonder druk',
      title: 'Zie je werk zich opstapelen.',
      description:
        'Open de Focus History om totalen en reeksen te bekijken. Wanneer je bent ingelogd, kan de geschiedenis tussen iPhone en Mac synchroniseren, zodat je voortgang je volgt.',
      items: ['Totale focustijd', 'Aantal voltooide sessies', 'Huidige reeks', 'Beste reeks', 'Daily Focus Goals'],
      imageAlt: `Wekelijkse Focus History van ${PULSE_APP_NAME} met aantallen sessies, focusuren en reeks`,
    },
    feedback: {
      eyebrow: 'Rustige feedback, op jouw manier',
      title: 'Maak afronden belonend.',
      description: `Kies uit zes rustige voltooiingsgeluiden en zes dierenvieringen, of schakel een van beide uit. ${PULSE_APP_NAME} toont het juiste bericht wanneer een sessie Focus, Korte pauze of Lange pauze eindigt.`,
      items: [
        'Titel en ondertitel bij voltooiing afgestemd op de sessie',
        'Interface in 48 talen met standaard de systeemtaal',
        'Taal- en weergavevoorkeuren op elk apparaat',
        'Optionele motivatiemeldingen op iPhone',
      ],
      settingsImageAlt: `Instellingen van ${PULSE_APP_NAME} voor duur, taal, voltooiingsgeluiden en doelen`,
      celebrationImageAlt: `Konijnenanimatie van ${PULSE_APP_NAME} wanneer een sessie is voltooid`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Aap', 'Koala', 'Kat', 'Vos', 'Panda', 'Konijn'],
    },
    native: {
      eyebrow: 'Van nature native',
      title: 'Gemaakt om zich thuis te voelen op Apple-apparaten.',
      description: `SwiftUI, AppKit en systeemconventies houden ${PULSE_APP_NAME} snel en vertrouwd, met overal VoiceOver-labels en ondersteuning voor Verminder beweging.`,
      features: [
        {
          title: 'Mac-menubalk en iPhone-Home',
          description: 'Een rustige metgezel in de menubalk op Mac en een gerichte Home-ervaring op iPhone.',
        },
        {
          title: 'Blijft nauwkeurig',
          description:
            'Sessies blijven correct na sluimerstand, ontwaken en opnieuw starten, waarbij de geschiedenis op het werkelijke eindtijdstip wordt vastgelegd.',
        },
        {
          title: 'Offline-first synchronisatie',
          description:
            'Blijf focussen zonder verbinding. Zodra je weer online bent, worden ingelogde wijzigingen met je account gesynchroniseerd.',
        },
        {
          title: 'Spreekt jouw taal',
          description:
            'Volledige interface in 48 talen, standaard in de systeemtaal en handmatig aan te passen in Instellingen.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privacy als uitgangspunt',
      title: 'Jouw focus blijft van jou.',
      description: `${PULSE_APP_NAME} gebruikt een account zodat je geschiedenis tussen apparaten kan synchroniseren. We bewaren alleen wat daarvoor nodig is, verkopen je gegevens nooit en houden analyses gescheiden van je Focus History.`,
      items: [
        'Log in met Apple of Google',
        'Offline-first focus op elk apparaat',
        'Cloudsynchronisatie voor geschiedenis en gesynchroniseerde voorkeuren',
        'Geen advertentienetwerken',
        'Verwijder je account op elk moment in Instellingen',
      ],
    },
    closing: {
      title: 'Maak ruimte voor geconcentreerd werk.',
      description: `Download ${PULSE_APP_NAME} in de App Store voor iPhone en Mac of lees het privacybeleid en de ondersteuningspagina als je hulp nodig hebt.`,
      getSupport: 'Ondersteuning krijgen',
      privacy: 'Privacy',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME}-ondersteuning`,
    metaDescription: `Ondersteuning, veelgestelde vragen en accounthulp voor ${PULSE_APP_NAME} op iPhone en Mac, waaronder Pomodoro Pro, aankopen, Focus Protection, inloggen, synchronisatie en accountverwijdering.`,
    title: `${PULSE_APP_NAME}-ondersteuning`,
    intro: `${PULSE_APP_NAME} is een rustige Pomodoro-timer voor iPhone en Mac. Log in met Apple of Google om je Focus History tussen apparaten te synchroniseren. Op iPhone ontgrendelt de optionele Pomodoro Pro Focus Protection, aangepaste tags en Tag Insights.`,
    gettingStarted: {
      title: 'Aan de slag',
      items: [
        {
          question: 'Hoe start ik een Focussessie?',
          answer:
            'Klik op de Mac op het appicoon in de menubalk, kies Focus, Korte pauze of Lange pauze en druk op Start. Open op de iPhone de app, kies een sessie op Home en druk op Start. Je kunt de app verlaten terwijl de timer loopt.',
        },
        {
          question: 'Hoe wijzig ik de duur van Focus en pauzes?',
          answer:
            'Open Instellingen en pas de duur van Focus, Korte pauze en Lange pauze aan. Je kunt ook een vooraf ingesteld ritme kiezen en daarna het aantal minuten verfijnen.',
        },
        {
          question: 'Hoe stel ik Daily Focus Goals in?',
          answer:
            'Stel in Instellingen in hoeveel Focussessies je per dag wilt. Je voortgang verschijnt op Home en in de Focus History.',
        },
        {
          question: 'Hoe bekijk ik de Focus History?',
          answer:
            'Open de Focus History vanuit de app (op de Mac via de popover of het statusmenu). Je ziet totalen, reeksen en wekelijkse voortgang.',
        },
        {
          question: 'Hoe wijzig ik de taal en weergave?',
          answer:
            'Kies in Instellingen voor Taal (Systeem of een ondersteunde taal) en Weergave (Systeem, Licht of Donker). Deze voorkeuren blijven op elk apparaat en worden niet gesynchroniseerd.',
        },
      ],
    },
    accounts: {
      title: 'Accounts',
      items: [
        {
          question: 'Waarom moet ik inloggen?',
          answer:
            'Met een account blijven Focus History, Daily Focus Goals en gesynchroniseerde voorkeuren bij je op iPhone en Mac. Nieuwe installaties vragen je vóór gebruik van de timer in te loggen. Apparaten die vanaf een oudere versie upgraden, kunnen de lokale geschiedenis mogelijk blijven gebruiken totdat je inlogt. Pomodoro Pro-aankopen blijven ook bij je ingelogde account.',
        },
        {
          question: 'Hoe log ik in met Apple of Google?',
          answer:
            'Kies op het inlogscherm Ga door met Apple of Ga door met Google en voltooi de procedure van de aanbieder. Apple kan Verberg mijn e-mailadres aanbieden.',
        },
        {
          question: 'Hoe log ik uit?',
          answer:
            'Open Instellingen → Account → Log uit. Als sommige wijzigingen nog niet zijn gesynchroniseerd, kan de app vragen om eerst te synchroniseren of toch uit te loggen. Uitloggen verwijdert je account niet.',
        },
        {
          question: 'Hoe log ik opnieuw in?',
          answer:
            'Gebruik op het inlogscherm dezelfde Apple- of Google-methode. De cloudgeschiedenis voor dat account wordt op het apparaat hersteld.',
        },
        {
          question: 'Wat gebeurt er als ik een ander account gebruik?',
          answer:
            'Elk account heeft een eigen geschiedenis. Inloggen met een ander account voegt niet-gerelateerde geschiedenissen niet samen. Kies zorgvuldig voordat je op een apparaat met lokale sessies bevestigt dat de geschiedenis aan een account wordt toegewezen.',
        },
        {
          question: 'Kan ik Apple en Google aan hetzelfde account koppelen?',
          answer:
            'Ja. In Instellingen → Account kun je de andere inlogmethode koppelen als die nog niet door een ander account wordt gebruikt.',
        },
      ],
    },
    cloudSync: {
      title: 'Cloudsynchronisatie',
      items: [
        {
          question: 'Wat wordt tussen apparaten gesynchroniseerd?',
          answer:
            'De geschiedenis van focus- en pauzesessies (inclusief de gekozen tag), aangemaakte tags, gegevens over Daily Focus Goals, accountgegevens over reeksen en gesynchroniseerde voorkeuren zoals sessieduur, dagdoel, geluid, animaties, voltooiingsgeluid en feestdier.',
        },
        {
          question: 'Wat gebeurt er zonder internet?',
          answer:
            'Nadat je bent ingelogd, kun je de timer offline blijven gebruiken. Nieuwe sessies en wijzigingen blijven op het apparaat totdat er een verbinding beschikbaar is.',
        },
        {
          question: 'Wat gebeurt er wanneer ik weer online ben?',
          answer:
            'De app synchroniseert openstaande wijzigingen met je account. Synchronisatie is offline-first en uiteindelijk consistent; het is geen directe samenwerking in realtime.',
        },
        {
          question: 'Hoe gebruik ik hetzelfde account op iPhone en Mac?',
          answer:
            'Installeer de app op beide apparaten en log in met hetzelfde Apple- of Google-account. Zodra het herstel is voltooid, kan de Focus History op beide verschijnen.',
        },
        {
          question: 'Wat moet ik doen als geschiedenis ontbreekt?',
          answer:
            'Controleer of je met hetzelfde account bent ingelogd, wacht tot herstel of synchronisatie is voltooid en bekijk de Focus History opnieuw. Als je met een ander account bent ingelogd, toont dat account zijn eigen geschiedenis.',
        },
      ],
    },
    migration: {
      title: 'Upgraden vanaf een oudere versie',
      items: [
        {
          question: 'Wat gebeurt er met mijn bestaande lokale geschiedenis?',
          answer:
            'Bestaande lokale geschiedenis wordt niet stilzwijgend verwijderd. Na het inloggen vraagt de app toestemming voordat die geschiedenis aan je account wordt toegevoegd.',
        },
        {
          question: 'Hoe wijs ik mijn geschiedenis aan mijn account toe?',
          answer:
            'Log in op het account dat de geschiedenis moet krijgen, bekijk het scherm Voeg je geschiedenis toe en kies Voeg toe aan dit account. Gebruik een ander account als het getoonde account onjuist is. Sessies kunnen later niet naar een ander account worden verplaatst.',
        },
        {
          question: 'Wat als de apparaat- en accountinstellingen verschillen?',
          answer:
            'De app kan vragen of je de instellingen van dit apparaat wilt behouden of de accountinstellingen wilt gebruiken. Taal, weergave, meldingen en motivatiemeldingen blijven lokaal op het apparaat.',
        },
      ],
    },
    notifications: {
      title: 'Meldingen',
      items: [
        {
          question: 'Hoe schakel ik meldingen in op iPhone?',
          answer:
            'Open Instellingen → Meldingen en kies Schakel in, of open de systeeminstellingen als je eerder toestemming hebt geweigerd.',
        },
        {
          question: 'Hoe werken motivatiemeldingen?',
          answer:
            'Open op iPhone Instellingen → Motivatiemeldingen en schakel ze in nadat meldingen zijn toegestaan. Je kunt ze pauzeren of stille uren instellen. Ze zijn optioneel en standaard uitgeschakeld.',
        },
        {
          question: 'Wat als meldingen zijn uitgeschakeld?',
          answer:
            'Meldingen aan het einde van een sessie en motivatiemeldingen vereisen toestemming. Gebruik Instellingen → Meldingen → Open Instellingen om ze in de iOS-instellingen in te schakelen.',
        },
        {
          question: 'Hoe werken Live Activities?',
          answer:
            'Op ondersteunde iPhones kan een optionele Live Activity een actieve sessie tonen op het toegangsscherm en Dynamic Island. Toestemming wordt gevraagd wanneer je gerelateerde functies inschakelt.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Wat is Pomodoro Pro?',
          answer:
            'Pomodoro Pro is een optionele in-appaankoop op iPhone. Het ontgrendelt Focus Protection, aangepaste tags (je eigen namen en kleuren) en Tag Insights (focusduur per tag voor week en maand). De timer, ingebouwde tags, Focus History en synchronisatie blijven zonder Pro beschikbaar.',
        },
        {
          question: 'Welke aankoopopties zijn beschikbaar?',
          answer:
            'Pomodoro Pro wordt aangeboden als abonnement Elke maand, abonnement Elk jaar (jaarlijks) of eenmalige Lifetime-aankoop. Abonnementen worden automatisch verlengd, tenzij je minstens 24 uur voor het einde van de huidige periode annuleert. Lifetime wordt eenmaal in rekening gebracht en is geen abonnement.',
        },
        {
          question: 'Waar koop of bekijk ik Pomodoro Pro?',
          answer:
            'Open op iPhone Instellingen → Pomodoro Pro of tik op de beschermingschip op Home. Je moet zijn ingelogd. Pro blijft bij je account op elk apparaat waarop je inlogt.',
        },
        {
          question: 'Hoe herstel ik aankopen?',
          answer:
            'Gebruik Herstel aankopen op het betaalscherm of in Instellingen → Pomodoro Pro. Aankopen met hetzelfde Apple Account worden verplaatst naar het account waarmee je bent ingelogd. Als niets wordt gevonden, controleer dan of je het Apple Account gebruikt waarmee Pro is gekocht en probeer het online opnieuw.',
        },
      ],
    },
    purchases: {
      title: 'Abonnementen en aankopen',
      items: [
        {
          question: 'Hoe beheer of annuleer ik een abonnement?',
          answer:
            'Abonnementen worden door Apple gefactureerd. Open op iPhone Instellingen → Pomodoro Pro → Beheer abonnement of ga naar Instellingen → [je naam] → Abonnementen en selecteer de app. Annuleer minstens 24 uur vóór verlenging om de volgende afschrijving te voorkomen. Het verwijderen van de app of je Pomodoro-account annuleert een abonnement niet.',
        },
        {
          question: 'Hoe vraag ik een terugbetaling aan?',
          answer:
            'Terugbetalingen worden door Apple afgehandeld. Ga naar reportaproblem.apple.com, log in met het Apple Account dat voor de aankoop is gebruikt, zoek de transactie en dien een verzoek om terugbetaling in. We kunnen zelf geen App Store-terugbetalingen verwerken.',
        },
        {
          question: 'Wat als een aankoop mislukt of Pro niet wordt ontgrendeld?',
          answer:
            'Blijf ingelogd, controleer je netwerkverbinding en probeer het opnieuw. Als de betaling in behandeling is, bijvoorbeeld bij Vraag om te kopen, wordt Pro na goedkeuring ontgrendeld. Gebruik Herstel aankopen als je al hebt betaald. Werk bij betalingsproblemen met een actief abonnement je betaalmethode bij in de App Store-instellingen.',
        },
        {
          question: 'Wat als ik Lifetime koop terwijl een abonnement actief is?',
          answer:
            'Lifetime ontgrendelt Pro permanent, maar een bestaand abonnement wordt niet automatisch geannuleerd. Schakel automatische verlenging uit in de abonnementsinstellingen van de App Store om nieuwe afschrijvingen te voorkomen.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Wat is Focus Protection?',
          answer:
            'Focus Protection is een Pomodoro Pro-functie op iPhone. Deze gebruikt de Screen Time-API’s van Apple om de gekozen apps, categorieën of websites te blokkeren terwijl een Focussessie loopt. Pauzes worden nooit geblokkeerd. Wanneer de sessie eindigt, worden geblokkeerde apps automatisch ontgrendeld.',
        },
        {
          question: 'Hoe stel ik het in?',
          answer:
            'Tik met Pro actief op de chip Focus Protection op Home of open de functie via Instellingen. Sta Screen Time-toegang toe wanneer daarom wordt gevraagd, kies wat je wilt blokkeren en schakel Focus Protection in. Start een Focussessie om de blokkeringen toe te passen.',
        },
        {
          question: 'Hoe schakel ik het uit of ontgrendel ik apps?',
          answer:
            'Open het venster Focus Protection en kies Schakel nu uit, of schakel de functie uit. Na een sessie kun je ook Ontgrendel apps gebruiken op het blokkeringsscherm. Ga naar iOS-instellingen → Screen Time → Apps met Screen Time-toegang om de Screen Time-toegang van de app volledig te verwijderen.',
        },
        {
          question: 'Wat als Focus Protection niet werkt?',
          answer:
            'Controleer of Pro actief is, Screen Time-toegang is toegestaan en je apps of categorieën hebt geselecteerd om te blokkeren. Focus Protection geldt alleen tijdens Focussessies, niet tijdens pauzes. Open de app en geef opnieuw toegang als die in de systeeminstellingen is ingetrokken. De iPhone opnieuw starten kan helpen na een wijziging van toestemming.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Account en privacy',
      items: [
        {
          question: 'Hoe verwijder ik mijn account?',
          answer:
            'Log in, open Instellingen → Account → Verwijder account en bevestig. Je account en gesynchroniseerde Focus History worden permanent uit onze actieve database verwijderd. Dit kan niet ongedaan worden gemaakt. Voor verwijdering is een netwerkverbinding nodig. Je account verwijderen annuleert geen App Store-abonnement; beheer dat in de App Store-instellingen.',
        },
        {
          question: 'Wat wordt beïnvloed door accountverwijdering?',
          answer:
            'Gesynchroniseerde cloudgegevens voor dat account worden verwijderd, de Sign in with Apple-autorisatie wordt ingetrokken wanneer die is opgeslagen, onze aankoopaanbieder wordt gevraagd het aan je account gekoppelde aankooprecord te verwijderen en de accountgegevens worden verwijderd van het apparaat waarop je de verwijdering uitvoert. Lokale kopieën op andere apparaten kunnen niet meer synchroniseren; verwijder daar zo nodig de app of wis die kopieën. Back-ups van aanbieders kunnen verwijderde gegevens gedurende een beperkte herstelperiode bewaren. Apple bewaart de eigen App Store-transactiegegevens.',
        },
        {
          question: 'Hoe exporteer ik mijn gegevens?',
          answer:
            'Instellingen → Account → Exporteer mijn gegevens slaat een JSON-bestand op met sessies, Daily Focus Goals, gesynchroniseerde instellingen en het accountprofiel. Niet-toegewezen lokale gegevens kunnen ook vanaf het inlogscherm worden geëxporteerd.',
        },
        {
          question: 'Waar staat het privacybeleid?',
          answer:
            'Open het privacybeleid vanaf de productwebsite of gebruik de privacylink op de productpagina’s van deze site.',
        },
      ],
    },
    requirements: {
      title: 'Vereisten',
      body: 'iPhone: iOS 17 of nieuwer. Mac: macOS 14.6 of nieuwer. Pomodoro Pro-aankopen en Focus Protection zijn beschikbaar op iPhone.',
    },
    contact: {
      title: 'Contact',
      body: 'Voor hulp, feedback of bugmeldingen:',
    },
    privacyPolicyLink: 'Privacybeleid',
  },
  privacy: {
    metaTitle: `Privacybeleid van ${PULSE_APP_NAME}`,
    metaDescription: `Privacybeleid voor ${PULSE_APP_NAME} over inloggen met Apple en Google, cloudsynchronisatie, Pomodoro Pro-aankopen via RevenueCat, Focus Protection, analyses en accountverwijdering op Mac en iPhone.`,
    title: 'Privacybeleid',
    subtitle: `${PULSE_APP_NAME} — Pomodoro-timer voor Mac en iPhone`,
    lastUpdated: 'Laatst bijgewerkt: 26 oktober 2026',
    summary: {
      title: 'Samenvatting',
      body: `Wanneer je inlogt met Apple of Google, houdt je account je Focus History, Daily Focus Goals en timerinstellingen gesynchroniseerd tussen Mac en iPhone. We bewaren alleen wat de app daarvoor nodig heeft: je e-mailadres, een account-ID en de focusgegevens die je aanmaakt. We verkopen die nooit, gebruiken ze nooit voor advertenties en delen ze nooit met onze analyseaanbieder. Als je Pomodoro Pro op iPhone koopt, bewaart onze aankoopaanbieder RevenueCat je aankoopgeschiedenis gekoppeld aan je account, zodat Pro werkt op elk apparaat waarop je inlogt. De appkeuzes van Focus Protection verlaten je iPhone nooit. Je kunt je gegevens op elk moment exporteren of je account verwijderen via Instellingen. Daarnaast kan de app anonieme, privacyvriendelijke gebruiksanalyses verzenden, zodat we focusprocessen kunnen verbeteren.`,
    },
    localData: {
      title: 'Gegevens die op je apparaat worden bewaard',
      body: 'Je timerinstellingen, sessievoorkeuren en Focus History worden lokaal op je Mac of iPhone opgeslagen met standaard systeemopslag, zodat de timer offline blijft werken. Elk account dat op een apparaat is ingelogd, heeft een eigen lokale opslag. Je inlogsessie wordt in de systeem-sleutelhanger bewaard. Instellingen voor taal, weergave, Open bij inloggen, meldingen en motivatiemeldingen blijven op elk apparaat en worden niet gesynchroniseerd. De inhoud van de Focus History wordt niet naar onze analyseaanbieder geüpload.',
      migrationSafety:
        'Wanneer je voor het eerst inlogt op een apparaat dat al Focus History bevat, vraagt de app toestemming voordat die geschiedenis naar je account wordt verplaatst. Totdat de verplaatsing op onze servers is bevestigd, plus 90 dagen, bewaart de app de vorige lokale kopie en een lokaal back-upbestand op het apparaat als vangnet. Daarna worden ze automatisch verwijderd.',
    },
    accountAndSync: {
      title: 'Je account en gesynchroniseerde gegevens',
      intro: 'Als je inlogt, verwerken we:',
      items: [
        'Contactgegevens: het e-mailadres dat wordt gedeeld via Sign in with Apple (mogelijk een privé relay-adres via Hide My Email) of Google. We vragen niet om je naam.',
        'ID’s: een account-ID dat bij het inloggen wordt gemaakt en een willekeurig ID voor elke installatie, uitsluitend gebruikt voor synchronisatie en om vast te stellen welk apparaat een wijziging heeft aangebracht.',
        'Focusgegevens: voltooide en verwijderde focus- en pauzesessies (tijdstippen, duur, lokale dag en tijdzone en de gekozen tag), aangemaakte tags (naam en kleur), Daily Focus Goals, je beste reeks en gesynchroniseerde instellingen (sessieduur, dagdoel, geluid, animaties, voltooiingsgeluid en feestdier).',
      ],
      closing:
        'Deze gegevens worden uitsluitend gebruikt om synchronisatie-, geschiedenis- en accountfuncties te leveren. Ze zijn gekoppeld aan je account, worden niet voor tracking gebruikt en worden niet gedeeld met andere derden dan de onderstaande verwerkers.',
    },
    processors: {
      title: 'Verwerkers en opslaglocatie',
      bodyBeforeSupabase: 'Account- en synchronisatiegegevens worden opgeslagen bij',
      bodyAfterSupabase:
        '(database en verificatie) in de Europese Unie. Inloggen wordt afgehandeld door',
      orWord: 'of',
      bodyAfterProviders:
        ', afhankelijk van de gekozen optie. Pomodoro Pro-aankopen worden beheerd met',
      bodyAfterRevenueCat:
        '(zie Aankopen hieronder). Gegevens worden tijdens overdracht versleuteld en de toegang is beperkt, zodat elk account alleen de eigen gegevens kan lezen.',
    },
    purchases: {
      title: 'Aankopen (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro wordt via de App Store verkocht; Apple handelt de betaling af en wij zien je betaalgegevens nooit. Om Pro te ontgrendelen op elk apparaat waarop je inlogt, deelt de app je account-ID met',
      bodyAfterRevenueCat:
        ', dat je aankoopgeschiedenis (gekochte producten, aankoop- en verlengingsdatums en abonnementsstatus) aan dat ID gekoppeld bewaart. Deze gegevens worden alleen gebruikt om Pro-toegang te verlenen en te herstellen, worden niet voor tracking gebruikt en niet met onze analyseaanbieder gedeeld. Pro vereist een ingelogd account; vóór het inloggen wordt niets naar RevenueCat gestuurd.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection gebruikt Apples Screen Time-framework (Family Controls) om de apps, categorieën en websites te blokkeren die je kiest terwijl een focussessie loopt. Apple geeft de app alleen ondoorzichtige tokens voor je keuzes: we kunnen niet zien welke apps of websites je hebt gekozen, hoe je ze gebruikt of welke andere Screen Time-gegevens er zijn. Je keuzes blijven op die iPhone, worden nooit geüpload of gesynchroniseerd en niet naar onze analyseaanbieder gestuurd. Je kunt Focus Protection op elk moment in de app uitschakelen of de toegang van de app verwijderen via Instellingen → Screen Time → Apps met Screen Time-toegang.',
    },
    retention: {
      title: 'Bewaring, back-ups en verwijdering',
      items: [
        'Je gesynchroniseerde gegevens worden bewaard zolang je account bestaat.',
        'Verwijder account (Instellingen → Account → Verwijder account) verwijdert je account en alle gesynchroniseerde gegevens permanent uit onze actieve database, trekt de Sign in with Apple-autorisatie van de app in wanneer die is opgeslagen, vraagt RevenueCat het aan je account gekoppelde aankooprecord te verwijderen en verwijdert de gegevens van dat account van het apparaat waarop je de verwijdering uitvoert. Lokale kopieën op je andere apparaten kunnen niet meer synchroniseren en blijven daar totdat je de app op die apparaten verwijdert of de kopieën via het inlogscherm verwijdert wanneer die optie wordt aangeboden.',
        'Onze databaseaanbieder bewaart dagelijkse back-ups 7 dagen. Verwijderde gegevens kunnen in die back-ups blijven totdat ze verlopen; back-ups worden alleen voor noodherstel gebruikt. Voor hetzelfde doel kunnen we ook maximaal 90 dagen een versleutelde wekelijkse back-up bewaren.',
        'Je account verwijderen annuleert geen App Store-abonnement; beheer of annuleer het in de instellingen van je Apple Account. Apple bewaart een eigen overzicht van je App Store-transacties.',
        'Uitloggen verwijdert niets. Wijzigingen die nog niet zijn gesynchroniseerd, blijven op het apparaat totdat hetzelfde account opnieuw inlogt.',
        'Analyserecords worden door TelemetryDeck volgens zijn bewaarbeleid verwerkt en niet gebruikt om je Focus History te herstellen.',
      ],
    },
    export: {
      title: 'Exporteren',
      body: 'Instellingen → Account → Exporteer mijn gegevens slaat een JSON-bestand op met je sessies, Daily Focus Goals, gesynchroniseerde instellingen en accountprofiel. Gegevens die nog niet naar een account zijn verplaatst, kunnen ook vanaf het inlogscherm worden geëxporteerd.',
    },
    analytics: {
      title: 'Analyse',
      introBeforeLink: 'We gebruiken',
      introAfterLink:
        ', een privacygerichte analysedienst, om te begrijpen hoe de app wordt gebruikt (bijvoorbeeld: gestarte of voltooide focus- en pauzesessies, wijzigingen in Daily Focus Goals of instellingen, resultaten van toestemming voor meldingen, gebeurtenissen rond motivatiemeldingen en of de introductie is voltooid). Signalen bevatten geen vrije tekst, namen, e-mailadressen of inhoud van je Focus History.',
      identifier:
        'TelemetryDeck identificeert installaties met een gehashte, apparaatspecifieke ID en kan niet-persoonlijke apparaatmetadata toevoegen, zoals model, versie van het besturingssysteem en landinstelling. Deze gegevens worden alleen voor analyse gebruikt, door ons niet aan je identiteit gekoppeld en niet gebruikt om je te volgen in apps of op websites van andere bedrijven.',
      learnMore: 'Meer informatie:',
      faqLabel: 'Privacy-FAQ van TelemetryDeck',
    },
    appStoreUpdates: {
      title: 'App Store-updates',
      body: 'Als je “Zoek naar updates” in Instellingen gebruikt, kan de app contact opnemen met Apple om te controleren of een nieuwere versie beschikbaar is in de App Store.',
    },
    launchAtLogin: {
      title: 'Open bij inloggen (Mac)',
      body: 'Als je Open bij inloggen inschakelt in Instellingen op de Mac, gebruikt de app macOS-systeem-API’s om zich als inlogonderdeel te registreren. Jij beheert deze voorkeur en kunt deze op elk moment uitschakelen.',
    },
    notifications: {
      title: 'Meldingen en Live Activities (iPhone)',
      body: 'Op iPhone helpen optionele lokale meldingen, motivatiemeldingen en Live Activities je te zien wanneer een sessie eindigt of rustig terug te keren naar je focus. Toestemming wordt alleen gevraagd wanneer je deze functies inschakelt. De inhoud van meldingen blijft op je apparaat.',
    },
    whatWeDoNotDo: {
      title: 'Wat we niet doen',
      items: [
        'Geen advertentienetwerken',
        'Geen verkoop van persoonlijke gegevens',
        'Geen toegang tot je contacten, foto’s, exacte locatie, camera of microfoon voor analyse',
      ],
    },
    children: {
      title: 'Kinderen',
      body: `${PULSE_APP_NAME} verzamelt niet bewust persoonlijke gegevens van kinderen buiten wat een account nodig heeft voor synchronisatie, zoals hierboven beschreven. Analysesignalen zijn anoniem en bevatten geen persoonlijke inhoud.`,
    },
    changes: {
      title: 'Wijzigingen',
      body: 'Als dit beleid verandert, wordt de bijgewerkte versie op deze URL geplaatst.',
    },
    contact: {
      title: 'Contact',
      body: 'Vragen over dit beleid:',
    },
  },
}
