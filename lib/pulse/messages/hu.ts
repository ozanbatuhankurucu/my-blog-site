import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const huMessages: PulseMessages = {
  languageLabel: 'Oldal nyelve',
  video: {
    ariaLabel: `${PULSE_APP_NAME} termékbemutató`,
    playLabel: 'Bemutató lejátszása',
    unsupported: 'A böngésződ nem támogatja a beágyazott videót.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Fókusz időzítő iPhone-ra és Macre`,
    metaDescription: `${PULSE_APP_NAME} egy nyugodt Pomodoro időzítő iPhone-ra és Macre, Focus History-val, Daily Focus Goals-szal, Apple- és Google-bejelentkezéssel, valamint offline-first szinkronnal az eszközeid között.`,
    heroImageAlt: `${PULSE_APP_NAME} fókusz időzítő és heti előzmények áttekintése`,
    backToProjects: 'Vissza a projektekhez',
    availableOnAppStore: 'Elérhető az App Store-ban',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Fókusz időzítő iPhone-ra és Macre',
    tagline: 'Egy kellemes Pomodoro időzítő, amely segít a fókuszban maradni — iPhone-on és a Mac menüsorában.',
    description: `Indíts fókuszmunkamenetet, tarts szünetet, és vidd magaddal az előzményeidet. Jelentkezz be Apple-lel vagy Google-lel, hogy a Daily Focus Goals, a Focus History és a szinkronizált beállítások a fiókodhoz kötődjenek iPhone-on és Macen — miközben az időzítő offline is működik.`,
    downloadCta: 'Letöltés az App Store-ból',
    watchDemo: 'Megnézem működés közben',
    supportCta: 'Támogatás',
    stats: {
      platformLabel: 'Platformok',
      platformValue: 'iPhone és Mac',
      languagesLabel: 'Nyelvek',
      languagesValue: '48 nyelv',
      dataLabel: 'Szinkron',
      dataValue: 'Offline-first',
      builtWithLabel: 'Készült',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Csendesebb mód a fókuszra',
      title: 'Az időzítő ott van, amikor kell — és eltűnik, amikor nem.',
      description: `Macen nyisd meg a ${PULSE_APP_NAME}-t a menüsorból, válassz munkamenetet, és zárd be a felugró ablakot. iPhone-on indíts Fókuszt a Kezdőlapról, és támogatott eszközökön folytasd Live Activities-szel. Az időzítő fut, amíg te dolgozol.`,
      caption:
        'Fókusz- és szünetidőzítők, Daily Focus Goals, Focus History, sorozatkövetés, 48 nyelvű lokalizáció és opcionális befejezési értesítések.',
    },
    rhythm: {
      eyebrow: 'Egy ritmus, amit te irányítasz',
      title: 'Fókusz, szünet, feltöltődés, ismétlés.',
      description: `${PULSE_APP_NAME} javasolja, mi következik, de soha nem indít munkamenetet helyetted. Minden időtartam a napodhoz igazítható.`,
    },
    featureShowcases: [
      {
        title: 'Fókusz',
        badge: '1–120 perc',
        description:
          'A visszaszámlálás csendben fut, amíg dolgozol. Szünet, nullázás vagy kihagyás — iPhone-on és Macen te irányítasz.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} futó fókuszmunkamenet szünetvezérléssel és visszaszámlálással`,
      },
      {
        title: 'Menüsor',
        badge: 'Mac',
        description:
          'Macen megjelenítheted vagy elrejtheted a hátralévő időt a menüsorban. A fix szélességű státuszelem a helyén marad anélkül, hogy eltolná a felugró ablakot, akár 120:00-ig.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} visszaszámlálás a macOS menüsorában`,
      },
      {
        title: 'Testreszabás',
        badge: 'A te szabályaid',
        description:
          'Rugalmas időtartamok, Daily Focus Goals, befejezési hangok és animációk, 48 nyelvű felület és megjelenési beállítások.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} beállítások időtartamokhoz, befejezési értesítésekhez, nyelvhez és célokhoz`,
      },
    ],
    history: {
      eyebrow: 'Haladás nyomás nélkül',
      title: 'Lásd, ahogy összeadódik a munka.',
      description:
        'Nyisd meg a Focus History-t az összesítések és sorozatok áttekintéséhez. Bejelentkezés után az előzmények szinkronizálhatók iPhone és Mac között, hogy a haladás veled járjon.',
      items: ['Összes fókuszidő', 'Befejezett munkamenetek', 'Jelenlegi sorozat', 'Legjobb sorozat', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} heti fókuszelőzmények munkamenetszámmal, fókuszórákkal és sorozattal`,
    },
    feedback: {
      eyebrow: 'Finom visszajelzés, a te módodon',
      title: 'A befejezés legyen kielégítő.',
      description: `Válassz hat nyugodt befejezési hang közül és hat állatos ünneplés közül — vagy kapcsold ki bármelyiket. A ${PULSE_APP_NAME} a megfelelő üzenetet mutatja, amikor egy Fókusz-, Rövid szünet- vagy Hosszú szünet-munkamenet véget ér.`,
      items: [
        'Munkamenethez igazított befejezési cím és alcím',
        'Felület 48 nyelven, alapértelmezésben a rendszer nyelvével',
        'Nyelv- és megjelenésbeállítások minden eszközön',
        'Opcionális motivációs emlékeztetők iPhone-on',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} beállítások időtartamokhoz, nyelvhez, befejezési hangokhoz és célokhoz`,
      celebrationImageAlt: `${PULSE_APP_NAME} nyúl ünneplő animáció munkamenet befejezésekor`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Majom', 'Koala', 'Macska', 'Róka', 'Panda', 'Nyúl'],
    },
    native: {
      eyebrow: 'Natív tervezés',
      title: 'Úgy készült, hogy otthon érezd magad Apple eszközökön.',
      description: `A SwiftUI, az AppKit és a rendszerkonvenciók gyorsan és ismerősen tartják a ${PULSE_APP_NAME}-t — VoiceOver feliratokkal és Reduce Motion támogatással végig.`,
      features: [
        {
          title: 'Mac menüsor és iPhone Kezdőlap',
          description: 'Csendes menüsor-társ Macen, fókuszált Kezdőlap-élmény iPhone-on.',
        },
        {
          title: 'Pontos marad',
          description:
            'A munkamenetek helyesek maradnak alvás, ébresztés és újraindítás után is; az előzmények a tényleges befejezési időpontban rögzülnek.',
        },
        {
          title: 'Offline-first szinkron',
          description:
            'Fókuszálj kapcsolat nélkül is. Amikor újra online vagy, a bejelentkezett változtatások szinkronizálnak a fiókoddal.',
        },
        {
          title: 'A te nyelveden szól',
          description:
            'Teljes felület 48 nyelven, alapértelmezésben a rendszer nyelvével és kézi felülírással a Beállításokban.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Adatvédelem tervezésből',
      title: 'A fókuszod a tiéd marad.',
      description: `${PULSE_APP_NAME} fiókot használ, hogy az előzmények szinkronizálhatók legyenek az eszközeid között. Csak azt tároljuk, amire a szinkronnak szüksége van, soha nem adjuk el az adataidat, és az analitikát elkülönítjük a fókuszelőzményeidtől.`,
      items: [
        'Bejelentkezés Apple-lel vagy Google-lel',
        'Offline-first fókusz minden eszközön',
        'Felhőszinkron az előzményekhez és szinkronizált beállításokhoz',
        'Nincsenek hirdetési hálózatok',
        'Fiók bármikor törölhető a Beállításokban',
      ],
    },
    closing: {
      title: 'Teremts helyet a fókuszált munkának.',
      description: `Töltsd le a ${PULSE_APP_NAME}-t az App Store-ból iPhone-ra és Macre, vagy olvasd el az adatvédelmi szabályzatot és a támogatási oldalt, ha segítségre van szükséged.`,
      getSupport: 'Támogatás kérése',
      privacy: 'Adatvédelem',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} támogatás`,
    metaDescription: `Támogatás, GYIK és fióksegítség a ${PULSE_APP_NAME}-hoz iPhone-on és Macen — beleértve a Pomodoro Pro-t, vásárlásokat, Fókuszvédelmet, bejelentkezést, szinkront és fióktörlést.`,
    title: `${PULSE_APP_NAME} támogatás`,
    intro: `${PULSE_APP_NAME} egy nyugodt Pomodoro időzítő iPhone-ra és Macre. Jelentkezz be Apple-lel vagy Google-lel a Focus History szinkronizálásához az eszközeid között. iPhone-on az opcionális Pomodoro Pro feloldja a Fókuszvédelmet, az egyéni címkéket és a Címkestatisztikát.`,
    gettingStarted: {
      title: 'Első lépések',
      items: [
        {
          question: 'Hogyan indítsak fókuszmunkamenetet?',
          answer:
            'Macen kattints az alkalmazás ikonjára a menüsorban, válaszd a Fókuszt, a Rövid szünetet vagy a Hosszú szünetet, majd nyomd meg az Indítás gombot. iPhone-on nyisd meg az appot, válassz munkamenetet a Kezdőlapon, és nyomd meg az Indítás gombot. Az időzítő futása közben elhagyhatod az appot.',
        },
        {
          question: 'Hogyan változtassam a fókusz- és szünetidőtartamokat?',
          answer:
            'Nyisd meg a Beállításokat, és állítsd be a Fókusz, Rövid szünet és Hosszú szünet hosszát. Választhatsz előre beállított ritmust is, majd finomhangolhatod a perceket.',
        },
        {
          question: 'Hogyan állítsam be a Daily Focus Goals-t?',
          answer:
            'A Beállításokban add meg, hány fókuszmunkamenetet szeretnél naponta. A haladás a Kezdőlapon és a Focus History-ban jelenik meg.',
        },
        {
          question: 'Hogyan nézem meg a Focus History-t?',
          answer:
            'Nyisd meg a Focus History-t az appban (Macen a felugró ablakból vagy a státuszmenüből). Látni fogod az összesítéseket, sorozatokat és heti haladást.',
        },
        {
          question: 'Hogyan változtassam a nyelvet és a megjelenést?',
          answer:
            'A Beállításokban válaszd a Nyelvet (Rendszer vagy támogatott nyelv) és a Megjelenést (Rendszer, Világos vagy Sötét). Ezek a beállítások eszközönként maradnak, és nem szinkronizálódnak.',
        },
      ],
    },
    accounts: {
      title: 'Fiókok',
      items: [
        {
          question: 'Miért kötelező a bejelentkezés?',
          answer:
            'A fiók biztosítja, hogy a Focus History, a Daily Focus Goals és a szinkronizált beállítások veled maradjanak iPhone-on és Macen. Az új telepítések bejelentkezést kérnek az időzítő használata előtt. A régebbi verzióról frissítő eszközök a bejelentkezésig használhatják tovább a helyi előzményeket. A Pomodoro Pro vásárlások is a bejelentkezett fiókodhoz kötődnek.',
        },
        {
          question: 'Hogyan jelentkezek be Apple-lel vagy Google-lel?',
          answer:
            'A bejelentkezési képernyőn válaszd a Folytatás Apple-lel vagy a Folytatás Google-lel lehetőséget, és fejezd be a szolgáltató folyamatát. Az Apple kínálhat Hide My Email-t.',
        },
        {
          question: 'Hogyan jelentkezek ki?',
          answer:
            'Nyisd meg a Beállítások → Fiók → Kijelentkezés menüpontot. Ha néhány változtatás még nem szinkronizált, az app kérhet előbb szinkronizálást, vagy kijelentkezhetsz így is. A kijelentkezés nem törli a fiókodat.',
        },
        {
          question: 'Hogyan jelentkezek be újra?',
          answer:
            'A bejelentkezési képernyőn ugyanazt az Apple- vagy Google-módszert használd. A felhőbeli előzmények visszaállnak arra a fiókra az eszközön.',
        },
        {
          question: 'Mi történik, ha másik fiókot használok?',
          answer:
            'Minden fióknak saját előzménye van. Másik fiókba való bejelentkezés nem egyesíti a különböző előzményeket. Óvatosan válassz, mielőtt megerősíted az előzmény igénylését egy olyan eszközön, amelyen már vannak helyi munkamenetek.',
        },
        {
          question: 'Összekapcsolhatom az Apple-t és a Google-t ugyanahhoz a fiókhoz?',
          answer:
            'Igen. A Beállítások → Fiók menüpontban összekapcsolhatod a másik bejelentkezési módot, ha azt még nem használja másik fiók.',
        },
      ],
    },
    cloudSync: {
      title: 'Felhőszinkronizáció',
      items: [
        {
          question: 'Mi szinkronizál az eszközök között?',
          answer:
            'Fókusz- és szünetmunkamenetek előzményei (beleértve a választott címkét), az általad létrehozott címkék, Daily Focus Goal rekordok, sorozathoz kapcsolódó fiókadatok, valamint szinkronizált beállítások, például munkamenet hosszok, napi cél, hang, animációk, befejezési hang és ünneplő állat.',
        },
        {
          question: 'Mi történik internet nélkül?',
          answer:
            'Bejelentkezés után offline is használhatod az időzítőt. Az új munkamenetek és változtatások az eszközön maradnak, amíg elérhető a kapcsolat.',
        },
        {
          question: 'Mi történik, amikor újra online vagyok?',
          answer:
            'Az app szinkronizálja a függőben lévő változtatásokat a fiókoddal. A szinkron offline-first és végül konzisztens — nem azonnali valós idejű együttműködés.',
        },
        {
          question: 'Hogyan használom ugyanazt a fiókot iPhone-on és Macen?',
          answer:
            'Telepítsd az appot mindkét eszközre, és jelentkezz be ugyanazzal az Apple- vagy Google-fiókkal. A visszaállítás befejezése után a Focus History mindkettőn megjelenhet.',
        },
        {
          question: 'Mi van, ha hiányoznak az előzmények?',
          answer:
            'Ellenőrizd, hogy ugyanazzal a fiókkal vagy-e bejelentkezve, várd meg a visszaállítás/szinkron befejezését, és nézd meg újra a Focus History-t. Ha másik fiókba jelentkeztél be, az a fiók saját előzményeit mutatja.',
        },
      ],
    },
    migration: {
      title: 'Frissítés régebbi verzióról',
      items: [
        {
          question: 'Mi történik a meglévő helyi előzményeimmel?',
          answer:
            'A meglévő helyi előzményeket nem töröljük csendben. Bejelentkezés után az app kérdez, mielőtt ezeket az előzményeket hozzáadná a fiókodhoz.',
        },
        {
          question: 'Hogyan igényeljem az előzményeimet?',
          answer:
            'Jelentkezz be azzal a fiókkal, amelynek az előzményei legyenek, nézd át az Előzmények hozzáadása képernyőt, majd válaszd a Hozzáadás ehhez a fiókhoz lehetőséget. Használj másik fiókot, ha a megjelenített fiók hibás. A munkamenetek később nem helyezhetők át másik fiókba.',
        },
        {
          question: 'Mi van, ha az eszköz és a fiók beállításai eltérnek?',
          answer:
            'Az app megkérdezheti, hogy megtartod-e az eszköz beállításait, vagy a fiók beállításait használod. A nyelv, megjelenés, értesítések és motivációs emlékeztetők eszközönként maradnak.',
        },
      ],
    },
    notifications: {
      title: 'Értesítések',
      items: [
        {
          question: 'Hogyan engedélyezem az értesítéseket iPhone-on?',
          answer:
            'Nyisd meg a Beállítások → Értesítések menüpontot, és válaszd az Engedélyezés lehetőséget, vagy nyisd meg a rendszer Beállításokat, ha korábban megtagadtad az engedélyt.',
        },
        {
          question: 'Hogyan működnek a motivációs emlékeztetők?',
          answer:
            'iPhone-on nyisd meg a Beállítások → Motivációs emlékeztetők menüpontot, és kapcsold be őket, miután az értesítések engedélyezettek. Szüneteltetheted őket, vagy beállíthatsz csendes időszakot. Opcionálisak, alapértelmezésben ki vannak kapcsolva.',
        },
        {
          question: 'Mi van, ha az értesítések ki vannak kapcsolva?',
          answer:
            'A munkamenet-végi értesítésekhez és motivációs emlékeztetőkhöz értesítési engedély kell. Használd a Beállítások → Értesítések → Beállítások megnyitása menüpontot az iOS Beállításokban való bekapcsoláshoz.',
        },
        {
          question: 'Hogyan működnek a Live Activities?',
          answer:
            'Támogatott iPhone-okon egy opcionális Live Activity megjelenítheti az aktív munkamenetet a Zárképernyőn és a Dynamic Islanden. Az engedélyt akkor kérjük, amikor bekapcsolod a kapcsolódó funkciókat.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Mi a Pomodoro Pro?',
          answer:
            'A Pomodoro Pro egy opcionális alkalmazáson belüli vásárlás iPhone-on. Feloldja a Fókuszvédelmet, az egyéni címkéket (saját nevek és színek), valamint a Címkestatisztikát (heti és havi fókuszidő címkénként). Az időzítő, a beépített címkék, a Focus History és a szinkron Pro nélkül is elérhető.',
        },
        {
          question: 'Milyen vásárlási lehetőségek vannak?',
          answer:
            'A Pomodoro Pro havi előfizetésként, éves (Annual) előfizetésként vagy egyszeri Lifetime vásárlásként érhető el. Az előfizetések automatikusan megújulnak, hacsak nem mondod le legalább 24 órával az aktuális időszak vége előtt. A Lifetime egyszeri díj, és nem előfizetés.',
        },
        {
          question: 'Hol vásárolhatom meg vagy hol látom a Pomodoro Pro-t?',
          answer:
            'iPhone-on nyisd meg a Beállítások → Pomodoro Pro menüpontot, vagy koppints a védelem chipre a Kezdőlapon. Be kell jelentkezned. A Pro a fiókodhoz kötődik minden eszközön, amelyen bejelentkezel.',
        },
        {
          question: 'Hogyan állíthatom vissza a vásárlásokat?',
          answer:
            'Használd a Hiányzó vásárlások visszaállítása lehetőséget a fizetőfalon vagy a Beállítások → Pomodoro Pro menüpontban. Ugyanazzal az Apple-fiókkal végzett vásárlások átkerülnek arra a fiókra, amellyel be vagy jelentkezve. Ha nem talál semmit, ellenőrizd, hogy a Pro-t vásárló Apple-fiókot használod-e, és próbáld újra online.',
        },
      ],
    },
    purchases: {
      title: 'Előfizetések és vásárlások',
      items: [
        {
          question: 'Hogyan kezelem vagy mondom le az előfizetést?',
          answer:
            'Az előfizetéseket az Apple számlázza. iPhone-on nyisd meg a Beállítások → Pomodoro Pro → Előfizetés kezelése menüpontot, vagy menj a Beállítások → [a neved] → Előfizetések menüpontba, és válaszd ki az appot. Legalább 24 órával a megújítás előtt mondd le, hogy elkerüld a következő díjat. Az app vagy a Pomodoro-fiók törlése nem mond le előfizetést.',
        },
        {
          question: 'Hogyan kérhetek visszatérítést?',
          answer:
            'A visszatérítéseket az Apple kezeli. Látogasd meg a reportaproblem.apple.com oldalt, jelentkezz be a vásárláshoz használt Apple-fiókkal, keresd meg a tranzakciót, és küldj visszatérítési kérelmet. Az App Store visszatérítéseket mi magunk nem tudjuk feldolgozni.',
        },
        {
          question: 'Mi van, ha a vásárlás sikertelen, vagy a Pro nem oldódik fel?',
          answer:
            'Maradj bejelentkezve, ellenőrizd a hálózati kapcsolatot, és próbáld újra. Ha a fizetés függőben van (például Vásárlás kérése), a Pro a jóváhagyás után oldódik fel. Ha már fizettél, használd a vásárlások visszaállítását. Aktív előfizetés esetén fizetési problémáknál frissítsd a fizetési módot az App Store beállításaiban.',
        },
        {
          question: 'Mi van, ha Lifetime-ot vásárolok aktív előfizetés mellett?',
          answer:
            'A Lifetime véglegesen feloldja a Pro-t, de a meglévő előfizetés nem mondódik le automatikusan. Kapcsold ki az automatikus megújítást az App Store előfizetési beállításaiban, hogy ne számlázzanak újra.',
        },
      ],
    },
    focusProtection: {
      title: 'Fókuszvédelem',
      items: [
        {
          question: 'Mi a Fókuszvédelem?',
          answer:
            'A Fókuszvédelem egy Pomodoro Pro funkció iPhone-on. Az Apple Screen Time API-jait használja, hogy blokkolja az általad választott appokat, kategóriákat vagy webhelyeket fókuszmunkamenet közben. A szüneteket soha nem blokkolja. A munkamenet végén a blokkolt appok automatikusan feloldódnak.',
        },
        {
          question: 'Hogyan állítsam be?',
          answer:
            'Aktív Pro mellett koppints a Fókuszvédelem chipre a Kezdőlapon (vagy nyisd meg a Beállításokból). Engedélyezd a Screen Time hozzáférést, válaszd ki, mit blokkolj, majd kapcsold be a Fókuszvédelmet. Indíts fókuszmunkamenetet a pajzsok alkalmazásához.',
        },
        {
          question: 'Hogyan kapcsolom ki vagy oldom fel az appokat?',
          answer:
            'Nyisd meg a Fókuszvédelem panelt, és válaszd a Kikapcsolás most lehetőséget, vagy kapcsold ki a funkciót. Munkamenet után a pajzs képernyőn az Appok feloldása is használható. Az app teljes Screen Time hozzáférésének eltávolításához menj az iOS Beállítások → Screen Time → Screen Time hozzáféréssel rendelkező appok menüpontba.',
        },
        {
          question: 'Mi van, ha a Fókuszvédelem nem működik?',
          answer:
            'Ellenőrizd, hogy a Pro aktív-e, a Screen Time hozzáférés engedélyezett-e, és kiválasztottál-e appokat vagy kategóriákat blokkolásra. A Fókuszvédelem csak fókuszmunkamenetek alatt érvényes, szünetek alatt nem. Ha a rendszer Beállításokban visszavonták a hozzáférést, nyisd meg az appot, és engedélyezd újra. Engedélyváltás után az iPhone újraindítása segíthet.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Fiók és adatvédelem',
      items: [
        {
          question: 'Hogyan törlöm a fiókomat?',
          answer:
            'Jelentkezz be, nyisd meg a Beállítások → Fiók → Fiók törlése menüpontot, majd erősítsd meg. A fiókod és a szinkronizált fókuszelőzmények véglegesen törlődnek az élő adatbázisunkból. Ez nem vonható vissza. A törléshez hálózati kapcsolat kell. A fiók törlése nem mond le App Store előfizetést — azt az App Store beállításaiban kezelheted.',
        },
        {
          question: 'Mit érint a fióktörlés?',
          answer:
            'Az adott fiók szinkronizált felhőadatai törlődnek, a Sign in with Apple engedély visszavonásra kerül, ha tárolva van, a fiókodhoz kapcsolt vásárlási rekord törlését kérjük a vásárlási szolgáltatónknál, és a fiók adatai törlődnek az eszközről, amelyen törlöd. A más eszközökön lévő helyi másolatok már nem szinkronizálhatnak; szükség esetén távolítsd el az appot vagy töröld az adatokat ott. A szolgáltatói biztonsági mentések korlátozott helyreállítási ablakban megőrizhetik a törölt adatokat. Az Apple saját App Store tranzakciós nyilvántartást tart.',
        },
        {
          question: 'Hogyan exportálom az adataimat?',
          answer:
            'A Beállítások → Fiók → Adataim exportálása JSON fájlt ment munkamenetekkel, napi célokkal, szinkronizált beállításokkal és fiókprofillal. Az igénybe nem vett helyi adatok a bejelentkezési képernyőről is exportálhatók.',
        },
        {
          question: 'Hol találom az adatvédelmi szabályzatot?',
          answer:
            'Nyisd meg az adatvédelmi szabályzatot a termék weboldaláról, vagy használd az adatvédelmi linket ezen az oldalon a termékoldalakon.',
        },
      ],
    },
    requirements: {
      title: 'Követelmények',
      body: 'iPhone: iOS 17 vagy újabb. Mac: macOS 14.6 vagy újabb. A Pomodoro Pro vásárlások és a Fókuszvédelem iPhone-on érhetők el.',
    },
    contact: {
      title: 'Kapcsolat',
      body: 'Segítség, visszajelzés vagy hibajelentés esetén:',
    },
    privacyPolicyLink: 'Adatvédelmi szabályzat',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} adatvédelmi szabályzat`,
    metaDescription: `Adatvédelmi szabályzat a ${PULSE_APP_NAME}-hoz: Apple- és Google-bejelentkezés, felhőszinkron, Pomodoro Pro vásárlások a RevenueCat-en keresztül, Fókuszvédelem, analitika és fióktörlés Macen és iPhone-on.`,
    title: 'Adatvédelmi szabályzat',
    subtitle: `${PULSE_APP_NAME} — Pomodoro időzítő Macre és iPhone-ra`,
    lastUpdated: 'Utoljára frissítve: 2026. október 26.',
    summary: {
      title: 'Összefoglaló',
      body: `Ha Apple-lel vagy Google-lel jelentkezel be, a fiókod szinkronban tartja a fókuszelőzményeket, napi célokat és időzítőbeállításokat Mac és iPhone között. Csak azt tároljuk, amire az apphoz szükség van: az e-mail címedet, egy fiókazonosítót és az általad létrehozott fókuszadatokat. Soha nem adjuk el, nem használjuk hirdetésre, és nem osztjuk meg analitikai szolgáltatónkkal. Ha Pomodoro Pro-t vásárolsz iPhone-on, vásárlási szolgáltatónk, a RevenueCat a vásárlási előzményeket a fiókodhoz köti, hogy a Pro minden bejelentkezett eszközön működjön. A Fókuszvédelem appválasztásai soha nem hagyják el az iPhone-odat. Bármikor exportálhatod az adataidat vagy törölheted a fiókodat a Beállításokból. Emellett az app anonim, adatvédelmet őrző használati analitikát küldhet, hogy javíthassuk a fókuszfolyamatokat.`,
    },
    localData: {
      title: 'Az eszközön tárolt adatok',
      body: 'Az időzítőbeállítások, munkamenet-preferenciák és fókuszelőzmények helyben, a szokásos rendszertárolón mentődnek Macen vagy iPhone-on, hogy az időzítő offline is működjön. Minden bejelentkezett fióknak saját helyi tárolója van az eszközön. A bejelentkezési munkamenet a rendszer Keychainjében marad. A nyelv, megjelenés, Indítás bejelentkezéskor, értesítések és motivációs emlékeztetők eszközönként maradnak, és nem szinkronizálódnak. Maga a fókuszelőzmény tartalma nem kerül feltöltésre analitikai szolgáltatónkhoz.',
      migrationSafety:
        'Ha először jelentkezel be egy olyan eszközön, amelyen már van fókuszelőzmény, az app kérdez, mielőtt az előzményeket a fiókodba helyezné. Amíg az áthelyezés nincs megerősítve a szervereinken, plusz 90 napig az app megtartja a korábbi helyi másolatot és egy helyi biztonsági mentési fájlt az eszközön biztonsági hálóként, majd automatikusan eltávolítja őket.',
    },
    accountAndSync: {
      title: 'A fiókod és szinkronizált adatok',
      intro: 'Bejelentkezés esetén az alábbiakat dolgozzuk fel:',
      items: [
        'Kapcsolattartási adat: a Sign in with Apple (amely Hide My Email-en keresztül privát relay cím lehet) vagy a Google által megosztott e-mail cím. A nevedet nem kérjük.',
        'Azonosítók: bejelentkezéskor létrehozott fiókazonosító és telepítésenként véletlen azonosító, csak szinkronizálásra és annak megállapítására, melyik eszköz végzett változtatást.',
        'Fókuszadatok: befejezett és törölt fókusz- és szünetmunkamenetek (időpontok, időtartamok, helyi nap és időzóna, valamint a választott címke), az általad létrehozott címkék (név és szín), napi célok, legjobb sorozatod, valamint szinkronizált beállítások (munkamenet hosszok, napi cél, hang, animációk, befejezési hang, ünneplő állat).',
      ],
      closing:
        'Ezek az adatok kizárólag szinkronizálásra, előzményekre és fiókfunkciókra szolgálnak. A fiókodhoz kapcsolódnak, nem használjuk követésre, és nem osztjuk meg harmadik felekkel az alábbi feldolgozókon kívül.',
    },
    processors: {
      title: 'Feldolgozók és tárolási hely',
      bodyBeforeSupabase: 'A fiók- és szinkronadatokat a',
      bodyAfterSupabase:
        '(adatbázis és hitelesítés) szolgáltatónál tároljuk az Európai Unióban. A bejelentkezést a választott opciótól függően a',
      orWord: 'vagy',
      bodyAfterProviders:
        'kezeli. A Pomodoro Pro vásárlásokat a',
      bodyAfterRevenueCat:
        'kezeli (lásd a Vásárlások alább). Az adatok átvitel közben titkosítottak, a hozzáférés korlátozott, hogy minden fiók csak a saját adatait olvassa.',
    },
    purchases: {
      title: 'Vásárlások (iPhone)',
      bodyBeforeRevenueCat:
        'A Pomodoro Pro az App Store-on keresztül kapható; a fizetést az Apple kezeli, és mi soha nem látjuk a fizetési adataidat. Hogy a Pro minden bejelentkezett eszközön feloldódjon, az app megosztja a fiókazonosítódat a',
      bodyAfterRevenueCat:
        'szolgáltatóval, amely a vásárlási előzményeket (megvásárolt termékek, vásárlási és megújítási dátumok, előfizetési státusz) ehhez az azonosítóhoz köti. Ezek az adatok csak a Pro hozzáférés megadására és visszaállítására szolgálnak, nem használjuk követésre, és nem osztjuk meg analitikai szolgáltatónkkal. A Pro bejelentkezett fiókot igényel; bejelentkezés előtt semmi nem kerül a RevenueCat-hez.',
    },
    focusProtection: {
      title: 'Fókuszvédelem (iPhone)',
      body: 'A Fókuszvédelem az Apple Screen Time keretrendszerét (Family Controls) használja, hogy blokkolja az általad választott appokat, kategóriákat és webhelyeket fókuszmunkamenet közben. Az Apple csak átláthatatlan tokeneket ad az appnak a választásaidhoz: nem látjuk, mely appokat vagy webhelyeket választottad, hogyan használod őket, vagy más Screen Time adatot. A választásaid azon az iPhone-on maradnak, soha nem töltődnek fel vagy szinkronizálódnak, és nem kerülnek analitikai szolgáltatónkhoz. A Fókuszvédelmet bármikor kikapcsolhatod az appban, vagy eltávolíthatod az app hozzáférését a Beállítások → Screen Time → Screen Time hozzáféréssel rendelkező appok menüpontban.',
    },
    retention: {
      title: 'Megőrzés, biztonsági mentések és törlés',
      items: [
        'A szinkronizált adataidat addig őrizzük, amíg a fiókod létezik.',
        'Fiók törlése (Beállítások → Fiók → Fiók törlése) véglegesen törli a fiókodat és az összes szinkronizált adatot az élő adatbázisunkból, visszavonja az app Sign in with Apple engedélyét, ha tárolva van, kéri a RevenueCat-et, hogy törölje a fiókodhoz kapcsolt vásárlási rekordot, és eltávolítja a fiók adatait az eszközről, amelyen törlöd. A más eszközökön lévő helyi másolatok már nem szinkronizálhatnak, és ott maradnak, amíg nem törlöd az appot azokon az eszközökön, vagy nem távolítod el őket a bejelentkezési képernyőről, ha felajánlja.',
        'Adatbázis-szolgáltatónk 7 napig őriz napi biztonsági mentéseket. A törölt adatok ezekben a mentésekben maradhatnak, amíg le nem járnak; a mentések csak katasztrófa-helyreállításra szolgálnak. Ugyanebből a célból akár 90 napig is tarthatunk titkosított heti biztonsági mentést.',
        'A fiók törlése nem mond le App Store előfizetést; kezeld vagy mondd le az Apple-fiók beállításaiban. Az Apple saját App Store tranzakciós nyilvántartást tart.',
        'A kijelentkezés nem töröl semmit. A még nem szinkronizált változtatások az eszközön maradnak, amíg ugyanaz a fiók újra be nem jelentkezik.',
        'Az analitikai rekordokat a TelemetryDeck kezeli a saját megőrzési gyakorlata szerint, és nem használjuk fókuszelőzmények helyreállítására.',
      ],
    },
    export: {
      title: 'Exportálás',
      body: 'A Beállítások → Fiók → Adataim exportálása JSON fájlt ment munkameneteiddel, napi célokkal, szinkronizált beállításokkal és fiókprofillal. A még fiókba nem helyezett adatok a bejelentkezési képernyőről is exportálhatók.',
    },
    analytics: {
      title: 'Analitika',
      introBeforeLink: 'A',
      introAfterLink:
        ', egy adatvédelem-központú analitikai szolgáltatást használjuk, hogy megértsük, hogyan használják az appot (például: elindított vagy befejezett fókusz- vagy szünetmunkamenetek, napi cél változtatások, beállításváltoztatások, értesítési engedély eredményei, motivációs emlékeztető események, és hogy befejeződött-e az onboarding). A jelek nem tartalmaznak szabad szöveget, neveket, e-maileket vagy fókuszelőzmény tartalmat.',
      identifier:
        'A TelemetryDeck telepítéseket hash-elt, eszközhöz kötött azonosítóval ismer fel, és csatolhat nem személyes eszközmetaadatokat (például modell, operációs rendszer verzió és területi beállítás). Ezek az adatok csak analitikára szolgálnak, általunk nem kötjük a személyazonosságodhoz, és nem használjuk követésre más cégek appjaiban vagy webhelyein.',
      learnMore: 'További információ:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store frissítések',
      body: 'Ha a Beállításokban a Frissítések keresése lehetőséget használod, az app kapcsolatba léphet az Apple-lel, hogy ellenőrizze, van-e újabb verzió az App Store-ban.',
    },
    launchAtLogin: {
      title: 'Indítás bejelentkezéskor (Mac)',
      body: 'Ha Macen bekapcsolod az Indítás bejelentkezéskor beállítást, az app macOS rendszer API-kkal regisztrálja magát bejelentkezési elemként. Ezt a preferenciát te irányítod, és bármikor kikapcsolhatod.',
    },
    notifications: {
      title: 'Értesítések és Live Activities (iPhone)',
      body: 'iPhone-on opcionális helyi értesítések, motivációs emlékeztetők és Live Activities segítenek látni, mikor ér véget egy munkamenet, vagy finoman visszatérni a fókuszba. Az engedélyt csak akkor kérjük, amikor bekapcsolod ezeket a funkciókat. Az értesítések tartalma az eszközön marad.',
    },
    whatWeDoNotDo: {
      title: 'Amit nem teszünk',
      items: [
        'Nincsenek hirdetési hálózatok',
        'Nincs személyes adatok értékesítése',
        'Nincs hozzáférés a névjegyeidhez, fotóidhoz, pontos helyedhez, kamerádhoz vagy mikrofonodhoz analitikához',
      ],
    },
    children: {
      title: 'Gyermekek',
      body: `${PULSE_APP_NAME} tudatosan nem gyűjt gyermekektől személyes adatot a fent leírtakon túl, amire a szinkronizáláshoz szükséges fióknak van szüksége. Az analitikai jelek névtelenek, és nem tartalmaznak személyes tartalmat.`,
    },
    changes: {
      title: 'Változások',
      body: 'Ha ez a szabályzat változik, a frissített verzió ezen az URL-en jelenik meg.',
    },
    contact: {
      title: 'Kapcsolat',
      body: 'Kérdések ezzel a szabályzattal kapcsolatban:',
    },
  },
}
