import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const skMessages: PulseMessages = {
  languageLabel: 'Jazyk stránky',
  video: {
    ariaLabel: `Návod na produkt ${PULSE_APP_NAME}`,
    playLabel: 'Prehrať návod',
    unsupported: 'Váš prehliadač nepodporuje vložené video.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Časovač sústredenia pre iPhone a Mac`,
    metaDescription: `${PULSE_APP_NAME} je pokojný časovač Pomodoro pre iPhone a Mac s prihlásením Focus History, Daily Focus Goals, Apple a Google a synchronizáciou v režime offline medzi vašimi zariadeniami.`,
    heroImageAlt: `Časovač zaostrenia ${PULSE_APP_NAME} a prehľad týždennej histórie`,
    backToProjects: 'Späť k projektom',
    availableOnAppStore: 'Dostupné na App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Časovač Sústredenie pre iPhone a Mac',
    tagline: 'Jemný časovač Pomodoro, ktorý vám pomôže sústrediť sa – na iPhone a na paneli ponuky Mac.',
    description: `Spustite reláciu Sústredenie, urobte si prestávku a majte svoju históriu stále pri sebe. Prihláste sa cez Apple alebo Google, aby Daily Focus Goals, Focus History a synchronizované nastavenia zostali vo vašom účte na iPhone aj Macu – pričom časovač naďalej funguje offline.`,
    downloadCta: 'Stiahnite si na App Store',
    watchDemo: 'Sledujte to v akcii',
    supportCta: 'Podpora',
    stats: {
      platformLabel: 'Platformy',
      platformValue: 'iPhone & Mac',
      languagesLabel: 'Jazyky',
      languagesValue: '48 jazykov',
      dataLabel: 'Synchronizovať',
      dataValue: 'Najprv offline',
      builtWithLabel: 'Postavené s',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Tichší spôsob sústredenia',
      title: 'Váš časovač je tam, keď ho potrebujete – a zmizne, keď ho nepotrebujete.',
      description: `Na Mac otvorte ${PULSE_APP_NAME} z panela ponuky, vyberte reláciu a zatvorte kontextové okno. Na iPhone spustite Sústredenie z Home a pokračujte so Live Activities na podporovaných zariadeniach. Časovač stále funguje, zatiaľ čo vy.`,
      caption:
        'Sústredenie a časovače prestávok, Daily Focus Goals, Focus History, sledovanie pruhov, 48-jazyková lokalizácia a voliteľné upozornenia na dokončenie.',
    },
    rhythm: {
      eyebrow: 'Rytmus, ktorý ovládate',
      title: 'Sústredenie, pozastaviť, obnoviť, opakovať.',
      description: `${PULSE_APP_NAME} navrhne, čo bude nasledovať, ale nikdy za vás nezačne reláciu. Každé trvanie sa dá prispôsobiť vášmu dňu.`,
    },
    featureShowcases: [
      {
        title: 'Sústredenie',
        badge: '1 – 120 min',
        description:
          'Odpočítavanie beží ticho, keď pracujete. Pozastavenie, resetovanie alebo preskočenie – máte stále pod kontrolou iPhone a Mac.',
        imageFile: 'focus-running.png',
        alt: `Relácia zamerania ${PULSE_APP_NAME} prebieha s ovládacími prvkami pauzy a odpočítavaním`,
      },
      {
        title: 'Panel s ponukami',
        badge: 'Mac',
        description:
          'Na Mac zobrazte alebo skryte zostávajúci čas v lište ponuky. Stavová položka s pevnou šírkou zostane bez posunutia vyskakovacieho okna až do 120:00.',
        imageFile: 'menubar.png',
        alt: `Odpočítavanie ${PULSE_APP_NAME} zobrazené v lište ponuky macOS`,
      },
      {
        title: 'Prispôsobenie',
        badge: 'Vaše pravidlá',
        description:
          'Flexibilné trvanie, Daily Focus Goals, zvuky a animácie dokončenia, 48 jazykov používateľského rozhrania a predvoľby vzhľadu.',
        imageFile: 'settings.png',
        alt: `Nastavenia ${PULSE_APP_NAME} pre trvanie, upozornenia na dokončenie, jazyk a ciele`,
      },
    ],
    history: {
      eyebrow: 'Pokrok bez tlaku',
      title: 'Pozrite si pribúdajúcu prácu.',
      description:
        'Otvorte Focus History a skontrolujte súčty a pruhy. Keď ste prihlásení, história sa môže synchronizovať medzi vašimi iPhone a Mac, takže pokrok vás bude nasledovať.',
      items: ['Celkový čas zaostrenia', 'Počet dokončených relácií', 'Aktuálna séria', 'Najlepšia séria', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} týždenná história zamerania s počtami relácií, zameranými hodinami a sériou`,
    },
    feedback: {
      eyebrow: 'Jemná spätná väzba, vaša cesta',
      title: 'Nechajte dokončenie cítiť obohacujúce.',
      description: `Vyberte si zo šiestich pokojných zvukov dokončenia a šiestich zvieracích osláv alebo jeden z nich vypnite. ${PULSE_APP_NAME} zobrazuje správnu správu, keď sa skončí relácia Sústredenie, Krátka pauza alebo Dlhá pauza.`,
      items: [
        'Názov a podnadpis dokončenia relácie',
        'Používateľské rozhranie v 48 jazykoch s predvoleným jazykom systému',
        'Predvoľby jazyka a vzhľadu na každom zariadení',
        'Voliteľné pripomenutia motivácie na iPhone',
      ],
      settingsImageAlt: `Nastavenia ${PULSE_APP_NAME} pre trvanie, jazyk, zvuky dokončenia a ciele`,
      celebrationImageAlt: `Animácia oslavy králika ${PULSE_APP_NAME} po dokončení relácie`,
      soundNames: ['Lesné vtáky', 'Krištáľová zvonkohra', 'Jemná Marimba', 'Dažďové kvapky', 'Mäkký zvonček', 'Zen Gong'],
      animalNames: ['Opica', 'Koala', 'Cat', 'Fox', 'Panda', 'Králik'],
    },
    native: {
      eyebrow: 'Natívne podľa dizajnu',
      title: 'Postavené tak, aby ste sa na zariadeniach Apple cítili ako doma.',
      description: `SwiftUI, AppKit a systémové konvencie udržujú ${PULSE_APP_NAME} rýchly a známy – so štítkami VoiceOver a podporou Reduce Motion.`,
      features: [
        {
          title: 'Lišta ponuky Mac a domovská stránka iPhone',
          description: 'Tichý sprievodca panela s ponukami na Mac a sústredený domáci zážitok na iPhone.',
        },
        {
          title: 'Zostáva presný',
          description:
            'Relácie zostávajú správne počas spánku, prebudenia a opätovného spustenia, pričom história sa zaznamenáva v aktuálnom termíne.',
        },
        {
          title: 'Prvá synchronizácia offline',
          description:
            'Pokračujte v zaostrovaní bez pripojenia. Keď budete opäť online, zmeny po prihlásení sa zosynchronizujú s vaším účtom.',
        },
        {
          title: 'Hovorí vaším jazykom',
          description:
            'Úplné používateľské rozhranie v 48 jazykoch s predvoleným systémovým jazykom a manuálnym prepísaním v Nastaveniach.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Súkromné ​​podľa návrhu',
      title: 'Vaše zameranie zostáva na vás.',
      description: `${PULSE_APP_NAME} používa účet, takže história sa môže synchronizovať medzi vašimi zariadeniami. Ukladáme len to, čo synchronizácia potrebuje, nikdy nepredávame vaše údaje a analýzy uchovávame oddelene od vašej histórie zamerania.`,
      items: [
        'Prihlásenie cez Apple alebo Google',
        'Zameranie na každé zariadenie v režime offline',
        'Cloudová synchronizácia pre históriu a synchronizované predvoľby',
        'Žiadne reklamné siete',
        'Svoj účet môžete kedykoľvek odstrániť v Nastaveniach',
      ],
    },
    closing: {
      title: 'Urobte si priestor na sústredenú prácu.',
      description: `Získajte ${PULSE_APP_NAME} na App Store pre iPhone a Mac alebo si prečítajte zásady ochrany osobných údajov a stránku podpory, ak potrebujete pomoc.`,
      getSupport: 'Získajte podporu',
      privacy: 'Ochrana osobných údajov',
    },
  },
  support: {
    metaTitle: `Podpora ${PULSE_APP_NAME}`,
    metaDescription: `Podpora, časté otázky a pomoc s účtom pre ${PULSE_APP_NAME} na iPhone a Mac – vrátane Pomodoro Pro, nákupov, Focus Protection, prihlásenia, synchronizácie a odstránenia účtu.`,
    title: `Podpora ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} je pokojný časovač Pomodoro pre iPhone a Mac. Prihláste sa cez Apple alebo Google a synchronizujte Focus History medzi zariadeniami. Na iPhone voliteľné Pomodoro Pro odomkne Focus Protection, vlastné štítky a Tag Insights.`,
    gettingStarted: {
      title: 'Začíname',
      items: [
        {
          question: 'Ako spustím reláciu Sústredenie?',
          answer:
            'Na Mac kliknite na ikonu aplikácie na paneli s ponukami, vyberte Sústredenie, Krátka pauza alebo Dlhá pauza a stlačte tlačidlo Štart. Na iPhone otvorte aplikáciu, vyberte reláciu na ploche a stlačte Štart. Počas behu časovača môžete aplikáciu opustiť.',
        },
        {
          question: 'Ako zmením trvanie Sústredenie a prestávky?',
          answer:
            'Otvorte Nastavenia a upravte dĺžky Sústredenie, Krátka pauza a Dlhá pauza. Môžete si tiež vybrať prednastavený rytmus a potom jemne doladiť minúty.',
        },
        {
          question: 'Ako nakonfigurujem Daily Focus Goals?',
          answer:
            'V Nastaveniach nastavte, koľko relácií Sústredenie chcete každý deň. Pokrok sa zobrazí na ploche a v Focus History.',
        },
        {
          question: 'Ako zobrazím Focus History?',
          answer:
            'Otvorte Focus History z aplikácie (na Mac z rozbaľovacej alebo stavovej ponuky). Uvidíte súčty, pruhy a týždenný pokrok.',
        },
        {
          question: 'Ako zmením jazyk a vzhľad?',
          answer:
            'V Nastaveniach vyberte Jazyk (Systém alebo podporovaný jazyk) a Vzhľad (Systém, Svetlý alebo Tmavý). Tieto predvoľby zostávajú na každom zariadení a nesynchronizujú sa.',
        },
      ],
    },
    accounts: {
      title: 'účty',
      items: [
        {
          question: 'Prečo sa vyžaduje prihlásenie?',
          answer:
            'Účet umožňuje Focus History, Daily Focus Goals a synchronizovaným preferenciám zostať s vami v rámci iPhone a Mac. Nové inštalácie vás pred použitím časovača požiadajú o prihlásenie. Zariadenia, ktoré inovujú zo starších verzií, môžu uchovávať miestnu históriu použiteľnú, kým sa neprihlásite. Nákupy Pomodoro Pro tiež zostávajú na vašom prihlásenom účte.',
        },
        {
          question: 'Ako sa prihlásim pomocou Apple alebo Google?',
          answer:
            'Na prihlasovacej obrazovke vyberte Pokračovať cez Apple alebo Pokračovať cez Google a dokončite postup poskytovateľa. Apple môže ponúknuť možnosť Skryť môj e-mail.',
        },
        {
          question: 'Ako sa odhlásim?',
          answer:
            'Otvorte Nastavenia → Účet → Odhlásiť sa. Ak sa niektoré zmeny ešte nesynchronizovali, aplikácia vás môže najskôr požiadať o synchronizáciu alebo sa aj tak odhlásiť. Odhlásením sa váš účet neodstráni.',
        },
        {
          question: 'Ako sa znova prihlásim?',
          answer:
            'Na prihlasovacej obrazovke použite rovnakú metódu Apple alebo Google. Vaša história cloudu sa obnoví do daného účtu v zariadení.',
        },
        {
          question: 'Čo sa stane, ak použijem iný účet?',
          answer:
            'Každý účet má svoju vlastnú históriu. Prihlásenie do iného účtu nezlúči nesúvisiace histórie. Pred potvrdením nároku na históriu na zariadení, ktoré už má lokálne relácie, vyberajte pozorne.',
        },
        {
          question: 'Môžem prepojiť Apple a Google s rovnakým účtom?',
          answer:
            'áno. V časti Nastavenia → Účet môžete prepojiť iný spôsob prihlásenia, ak ho ešte nepoužíva iný účet.',
        },
      ],
    },
    cloudSync: {
      title: 'Cloudová synchronizácia',
      items: [
        {
          question: 'Čo sa synchronizuje medzi zariadeniami?',
          answer:
            'Sústredenie a história relácie prerušenia (vrátane značky, ktorú ste si vybrali), značky, ktoré vytvoríte, záznamy Denný cieľ sústredenia, údaje účtu súvisiace so sériou a synchronizované preferencie, ako sú dĺžka relácie, denný cieľ, zvuk, animácie, zvuk dokončenia a zviera na oslavu.',
        },
        {
          question: 'Čo sa stane bez internetu?',
          answer:
            'Po prihlásení môžete časovač naďalej používať offline. Nové relácie a zmeny zostanú v zariadení, kým nebude k dispozícii pripojenie.',
        },
        {
          question: 'Čo sa stane, keď budem opäť online?',
          answer:
            'Aplikácia sa synchronizuje čakajúce zmeny s vaším účtom. Synchronizácia je najskôr offline a nakoniec konzistentná – nejde o okamžitú spoluprácu v reálnom čase.',
        },
        {
          question: 'Ako môžem použiť rovnaký účet na iPhone a Mac?',
          answer:
            'Nainštalujte aplikáciu na obe zariadenia a prihláste sa pomocou rovnakého účtu Apple alebo Google. Po dokončení obnovy sa na oboch môže zobraziť Focus History.',
        },
        {
          question: 'Čo ak chýba história?',
          answer:
            'Potvrďte, že ste prihlásení do rovnakého účtu, počkajte na dokončenie obnovy/synchronizácie a znova skontrolujte Focus History. Ak ste sa prihlásili do iného účtu, tento účet bude zobrazovať svoju vlastnú históriu.',
        },
      ],
    },
    migration: {
      title: 'Inovácia zo staršej verzie',
      items: [
        {
          question: 'Čo sa stane s mojou miestnou históriou?',
          answer:
            'Existujúca miestna história sa neodstráni potichu. Po prihlásení sa aplikácia spýta pred pridaním histórie do vášho účtu.',
        },
        {
          question: 'Ako si mám nárokovať svoju históriu?',
          answer:
            'Prihláste sa do účtu, ktorý by mal vlastniť históriu, skontrolujte obrazovku Pridať históriu a potom vyberte Pridať do tohto účtu. Ak je zobrazený účet nesprávny, použite iný účet. Relácie nie je možné neskôr presunúť do iného účtu.',
        },
        {
          question: 'Čo ak sa nastavenia zariadenia a účtu líšia?',
          answer:
            'Aplikácia sa môže opýtať, či má ponechať nastavenia tohto zariadenia alebo použiť nastavenia účtu. Jazyk, vzhľad, upozornenia a pripomenutia motivácie zostanú lokálne v zariadení.',
        },
      ],
    },
    notifications: {
      title: 'Upozornenia',
      items: [
        {
          question: 'Ako povolím upozornenia na iPhone?',
          answer:
            'Otvorte Nastavenia → Upozornenia a vyberte Povoliť alebo otvorte Nastavenia systému, ak bolo povolenie predtým odmietnuté.',
        },
        {
          question: 'Ako fungujú pripomenutia motivácie?',
          answer:
            'Na iPhone otvorte Nastavenia → Pripomienky motivácie a zapnite ich po povolení upozornení. Môžete ich pozastaviť alebo nastaviť tiché hodiny. Sú voliteľné a predvolene vypnuté.',
        },
        {
          question: 'Čo ak sú upozornenia zakázané?',
          answer:
            'Upozornenia na konci relácie a pripomenutia motivácie vyžadujú povolenie na upozornenia. Pomocou Nastavenia → Oznámenia → Otvorte Nastavenia ich zapnite v Nastaveniach iOS.',
        },
        {
          question: 'Ako funguje Live Activities?',
          answer:
            'Na podporovaných iPhone môže voliteľná Živá aktivita zobraziť aktívnu reláciu na uzamknutej obrazovke a Dynamic Island. Povolenie sa vyžaduje, keď povolíte súvisiace funkcie.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Čo je Pomodoro Pro?',
          answer:
            'Pomodoro Pro je voliteľný nákup v aplikácii na iPhone. Odomkne Focus Protection, vlastné značky (vaše vlastné mená a farby) a Tag Insights (čas zamerania na týždeň a mesiac podľa značky). Časovač, vstavané značky, Focus History a synchronizácia zostávajú dostupné aj bez Pro.',
        },
        {
          question: 'Aké možnosti nákupu sú k dispozícii?',
          answer:
            'Pomodoro Pro sa ponúka ako mesačné predplatné, ročné (ročné) predplatné alebo doživotný jednorazový nákup. Predplatné sa automaticky obnoví, pokiaľ ho nezrušíte aspoň 24 hodín pred koncom aktuálneho obdobia. Doživotné sa účtuje raz a nejde o predplatné.',
        },
        {
          question: 'Kde kúpim alebo uvidím Pomodoro Pro?',
          answer:
            'Na iPhone otvorte Nastavenia → Pomodoro Pro alebo klepnite na ochranný čip na Domov. Musíte byť prihlásení. Pro zostane váš účet na každom zariadení, do ktorého sa prihlásite.',
        },
        {
          question: 'Ako obnovím nákupy?',
          answer:
            'Použite možnosť Obnoviť chýbajúce nákupy na obrazovke nákupu alebo v časti Nastavenia → Pomodoro Pro. Nákupy uskutočnené s rovnakým účtom Apple sa prenesú do účtu, do ktorého ste prihlásení. Ak sa nič nenájde, skontrolujte, či používate účet Apple, cez ktorý ste si kúpili Pro, a skúste to znova online.',
        },
      ],
    },
    purchases: {
      title: 'Predplatné a nákupy',
      items: [
        {
          question: 'Ako môžem spravovať alebo zrušiť predplatné?',
          answer:
            'Predplatné účtuje Apple. Na iPhone otvorte Nastavenia → Pomodoro Pro → Spravovať predplatné alebo prejdite do Nastavenia → [vaše meno] → Predplatné a vyberte aplikáciu. Zrušte aspoň 24 hodín pred obnovením, aby ste sa vyhli ďalšiemu nabitiu. Odstránením aplikácie alebo účtu Pomodoro sa predplatné nezruší.',
        },
        {
          question: 'Ako požiadam o vrátenie peňazí?',
          answer:
            'Vrátenie peňazí vybavuje Apple. Navštívte reportaproblem.apple.com, prihláste sa pomocou účtu Apple použitého na nákup, nájdite transakciu a odošlite žiadosť o vrátenie peňazí. Vrátenie peňazí z App Store nemôžeme spracovať sami.',
        },
        {
          question: 'Čo ak nákup zlyhá alebo sa Pro neodomkne?',
          answer:
            'Zostaňte prihlásený, skontrolujte sieťové pripojenie a skúste to znova. Ak platba čaká (napríklad Požiadať o nákup), Pro sa po schválení odomkne. Ak ste už zaplatili, použite možnosť Obnoviť nákupy. V prípade problémov s platbou pri aktívnom odbere aktualizujte spôsob platby v nastaveniach App Store.',
        },
        {
          question: 'Čo ak si kúpim Lifetime, keď je predplatné aktívne?',
          answer:
            'Lifetime odomkne Pro natrvalo, ale existujúce predplatné sa nezruší automaticky. Vypnite automatické obnovenie v nastaveniach predplatného App Store, aby vám už neboli účtované poplatky.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Čo je Focus Protection?',
          answer:
            'Focus Protection je funkcia Pomodoro Pro na iPhone. Používa Apple API Screen Time na blokovanie aplikácií, kategórií alebo webových stránok, ktoré si vyberiete, kým beží relácia Sústredenie. Prestávky nie sú nikdy blokované. Po skončení relácie sa zablokované aplikácie automaticky odomknú.',
        },
        {
          question: 'Ako to nastavím?',
          answer:
            'Keď je Pro aktívny, klepnite na čip Focus Protection na ploche (alebo ho otvorte v Nastaveniach). Keď sa zobrazí výzva, povoľte prístup Screen Time, vyberte, čo chcete blokovať, a potom zapnite Focus Protection. Spustite reláciu Sústredenie na použitie štítov.',
        },
        {
          question: 'Ako ho vypnem alebo odomknem aplikácie?',
          answer:
            'Otvorte hárok Focus Protection a vyberte možnosť Vypnúť teraz alebo funkciu vypnite. Po skončení relácie môžete použiť aj možnosť Odomknúť aplikácie na obrazovke štítu. Ak chcete úplne odstrániť prístup aplikácie Screen Time, prejdite na Nastavenia iOS → Screen Time → Aplikácie s prístupom Screen Time.',
        },
        {
          question: 'Čo ak Focus Protection nefunguje?',
          answer:
            'Potvrďte, že Pro je aktívny, prístup Screen Time je povolený a vybrali ste aplikácie alebo kategórie, ktoré chcete zablokovať. Focus Protection platí len počas relácií Sústredenie, nie prestávok. Ak bol prístup odvolaný v nastaveniach systému, otvorte aplikáciu a znova povoľte prístup. Reštartovanie iPhone môže pomôcť po zmene povolenia.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Účet a súkromie',
      items: [
        {
          question: 'Ako odstránim svoj účet?',
          answer:
            'Prihláste sa, otvorte Nastavenia → Účet → Odstrániť účet a potvrďte. Váš účet a synchronizovaná história zamerania sa natrvalo odstránia z našej živej databázy. Toto sa nedá vrátiť späť. Odstránenie vyžaduje sieťové pripojenie. Odstránenie vášho účtu nezruší predplatné App Store – spravujte to v nastaveniach App Store.',
        },
        {
          question: 'Čo ovplyvní vymazanie účtu?',
          answer:
            'Synchronizované cloudové údaje účtu sa odstránia, uložená autorizácia prihlásenia cez Apple sa zruší, náš poskytovateľ nákupov dostane žiadosť o vymazanie záznamu o nákupe prepojeného s účtom a údaje účtu sa odstránia zo zariadenia, na ktorom účet vymažete. Lokálne kópie na iných zariadeniach sa už nemôžu synchronizovať; v prípade potreby tam odstráňte aplikáciu alebo tieto kópie. Zálohy poskytovateľa môžu vymazané údaje uchovávať počas obmedzeného obdobia obnovy. Apple si ponecháva vlastné záznamy o transakciách v App Store.',
        },
        {
          question: 'Ako exportujem svoje údaje?',
          answer:
            'Nastavenia → Účet → Exportovať moje údaje uloží súbor JSON s reláciami, dennými cieľmi, synchronizovanými nastaveniami a profilom účtu. Nenárokované miestne údaje je možné exportovať aj z prihlasovacej obrazovky.',
        },
        {
          question: 'Kde sú zásady ochrany osobných údajov?',
          answer:
            'Otvorte Zásady ochrany osobných údajov z webovej stránky produktu alebo použite odkaz na ochranu osobných údajov na produktových stránkach tejto lokality.',
        },
      ],
    },
    requirements: {
      title: 'Požiadavky',
      body: 'iPhone: iOS 17 alebo novší. Mac: macOS 14.6 alebo novší. Nákupy Pomodoro Pro a Focus Protection sú k dispozícii na iPhone.',
    },
    contact: {
      title: 'Kontaktovať',
      body: 'Ak potrebujete pomoc, spätnú väzbu alebo hlásenia chýb:',
    },
    privacyPolicyLink: 'Zásady ochrany osobných údajov',
  },
  privacy: {
    metaTitle: `Zásady ochrany osobných údajov ${PULSE_APP_NAME}`,
    metaDescription: `Zásady ochrany osobných údajov pre ${PULSE_APP_NAME}, ktoré zahŕňajú prihlásenie cez Apple a Google, cloudovú synchronizáciu, nákupy Pomodoro Pro cez RevenueCat, Focus Protection, analytiku a odstránenie účtu na Macu a iPhone.`,
    title: 'Zásady ochrany osobných údajov',
    subtitle: `${PULSE_APP_NAME} — Pomodoro časovač pre Mac a iPhone`,
    lastUpdated: 'Naposledy aktualizované: 26. októbra 2026',
    summary: {
      title: 'Zhrnutie',
      body: `Keď sa prihlásite pomocou Apple alebo Google, váš účet uchováva vašu históriu zamerania, denné ciele a nastavenia časovača synchronizované medzi vašimi Mac a iPhone. Ukladáme len to, čo na to aplikácia potrebuje: vašu e-mailovú adresu, identifikátor účtu a údaje zamerania, ktoré vytvoríte. Nikdy ho nepredávame, nikdy ho nepoužívame na reklamu a nikdy ho nezdieľame s naším poskytovateľom analytických služieb. Ak si kúpite Pomodoro Pro na iPhone, náš poskytovateľ nákupov RevenueCat uchováva vašu históriu nákupov prepojenú s vaším účtom, takže Pro funguje na každom zariadení, do ktorého sa prihlásite. Možnosti aplikácií Focus Protection nikdy neopustia váš iPhone. Svoje údaje môžete exportovať alebo svoj účet kedykoľvek odstrániť v časti Nastavenia. Samostatne môže aplikácia odosielať anonymné analýzy používania zachovávajúce súkromie, aby sme mohli zlepšiť toky zamerania.`,
    },
    localData: {
      title: 'Údaje uložené vo vašom zariadení',
      body: 'Vaše nastavenia časovača, preferencie relácie a história zamerania sa ukladajú lokálne na vašom Mac alebo iPhone pomocou štandardného systémového úložiska, takže časovač funguje aj offline. Každý účet prihlásený na zariadení má svoj vlastný samostatný lokálny obchod. Vaša prihlasovacia relácia je uložená v systémovej kľúčenke. Nastavenia jazyka, vzhľadu, spustenia pri prihlásení, upozornení a pripomenutia motivácie zostávajú na každom zariadení a nesynchronizujú sa. Samotný obsah histórie Sústredenie sa neodovzdáva nášmu poskytovateľovi analytických služieb.',
      migrationSafety:
        'Keď sa prvýkrát prihlásite na zariadení, ktoré už má históriu zamerania, aplikácia sa vás opýta, než túto históriu presunie do vášho účtu. Kým sa presun nepotvrdí na našich serveroch, plus 90 dní, aplikácia uchováva predchádzajúcu lokálnu kópiu a lokálny záložný súbor v zariadení ako bezpečnostnú sieť a potom ich automaticky odstráni.',
    },
    accountAndSync: {
      title: 'Váš účet a synchronizované údaje',
      intro: 'Ak sa prihlásite, spracujeme:',
      items: [
        'Kontaktné informácie: e-mailová adresa zdieľaná pri prihlásení cez Apple (môže ísť o súkromnú prenosovú adresu vytvorenú funkciou Skryť môj e-mail) alebo Google. Vaše meno nepožadujeme.',
        'Identifikátory: ID účtu vytvorené pri prihlásení a náhodné ID pre každú inštaláciu, ktoré sa používa iba na synchronizáciu a identifikáciu zariadenia, ktoré vykonalo zmenu.',
        'Údaje Sústredenie: dokončené a odstránené relácie zamerania a prestávok (časy, trvanie, miestny deň a časové pásmo a značka, ktorú ste si vybrali), značky, ktoré vytvoríte (názov a farba), denné ciele, vaša najlepšia séria a synchronizované nastavenia (dĺžka relácie, denný cieľ, zvuk, animácie, zvuk dokončenia, zviera na oslavu).',
      ],
      closing:
        'Tieto údaje sa používajú iba na poskytovanie funkcií synchronizácie, histórie a účtu. Je prepojený s vaším účtom, nepoužíva sa na sledovanie a nezdieľa sa s tretími stranami okrem nižšie uvedených spracovateľov.',
    },
    processors: {
      title: 'Procesory a umiestnenie úložiska',
      bodyBeforeSupabase: 'Údaje účtu a synchronizácie sú uložené s',
      bodyAfterSupabase:
        '(databáza a overenie) v Európskej únii. O prihlásenie sa stará',
      orWord: 'alebo',
      bodyAfterProviders:
        'v závislosti od zvolenej možnosti. Nákupy Pomodoro Pro sú spravované pomocou',
      bodyAfterRevenueCat:
        '(pozri Nákupy nižšie). Údaje sú pri prenose šifrované a prístup je obmedzený, takže každý účet môže čítať iba svoje vlastné údaje.',
    },
    purchases: {
      title: 'Nákupy (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro sa predáva prostredníctvom App Store; Apple spracúva platby a my nikdy nevidíme vaše platobné údaje. Aby sa Pro odomklo na každom zariadení, do ktorého sa prihlásite, aplikácia zdieľa ID vášho účtu so službou',
      bodyAfterRevenueCat:
        ', ktorá uchováva vašu históriu nákupov (kúpené produkty, dátumy nákupu a obnovenia a stav predplatného) prepojenú s týmto ID. Tieto údaje sa používajú iba na udelenie a obnovenie prístupu Pro, nepoužívajú sa na sledovanie a nezdieľajú sa s naším poskytovateľom analytických služieb. Pro vyžaduje prihlásený účet; pred prihlásením sa do RevenueCat neodošle nič.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection používa rámec Screen Time (Family Controls) Apple (Family Controls) na blokovanie aplikácií, kategórií a webových stránok, ktoré si vyberiete, kým prebieha sústredenie. Apple poskytuje aplikácii iba nepriehľadné tokeny pre vaše voľby: nevidíme, ktoré aplikácie alebo webové stránky ste si vybrali, ako ich používate, ani žiadne iné údaje Screen Time. Vaše voľby zostanú na tomto iPhone, nikdy sa nenahrávajú ani nesynchronizujú a neodosielajú sa nášmu poskytovateľovi analytických služieb. Focus Protection môžete v aplikácii kedykoľvek vypnúť alebo jej prístup odobrať v časti Nastavenia → Screen Time → Aplikácie s prístupom Screen Time.',
    },
    retention: {
      title: 'Uchovávanie, zálohovanie a odstraňovanie',
      items: [
        'Vaše synchronizované údaje sa uchovávajú, kým existuje váš účet.',
        'Odstrániť účet (Nastavenia → Účet → Odstrániť účet) natrvalo odstráni váš účet a všetky synchronizované údaje z našej aktívnej databázy, zruší uloženú autorizáciu aplikácie na prihlásenie cez Apple, požiada RevenueCat o vymazanie záznamu o nákupe prepojeného s účtom a odstráni údaje účtu zo zariadenia, na ktorom ho vymažete. Lokálne kópie na ostatných zariadeniach sa už nemôžu synchronizovať a zostanú tam, kým na týchto zariadeniach neodstránite aplikáciu alebo ich neodstránite z prihlasovacej obrazovky, keď sa táto možnosť ponúkne.',
        'Náš poskytovateľ databázy uchováva denné zálohy po dobu 7 dní. Vymazané údaje môžu zostať v týchto zálohách až do uplynutia ich platnosti; zálohy sa používajú iba na obnovu po havárii. Na rovnaký účel môžeme uchovávať aj šifrovanú týždennú zálohu až 90 dní.',
        'Odstránenie účtu nezruší predplatné v App Store. Spravujte alebo zrušte ho v nastaveniach účtu Apple. Apple si uchováva vlastné záznamy o transakciách v App Store.',
        'Odhlásením sa nič nevymaže. Zmeny, ktoré sa ešte nesynchronizovali, zostanú v zariadení, kým sa znova neprihlási ten istý účet.',
        'Záznamy Analytics spracováva TelemetryDeck v rámci svojich postupov uchovávania a nepoužívajú sa na obnovenie vašej histórie zamerania.',
      ],
    },
    export: {
      title: 'Exportovať',
      body: 'Nastavenia → Účet → Exportovať moje údaje uloží súbor JSON s vašimi reláciami, dennými cieľmi, synchronizovanými nastaveniami a profilom účtu. Údaje, ktoré ešte neboli presunuté do účtu, je možné exportovať aj z prihlasovacej obrazovky.',
    },
    analytics: {
      title: 'Analytika',
      introBeforeLink: 'Používame',
      introAfterLink:
        ', analytická služba zameraná na súkromie, aby ste pochopili, ako sa aplikácia používa (napríklad: začaté alebo dokončené relácie zamerania alebo prestávky, zmeny denných cieľov, zmeny nastavení, výsledky povolení upozornení, udalosti pripomenutia motivácie a či je dokončená registrácia). Signály nezahŕňajú text vo voľnom formáte, mená, e-maily ani obsah vašej histórie zamerania.',
      identifier:
        'TelemetryDeck identifikuje inštalácie pomocou hašovaného identifikátora v rozsahu zariadenia a môže pripojiť neosobné metadáta zariadenia (ako je model, verzia OS a miestne nastavenie). Tieto údaje sa používajú iba na analýzu, nie sú nami prepojené s vašou identitou a nepoužívajú sa na sledovanie v rámci aplikácií alebo webových stránok iných spoločností.',
      learnMore: 'Ďalšie informácie:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Aktualizácie App Store',
      body: 'Ak v Nastaveniach použijete „Skontrolovať aktualizácie“, aplikácia môže kontaktovať Apple, aby zistila, či je na App Store dostupná novšia verzia.',
    },
    launchAtLogin: {
      title: 'Spustiť pri prihlásení (Mac)',
      body: 'Ak povolíte možnosť Spustiť pri prihlásení v Nastaveniach na Mac, aplikácia použije systémové API macOS na registráciu ako položka prihlásenia. Túto predvoľbu ovládate vy a môžete ju kedykoľvek deaktivovať.',
    },
    notifications: {
      title: 'Upozornenia a Live Activities (iPhone)',
      body: 'Na iPhone vám voliteľné miestne upozornenia, pripomenutia motivácie a Live Activities pomôžu zistiť, kedy sa relácia skončí, alebo sa jemne vrátiť k zaostreniu. Povolenie sa vyžaduje iba vtedy, keď sa rozhodnete povoliť tieto funkcie. Obsah upozornení zostáva na vašom zariadení.',
    },
    whatWeDoNotDo: {
      title: 'Čo nerobíme',
      items: [
        'Žiadne reklamné siete',
        'Žiadny predaj osobných údajov',
        'Žiadny prístup k vašim kontaktom, fotografiám, presnej polohe, fotoaparátu alebo mikrofónu pre analýzu',
      ],
    },
    children: {
      title: 'deti',
      body: `${PULSE_APP_NAME} vedome nezhromažďuje osobné informácie od detí nad rámec toho, čo účet potrebuje na synchronizáciu, ako je popísané vyššie. Analytické signály sú anonymné a nezahŕňajú osobný obsah.`,
    },
    changes: {
      title: 'Zmeny',
      body: 'Ak sa tieto pravidlá zmenia, aktualizovaná verzia bude uverejnená na tejto webovej adrese.',
    },
    contact: {
      title: 'Kontaktovať',
      body: 'Otázky týkajúce sa týchto pravidiel:',
    },
  },
}
