import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const nbMessages: PulseMessages = {
  languageLabel: 'Sidens språk',
  video: {
    ariaLabel: `${PULSE_APP_NAME} produktgjennomgang`,
    playLabel: 'Spill gjennomgang',
    unsupported: 'Nettleseren din støtter ikke innebygd video.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Fokustimer for iPhone og Mac`,
    metaDescription: `${PULSE_APP_NAME} er en rolig Pomodoro-timer for iPhone og Mac med Focus History, Daily Focus Goals, Apple og Google pålogging, og offline-første synkronisering på tvers av enhetene dine.`,
    heroImageAlt: `${PULSE_APP_NAME} fokustimer og ukentlig historieoversikt`,
    backToProjects: 'Tilbake til prosjekter',
    availableOnAppStore: 'Tilgjengelig på App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Fokus timer for iPhone og Mac',
    tagline: 'En skånsom Pomodoro-timer som hjelper deg med å fokusere — på iPhone og i menylinjen på Mac.',
    description: `Start en Fokus-økt, ta en pause og ha historikken med deg. Logg på med Apple eller Google, slik at Daily Focus Goals, Focus History og synkroniserte innstillinger følger kontoen din på iPhone og Mac – samtidig som tidtakeren fortsatt fungerer uten nett.`,
    downloadCta: 'Last ned på App Store',
    watchDemo: 'Se den i aksjon',
    supportCta: 'Støtte',
    stats: {
      platformLabel: 'Plattformer',
      platformValue: 'iPhone og Mac',
      languagesLabel: 'Språk',
      languagesValue: '48 språk',
      dataLabel: 'Synkroniser',
      dataValue: 'Offline-først',
      builtWithLabel: 'Bygget med',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'En roligere måte å fokusere på',
      title: 'Tidtakeren er der når du trenger den – og borte når du ikke gjør det.',
      description: `På Mac åpner du ${PULSE_APP_NAME} fra menylinjen, velger en økt og lukker popover-vinduet. På iPhone, start Fokus hjemmefra og fortsett med Live Activities på støttede enheter. Timeren fortsetter å fungere mens du gjør det.`,
      caption:
        'Fokus og pausetidtakere, Daily Focus Goals, Focus History, streksporing, 48-språklig lokalisering og valgfrie fullføringsvarsler.',
    },
    rhythm: {
      eyebrow: 'En rytme du kontrollerer',
      title: 'Fokus, pause, gjenopprett, gjenta.',
      description: `${PULSE_APP_NAME} foreslår hva som kommer neste gang, men starter aldri en økt for deg. Hver varighet kan justeres for å passe dagen din.`,
    },
    featureShowcases: [
      {
        title: 'Fokus',
        badge: '1–120 min',
        description:
          'Nedtellingen går stille mens du jobber. Sett på pause, tilbakestill eller hopp over - du beholder kontrollen på iPhone og Mac.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} fokusøkt kjører med pausekontroller og nedtelling`,
      },
      {
        title: 'Menylinje',
        badge: 'Mac',
        description:
          'På Mac, vis eller skjul den gjenværende tiden i menylinjen. Statuselementet med fast bredde forblir på plass uten å flytte popover-vinduet, opptil 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME}-nedtelling vises i macOS-menylinjen`,
      },
      {
        title: 'Tilpasning',
        badge: 'Reglene dine',
        description:
          'Fleksibel varighet, Daily Focus Goals, kompletteringslyder og animasjoner, 48 brukergrensesnittspråk og utseendepreferanser.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME}-innstillinger for varighet, fullføringsvarsler, språk og mål`,
      },
    ],
    history: {
      eyebrow: 'Fremgang uten press',
      title: 'Se arbeidet legge seg opp.',
      description:
        'Åpne Focus History for å se totaler og streker. Når du er logget på, kan historien synkroniseres på tvers av iPhone og Mac, slik at fremdriften følger deg.',
      items: ['Total fokustid', 'Antall fullførte økter', 'Nåværende rekke', 'Beste rekke', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} ukentlig fokushistorikk med økttellinger, fokuserte timer og strek`,
    },
    feedback: {
      eyebrow: 'Mild tilbakemelding, på din måte',
      title: 'Få etterbehandling til å føles givende.',
      description: `Velg mellom seks rolige avslutningslyder og seks dyrefeiringer, eller slå av én av dem. ${PULSE_APP_NAME} viser riktig melding når en Fokus-, Kort pause- eller Lang pause-økt avsluttes.`,
      items: [
        'Øktbevisst fullføringstittel og undertittel',
        'UI på 48 språk med standard systemspråk',
        'Språk- og utseendepreferanser på hver enhet',
        'Valgfrie motivasjonspåminnelser på iPhone',
      ],
      settingsImageAlt: `${PULSE_APP_NAME}-innstillinger for varighet, språk, fullføringslyder og mål`,
      celebrationImageAlt: `${PULSE_APP_NAME} kaninfeiringsanimasjon når en økt er fullført`,
      soundNames: ['Skogsfugler', 'Krystallklokke', 'Mild Marimba', 'Regndråper', 'Myk klokke', 'Zen Gong'],
      animalNames: ['Ape', 'Koala', 'Katt', 'Rev', 'Panda', 'Kanin'],
    },
    native: {
      eyebrow: 'Innfødt av design',
      title: 'Bygget for å føle deg hjemme på Apple-enheter.',
      description: `SwiftUI, AppKit og systemkonvensjoner holder ${PULSE_APP_NAME} rask og kjent – ​​med VoiceOver-etiketter og Reduce Motion-støtte hele veien.`,
      features: [
        {
          title: 'Mac menylinje & iPhone Hjem',
          description: 'En rolig menylinjefølge på Mac, og en fokusert hjemmeopplevelse på iPhone.',
        },
        {
          title: 'Holder seg nøyaktig',
          description:
            'Økter forblir korrekte på tvers av søvn, våkne og relansering, med historikk registrert på den faktiske fristen.',
        },
        {
          title: 'Offline-første synkronisering',
          description:
            'Fortsett å fokusere uten en forbindelse. Når du er online igjen, synkroniseres påloggede endringer med kontoen din.',
        },
        {
          title: 'Snakker språket ditt',
          description:
            'Fullt brukergrensesnitt på 48 språk med standard systemspråk og manuell overstyring i Innstillinger.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privat av design',
      title: 'Ditt fokus forblir ditt.',
      description: `${PULSE_APP_NAME} bruker en konto slik at historikken kan synkroniseres mellom enhetene dine. Vi lagrer kun det synkroniseringen trenger, selger aldri dataene dine og holder analyser atskilt fra fokushistorikken din.`,
      items: [
        'Logg på med Apple eller Google',
        'Offline-først fokus på hver enhet',
        'Skysynkronisering for historikk og synkroniserte preferanser',
        'Ingen annonsenettverk',
        'Slett kontoen din når som helst i Innstillinger',
      ],
    },
    closing: {
      title: 'Gjør plass til fokusert arbeid.',
      description: `Skaff deg ${PULSE_APP_NAME} på App Store for iPhone og Mac, eller les personvernreglene og støttesiden hvis du trenger hjelp.`,
      getSupport: 'Få støtte',
      privacy: 'Privatliv',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME}-støtte`,
    metaDescription: `Støtte, FAQ og kontohjelp for ${PULSE_APP_NAME} på iPhone og Mac – inkludert Pomodoro Pro, kjøp, Focus Protection, pålogging, synkronisering og sletting av kontoer.`,
    title: `${PULSE_APP_NAME}-støtte`,
    intro: `${PULSE_APP_NAME} er en rolig Pomodoro-timer for iPhone og Mac. Logg på med Apple eller Google for å synkronisere Focus History mellom enhetene dine. På iPhone låser valgfri Pomodoro Pro opp Focus Protection, egendefinerte tagger og Tag Insights.`,
    gettingStarted: {
      title: 'Komme i gang',
      items: [
        {
          question: 'Hvordan starter jeg en Fokus-økt?',
          answer:
            'På Mac, klikk på appikonet i menylinjen, velg Fokus, Kort pause eller Lang pause, og trykk deretter på Start. På iPhone åpner du appen, velger en økt på Hjem og trykker på Start. Du kan forlate appen mens tidtakeren går.',
        },
        {
          question: 'Hvordan endrer jeg Fokus og pausevarighet?',
          answer:
            'Åpne Innstillinger og juster lengdene på Fokus, Kort pause og Lang pause. Du kan også velge en forhåndsinnstilt rytme, og deretter finjustere minuttene.',
        },
        {
          question: 'Hvordan konfigurerer jeg Daily Focus Goals?',
          answer:
            'I Innstillinger angir du hvor mange Fokus-økter du vil ha hver dag. Fremgang vises på Hjem og i Focus History.',
        },
        {
          question: 'Hvordan ser jeg Focus History?',
          answer:
            'Åpne Focus History fra appen (på Mac, fra popover- eller statusmenyen). Du vil se totaler, streker og ukentlig fremgang.',
        },
        {
          question: 'Hvordan endrer jeg språk og utseende?',
          answer:
            'I Innstillinger velger du Språk (System eller et støttet språk) og Utseende (System, Lys eller Mørk). Disse preferansene forblir på hver enhet og synkroniseres ikke.',
        },
      ],
    },
    accounts: {
      title: 'Kontoer',
      items: [
        {
          question: 'Hvorfor kreves pålogging?',
          answer:
            'En konto lar Focus History, Daily Focus Goals og synkroniserte preferanser forbli hos deg på tvers av iPhone og Mac. Nye installasjoner ber deg logge på før du bruker tidtakeren. Enheter som oppgraderer fra eldre versjoner kan holde lokal historikk brukbar til du logger på. Pomodoro Pro-kjøp forblir også med den påloggede kontoen din.',
        },
        {
          question: 'Hvordan logger jeg på med Apple eller Google?',
          answer:
            'På påloggingsskjermen velger du Fortsett med Apple eller Fortsett med Google og fullfører innloggingen hos leverandøren. Apple kan tilby Skjul e-postadressen min.',
        },
        {
          question: 'Hvordan logger jeg av?',
          answer:
            'Åpne Innstillinger → Konto → Logg av. Hvis noen endringer ikke er synkronisert ennå, kan appen be deg om å synkronisere først eller logge av uansett. Avlogging sletter ikke kontoen din.',
        },
        {
          question: 'Hvordan logger jeg på igjen?',
          answer:
            'Bruk samme Apple- eller Google-metode på påloggingsskjermen. Skyloggen din gjenopprettes til den kontoen på enheten.',
        },
        {
          question: 'Hva skjer hvis jeg bruker en annen konto?',
          answer:
            'Hver konto har sin egen historie. Å logge på en annen konto slår ikke sammen urelaterte historier. Velg nøye før du bekrefter et historiekrav på en enhet som allerede har lokale økter.',
        },
        {
          question: 'Kan jeg koble Apple og Google til samme konto?',
          answer:
            'Ja. I Innstillinger → Konto kan du koble til den andre påloggingsmetoden når den ikke allerede brukes av en annen konto.',
        },
      ],
    },
    cloudSync: {
      title: 'Skysynkronisering',
      items: [
        {
          question: 'Hva synkroniseres mellom enheter?',
          answer:
            'Fokus og pauseøkthistorikk (inkludert taggen du valgte), taggene du oppretter, Daglig fokusmål-poster, strekrelaterte kontodata og synkroniserte preferanser som øktlengder, daglig mål, lyd, animasjoner, fullføringslyd og feiringsdyr.',
        },
        {
          question: 'Hva skjer uten internett?',
          answer:
            'Etter at du er logget på, kan du fortsette å bruke tidtakeren offline. Nye økter og endringer forblir på enheten til en tilkobling er tilgjengelig.',
        },
        {
          question: 'Hva skjer når jeg er tilbake på nett?',
          answer:
            'Appen synkroniserer ventende endringer med kontoen din. Synkronisering er offline-først og til slutt konsistent - det er ikke øyeblikkelig sanntidssamarbeid.',
        },
        {
          question: 'Hvordan bruker jeg samme konto på iPhone og Mac?',
          answer:
            'Installer appen på begge enhetene og logg på med samme Apple- eller Google-konto. Etter at gjenopprettingen er ferdig, kan Focus History vises på begge.',
        },
        {
          question: 'Hva om historien mangler?',
          answer:
            'Bekreft at du er logget på samme konto, vent til gjenoppretting/synkronisering er ferdig, og sjekk Focus History igjen. Hvis du logget på en annen konto, vil den kontoen vise sin egen historikk.',
        },
      ],
    },
    migration: {
      title: 'Oppgraderer fra en eldre versjon',
      items: [
        {
          question: 'Hva skjer med min eksisterende lokalhistorie?',
          answer:
            'Eksisterende lokalhistorie slettes ikke stille. Etter pålogging spør appen før den legger til loggen på kontoen din.',
        },
        {
          question: 'Hvordan skal jeg kreve min historie?',
          answer:
            'Logg på kontoen som skal eie loggen, gå gjennom skjermbildet Legg til historikk, og velg deretter Legg til i denne kontoen. Bruk en annen konto hvis den viste kontoen er feil. Økter kan ikke flyttes til en annen konto senere.',
        },
        {
          question: 'Hva hvis enhets- og kontoinnstillingene er forskjellige?',
          answer:
            'Appen kan spørre om du vil beholde denne enhetens innstillinger eller bruke kontoinnstillinger. Språk, utseende, varsler og motivasjonspåminnelser forblir enhetslokale.',
        },
      ],
    },
    notifications: {
      title: 'Varsler',
      items: [
        {
          question: 'Hvordan aktiverer jeg varsler på iPhone?',
          answer:
            'Åpne Innstillinger → Varsler og velg Aktiver, eller åpne systeminnstillinger hvis tillatelse tidligere ble nektet.',
        },
        {
          question: 'Hvordan fungerer motivasjonspåminnelser?',
          answer:
            'På iPhone åpner du Innstillinger → Motivasjonspåminnelser og slår dem på etter at varsler er tillatt. Du kan sette dem på pause eller sette stille timer. De er valgfrie og av som standard.',
        },
        {
          question: 'Hva om varsler er deaktivert?',
          answer:
            'Varsler på slutten av økten og motivasjonspåminnelser trenger varslingstillatelse. Bruk Innstillinger → Varsler → Åpne Innstillinger for å slå dem på i iOS-innstillinger.',
        },
        {
          question: 'Hvordan fungerer Live Activities?',
          answer:
            'På støttede iPhone-er kan en valgfri Live Activity vise en aktiv økt på låseskjermen og Dynamic Island. Tillatelse er forespurt når du aktiverer relaterte funksjoner.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Hva er Pomodoro Pro?',
          answer:
            'Pomodoro Pro er et valgfritt kjøp i appen på iPhone. Den låser opp Focus Protection, egendefinerte tagger (dine egne navn og farger), og Tag Insights (uke og måned fokus tid for tag). Tidtakeren, innebygde tagger, Focus History og synkronisering forblir tilgjengelig uten Pro.',
        },
        {
          question: 'Hvilke kjøpsalternativer er tilgjengelige?',
          answer:
            'Pomodoro Pro tilbys som et månedlig abonnement, et årlig (årlig) abonnement eller et livstids engangskjøp. Abonnementer fornyes automatisk med mindre du sier opp minst 24 timer før slutten av gjeldende periode. Lifetime belastes én gang og er ikke et abonnement.',
        },
        {
          question: 'Hvor kjøper eller ser jeg Pomodoro Pro?',
          answer:
            'På iPhone, åpne Innstillinger → Pomodoro Pro, eller trykk på beskyttelsesbrikken på Hjem. Du må være pålogget. Pro forblir med kontoen din på hver enhet du logger på.',
        },
        {
          question: 'Hvordan gjenoppretter jeg kjøp?',
          answer:
            'Bruk Gjenopprett manglende kjøp på betalingsmuren eller i Innstillinger → Pomodoro Pro. Kjøp som er gjort med samme Apple-konto, flyttes til kontoen du er logget på. Hvis ingenting blir funnet, kontrollerer du at du bruker Apple-kontoen som kjøpte Pro, og prøver igjen mens du er tilkoblet.',
        },
      ],
    },
    purchases: {
      title: 'Abonnementer og kjøp',
      items: [
        {
          question: 'Hvordan administrerer eller kansellerer jeg et abonnement?',
          answer:
            'Abonnementer faktureres av Apple. På iPhone, åpne Innstillinger → Pomodoro Pro → Administrer abonnement, eller gå til Innstillinger → [navnet ditt] → Abonnementer og velg appen. Avbryt minst 24 timer før fornyelse for å unngå neste belastning. Sletting av appen eller Pomodoro-kontoen din kansellerer ikke et abonnement.',
        },
        {
          question: 'Hvordan ber jeg om refusjon?',
          answer:
            'Refusjoner håndteres av Apple. Gå til reportaproblem.apple.com, logg på med Apple-kontoen som ble brukt til kjøpet, finn transaksjonen og send inn en refusjonsforespørsel. Vi kan ikke behandle App Store-refusjoner selv.',
        },
        {
          question: 'Hva hvis et kjøp mislykkes eller Pro ikke låses opp?',
          answer:
            'Forbli pålogget, sjekk nettverkstilkoblingen og prøv igjen. Hvis betaling venter (for eksempel Ask to Buy), låses Pro opp etter godkjenning. Hvis du allerede har betalt, bruk Gjenopprett kjøp. For betalingsproblemer på et aktivt abonnement, oppdater betalingsmåten din i App Store-innstillingene.',
        },
        {
          question: 'Hva om jeg kjøper Lifetime mens et abonnement er aktivt?',
          answer:
            'Lifetime låser opp Pro permanent, men et eksisterende abonnement kanselleres ikke automatisk. Slå av automatisk fornyelse i App Store abonnementsinnstillinger slik at du ikke blir belastet igjen.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Hva er Focus Protection?',
          answer:
            'Focus Protection er en Pomodoro Pro-funksjon på iPhone. Den bruker Apples Screen Time APIer for å blokkere appene, kategoriene eller nettstedene du velger mens en Fokus-økt kjører. Pauser blir aldri blokkert. Når økten avsluttes, låses blokkerte apper opp automatisk.',
        },
        {
          question: 'Hvordan setter jeg det opp?',
          answer:
            'Med Pro aktiv, trykk på Focus Protection-brikken på Hjem (eller åpne den fra Innstillinger). Gi Screen Time tilgang når du blir bedt om det, velg hva du vil blokkere, og slå deretter Focus Protection på. Start en Fokus-økt for å bruke skjoldene.',
        },
        {
          question: 'Hvordan slår jeg den av eller låser opp apper?',
          answer:
            'Åpne Focus Protection-arket og velg Slå av nå, eller slå av funksjonen. Etter at en økt er avsluttet kan du også bruke Lås opp apper på skjoldskjermen. For å fjerne appens Screen Time-tilgang helt, gå til iOS-innstillinger → Screen Time → Apper med Screen Time-tilgang.',
        },
        {
          question: 'Hva hvis Focus Protection ikke fungerer?',
          answer:
            'Bekreft at Pro er aktiv, Screen Time-tilgang er tillatt, og du har valgt apper eller kategorier som skal blokkeres. Focus Protection gjelder kun under Fokus økter, ikke pauser. Hvis tilgangen ble tilbakekalt i systeminnstillingene, åpner du appen og gir tilgang igjen. Å starte iPhone på nytt kan hjelpe etter en tillatelsesendring.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Konto og personvern',
      items: [
        {
          question: 'Hvordan sletter jeg kontoen min?',
          answer:
            'Logg på, åpne Innstillinger → Konto → Slett konto, og bekreft. Din konto og synkroniserte fokushistorikk slettes permanent fra vår direkte database. Dette kan ikke angres. Sletting krever en nettverkstilkobling. Å slette kontoen din kansellerer ikke et App Store-abonnement – ​​administrer det i App Store-innstillingene.',
        },
        {
          question: 'Hva påvirker sletting av konto?',
          answer:
            'Synkroniserte skydata for kontoen fjernes, autorisasjonen for Apple-pålogging tilbakekalles når den er lagret, kjøpsleverandøren vår blir bedt om å slette kjøpsoppføringen som er knyttet til kontoen, og kontodataene fjernes fra enheten der du sletter dem. Lokale kopier på andre enheter kan ikke lenger synkroniseres; fjern appen eller slett kopiene der om nødvendig. Leverandørens sikkerhetskopier kan beholde slettede data i en begrenset gjenopprettingsperiode. Apple beholder sine egne oppføringer over App Store-transaksjoner.',
        },
        {
          question: 'Hvordan eksporterer jeg dataene mine?',
          answer:
            'Innstillinger → Konto → Eksporter mine data lagrer en JSON-fil med økter, daglige mål, synkroniserte innstillinger og kontoprofil. Lokale data som ikke er gjort krav på, kan også eksporteres fra påloggingsskjermen.',
        },
        {
          question: 'Hvor er personvernreglene?',
          answer:
            'Åpne personvernreglene fra produktnettstedet, eller bruk personvernlenken på dette nettstedets produktsider.',
        },
      ],
    },
    requirements: {
      title: 'Krav',
      body: 'iPhone: iOS 17 eller nyere. Mac: macOS 14.6 eller nyere. Pomodoro Pro-kjøp og Focus Protection er tilgjengelig på iPhone.',
    },
    contact: {
      title: 'Kontakt',
      body: 'For hjelp, tilbakemeldinger eller feilrapporter:',
    },
    privacyPolicyLink: 'Personvernerklæring',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Personvernerklæring`,
    metaDescription: `Personvernregler for ${PULSE_APP_NAME}, som dekker pålogging med Apple og Google, skysynkronisering, Pomodoro Pro-kjøp via RevenueCat, Focus Protection, analyse og sletting av konto på Mac og iPhone.`,
    title: 'Personvernerklæring',
    subtitle: `${PULSE_APP_NAME} — Pomodoro-timer for Mac og iPhone`,
    lastUpdated: 'Sist oppdatert: 26. oktober 2026',
    summary: {
      title: 'Sammendrag',
      body: `Når du logger på med Apple eller Google, holder kontoen din fokushistorikk, daglige mål og tidtakerinnstillinger synkronisert mellom Mac og iPhone. Vi lagrer kun det appen trenger for det: e-postadressen din, en kontoidentifikator og fokusdataene du oppretter. Vi selger den aldri, bruker den aldri til annonsering og deler den aldri med vår analyseleverandør. Hvis du kjøper Pomodoro Pro på iPhone, holder kjøpsleverandøren vår RevenueCat kjøpshistorikken din knyttet til kontoen din slik at Pro fungerer på hver enhet du logger på. Focus Protections appvalg forlater aldri din iPhone. Du kan eksportere dataene dine eller slette kontoen din når som helst fra Innstillinger. Separat kan appen sende anonym, personvernbevarende bruksanalyse slik at vi kan forbedre fokusflytene.`,
    },
    localData: {
      title: 'Data lagret på enheten din',
      body: 'Tidtakerinnstillingene, øktpreferansene og fokushistorikken lagres lokalt på Mac eller iPhone ved bruk av standard systemlagring, slik at tidtakeren fortsetter å fungere offline. Hver konto som er logget på en enhet, har sin egen lokale butikk. Påloggingsøkten din beholdes i systemets nøkkelring. Innstillinger for språk, utseende, Start ved pålogging, varsling og motivasjonspåminnelse forblir på hver enhet og synkroniseres ikke. Fokus historieinnhold i seg selv lastes ikke opp til vår analyseleverandør.',
      migrationSafety:
        'Når du først logger på en enhet som allerede har fokushistorikk, spør appen før den flyttes til kontoen din. Inntil flyttingen er bekreftet på våre servere, pluss 90 dager, beholder appen den forrige lokale kopien og en lokal sikkerhetskopi på enheten som et sikkerhetsnett, og fjerner dem deretter automatisk.',
    },
    accountAndSync: {
      title: 'Din konto og synkroniserte data',
      intro: 'Hvis du logger på, behandler vi:',
      items: [
        'Kontaktinformasjon: e-postadressen som deles via Apple-pålogging (som kan være en privat reléadresse via Skjul e-postadressen min) eller Google. Vi ber ikke om navnet ditt.',
        'Identifikatorer: en konto-ID opprettet ved pålogging, og en tilfeldig ID for hver installasjon, som kun brukes til å synkronisere og identifisere hvilken enhet som har gjort en endring.',
        'Fokus-data: fullførte og slettede fokus- og pauseøkter (tider, varigheter, lokal dag og tidssone, og taggen du valgte), taggene du oppretter (navn og farge), daglige mål, din beste rekke og de synkroniserte innstillingene (sesjonslengder, daglig mål, lyd, animasjoner, fullføringslyd, feiringsdyr).',
      ],
      closing:
        'Disse dataene brukes kun til å gi synkronisering, historikk og kontofunksjoner. Den er knyttet til kontoen din, brukes ikke til sporing og deles ikke med andre tredjeparter enn prosessorene nedenfor.',
    },
    processors: {
      title: 'Prosessorer og lagringssted',
      bodyBeforeSupabase: 'Konto- og synkroniseringsdata lagres med',
      bodyAfterSupabase:
        '(database og autentisering) i EU. Innlogging håndteres av',
      orWord: 'eller',
      bodyAfterProviders:
        ', avhengig av alternativet du velger. Pomodoro Pro kjøp administreres med',
      bodyAfterRevenueCat:
        '(se Kjøp nedenfor). Data er kryptert under overføring, og tilgangen er begrenset slik at hver konto kun kan lese sine egne data.',
    },
    purchases: {
      title: 'Kjøp (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro selges gjennom App Store; Apple håndterer betaling, og vi ser aldri betalingsopplysningene dine. For å låse opp Pro på hver enhet du logger på, deler appen din konto-ID med',
      bodyAfterRevenueCat:
        ', som holder kjøpshistorikken din (kjøpte produkter, kjøps- og fornyelsesdatoer og abonnementsstatus) knyttet til den ID-en. Disse dataene brukes kun til å gi og gjenopprette Pro-tilgang, brukes ikke til sporing og deles ikke med vår analyseleverandør. Pro krever en pålogget konto; ingenting sendes til RevenueCat før du logger på.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection bruker Apples Screen Time-rammeverk (Family Controls) for å blokkere appene, kategoriene og nettstedene du velger mens en fokusøkt kjører. Apple gir appen kun ugjennomsiktige tokens for dine valg: vi kan ikke se hvilke apper eller nettsteder du har valgt, hvordan du bruker dem, eller andre Screen Time-data. Valgene dine forblir på iPhone, blir aldri lastet opp eller synkronisert, og sendes ikke til vår analyseleverandør. Du kan slå av Focus Protection i appen når som helst, eller fjerne appens tilgang i Innstillinger → Screen Time → Apper med Screen Time Access.',
    },
    retention: {
      title: 'Oppbevaring, sikkerhetskopiering og sletting',
      items: [
        'Dine synkroniserte data lagres så lenge kontoen din eksisterer.',
        'Slett konto (Innstillinger → Konto → Slett konto) sletter kontoen din og alle synkroniserte data permanent fra den aktive databasen vår, tilbakekaller appens autorisasjon for Apple-pålogging når den er lagret, ber RevenueCat om å slette kjøpsoppføringen som er knyttet til kontoen, og fjerner kontodataene fra enheten der du utfører slettingen. Lokale kopier på andre enheter kan ikke lenger synkroniseres og blir liggende der til du sletter appen på disse enhetene eller fjerner kopiene fra påloggingsskjermen når dette alternativet tilbys.',
        'Vår databaseleverandør holder daglige sikkerhetskopier i 7 dager. Slettede data kan forbli i disse sikkerhetskopiene til de utløper; sikkerhetskopier brukes kun til katastrofegjenoppretting. Vi kan også beholde en kryptert ukentlig sikkerhetskopi i opptil 90 dager for samme formål.',
        'Sletting av kontoen din avslutter ikke et App Store-abonnement. Administrer eller avslutt det i innstillingene for Apple-kontoen. Apple beholder sin egen oversikt over App Store-transaksjonene dine.',
        'Avlogging sletter ingenting. Endringer som ikke er synkronisert ennå, forblir på enheten til den samme kontoen logger på igjen.',
        'Analytics-poster håndteres av TelemetryDeck i henhold til dens oppbevaringspraksis og brukes ikke til å gjenopprette fokushistorikken din.',
      ],
    },
    export: {
      title: 'Eksport',
      body: 'Innstillinger → Konto → Eksporter mine data lagrer en JSON-fil med øktene dine, daglige mål, synkroniserte innstillinger og kontoprofil. Data som ikke er flyttet til en konto ennå, kan også eksporteres fra påloggingsskjermen.',
    },
    analytics: {
      title: 'Analyse',
      introBeforeLink: 'Vi bruker',
      introAfterLink:
        ', en personvernfokusert analysetjeneste, for å forstå hvordan appen brukes (for eksempel: startede eller fullførte fokus- og pauseøkter, endringer i dagsmål og innstillinger, resultater av varslingstillatelser, hendelser for motivasjonspåminnelser og om introduksjonen ble fullført). Signalene inneholder ikke fritekst, navn, e-postadresser eller innhold fra fokushistorikken.',
      identifier:
        'TelemetryDeck identifiserer installasjoner med en hashet identifikator med enhetsomfang og kan legge ved ikke-personlige enhetsmetadata (som modell, OS-versjon og lokalitet). Disse dataene brukes kun til analyser, er ikke knyttet til din identitet av oss, og brukes ikke til sporing på tvers av andre selskapers apper eller nettsteder.',
      learnMore: 'Lær mer:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store oppdateringer',
      body: 'Hvis du bruker "Se etter oppdateringer" i Innstillinger, kan appen kontakte Apple for å se om en nyere versjon er tilgjengelig på App Store.',
    },
    launchAtLogin: {
      title: 'Lansering ved pålogging (Mac)',
      body: 'Hvis du aktiverer Start ved pålogging i Innstillinger på Mac, bruker appen macOS-system-API-er for å registrere seg som et påloggingselement. Denne preferansen kontrolleres av deg og kan deaktiveres når som helst.',
    },
    notifications: {
      title: 'Varsler og Live Activities (iPhone)',
      body: 'På iPhone hjelper valgfrie lokale varsler, motivasjonspåminnelser og Live Activities deg med å se når en økt avsluttes eller forsiktig gå tilbake til fokus. Tillatelse er bare forespurt når du velger å aktivere disse funksjonene. Varslingsinnhold forblir på enheten din.',
    },
    whatWeDoNotDo: {
      title: 'Det vi ikke gjør',
      items: [
        'Ingen annonsenettverk',
        'Ikke salg av personopplysninger',
        'Ingen tilgang til kontaktene, bildene, nøyaktig plassering, kamera eller mikrofon for analyser',
      ],
    },
    children: {
      title: 'Barn',
      body: `${PULSE_APP_NAME} samler ikke bevisst inn personopplysninger fra barn utover det en konto trenger for synkronisering, som beskrevet ovenfor. Analysesignalene er anonyme og inneholder ikke personlig innhold.`,
    },
    changes: {
      title: 'Endringer',
      body: 'Hvis denne policyen endres, vil den oppdaterte versjonen bli lagt ut på denne URL-en.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Spørsmål om denne policyen:',
    },
  },
}
