import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const daMessages: PulseMessages = {
  languageLabel: 'Sidesprog',
  video: {
    ariaLabel: `${PULSE_APP_NAME} produktgennemgang`,
    playLabel: 'Afspil gennemgang',
    unsupported: 'Din browser understøtter ikke indlejret video.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Fokustimer til iPhone og Mac`,
    metaDescription: `${PULSE_APP_NAME} er en rolig Pomodoro-timer til iPhone og Mac med Focus History, Daily Focus Goals, login med Apple og Google samt offline-first-synkronisering på tværs af dine enheder.`,
    heroImageAlt: `${PULSE_APP_NAME} fokustimer og oversigt over ugentlig historik`,
    backToProjects: 'Tilbage til projekter',
    availableOnAppStore: 'Tilgængelig i App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Fokustimer til iPhone og Mac',
    tagline: 'En behagelig Pomodoro-timer, der hjælper dig med at fokusere — på iPhone og i menulinjen på din Mac.',
    description: `Start en fokussession, hold en pause, og tag din historik med dig. Log ind med Apple eller Google, så Daily Focus Goals, Focus History og synkroniserede indstillinger følger din konto på iPhone og Mac — mens timeren stadig fungerer offline.`,
    downloadCta: 'Hent i App Store',
    watchDemo: 'Se den i brug',
    supportCta: 'Support',
    stats: {
      platformLabel: 'Platforme',
      platformValue: 'iPhone og Mac',
      languagesLabel: 'Sprog',
      languagesValue: '48 sprog',
      dataLabel: 'Synkronisering',
      dataValue: 'Offline-first',
      builtWithLabel: 'Bygget med',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'En mere rolig måde at fokusere på',
      title: 'Din timer er der, når du har brug for den — og væk, når du ikke har.',
      description: `På Mac åbner du ${PULSE_APP_NAME} fra menulinjen, vælger en session og lukker popover-vinduet. På iPhone starter du Fokus fra Hjem og fortsætter med Live Activities på understøttede enheder. Timeren fortsætter, mens du arbejder.`,
      caption:
        'Fokus- og pausetimere, Daily Focus Goals, Focus History, registrering af stimer, lokalisering på 48 sprog og valgfri afslutningsadvarsler.',
    },
    rhythm: {
      eyebrow: 'En rytme, du styrer',
      title: 'Fokusér, hold pause, kom dig, gentag.',
      description: `${PULSE_APP_NAME} foreslår det næste trin, men starter aldrig en session for dig. Alle varigheder kan tilpasses din dag.`,
    },
    featureShowcases: [
      {
        title: 'Fokus',
        badge: '1–120 min.',
        description:
          'Nedtællingen kører stille, mens du arbejder. Sæt på pause, nulstil eller spring over — du bevarer kontrollen på iPhone og Mac.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} fokussession i gang med pauseknapper og nedtælling`,
      },
      {
        title: 'Menulinje',
        badge: 'Mac',
        description:
          'På Mac kan du vise eller skjule den resterende tid i menulinjen. Statuselementet med fast bredde bliver på plads uden at flytte popover-vinduet, helt op til 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} nedtælling vist i macOS-menulinjen`,
      },
      {
        title: 'Tilpasning',
        badge: 'Dine regler',
        description:
          'Fleksible varigheder, Daily Focus Goals, afslutningslyde og -animationer, 48 brugerfladesprog og indstillinger for udseende.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} indstillinger for varigheder, afslutningsadvarsler, sprog og mål`,
      },
    ],
    history: {
      eyebrow: 'Fremskridt uden pres',
      title: 'Se arbejdet løbe op.',
      description:
        'Åbn Focus History for at se totaler og stimer. Når du er logget ind, kan historikken synkroniseres mellem din iPhone og Mac, så dine fremskridt følger dig.',
      items: ['Samlet fokustid', 'Antal gennemførte sessioner', 'Nuværende stime', 'Bedste stime', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} ugentlig Focus History med antal sessioner, fokuserede timer og stime`,
    },
    feedback: {
      eyebrow: 'Behagelig feedback på din måde',
      title: 'Gør afslutningen belønnende.',
      description: `Vælg mellem seks rolige afslutningslyde og seks dyrefejringer, eller slå en af delene fra. ${PULSE_APP_NAME} viser den rigtige besked, når en Fokus-, Kort pause- eller Lang pause-session slutter.`,
      items: [
        'Sessionsspecifik afslutningstitel og undertitel',
        'Brugerflade på 48 sprog med systemsproget som standard',
        'Sprog- og udseendeindstillinger på hver enhed',
        'Valgfri motivationspåmindelser på iPhone',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} indstillinger for varigheder, sprog, afslutningslyde og mål`,
      celebrationImageAlt: `${PULSE_APP_NAME} kaninanimation, når en session afsluttes`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Abe', 'Koala', 'Kat', 'Ræv', 'Panda', 'Kanin'],
    },
    native: {
      eyebrow: 'Udviklet til platformen',
      title: 'Bygget til at føles hjemme på Apple-enheder.',
      description: `SwiftUI, AppKit og systemets konventioner holder ${PULSE_APP_NAME} hurtig og velkendt — med VoiceOver-etiketter og understøttelse af Reducer bevægelse overalt.`,
      features: [
        {
          title: 'Mac-menulinje og iPhone-hjemmeskærm',
          description: 'En diskret ledsager i menulinjen på Mac og en fokuseret Hjem-oplevelse på iPhone.',
        },
        {
          title: 'Forbliver præcis',
          description:
            'Sessioner forbliver korrekte efter vågeblus, aktivering og genstart, og historikken registreres ved den faktiske sluttid.',
        },
        {
          title: 'Offline-first-synkronisering',
          description:
            'Fortsæt med at fokusere uden forbindelse. Når du er online igen, synkroniseres ændringer fra den indloggede konto.',
        },
        {
          title: 'Taler dit sprog',
          description:
            'Komplet brugerflade på 48 sprog med systemsproget som standard og manuelt valg i Indstillinger.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privat fra starten',
      title: 'Dit fokus forbliver dit.',
      description: `${PULSE_APP_NAME} bruger en konto, så historikken kan synkroniseres mellem dine enheder. Vi gemmer kun det, synkroniseringen kræver, sælger aldrig dine data og holder analyse adskilt fra din Focus History.`,
      items: [
        'Log ind med Apple eller Google',
        'Offline-first-fokus på hver enhed',
        'Synkronisering i skyen af historik og synkroniserede indstillinger',
        'Ingen annoncenetværk',
        'Slet din konto når som helst i Indstillinger',
      ],
    },
    closing: {
      title: 'Skab plads til fokuseret arbejde.',
      description: `Hent ${PULSE_APP_NAME} i App Store til iPhone og Mac, eller læs anonymitetspolitikken og supportsiden, hvis du har brug for hjælp.`,
      getSupport: 'Få support',
      privacy: 'Anonymitet',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Support`,
    metaDescription: `Support, ofte stillede spørgsmål og kontohjælp til ${PULSE_APP_NAME} på iPhone og Mac — herunder Pomodoro Pro, køb, Focus Protection, login, synkronisering og sletning af konto.`,
    title: `${PULSE_APP_NAME} Support`,
    intro: `${PULSE_APP_NAME} er en rolig Pomodoro-timer til iPhone og Mac. Log ind med Apple eller Google for at synkronisere Focus History på tværs af dine enheder. På iPhone låser det valgfrie Pomodoro Pro op for Focus Protection, egne mærker og Tag Insights.`,
    gettingStarted: {
      title: 'Kom godt i gang',
      items: [
        {
          question: 'Hvordan starter jeg en fokussession?',
          answer:
            'På Mac skal du klikke på appikonet i menulinjen, vælge Fokus, Kort pause eller Lang pause og derefter trykke på Start. På iPhone åbner du appen, vælger en session på Hjem og trykker på Start. Du kan forlade appen, mens timeren kører.',
        },
        {
          question: 'Hvordan ændrer jeg varigheden af Fokus og pauser?',
          answer:
            'Åbn Indstillinger, og juster længden af Fokus, Kort pause og Lang pause. Du kan også vælge en forudindstillet rytme og derefter finjustere antallet af minutter.',
        },
        {
          question: 'Hvordan konfigurerer jeg Daily Focus Goals?',
          answer:
            'Angiv i Indstillinger, hvor mange fokussessioner du ønsker hver dag. Fremskridt vises på Hjem og i Focus History.',
        },
        {
          question: 'Hvordan ser jeg Focus History?',
          answer:
            'Åbn Focus History fra appen (på Mac fra popover-vinduet eller statusmenuen). Du kan se totaler, stimer og ugentlige fremskridt.',
        },
        {
          question: 'Hvordan ændrer jeg sprog og udseende?',
          answer:
            'Vælg Sprog (System eller et understøttet sprog) og Udseende (System, Lys eller Mørk) i Indstillinger. Disse indstillinger gemmes på hver enhed og synkroniseres ikke.',
        },
      ],
    },
    accounts: {
      title: 'Konti',
      items: [
        {
          question: 'Hvorfor er login påkrævet?',
          answer:
            'En konto gør, at Focus History, Daily Focus Goals og synkroniserede indstillinger følger dig på iPhone og Mac. Nye installationer beder dig logge ind, før timeren kan bruges. Enheder, der opgraderes fra ældre versioner, kan muligvis fortsat bruge lokal historik, indtil du logger ind. Pomodoro Pro-køb følger også din indloggede konto.',
        },
        {
          question: 'Hvordan logger jeg ind med Apple eller Google?',
          answer:
            'Vælg Fortsæt med Apple eller Fortsæt med Google på loginskærmen, og gennemfør udbyderens proces. Apple kan tilbyde Skjul min e-mail.',
        },
        {
          question: 'Hvordan logger jeg ud?',
          answer:
            'Åbn Indstillinger → Konto → Log ud. Hvis nogle ændringer endnu ikke er synkroniseret, kan appen bede dig om at synkronisere først eller logge ud alligevel. At logge ud sletter ikke din konto.',
        },
        {
          question: 'Hvordan logger jeg ind igen?',
          answer:
            'Brug den samme Apple- eller Google-metode på loginskærmen. Din historik i skyen gendannes til den pågældende konto på enheden.',
        },
        {
          question: 'Hvad sker der, hvis jeg bruger en anden konto?',
          answer:
            'Hver konto har sin egen historik. Login på en anden konto sammenfletter ikke separate historikker. Vælg omhyggeligt, før du bekræfter overførsel af historik på en enhed, der allerede har lokale sessioner.',
        },
        {
          question: 'Kan jeg knytte Apple og Google til den samme konto?',
          answer:
            'Ja. Under Indstillinger → Konto kan du tilknytte den anden loginmetode, hvis den ikke allerede bruges af en anden konto.',
        },
      ],
    },
    cloudSync: {
      title: 'Synkronisering i skyen',
      items: [
        {
          question: 'Hvad synkroniseres mellem enheder?',
          answer:
            'Historik for fokus- og pausesessioner (herunder det valgte mærke), mærker du opretter, registreringer af Daily Focus Goals, kontodata om stimer og synkroniserede indstillinger såsom sessionslængder, dagligt mål, lyd, animationer, afslutningslyd og fejringsdyr.',
        },
        {
          question: 'Hvad sker der uden internet?',
          answer:
            'Når du er logget ind, kan du fortsætte med at bruge timeren offline. Nye sessioner og ændringer gemmes på enheden, indtil der er forbindelse.',
        },
        {
          question: 'Hvad sker der, når jeg er online igen?',
          answer:
            'Appen synkroniserer ventende ændringer med din konto. Synkroniseringen er offline-first og bliver med tiden konsistent — det er ikke øjeblikkeligt samarbejde i realtid.',
        },
        {
          question: 'Hvordan bruger jeg den samme konto på iPhone og Mac?',
          answer:
            'Installer appen på begge enheder, og log ind med den samme Apple- eller Google-konto. Når gendannelsen er færdig, kan Focus Historyken vises på begge.',
        },
        {
          question: 'Hvad gør jeg, hvis historikken mangler?',
          answer:
            'Bekræft, at du er logget ind på den samme konto, vent på, at gendannelse og synkronisering bliver færdig, og tjek Focus History igen. Hvis du loggede ind på en anden konto, vises den kontos egen historik.',
        },
      ],
    },
    migration: {
      title: 'Opgradering fra en ældre version',
      items: [
        {
          question: 'Hvad sker der med min eksisterende lokale historik?',
          answer:
            'Eksisterende lokal historik slettes ikke uden varsel. Efter login spørger appen, før historikken føjes til din konto.',
        },
        {
          question: 'Hvordan overfører jeg min historik?',
          answer:
            'Log ind på den konto, der skal eje historikken, gennemgå skærmen Tilføj din historik, og vælg derefter Føj til denne konto. Brug en anden konto, hvis den viste konto er forkert. Sessioner kan ikke flyttes til en anden konto senere.',
        },
        {
          question: 'Hvad hvis enhedens og kontoens indstillinger er forskellige?',
          answer:
            'Appen kan spørge, om du vil beholde denne enheds indstillinger eller bruge kontoens indstillinger. Sprog, udseende, notifikationer og motivationspåmindelser forbliver lokale på enheden.',
        },
      ],
    },
    notifications: {
      title: 'Notifikationer',
      items: [
        {
          question: 'Hvordan aktiverer jeg notifikationer på iPhone?',
          answer:
            'Åbn Indstillinger → Notifikationer, og vælg Aktivér, eller åbn systemets Indstillinger, hvis tilladelsen tidligere blev afvist.',
        },
        {
          question: 'Hvordan fungerer motivationspåmindelser?',
          answer:
            'På iPhone skal du åbne Indstillinger → Motivationspåmindelser og slå dem til, når notifikationer er tilladt. Du kan sætte dem på pause eller angive stille tidsrum. De er valgfrie og slået fra som standard.',
        },
        {
          question: 'Hvad hvis notifikationer er deaktiveret?',
          answer:
            'Advarsler om afsluttede sessioner og motivationspåmindelser kræver tilladelse til notifikationer. Brug Indstillinger → Notifikationer → Åbn Indstillinger for at slå dem til i iOS-indstillingerne.',
        },
        {
          question: 'Hvordan fungerer Live Activities?',
          answer:
            'På understøttede iPhones kan en valgfri Live Activity vise en aktiv session på låseskærmen og Dynamic Island. Der anmodes om tilladelse, når du aktiverer de tilknyttede funktioner.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Hvad er Pomodoro Pro?',
          answer:
            'Pomodoro Pro er et valgfrit køb i appen på iPhone. Det låser op for Focus Protection, egne mærker (dine egne navne og farver) og Tag Insights (fokustid pr. mærke for uge og måned). Timeren, indbyggede mærker, Focus History og synkronisering er fortsat tilgængelige uden Pro.',
        },
        {
          question: 'Hvilke købsmuligheder er tilgængelige?',
          answer:
            'Pomodoro Pro tilbydes som et månedligt abonnement, et årligt abonnement eller et engangskøb med livstidsadgang. Abonnementer fornyes automatisk, medmindre du opsiger mindst 24 timer før udgangen af den aktuelle periode. Livstidsadgang betales én gang og er ikke et abonnement.',
        },
        {
          question: 'Hvor køber eller ser jeg Pomodoro Pro?',
          answer:
            'På iPhone skal du åbne Indstillinger → Pomodoro Pro eller trykke på beskyttelseschippen på Hjem. Du skal være logget ind. Pro følger din konto på alle de enheder, du logger ind på.',
        },
        {
          question: 'Hvordan gendanner jeg køb?',
          answer:
            'Brug Gendan manglende køb på betalingsskærmen eller under Indstillinger → Pomodoro Pro. Køb foretaget med den samme Apple-konto flyttes til den konto, du er logget ind på. Hvis intet findes, skal du bekræfte, at du bruger den Apple-konto, der købte Pro, og prøve igen, mens du er online.',
        },
      ],
    },
    purchases: {
      title: 'Abonnementer og køb',
      items: [
        {
          question: 'Hvordan administrerer eller opsiger jeg et abonnement?',
          answer:
            'Abonnementer faktureres af Apple. På iPhone skal du åbne Indstillinger → Pomodoro Pro → Administrer abonnement eller gå til Indstillinger → [dit navn] → Abonnementer og vælge appen. Opsig mindst 24 timer før fornyelse for at undgå den næste betaling. Sletning af appen eller din Pomodoro-konto opsiger ikke et abonnement.',
        },
        {
          question: 'Hvordan anmoder jeg om refusion?',
          answer:
            'Refusioner håndteres af Apple. Gå til reportaproblem.apple.com, log ind med den Apple-konto, der blev brugt til købet, find transaktionen, og indsend en anmodning om refusion. Vi kan ikke selv behandle refusioner fra App Store.',
        },
        {
          question: 'Hvad hvis et køb mislykkes, eller Pro ikke låses op?',
          answer:
            'Forbliv logget ind, kontrollér din netværksforbindelse, og prøv igen. Hvis betalingen afventer, f.eks. Spørg før køb, låses Pro op efter godkendelse. Hvis du allerede har betalt, skal du bruge Gendan manglende køb. Ved betalingsproblemer på et aktivt abonnement skal du opdatere din betalingsmetode i App Store-indstillingerne.',
        },
        {
          question: 'Hvad hvis jeg køber livstidsadgang, mens et abonnement er aktivt?',
          answer:
            'Livstidsadgang låser Pro op permanent, men et eksisterende abonnement opsiges ikke automatisk. Slå automatisk fornyelse fra i App Stores abonnementsindstillinger, så du ikke bliver opkrævet igen.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Hvad er Focus Protection?',
          answer:
            'Focus Protection er en Pomodoro Pro-funktion på iPhone. Den bruger Apples APIʼer til Screen Time til at blokere de apps, kategorier eller websteder, du vælger, mens en fokussession kører. Pauser blokeres aldrig. Når sessionen slutter, låses blokerede apps automatisk op.',
        },
        {
          question: 'Hvordan konfigurerer jeg den?',
          answer:
            'Når Pro er aktiv, skal du trykke på Focus Protection-chippen på Hjem eller åbne funktionen fra Indstillinger. Tillad adgang til Screen Time, når du bliver spurgt, vælg, hvad der skal blokeres, og slå derefter Focus Protection til. Start en fokussession for at anvende blokeringerne.',
        },
        {
          question: 'Hvordan slår jeg den fra eller låser apps op?',
          answer:
            'Åbn arket Focus Protection, og vælg Slå fra nu, eller slå funktionen fra. Når en session er slut, kan du også bruge Lås apps op på blokeringsskærmen. Hvis du vil fjerne appens adgang til Screen Time helt, skal du gå til iOS-indstillinger → Screen Time → Apps med adgang til Screen Time.',
        },
        {
          question: 'Hvad hvis Focus Protection ikke virker?',
          answer:
            'Bekræft, at Pro er aktiv, at adgang til Screen Time er tilladt, og at du har valgt apps eller kategorier, der skal blokeres. Focus Protection gælder kun under fokussessioner, ikke pauser. Hvis adgangen blev tilbagekaldt i systemets Indstillinger, skal du åbne appen og tillade adgang igen. En genstart af iPhone kan hjælpe efter en ændring af tilladelser.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Konto og anonymitet',
      items: [
        {
          question: 'Hvordan sletter jeg min konto?',
          answer:
            'Log ind, åbn Indstillinger → Konto → Slet konto, og bekræft. Din konto og synkroniserede Focus History slettes permanent fra vores aktive database. Dette kan ikke fortrydes. Sletning kræver en netværksforbindelse. Sletning af din konto opsiger ikke et App Store-abonnement — administrer det i App Store-indstillingerne.',
        },
        {
          question: 'Hvad påvirker sletning af kontoen?',
          answer:
            'Synkroniserede skydata for kontoen fjernes, Sign in with Apple-godkendelsen tilbagekaldes, når den er gemt, vores købsudbyder bliver bedt om at slette købsposten, der er knyttet til din konto, og kontoens data fjernes fra den enhed, hvor du sletter den. Lokale kopier på andre enheder kan ikke længere synkroniseres; fjern appen, eller ryd dem der om nødvendigt. Udbydernes sikkerhedskopier kan beholde slettede data i en begrænset gendannelsesperiode. Apple beholder sine egne App Store-transaktionsoplysninger.',
        },
        {
          question: 'Hvordan eksporterer jeg mine data?',
          answer:
            'Indstillinger → Konto → Eksportér mine data gemmer en JSON-fil med sessioner, daglige mål, synkroniserede indstillinger og kontoprofil. Lokal data, der endnu ikke er overført, kan også eksporteres fra loginskærmen.',
        },
        {
          question: 'Hvor finder jeg anonymitetspolitikken?',
          answer:
            'Åbn anonymitetspolitikken fra produktets websted, eller brug anonymitetslinket på dette websteds produktsider.',
        },
      ],
    },
    requirements: {
      title: 'Krav',
      body: 'iPhone: iOS 17 eller nyere. Mac: macOS 14.6 eller nyere. Pomodoro Pro-køb og Focus Protection er tilgængelige på iPhone.',
    },
    contact: {
      title: 'Kontakt',
      body: 'For hjælp, feedback eller fejlrapporter:',
    },
    privacyPolicyLink: 'Anonymitetspolitik',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Anonymitetspolitik`,
    metaDescription: `Anonymitetspolitik for ${PULSE_APP_NAME}, der dækker login med Apple og Google, synkronisering i skyen, Pomodoro Pro-køb via RevenueCat, Focus Protection, analyse og sletning af konto på Mac og iPhone.`,
    title: 'Anonymitetspolitik',
    subtitle: `${PULSE_APP_NAME} — Pomodoro-timer til Mac og iPhone`,
    lastUpdated: 'Senest opdateret: 26. oktober 2026',
    summary: {
      title: 'Oversigt',
      body: `Når du logger ind med Apple eller Google, holder din konto din Focus History, dine daglige mål og timerindstillinger synkroniseret mellem Mac og iPhone. Vi gemmer kun det, appen har brug for til dette: din e-mailadresse, en kontoidentifikator og de fokusdata, du opretter. Vi sælger dem aldrig, bruger dem aldrig til annoncering og deler dem aldrig med vores analyseudbyder. Hvis du køber Pomodoro Pro på iPhone, gemmer vores købsudbyder RevenueCat din købshistorik knyttet til din konto, så Pro fungerer på alle enheder, du logger ind på. Focus Protections appvalg forlader aldrig din iPhone. Du kan når som helst eksportere dine data eller slette din konto fra Indstillinger. Separat kan appen sende anonyme, privatlivsbevarende brugsdata, så vi kan forbedre fokusforløbene.`,
    },
    localData: {
      title: 'Data gemt på din enhed',
      body: 'Dine timerindstillinger, sessionspræferencer og din Focus History gemmes lokalt på din Mac eller iPhone med systemets almindelige lager, så timeren fortsat fungerer offline. Hver konto, der er logget ind på en enhed, har sit eget separate lokale lager. Din loginsession gemmes i systemets nøglering. Sprog, udseende, Åbn ved login, notifikationer og motivationspåmindelser forbliver på hver enhed og synkroniseres ikke. Selve indholdet af Focus Historyken uploades ikke til vores analyseudbyder.',
      migrationSafety:
        'Når du første gang logger ind på en enhed, der allerede har Focus History, spørger appen, før historikken flyttes til din konto. Indtil flytningen er bekræftet på vores servere plus 90 dage, beholder appen den tidligere lokale kopi og en lokal sikkerhedskopifil på enheden som sikkerhedsnet og fjerner dem derefter automatisk.',
    },
    accountAndSync: {
      title: 'Din konto og synkroniserede data',
      intro: 'Hvis du logger ind, behandler vi:',
      items: [
        'Kontaktoplysninger: den e-mailadresse, der deles af Sign in with Apple (som kan være en privat videresendelsesadresse via Hide My Email) eller Google. Vi anmoder ikke om dit navn.',
        'Identifikatorer: et konto-id, der oprettes ved login, og et tilfældigt id for hver installation, som kun bruges til synkronisering og til at identificere, hvilken enhed der foretog en ændring.',
        'Fokusdata: gennemførte og slettede fokus- og pausesessioner (tidspunkter, varigheder, lokal dag og tidszone samt det valgte mærke), mærker du opretter (navn og farve), daglige mål, din bedste stime og synkroniserede indstillinger (sessionslængder, dagligt mål, lyd, animationer, afslutningslyd og fejringsdyr).',
      ],
      closing:
        'Disse data bruges kun til at levere synkronisering, historik og kontofunktioner. De er knyttet til din konto, bruges ikke til sporing og deles ikke med andre tredjeparter end databehandlerne nedenfor.',
    },
    processors: {
      title: 'Databehandlere og lagringssted',
      bodyBeforeSupabase: 'Konto- og synkroniseringsdata gemmes hos',
      bodyAfterSupabase: '(database og godkendelse) i Den Europæiske Union. Login håndteres af',
      orWord: 'eller',
      bodyAfterProviders: ', afhængigt af den valgte mulighed. Pomodoro Pro-køb administreres med',
      bodyAfterRevenueCat:
        '(se Køb nedenfor). Data krypteres under overførsel, og adgang er begrænset, så hver konto kun kan læse sine egne data.',
    },
    purchases: {
      title: 'Køb (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro sælges gennem App Store; Apple håndterer betalingen, og vi ser aldrig dine betalingsoplysninger. For at låse Pro op på alle de enheder, du logger ind på, deler appen dit konto-id med',
      bodyAfterRevenueCat:
        ', som gemmer din købshistorik (købte produkter, købs- og fornyelsesdatoer samt abonnementsstatus) knyttet til dette id. Disse data bruges kun til at give og gendanne Pro-adgang, bruges ikke til sporing og deles ikke med vores analyseudbyder. Pro kræver en indlogget konto; intet sendes til RevenueCat, før du logger ind.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection bruger Apples Screen Time-framework (Family Controls) til at blokere de apps, kategorier og websteder, du vælger, mens en fokussession kører. Apple giver kun appen uigennemsigtige tokens for dine valg: Vi kan ikke se, hvilke apps eller websteder du har valgt, hvordan du bruger dem eller andre Screen Time-data. Dine valg forbliver på den pågældende iPhone, uploades eller synkroniseres aldrig og sendes ikke til vores analyseudbyder. Du kan når som helst slå Focus Protection fra i appen eller fjerne appens adgang i Indstillinger → Screen Time → Apps med adgang til Screen Time.',
    },
    retention: {
      title: 'Opbevaring, sikkerhedskopier og sletning',
      items: [
        'Dine synkroniserede data opbevares, så længe din konto eksisterer.',
        'Slet konto (Indstillinger → Konto → Slet konto) sletter permanent din konto og alle synkroniserede data fra vores aktive database, tilbagekalder appens Sign in with Apple-godkendelse, når den er gemt, beder RevenueCat om at slette købsposten knyttet til din konto og fjerner kontoens data fra den enhed, hvor du sletter den. Lokale kopier på dine andre enheder kan ikke længere synkroniseres og bliver der, indtil du sletter appen på de enheder eller fjerner dem fra loginskærmen, når denne mulighed tilbydes.',
        'Vores databaseudbyder opbevarer daglige sikkerhedskopier i 7 dage. Slettede data kan forblive i disse kopier, indtil de udløber; kopierne bruges kun til katastrofegendannelse. Vi kan også opbevare en krypteret ugentlig sikkerhedskopi i op til 90 dage til samme formål.',
        'Sletning af din konto opsiger ikke et App Store-abonnement; administrer eller opsig det i indstillingerne for din Apple-konto. Apple beholder sin egen registrering af dine App Store-transaktioner.',
        'At logge ud sletter intet. Ændringer, der endnu ikke er synkroniseret, forbliver på enheden, indtil den samme konto logger ind igen.',
        'Analyseposter håndteres af TelemetryDeck i henhold til deres opbevaringspraksis og bruges ikke til at gendanne din Focus History.',
      ],
    },
    export: {
      title: 'Eksport',
      body: 'Indstillinger → Konto → Eksportér mine data gemmer en JSON-fil med dine sessioner, daglige mål, synkroniserede indstillinger og din kontoprofil. Data, der endnu ikke er flyttet til en konto, kan også eksporteres fra loginskærmen.',
    },
    analytics: {
      title: 'Analyse',
      introBeforeLink: 'Vi bruger',
      introAfterLink:
        ', en analyse-tjeneste med fokus på anonymitet, til at forstå, hvordan appen bruges (f.eks. startede eller gennemførte fokus- eller pausesessioner, ændringer af daglige mål og indstillinger, resultater af notifikationstilladelser, hændelser for motivationspåmindelser, og om introduktionen blev afsluttet). Signalerne omfatter ikke fritekst, navne, e-mailadresser eller indholdet af din Focus History.',
      identifier:
        'TelemetryDeck identificerer installationer med en hashværdi af en enhedsspecifik identifikator og kan vedhæfte ikke-personlige enhedsmetadata såsom model, OS-version og landestandard. Disse data bruges kun til analyse, knyttes ikke til din identitet af os og bruges ikke til sporing på tværs af andre virksomheders apps eller websteder.',
      learnMore: 'Læs mere:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store-opdateringer',
      body: 'Hvis du bruger »Søg efter opdateringer« i Indstillinger, kan appen kontakte Apple for at se, om en nyere version er tilgængelig i App Store.',
    },
    launchAtLogin: {
      title: 'Åbn ved login (Mac)',
      body: 'Hvis du aktiverer Åbn ved login i Indstillinger på Mac, bruger appen macOS-systemets APIʼer til at registrere sig som et loginemne. Du styrer denne indstilling og kan deaktivere den når som helst.',
    },
    notifications: {
      title: 'Notifikationer og Live Activities (iPhone)',
      body: 'På iPhone hjælper valgfrie lokale notifikationer, motivationspåmindelser og Live Activities dig med at se, hvornår en session slutter, eller vende roligt tilbage til fokus. Der anmodes kun om tilladelse, når du vælger at aktivere disse funktioner. Notifikationernes indhold forbliver på din enhed.',
    },
    whatWeDoNotDo: {
      title: 'Det gør vi ikke',
      items: [
        'Ingen annoncenetværk',
        'Intet salg af personoplysninger',
        'Ingen adgang til dine kontakter, billeder, præcise placering, kamera eller mikrofon til analyse',
      ],
    },
    children: {
      title: 'Børn',
      body: `${PULSE_APP_NAME} indsamler ikke bevidst personoplysninger fra børn ud over, hvad en konto skal bruge til synkronisering som beskrevet ovenfor. Analysesignaler er anonyme og indeholder ikke personligt indhold.`,
    },
    changes: {
      title: 'Ændringer',
      body: 'Hvis denne politik ændres, offentliggøres den opdaterede version på denne URL.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Spørgsmål om denne politik:',
    },
  },
}
