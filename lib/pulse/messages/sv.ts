import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const svMessages: PulseMessages = {
  languageLabel: 'Sidans språk',
  video: {
    ariaLabel: `${PULSE_APP_NAME} produktvisning`,
    playLabel: 'Spela upp visningen',
    unsupported: 'Din webbläsare stöder inte inbäddad video.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Fokustimer för iPhone och Mac`,
    metaDescription: `${PULSE_APP_NAME} är en lugn Pomodoro-timer för iPhone och Mac med Focus History, Daily Focus Goals, inloggning med Apple och Google samt offlinebaserad synkronisering mellan dina enheter.`,
    heroImageAlt: `${PULSE_APP_NAME} fokustimer och översikt över veckohistorik`,
    backToProjects: 'Tillbaka till projekt',
    availableOnAppStore: 'Finns i App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Fokustimer för iPhone och Mac',
    tagline: 'En behaglig Pomodoro-timer som hjälper dig att fokusera — på iPhone och i menyraden på din Mac.',
    description: `Starta en fokussession, ta en paus och ha historiken med dig. Logga in med Apple eller Google så att Daily Focus Goals, Focus History och synkroniserade inställningar följer ditt konto på iPhone och Mac — samtidigt som timern fortsätter att fungera offline.`,
    downloadCta: 'Hämta i App Store',
    watchDemo: 'Se den i praktiken',
    supportCta: 'Support',
    stats: {
      platformLabel: 'Plattformar',
      platformValue: 'iPhone och Mac',
      languagesLabel: 'Språk',
      languagesValue: '48 språk',
      dataLabel: 'Synkronisering',
      dataValue: 'Offlinebaserad',
      builtWithLabel: 'Byggd med',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Ett lugnare sätt att fokusera',
      title: 'Timern finns där när du behöver den — och är borta när du inte gör det.',
      description: `På Mac öppnar du ${PULSE_APP_NAME} från menyraden, väljer en session och stänger popupfönstret. På iPhone startar du Fokus från Hem och fortsätter med Live Activities på enheter som stöds. Timern fortsätter medan du arbetar.`,
      caption:
        'Fokus- och paustimer, Daily Focus Goals, Focus History, registrering av sviter, lokalisering på 48 språk och valfria avslutningsnotiser.',
    },
    rhythm: {
      eyebrow: 'En rytm du styr',
      title: 'Fokusera, pausa, återhämta dig, upprepa.',
      description: `${PULSE_APP_NAME} föreslår vad som kommer härnäst men startar aldrig en session åt dig. Alla tidslängder kan anpassas efter din dag.`,
    },
    featureShowcases: [
      {
        title: 'Fokus',
        badge: '1–120 min',
        description:
          'Nedräkningen körs tyst medan du arbetar. Pausa, nollställ eller hoppa över — du behåller kontrollen på iPhone och Mac.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} fokussession som pågår med pausreglage och nedräkning`,
      },
      {
        title: 'Menyrad',
        badge: 'Mac',
        description:
          'På Mac kan du visa eller dölja återstående tid i menyraden. Statusobjektet med fast bredd ligger kvar utan att flytta popupfönstret, upp till 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} nedräkning som visas i macOS-menyraden`,
      },
      {
        title: 'Anpassning',
        badge: 'Dina regler',
        description:
          'Flexibla tidslängder, Daily Focus Goals, avslutningsljud och -animationer, 48 gränssnittsspråk och utseendeinställningar.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} inställningar för tidslängder, avslutningsnotiser, språk och mål`,
      },
    ],
    history: {
      eyebrow: 'Framsteg utan press',
      title: 'Se arbetet växa.',
      description:
        'Öppna Focus History för att granska totaler och sviter. När du är inloggad kan historiken synkroniseras mellan din iPhone och Mac så att dina framsteg följer med.',
      items: ['Total fokustid', 'Antal slutförda sessioner', 'Aktuell svit', 'Bästa svit', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} veckovis Focus History med antal sessioner, fokuserade timmar och svit`,
    },
    feedback: {
      eyebrow: 'Behaglig återkoppling på ditt sätt',
      title: 'Gör avslutet belönande.',
      description: `Välj mellan sex lugna avslutningsljud och sex djurfester, eller stäng av endera. ${PULSE_APP_NAME} visar rätt meddelande när en Fokus-, Kort paus- eller Lång paus-session avslutas.`,
      items: [
        'Sessionsanpassad avslutningstitel och undertitel',
        'Gränssnitt på 48 språk med systemspråket som standard',
        'Språk- och utseendeinställningar på varje enhet',
        'Valfria motivationspåminnelser på iPhone',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} inställningar för tidslängder, språk, avslutningsljud och mål`,
      celebrationImageAlt: `${PULSE_APP_NAME} kaninanimation när en session slutförs`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Apa', 'Koala', 'Katt', 'Räv', 'Panda', 'Kanin'],
    },
    native: {
      eyebrow: 'Inbyggd för plattformen',
      title: 'Byggd för att kännas hemma på Apple-enheter.',
      description: `SwiftUI, AppKit och systemets konventioner håller ${PULSE_APP_NAME} snabb och välbekant — med VoiceOver-etiketter och stöd för Minska rörelse genomgående.`,
      features: [
        {
          title: 'Mac-menyrad och iPhone Hem',
          description: 'En diskret följeslagare i menyraden på Mac och en fokuserad Hem-upplevelse på iPhone.',
        },
        {
          title: 'Förblir exakt',
          description:
            'Sessioner förblir korrekta genom vila, väckning och omstarter, och historiken registreras vid den faktiska sluttiden.',
        },
        {
          title: 'Offlinebaserad synkronisering',
          description:
            'Fortsätt fokusera utan anslutning. När du är online igen synkroniseras ändringar från det inloggade kontot.',
        },
        {
          title: 'Talar ditt språk',
          description:
            'Fullständigt gränssnitt på 48 språk med systemspråket som standard och manuellt val i Inställningar.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privat från grunden',
      title: 'Ditt fokus förblir ditt.',
      description: `${PULSE_APP_NAME} använder ett konto så att historiken kan synkroniseras mellan dina enheter. Vi lagrar bara det som synkroniseringen behöver, säljer aldrig dina data och håller analysdata åtskilda från din Focus History.`,
      items: [
        'Logga in med Apple eller Google',
        'Offlinebaserat fokus på varje enhet',
        'Molnsynkronisering av historik och synkroniserade inställningar',
        'Inga annonsnätverk',
        'Radera ditt konto när som helst i Inställningar',
      ],
    },
    closing: {
      title: 'Skapa utrymme för fokuserat arbete.',
      description: `Hämta ${PULSE_APP_NAME} i App Store för iPhone och Mac, eller läs integritetspolicyn och supportsidan om du behöver hjälp.`,
      getSupport: 'Få support',
      privacy: 'Integritet',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Support`,
    metaDescription: `Support, vanliga frågor och kontohjälp för ${PULSE_APP_NAME} på iPhone och Mac — inklusive Pomodoro Pro, köp, Focus Protection, inloggning, synkronisering och radering av konto.`,
    title: `${PULSE_APP_NAME} Support`,
    intro: `${PULSE_APP_NAME} är en lugn Pomodoro-timer för iPhone och Mac. Logga in med Apple eller Google för att synkronisera Focus History mellan dina enheter. På iPhone låser valfria Pomodoro Pro upp Focus Protection, egna taggar och Tag Insights.`,
    gettingStarted: {
      title: 'Kom igång',
      items: [
        {
          question: 'Hur startar jag en fokussession?',
          answer:
            'På Mac klickar du på appikonen i menyraden, väljer Fokus, Kort paus eller Lång paus och trycker sedan på Starta. På iPhone öppnar du appen, väljer en session på Hem och trycker på Starta. Du kan lämna appen medan timern körs.',
        },
        {
          question: 'Hur ändrar jag längden på Fokus och pauser?',
          answer:
            'Öppna Inställningar och justera längden för Fokus, Kort paus och Lång paus. Du kan också välja en förinställd rytm och sedan finjustera minuterna.',
        },
        {
          question: 'Hur konfigurerar jag Daily Focus Goals?',
          answer:
            'Ange i Inställningar hur många fokussessioner du vill ha varje dag. Framstegen visas på Hem och i Focus History.',
        },
        {
          question: 'Hur visar jag Focus Historyen?',
          answer:
            'Öppna Focus History från appen (på Mac från popupfönstret eller statusmenyn). Där ser du totaler, sviter och veckoframsteg.',
        },
        {
          question: 'Hur ändrar jag språk och utseende?',
          answer:
            'Välj Språk (System eller ett språk som stöds) och Utseende (System, Ljust eller Mörkt) i Inställningar. Dessa inställningar sparas på varje enhet och synkroniseras inte.',
        },
      ],
    },
    accounts: {
      title: 'Konton',
      items: [
        {
          question: 'Varför krävs inloggning?',
          answer:
            'Ett konto gör att Focus History, Daily Focus Goals och synkroniserade inställningar följer med dig på iPhone och Mac. Nya installationer ber dig logga in innan timern används. Enheter som uppgraderas från äldre versioner kan fortsätta använda lokal historik tills du loggar in. Pomodoro Pro-köp följer också ditt inloggade konto.',
        },
        {
          question: 'Hur loggar jag in med Apple eller Google?',
          answer:
            'Välj Fortsätt med Apple eller Fortsätt med Google på inloggningsskärmen och slutför leverantörens flöde. Apple kan erbjuda Dölj min e-postadress.',
        },
        {
          question: 'Hur loggar jag ut?',
          answer:
            'Öppna Inställningar → Konto → Logga ut. Om vissa ändringar ännu inte har synkroniserats kan appen be dig synkronisera först eller logga ut ändå. Att logga ut raderar inte ditt konto.',
        },
        {
          question: 'Hur loggar jag in igen?',
          answer:
            'Använd samma Apple- eller Google-metod på inloggningsskärmen. Din molnhistorik återställs till det kontot på enheten.',
        },
        {
          question: 'Vad händer om jag använder ett annat konto?',
          answer:
            'Varje konto har sin egen historik. Inloggning på ett annat konto slår inte samman orelaterade historiker. Välj noggrant innan du bekräftar överföring av historik på en enhet som redan har lokala sessioner.',
        },
        {
          question: 'Kan jag koppla Apple och Google till samma konto?',
          answer:
            'Ja. Under Inställningar → Konto kan du koppla den andra inloggningsmetoden om den inte redan används av ett annat konto.',
        },
      ],
    },
    cloudSync: {
      title: 'Molnsynkronisering',
      items: [
        {
          question: 'Vad synkroniseras mellan enheter?',
          answer:
            'Historik för fokus- och paussessioner (inklusive den tagg du valde), taggar du skapar, registrerade Daily Focus Goals, kontodata om sviter och synkroniserade inställningar som sessionslängder, dagligt mål, ljud, animationer, avslutningsljud och firandedjur.',
        },
        {
          question: 'Vad händer utan internet?',
          answer:
            'När du är inloggad kan du fortsätta använda timern offline. Nya sessioner och ändringar sparas på enheten tills en anslutning finns.',
        },
        {
          question: 'Vad händer när jag är online igen?',
          answer:
            'Appen synkroniserar väntande ändringar med ditt konto. Synkroniseringen är offlinebaserad och blir så småningom konsekvent — det är inte omedelbart samarbete i realtid.',
        },
        {
          question: 'Hur använder jag samma konto på iPhone och Mac?',
          answer:
            'Installera appen på båda enheterna och logga in med samma Apple- eller Google-konto. När återställningen är klar kan Focus Historyen visas på båda.',
        },
        {
          question: 'Vad gör jag om historiken saknas?',
          answer:
            'Bekräfta att du är inloggad på samma konto, vänta tills återställning och synkronisering är klar och kontrollera Focus History igen. Om du loggade in på ett annat konto visas det kontots egen historik.',
        },
      ],
    },
    migration: {
      title: 'Uppgradering från en äldre version',
      items: [
        {
          question: 'Vad händer med min befintliga lokala historik?',
          answer:
            'Befintlig lokal historik raderas inte utan förvarning. Efter inloggning frågar appen innan historiken läggs till i ditt konto.',
        },
        {
          question: 'Hur överför jag min historik?',
          answer:
            'Logga in på det konto som ska äga historiken, granska skärmen Lägg till din historik och välj sedan Lägg till i det här kontot. Använd ett annat konto om kontot som visas är fel. Sessioner kan inte flyttas till ett annat konto senare.',
        },
        {
          question: 'Vad händer om enhetens och kontots inställningar skiljer sig?',
          answer:
            'Appen kan fråga om du vill behålla den här enhetens inställningar eller använda kontots inställningar. Språk, utseende, notiser och motivationspåminnelser förblir lokala på enheten.',
        },
      ],
    },
    notifications: {
      title: 'Notiser',
      items: [
        {
          question: 'Hur aktiverar jag notiser på iPhone?',
          answer:
            'Öppna Inställningar → Notiser och välj Aktivera, eller öppna systemets Inställningar om behörigheten tidigare nekades.',
        },
        {
          question: 'Hur fungerar motivationspåminnelser?',
          answer:
            'På iPhone öppnar du Inställningar → Motivationspåminnelser och aktiverar dem när notiser är tillåtna. Du kan pausa dem eller ställa in tysta timmar. De är valfria och avstängda som standard.',
        },
        {
          question: 'Vad händer om notiser är inaktiverade?',
          answer:
            'Notiser om avslutade sessioner och motivationspåminnelser kräver behörighet för notiser. Använd Inställningar → Notiser → Öppna Inställningar för att aktivera dem i iOS-inställningarna.',
        },
        {
          question: 'Hur fungerar Live Activities?',
          answer:
            'På iPhone-modeller som stöds kan en valfri Live Activity visa en aktiv session på låsskärmen och Dynamic Island. Behörighet begärs när du aktiverar relaterade funktioner.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Vad är Pomodoro Pro?',
          answer:
            'Pomodoro Pro är ett valfritt köp i appen på iPhone. Det låser upp Focus Protection, egna taggar (dina egna namn och färger) samt Tag Insights (fokustid per tagg för vecka och månad). Timern, inbyggda taggar, Focus History och synkronisering är fortfarande tillgängliga utan Pro.',
        },
        {
          question: 'Vilka köpalternativ finns?',
          answer:
            'Pomodoro Pro erbjuds som ett månadsabonnemang, ett årsabonnemang eller ett engångsköp med livstidsåtkomst. Abonnemang förnyas automatiskt om du inte avslutar minst 24 timmar före slutet av den aktuella perioden. Livstidsåtkomst debiteras en gång och är inte ett abonnemang.',
        },
        {
          question: 'Var köper eller visar jag Pomodoro Pro?',
          answer:
            'På iPhone öppnar du Inställningar → Pomodoro Pro eller trycker på skyddschippet på Hem. Du måste vara inloggad. Pro följer ditt konto på alla enheter du loggar in på.',
        },
        {
          question: 'Hur återskapar jag köp?',
          answer:
            'Använd Återskapa köp som saknas på betalväggen eller i Inställningar → Pomodoro Pro. Köp som gjorts med samma Apple-konto flyttas till kontot du är inloggad på. Om inget hittas kontrollerar du att du använder det Apple-konto som köpte Pro och försöker igen när du är online.',
        },
      ],
    },
    purchases: {
      title: 'Abonnemang och köp',
      items: [
        {
          question: 'Hur hanterar eller avslutar jag ett abonnemang?',
          answer:
            'Abonnemang faktureras av Apple. På iPhone öppnar du Inställningar → Pomodoro Pro → Hantera abonnemang, eller går till Inställningar → [ditt namn] → Abonnemang och väljer appen. Avsluta minst 24 timmar före förnyelsen för att undvika nästa debitering. Att radera appen eller ditt Pomodoro-konto avslutar inte ett abonnemang.',
        },
        {
          question: 'Hur begär jag återbetalning?',
          answer:
            'Återbetalningar hanteras av Apple. Besök reportaproblem.apple.com, logga in med det Apple-konto som användes för köpet, hitta transaktionen och skicka in en begäran om återbetalning. Vi kan inte själva hantera återbetalningar från App Store.',
        },
        {
          question: 'Vad händer om ett köp misslyckas eller Pro inte låses upp?',
          answer:
            'Förbli inloggad, kontrollera nätverksanslutningen och försök igen. Om betalningen väntar, till exempel Be om köp, låses Pro upp efter godkännande. Om du redan har betalat använder du Återskapa köp som saknas. Vid betalningsproblem för ett aktivt abonnemang uppdaterar du din betalningsmetod i App Store-inställningarna.',
        },
        {
          question: 'Vad händer om jag köper livstidsåtkomst medan ett abonnemang är aktivt?',
          answer:
            'Livstidsåtkomst låser upp Pro permanent, men ett befintligt abonnemang avslutas inte automatiskt. Stäng av automatisk förnyelse i App Stores abonnemangsinställningar så att du inte debiteras igen.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Vad är Focus Protection?',
          answer:
            'Focus Protection är en Pomodoro Pro-funktion på iPhone. Den använder Apples API:er för Screen Time för att blockera de appar, kategorier eller webbplatser du väljer medan en fokussession pågår. Pauser blockeras aldrig. När sessionen avslutas låses blockerade appar upp automatiskt.',
        },
        {
          question: 'Hur konfigurerar jag det?',
          answer:
            'När Pro är aktivt trycker du på Focus Protection-chippet på Hem eller öppnar funktionen från Inställningar. Tillåt åtkomst till Screen Time när du blir tillfrågad, välj vad som ska blockeras och aktivera sedan Focus Protection. Starta en fokussession för att tillämpa blockeringarna.',
        },
        {
          question: 'Hur stänger jag av det eller låser upp appar?',
          answer:
            'Öppna panelen Focus Protection och välj Stäng av nu, eller stäng av funktionen. När en session har avslutats kan du också använda Lås upp appar på blockeringsskärmen. Om du vill ta bort appens åtkomst till Screen Time helt går du till iOS-inställningar → Screen Time → Appar med åtkomst till Screen Time.',
        },
        {
          question: 'Vad händer om Focus Protection inte fungerar?',
          answer:
            'Kontrollera att Pro är aktivt, att åtkomst till Screen Time är tillåten och att du har valt appar eller kategorier som ska blockeras. Focus Protection gäller bara under fokussessioner, inte pauser. Om åtkomsten återkallades i systemets Inställningar öppnar du appen och tillåter åtkomst igen. En omstart av iPhone kan hjälpa efter en behörighetsändring.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Konto och integritet',
      items: [
        {
          question: 'Hur raderar jag mitt konto?',
          answer:
            'Logga in, öppna Inställningar → Konto → Radera konto och bekräfta. Ditt konto och din synkroniserade Focus History raderas permanent från vår aktiva databas. Detta går inte att ångra. Radering kräver en nätverksanslutning. Att radera ditt konto avslutar inte ett App Store-abonnemang — hantera det i App Store-inställningarna.',
        },
        {
          question: 'Vad påverkas när kontot raderas?',
          answer:
            'Synkroniserade molndata för kontot tas bort, Sign in with Apple-auktoriseringen återkallas när den finns lagrad, vår köpleverantör ombeds radera köpposten som är kopplad till ditt konto och kontots data tas bort från den enhet där du raderar det. Lokala kopior på andra enheter kan inte längre synkroniseras; ta bort appen eller rensa dem där vid behov. Leverantörernas säkerhetskopior kan behålla raderade data under en begränsad återställningsperiod. Apple behåller sina egna App Store-transaktionsposter.',
        },
        {
          question: 'Hur exporterar jag mina data?',
          answer:
            'Inställningar → Konto → Exportera mina data sparar en JSON-fil med sessioner, dagliga mål, synkroniserade inställningar och kontoprofil. Lokala data som ännu inte överförts kan också exporteras från inloggningsskärmen.',
        },
        {
          question: 'Var finns integritetspolicyn?',
          answer:
            'Öppna integritetspolicyn från produktwebbplatsen eller använd integritetslänken på den här webbplatsens produktsidor.',
        },
      ],
    },
    requirements: {
      title: 'Krav',
      body: 'iPhone: iOS 17 eller senare. Mac: macOS 14.6 eller senare. Pomodoro Pro-köp och Focus Protection är tillgängliga på iPhone.',
    },
    contact: {
      title: 'Kontakt',
      body: 'För hjälp, återkoppling eller felrapporter:',
    },
    privacyPolicyLink: 'Integritetspolicy',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Integritetspolicy`,
    metaDescription: `Integritetspolicy för ${PULSE_APP_NAME}, som omfattar inloggning med Apple och Google, molnsynkronisering, Pomodoro Pro-köp via RevenueCat, Focus Protection, analys och radering av konto på Mac och iPhone.`,
    title: 'Integritetspolicy',
    subtitle: `${PULSE_APP_NAME} — Pomodoro-timer för Mac och iPhone`,
    lastUpdated: 'Senast uppdaterad: 26 oktober 2026',
    summary: {
      title: 'Sammanfattning',
      body: `När du loggar in med Apple eller Google håller ditt konto din Focus History, dina dagliga mål och timerinställningar synkroniserade mellan Mac och iPhone. Vi lagrar bara det appen behöver för detta: din e-postadress, en kontoidentifierare och de fokusdata du skapar. Vi säljer dem aldrig, använder dem aldrig för reklam och delar dem aldrig med vår analysleverantör. Om du köper Pomodoro Pro på iPhone lagrar vår köpleverantör RevenueCat din köphistorik kopplad till ditt konto så att Pro fungerar på alla enheter du loggar in på. Focus Protections appval lämnar aldrig din iPhone. Du kan när som helst exportera dina data eller radera ditt konto från Inställningar. Separat kan appen skicka anonym, integritetsbevarande användningsanalys så att vi kan förbättra fokusflödena.`,
    },
    localData: {
      title: 'Data som lagras på din enhet',
      body: 'Dina timerinställningar, sessionspreferenser och din Focus History sparas lokalt på din Mac eller iPhone med systemets vanliga lagring, så att timern fortsätter fungera offline. Varje konto som är inloggat på en enhet har ett eget separat lokalt lager. Din inloggningssession lagras i systemets nyckelring. Språk, utseende, Öppna vid inloggning, notiser och motivationspåminnelser stannar på varje enhet och synkroniseras inte. Själva innehållet i Focus Historyen laddas inte upp till vår analysleverantör.',
      migrationSafety:
        'När du först loggar in på en enhet som redan har Focus History frågar appen innan historiken flyttas till ditt konto. Fram tills flytten har bekräftats på våra servrar plus 90 dagar behåller appen den tidigare lokala kopian och en lokal säkerhetskopieringsfil på enheten som skyddsnät och tar sedan bort dem automatiskt.',
    },
    accountAndSync: {
      title: 'Ditt konto och synkroniserade data',
      intro: 'Om du loggar in behandlar vi:',
      items: [
        'Kontaktuppgifter: den e-postadress som delas av Sign in with Apple (vilket kan vara en privat reläadress via Hide My Email) eller Google. Vi begär inte ditt namn.',
        'Identifierare: ett konto-id som skapas vid inloggning och ett slumpmässigt id för varje installation, som endast används för synkronisering och för att identifiera vilken enhet som gjorde en ändring.',
        'Fokusdata: slutförda och raderade fokus- och paussessioner (tider, längder, lokal dag och tidszon samt den valda taggen), taggar du skapar (namn och färg), dagliga mål, din bästa svit och synkroniserade inställningar (sessionslängder, dagligt mål, ljud, animationer, avslutningsljud och firandedjur).',
      ],
      closing:
        'Dessa data används bara för att tillhandahålla synkronisering, historik och kontofunktioner. De är kopplade till ditt konto, används inte för spårning och delas inte med andra tredje parter än personuppgiftsbiträdena nedan.',
    },
    processors: {
      title: 'Personuppgiftsbiträden och lagringsplats',
      bodyBeforeSupabase: 'Konto- och synkroniseringsdata lagras hos',
      bodyAfterSupabase: '(databas och autentisering) i Europeiska unionen. Inloggning hanteras av',
      orWord: 'eller',
      bodyAfterProviders: ', beroende på vilket alternativ du väljer. Pomodoro Pro-köp hanteras med',
      bodyAfterRevenueCat:
        '(se Köp nedan). Data krypteras under överföring och åtkomsten är begränsad så att varje konto bara kan läsa sina egna data.',
    },
    purchases: {
      title: 'Köp (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro säljs via App Store; Apple hanterar betalningen och vi ser aldrig dina betalningsuppgifter. För att låsa upp Pro på alla enheter du loggar in på delar appen ditt konto-id med',
      bodyAfterRevenueCat:
        ', som lagrar din köphistorik (köpta produkter, köp- och förnyelsedatum samt abonnemangsstatus) kopplad till detta id. Dessa data används bara för att ge och återställa Pro-åtkomst, används inte för spårning och delas inte med vår analysleverantör. Pro kräver ett inloggat konto; inget skickas till RevenueCat innan du loggar in.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection använder Apples ramverk för Screen Time (Family Controls) för att blockera de appar, kategorier och webbplatser du väljer medan en fokussession pågår. Apple ger bara appen ogenomskinliga token för dina val: vi kan inte se vilka appar eller webbplatser du har valt, hur du använder dem eller andra Screen Time-data. Dina val stannar på den iPhonen, laddas aldrig upp eller synkroniseras och skickas inte till vår analysleverantör. Du kan när som helst stänga av Focus Protection i appen eller ta bort appens åtkomst under Inställningar → Screen Time → Appar med åtkomst till Screen Time.',
    },
    retention: {
      title: 'Lagring, säkerhetskopior och radering',
      items: [
        'Dina synkroniserade data lagras så länge ditt konto finns.',
        'Radera konto (Inställningar → Konto → Radera konto) raderar permanent ditt konto och alla synkroniserade data från vår aktiva databas, återkallar appens Sign in with Apple-auktorisering när en sådan finns lagrad, ber RevenueCat radera köpposten som är kopplad till ditt konto och tar bort kontots data från enheten där du raderar det. Lokala kopior på dina andra enheter kan inte längre synkroniseras och stannar där tills du raderar appen på dessa enheter eller tar bort dem från inloggningsskärmen när alternativet erbjuds.',
        'Vår databasleverantör behåller dagliga säkerhetskopior i 7 dagar. Raderade data kan finnas kvar i dessa kopior tills de löper ut; kopiorna används bara för katastrofåterställning. Vi kan också behålla en krypterad veckovis säkerhetskopia i upp till 90 dagar för samma ändamål.',
        'Att radera ditt konto avslutar inte ett App Store-abonnemang; hantera eller avsluta det i inställningarna för ditt Apple-konto. Apple behåller sitt eget register över dina App Store-transaktioner.',
        'Att logga ut raderar ingenting. Ändringar som ännu inte har synkroniserats stannar på enheten tills samma konto loggar in igen.',
        'Analysposter hanteras av TelemetryDeck enligt deras lagringspraxis och används inte för att återställa din Focus History.',
      ],
    },
    export: {
      title: 'Export',
      body: 'Inställningar → Konto → Exportera mina data sparar en JSON-fil med dina sessioner, dagliga mål, synkroniserade inställningar och din kontoprofil. Data som ännu inte har flyttats till ett konto kan också exporteras från inloggningsskärmen.',
    },
    analytics: {
      title: 'Analys',
      introBeforeLink: 'Vi använder',
      introAfterLink:
        ', en integritetsfokuserad analystjänst, för att förstå hur appen används (till exempel startade eller slutförda fokus- eller paussessioner, ändringar av dagliga mål och inställningar, resultat av notisbehörigheter, händelser för motivationspåminnelser samt om introduktionen slutfördes). Signalerna innehåller inte fritext, namn, e-postadresser eller innehållet i din Focus History.',
      identifier:
        'TelemetryDeck identifierar installationer med en hashad enhetsomfattande identifierare och kan bifoga icke-personliga enhetsmetadata som modell, OS-version och språkversion. Dessa data används bara för analys, kopplas inte till din identitet av oss och används inte för spårning mellan andra företags appar eller webbplatser.',
      learnMore: 'Läs mer:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store-uppdateringar',
      body: 'Om du använder ”Sök efter uppdateringar” i Inställningar kan appen kontakta Apple för att se om en nyare version finns i App Store.',
    },
    launchAtLogin: {
      title: 'Öppna vid inloggning (Mac)',
      body: 'Om du aktiverar Öppna vid inloggning i Inställningar på Mac använder appen macOS-systemets API:er för att registrera sig som ett inloggningsobjekt. Du styr den här inställningen och kan inaktivera den när som helst.',
    },
    notifications: {
      title: 'Notiser och Live Activities (iPhone)',
      body: 'På iPhone hjälper valfria lokala notiser, motivationspåminnelser och Live Activities dig att se när en session avslutas eller varsamt återgå till fokus. Behörighet begärs bara när du väljer att aktivera dessa funktioner. Notisernas innehåll stannar på din enhet.',
    },
    whatWeDoNotDo: {
      title: 'Det här gör vi inte',
      items: [
        'Inga annonsnätverk',
        'Ingen försäljning av personuppgifter',
        'Ingen åtkomst till dina kontakter, bilder, exakta plats, kamera eller mikrofon för analys',
      ],
    },
    children: {
      title: 'Barn',
      body: `${PULSE_APP_NAME} samlar inte medvetet in personuppgifter från barn utöver vad ett konto behöver för synkronisering enligt beskrivningen ovan. Analyssignaler är anonyma och innehåller inget personligt innehåll.`,
    },
    changes: {
      title: 'Ändringar',
      body: 'Om denna policy ändras publiceras den uppdaterade versionen på denna webbadress.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Frågor om denna policy:',
    },
  },
}
