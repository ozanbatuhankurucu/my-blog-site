import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const slMessages: PulseMessages = {
  languageLabel: 'Jezik strani',
  video: {
    ariaLabel: `Predstavitev izdelka ${PULSE_APP_NAME}`,
    playLabel: 'Predvajaj sprehod',
    unsupported: 'Vaš brskalnik ne podpira vdelanega videa.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Časovnik za fokus za iPhone in Mac`,
    metaDescription: `${PULSE_APP_NAME} je umirjen časovnik Pomodoro za iPhone in Mac s prijavo Focus History, Daily Focus Goals, Apple in Google ter sinhronizacijo brez povezave v vseh vaših napravah.`,
    heroImageAlt: `${PULSE_APP_NAME} časovnik fokusa in tedenski pregled zgodovine`,
    backToProjects: 'Nazaj k projektom',
    availableOnAppStore: 'Na voljo na App Store',
    availabilityLine: 'iOS 17+ · macOS 14,6+',
    eyebrow: 'Fokus časovnik za iPhone in Mac',
    tagline: 'Nežen časovnik Pomodoro, ki vam pomaga, da se osredotočite — na iPhone in v vaši menijski vrstici Mac.',
    description: `Začnite sejo Fokus, vzemite si odmor in imejte svojo zgodovino pri sebi. Prijavite se z računom Apple ali Google, da Daily Focus Goals, Focus History in sinhronizirane nastavitve ostanejo v vašem računu v napravah iPhone in Mac – medtem ko časovnik še naprej deluje brez povezave.`,
    downloadCta: 'Prenesite na App Store',
    watchDemo: 'Oglejte si ga v akciji',
    supportCta: 'Podpora',
    stats: {
      platformLabel: 'Platforme',
      platformValue: 'iPhone & Mac',
      languagesLabel: 'Jeziki',
      languagesValue: '48 jezikov',
      dataLabel: 'Sinhronizacija',
      dataValue: 'Najprej brez povezave',
      builtWithLabel: 'Zgrajeno z',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Tišji način osredotočanja',
      title: 'Vaš časovnik je tam, ko ga potrebujete – in ga ni, ko ga ne potrebujete.',
      description: `Na Mac odprite ${PULSE_APP_NAME} v menijski vrstici, izberite sejo in zaprite pojavno okno. Na iPhone zaženite Fokus od doma in nadaljujte z Live Activities na podprtih napravah. Časovnik deluje, medtem ko delate vi.`,
      caption:
        'Fokus in časovniki prekinitev, Daily Focus Goals, Focus History, sledenje nizom, lokalizacija v 48 jezikov in izbirna opozorila o dokončanju.',
    },
    rhythm: {
      eyebrow: 'Ritem, ki ga nadzirate',
      title: 'Fokus, premor, okrevanje, ponovitev.',
      description: `${PULSE_APP_NAME} predlaga, kaj sledi, vendar nikoli ne začne seje namesto vas. Vsako trajanje lahko prilagodite svojemu dnevu.`,
    },
    featureShowcases: [
      {
        title: 'Fokus',
        badge: '1–120 min',
        description:
          'Med delom odštevanje teče tiho. Začasno ustavite, ponastavite ali preskočite – vi ohranite nadzor nad iPhone in Mac.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} fokusna seja teče s kontrolniki za premor in odštevanjem`,
      },
      {
        title: 'Menijska vrstica',
        badge: 'Mac',
        description:
          'Na Mac prikaži ali skrij preostali čas v menijski vrstici. Postavka stanja s fiksno širino ostane brez premikanja pojavnega okvirja do 120:00.',
        imageFile: 'menubar.png',
        alt: `Odštevanje ${PULSE_APP_NAME} prikazano v menijski vrstici macOS`,
      },
      {
        title: 'Prilagajanje',
        badge: 'Vaša pravila',
        description:
          'Prilagodljiva trajanja, Daily Focus Goals, zaključni zvoki in animacije, 48 jezikov uporabniškega vmesnika in nastavitve videza.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} nastavitve za trajanje, opozorila o dokončanju, jezik in cilje`,
      },
    ],
    history: {
      eyebrow: 'Napredek brez pritiska',
      title: 'Oglejte si seštevek dela.',
      description:
        'Odprite Focus History za pregled seštevkov in nizov. Ko ste prijavljeni, se lahko zgodovina sinhronizira v vaših iPhone in Mac, tako da vam napredek sledi.',
      items: ['Skupni čas fokusa', 'Število opravljenih sej', 'Trenutni niz', 'Najboljši niz', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} tedenska zgodovina osredotočenosti s štetjem sej, osredotočenimi urami in nizom`,
    },
    feedback: {
      eyebrow: 'Nežne povratne informacije, na vaš način',
      title: 'Poskrbite, da bo končna obdelava koristna.',
      description: `Izbirajte med šestimi umirjenimi zaključnimi zvoki in šestimi živalskimi praznovanji ali pa enega izklopite. ${PULSE_APP_NAME} prikaže pravo sporočilo, ko se konča seja Fokus, Kratek odmor ali Dolg odmor.`,
      items: [
        'Naslov in podnaslov zaključka glede na sejo',
        'Uporabniški vmesnik v 48 jezikih s privzetim jezikom sistema',
        'Nastavitve jezika in videza v vsaki napravi',
        'Izbirni motivacijski opomniki na iPhone',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} nastavitve za trajanje, jezik, zvoke dokončanja in cilje`,
      celebrationImageAlt: `${PULSE_APP_NAME} Animacija praznovanja zajca, ko se seja zaključi`,
      soundNames: ['Gozdne ptice', 'Kristalni zvonček', 'Nežna marimba', 'Dežne kapljice', 'Mehki zvonec', 'Zen Gong'],
      animalNames: ['opica', 'Koala', 'mačka', 'Lisica', 'Panda', 'Zajec'],
    },
    native: {
      eyebrow: 'Native po zasnovi',
      title: 'Zasnovan za občutek doma na napravah Apple.',
      description: `SwiftUI, AppKit in sistemske konvencije omogočajo, da je ${PULSE_APP_NAME} hiter in poznan – z oznakami VoiceOver in podporo za Reduce Motion v celoti.`,
      features: [
        {
          title: 'Mac menijska vrstica & iPhone Domov',
          description: 'Tihi spremljevalec menijske vrstice na Mac in osredotočena domača izkušnja na iPhone.',
        },
        {
          title: 'Ostaja natančen',
          description:
            'Seje ostanejo pravilne med spanjem, budnostjo in ponovnimi zagoni, zgodovina pa je zabeležena ob dejanskem roku.',
        },
        {
          title: 'Prva sinhronizacija brez povezave',
          description:
            'Osredotočite se brez povezave. Ko znova vzpostavite povezavo, se spremembe pri prijavi sinhronizirajo z vašim računom.',
        },
        {
          title: 'Govori vaš jezik',
          description:
            'Celoten uporabniški vmesnik v 48 jezikih s privzetim jezikom sistema in ročno preglasitvijo v nastavitvah.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Zasebno po zasnovi',
      title: 'Vaš fokus ostane vaš.',
      description: `${PULSE_APP_NAME} uporablja račun, da se lahko zgodovina sinhronizira med vašimi napravami. Shranjujemo samo tisto, kar potrebuje sinhronizacija, nikoli ne prodamo vaših podatkov in hranimo analitiko ločeno od vaše zgodovine fokusa.`,
      items: [
        'Prijava z računom Apple ali Google',
        'Brez povezave – prvi fokus na vsaki napravi',
        'Sinhronizacija v oblaku za zgodovino in sinhronizirane nastavitve',
        'Brez oglaševalskih omrežij',
        'Svoj račun lahko kadar koli izbrišete v nastavitvah',
      ],
    },
    closing: {
      title: 'Naredite prostor za osredotočeno delo.',
      description: `Pridobite ${PULSE_APP_NAME} na App Store za iPhone in Mac ali preberite pravilnik o zasebnosti in stran s podporo, če potrebujete pomoč.`,
      getSupport: 'Pridobite podporo',
      privacy: 'Zasebnost',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Podpora`,
    metaDescription: `Podpora, pogosta vprašanja in pomoč za račun za ${PULSE_APP_NAME} na iPhone in Mac — vključno z Pomodoro Pro, nakupi, Focus Protection, prijavo, sinhronizacijo in izbrisom računa.`,
    title: `${PULSE_APP_NAME} Podpora`,
    intro: `${PULSE_APP_NAME} je umirjen časovnik Pomodoro za iPhone in Mac. Prijavite se z računom Apple ali Google, da sinhronizirate Zgodovino fokusa med napravami. Na iPhone izbirni Pomodoro Pro odklene Zaščito fokusa, oznake po meri in Tag Insights.`,
    gettingStarted: {
      title: 'Začetek',
      items: [
        {
          question: 'Kako začnem sejo Fokus?',
          answer:
            'Na Mac kliknite ikono aplikacije v menijski vrstici, izberite Fokus, Kratek odmor ali Dolg odmor, nato pritisnite Start. Na iPhone odprite aplikacijo, izberite sejo na Domov in pritisnite Start. Aplikacijo lahko zapustite, medtem ko časovnik teče.',
        },
        {
          question: 'Kako spremenim trajanje Fokus in odmora?',
          answer:
            'Odprite nastavitve in prilagodite dolžine Fokus, Kratek odmor in Dolg odmor. Izberete lahko tudi prednastavljeni ritem in nato natančno nastavite minute.',
        },
        {
          question: 'Kako konfiguriram Daily Focus Goals?',
          answer:
            'V nastavitvah nastavite, koliko sej Fokus želite vsak dan. Napredek je prikazan na Domov in v Focus History.',
        },
        {
          question: 'Kako si ogledam Focus History?',
          answer:
            'Odprite Focus History iz aplikacije (na Mac iz pojavnega menija ali menija stanja). Videli boste skupne vrednosti, nize in tedenski napredek.',
        },
        {
          question: 'Kako spremenim jezik in videz?',
          answer:
            'V nastavitvah izberite Jezik (Sistem ali podprt jezik) in Videz (Sistem, Svetlo ali Temno). Te nastavitve ostanejo v vsaki napravi in ​​se ne sinhronizirajo.',
        },
      ],
    },
    accounts: {
      title: 'Računi',
      items: [
        {
          question: 'Zakaj je potrebna prijava?',
          answer:
            'Račun omogoča, da Focus History, Daily Focus Goals in sinhronizirane nastavitve ostanejo z vami v iPhone in Mac. Nove namestitve zahtevajo, da se prijavite pred uporabo časovnika. Naprave, ki jih nadgradite s starejših različic, lahko ohranijo lokalno zgodovino uporabno, dokler se ne prijavite. Pomodoro Pro nakupi prav tako ostanejo v vašem prijavljenem računu.',
        },
        {
          question: 'Kako se prijavim z Apple ali Google?',
          answer:
            'Na zaslonu za prijavo izberite Nadaljuj z Apple ali Nadaljuj z Google in dokončajte postopek ponudnika. Apple lahko ponudi možnost Skrij moj e-poštni naslov.',
        },
        {
          question: 'Kako se odjavim?',
          answer:
            'Odprite Nastavitve → Račun → Odjava. Če nekatere spremembe še niso bile sinhronizirane, vas bo aplikacija morda pozvala, da se najprej sinhronizirate ali pa se vseeno odjavite. Odjava ne izbriše vašega računa.',
        },
        {
          question: 'Kako se ponovno prijavim?',
          answer:
            'Uporabite isto metodo Apple ali Google na zaslonu za prijavo. Vaša zgodovina v oblaku se obnovi v ta račun v napravi.',
        },
        {
          question: 'Kaj se zgodi, če uporabim drug račun?',
          answer:
            'Vsak račun ima svojo zgodovino. Prijava v drug račun ne združi nepovezanih zgodovin. Previdno izberite, preden potrdite zahtevek po zgodovini na napravi, ki že ima lokalne seje.',
        },
        {
          question: 'Ali lahko Apple in Google povežem z istim računom?',
          answer:
            'ja V Nastavitve → Račun lahko povežete drugo metodo prijave, če je še ne uporablja drug račun.',
        },
      ],
    },
    cloudSync: {
      title: 'Sinhronizacija v oblaku',
      items: [
        {
          question: 'Kaj se sinhronizira med napravami?',
          answer:
            'Fokus in zgodovino prekinitve seje (vključno z oznako, ki ste jo izbrali), oznake, ki jih ustvarite, zapise Daily Focus Goal, podatke o računu, povezane z nizom, in sinhronizirane nastavitve, kot so dolžine seje, dnevni cilj, zvok, animacije, zvok zaključka in žival za praznovanje.',
        },
        {
          question: 'Kaj se zgodi brez interneta?',
          answer:
            'Ko ste prijavljeni, lahko še naprej uporabljate časovnik brez povezave. Nove seje in spremembe ostanejo v napravi, dokler ni na voljo povezava.',
        },
        {
          question: 'Kaj se zgodi, ko sem spet na spletu?',
          answer:
            'Aplikacija sinhronizira čakajoče spremembe z vašim računom. Sinhronizacija je najprej brez povezave in na koncu konsistentna – ne gre za takojšnje sodelovanje v realnem času.',
        },
        {
          question: 'Kako uporabim isti račun na iPhone in Mac?',
          answer:
            'Namestite aplikacijo na obe napravi in ​​se prijavite z istim računom Apple ali Google. Ko je obnovitev končana, se lahko Focus History prikaže na obeh.',
        },
        {
          question: 'Kaj pa, če zgodovina manjka?',
          answer:
            'Potrdite, da ste prijavljeni v isti račun, počakajte, da se obnovitev/sinhronizacija konča, in znova preverite Focus History. Če ste se prijavili v drug račun, bo ta račun prikazal svojo zgodovino.',
        },
      ],
    },
    migration: {
      title: 'Nadgradnja s starejše različice',
      items: [
        {
          question: 'Kaj se zgodi z mojo obstoječo lokalno zgodovino?',
          answer:
            'Obstoječa lokalna zgodovina ni tiho izbrisana. Po prijavi vas aplikacija vpraša, preden to zgodovino doda v vaš račun.',
        },
        {
          question: 'Kako naj zahtevam svojo zgodovino?',
          answer:
            'Prijavite se v račun, ki bi moral imeti zgodovino, preglejte zaslon Dodaj svojo zgodovino in nato izberite Dodaj v ta račun. Če je prikazani račun napačen, uporabite drug račun. Sej pozneje ni mogoče premakniti v drug račun.',
        },
        {
          question: 'Kaj pa, če se nastavitve naprave in računa razlikujejo?',
          answer:
            'Aplikacija lahko vpraša, ali naj obdrži nastavitve te naprave ali uporabi nastavitve računa. Jezik, videz, obvestila in motivacijski opomniki ostanejo lokalni v napravi.',
        },
      ],
    },
    notifications: {
      title: 'Obvestila',
      items: [
        {
          question: 'Kako omogočim obvestila na iPhone?',
          answer:
            'Odprite Nastavitve → Obvestila in izberite Omogoči ali odprite sistemske nastavitve, če je bilo dovoljenje predhodno zavrnjeno.',
        },
        {
          question: 'Kako delujejo motivacijski opomniki?',
          answer:
            'Na iPhone odprite Nastavitve → Motivacijski opomniki in jih vklopite, ko so obvestila dovoljena. Lahko jih zaustavite ali nastavite mirne ure. So neobvezne in privzeto izklopljene.',
        },
        {
          question: 'Kaj pa, če so obvestila onemogočena?',
          answer:
            'Opozorila ob koncu seje in motivacijski opomniki potrebujejo dovoljenje za obveščanje. Uporabite Nastavitve → Obvestila → Odpri nastavitve, da jih vklopite v nastavitvah iOS.',
        },
        {
          question: 'Kako deluje Live Activities?',
          answer:
            'Pri podprtih iPhone lahko izbirna dejavnost v živo prikaže aktivno sejo na zaklenjenem zaslonu in Dynamic Island. Dovoljenje je zahtevano, ko omogočite povezane funkcije.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Kaj je Pomodoro Pro?',
          answer:
            'Pomodoro Pro je neobvezen nakup v aplikaciji na iPhone. Odklene Focus Protection, oznake po meri (vaša imena in barve) in Tag Insights (tedenski in mesečni čas fokusa po oznaki). Časovnik, vgrajene oznake, Focus History in sinhronizacija ostanejo na voljo brez Pro.',
        },
        {
          question: 'Katere možnosti nakupa so na voljo?',
          answer:
            'Pomodoro Pro je na voljo kot mesečna naročnina, letna (letna) naročnina ali doživljenjski enkratni nakup. Naročnine se samodejno obnovijo, razen če jih prekličete vsaj 24 ur pred koncem trenutnega obdobja. Lifetime se zaračuna enkrat in ni naročnina.',
        },
        {
          question: 'Kje kupim ali vidim Pomodoro Pro?',
          answer:
            'Na iPhone odprite Nastavitve → Pomodoro Pro ali tapnite zaščitni čip na Domov. Morate biti prijavljeni. Pro ostane z vašim računom v vsaki napravi, v kateri se prijavite.',
        },
        {
          question: 'Kako obnovim nakupe?',
          answer:
            'Uporabite možnost Obnovi manjkajoče nakupe na zaslonu za nakup ali v Nastavitve → Pomodoro Pro. Nakupi, opravljeni z istim računom Apple, se prenesejo v račun, v katerega ste prijavljeni. Če ni ničesar mogoče najti, preverite, ali uporabljate račun Apple, s katerim ste kupili Pro, in poskusite znova, ko ste povezani.',
        },
      ],
    },
    purchases: {
      title: 'Naročnine in nakupi',
      items: [
        {
          question: 'Kako upravljam ali prekličem naročnino?',
          answer:
            'Naročnine zaračunava Apple. Na iPhone odprite Nastavitve → Pomodoro Pro → Upravljanje naročnine ali pojdite na Nastavitve → [vaše ime] → Naročnine in izberite aplikacijo. Prekličite vsaj 24 ur pred podaljšanjem, da se izognete naslednji bremenitvi. Če izbrišete aplikacijo ali račun Pomodoro, naročnine ne prekličete.',
        },
        {
          question: 'Kako zahtevam vračilo?',
          answer:
            'Vračila kupnine ureja Apple. Obiščite reportaproblem.apple.com, prijavite se z računom Apple, uporabljenim za nakup, poiščite transakcijo in oddajte zahtevo za vračilo. Vračil iz App Store ne moremo obdelati sami.',
        },
        {
          question: 'Kaj pa, če nakup ne uspe ali se Pro ne odklene?',
          answer:
            'Ostanite prijavljeni, preverite omrežno povezavo in poskusite znova. Če je plačilo na čakanju (na primer Vprašaj za nakup), se Pro odklene po odobritvi. Če ste že plačali, uporabite Obnovi nakupe. Za težave s plačilom pri aktivni naročnini posodobite svoje plačilno sredstvo v nastavitvah App Store.',
        },
        {
          question: 'Kaj pa, če kupim Lifetime, medtem ko je naročnina aktivna?',
          answer:
            'Lifetime trajno odklene Pro, vendar obstoječa naročnina ni samodejno preklicana. Izklopite samodejno podaljšanje v nastavitvah naročnine App Store, da vam ne bomo znova zaračunali.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Kaj je Focus Protection?',
          answer:
            'Focus Protection je funkcija Pomodoro Pro na iPhone. Uporablja API-je Apple Screen Time za blokiranje aplikacij, kategorij ali spletnih mest, ki jih izberete med izvajanjem seje Fokus. Odmori niso nikoli blokirani. Ko se seja konča, se blokirane aplikacije samodejno odklenejo.',
        },
        {
          question: 'Kako ga nastavim?',
          answer:
            'Ko je Pro aktiven, tapnite čip Focus Protection na Domov (ali ga odprite v nastavitvah). Ob pozivu dovolite dostop Screen Time, izberite, kaj želite blokirati, nato vklopite Focus Protection. Začnite sejo Fokus za uporabo ščitov.',
        },
        {
          question: 'Kako ga izklopim ali odklenem aplikacije?',
          answer:
            'Odprite list Focus Protection in izberite Izklopi zdaj ali izklopite funkcijo. Ko se seja konča, lahko uporabite tudi Odklepanje aplikacij na zaslonu ščita. Če želite v celoti odstraniti dostop Screen Time aplikacije, pojdite na iOS Nastavitve → Screen Time → Aplikacije z dostopom Screen Time.',
        },
        {
          question: 'Kaj pa, če Focus Protection ne deluje?',
          answer:
            'Potrdite, da je Pro aktiven, da je dostop Screen Time dovoljen in da ste izbrali aplikacije ali kategorije za blokiranje. Focus Protection velja le med sejami Fokus, ne med odmori. Če je bil dostop preklican v sistemskih nastavitvah, odprite aplikacijo in znova omogočite dostop. Ponovni zagon iPhone lahko pomaga po spremembi dovoljenja.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Račun in zasebnost',
      items: [
        {
          question: 'Kako izbrišem svoj račun?',
          answer:
            'Prijavite se, odprite Nastavitve → Račun → Izbriši račun in potrdite. Vaš račun in sinhronizirana zgodovina fokusa sta trajno izbrisana iz naše podatkovne zbirke v živo. Tega ni mogoče razveljaviti. Za brisanje je potrebna omrežna povezava. Če izbrišete svoj račun, ne prekličete naročnine na App Store – to upravljajte v nastavitvah App Store.',
        },
        {
          question: 'Na kaj vpliva izbris računa?',
          answer:
            'Sinhronizirani podatki v oblaku za račun se odstranijo, shranjeno pooblastilo za prijavo z računom Apple se prekliče, naš ponudnik nakupov prejme zahtevo za izbris zapisa o nakupu, povezanega z računom, podatki računa pa se odstranijo iz naprave, v kateri račun izbrišete. Lokalnih kopij v drugih napravah ni več mogoče sinhronizirati; po potrebi tam odstranite aplikacijo ali te kopije. Varnostne kopije ponudnika lahko izbrisane podatke hranijo v omejenem obdobju za obnovitev. Apple hrani lastne evidence transakcij v App Store.',
        },
        {
          question: 'Kako izvozim svoje podatke?',
          answer:
            'Nastavitve → Račun → Izvozi moje podatke shrani datoteko JSON s sejami, dnevnimi cilji, sinhroniziranimi nastavitvami in profilom računa. Neprevzete lokalne podatke je mogoče izvoziti tudi z zaslona za prijavo.',
        },
        {
          question: 'Kje je pravilnik o zasebnosti?',
          answer:
            'Odprite pravilnik o zasebnosti na spletnem mestu izdelka ali uporabite povezavo do zasebnosti na straneh izdelka tega mesta.',
        },
      ],
    },
    requirements: {
      title: 'Zahteve',
      body: 'iPhone: iOS 17 ali novejši. Mac: macOS 14.6 ali novejši. Pomodoro Pro nakupi in Focus Protection so na voljo na iPhone.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Za pomoč, povratne informacije ali poročila o napakah:',
    },
    privacyPolicyLink: 'Politika zasebnosti',
  },
  privacy: {
    metaTitle: `Politika zasebnosti ${PULSE_APP_NAME}`,
    metaDescription: `Politika zasebnosti za ${PULSE_APP_NAME}, ki zajema prijavo Apple in Google, sinhronizacijo v oblaku, nakupe Pomodoro Pro prek RevenueCat, Focus Protection, analitiko in brisanje računa na Mac in iPhone.`,
    title: 'Politika zasebnosti',
    subtitle: `${PULSE_APP_NAME} — Pomodoro časovnik za Mac in iPhone`,
    lastUpdated: 'Nazadnje posodobljeno: 26. oktobra 2026',
    summary: {
      title: 'Povzetek',
      body: `Ko se prijavite z Apple ali Google, vaš račun ohranja vašo zgodovino osredotočenosti, dnevne cilje in nastavitve časovnika sinhronizirane med vašima Mac in iPhone. Shranjujemo samo tisto, kar aplikacija za to potrebuje: vaš e-poštni naslov, identifikator računa in podatke o fokusu, ki jih ustvarite. Nikoli ga ne prodajamo, nikoli ga ne uporabljamo za oglaševanje in ga nikoli ne delimo z našim ponudnikom analitike. Če kupite Pomodoro Pro na iPhone, naš ponudnik nakupov RevenueCat ohranja vašo zgodovino nakupov povezano z vašim računom, tako da Pro deluje v vsaki napravi, v kateri se prijavite. Izbire aplikacij Focus Protection nikoli ne zapustijo vašega iPhone. V nastavitvah lahko kadar koli izvozite svoje podatke ali izbrišete svoj račun. Poleg tega lahko aplikacija pošilja anonimne analitike uporabe, ki varujejo zasebnost, da lahko izboljšamo pretok fokusa.`,
    },
    localData: {
      title: 'Podatki, shranjeni v vaši napravi',
      body: 'Vaše nastavitve časovnika, nastavitve seje in zgodovina fokusa so shranjeni lokalno na vašem Mac ali iPhone z uporabo standardnega sistemskega pomnilnika, tako da časovnik še naprej deluje brez povezave. Vsak račun, prijavljen v napravi, ima svojo ločeno lokalno trgovino. Vaša prijavna seja se hrani v sistemu Keychain. Nastavitve jezika, videza, zagona ob prijavi, obvestil in motivacijskih opomnikov ostanejo v vsaki napravi in ​​se ne sinhronizirajo. Sama vsebina zgodovine Fokus ni naložena našemu ponudniku analitike.',
      migrationSafety:
        'Ko se prvič prijavite v napravo, ki že ima zgodovino fokusa, vas aplikacija vpraša, preden to zgodovino premakne v vaš račun. Dokler premik ni potrjen na naših strežnikih, plus 90 dni, aplikacija hrani prejšnjo lokalno kopijo in lokalno varnostno kopijo v napravi kot varnostno mrežo, nato pa ju samodejno odstrani.',
    },
    accountAndSync: {
      title: 'Vaš račun in sinhronizirani podatki',
      intro: 'Če se prijavite, obdelamo:',
      items: [
        'Kontaktni podatki: e-poštni naslov, ki ga posreduje prijava z računom Apple (lahko gre za zasebni posredniški naslov, ustvarjen s funkcijo Skrij moj e-poštni naslov) ali Google. Ne zahtevamo vašega imena.',
        'Identifikatorji: ID računa, ustvarjen ob prijavi, in naključni ID za vsako namestitev, ki se uporablja samo za sinhronizacijo in za identifikacijo naprave, ki je izvedla spremembo.',
        'Podatki Fokus: dokončane in izbrisane seje osredotočenosti in premora (časi, trajanje, lokalni dan in časovni pas ter oznaka, ki ste jo izbrali), oznake, ki jih ustvarite (ime in barva), dnevni ciljni cilji, vaš najboljši niz in sinhronizirane nastavitve (dolžine sej, dnevni cilj, zvok, animacije, zaključni zvok, žival za praznovanje).',
      ],
      closing:
        'Ti podatki se uporabljajo samo za zagotavljanje funkcij sinhronizacije, zgodovine in računa. Povezan je z vašim računom, se ne uporablja za sledenje in se ne deli s tretjimi osebami, razen s spodnjimi procesorji.',
    },
    processors: {
      title: 'Procesorji in lokacija za shranjevanje',
      bodyBeforeSupabase: 'Podatki o računu in sinhronizaciji so shranjeni pri',
      bodyAfterSupabase:
        '(baza podatkov in avtentikacija) v Evropski uniji. Za prijavo skrbi',
      orWord: 'oz',
      bodyAfterProviders:
        ', odvisno od možnosti, ki jo izberete. Pomodoro Pro nakupe upravlja z',
      bodyAfterRevenueCat:
        '(glejte Nakupi spodaj). Podatki so med prenosom šifrirani, dostop pa je omejen, tako da lahko vsak račun bere samo svoje podatke.',
    },
    purchases: {
      title: 'Nakupi (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro se prodaja prek App Store; Apple obravnava plačila, mi pa nikoli ne vidimo vaših plačilnih podatkov. Da se Pro odklene v vsaki napravi, v katero se prijavite, aplikacija deli ID vašega računa s storitvijo',
      bodyAfterRevenueCat:
        ', ki hrani vašo zgodovino nakupov (kupljene izdelke, datume nakupa in podaljšanja ter stanje naročnine) povezano s tem ID-jem. Ti podatki se uporabljajo samo za odobritev in obnovitev dostopa Pro, se ne uporabljajo za sledenje in se ne delijo z našim ponudnikom analitike. Pro zahteva prijavljen račun; nič ni poslano na RevenueCat, preden se prijavite.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection uporablja ogrodje Screen Time Apple (Family Controls) za blokiranje aplikacij, kategorij in spletnih mest, ki jih izberete med izvajanjem fokusne seje. Apple daje aplikaciji samo neprozorne žetone za vaše izbire: ne moremo videti, katere aplikacije ali spletna mesta ste izbrali, kako jih uporabljate ali drugih podatkov Screen Time. Vaše izbire ostanejo na tem iPhone, se nikoli ne naložijo ali sinhronizirajo in se ne pošljejo našemu ponudniku analitike. Focus Protection lahko kadar koli izklopite v aplikaciji ali odstranite dostop aplikacije v Nastavitve → Screen Time → Aplikacije z dostopom Screen Time.',
    },
    retention: {
      title: 'Hranjenje, varnostno kopiranje in brisanje',
      items: [
        'Vaši sinhronizirani podatki se hranijo, dokler obstaja vaš račun.',
        'Izbriši račun (Nastavitve → Račun → Izbriši račun) trajno izbriše vaš račun in vse sinhronizirane podatke iz naše aktivne baze podatkov, prekliče shranjeno pooblastilo aplikacije za prijavo z računom Apple, od RevenueCat zahteva izbris zapisa o nakupu, povezanega z računom, in odstrani podatke računa iz naprave, v kateri ga izbrišete. Lokalne kopije v drugih napravah se ne morejo več sinhronizirati in ostanejo tam, dokler v teh napravah ne izbrišete aplikacije ali jih odstranite z zaslona za prijavo, ko je ta možnost ponujena.',
        'Naš ponudnik baze podatkov hrani dnevne varnostne kopije 7 dni. Izbrisani podatki lahko ostanejo v teh varnostnih kopijah, dokler ne potečejo; varnostne kopije se uporabljajo samo za obnovitev po katastrofi. Za isti namen lahko hranimo tudi šifrirano tedensko varnostno kopijo do 90 dni.',
        'Če izbrišete račun, s tem ne prekličete naročnine v App Store. Upravljajte jo ali jo prekličite v nastavitvah računa Apple. Apple hrani lastno evidenco vaših transakcij v App Store.',
        'Odjava ne izbriše ničesar. Spremembe, ki še niso bile sinhronizirane, ostanejo v napravi, dokler se isti račun znova ne prijavi.',
        'Zapise analitike obravnava TelemetryDeck v skladu s svojimi praksami hrambe in se ne uporabljajo za obnovitev vaše zgodovine fokusa.',
      ],
    },
    export: {
      title: 'Izvozi',
      body: 'Nastavitve → Račun → Izvozi moje podatke shrani datoteko JSON z vašimi sejami, dnevnimi cilji, sinhroniziranimi nastavitvami in profilom računa. Podatke, ki še niso bili premaknjeni v račun, je mogoče izvoziti tudi z zaslona za prijavo.',
    },
    analytics: {
      title: 'Analitika',
      introBeforeLink: 'Uporabljamo',
      introAfterLink:
        ', analitična storitev, osredotočena na zasebnost, da bi razumeli, kako se aplikacija uporablja (na primer: začete ali zaključene seje osredotočenosti ali odmora, dnevne spremembe ciljev, spremembe nastavitev, rezultati dovoljenj za obvestila, dogodki opomnikov za motivacijo in ali je vkrcanje končano). Signali ne vključujejo besedila v prosti obliki, imen, e-poštnih naslovov ali vsebine vaše zgodovine fokusa.',
      identifier:
        'TelemetryDeck identificira namestitve z zgoščenim identifikatorjem v obsegu naprave in lahko priloži neosebne metapodatke o napravi (kot so model, različica OS in jezik). Ti podatki se uporabljajo samo za analitiko, ne povezujemo jih z vašo identiteto in se ne uporabljajo za sledenje v aplikacijah ali spletnih mestih drugih podjetij.',
      learnMore: 'Več o tem:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store posodobitve',
      body: 'Če v nastavitvah uporabljate »Preveri posodobitve«, se lahko aplikacija obrne na Apple, da preveri, ali je na App Store na voljo novejša različica.',
    },
    launchAtLogin: {
      title: 'Zaženi ob prijavi (Mac)',
      body: 'Če omogočite Zagon ob prijavi v nastavitvah na Mac, aplikacija uporablja sistemske API-je macOS za registracijo kot prijavni element. To nastavitev nadzirate vi in ​​jo lahko kadar koli onemogočite.',
    },
    notifications: {
      title: 'Obvestila in Live Activities (iPhone)',
      body: 'Na iPhone vam izbirna lokalna obvestila, motivacijski opomniki in Live Activities pomagajo videti, kdaj se seja konča, ali se nežno vrnete v fokus. Dovoljenje je zahtevano samo, ko se odločite omogočiti te funkcije. Vsebina obvestil ostane v vaši napravi.',
    },
    whatWeDoNotDo: {
      title: 'Česa ne počnemo',
      items: [
        'Brez oglaševalskih omrežij',
        'Brez prodaje osebnih podatkov',
        'Ni dostopa do vaših stikov, fotografij, natančne lokacije, kamere ali mikrofona za analitiko',
      ],
    },
    children: {
      title: 'otroci',
      body: `${PULSE_APP_NAME} zavestno ne zbira osebnih podatkov otrok, razen tistih, ki jih mora račun sinhronizirati, kot je opisano zgoraj. Analitični signali so anonimni in ne vključujejo osebne vsebine.`,
    },
    changes: {
      title: 'Spremembe',
      body: 'Če se ta pravilnik spremeni, bo posodobljena različica objavljena na tem URL-ju.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Vprašanja o tej politiki:',
    },
  },
}
