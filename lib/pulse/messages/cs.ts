import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const csMessages: PulseMessages = {
  languageLabel: 'Jazyk stránky',
  video: {
    ariaLabel: `${PULSE_APP_NAME} — přehled produktu`,
    playLabel: 'Přehrát přehled',
    unsupported: 'Váš prohlížeč nepodporuje vložené video.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — časovač soustředění pro iPhone a Mac`,
    metaDescription: `${PULSE_APP_NAME} je klidný Pomodoro časovač pro iPhone a Mac s historií soustředění, denními cíli, přihlášením přes Apple a Google a offline-first synchronizací napříč zařízeními.`,
    heroImageAlt: `${PULSE_APP_NAME} — časovač soustředění a týdenní přehled historie`,
    backToProjects: 'Zpět na projekty',
    availableOnAppStore: 'Dostupné v App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Časovač soustředění pro iPhone a Mac',
    tagline: 'Jemný Pomodoro časovač, který vám pomůže soustředit se — na iPhonu i v menu baru Macu.',
    description: `Spusťte relaci soustředění, dejte si přestávku a mějte historii po ruce. Přihlaste se přes Apple nebo Google, aby denní cíle, historie soustředění a synchronizovaná nastavení zůstaly s vaším účtem na iPhonu i Macu — zatímco časovač funguje i offline.`,
    downloadCta: 'Stáhnout z App Store',
    watchDemo: 'Podívat se v akci',
    supportCta: 'Podpora',
    stats: {
      platformLabel: 'Platformy',
      platformValue: 'iPhone a Mac',
      languagesLabel: 'Jazyky',
      languagesValue: '48 jazyků',
      dataLabel: 'Synchronizace',
      dataValue: 'Offline-first',
      builtWithLabel: 'Vytvořeno pomocí',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Klidnější způsob soustředění',
      title: 'Časovač je tam, když ho potřebujete — a zmizí, když ne.',
      description: `Na Macu otevřete ${PULSE_APP_NAME} z menu baru, zvolte relaci a zavřete vyskakovací okno. Na iPhonu spusťte soustředění z domovské obrazovky a na podporovaných zařízeních pokračujte s Live Activities. Časovač běží dál, zatímco vy pracujete.`,
      caption:
        'Časovače soustředění a přestávek, denní cíle, historie soustředění, sledování sérií, lokalizace ve 48 jazycích a volitelná upozornění po dokončení.',
    },
    rhythm: {
      eyebrow: 'Rytmus pod vaší kontrolou',
      title: 'Soustředění, pauza, odpočinek, znovu.',
      description: `${PULSE_APP_NAME} navrhne, co přijde dál, ale relaci za vás nikdy nespustí. Každou délku si můžete upravit podle svého dne.`,
    },
    featureShowcases: [
      {
        title: 'Soustředění',
        badge: '1–120 min',
        description:
          'Odpočítávání tiše běží, zatímco pracujete. Pozastavte, resetujte nebo přeskočte — na iPhonu i Macu máte kontrolu vy.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} — běžící relace soustředění s ovládáním pauzy a odpočítáváním`,
      },
      {
        title: 'Menu bar',
        badge: 'Mac',
        description:
          'Na Macu zobrazte nebo skryjte zbývající čas v menu baru. Stavová položka s pevnou šířkou zůstane na místě a neposune vyskakovací okno, až do 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} — odpočítávání v menu baru macOS`,
      },
      {
        title: 'Přizpůsobení',
        badge: 'Vaše pravidla',
        description:
          'Flexibilní délky, denní cíle, zvuky a animace po dokončení, 48 jazyků rozhraní a volby vzhledu.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} — nastavení délek, upozornění po dokončení, jazyka a cílů`,
      },
    ],
    history: {
      eyebrow: 'Pokrok bez tlaku',
      title: 'Uvidíte, jak se práce sčítá.',
      description:
        'Otevřete historii soustředění a prohlédněte si součty a série. Po přihlášení se historie může synchronizovat mezi iPhonem a Macem, aby vám pokrok šel napříč zařízeními.',
      items: ['Celkový čas soustředění', 'Počet dokončených relací', 'Aktuální série', 'Nejlepší série', 'Denní cíle'],
      imageAlt: `${PULSE_APP_NAME} — týdenní historie soustředění s počtem relací, hodinami a sérií`,
    },
    feedback: {
      eyebrow: 'Jemná zpětná vazba podle vás',
      title: 'Ať dokončení potěší.',
      description: `Vyberte si ze šesti klidných zvuků po dokončení a šesti zvířecích oslav — nebo obojí vypněte. ${PULSE_APP_NAME} zobrazí správnou zprávu po skončení relace soustředění, krátké přestávky nebo dlouhé přestávky.`,
      items: [
        'Nadpis a podnadpis podle typu relace',
        'Rozhraní ve 48 jazycích s výchozím jazykem systému',
        'Nastavení jazyka a vzhledu na každém zařízení',
        'Volitelné motivační připomínky na iPhonu',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} — nastavení délek, jazyka, zvuků po dokončení a cílů`,
      celebrationImageAlt: `${PULSE_APP_NAME} — oslavná animace s králíkem po dokončení relace`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Opice', 'Koala', 'Kočka', 'Liška', 'Panda', 'Králík'],
    },
    native: {
      eyebrow: 'Nativní od základu',
      title: 'Navrženo, aby se na Apple zařízeních cítilo jako doma.',
      description: `SwiftUI, AppKit a systémové konvence udržují ${PULSE_APP_NAME} rychlý a povědomý — včetně popisků VoiceOver a podpory Reduce Motion.`,
      features: [
        {
          title: 'Menu bar Macu a domovská obrazovka iPhonu',
          description: 'Nenápadný společník v menu baru na Macu a soustředěné domovské prostředí na iPhonu.',
        },
        {
          title: 'Zůstává přesný',
          description:
            'Relace zůstávají správné i po spánku, probuzení a restartu; historie se zaznamenává k reálnému okamžiku dokončení.',
        },
        {
          title: 'Offline-first synchronizace',
          description:
            'Soustřeďte se i bez připojení. Po návratu online se změny u přihlášeného účtu synchronizují.',
        },
        {
          title: 'Mluví vaším jazykem',
          description:
            'Celé rozhraní ve 48 jazycích s výchozím jazykem systému a ruční volbou v Nastavení.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Soukromí od základu',
      title: 'Vaše soustředění zůstává vaše.',
      description: `${PULSE_APP_NAME} používá účet, aby se historie mohla synchronizovat mezi zařízeními. Ukládáme jen to, co synchronizace potřebuje, data nikdy neprodáváme a analytiku držíme odděleně od historie soustředění.`,
      items: [
        'Přihlášení přes Apple nebo Google',
        'Offline-first soustředění na každém zařízení',
        'Cloudová synchronizace historie a synchronizovaných nastavení',
        'Žádné reklamní sítě',
        'Účet můžete kdykoli smazat v Nastavení',
      ],
    },
    closing: {
      title: 'Udělejte si prostor pro soustředěnou práci.',
      description: `Stáhněte si ${PULSE_APP_NAME} v App Store pro iPhone a Mac, nebo si přečtěte zásady ochrany soukromí a stránku podpory, pokud potřebujete pomoc.`,
      getSupport: 'Získat podporu',
      privacy: 'Soukromí',
    },
  },
  support: {
    metaTitle: `Podpora ${PULSE_APP_NAME}`,
    metaDescription: `Podpora, časté dotazy a nápověda k účtu pro ${PULSE_APP_NAME} na iPhonu a Macu — včetně Pomodoro Pro, nákupů, Ochrany soustředění, přihlášení, synchronizace a smazání účtu.`,
    title: `Podpora ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} je klidný Pomodoro časovač pro iPhone a Mac. Přihlaste se přes Apple nebo Google a synchronizujte historii soustředění napříč zařízeními. Na iPhonu volitelné Pomodoro Pro odemkne Ochranu soustředění, vlastní štítky a Statistiky štítků.`,
    gettingStarted: {
      title: 'Začínáme',
      items: [
        {
          question: 'Jak spustím relaci soustředění?',
          answer:
            'Na Macu klikněte na ikonu aplikace v menu baru, zvolte Soustředění, Krátkou přestávku nebo Dlouhou přestávku a stiskněte Spustit. Na iPhonu otevřete aplikaci, zvolte relaci na domovské obrazovce a stiskněte Spustit. Aplikaci můžete nechat běžet na pozadí, zatímco časovač běží.',
        },
        {
          question: 'Jak změním délky soustředění a přestávek?',
          answer:
            'Otevřete Nastavení a upravte délky pro Soustředění, Krátkou přestávku a Dlouhou přestávku. Můžete také zvolit přednastavený rytmus a minuty doladit.',
        },
        {
          question: 'Jak nastavím denní cíle?',
          answer:
            'V Nastavení určete, kolik relací soustředění chcete každý den. Pokrok uvidíte na domovské obrazovce a v historii soustředění.',
        },
        {
          question: 'Jak zobrazím historii soustředění?',
          answer:
            'Otevřete historii soustředění v aplikaci (na Macu z vyskakovacího okna nebo stavového menu). Uvidíte součty, série a týdenní pokrok.',
        },
        {
          question: 'Jak změním jazyk a vzhled?',
          answer:
            'V Nastavení zvolte Jazyk (Systém nebo podporovaný jazyk) a Vzhled (Systém, Světlý nebo Tmavý). Tyto preference zůstávají na každém zařízení a nesynchronizují se.',
        },
      ],
    },
    accounts: {
      title: 'Účty',
      items: [
        {
          question: 'Proč je přihlášení povinné?',
          answer:
            'Účet zajistí, že historie soustředění, denní cíle a synchronizovaná nastavení zůstanou s vámi na iPhonu i Macu. Nové instalace vás požádají o přihlášení před použitím časovače. Zařízení aktualizovaná ze starších verzí mohou mít lokální historii použitelnou až do přihlášení. Nákupy Pomodoro Pro také zůstávají u přihlášeného účtu.',
        },
        {
          question: 'Jak se přihlásím přes Apple nebo Google?',
          answer:
            'Na přihlašovací obrazovce zvolte Pokračovat s Apple nebo Pokračovat s Google a dokončete postup u poskytovatele. Apple může nabídnout Hide My Email.',
        },
        {
          question: 'Jak se odhlásím?',
          answer:
            'Otevřete Nastavení → Účet → Odhlásit se. Pokud některé změny ještě nebyly synchronizovány, aplikace vás může požádat o synchronizaci nebo odhlášení i tak. Odhlášení účet nesmaže.',
        },
        {
          question: 'Jak se znovu přihlásím?',
          answer:
            'Na přihlašovací obrazovce použijte stejnou metodu Apple nebo Google. Cloudová historie se pro tento účet na zařízení obnoví.',
        },
        {
          question: 'Co se stane, když použiji jiný účet?',
          answer:
            'Každý účet má vlastní historii. Přihlášení k jinému účtu nesloučí nesouvisející historie. Pečlivě zvolte, než potvrdíte přiřazení historie na zařízení, které už má lokální relace.',
        },
        {
          question: 'Mohu propojit Apple a Google ke stejnému účtu?',
          answer:
            'Ano. V Nastavení → Účet můžete propojit druhou metodu přihlášení, pokud ji už nepoužívá jiný účet.',
        },
      ],
    },
    cloudSync: {
      title: 'Cloudová synchronizace',
      items: [
        {
          question: 'Co se synchronizuje mezi zařízeními?',
          answer:
            'Historie relací soustředění a přestávek (včetně zvoleného štítku), štítky, které vytvoříte, záznamy denních cílů, údaje účtu související se sériemi a synchronizovaná nastavení — délky relací, denní cíl, zvuk, animace, zvuk po dokončení a oslavné zvíře.',
        },
        {
          question: 'Co se stane bez internetu?',
          answer:
            'Po přihlášení můžete časovač používat offline. Nové relace a změny zůstanou na zařízení, dokud není k dispozici připojení.',
        },
        {
          question: 'Co se stane, když jsem znovu online?',
          answer:
            'Aplikace synchronizuje neodeslané změny s vaším účtem. Synchronizace je offline-first a časem konzistentní — není to okamžitá spolupráce v reálném čase.',
        },
        {
          question: 'Jak používám stejný účet na iPhonu a Macu?',
          answer:
            'Nainstalujte aplikaci na obě zařízení a přihlaste se stejným účtem Apple nebo Google. Po dokončení obnovy se historie soustředění může zobrazit na obou.',
        },
        {
          question: 'Co když chybí historie?',
          answer:
            'Ověřte, že jste přihlášeni ke stejnému účtu, počkejte na dokončení obnovy nebo synchronizace a znovu otevřete historii soustředění. Při jiném účtu uvidíte historii toho účtu.',
        },
      ],
    },
    migration: {
      title: 'Upgrade ze starší verze',
      items: [
        {
          question: 'Co se stane s existující lokální historií?',
          answer:
            'Existující lokální historie se tiše nesmaže. Po přihlášení se aplikace zeptá, než tuto historii přidá k vašemu účtu.',
        },
        {
          question: 'Jak si historii přiřadím?',
          answer:
            'Přihlaste se k účtu, který má historii vlastnit, projděte obrazovku Přidat historii a zvolte Přidat k tomuto účtu. Použijte jiný účet, pokud je zobrazený účet špatný. Relace později nelze přesunout na jiný účet.',
        },
        {
          question: 'Co když se liší nastavení zařízení a účtu?',
          answer:
            'Aplikace se může zeptat, zda ponechat nastavení tohoto zařízení, nebo použít nastavení účtu. Jazyk, vzhled, oznámení a motivační připomínky zůstávají lokálně na zařízení.',
        },
      ],
    },
    notifications: {
      title: 'Oznámení',
      items: [
        {
          question: 'Jak zapnu oznámení na iPhonu?',
          answer:
            'Otevřete Nastavení → Oznámení a zvolte Povolit, nebo otevřete systémová Nastavení, pokud bylo oprávnění dříve odmítnuto.',
        },
        {
          question: 'Jak fungují motivační připomínky?',
          answer:
            'Na iPhonu otevřete Nastavení → Motivační připomínky a zapněte je po povolení oznámení. Můžete je pozastavit nebo nastavit tiché hodiny. Jsou volitelné a ve výchozím stavu vypnuté.',
        },
        {
          question: 'Co když jsou oznámení vypnutá?',
          answer:
            'Upozornění na konec relace a motivační připomínky vyžadují oprávnění k oznámením. Použijte Nastavení → Oznámení → Otevřít Nastavení a zapněte je v Nastavení iOS.',
        },
        {
          question: 'Jak fungují Live Activities?',
          answer:
            'Na podporovaných iPhonech může volitelná Live Activity zobrazit aktivní relaci na zamykací obrazovce a v Dynamic Island. Oprávnění se vyžádá při zapnutí souvisejících funkcí.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Co je Pomodoro Pro?',
          answer:
            'Pomodoro Pro je volitelný nákup v aplikaci na iPhonu. Odemyká Ochranu soustředění, vlastní štítky (vlastní názvy a barvy) a Statistiky štítků (týdenní a měsíční čas soustředění podle štítku). Časovač, vestavěné štítky, historie soustředění a synchronizace zůstávají dostupné i bez Pro.',
        },
        {
          question: 'Jaké možnosti nákupu jsou k dispozici?',
          answer:
            'Pomodoro Pro nabízíme jako měsíční předplatné, roční (Annual) předplatné nebo jednorázový nákup Lifetime. Předplatná se obnovují automaticky, pokud nezrušíte alespoň 24 hodin před koncem aktuálního období. Lifetime se účtuje jednou a není předplatným.',
        },
        {
          question: 'Kde Pomodoro Pro koupím nebo zobrazím?',
          answer:
            'Na iPhonu otevřete Nastavení → Pomodoro Pro nebo klepněte na chip ochrany na domovské obrazovce. Musíte být přihlášeni. Pro zůstává s vaším účtem na každém zařízení, kde se přihlásíte.',
        },
        {
          question: 'Jak obnovím nákupy?',
          answer:
            'Použijte Obnovit nákupy na paywallu nebo v Nastavení → Pomodoro Pro. Nákupy provedené se stejným Apple účtem se přiřadí k účtu, ke kterému jste přihlášeni. Pokud se nic nenajde, ověřte Apple účet, kterým jste Pro koupili, a zkuste to znovu online.',
        },
      ],
    },
    purchases: {
      title: 'Předplatná a nákupy',
      items: [
        {
          question: 'Jak spravuji nebo zruším předplatné?',
          answer:
            'Předplatná účtuje Apple. Na iPhonu otevřete Nastavení → Pomodoro Pro → Spravovat předplatné, nebo přejděte do Nastavení → [vaše jméno] → Předplatná a vyberte aplikaci. Zrušte alespoň 24 hodin před obnovením, abyste se vyhnuli další platbě. Smazání aplikace nebo účtu Pomodoro předplatné nezruší.',
        },
        {
          question: 'Jak požádám o vrácení peněz?',
          answer:
            'Vrácení peněz řeší Apple. Navštivte reportaproblem.apple.com, přihlaste se Apple účtem použitým při nákupu, najděte transakci a odešlete žádost o vrácení. Refundace v App Store nemůžeme zpracovat sami.',
        },
        {
          question: 'Co když nákup selže nebo se Pro neodemkne?',
          answer:
            'Zůstaňte přihlášeni, zkontrolujte síťové připojení a zkuste to znovu. Pokud platba čeká (např. Ask to Buy), Pro se odemkne po schválení. Pokud jste už zaplatili, použijte Obnovit nákupy. Při problémech s platbou u aktivního předplatného aktualizujte platební metodu v nastavení App Store.',
        },
        {
          question: 'Co když koupím Lifetime při aktivním předplatném?',
          answer:
            'Lifetime odemkne Pro natrvalo, ale existující předplatné se automaticky nezruší. Vypněte automatické obnovení v nastavení předplatného App Store, abyste nebyli znovu účtováni.',
        },
      ],
    },
    focusProtection: {
      title: 'Ochrana soustředění',
      items: [
        {
          question: 'Co je Ochrana soustředění?',
          answer:
            'Ochrana soustředění je funkce Pomodoro Pro na iPhonu. Používá API Screen Time od Apple k blokování aplikací, kategorií nebo webů, které zvolíte, během relace soustředění. Přestávky se nikdy neblokují. Po skončení relace se blokované aplikace automaticky odemknou.',
        },
        {
          question: 'Jak ji nastavím?',
          answer:
            'S aktivním Pro klepněte na chip Ochrany soustředění na domovské obrazovce (nebo ji otevřete z Nastavení). Povolte přístup ke Screen Time, zvolte, co blokovat, a zapněte Ochranu soustředění. Spusťte relaci soustředění, aby se štíty aplikovaly.',
        },
        {
          question: 'Jak ji vypnu nebo odemknu aplikace?',
          answer:
            'Otevřete panel Ochrany soustředění a zvolte Vypnout nyní, nebo funkci vypněte. Po skončení relace můžete také použít Odemknout aplikace na obrazovce štítu. Chcete-li úplně odebrat přístup aplikace ke Screen Time, přejděte do Nastavení iOS → Screen Time → Aplikace s přístupem ke Screen Time.',
        },
        {
          question: 'Co když Ochrana soustředění nefunguje?',
          answer:
            'Ověřte, že je Pro aktivní, přístup ke Screen Time je povolen a vybrali jste aplikace nebo kategorie k blokování. Ochrana soustředění platí jen během relací soustředění, ne během přestávek. Pokud byl přístup odebrán v systémových Nastaveních, otevřete aplikaci a znovu ho povolte. Restart iPhonu může po změně oprávnění pomoci.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Účet a soukromí',
      items: [
        {
          question: 'Jak smažu účet?',
          answer:
            'Přihlaste se, otevřete Nastavení → Účet → Smazat účet a potvrďte. Váš účet a synchronizovaná historie soustředění se trvale smažou z naší produkční databáze. Toto nelze vrátit. Smazání vyžaduje síťové připojení. Smazání účtu nezruší předplatné App Store — spravujte ho v nastavení App Store.',
        },
        {
          question: 'Co smazání účtu ovlivní?',
          answer:
            'Synchronizovaná cloudová data tohoto účtu se odstraní, autorizace Sign in with Apple se zruší, pokud je uložena, u poskytovatele nákupů požádáme o smazání záznamu nákupu propojeného s účtem a data účtu se odstraní ze zařízení, na kterém mažete. Lokální kopie na jiných zařízeních se už nemohou synchronizovat; v případě potřeby aplikaci odstraňte nebo data vymažte. Zálohy poskytovatele mohou smazaná data po omezenou dobu uchovávat pro obnovu. Apple vede vlastní záznamy transakcí App Store.',
        },
        {
          question: 'Jak exportuji svá data?',
          answer:
            'Nastavení → Účet → Exportovat má data uloží soubor JSON s relacemi, denními cíli, synchronizovaným nastavením a profilem účtu. Nepřiřazená lokální data lze exportovat také z přihlašovací obrazovky.',
        },
        {
          question: 'Kde najdu zásady ochrany soukromí?',
          answer:
            'Zásady ochrany soukromí otevřete na webu produktu nebo použijte odkaz na soukromí na produktových stránkách tohoto webu.',
        },
      ],
    },
    requirements: {
      title: 'Požadavky',
      body: 'iPhone: iOS 17 nebo novější. Mac: macOS 14.6 nebo novější. Nákupy Pomodoro Pro a Ochrana soustředění jsou k dispozici na iPhonu.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Pro pomoc, zpětnou vazbu nebo hlášení chyb:',
    },
    privacyPolicyLink: 'Zásady ochrany soukromí',
  },
  privacy: {
    metaTitle: `Zásady ochrany soukromí ${PULSE_APP_NAME}`,
    metaDescription: `Zásady ochrany soukromí pro ${PULSE_APP_NAME}: přihlášení přes Apple a Google, cloudová synchronizace, nákupy Pomodoro Pro přes RevenueCat, Ochrana soustředění, analytika a smazání účtu na Macu a iPhonu.`,
    title: 'Zásady ochrany soukromí',
    subtitle: `${PULSE_APP_NAME} — Pomodoro časovač pro Mac a iPhone`,
    lastUpdated: 'Naposledy aktualizováno: 26. října 2026',
    summary: {
      title: 'Shrnutí',
      body: `Po přihlášení přes Apple nebo Google váš účet synchronizuje historii soustředění, denní cíle a nastavení časovače mezi Macem a iPhonem. Ukládáme jen to, co aplikace pro tento účel potřebuje: vaši e-mailovou adresu, identifikátor účtu a data soustředění, která vytvoříte. Nikdy je neprodáváme, nepoužíváme pro reklamu ani nesdílíme s naším poskytovatelem analytiky. Koupíte-li Pomodoro Pro na iPhonu, náš poskytovatel nákupů RevenueCat uchovává historii nákupů propojenou s účtem, aby Pro fungovalo na každém zařízení, kde jste přihlášeni. Volby aplikací v Ochraně soustředění iPhone nikdy neopustí. Data můžete kdykoli exportovat nebo účet smazat v Nastavení. Samostatně může aplikace odesílat anonymní analytiku šetrnou k soukromí, abychom mohli zlepšovat průběh soustředění.`,
    },
    localData: {
      title: 'Data uložená na vašem zařízení',
      body: 'Nastavení časovače, preference relací a historie soustředění se ukládají lokálně na Macu nebo iPhonu pomocí standardního systémového úložiště, aby časovač fungoval offline. Každý přihlášený účet na zařízení má vlastní lokální úložiště. Přihlašovací relace je v systémové Keychain. Jazyk, vzhled, Spuštění po přihlášení, oznámení a motivační připomínky zůstávají na každém zařízení a nesynchronizují se. Obsah historie soustředění se nenahrává k našemu poskytovateli analytiky.',
      migrationSafety:
        'Při prvním přihlášení na zařízení, které už má historii soustředění, se aplikace zeptá, než tuto historii přesune do účtu. Dokud není přesun na našich serverech potvrzen plus 90 dní, aplikace ponechá předchozí lokální kopii a lokální záložní soubor na zařízení jako pojistku a poté je automaticky odstraní.',
    },
    accountAndSync: {
      title: 'Váš účet a synchronizovaná data',
      intro: 'Přihlásíte-li se, zpracováváme:',
      items: [
        'Kontaktní údaje: e-mailovou adresu sdílenou Sign in with Apple (může jít o soukromou přeposílací adresu přes Hide My Email) nebo Google. Nežádáme o vaše jméno.',
        'Identifikátory: ID účtu vytvořené při přihlášení a náhodné ID každé instalace, používané jen ke synchronizaci a k určení, které zařízení změnu provedlo.',
        'Data soustředění: dokončené a smazané relace soustředění a přestávek (časy, délky, místní den a časové pásmo a zvolený štítek), štítky, které vytvoříte (název a barva), denní cíle, nejlepší série a synchronizovaná nastavení (délky relací, denní cíl, zvuk, animace, zvuk po dokončení, oslavné zvíře).',
      ],
      closing:
        'Tato data slouží jen k synchronizaci, historii a funkcím účtu. Jsou propojena s účtem, nepoužívají se ke sledování a nesdílí se s třetími stranami kromě zpracovatelů uvedených níže.',
    },
    processors: {
      title: 'Zpracovatelé a umístění úložiště',
      bodyBeforeSupabase: 'Data účtu a synchronizace ukládáme u',
      bodyAfterSupabase:
        ' (databáze a autentizace) v Evropské unii. Přihlášení zajišťuje',
      orWord: 'nebo',
      bodyAfterProviders:
        ', podle zvolené možnosti. Nákupy Pomodoro Pro spravujeme pomocí',
      bodyAfterRevenueCat:
        ' (viz Nákupy níže). Data jsou při přenosu šifrována a přístup je omezen tak, aby každý účet mohl číst jen svá data.',
    },
    purchases: {
      title: 'Nákupy (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro prodáváme přes App Store; platbu zpracovává Apple a my nikdy nevidíme platební údaje. Aby Pro fungovalo na každém zařízení, kde jste přihlášeni, aplikace sdílí ID účtu s',
      bodyAfterRevenueCat:
        ', který uchovává historii nákupů (zakoupené produkty, data nákupu a obnovení, stav předplatného) propojenou s tímto ID. Tato data slouží jen k udělení a obnovení přístupu Pro, nepoužívají se ke sledování a nesdílí se s naším poskytovatelem analytiky. Pro vyžaduje přihlášený účet; před přihlášením se k RevenueCat nic neodesílá.',
    },
    focusProtection: {
      title: 'Ochrana soustředění (iPhone)',
      body: 'Ochrana soustředění používá framework Screen Time od Apple (Family Controls) k blokování aplikací, kategorií a webů, které zvolíte během relace soustředění. Apple aplikaci poskytuje jen neprůhledné tokeny vašich voleb: nevidíme, které aplikace nebo weby jste vybrali, jak je používáte, ani jiná data Screen Time. Vaše volby zůstávají na tom iPhonu, nikdy se nenahrávají ani nesynchronizují a neodesílají se našemu poskytovateli analytiky. Ochranu soustředění můžete kdykoli vypnout v aplikaci nebo odebrat přístup aplikace v Nastavení → Screen Time → Aplikace s přístupem ke Screen Time.',
    },
    retention: {
      title: 'Uchovávání, zálohy a mazání',
      items: [
        'Synchronizovaná data uchováváme po dobu existence účtu.',
        'Smazání účtu (Nastavení → Účet → Smazat účet) trvale smaže účet a všechna synchronizovaná data z naší produkční databáze, zruší autorizaci Sign in with Apple aplikace, pokud je uložena, požádá RevenueCat o smazání záznamu nákupu propojeného s účtem a odstraní data účtu ze zařízení, na kterém mažete. Lokální kopie na jiných zařízeních se už nemohou synchronizovat a zůstanou tam, dokud aplikaci na těch zařízeních neodstraníte nebo je neodeberete z přihlašovací obrazovky, pokud je to nabídnuto.',
        'Náš poskytovatel databáze uchovává denní zálohy po dobu 7 dní. Smazaná data v nich mohou zůstat do vypršení; zálohy slouží jen pro obnovu po havárii. Můžeme také uchovávat šifrovanou týdenní zálohu až 90 dní ke stejnému účelu.',
        'Smazání účtu nezruší předplatné App Store; spravujte nebo zrušte ho v nastavení Apple účtu. Apple vede vlastní záznamy transakcí App Store.',
        'Odhlášení nic nesmaže. Nesynchronizované změny zůstanou na zařízení, dokud se stejný účet znovu nepřihlásí.',
        'Záznamy analytiky zpracovává TelemetryDeck podle svých postupů uchovávání a nepoužívají se k obnově historie soustředění.',
      ],
    },
    export: {
      title: 'Export',
      body: 'Nastavení → Účet → Exportovat má data uloží soubor JSON s relacemi, denními cíli, synchronizovaným nastavením a profilem účtu. Data, která ještě nebyla přesunuta do účtu, lze exportovat také z přihlašovací obrazovky.',
    },
    analytics: {
      title: 'Analytika',
      introBeforeLink: 'Používáme',
      introAfterLink:
        ', analytickou službu zaměřenou na soukromí, abychom pochopili, jak se aplikace používá (např. spuštěné nebo dokončené relace soustředění nebo přestávek, změny denního cíle, změny nastavení, výsledky oprávnění k oznámením, události motivačních připomínek a zda bylo dokončeno úvodní nastavení). Signály neobsahují volný text, jména, e-maily ani obsah historie soustředění.',
      identifier:
        'TelemetryDeck identifikuje instalace hashovaným identifikátorem vázaným na zařízení a může připojit neosobní metadata zařízení (např. model, verze OS a locale). Tato data slouží jen k analytice, námi nejsou propojena s vaší identitou a nepoužívají se ke sledování napříč aplikacemi nebo weby jiných společností.',
      learnMore: 'Více informací:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Aktualizace App Store',
      body: 'Použijete-li v Nastavení „Zkontrolovat aktualizace“, aplikace může kontaktovat Apple a zjistit, zda je v App Store k dispozici novější verze.',
    },
    launchAtLogin: {
      title: 'Spuštění po přihlášení (Mac)',
      body: 'Zapnete-li v Nastavení na Macu Spuštění po přihlášení, aplikace použije systémová API macOS k registraci jako položky při přihlášení. Tuto preferenci ovládáte vy a kdykoli ji můžete vypnout.',
    },
    notifications: {
      title: 'Oznámení a Live Activities (iPhone)',
      body: 'Na iPhonu volitelná lokální oznámení, motivační připomínky a Live Activities pomohou vidět konec relace nebo jemně se vrátit k soustředění. Oprávnění se vyžádá jen při zapnutí těchto funkcí. Obsah oznámení zůstává na vašem zařízení.',
    },
    whatWeDoNotDo: {
      title: 'Co neděláme',
      items: [
        'Žádné reklamní sítě',
        'Neprodáváme osobní údaje',
        'Nepřistupujeme ke kontaktům, fotkám, přesné poloze, fotoaparátu ani mikrofonu pro analytiku',
      ],
    },
    children: {
      title: 'Děti',
      body: `${PULSE_APP_NAME} vědomě neshromažďuje osobní údaje dětí nad rámec toho, co účet pro synchronizaci potřebuje, jak je popsáno výše. Signály analytiky jsou anonymní a neobsahují osobní obsah.`,
    },
    changes: {
      title: 'Změny',
      body: 'Pokud se tyto zásady změní, aktualizovaná verze bude zveřejněna na této URL.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Dotazy k těmto zásadám:',
    },
  },
}
