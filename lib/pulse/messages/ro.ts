import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const roMessages: PulseMessages = {
  languageLabel: 'Limba paginii',
  video: {
    ariaLabel: `Prezentare produs ${PULSE_APP_NAME}`,
    playLabel: 'Redă prezentarea',
    unsupported: 'Browserul tău nu acceptă videoclipuri încorporate.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Temporizator de concentrare pentru iPhone și Mac`,
    metaDescription: `${PULSE_APP_NAME} este un temporizator Pomodoro liniștit pentru iPhone și Mac, cu Focus History, Daily Focus Goals, autentificare Apple și Google și sincronizare offline-first între dispozitivele tale.`,
    heroImageAlt: `Temporizator de concentrare și istoric săptămânal ${PULSE_APP_NAME}`,
    backToProjects: 'Înapoi la proiecte',
    availableOnAppStore: 'Disponibil în App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Temporizator de concentrare pentru iPhone și Mac',
    tagline: 'Un temporizator Pomodoro blând care te ajută să te concentrezi — pe iPhone și în bara de meniu a Mac-ului.',
    description: `Pornește o sesiune de concentrare, ia o pauză și păstrează istoricul la tine. Conectează-te cu Apple sau Google ca Daily Focus Goals, Focus History și preferințele sincronizate să rămână în contul tău pe iPhone și Mac — în timp ce temporizatorul funcționează offline.`,
    downloadCta: 'Descarcă din App Store',
    watchDemo: 'Vezi în acțiune',
    supportCta: 'Asistență',
    stats: {
      platformLabel: 'Platforme',
      platformValue: 'iPhone și Mac',
      languagesLabel: 'Limbi',
      languagesValue: '48 de limbi',
      dataLabel: 'Sincronizare',
      dataValue: 'Offline-first',
      builtWithLabel: 'Creat cu',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'O modalitate mai liniștită de a te concentra',
      title: 'Temporizatorul e acolo când ai nevoie — și dispare când nu.',
      description: `Pe Mac, deschide ${PULSE_APP_NAME} din bara de meniu, alege o sesiune și închide popover-ul. Pe iPhone, pornește Concentrarea de pe ecranul principal și continuă cu Live Activities pe dispozitivele compatibile. Temporizatorul merge în timp ce lucrezi.`,
      caption:
        'Temporizatoare de concentrare și pauză, Daily Focus Goals, Focus History, urmărirea seriilor, localizare în 48 de limbi și alerte opționale la final.',
    },
    rhythm: {
      eyebrow: 'Un ritm pe care îl controlezi tu',
      title: 'Concentrare, pauză, refacere, repetare.',
      description: `${PULSE_APP_NAME} sugerează ce urmează, dar nu pornește niciodată o sesiune pentru tine. Fiecare durată poate fi ajustată zilei tale.`,
    },
    featureShowcases: [
      {
        title: 'Concentrare',
        badge: '1–120 min',
        description:
          'Numărătoarea inversă merge discret în timp ce lucrezi. Pauză, resetare sau omitere — păstrezi controlul pe iPhone și Mac.',
        imageFile: 'focus-running.png',
        alt: `Sesiune de concentrare ${PULSE_APP_NAME} cu controale de pauză și numărătoare inversă`,
      },
      {
        title: 'Bară de meniu',
        badge: 'Mac',
        description:
          'Pe Mac, afișează sau ascunde timpul rămas în bara de meniu. Elementul de stare cu lățime fixă rămâne la loc fără a deplasa popover-ul, până la 120:00.',
        imageFile: 'menubar.png',
        alt: `Numărătoare inversă ${PULSE_APP_NAME} în bara de meniu macOS`,
      },
      {
        title: 'Personalizare',
        badge: 'Regulile tale',
        description:
          'Durate flexibile, Daily Focus Goals, sunete și animații la final, 48 de limbi de interfață și preferințe de aspect.',
        imageFile: 'settings.png',
        alt: `Setări ${PULSE_APP_NAME} pentru durate, alerte la final, limbă și obiective`,
      },
    ],
    history: {
      eyebrow: 'Progres fără presiune',
      title: 'Vezi cum se adună munca.',
      description:
        'Deschide Focus History pentru totaluri și serii. Când ești conectat, istoricul se poate sincroniza între iPhone și Mac ca progresul să te urmeze.',
      items: ['Timp total de concentrare', 'Sesiuni finalizate', 'Serie curentă', 'Cea mai bună serie', 'Daily Focus Goals'],
      imageAlt: `Istoric săptămânal de concentrare ${PULSE_APP_NAME} cu sesiuni, ore și serie`,
    },
    feedback: {
      eyebrow: 'Feedback blând, în felul tău',
      title: 'Fă finalul să fie satisfăcător.',
      description: `Alege dintre șase sunete liniștite la final și șase sărbători cu animale, sau dezactivează oricare. ${PULSE_APP_NAME} afișează mesajul potrivit când se termină o sesiune de Concentrare, Pauză scurtă sau Pauză lungă.`,
      items: [
        'Titlu și subtitlu la final, adaptate sesiunii',
        'Interfață în 48 de limbi, limba sistemului implicit',
        'Preferințe de limbă și aspect pe fiecare dispozitiv',
        'Memento-uri de motivație opționale pe iPhone',
      ],
      settingsImageAlt: `Setări ${PULSE_APP_NAME} pentru durate, limbă, sunete la final și obiective`,
      celebrationImageAlt: `Animație de sărbătoare cu iepure ${PULSE_APP_NAME} la finalul sesiunii`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Maimuță', 'Koala', 'Pisică', 'Vulpe', 'Panda', 'Iepure'],
    },
    native: {
      eyebrow: 'Nativ prin design',
      title: 'Creat să se simtă acasă pe dispozitivele Apple.',
      description: `SwiftUI, AppKit și convențiile sistemului mențin ${PULSE_APP_NAME} rapid și familiar — cu etichete VoiceOver și suport Reduce Motion peste tot.`,
      features: [
        {
          title: 'Bară de meniu Mac și ecran principal iPhone',
          description: 'Partener discret în bara de meniu pe Mac și experiență concentrată pe ecranul principal pe iPhone.',
        },
        {
          title: 'Rămâne precis',
          description:
            'Sesiunile rămân corecte după repaus, trezire și relansări; istoricul se înregistrează la termenul real.',
        },
        {
          title: 'Sincronizare offline-first',
          description:
            'Continuă să te concentrezi fără conexiune. Când revii online, modificările făcute conectat se sincronizează cu contul tău.',
        },
        {
          title: 'Vorbește limba ta',
          description:
            'Interfață completă în 48 de limbi, limba sistemului implicit și alegere manuală în Setări.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privat prin design',
      title: 'Concentrarea rămâne a ta.',
      description: `${PULSE_APP_NAME} folosește un cont ca istoricul să se sincronizeze între dispozitive. Stocăm doar ce necesită sincronizarea, nu vindem datele tale și ținem analitica separată de Focus History.`,
      items: [
        'Conectare cu Apple sau Google',
        'Concentrare offline-first pe fiecare dispozitiv',
        'Sincronizare în cloud pentru istoric și preferințe sincronizate',
        'Fără rețele publicitare',
        'Șterge contul oricând din Setări',
      ],
    },
    closing: {
      title: 'Fă loc muncii concentrate.',
      description: `Obține ${PULSE_APP_NAME} din App Store pentru iPhone și Mac, sau citește politica de confidențialitate și pagina de asistență dacă ai nevoie de ajutor.`,
      getSupport: 'Obține asistență',
      privacy: 'Confidențialitate',
    },
  },
  support: {
    metaTitle: `Asistență ${PULSE_APP_NAME}`,
    metaDescription: `Asistență, întrebări frecvente și ajutor pentru cont ${PULSE_APP_NAME} pe iPhone și Mac — Pomodoro Pro, achiziții, Focus Protection, autentificare, sincronizare și ștergere cont.`,
    title: `Asistență ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} este un temporizator Pomodoro liniștit pentru iPhone și Mac. Conectează-te cu Apple sau Google pentru a sincroniza Focus History între dispozitive. Pe iPhone, Pomodoro Pro opțional deblochează Focus Protection, etichete personalizate și Tag Insights.`,
    gettingStarted: {
      title: 'Primii pași',
      items: [
        {
          question: 'Cum pornesc o sesiune de concentrare?',
          answer:
            'Pe Mac, apasă pictograma aplicației din bara de meniu, alege Concentrare, Pauză scurtă sau Pauză lungă, apoi apasă Start. Pe iPhone, deschide aplicația, alege o sesiune pe ecranul principal și apasă Start. Poți părăsi aplicația cât timp rulează temporizatorul.',
        },
        {
          question: 'Cum schimb duratele de concentrare și pauză?',
          answer:
            'Deschide Setări și ajustează duratele pentru Concentrare, Pauză scurtă și Pauză lungă. Poți alege și un ritm presetat, apoi regla minutele.',
        },
        {
          question: 'Cum configurez Daily Focus Goals?',
          answer:
            'În Setări, stabilește câte sesiuni de Concentrare vrei în fiecare zi. Progresul apare pe ecranul principal și în Focus History.',
        },
        {
          question: 'Cum văd Focus History?',
          answer:
            'Deschide Focus History din aplicație (pe Mac, din popover sau meniul de stare). Vei vedea totaluri, serii și progres săptămânal.',
        },
        {
          question: 'Cum schimb limba și aspectul?',
          answer:
            'În Setări, alege Limba (Sistem sau o limbă acceptată) și Aspect (Sistem, Deschis sau Întunecat). Aceste preferințe rămân pe fiecare dispozitiv și nu se sincronizează.',
        },
      ],
    },
    accounts: {
      title: 'Conturi',
      items: [
        {
          question: 'De ce este necesară autentificarea?',
          answer:
            'Un cont permite ca Focus History, Daily Focus Goals și preferințele sincronizate să rămână cu tine pe iPhone și Mac. Instalările noi cer autentificarea înainte de a folosi temporizatorul. Dispozitivele care actualizează de la versiuni vechi pot păstra istoricul local utilizabil până te conectezi. Achizițiile Pomodoro Pro rămân tot pe contul autentificat.',
        },
        {
          question: 'Cum mă conectez cu Apple sau Google?',
          answer:
            'Pe ecranul de autentificare, alege Continuă cu Apple sau Continuă cu Google și finalizează fluxul furnizorului. Apple poate oferi Hide My Email.',
        },
        {
          question: 'Cum mă deconectez?',
          answer:
            'Deschide Setări → Cont → Deconectare. Dacă unele modificări nu s-au sincronizat încă, aplicația poate cere să sincronizezi mai întâi sau să te deconectezi oricum. Deconectarea nu șterge contul.',
        },
        {
          question: 'Cum mă reconectez?',
          answer:
            'Folosește aceeași metodă Apple sau Google pe ecranul de autentificare. Istoricul din cloud se restaurează pentru acel cont pe dispozitiv.',
        },
        {
          question: 'Ce se întâmplă dacă folosesc alt cont?',
          answer:
            'Fiecare cont are propriul istoric. Conectarea la alt cont nu unește istorii nelegate. Alege cu grijă înainte de a confirma preluarea istoricului pe un dispozitiv care are deja sesiuni locale.',
        },
        {
          question: 'Pot lega Apple și Google la același cont?',
          answer:
            'Da. În Setări → Cont poți lega cealaltă metodă de autentificare dacă nu este deja folosită de alt cont.',
        },
      ],
    },
    cloudSync: {
      title: 'Sincronizare în cloud',
      items: [
        {
          question: 'Ce se sincronizează între dispozitive?',
          answer:
            'Istoricul sesiunilor de concentrare și pauză (inclusiv eticheta aleasă), etichetele create, înregistrările Daily Focus Goal, datele de cont legate de serie și preferințele sincronizate precum duratele sesiunilor, obiectivul zilnic, sunetul, animațiile, sunetul la final și animalul de sărbătoare.',
        },
        {
          question: 'Ce se întâmplă fără internet?',
          answer:
            'După autentificare, poți continua să folosești temporizatorul offline. Sesiunile și modificările noi rămân pe dispozitiv până există conexiune.',
        },
        {
          question: 'Ce se întâmplă când revin online?',
          answer:
            'Aplicația sincronizează modificările în așteptare cu contul tău. Sincronizarea este offline-first și devine consistentă în timp — nu este colaborare în timp real instantanee.',
        },
        {
          question: 'Cum folosesc același cont pe iPhone și Mac?',
          answer:
            'Instalează aplicația pe ambele dispozitive și conectează-te cu același cont Apple sau Google. După restaurare, Focus History poate apărea pe ambele.',
        },
        {
          question: 'Ce fac dacă lipsește istoricul?',
          answer:
            'Confirmă că ești conectat la același cont, așteaptă finalizarea restaurării/sincronizării și verifică din nou Focus History. Dacă te-ai conectat la alt cont, vei vedea istoricul acelui cont.',
        },
      ],
    },
    migration: {
      title: 'Actualizare de la o versiune anterioară',
      items: [
        {
          question: 'Ce se întâmplă cu istoricul local existent?',
          answer:
            'Istoricul local existent nu este șters în tăcere. După autentificare, aplicația întreabă înainte de a adăuga acel istoric contului tău.',
        },
        {
          question: 'Cum îmi preiau istoricul?',
          answer:
            'Conectează-te la contul care ar trebui să dețină istoricul, revizuiește ecranul Adaugă istoricul tău, apoi alege Adaugă la acest cont. Folosește alt cont dacă cel afișat este greșit. Sesiunile nu pot fi mutate ulterior pe alt cont.',
        },
        {
          question: 'Ce fac dacă setările dispozitivului și ale contului diferă?',
          answer:
            'Aplicația poate întreba dacă păstrezi setările acestui dispozitiv sau pe cele ale contului. Limba, aspectul, notificările și memento-urile de motivație rămân locale pe dispozitiv.',
        },
      ],
    },
    notifications: {
      title: 'Notificări',
      items: [
        {
          question: 'Cum activez notificările pe iPhone?',
          answer:
            'Deschide Setări → Notificări și alege Activează, sau deschide Setările sistemului dacă permisiunea a fost refuzată anterior.',
        },
        {
          question: 'Cum funcționează memento-urile de motivație?',
          answer:
            'Pe iPhone, deschide Setări → Memento-uri de motivație și activează-le după ce notificările sunt permise. Le poți întrerupe sau seta ore liniștite. Sunt opționale și dezactivate implicit.',
        },
        {
          question: 'Ce fac dacă notificările sunt dezactivate?',
          answer:
            'Alertele de sfârșit de sesiune și memento-urile de motivație necesită permisiune de notificare. Folosește Setări → Notificări → Deschide setările pentru a le activa în Setările iOS.',
        },
        {
          question: 'Cum funcționează Live Activities?',
          answer:
            'Pe iPhone-urile compatibile, o Live Activity opțională poate afișa o sesiune activă pe ecranul de blocare și Dynamic Island. Permisiunea se solicită când activezi funcțiile asociate.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Ce este Pomodoro Pro?',
          answer:
            'Pomodoro Pro este o achiziție opțională în aplicație pe iPhone. Deblochează Focus Protection, etichete personalizate (nume și culori proprii) și Tag Insights (timp de concentrare pe săptămână și lună, pe etichetă). Temporizatorul, etichetele integrate, Focus History și sincronizarea rămân disponibile fără Pro.',
        },
        {
          question: 'Ce opțiuni de achiziție există?',
          answer:
            'Pomodoro Pro este oferit ca abonament Lunar, abonament Anual (Annual) sau achiziție unică Lifetime. Abonamentele se reînnoiesc automat dacă nu anulezi cu cel puțin 24 de ore înainte de sfârșitul perioadei curente. Lifetime se facturează o singur dată și nu este abonament.',
        },
        {
          question: 'Unde cumpăr sau văd Pomodoro Pro?',
          answer:
            'Pe iPhone, deschide Setări → Pomodoro Pro sau atinge cipul de protecție pe ecranul principal. Trebuie să fii conectat. Pro rămâne pe contul tău pe fiecare dispozitiv pe care te autentifici.',
        },
        {
          question: 'Cum restaurez achizițiile?',
          answer:
            'Folosește Restaurează cumpărăturile care lipsesc pe paywall sau în Setări → Pomodoro Pro. Achizițiile făcute cu același cont Apple trec la contul cu care ești conectat. Dacă nu se găsește nimic, confirmă contul Apple cu care ai cumpărat Pro și încearcă din nou online.',
        },
      ],
    },
    purchases: {
      title: 'Abonamente și achiziții',
      items: [
        {
          question: 'Cum gestionez sau anulez un abonament?',
          answer:
            'Abonamentele sunt facturate de Apple. Pe iPhone, deschide Setări → Pomodoro Pro → Gestionați abonamentul, sau mergi la Setări → [numele tău] → Abonamente și selectează aplicația. Anulează cu cel puțin 24 de ore înainte de reînnoire pentru a evita următoarea taxare. Ștergerea aplicației sau a contului Pomodoro nu anulează un abonament.',
        },
        {
          question: 'Cum solicit rambursarea?',
          answer:
            'Rambursările sunt gestionate de Apple. Vizitează reportaproblem.apple.com, autentifică-te cu contul Apple folosit la achiziție, găsește tranzacția și trimite cererea de rambursare. Nu putem procesa noi rambursări App Store.',
        },
        {
          question: 'Ce fac dacă achiziția eșuează sau Pro nu se deblochează?',
          answer:
            'Rămâi conectat, verifică rețeaua și încearcă din nou. Dacă plata este în așteptare (de ex. Cere de cumpărat), Pro se deblochează după aprobare. Dacă ai plătit deja, folosește Restaurează cumpărăturile care lipsesc. Pentru probleme de plată la un abonament activ, actualizează metoda de plată în setările App Store.',
        },
        {
          question: 'Ce se întâmplă dacă cumpăr Lifetime cu un abonament activ?',
          answer:
            'Lifetime deblochează Pro permanent, dar un abonament existent nu se anulează automat. Dezactivează reînnoirea automată în setările de abonament App Store ca să nu fii taxat din nou.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Ce este Focus Protection?',
          answer:
            'Focus Protection este o funcție Pomodoro Pro pe iPhone. Folosește API-urile Screen Time ale Apple pentru a bloca aplicațiile, categoriile sau site-urile alese cât timp rulează o sesiune de Concentrare. Pauzele nu sunt niciodată blocate. La sfârșitul sesiunii, aplicațiile blocate se deblochează automat.',
        },
        {
          question: 'Cum o configurez?',
          answer:
            'Cu Pro activ, atinge cipul Focus Protection pe ecranul principal (sau deschide-l din Setări). Permite accesul Screen Time când ți se cere, alege ce să blochezi, apoi activează Focus Protection. Pornește o sesiune de Concentrare pentru a aplica scuturile.',
        },
        {
          question: 'Cum o dezactivez sau deblochez aplicațiile?',
          answer:
            'Deschide foaia Focus Protection și alege Dezactivează acum, sau dezactivează funcția. După sesiune poți folosi și Deblochează aplicațiile pe ecranul de scut. Pentru a elimina complet accesul Screen Time al aplicației, mergi la Setări iOS → Screen Time → Aplicații cu acces Screen Time.',
        },
        {
          question: 'Ce fac dacă Focus Protection nu funcționează?',
          answer:
            'Confirmă că Pro este activ, accesul Screen Time este permis și ai selectat aplicații sau categorii de blocat. Focus Protection se aplică doar în sesiunile de Concentrare, nu în pauze. Dacă accesul a fost revocat în Setările sistemului, deschide aplicația și permite din nou accesul. Repornirea iPhone-ului poate ajuta după o schimbare de permisiune.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Cont și confidențialitate',
      items: [
        {
          question: 'Cum îmi șterg contul?',
          answer:
            'Conectează-te, deschide Setări → Cont → Șterge contul, apoi confirmă. Contul și istoricul de concentrare sincronizat sunt șterse permanent din baza noastră live. Nu poate fi anulat. Ștergerea necesită conexiune la rețea. Ștergerea contului nu anulează un abonament App Store — gestionează-l în setările App Store.',
        },
        {
          question: 'Ce afectează ștergerea contului?',
          answer:
            'Datele cloud sincronizate pentru acel cont sunt eliminate, autorizația Sign in with Apple este revocată dacă este stocată, înregistrarea de achiziție legată de cont este solicitată pentru ștergere la furnizorul nostru de achiziții, iar datele contului sunt eliminate de pe dispozitivul unde ștergi. Copiile locale pe alte dispozitive nu mai pot sincroniza; elimină aplicația sau șterge-le acolo dacă e nevoie. Backup-urile furnizorului pot păstra date șterse pentru o fereastră limitată de recuperare. Apple păstrează propriile înregistrări de tranzacții App Store.',
        },
        {
          question: 'Cum export datele mele?',
          answer:
            'Setări → Cont → Exportă datele mele salvează un fișier JSON cu sesiuni, obiective zilnice, setări sincronizate și profilul contului. Datele locale nepreluate pot fi exportate și de pe ecranul de autentificare.',
        },
        {
          question: 'Unde este politica de confidențialitate?',
          answer:
            'Deschide politica de confidențialitate de pe site-ul produsului sau folosește linkul de confidențialitate de pe paginile produsului acestui site.',
        },
      ],
    },
    requirements: {
      title: 'Cerințe',
      body: 'iPhone: iOS 17 sau ulterior. Mac: macOS 14.6 sau ulterior. Achizițiile Pomodoro Pro și Focus Protection sunt disponibile pe iPhone.',
    },
    contact: {
      title: 'Contact',
      body: 'Pentru ajutor, feedback sau raportări de erori:',
    },
    privacyPolicyLink: 'Politică de confidențialitate',
  },
  privacy: {
    metaTitle: `Politica de confidențialitate ${PULSE_APP_NAME}`,
    metaDescription: `Politica de confidențialitate pentru ${PULSE_APP_NAME}: autentificare Apple și Google, sincronizare cloud, achiziții Pomodoro Pro prin RevenueCat, Focus Protection, analitică și ștergere cont pe Mac și iPhone.`,
    title: 'Politică de confidențialitate',
    subtitle: `${PULSE_APP_NAME} — Temporizator Pomodoro pentru Mac și iPhone`,
    lastUpdated: 'Ultima actualizare: 26 octombrie 2026',
    summary: {
      title: 'Rezumat',
      body: `Când te conectezi cu Apple sau Google, contul tău păstrează sincronizate între Mac și iPhone istoricul de concentrare, obiectivele zilnice și setările temporizatorului. Stocăm doar ce are nevoie aplicația: adresa de e-mail, un identificator de cont și datele de concentrare pe care le creezi. Nu le vindem, nu le folosim pentru publicitate și nu le partajăm cu furnizorul nostru de analitică. Dacă cumperi Pomodoro Pro pe iPhone, furnizorul nostru de achiziții RevenueCat păstrează istoricul achizițiilor legat de cont, ca Pro să funcționeze pe fiecare dispozitiv pe care te autentifici. Alegerile de aplicații pentru Focus Protection nu părăsesc niciodată iPhone-ul. Poți exporta datele sau șterge contul oricând din Setări. Separat, aplicația poate trimite analitică de utilizare anonimă, care respectă confidențialitatea, pentru a îmbunătăți fluxurile de concentrare.`,
    },
    localData: {
      title: 'Date stocate pe dispozitivul tău',
      body: 'Setările temporizatorului, preferințele de sesiune și istoricul de concentrare sunt salvate local pe Mac sau iPhone folosind stocarea standard a sistemului, astfel temporizatorul funcționează offline. Fiecare cont conectat pe un dispozitiv are propriul depozit local. Sesiunea de autentificare este păstrată în Keychain-ul sistemului. Limba, aspectul, Lansează la conectare, notificările și memento-urile de motivație rămân pe fiecare dispozitiv și nu se sincronizează. Conținutul istoricului de concentrare nu este încărcat la furnizorul nostru de analitică.',
      migrationSafety:
        'Când te conectezi prima dată pe un dispozitiv care are deja istoric de concentrare, aplicația întreabă înainte de a muta acel istoric în contul tău. Până când mutarea este confirmată pe serverele noastre, plus 90 de zile, aplicația păstrează copia locală anterioară și un fișier backup local pe dispozitiv ca plasă de siguranță, apoi le elimină automat.',
    },
    accountAndSync: {
      title: 'Contul tău și datele sincronizate',
      intro: 'Dacă te conectezi, procesăm:',
      items: [
        'Date de contact: adresa de e-mail partajată de Sign in with Apple (poate fi o adresă de retransmitere privată prin Hide My Email) sau Google. Nu solicităm numele tău.',
        'Identificatori: un ID de cont creat la autentificare și un ID aleator pentru fiecare instalare, folosite doar pentru sincronizare și pentru a identifica ce dispozitiv a făcut o modificare.',
        'Date de concentrare: sesiuni de concentrare și pauză finalizate și șterse (ore, durate, zi locală și fus orar, și eticheta aleasă), etichetele create (nume și culoare), obiective zilnice, cea mai bună serie și setările sincronizate (durate sesiune, obiectiv zilnic, sunet, animații, sunet la final, animal de sărbătoare).',
      ],
      closing:
        'Aceste date sunt folosite doar pentru sincronizare, istoric și funcții de cont. Sunt legate de contul tău, nu sunt folosite pentru urmărire și nu sunt partajate cu terți în afara procesatorilor de mai jos.',
    },
    processors: {
      title: 'Procesatori și locația stocării',
      bodyBeforeSupabase: 'Datele de cont și sincronizare sunt stocate la',
      bodyAfterSupabase:
        ' (bază de date și autentificare) în Uniunea Europeană. Autentificarea este gestionată de',
      orWord: 'sau',
      bodyAfterProviders:
        ', în funcție de opțiunea aleasă. Achizițiile Pomodoro Pro sunt gestionate cu',
      bodyAfterRevenueCat:
        ' (vezi Achiziții mai jos). Datele sunt criptate în tranzit, iar accesul este restricționat astfel încât fiecare cont să citească doar propriile date.',
    },
    purchases: {
      title: 'Achiziții (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro se vinde prin App Store; Apple gestionează plata și noi nu vedem niciodată detaliile tale de plată. Pentru a debloca Pro pe fiecare dispozitiv pe care te autentifici, aplicația partajează ID-ul contului cu',
      bodyAfterRevenueCat:
        ', care păstrează istoricul achizițiilor (produse cumpărate, date de achiziție și reînnoire, stare abonament) legat de acel ID. Aceste date sunt folosite doar pentru a acorda și restaura accesul Pro, nu pentru urmărire și nu sunt partajate cu furnizorul nostru de analitică. Pro necesită cont conectat; nimic nu este trimis la RevenueCat înainte de autentificare.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection folosește framework-ul Screen Time al Apple (Family Controls) pentru a bloca aplicațiile, categoriile și site-urile alese cât timp rulează o sesiune de concentrare. Apple oferă aplicației doar token-uri opace pentru alegerile tale: nu putem vedea ce aplicații sau site-uri ai ales, cum le folosești sau alte date Screen Time. Alegerile rămân pe acel iPhone, nu sunt încărcate sau sincronizate și nu sunt trimise furnizorului nostru de analitică. Poți dezactiva Focus Protection în aplicație oricând sau elimina accesul aplicației în Setări → Screen Time → Aplicații cu acces Screen Time.',
    },
    retention: {
      title: 'Păstrare, backup-uri și ștergere',
      items: [
        'Datele sincronizate sunt păstrate cât timp există contul tău.',
        'Ștergerea contului (Setări → Cont → Șterge contul) șterge permanent contul și toate datele sincronizate din baza noastră live, revocă autorizația Sign in with Apple a aplicației dacă este stocată, cere RevenueCat să șteargă înregistrarea de achiziție legată de cont și elimină datele contului de pe dispozitivul unde ștergi. Copiile locale pe celelalte dispozitive nu mai pot sincroniza și rămân acolo până ștergi aplicația pe acele dispozitive sau le elimini de pe ecranul de autentificare când se oferă.',
        'Furnizorul nostru de bază de date păstrează backup-uri zilnice 7 zile. Datele șterse pot rămâne în aceste backup-uri până expiră; backup-urile sunt folosite doar pentru recuperare după dezastru. Putem păstra și un backup săptămânal criptat până la 90 de zile în același scop.',
        'Ștergerea contului nu anulează un abonament App Store; gestionează-l sau anulează-l în setările contului Apple. Apple păstrează propriul registru al tranzacțiilor App Store.',
        'Deconectarea nu șterge nimic. Modificările nesincronizate rămân pe dispozitiv până același cont se conectează din nou.',
        'Înregistrările de analitică sunt gestionate de TelemetryDeck conform practicilor sale de păstrare și nu sunt folosite pentru a restaura Focus History.',
      ],
    },
    export: {
      title: 'Export',
      body: 'Setări → Cont → Exportă datele mele salvează un fișier JSON cu sesiunile, obiectivele zilnice, setările sincronizate și profilul contului. Datele care nu au fost mutate într-un cont pot fi exportate și de pe ecranul de autentificare.',
    },
    analytics: {
      title: 'Analitică',
      introBeforeLink: 'Folosim',
      introAfterLink:
        ', un serviciu de analitică axat pe confidențialitate, pentru a înțelege cum este folosită aplicația (de exemplu: sesiuni de concentrare sau pauză pornite sau finalizate, modificări ale obiectivului zilnic, modificări de setări, rezultate ale permisiunii de notificare, evenimente memento de motivație și dacă onboarding-ul s-a finalizat). Semnalele nu includ text liber, nume, e-mailuri sau conținutul Focus History.',
      identifier:
        'TelemetryDeck identifică instalările cu un identificator hash legat de dispozitiv și poate atașa metadate nepersonale ale dispozitivului (cum ar fi modelul, versiunea OS și locale). Aceste date sunt folosite doar pentru analitică, nu sunt legate de identitatea ta de către noi și nu sunt folosite pentru urmărire între aplicații sau site-uri ale altor companii.',
      learnMore: 'Află mai multe:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Actualizări App Store',
      body: 'Dacă folosești „Verifică actualizări” în Setări, aplicația poate contacta Apple pentru a vedea dacă există o versiune mai nouă în App Store.',
    },
    launchAtLogin: {
      title: 'Lansează la conectare (Mac)',
      body: 'Dacă activezi Lansează la conectare în Setări pe Mac, aplicația folosește API-urile sistem macOS pentru a se înregistra ca element de conectare. Preferința este sub controlul tău și poate fi dezactivată oricând.',
    },
    notifications: {
      title: 'Notificări și Live Activities (iPhone)',
      body: 'Pe iPhone, notificările locale opționale, memento-urile de motivație și Live Activities te ajută să vezi când se termină o sesiune sau să revii ușor la concentrare. Permisiunea se solicită doar când alegi să activezi aceste funcții. Conținutul notificărilor rămâne pe dispozitiv.',
    },
    whatWeDoNotDo: {
      title: 'Ce nu facem',
      items: [
        'Fără rețele publicitare',
        'Fără vânzare de informații personale',
        'Fără acces la contacte, fotografii, locație precisă, cameră sau microfon pentru analitică',
      ],
    },
    children: {
      title: 'Copii',
      body: `${PULSE_APP_NAME} nu colectează în mod conștient informații personale de la copii dincolo de ce necesită un cont pentru sincronizare, așa cum este descris mai sus. Semnalele de analitică sunt anonime și nu includ conținut personal.`,
    },
    changes: {
      title: 'Modificări',
      body: 'Dacă această politică se schimbă, versiunea actualizată va fi publicată la acest URL.',
    },
    contact: {
      title: 'Contact',
      body: 'Întrebări despre această politică:',
    },
  },
}