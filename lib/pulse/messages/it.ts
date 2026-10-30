import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const itMessages: PulseMessages = {
  languageLabel: 'Lingua della pagina',
  video: {
    ariaLabel: `Presentazione del prodotto ${PULSE_APP_NAME}`,
    playLabel: 'Riproduci la presentazione',
    unsupported: 'Il tuo browser non supporta i video incorporati.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Timer per la concentrazione per iPhone e Mac`,
    metaDescription: `${PULSE_APP_NAME} è un tranquillo timer Pomodoro per iPhone e Mac con Focus History, Daily Focus Goals, accesso con Apple e Google e sincronizzazione offline-first tra i tuoi dispositivi.`,
    heroImageAlt: `Timer per la concentrazione e panoramica della cronologia settimanale di ${PULSE_APP_NAME}`,
    backToProjects: 'Torna ai progetti',
    availableOnAppStore: 'Disponibile sull’App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Timer per la concentrazione per iPhone e Mac',
    tagline: 'Un delicato timer Pomodoro che ti aiuta a concentrarti, su iPhone e nella barra dei menu del Mac.',
    description: `Avvia una sessione di Concentrazione, fai una pausa e porta con te la cronologia. Accedi con Apple o Google affinché gli Daily Focus Goals, la Focus History e le preferenze sincronizzate restino associate al tuo account su iPhone e Mac, mentre il timer continua a funzionare offline.`,
    downloadCta: 'Scarica dall’App Store',
    watchDemo: 'Guardalo in azione',
    supportCta: 'Supporto',
    stats: {
      platformLabel: 'Piattaforme',
      platformValue: 'iPhone e Mac',
      languagesLabel: 'Lingue',
      languagesValue: '48 lingue',
      dataLabel: 'Sincronizzazione',
      dataValue: 'Offline-first',
      builtWithLabel: 'Realizzato con',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Un modo più tranquillo per concentrarsi',
      title: 'Il timer c’è quando ti serve e scompare quando non ti serve.',
      description: `Sul Mac, apri ${PULSE_APP_NAME} dalla barra dei menu, scegli una sessione e chiudi il popover. Su iPhone, avvia Concentrazione dalla schermata Home e continua con Live Activities sui dispositivi supportati. Il timer continua a funzionare mentre lavori.`,
      caption:
        'Timer per concentrazione e pause, Daily Focus Goals, Focus History, monitoraggio delle serie, localizzazione in 48 lingue e avvisi di completamento facoltativi.',
    },
    rhythm: {
      eyebrow: 'Un ritmo che controlli tu',
      title: 'Concentrati, fai una pausa, recupera, ripeti.',
      description: `${PULSE_APP_NAME} suggerisce cosa fare dopo, ma non avvia mai una sessione al posto tuo. Puoi regolare ogni durata in base alla tua giornata.`,
    },
    featureShowcases: [
      {
        title: 'Concentrazione',
        badge: '1–120 min',
        description:
          'Il conto alla rovescia procede silenziosamente mentre lavori. Metti in pausa, reimposta o salta: mantieni il controllo su iPhone e Mac.',
        imageFile: 'focus-running.png',
        alt: `Sessione di concentrazione di ${PULSE_APP_NAME} in corso con controlli di pausa e conto alla rovescia`,
      },
      {
        title: 'Barra dei menu',
        badge: 'Mac',
        description:
          'Sul Mac, mostra o nascondi il tempo rimanente nella barra dei menu. L’elemento di stato a larghezza fissa resta al suo posto senza spostare il popover, fino a 120:00.',
        imageFile: 'menubar.png',
        alt: `Conto alla rovescia di ${PULSE_APP_NAME} visualizzato nella barra dei menu di macOS`,
      },
      {
        title: 'Personalizzazione',
        badge: 'Le tue regole',
        description:
          'Durate flessibili, Daily Focus Goals, suoni e animazioni di completamento, 48 lingue dell’interfaccia e preferenze per l’aspetto.',
        imageFile: 'settings.png',
        alt: `Impostazioni di ${PULSE_APP_NAME} per durate, avvisi di completamento, lingua e obiettivi`,
      },
    ],
    history: {
      eyebrow: 'Progressi senza pressioni',
      title: 'Guarda il lavoro che si accumula.',
      description:
        'Apri la Focus History per consultare totali e serie. Quando hai effettuato l’accesso, la cronologia può sincronizzarsi tra iPhone e Mac, così i progressi ti seguono.',
      items: [
        'Tempo totale di concentrazione',
        'Numero di sessioni completate',
        'Serie attuale',
        'Serie migliore',
        'Daily Focus Goals',
      ],
      imageAlt: `Cronologia settimanale della concentrazione di ${PULSE_APP_NAME} con numero di sessioni, ore di concentrazione e serie`,
    },
    feedback: {
      eyebrow: 'Un feedback delicato, come vuoi tu',
      title: 'Rendi gratificante ogni traguardo.',
      description: `Scegli tra sei rilassanti suoni di completamento e sei festeggiamenti con animali, oppure disattiva gli uni o gli altri. ${PULSE_APP_NAME} mostra il messaggio giusto al termine di una sessione di Concentrazione, Pausa breve o Pausa lunga.`,
      items: [
        'Titolo e sottotitolo di completamento adatti alla sessione',
        'Interfaccia in 48 lingue con la lingua di sistema come predefinita',
        'Preferenze di lingua e aspetto su ogni dispositivo',
        'Promemoria motivazionali facoltativi su iPhone',
      ],
      settingsImageAlt: `Impostazioni di ${PULSE_APP_NAME} per durate, lingua, suoni di completamento e obiettivi`,
      celebrationImageAlt: `Animazione di festeggiamento con coniglio di ${PULSE_APP_NAME} al completamento di una sessione`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Scimmia', 'Koala', 'Gatto', 'Volpe', 'Panda', 'Coniglio'],
    },
    native: {
      eyebrow: 'Nativa per scelta',
      title: 'Progettata per sentirsi a casa sui dispositivi Apple.',
      description: `SwiftUI, AppKit e le convenzioni di sistema mantengono ${PULSE_APP_NAME} veloce e familiare, con etichette VoiceOver e supporto per Riduci movimento in tutta l’app.`,
      features: [
        {
          title: 'Barra dei menu del Mac e Home di iPhone',
          description: 'Una presenza discreta nella barra dei menu del Mac e un’esperienza Home dedicata alla concentrazione su iPhone.',
        },
        {
          title: 'Sempre precisa',
          description:
            'Le sessioni restano precise dopo stop, riattivazione e riavvio, e la cronologia viene registrata alla scadenza effettiva.',
        },
        {
          title: 'Sincronizzazione offline-first',
          description:
            'Continua a concentrarti senza connessione. Quando torni online, le modifiche effettuate dopo l’accesso si sincronizzano con il tuo account.',
        },
        {
          title: 'Parla la tua lingua',
          description:
            'Interfaccia completa in 48 lingue, con la lingua di sistema come predefinita e selezione manuale nelle Impostazioni.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privata per scelta',
      title: 'La tua concentrazione resta tua.',
      description: `${PULSE_APP_NAME} usa un account per sincronizzare la cronologia tra i tuoi dispositivi. Conserviamo solo ciò che serve alla sincronizzazione, non vendiamo mai i tuoi dati e teniamo i dati analitici separati dalla Focus History.`,
      items: [
        'Accesso con Apple o Google',
        'Concentrazione offline-first su ogni dispositivo',
        'Sincronizzazione nel cloud per cronologia e preferenze sincronizzate',
        'Nessuna rete pubblicitaria',
        'Elimina il tuo account in qualsiasi momento dalle Impostazioni',
      ],
    },
    closing: {
      title: 'Fai spazio al lavoro concentrato.',
      description: `Scarica ${PULSE_APP_NAME} dall’App Store per iPhone e Mac oppure consulta l’informativa sulla privacy e la pagina di supporto se ti serve aiuto.`,
      getSupport: 'Ottieni supporto',
      privacy: 'Privacy',
    },
  },
  support: {
    metaTitle: `Supporto per ${PULSE_APP_NAME}`,
    metaDescription: `Supporto, domande frequenti e assistenza per l’account di ${PULSE_APP_NAME} su iPhone e Mac, inclusi Pomodoro Pro, acquisti, Focus Protection, accesso, sincronizzazione ed eliminazione dell’account.`,
    title: `Supporto per ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} è un tranquillo timer Pomodoro per iPhone e Mac. Accedi con Apple o Google per sincronizzare la Focus History tra i tuoi dispositivi. Su iPhone, Pomodoro Pro facoltativo sblocca Focus Protection, tag personalizzati e Tag Insights.`,
    gettingStarted: {
      title: 'Per iniziare',
      items: [
        {
          question: 'Come avvio una sessione di Concentrazione?',
          answer:
            'Sul Mac, fai clic sull’icona dell’app nella barra dei menu, scegli Concentrazione, Pausa breve o Pausa lunga, quindi premi Avvia. Su iPhone, apri l’app, scegli una sessione nella schermata Home e premi Avvia. Puoi uscire dall’app mentre il timer è in esecuzione.',
        },
        {
          question: 'Come modifico la durata di Concentrazione e delle pause?',
          answer:
            'Apri Impostazioni e regola la durata di Concentrazione, Pausa breve e Pausa lunga. Puoi anche scegliere un ritmo predefinito e poi perfezionare i minuti.',
        },
        {
          question: 'Come configuro gli Daily Focus Goals?',
          answer:
            'In Impostazioni, indica quante sessioni di Concentrazione vuoi completare ogni giorno. I progressi sono visibili nella schermata Home e nella Focus History.',
        },
        {
          question: 'Come visualizzo la Focus History?',
          answer:
            'Apri la Focus History dall’app (sul Mac, dal popover o dal menu di stato). Vedrai totali, serie e progressi settimanali.',
        },
        {
          question: 'Come cambio lingua e aspetto?',
          answer:
            'In Impostazioni, scegli Lingua (Sistema o una lingua supportata) e Aspetto (Sistema, Chiaro o Scuro). Queste preferenze restano su ciascun dispositivo e non vengono sincronizzate.',
        },
      ],
    },
    accounts: {
      title: 'Account',
      items: [
        {
          question: 'Perché è necessario accedere?',
          answer:
            'Un account consente alla Focus History, agli Daily Focus Goals e alle preferenze sincronizzate di seguirti su iPhone e Mac. Le nuove installazioni richiedono l’accesso prima di usare il timer. I dispositivi aggiornati da versioni precedenti possono continuare a usare la cronologia locale finché non accedi. Anche gli acquisti di Pomodoro Pro restano associati all’account con cui hai effettuato l’accesso.',
        },
        {
          question: 'Come accedo con Apple o Google?',
          answer:
            'Nella schermata di accesso, scegli Continua con Apple o Continua con Google e completa la procedura del provider. Apple potrebbe offrire Nascondi la mia email.',
        },
        {
          question: 'Come esco dall’account?',
          answer:
            'Apri Impostazioni → Account → Esci. Se alcune modifiche non sono ancora sincronizzate, l’app potrebbe chiederti di sincronizzarle prima o di uscire comunque. Uscire non elimina l’account.',
        },
        {
          question: 'Come accedo di nuovo?',
          answer:
            'Usa lo stesso metodo Apple o Google nella schermata di accesso. La cronologia nel cloud di quell’account viene ripristinata sul dispositivo.',
        },
        {
          question: 'Cosa succede se uso un account diverso?',
          answer:
            'Ogni account ha la propria cronologia. L’accesso a un altro account non unisce cronologie non correlate. Scegli con attenzione prima di confermare l’assegnazione della cronologia su un dispositivo che contiene già sessioni locali.',
        },
        {
          question: 'Posso collegare Apple e Google allo stesso account?',
          answer:
            'Sì. In Impostazioni → Account puoi collegare l’altro metodo di accesso, purché non sia già usato da un account diverso.',
        },
      ],
    },
    cloudSync: {
      title: 'Sincronizzazione nel cloud',
      items: [
        {
          question: 'Cosa viene sincronizzato tra i dispositivi?',
          answer:
            'La cronologia delle sessioni di concentrazione e pausa (incluso il tag scelto), i tag che crei, i dati degli Daily Focus Goals, i dati dell’account relativi alle serie e le preferenze sincronizzate, come durata delle sessioni, obiettivo giornaliero, suono, animazioni, suono di completamento e animale del festeggiamento.',
        },
        {
          question: 'Cosa succede senza connessione Internet?',
          answer:
            'Dopo aver effettuato l’accesso, puoi continuare a usare il timer offline. Le nuove sessioni e le modifiche restano sul dispositivo finché non è disponibile una connessione.',
        },
        {
          question: 'Cosa succede quando torno online?',
          answer:
            'L’app sincronizza con il tuo account le modifiche in sospeso. La sincronizzazione è offline-first e a consistenza finale: non è una collaborazione istantanea in tempo reale.',
        },
        {
          question: 'Come uso lo stesso account su iPhone e Mac?',
          answer:
            'Installa l’app su entrambi i dispositivi e accedi con lo stesso account Apple o Google. Al termine del ripristino, la Focus History può comparire su entrambi.',
        },
        {
          question: 'Cosa devo fare se manca la cronologia?',
          answer:
            'Verifica di aver effettuato l’accesso allo stesso account, attendi il completamento del ripristino o della sincronizzazione e controlla di nuovo la Focus History. Se hai usato un account diverso, vedrai la cronologia di quell’account.',
        },
      ],
    },
    migration: {
      title: 'Aggiornamento da una versione precedente',
      items: [
        {
          question: 'Cosa succede alla cronologia locale esistente?',
          answer:
            'La cronologia locale esistente non viene eliminata senza avviso. Dopo l’accesso, l’app chiede conferma prima di aggiungerla al tuo account.',
        },
        {
          question: 'Come assegno la cronologia al mio account?',
          answer:
            'Accedi all’account che deve possedere la cronologia, controlla la schermata Aggiungi la tua cronologia e scegli Aggiungi a questo account. Usa un altro account se quello mostrato è errato. In seguito le sessioni non potranno essere spostate su un altro account.',
        },
        {
          question: 'Cosa succede se le impostazioni del dispositivo e dell’account sono diverse?',
          answer:
            'L’app potrebbe chiederti se mantenere le impostazioni del dispositivo o usare quelle dell’account. Lingua, aspetto, notifiche e promemoria motivazionali restano locali al dispositivo.',
        },
      ],
    },
    notifications: {
      title: 'Notifiche',
      items: [
        {
          question: 'Come abilito le notifiche su iPhone?',
          answer:
            'Apri Impostazioni → Notifiche e scegli Abilita, oppure apri le Impostazioni di sistema se in precedenza hai negato l’autorizzazione.',
        },
        {
          question: 'Come funzionano i promemoria motivazionali?',
          answer:
            'Su iPhone, apri Impostazioni → Promemoria motivazionali e attivali dopo aver consentito le notifiche. Puoi metterli in pausa o impostare orari silenziosi. Sono facoltativi e disattivati per impostazione predefinita.',
        },
        {
          question: 'Cosa succede se le notifiche sono disabilitate?',
          answer:
            'Gli avvisi di fine sessione e i promemoria motivazionali richiedono l’autorizzazione per le notifiche. Usa Impostazioni → Notifiche → Apri Impostazioni per attivarli nelle Impostazioni di iOS.',
        },
        {
          question: 'Come funzionano le Live Activities?',
          answer:
            'Sugli iPhone supportati, una Live Activity facoltativa può mostrare una sessione attiva sulla schermata di blocco e nella Dynamic Island. L’autorizzazione viene richiesta quando abiliti le funzioni correlate.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Cos’è Pomodoro Pro?',
          answer:
            'Pomodoro Pro è un acquisto in-app facoltativo su iPhone. Sblocca Focus Protection, tag personalizzati (con nomi e colori scelti da te) e Tag Insights (tempo di concentrazione settimanale e mensile per tag). Il timer, i tag integrati, la Focus History e la sincronizzazione restano disponibili senza Pro.',
        },
        {
          question: 'Quali opzioni di acquisto sono disponibili?',
          answer:
            'Pomodoro Pro è disponibile come abbonamento Ogni mese, abbonamento Ogni anno (annuale) o acquisto una tantum Lifetime. Gli abbonamenti si rinnovano automaticamente, a meno che non vengano annullati almeno 24 ore prima della fine del periodo corrente. Lifetime viene addebitato una sola volta e non è un abbonamento.',
        },
        {
          question: 'Dove posso acquistare o visualizzare Pomodoro Pro?',
          answer:
            'Su iPhone, apri Impostazioni → Pomodoro Pro oppure tocca il chip di protezione nella schermata Home. Devi aver effettuato l’accesso. Pro resta associato al tuo account su ogni dispositivo su cui accedi.',
        },
        {
          question: 'Come ripristino gli acquisti?',
          answer:
            'Usa Ripristina gli acquisti nella schermata di acquisto o in Impostazioni → Pomodoro Pro. Gli acquisti effettuati con lo stesso Apple Account vengono trasferiti all’account con cui hai effettuato l’accesso. Se non viene trovato nulla, verifica di usare l’Apple Account con cui hai acquistato Pro e riprova mentre sei online.',
        },
      ],
    },
    purchases: {
      title: 'Abbonamenti e acquisti',
      items: [
        {
          question: 'Come gestisco o annullo un abbonamento?',
          answer:
            'Gli abbonamenti vengono fatturati da Apple. Su iPhone, apri Impostazioni → Pomodoro Pro → Gestisci abbonamento oppure vai in Impostazioni → [il tuo nome] → Abbonamenti e seleziona l’app. Annulla almeno 24 ore prima del rinnovo per evitare l’addebito successivo. Eliminare l’app o il tuo account Pomodoro non annulla un abbonamento.',
        },
        {
          question: 'Come richiedo un rimborso?',
          answer:
            'I rimborsi sono gestiti da Apple. Visita reportaproblem.apple.com, accedi con l’Apple Account usato per l’acquisto, trova la transazione e invia una richiesta di rimborso. Non possiamo elaborare direttamente i rimborsi dell’App Store.',
        },
        {
          question: 'Cosa succede se un acquisto non riesce o Pro non si sblocca?',
          answer:
            'Resta connesso, controlla la connessione di rete e riprova. Se il pagamento è in sospeso, ad esempio con Chiedi di acquistare, Pro si sblocca dopo l’approvazione. Se hai già pagato, usa Ripristina gli acquisti. Per problemi di pagamento con un abbonamento attivo, aggiorna il metodo di pagamento nelle impostazioni dell’App Store.',
        },
        {
          question: 'Cosa succede se acquisto Lifetime mentre è attivo un abbonamento?',
          answer:
            'Lifetime sblocca Pro in modo permanente, ma un abbonamento esistente non viene annullato automaticamente. Disattiva il rinnovo automatico nelle impostazioni degli abbonamenti dell’App Store per evitare altri addebiti.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Cos’è Focus Protection?',
          answer:
            'Focus Protection è una funzione di Pomodoro Pro su iPhone. Usa le API Screen Time di Apple per bloccare le app, le categorie o i siti web che scegli durante una sessione di Concentrazione. Le pause non vengono mai bloccate. Al termine della sessione, le app bloccate si sbloccano automaticamente.',
        },
        {
          question: 'Come si configura?',
          answer:
            'Con Pro attivo, tocca il chip Focus Protection nella schermata Home oppure apri la funzione dalle Impostazioni. Consenti l’accesso a Screen Time quando richiesto, scegli cosa bloccare e attiva Focus Protection. Avvia una sessione di Concentrazione per applicare i blocchi.',
        },
        {
          question: 'Come la disattivo o sblocco le app?',
          answer:
            'Apri il pannello Focus Protection e scegli Disattiva ora, oppure disattiva la funzione. Al termine di una sessione puoi anche usare Sblocca app nella schermata di blocco. Per rimuovere completamente l’accesso dell’app a Screen Time, vai in Impostazioni iOS → Screen Time → App con accesso a Screen Time.',
        },
        {
          question: 'Cosa devo fare se Focus Protection non funziona?',
          answer:
            'Verifica che Pro sia attivo, che l’accesso a Screen Time sia consentito e di aver selezionato app o categorie da bloccare. Focus Protection si applica solo durante le sessioni di Concentrazione, non durante le pause. Se l’accesso è stato revocato nelle Impostazioni di sistema, apri l’app e consentilo di nuovo. Riavviare l’iPhone può essere utile dopo una modifica delle autorizzazioni.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Account e privacy',
      items: [
        {
          question: 'Come elimino il mio account?',
          answer:
            'Accedi, apri Impostazioni → Account → Elimina account e conferma. Il tuo account e la Focus History sincronizzata vengono eliminati definitivamente dal nostro database attivo. L’operazione non può essere annullata e richiede una connessione di rete. L’eliminazione dell’account non annulla un abbonamento all’App Store: gestiscilo nelle impostazioni dell’App Store.',
        },
        {
          question: 'Su cosa influisce l’eliminazione dell’account?',
          answer:
            'I dati cloud sincronizzati dell’account vengono rimossi, l’autorizzazione Sign in with Apple viene revocata se memorizzata, al nostro provider di acquisti viene richiesto di eliminare il record di acquisto collegato all’account e i dati dell’account vengono rimossi dal dispositivo su cui esegui l’eliminazione. Le copie locali sugli altri dispositivi non possono più sincronizzarsi; se necessario, elimina l’app o cancellale su tali dispositivi. I backup del provider possono conservare i dati eliminati per un periodo di recupero limitato. Apple conserva i propri record delle transazioni dell’App Store.',
        },
        {
          question: 'Come esporto i miei dati?',
          answer:
            'Impostazioni → Account → Esporta i miei dati salva un file JSON con sessioni, Daily Focus Goals, impostazioni sincronizzate e profilo dell’account. I dati locali non ancora assegnati possono essere esportati anche dalla schermata di accesso.',
        },
        {
          question: 'Dove trovo l’Informativa sulla privacy?',
          answer:
            'Apri l’Informativa sulla privacy dal sito web del prodotto oppure usa il link alla privacy nelle pagine del prodotto su questo sito.',
        },
      ],
    },
    requirements: {
      title: 'Requisiti',
      body: 'iPhone: iOS 17 o versioni successive. Mac: macOS 14.6 o versioni successive. Gli acquisti di Pomodoro Pro e Focus Protection sono disponibili su iPhone.',
    },
    contact: {
      title: 'Contatti',
      body: 'Per assistenza, commenti o segnalazioni di bug:',
    },
    privacyPolicyLink: 'Informativa sulla privacy',
  },
  privacy: {
    metaTitle: `Informativa sulla privacy di ${PULSE_APP_NAME}`,
    metaDescription: `Informativa sulla privacy di ${PULSE_APP_NAME}, che tratta l’accesso con Apple e Google, la sincronizzazione nel cloud, gli acquisti di Pomodoro Pro tramite RevenueCat, Focus Protection, i dati analitici e l’eliminazione dell’account su Mac e iPhone.`,
    title: 'Informativa sulla privacy',
    subtitle: `${PULSE_APP_NAME} — Timer Pomodoro per Mac e iPhone`,
    lastUpdated: 'Ultimo aggiornamento: 26 ottobre 2026',
    summary: {
      title: 'Riepilogo',
      body: `Quando accedi con Apple o Google, il tuo account mantiene sincronizzati tra Mac e iPhone la Focus History, gli Daily Focus Goals e le impostazioni del timer. Conserviamo solo ciò che serve all’app a questo scopo: il tuo indirizzo email, un identificatore dell’account e i dati sulla concentrazione che crei. Non li vendiamo mai, non li usiamo mai per la pubblicità e non li condividiamo mai con il nostro provider di analisi. Se acquisti Pomodoro Pro su iPhone, RevenueCat, il nostro provider per gli acquisti, conserva la cronologia degli acquisti collegata al tuo account affinché Pro funzioni su ogni dispositivo su cui accedi. Le app scelte in Focus Protection non lasciano mai il tuo iPhone. Puoi esportare i dati o eliminare l’account in qualsiasi momento dalle Impostazioni. Separatamente, l’app può inviare dati anonimi sull’utilizzo, tutelando la privacy, per consentirci di migliorare i flussi di concentrazione.`,
    },
    localData: {
      title: 'Dati memorizzati sul tuo dispositivo',
      body: 'Le impostazioni del timer, le preferenze delle sessioni e la Focus History vengono salvate localmente sul Mac o sull’iPhone tramite l’archiviazione standard del sistema, così il timer continua a funzionare offline. Ogni account con cui si accede su un dispositivo ha un archivio locale separato. La sessione di accesso viene conservata nel Portachiavi di sistema. Le impostazioni di lingua, aspetto, Avvia al login, notifiche e promemoria motivazionali restano su ciascun dispositivo e non vengono sincronizzate. Il contenuto della Focus History non viene caricato sul nostro provider di analisi.',
      migrationSafety:
        'Quando accedi per la prima volta su un dispositivo che contiene già una Focus History, l’app chiede conferma prima di spostare la cronologia nel tuo account. Finché lo spostamento non viene confermato sui nostri server, più altri 90 giorni, l’app conserva sul dispositivo la precedente copia locale e un file di backup locale come misura di sicurezza, quindi li rimuove automaticamente.',
    },
    accountAndSync: {
      title: 'Il tuo account e i dati sincronizzati',
      intro: 'Se accedi, trattiamo:',
      items: [
        'Dati di contatto: l’indirizzo email condiviso da Sign in with Apple (eventualmente un indirizzo relay privato tramite Hide My Email) o Google. Non richiediamo il tuo nome.',
        'Identificatori: un ID account creato al momento dell’accesso e un ID casuale per ogni installazione, usati solo per la sincronizzazione e per identificare il dispositivo che ha apportato una modifica.',
        'Dati sulla concentrazione: sessioni di concentrazione e pausa completate ed eliminate (orari, durate, giorno locale e fuso orario e tag scelto), tag creati (nome e colore), Daily Focus Goals, serie migliore e impostazioni sincronizzate (durata delle sessioni, obiettivo giornaliero, suono, animazioni, suono di completamento, animale del festeggiamento).',
      ],
      closing:
        'Questi dati vengono usati esclusivamente per fornire le funzioni di sincronizzazione, cronologia e account. Sono collegati al tuo account, non vengono usati per il tracciamento e non vengono condivisi con terze parti diverse dai responsabili del trattamento indicati di seguito.',
    },
    processors: {
      title: 'Responsabili del trattamento e luogo di archiviazione',
      bodyBeforeSupabase: 'I dati dell’account e di sincronizzazione sono archiviati presso',
      bodyAfterSupabase:
        '(database e autenticazione) nell’Unione europea. L’accesso è gestito da',
      orWord: 'o',
      bodyAfterProviders:
        ', a seconda dell’opzione scelta. Gli acquisti di Pomodoro Pro sono gestiti tramite',
      bodyAfterRevenueCat:
        '(vedi Acquisti di seguito). I dati sono crittografati durante il trasferimento e l’accesso è limitato, in modo che ogni account possa leggere solo i propri dati.',
    },
    purchases: {
      title: 'Acquisti (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro viene venduto tramite l’App Store; Apple gestisce il pagamento e noi non vediamo mai i tuoi dati di pagamento. Per sbloccare Pro su ogni dispositivo su cui accedi, l’app condivide l’ID del tuo account con',
      bodyAfterRevenueCat:
        ', che conserva la cronologia degli acquisti (prodotti acquistati, date di acquisto e rinnovo e stato dell’abbonamento) collegata a tale ID. Questi dati vengono usati solo per concedere e ripristinare l’accesso a Pro, non vengono usati per il tracciamento e non vengono condivisi con il nostro provider di analisi. Pro richiede un account con accesso effettuato; prima dell’accesso non viene inviato nulla a RevenueCat.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection usa il framework Screen Time di Apple (Family Controls) per bloccare le app, le categorie e i siti web che scegli durante una sessione di concentrazione. Apple fornisce all’app solo token opachi relativi alle tue scelte: non possiamo vedere quali app o siti web hai scelto, come li usi o altri dati di Screen Time. Le tue scelte restano su quell’iPhone, non vengono mai caricate né sincronizzate e non vengono inviate al nostro provider di analisi. Puoi disattivare Focus Protection nell’app in qualsiasi momento oppure rimuovere l’accesso dell’app in Impostazioni → Screen Time → App con accesso a Screen Time.',
    },
    retention: {
      title: 'Conservazione, backup ed eliminazione',
      items: [
        'I dati sincronizzati vengono conservati finché esiste il tuo account.',
        'Elimina account (Impostazioni → Account → Elimina account) elimina definitivamente il tuo account e tutti i dati sincronizzati dal nostro database attivo, revoca l’autorizzazione Sign in with Apple dell’app se memorizzata, chiede a RevenueCat di eliminare il record di acquisto collegato al tuo account e rimuove i dati di quell’account dal dispositivo su cui esegui l’eliminazione. Le copie locali sugli altri dispositivi non possono più sincronizzarsi e vi restano finché non elimini l’app su tali dispositivi o le rimuovi dalla schermata di accesso quando viene proposta questa opzione.',
        'Il nostro provider di database conserva backup giornalieri per 7 giorni. I dati eliminati possono restare in tali backup fino alla scadenza; i backup vengono usati solo per il ripristino di emergenza. Per lo stesso scopo, potremmo inoltre conservare un backup settimanale crittografato per un massimo di 90 giorni.',
        'Eliminare l’account non annulla un abbonamento all’App Store; gestiscilo o annullalo nelle impostazioni del tuo Apple Account. Apple conserva il proprio record delle transazioni dell’App Store.',
        'Uscire dall’account non elimina nulla. Le modifiche non ancora sincronizzate restano sul dispositivo finché non si accede di nuovo allo stesso account.',
        'I record analitici sono gestiti da TelemetryDeck secondo le sue pratiche di conservazione e non vengono usati per ripristinare la Focus History.',
      ],
    },
    export: {
      title: 'Esportazione',
      body: 'Impostazioni → Account → Esporta i miei dati salva un file JSON con sessioni, Daily Focus Goals, impostazioni sincronizzate e profilo dell’account. I dati non ancora spostati in un account possono essere esportati anche dalla schermata di accesso.',
    },
    analytics: {
      title: 'Analisi',
      introBeforeLink: 'Utilizziamo',
      introAfterLink:
        ', un servizio di analisi attento alla privacy, per capire come viene usata l’app (ad esempio: sessioni di concentrazione o pausa avviate o completate, modifiche all’obiettivo giornaliero e alle impostazioni, risultati delle autorizzazioni per le notifiche, eventi dei promemoria motivazionali e completamento dell’onboarding). I segnali non includono testo libero, nomi, indirizzi email o il contenuto della Focus History.',
      identifier:
        'TelemetryDeck identifica le installazioni tramite un identificatore con hash limitato al dispositivo e può associare metadati non personali del dispositivo, come modello, versione del sistema operativo e impostazioni locali. Questi dati vengono usati solo per l’analisi, non vengono collegati da noi alla tua identità e non vengono usati per tracciarti nelle app o nei siti web di altre aziende.',
      learnMore: 'Scopri di più:',
      faqLabel: 'Domande frequenti sulla privacy di TelemetryDeck',
    },
    appStoreUpdates: {
      title: 'Aggiornamenti dell’App Store',
      body: 'Se usi “Cerca aggiornamenti” nelle Impostazioni, l’app può contattare Apple per verificare se sull’App Store è disponibile una versione più recente.',
    },
    launchAtLogin: {
      title: 'Avvia al login (Mac)',
      body: 'Se abiliti Avvia al login nelle Impostazioni sul Mac, l’app usa le API di sistema di macOS per registrarsi come elemento di login. Sei tu a controllare questa preferenza e puoi disabilitarla in qualsiasi momento.',
    },
    notifications: {
      title: 'Notifiche e Live Activities (iPhone)',
      body: 'Su iPhone, le notifiche locali facoltative, i promemoria motivazionali e le Live Activities ti aiutano a vedere quando termina una sessione o a tornare delicatamente alla concentrazione. L’autorizzazione viene richiesta solo quando scegli di abilitare queste funzioni. Il contenuto delle notifiche resta sul tuo dispositivo.',
    },
    whatWeDoNotDo: {
      title: 'Cosa non facciamo',
      items: [
        'Nessuna rete pubblicitaria',
        'Nessuna vendita di informazioni personali',
        'Nessun accesso a contatti, foto, posizione precisa, fotocamera o microfono per l’analisi',
      ],
    },
    children: {
      title: 'Minori',
      body: `${PULSE_APP_NAME} non raccoglie consapevolmente informazioni personali di minori oltre a quelle necessarie a un account per la sincronizzazione, come descritto sopra. I segnali analitici sono anonimi e non includono contenuti personali.`,
    },
    changes: {
      title: 'Modifiche',
      body: 'Se questa informativa cambia, la versione aggiornata verrà pubblicata a questo URL.',
    },
    contact: {
      title: 'Contatti',
      body: 'Domande su questa informativa:',
    },
  },
}
