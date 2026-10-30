import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const hrMessages: PulseMessages = {
  languageLabel: 'Jezik stranice',
  video: {
    ariaLabel: `Predstavljanje proizvoda ${PULSE_APP_NAME}`,
    playLabel: 'Reproduciraj predstavljanje',
    unsupported: 'Vaš preglednik ne podržava ugrađeni videozapis.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Mjerač vremena za fokus na iPhoneu i Macu`,
    metaDescription: `${PULSE_APP_NAME} je nenametljiv Pomodoro mjerač vremena za iPhone i Mac s poviješću fokusa, dnevnim ciljevima fokusa, prijavom putem Applea i Googlea te sinkronizacijom koja prvenstveno radi izvan mreže na svim vašim uređajima.`,
    heroImageAlt: `${PULSE_APP_NAME} mjerač fokusa i pregled tjedne povijesti`,
    backToProjects: 'Natrag na projekte',
    availableOnAppStore: 'Dostupno u trgovini App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Mjerač vremena za fokus na iPhoneu i Macu',
    tagline: 'Nenametljiv Pomodoro mjerač vremena koji vam pomaže da se usredotočite — na iPhoneu i u traci izbornika na Macu.',
    description: `Pokrenite sesiju fokusa, napravite pauzu i nosite svoju povijest sa sobom. Prijavite se putem Applea ili Googlea kako bi Daily Focus Goals, Focus History i sinkronizirane postavke ostali povezani s vašim računom na iPhoneu i Macu — dok mjerač vremena nastavlja raditi izvan mreže.`,
    downloadCta: 'Preuzmite u trgovini App Store',
    watchDemo: 'Pogledajte kako radi',
    supportCta: 'Podrška',
    stats: {
      platformLabel: 'Platforme',
      platformValue: 'iPhone i Mac',
      languagesLabel: 'Jezici',
      languagesValue: '48 jezika',
      dataLabel: 'Sinkronizacija',
      dataValue: 'Prvenstveno izvan mreže',
      builtWithLabel: 'Izrađeno pomoću',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Mirniji način fokusiranja',
      title: 'Mjerač vremena tu je kada vam treba — i nestaje kada vam ne treba.',
      description: `Na Macu otvorite ${PULSE_APP_NAME} iz trake izbornika, odaberite sesiju i zatvorite skočni prozor. Na iPhoneu pokrenite Fokus s početnog zaslona i nastavite uz Live Activities na podržanim uređajima. Mjerač vremena nastavlja raditi dok vi obavljate svoje zadatke.`,
      caption: 'Mjerači fokusa i pauza, Daily Focus Goals, Focus History, praćenje nizova, lokalizacija na 48 jezika i neobavezne obavijesti o završetku.',
    },
    rhythm: {
      eyebrow: 'Ritam kojim vi upravljate',
      title: 'Fokusirajte se, zastanite, oporavite se, ponovite.',
      description: `${PULSE_APP_NAME} predlaže što slijedi, ali nikada ne pokreće sesiju umjesto vas. Svako trajanje možete prilagoditi svom danu.`,
    },
    featureShowcases: [
      {
        title: 'Fokus',
        badge: '1–120 min',
        description: 'Odbrojavanje se tiho odvija dok radite. Pauzirajte, poništite ili preskočite — vi imate kontrolu na iPhoneu i Macu.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} aktivna sesija fokusa s kontrolama za pauzu i odbrojavanjem`,
      },
      {
        title: 'Traka izbornika',
        badge: 'Mac',
        description: 'Na Macu prikažite ili sakrijte preostalo vrijeme u traci izbornika. Stavka statusa fiksne širine ostaje na mjestu bez pomicanja skočnog prozora, sve do 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} odbrojavanje prikazano u traci izbornika sustava macOS`,
      },
      {
        title: 'Prilagodba',
        badge: 'Vaša pravila',
        description: 'Prilagodljiva trajanja, Daily Focus Goals, zvukovi i animacije završetka, 48 jezika sučelja i postavke izgleda.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} postavke trajanja, obavijesti o završetku, jezika i ciljeva`,
      },
    ],
    history: {
      eyebrow: 'Napredak bez pritiska',
      title: 'Pogledajte kako se rad zbraja.',
      description: 'Otvorite Focus History da biste pregledali ukupne rezultate i nizove. Kada ste prijavljeni, povijest se može sinkronizirati između iPhonea i Maca kako bi vaš napredak išao s vama.',
      items: ['Ukupno vrijeme fokusa', 'Broj dovršenih sesija', 'Trenutačni niz', 'Najbolji niz', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} tjedna Focus History s brojem sesija, satima fokusa i nizom`,
    },
    feedback: {
      eyebrow: 'Nježne povratne informacije na vaš način',
      title: 'Neka završetak donese osjećaj nagrade.',
      description: `Odaberite jedan od šest mirnih zvukova završetka i šest životinjskih proslava ili isključite bilo koju opciju. ${PULSE_APP_NAME} prikazuje odgovarajuću poruku kada završi sesija fokusa, kratke pauze ili duge pauze.`,
      items: [
        'Naslov i podnaslov završetka prilagođeni sesiji',
        'Sučelje na 48 jezika sa zadanim jezikom sustava',
        'Postavke jezika i izgleda na svakom uređaju',
        'Neobavezni motivacijski podsjetnici na iPhoneu',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} postavke trajanja, jezika, zvukova završetka i ciljeva`,
      celebrationImageAlt: `${PULSE_APP_NAME} animacija zeca koji slavi dovršetak sesije`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Majmun', 'Koala', 'Mačka', 'Lisica', 'Panda', 'Zec'],
    },
    native: {
      eyebrow: 'Izvorno po dizajnu',
      title: 'Izrađeno da se prirodno uklopi na Apple uređajima.',
      description: `SwiftUI, AppKit i sistemske konvencije čine ${PULSE_APP_NAME} brzim i poznatim — uz VoiceOver oznake i podršku za smanjenje pokreta u cijeloj aplikaciji.`,
      features: [
        {
          title: 'Traka izbornika na Macu i početni zaslon na iPhoneu',
          description: 'Nenametljiv suputnik u traci izbornika na Macu i usredotočeno iskustvo početnog zaslona na iPhoneu.',
        },
        {
          title: 'Ostaje precizan',
          description: 'Sesije ostaju točne nakon mirovanja, buđenja i ponovnog pokretanja, a povijest se bilježi u stvarnom trenutku završetka.',
        },
        {
          title: 'Sinkronizacija prvenstveno izvan mreže',
          description: 'Nastavite se fokusirati bez veze. Kada ponovno budete na mreži, promjene prijavljenog korisnika sinkronizirat će se s računom.',
        },
        {
          title: 'Govori vašim jezikom',
          description: 'Cjelovito sučelje na 48 jezika sa zadanim jezikom sustava i ručnim odabirom u Postavkama.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privatno po dizajnu',
      title: 'Vaš fokus ostaje vaš.',
      description: `${PULSE_APP_NAME} koristi račun kako bi se povijest mogla sinkronizirati između vaših uređaja. Čuvamo samo ono što je potrebno za sinkronizaciju, nikada ne prodajemo vaše podatke i držimo analitičke podatke odvojene od povijesti fokusa.`,
      items: [
        'Prijava putem Applea ili Googlea',
        'Fokusiranje izvan mreže na svakom uređaju',
        'Sinkronizacija povijesti i postavki u oblaku',
        'Bez oglasnih mreža',
        'Izbrišite račun bilo kada u Postavkama',
      ],
    },
    closing: {
      title: 'Napravite mjesta za usredotočen rad.',
      description: `Preuzmite ${PULSE_APP_NAME} iz trgovine App Store za iPhone i Mac ili pročitajte pravila privatnosti i stranicu podrške ako vam treba pomoć.`,
      getSupport: 'Zatražite podršku',
      privacy: 'Privatnost',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} podrška`,
    metaDescription: `Podrška, često postavljana pitanja i pomoć s računom za ${PULSE_APP_NAME} na iPhoneu i Macu — uključujući Pomodoro Pro, kupnje, Focus Protection, prijavu, sinkronizaciju i brisanje računa.`,
    title: `${PULSE_APP_NAME} podrška`,
    intro: `${PULSE_APP_NAME} je nenametljiv Pomodoro mjerač vremena za iPhone i Mac. Prijavite se putem Applea ili Googlea kako biste sinkronizirali Focus History na svojim uređajima. Na iPhoneu neobavezni Pomodoro Pro otključava Focus Protection, prilagođene oznake i Tag Insights.`,
    gettingStarted: {
      title: 'Početak rada',
      items: [
        {
          question: 'Kako pokrenuti sesiju fokusa?',
          answer: 'Na Macu kliknite ikonu aplikacije u traci izbornika, odaberite Fokus, Kratka pauza ili Duga pauza, a zatim pritisnite Pokreni. Na iPhoneu otvorite aplikaciju, odaberite sesiju na početnom zaslonu i pritisnite Pokreni. Možete napustiti aplikaciju dok mjerač vremena radi.',
        },
        {
          question: 'Kako promijeniti trajanje fokusa i pauza?',
          answer: 'Otvorite Postavke i prilagodite trajanje Fokusa, Kratke pauze i Duge pauze. Možete odabrati i unaprijed postavljeni ritam, a zatim precizno prilagoditi minute.',
        },
        {
          question: 'Kako postaviti dnevne ciljeve fokusa?',
          answer: 'U Postavkama odredite koliko sesija fokusa želite svakoga dana. Napredak se prikazuje na početnom zaslonu i u Povijesti fokusa.',
        },
        {
          question: 'Kako pregledati Focus History?',
          answer: 'Otvorite Focus History u aplikaciji (na Macu iz skočnog prozora ili izbornika statusa). Vidjet ćete ukupne rezultate, nizove i tjedni napredak.',
        },
        {
          question: 'Kako promijeniti jezik i izgled?',
          answer: 'U Postavkama odaberite Jezik (Sustav ili podržani jezik) i Izgled (Sustav, Svijetli ili Tamni). Te postavke ostaju na pojedinom uređaju i ne sinkroniziraju se.',
        },
      ],
    },
    accounts: {
      title: 'Računi',
      items: [
        {
          question: 'Zašto je prijava obavezna?',
          answer: 'Račun omogućuje da vas Focus History, Daily Focus Goals i sinkronizirane postavke prate na iPhoneu i Macu. Nove instalacije traže prijavu prije korištenja mjerača vremena. Uređaji nadograđeni sa starijih verzija mogu zadržati lokalnu povijest dostupnom dok se ne prijavite. Kupnje Pomodoro Pro također ostaju povezane s prijavljenim računom.',
        },
        {
          question: 'Kako se prijaviti putem Applea ili Googlea?',
          answer: 'Na zaslonu za prijavu odaberite Nastavi s Appleom ili Nastavi s Googleom i dovršite postupak pružatelja. Apple može ponuditi opciju Sakrij moju e-mail adresu.',
        },
        {
          question: 'Kako se odjaviti?',
          answer: 'Otvorite Postavke → Račun → Odjava. Ako neke promjene još nisu sinkronizirane, aplikacija može zatražiti da ih prvo sinkronizirate ili da se ipak odjavite. Odjava ne briše račun.',
        },
        {
          question: 'Kako se ponovno prijaviti?',
          answer: 'Na zaslonu za prijavu upotrijebite isti način putem Applea ili Googlea. Povijest tog računa iz oblaka vratit će se na uređaj.',
        },
        {
          question: 'Što se događa ako upotrijebim drugi račun?',
          answer: 'Svaki račun ima vlastitu povijest. Prijava na drugi račun ne spaja nepovezane povijesti. Pažljivo odaberite prije potvrde preuzimanja povijesti na uređaju koji već ima lokalne sesije.',
        },
        {
          question: 'Mogu li povezati Apple i Google s istim računom?',
          answer: 'Da. U Postavkama → Račun možete povezati drugi način prijave ako ga već ne koristi drugi račun.',
        },
      ],
    },
    cloudSync: {
      title: 'Sinkronizacija u oblaku',
      items: [
        {
          question: 'Što se sinkronizira između uređaja?',
          answer: 'Povijest sesija fokusa i pauza (uključujući odabranu oznaku), oznake koje izradite, zapisi dnevnih ciljeva fokusa, podaci računa povezani s nizovima te sinkronizirane postavke kao što su trajanja sesija, dnevni cilj, zvuk, animacije, zvuk završetka i životinja za proslavu.',
        },
        {
          question: 'Što se događa bez interneta?',
          answer: 'Nakon prijave možete nastaviti koristiti mjerač vremena izvan mreže. Nove sesije i promjene ostaju na uređaju dok veza ne postane dostupna.',
        },
        {
          question: 'Što se događa kada se vratim na mrežu?',
          answer: 'Aplikacija sinkronizira promjene na čekanju s vašim računom. Sinkronizacija prvenstveno radi izvan mreže i s vremenom postaje usklađena — nije trenutačna suradnja u stvarnom vremenu.',
        },
        {
          question: 'Kako koristiti isti račun na iPhoneu i Macu?',
          answer: 'Instalirajte aplikaciju na oba uređaja i prijavite se istim Apple ili Google računom. Nakon dovršetka vraćanja Focus History može se pojaviti na oba uređaja.',
        },
        {
          question: 'Što ako povijest nedostaje?',
          answer: 'Provjerite jeste li prijavljeni na isti račun, pričekajte dovršetak vraćanja ili sinkronizacije i ponovno provjerite Focus History. Ako ste se prijavili na drugi račun, taj će račun prikazati vlastitu povijest.',
        },
      ],
    },
    migration: {
      title: 'Nadogradnja sa starije verzije',
      items: [
        {
          question: 'Što se događa s postojećom lokalnom poviješću?',
          answer: 'Postojeća lokalna povijest ne briše se bez upozorenja. Nakon prijave aplikacija traži dopuštenje prije dodavanja te povijesti vašem računu.',
        },
        {
          question: 'Kako preuzeti svoju povijest?',
          answer: 'Prijavite se na račun kojem povijest treba pripadati, pregledajte zaslon Dodajte svoju povijest, a zatim odaberite Dodaj ovom računu. Upotrijebite drugi račun ako je prikazani račun pogrešan. Sesije kasnije nije moguće premjestiti na drugi račun.',
        },
        {
          question: 'Što ako se postavke uređaja i računa razlikuju?',
          answer: 'Aplikacija može pitati želite li zadržati postavke ovog uređaja ili upotrijebiti postavke računa. Jezik, izgled, obavijesti i motivacijski podsjetnici ostaju lokalni na uređaju.',
        },
      ],
    },
    notifications: {
      title: 'Obavijesti',
      items: [
        {
          question: 'Kako omogućiti obavijesti na iPhoneu?',
          answer: 'Otvorite Postavke → Obavijesti i odaberite Omogući ili otvorite postavke sustava ako je dopuštenje prethodno odbijeno.',
        },
        {
          question: 'Kako rade motivacijski podsjetnici?',
          answer: 'Na iPhoneu otvorite Postavke → Motivacijski podsjetnici i uključite ih nakon što dopustite obavijesti. Možete ih pauzirati ili postaviti sate tišine. Neobavezni su i prema zadanim postavkama isključeni.',
        },
        {
          question: 'Što ako su obavijesti onemogućene?',
          answer: 'Upozorenja o završetku sesije i motivacijski podsjetnici zahtijevaju dopuštenje za obavijesti. Upotrijebite Postavke → Obavijesti → Otvori postavke da biste ih uključili u postavkama sustava iOS.',
        },
        {
          question: 'Kako rade Live Activities?',
          answer: 'Na podržanim iPhone uređajima neobavezna Live Activity može prikazivati aktivnu sesiju na zaključanom zaslonu i Dynamic Islandu. Dopuštenje se traži kada omogućite povezane značajke.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Što je Pomodoro Pro?',
          answer: 'Pomodoro Pro neobavezna je kupnja unutar aplikacije na iPhoneu. Otključava Focus Protection, prilagođene oznake (vlastite nazive i boje) i Tag Insights (tjedno i mjesečno vrijeme fokusa prema oznaci). Mjerač vremena, ugrađene oznake, Focus History i sinkronizacija ostaju dostupni bez Pro verzije.',
        },
        {
          question: 'Koje su mogućnosti kupnje dostupne?',
          answer: 'Pomodoro Pro nudi se kao mjesečna pretplata, godišnja pretplata ili jednokratna kupnja Lifetime. Pretplate se automatski obnavljaju ako ih ne otkažete najmanje 24 sata prije kraja trenutačnog razdoblja. Lifetime se naplaćuje jednom i nije pretplata.',
        },
        {
          question: 'Gdje kupiti ili pronaći Pomodoro Pro?',
          answer: 'Na iPhoneu otvorite Postavke → Pomodoro Pro ili dodirnite oznaku zaštite na početnom zaslonu. Morate biti prijavljeni. Pro ostaje povezan s vašim računom na svakom uređaju na koji se prijavite.',
        },
        {
          question: 'Kako obnoviti kupnje?',
          answer: 'Upotrijebite Obnovi kupnje koje nedostaju na zaslonu za kupnju ili u Postavkama → Pomodoro Pro. Kupnje obavljene istim Apple računom prenose se na račun na koji ste prijavljeni. Ako ništa nije pronađeno, provjerite koristite li Apple račun kojim je kupljen Pro i pokušajte ponovno dok ste na mreži.',
        },
      ],
    },
    purchases: {
      title: 'Pretplate i kupnje',
      items: [
        {
          question: 'Kako upravljati pretplatom ili je otkazati?',
          answer: 'Pretplate naplaćuje Apple. Na iPhoneu otvorite Postavke → Pomodoro Pro → Upravljaj pretplatom ili idite na Postavke → [vaše ime] → Pretplate i odaberite aplikaciju. Otkažite najmanje 24 sata prije obnove kako biste izbjegli sljedeću naplatu. Brisanje aplikacije ili Pomodoro računa ne otkazuje pretplatu.',
        },
        {
          question: 'Kako zatražiti povrat novca?',
          answer: 'Povrate obrađuje Apple. Posjetite reportaproblem.apple.com, prijavite se Apple računom upotrijebljenim za kupnju, pronađite transakciju i pošaljite zahtjev za povrat. Ne možemo sami obrađivati povrate iz trgovine App Store.',
        },
        {
          question: 'Što ako kupnja ne uspije ili se Pro ne otključa?',
          answer: 'Ostanite prijavljeni, provjerite mrežnu vezu i pokušajte ponovno. Ako je plaćanje na čekanju, primjerice zbog opcije Zatraži kupnju, Pro se otključava nakon odobrenja. Ako ste već platili, upotrijebite Obnovi kupnje koje nedostaju. Za probleme s plaćanjem aktivne pretplate ažurirajte način plaćanja u postavkama trgovine App Store.',
        },
        {
          question: 'Što ako kupim Lifetime dok je pretplata aktivna?',
          answer: 'Lifetime trajno otključava Pro, ali se postojeća pretplata ne otkazuje automatski. Isključite automatsku obnovu u postavkama pretplata trgovine App Store kako vam se ne bi ponovno naplatilo.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Što je Focus Protection?',
          answer: 'Focus Protection značajka je Pomodoro Pro na iPhoneu. Koristi Appleove API-je za Vrijeme uporabe zaslona kako bi blokirala aplikacije, kategorije ili web-stranice koje odaberete dok traje sesija fokusa. Pauze se nikada ne blokiraju. Kada sesija završi, blokirane aplikacije automatski se otključavaju.',
        },
        {
          question: 'Kako je postaviti?',
          answer: 'Dok je Pro aktivan, dodirnite oznaku Zaštite fokusa na početnom zaslonu ili je otvorite iz Postavki. Dopustite pristup Vremenu uporabe zaslona kada se to zatraži, odaberite što želite blokirati i zatim uključite Focus Protection. Pokrenite sesiju fokusa kako bi se zaštite primijenile.',
        },
        {
          question: 'Kako je isključiti ili otključati aplikacije?',
          answer: 'Otvorite list Focus Protection i odaberite Isključi sada ili isključite značajku. Nakon završetka sesije na zaslonu zaštite možete upotrijebiti i Otključaj aplikacije. Da biste potpuno uklonili pristup aplikacije Vremenu uporabe zaslona, idite na Postavke sustava iOS → Vrijeme uporabe zaslona → Aplikacije s pristupom Vremenu uporabe zaslona.',
        },
        {
          question: 'Što ako Focus Protection ne radi?',
          answer: 'Provjerite je li Pro aktivan, je li dopušten pristup Vremenu uporabe zaslona i jeste li odabrali aplikacije ili kategorije za blokiranje. Focus Protection primjenjuje se samo tijekom sesija fokusa, ne tijekom pauza. Ako je pristup opozvan u postavkama sustava, otvorite aplikaciju i ponovno ga dopustite. Ponovno pokretanje iPhonea može pomoći nakon promjene dopuštenja.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Račun i privatnost',
      items: [
        {
          question: 'Kako izbrisati račun?',
          answer: 'Prijavite se, otvorite Postavke → Račun → Izbriši račun i potvrdite. Vaš račun i sinkronizirana Focus History trajno se brišu iz naše aktivne baze podataka. To se ne može poništiti. Za brisanje je potrebna mrežna veza. Brisanje računa ne otkazuje pretplatu iz trgovine App Store — njome upravljajte u postavkama trgovine App Store.',
        },
        {
          question: 'Na što utječe brisanje računa?',
          answer: 'Sinkronizirani podaci u oblaku za taj račun uklanjaju se, autorizacija Prijave putem Applea opoziva se kada je pohranjena, od našeg pružatelja kupnji traži se brisanje zapisa o kupnji povezanog s računom, a podaci računa uklanjaju se s uređaja na kojem ga brišete. Lokalne kopije na drugim uređajima više se ne mogu sinkronizirati; uklonite aplikaciju ili ih ondje izbrišite ako je potrebno. Sigurnosne kopije pružatelja mogu zadržati izbrisane podatke tijekom ograničenog razdoblja oporavka. Apple zadržava vlastite zapise transakcija trgovine App Store.',
        },
        {
          question: 'Kako izvesti svoje podatke?',
          answer: 'Postavke → Račun → Izvezi moje podatke sprema JSON datoteku sa sesijama, dnevnim ciljevima, sinkroniziranim postavkama i profilom računa. Nepreuzeti lokalni podaci mogu se izvesti i sa zaslona za prijavu.',
        },
        {
          question: 'Gdje se nalaze Pravila privatnosti?',
          answer: 'Otvorite Pravila privatnosti na web-mjestu proizvoda ili upotrijebite poveznicu privatnosti na stranicama proizvoda na ovom web-mjestu.',
        },
      ],
    },
    requirements: {
      title: 'Zahtjevi',
      body: 'iPhone: iOS 17 ili noviji. Mac: macOS 14.6 ili noviji. Kupnje Pomodoro Pro i Focus Protection dostupni su na iPhoneu.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Za pomoć, povratne informacije ili prijave pogrešaka:',
    },
    privacyPolicyLink: 'Pravila privatnosti',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Pravila privatnosti`,
    metaDescription: `Pravila privatnosti za ${PULSE_APP_NAME}, koja obuhvaćaju prijavu putem Applea i Googlea, sinkronizaciju u oblaku, kupnje Pomodoro Pro putem RevenueCata, Focus Protection, analitiku i brisanje računa na Macu i iPhoneu.`,
    title: 'Pravila privatnosti',
    subtitle: `${PULSE_APP_NAME} — Pomodoro mjerač vremena za Mac i iPhone`,
    lastUpdated: 'Zadnje ažurirano: 26. listopada 2026',
    summary: {
      title: 'Sažetak',
      body: `Kada se prijavite putem Applea ili Googlea, vaš račun održava Focus History, dnevne ciljeve i postavke mjerača vremena sinkroniziranima između Maca i iPhonea. Čuvamo samo ono što je aplikaciji za to potrebno: vašu adresu e-pošte, identifikator računa i podatke o fokusu koje izradite. Nikada ih ne prodajemo, ne koristimo za oglašavanje i ne dijelimo s pružateljem analitičkih usluga. Ako kupite Pomodoro Pro na iPhoneu, naš pružatelj kupnji RevenueCat čuva povijest kupnji povezanu s vašim računom kako bi Pro radio na svakom uređaju na koji se prijavite. Odabiri aplikacija u Zaštiti fokusa nikada ne napuštaju vaš iPhone. Svoje podatke možete izvesti ili izbrisati račun bilo kada u Postavkama. Aplikacija zasebno može slati anonimnu analitiku korištenja koja čuva privatnost kako bismo poboljšali tijekove fokusiranja.`,
    },
    localData: {
      title: 'Podaci pohranjeni na vašem uređaju',
      body: 'Postavke mjerača vremena, postavke sesija i Focus History spremaju se lokalno na Mac ili iPhone standardnom sistemskom pohranom kako bi mjerač vremena nastavio raditi izvan mreže. Svaki račun prijavljen na uređaju ima vlastitu odvojenu lokalnu pohranu. Vaša sesija prijave čuva se u sistemskom privjesku ključeva. Jezik, izgled, Pokreni pri prijavi, obavijesti i motivacijski podsjetnici ostaju na svakom uređaju i ne sinkroniziraju se. Sam sadržaj povijesti fokusa ne prenosi se našem pružatelju analitičkih usluga.',
      migrationSafety: 'Kada se prvi put prijavite na uređaju koji već ima Focus History, aplikacija traži dopuštenje prije premještanja te povijesti na vaš račun. Dok se premještanje ne potvrdi na našim poslužiteljima, uvećano za 90 dana, aplikacija zadržava prethodnu lokalnu kopiju i lokalnu datoteku sigurnosne kopije na uređaju kao zaštitu, a zatim ih automatski uklanja.',
    },
    accountAndSync: {
      title: 'Vaš račun i sinkronizirani podaci',
      intro: 'Ako se prijavite, obrađujemo:',
      items: [
        'Podaci za kontakt: adresa e-pošte koju dijeli Prijava putem Applea (možda privatna adresa za prosljeđivanje putem opcije Sakrij moju e-mail adresu) ili Google. Ne tražimo vaše ime.',
        'Identifikatori: ID računa izrađen pri prijavi i nasumični ID za svaku instalaciju, koji se upotrebljavaju samo za sinkronizaciju i utvrđivanje uređaja koji je izvršio promjenu.',
        'Podaci o fokusu: dovršene i izbrisane sesije fokusa i pauza (vremena, trajanja, lokalni dan i vremenska zona te odabrana oznaka), oznake koje izradite (naziv i boja), dnevni ciljevi, vaš najbolji niz i sinkronizirane postavke (trajanja sesija, dnevni cilj, zvuk, animacije, zvuk završetka i životinja za proslavu).',
      ],
      closing: 'Ti se podaci upotrebljavaju samo za sinkronizaciju, povijest i značajke računa. Povezani su s vašim računom, ne upotrebljavaju se za praćenje i ne dijele se s trećim stranama osim s obrađivačima u nastavku.',
    },
    processors: {
      title: 'Obrađivači i mjesto pohrane',
      bodyBeforeSupabase: 'Podaci računa i sinkronizacije pohranjuju se kod pružatelja',
      bodyAfterSupabase: '(baza podataka i provjera autentičnosti) u Europskoj uniji. Prijavom upravlja',
      orWord: 'ili',
      bodyAfterProviders: ', ovisno o odabranoj mogućnosti. Kupnjama Pomodoro Pro upravlja se putem',
      bodyAfterRevenueCat: '(pogledajte Kupnje u nastavku). Podaci su šifrirani tijekom prijenosa, a pristup je ograničen tako da svaki račun može čitati samo vlastite podatke.',
    },
    purchases: {
      title: 'Kupnje (iPhone)',
      bodyBeforeRevenueCat: 'Pomodoro Pro prodaje se putem trgovine App Store; Apple obrađuje plaćanje, a mi nikada ne vidimo vaše podatke o plaćanju. Kako bi se Pro otključao na svakom uređaju na koji se prijavite, aplikacija dijeli ID vašeg računa s pružateljem',
      bodyAfterRevenueCat: ', koji čuva povijest kupnji (kupljene proizvode, datume kupnje i obnove te status pretplate) povezanu s tim ID-om. Ti se podaci upotrebljavaju samo za dodjelu i obnovu pristupa značajkama Pro, ne upotrebljavaju se za praćenje i ne dijele se s našim pružateljem analitičkih usluga. Pro zahtijeva prijavljeni račun; ništa se ne šalje RevenueCatu prije nego što se prijavite.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection upotrebljava Appleov okvir Vrijeme uporabe zaslona (Family Controls) za blokiranje aplikacija, kategorija i web-stranica koje odaberete dok traje sesija fokusa. Apple aplikaciji daje samo neprozirne tokene za vaše odabire: ne možemo vidjeti koje ste aplikacije ili web-stranice odabrali, kako ih upotrebljavate ni bilo koje druge podatke Vremena uporabe zaslona. Vaši odabiri ostaju na tom iPhoneu, nikada se ne prenose ni sinkroniziraju i ne šalju se našem pružatelju analitičkih usluga. Focus Protection možete bilo kada isključiti u aplikaciji ili ukloniti pristup aplikacije u Postavkama → Vrijeme uporabe zaslona → Aplikacije s pristupom Vremenu uporabe zaslona.',
    },
    retention: {
      title: 'Čuvanje, sigurnosne kopije i brisanje',
      items: [
        'Vaši sinkronizirani podaci čuvaju se dok god vaš račun postoji.',
        'Izbriši račun (Postavke → Račun → Izbriši račun) trajno briše vaš račun i sve sinkronizirane podatke iz naše aktivne baze podataka, opoziva autorizaciju aplikacije za Prijavu putem Applea kada je pohranjena, traži od RevenueCata da izbriše zapis o kupnji povezan s vašim računom i uklanja podatke tog računa s uređaja na kojem ga brišete. Lokalne kopije na drugim uređajima više se ne mogu sinkronizirati i ostaju ondje dok ne izbrišete aplikaciju na tim uređajima ili ih uklonite sa zaslona za prijavu kada vam se to ponudi.',
        'Naš pružatelj baze podataka čuva dnevne sigurnosne kopije sedam dana. Izbrisani podaci mogu ostati u tim sigurnosnim kopijama dok ne isteknu; sigurnosne kopije upotrebljavaju se samo za oporavak od katastrofe. Možemo čuvati i šifriranu tjednu sigurnosnu kopiju do 90 dana u istu svrhu.',
        'Brisanje računa ne otkazuje pretplatu iz trgovine App Store; njome upravljajte ili je otkažite u postavkama Apple računa. Apple čuva vlastite zapise vaših transakcija u trgovini App Store.',
        'Odjava ništa ne briše. Promjene koje još nisu sinkronizirane ostaju na uređaju dok se isti račun ponovno ne prijavi.',
        'Analitičkim zapisima upravlja TelemetryDeck u skladu sa svojim pravilima čuvanja i ne upotrebljavaju se za vraćanje vaše povijesti fokusa.',
      ],
    },
    export: {
      title: 'Izvoz',
      body: 'Postavke → Račun → Izvezi moje podatke sprema JSON datoteku s vašim sesijama, dnevnim ciljevima, sinkroniziranim postavkama i profilom računa. Podaci koji još nisu premješteni na račun mogu se izvesti i sa zaslona za prijavu.',
    },
    analytics: {
      title: 'Analitika',
      introBeforeLink: 'Upotrebljavamo',
      introAfterLink: ', analitičku uslugu usmjerenu na privatnost, kako bismo razumjeli kako se aplikacija upotrebljava (primjerice: pokrenute ili dovršene sesije fokusa ili pauze, promjene dnevnog cilja i postavki, rezultati dopuštenja za obavijesti, događaji motivacijskih podsjetnika i je li uvodno postavljanje dovršeno). Signali ne uključuju tekst slobodnog oblika, imena, adrese e-pošte ni sadržaj vaše povijesti fokusa.',
      identifier: 'TelemetryDeck identificira instalacije sažetim identifikatorom ograničenim na uređaj i može priložiti neosobne metapodatke uređaja (kao što su model, verzija operacijskog sustava i regionalne postavke). Ti se podaci upotrebljavaju samo za analitiku, mi ih ne povezujemo s vašim identitetom i ne upotrebljavaju se za praćenje u aplikacijama ili na web-mjestima drugih tvrtki.',
      learnMore: 'Saznajte više:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Ažuriranja trgovine App Store',
      body: 'Ako u Postavkama upotrijebite „Provjeri ažuriranja”, aplikacija može kontaktirati Apple kako bi provjerila je li u trgovini App Store dostupna novija verzija.',
    },
    launchAtLogin: {
      title: 'Pokreni pri prijavi (Mac)',
      body: 'Ako u Postavkama na Macu omogućite Pokreni pri prijavi, aplikacija upotrebljava sistemske API-je sustava macOS kako bi se registrirala kao stavka za prijavu. Vi upravljate tom postavkom i možete je onemogućiti u bilo kojem trenutku.',
    },
    notifications: {
      title: 'Obavijesti i Live Activities (iPhone)',
      body: 'Na iPhoneu neobavezne lokalne obavijesti, motivacijski podsjetnici i Live Activities pomažu vam da vidite kada sesija završi ili da se nježno vratite fokusu. Dopuštenje se traži samo kada odlučite omogućiti te značajke. Sadržaj obavijesti ostaje na vašem uređaju.',
    },
    whatWeDoNotDo: {
      title: 'Što ne radimo',
      items: [
        'Bez oglasnih mreža',
        'Bez prodaje osobnih podataka',
        'Bez pristupa vašim kontaktima, fotografijama, preciznoj lokaciji, kameri ili mikrofonu za potrebe analitike',
      ],
    },
    children: {
      title: 'Djeca',
      body: `${PULSE_APP_NAME} svjesno ne prikuplja osobne podatke djece osim onoga što je računu potrebno za sinkronizaciju, kao što je prethodno opisano. Analitički signali anonimni su i ne sadrže osobni sadržaj.`,
    },
    changes: {
      title: 'Promjene',
      body: 'Ako se ova pravila promijene, ažurirana verzija bit će objavljena na ovom URL-u.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Pitanja o ovim pravilima:',
    },
  },
}
