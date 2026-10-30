import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const plMessages: PulseMessages = {
  languageLabel: 'Język strony',
  video: {
    ariaLabel: `Prezentacja produktu ${PULSE_APP_NAME}`,
    playLabel: 'Odtwórz prezentację',
    unsupported: 'Twoja przeglądarka nie obsługuje osadzonych filmów.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Minutnik skupienia na iPhone’a i Maca`,
    metaDescription: `${PULSE_APP_NAME} to spokojny minutnik Pomodoro na iPhone’a i Maca z historią skupienia, celami dziennymi, logowaniem przez Apple i Google oraz synchronizacją offline-first między urządzeniami.`,
    heroImageAlt: `Minutnik skupienia i przegląd tygodniowej historii w ${PULSE_APP_NAME}`,
    backToProjects: 'Wróć do projektów',
    availableOnAppStore: 'Dostępne w App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Minutnik skupienia na iPhone’a i Maca',
    tagline: 'Łagodny minutnik Pomodoro, który pomaga się skupić — na iPhonie i w pasku menu Maca.',
    description: `Rozpocznij sesję Skupienia, zrób przerwę i miej historię zawsze przy sobie. Zaloguj się przez Apple lub Google, aby Daily Focus Goals, Focus History i synchronizowane preferencje pozostały na Twoim koncie na iPhonie i Macu, a minutnik nadal działał offline.`,
    downloadCta: 'Pobierz w App Store',
    watchDemo: 'Zobacz w działaniu',
    supportCta: 'Pomoc',
    stats: {
      platformLabel: 'Platformy',
      platformValue: 'iPhone i Mac',
      languagesLabel: 'Języki',
      languagesValue: '48 języków',
      dataLabel: 'Synchronizacja',
      dataValue: 'Offline-first',
      builtWithLabel: 'Utworzono za pomocą',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Spokojniejszy sposób na skupienie',
      title: 'Minutnik jest pod ręką, gdy go potrzebujesz, i znika, gdy nie jest potrzebny.',
      description: `Na Macu otwórz ${PULSE_APP_NAME} z paska menu, wybierz sesję i zamknij okno podręczne. Na iPhonie rozpocznij Skupienie z ekranu głównego i korzystaj z Live Activities na obsługiwanych urządzeniach. Minutnik działa dalej, gdy Ty pracujesz.`,
      caption:
        'Minutniki skupienia i przerw, Daily Focus Goals, Focus History, śledzenie serii, lokalizacja w 48 językach i opcjonalne powiadomienia o zakończeniu.',
    },
    rhythm: {
      eyebrow: 'Rytm pod Twoją kontrolą',
      title: 'Skupienie, pauza, odpoczynek, powtórka.',
      description: `${PULSE_APP_NAME} podpowiada, co zrobić dalej, ale nigdy nie rozpoczyna sesji za Ciebie. Każdy czas trwania możesz dopasować do swojego dnia.`,
    },
    featureShowcases: [
      {
        title: 'Skupienie',
        badge: '1–120 min',
        description:
          'Odliczanie działa dyskretnie podczas pracy. Wstrzymuj, zeruj lub pomijaj — zachowujesz kontrolę na iPhonie i Macu.',
        imageFile: 'focus-running.png',
        alt: `Trwająca sesja skupienia w ${PULSE_APP_NAME} z przyciskami pauzy i odliczaniem`,
      },
      {
        title: 'Pasek menu',
        badge: 'Mac',
        description:
          'Na Macu możesz pokazać lub ukryć pozostały czas w pasku menu. Element stanu o stałej szerokości pozostaje na miejscu i nie przesuwa okna podręcznego, aż do 120:00.',
        imageFile: 'menubar.png',
        alt: `Odliczanie ${PULSE_APP_NAME} wyświetlane w pasku menu macOS`,
      },
      {
        title: 'Personalizacja',
        badge: 'Twoje zasady',
        description:
          'Elastyczne czasy trwania, Daily Focus Goals, dźwięki i animacje zakończenia, 48 języków interfejsu oraz preferencje wyglądu.',
        imageFile: 'settings.png',
        alt: `Ustawienia ${PULSE_APP_NAME} dotyczące czasu trwania, powiadomień o zakończeniu, języka i celów`,
      },
    ],
    history: {
      eyebrow: 'Postępy bez presji',
      title: 'Zobacz efekty swojej pracy.',
      description:
        'Otwórz Focus History, aby przejrzeć sumy i serie. Po zalogowaniu historia może synchronizować się między iPhonem a Makiem, więc postępy są zawsze z Tobą.',
      items: ['Łączny czas skupienia', 'Liczba ukończonych sesji', 'Bieżąca seria', 'Najlepsza seria', 'Daily Focus Goals'],
      imageAlt: `Tygodniowa Focus History w ${PULSE_APP_NAME} z liczbą sesji, godzinami skupienia i serią`,
    },
    feedback: {
      eyebrow: 'Łagodne informacje zwrotne po Twojemu',
      title: 'Niech ukończenie daje satysfakcję.',
      description: `Wybierz jeden z sześciu spokojnych dźwięków zakończenia i sześciu zwierzęcych animacji albo wyłącz dowolną z tych opcji. ${PULSE_APP_NAME} wyświetla odpowiedni komunikat po zakończeniu sesji Skupienia, Krótkiej przerwy lub Długiej przerwy.`,
      items: [
        'Tytuł i podtytuł zakończenia dopasowane do sesji',
        'Interfejs w 48 językach z domyślnym językiem systemu',
        'Preferencje języka i wyglądu na każdym urządzeniu',
        'Opcjonalne przypomnienia motywacyjne na iPhonie',
      ],
      settingsImageAlt: `Ustawienia ${PULSE_APP_NAME} dotyczące czasu trwania, języka, dźwięków zakończenia i celów`,
      celebrationImageAlt: `Animacja królika w ${PULSE_APP_NAME} po ukończeniu sesji`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Małpa', 'Koala', 'Kot', 'Lis', 'Panda', 'Królik'],
    },
    native: {
      eyebrow: 'Natywna z założenia',
      title: 'Stworzona z myślą o urządzeniach Apple.',
      description: `SwiftUI, AppKit i konwencje systemowe sprawiają, że ${PULSE_APP_NAME} działa szybko i znajomo, oferując wszędzie etykiety VoiceOver i obsługę funkcji Ogranicz ruch.`,
      features: [
        {
          title: 'Pasek menu Maca i ekran główny iPhone’a',
          description: 'Dyskretny pomocnik w pasku menu Maca i skupiony ekran główny na iPhonie.',
        },
        {
          title: 'Zawsze dokładna',
          description:
            'Sesje zachowują dokładność po uśpieniu, wybudzeniu i ponownym uruchomieniu, a historia jest zapisywana zgodnie z faktycznym terminem zakończenia.',
        },
        {
          title: 'Synchronizacja offline-first',
          description:
            'Skupiaj się bez połączenia. Gdy wrócisz online, zmiany wprowadzone po zalogowaniu zostaną zsynchronizowane z kontem.',
        },
        {
          title: 'Mówi w Twoim języku',
          description:
            'Pełny interfejs w 48 językach, domyślnie zgodny z językiem systemu, z możliwością ręcznej zmiany w Ustawieniach.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Prywatność z założenia',
      title: 'Twoje skupienie należy do Ciebie.',
      description: `${PULSE_APP_NAME} używa konta, aby historia mogła synchronizować się między urządzeniami. Przechowujemy tylko dane potrzebne do synchronizacji, nigdy ich nie sprzedajemy i oddzielamy analitykę od historii skupienia.`,
      items: [
        'Logowanie przez Apple lub Google',
        'Skupienie offline-first na każdym urządzeniu',
        'Synchronizacja historii i preferencji w chmurze',
        'Brak sieci reklamowych',
        'Możliwość usunięcia konta w dowolnym momencie w Ustawieniach',
      ],
    },
    closing: {
      title: 'Zrób miejsce na pracę w skupieniu.',
      description: `Pobierz ${PULSE_APP_NAME} z App Store na iPhone’a i Maca albo zapoznaj się z polityką prywatności i stroną pomocy, jeśli jej potrzebujesz.`,
      getSupport: 'Uzyskaj pomoc',
      privacy: 'Prywatność',
    },
  },
  support: {
    metaTitle: `Pomoc ${PULSE_APP_NAME}`,
    metaDescription: `Pomoc, często zadawane pytania i wsparcie dotyczące konta ${PULSE_APP_NAME} na iPhonie i Macu, w tym Pomodoro Pro, zakupy, Focus Protection, logowanie, synchronizacja i usuwanie konta.`,
    title: `Pomoc ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} to spokojny minutnik Pomodoro na iPhone’a i Maca. Zaloguj się przez Apple lub Google, aby synchronizować Focus History między urządzeniami. Na iPhonie opcjonalne Pomodoro Pro odblokowuje Focus Protection, własne tagi i Tag Insights.`,
    gettingStarted: {
      title: 'Pierwsze kroki',
      items: [
        {
          question: 'Jak rozpocząć sesję Skupienia?',
          answer:
            'Na Macu kliknij ikonę aplikacji na pasku menu, wybierz Skupienie, Krótką przerwę lub Długą przerwę, a następnie naciśnij Start. Na iPhonie otwórz aplikację, wybierz sesję na ekranie głównym i naciśnij Start. Możesz opuścić aplikację, gdy minutnik działa.',
        },
        {
          question: 'Jak zmienić czas Skupienia i przerw?',
          answer:
            'Otwórz Ustawienia i dostosuj czas Skupienia, Krótkiej przerwy i Długiej przerwy. Możesz też wybrać gotowy rytm, a następnie dopasować liczbę minut.',
        },
        {
          question: 'Jak skonfigurować Daily Focus Goals?',
          answer:
            'W Ustawieniach wybierz liczbę sesji Skupienia, które chcesz wykonać każdego dnia. Postęp pojawia się na ekranie głównym i w historii skupienia.',
        },
        {
          question: 'Jak wyświetlić Focus History?',
          answer:
            'Otwórz Focus History w aplikacji (na Macu z okna podręcznego lub menu stanu). Zobaczysz sumy, serie i tygodniowe postępy.',
        },
        {
          question: 'Jak zmienić język i wygląd?',
          answer:
            'W Ustawieniach wybierz Język (System lub obsługiwany język) oraz Wygląd (System, Jasny lub Ciemny). Te preferencje pozostają na każdym urządzeniu i nie są synchronizowane.',
        },
      ],
    },
    accounts: {
      title: 'Konta',
      items: [
        {
          question: 'Dlaczego logowanie jest wymagane?',
          answer:
            'Konto pozwala zachować Focus History, Daily Focus Goals i synchronizowane preferencje na iPhonie i Macu. Nowe instalacje wymagają zalogowania przed użyciem minutnika. Urządzenia aktualizowane ze starszych wersji mogą nadal korzystać z lokalnej historii do czasu zalogowania. Zakupy Pomodoro Pro również pozostają na zalogowanym koncie.',
        },
        {
          question: 'Jak zalogować się przez Apple lub Google?',
          answer:
            'Na ekranie logowania wybierz Kontynuuj z Apple lub Kontynuuj z Google i dokończ procedurę dostawcy. Apple może zaproponować funkcję Ukryj mój adres email.',
        },
        {
          question: 'Jak się wylogować?',
          answer:
            'Otwórz Ustawienia → Konto → Wyloguj się. Jeśli niektóre zmiany nie zostały jeszcze zsynchronizowane, aplikacja może poprosić o wcześniejszą synchronizację lub pozwolić wylogować się mimo to. Wylogowanie nie usuwa konta.',
        },
        {
          question: 'Jak zalogować się ponownie?',
          answer:
            'Użyj tej samej metody Apple lub Google na ekranie logowania. Historia tego konta w chmurze zostanie przywrócona na urządzeniu.',
        },
        {
          question: 'Co się stanie, jeśli użyję innego konta?',
          answer:
            'Każde konto ma własną historię. Zalogowanie się na inne konto nie łączy niepowiązanych historii. Wybierz uważnie przed potwierdzeniem przypisania historii na urządzeniu, które ma już lokalne sesje.',
        },
        {
          question: 'Czy mogę połączyć Apple i Google z tym samym kontem?',
          answer:
            'Tak. W Ustawieniach → Konto możesz połączyć drugą metodę logowania, jeśli nie jest już używana przez inne konto.',
        },
      ],
    },
    cloudSync: {
      title: 'Synchronizacja w chmurze',
      items: [
        {
          question: 'Co jest synchronizowane między urządzeniami?',
          answer:
            'Historia sesji skupienia i przerw (wraz z wybranym tagiem), utworzone tagi, zapisy celów dziennych, dane konta związane z seriami oraz synchronizowane preferencje, takie jak czas sesji, cel dzienny, dźwięk, animacje, dźwięk zakończenia i zwierzę animacji.',
        },
        {
          question: 'Co się dzieje bez Internetu?',
          answer:
            'Po zalogowaniu możesz nadal korzystać z minutnika offline. Nowe sesje i zmiany pozostają na urządzeniu do czasu uzyskania połączenia.',
        },
        {
          question: 'Co się dzieje po powrocie online?',
          answer:
            'Aplikacja synchronizuje oczekujące zmiany z kontem. Synchronizacja działa offline-first i jest ostatecznie spójna — nie jest to natychmiastowa współpraca w czasie rzeczywistym.',
        },
        {
          question: 'Jak używać tego samego konta na iPhonie i Macu?',
          answer:
            'Zainstaluj aplikację na obu urządzeniach i zaloguj się na to samo konto Apple lub Google. Po zakończeniu przywracania Focus History może pojawić się na obu.',
        },
        {
          question: 'Co zrobić, jeśli brakuje historii?',
          answer:
            'Sprawdź, czy logujesz się na to samo konto, poczekaj na zakończenie przywracania lub synchronizacji i ponownie sprawdź Focus History. Jeśli zalogujesz się na inne konto, zobaczysz jego własną historię.',
        },
      ],
    },
    migration: {
      title: 'Aktualizacja ze starszej wersji',
      items: [
        {
          question: 'Co stanie się z istniejącą historią lokalną?',
          answer:
            'Istniejąca historia lokalna nie jest usuwana bez powiadomienia. Po zalogowaniu aplikacja pyta o zgodę przed dodaniem tej historii do konta.',
        },
        {
          question: 'Jak przypisać historię do konta?',
          answer:
            'Zaloguj się na konto, do którego ma należeć historia, sprawdź ekran Dodaj swoją historię i wybierz Dodaj do tego konta. Użyj innego konta, jeśli wyświetlone jest niewłaściwe. Sesji nie można później przenieść na inne konto.',
        },
        {
          question: 'Co zrobić, jeśli ustawienia urządzenia i konta się różnią?',
          answer:
            'Aplikacja może zapytać, czy zachować ustawienia urządzenia, czy użyć ustawień konta. Język, wygląd, powiadomienia i przypomnienia motywacyjne pozostają lokalnie na urządzeniu.',
        },
      ],
    },
    notifications: {
      title: 'Powiadomienia',
      items: [
        {
          question: 'Jak włączyć powiadomienia na iPhonie?',
          answer:
            'Otwórz Ustawienia → Powiadomienia i wybierz Włącz albo otwórz ustawienia systemowe, jeśli wcześniej odmówiono uprawnienia.',
        },
        {
          question: 'Jak działają przypomnienia motywacyjne?',
          answer:
            'Na iPhonie otwórz Ustawienia → Przypomnienia motywacyjne i włącz je po zezwoleniu na powiadomienia. Możesz je wstrzymać lub ustawić godziny ciszy. Są opcjonalne i domyślnie wyłączone.',
        },
        {
          question: 'Co zrobić, jeśli powiadomienia są wyłączone?',
          answer:
            'Alerty o zakończeniu sesji i przypomnienia motywacyjne wymagają uprawnienia do powiadomień. Użyj Ustawienia → Powiadomienia → Otwórz ustawienia, aby włączyć je w ustawieniach iOS.',
        },
        {
          question: 'Jak działają Live Activities?',
          answer:
            'Na obsługiwanych iPhone’ach opcjonalna Live Activity może pokazywać aktywną sesję na ekranie blokady i Dynamic Island. Uprawnienie jest wymagane po włączeniu powiązanych funkcji.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Czym jest Pomodoro Pro?',
          answer:
            'Pomodoro Pro to opcjonalny zakup w aplikacji na iPhonie. Odblokowuje Ochronę skupienia, własne tagi (z własnymi nazwami i kolorami) oraz Tag Insights (tygodniowy i miesięczny czas skupienia według tagu). Minutnik, wbudowane tagi, Focus History i synchronizacja pozostają dostępne bez Pro.',
        },
        {
          question: 'Jakie opcje zakupu są dostępne?',
          answer:
            'Pomodoro Pro jest dostępne jako subskrypcja Co miesiąc, subskrypcja Co rok (roczna) lub jednorazowy zakup Lifetime. Subskrypcje odnawiają się automatycznie, chyba że anulujesz je co najmniej 24 godziny przed końcem bieżącego okresu. Opłata za Lifetime jest pobierana raz i nie jest to subskrypcja.',
        },
        {
          question: 'Gdzie mogę kupić lub wyświetlić Pomodoro Pro?',
          answer:
            'Na iPhonie otwórz Ustawienia → Pomodoro Pro lub stuknij kafelek ochrony na ekranie głównym. Musisz być zalogowany. Pro pozostaje na Twoim koncie na każdym urządzeniu, na którym się logujesz.',
        },
        {
          question: 'Jak odtworzyć zakupy?',
          answer:
            'Użyj opcji Odtwórz zakupy na ekranie płatności lub w Ustawieniach → Pomodoro Pro. Zakupy dokonane przy użyciu tego samego Konta Apple zostaną przeniesione na konto, na którym jesteś zalogowany. Jeśli nic nie zostanie znalezione, sprawdź, czy używasz Konta Apple, z którego kupiono Pro, i spróbuj ponownie online.',
        },
      ],
    },
    purchases: {
      title: 'Subskrypcje i zakupy',
      items: [
        {
          question: 'Jak zarządzać subskrypcją lub ją anulować?',
          answer:
            'Opłaty za subskrypcje pobiera Apple. Na iPhonie otwórz Ustawienia → Pomodoro Pro → Zarządzaj subskrypcją albo przejdź do Ustawienia → [Twoje imię] → Subskrypcje i wybierz aplikację. Anuluj co najmniej 24 godziny przed odnowieniem, aby uniknąć kolejnej opłaty. Usunięcie aplikacji lub konta Pomodoro nie anuluje subskrypcji.',
        },
        {
          question: 'Jak poprosić o zwrot pieniędzy?',
          answer:
            'Zwroty obsługuje Apple. Odwiedź reportaproblem.apple.com, zaloguj się na Konto Apple użyte do zakupu, znajdź transakcję i prześlij prośbę o zwrot. Nie możemy samodzielnie obsługiwać zwrotów z App Store.',
        },
        {
          question: 'Co zrobić, jeśli zakup się nie powiedzie lub Pro się nie odblokuje?',
          answer:
            'Pozostań zalogowany, sprawdź połączenie sieciowe i spróbuj ponownie. Jeśli płatność oczekuje, na przykład przy Poproś o zakup, Pro zostanie odblokowane po zatwierdzeniu. Jeśli płatność została już dokonana, użyj Odtwórz zakupy. Przy problemach z płatnością za aktywną subskrypcję zaktualizuj metodę płatności w ustawieniach App Store.',
        },
        {
          question: 'Co się stanie, jeśli kupię Lifetime podczas aktywnej subskrypcji?',
          answer:
            'Lifetime odblokowuje Pro na stałe, ale nie anuluje automatycznie istniejącej subskrypcji. Wyłącz automatyczne odnawianie w ustawieniach subskrypcji App Store, aby uniknąć kolejnych opłat.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Czym jest Focus Protection?',
          answer:
            'Focus Protection to funkcja Pomodoro Pro na iPhonie. Używa interfejsów API Screen Time firmy Apple do blokowania wybranych aplikacji, kategorii lub witryn podczas sesji Skupienia. Przerwy nigdy nie są blokowane. Po zakończeniu sesji zablokowane aplikacje odblokowują się automatycznie.',
        },
        {
          question: 'Jak ją skonfigurować?',
          answer:
            'Gdy Pro jest aktywne, stuknij kafelek Focus Protection na ekranie głównym lub otwórz tę funkcję w Ustawieniach. Zezwól na dostęp do Screen Time, wybierz elementy do zablokowania i włącz Ochronę skupienia. Rozpocznij sesję Skupienia, aby zastosować blokady.',
        },
        {
          question: 'Jak ją wyłączyć lub odblokować aplikacje?',
          answer:
            'Otwórz panel Focus Protection i wybierz Wyłącz teraz albo wyłącz funkcję. Po zakończeniu sesji możesz też użyć opcji Odblokuj aplikacje na ekranie blokady. Aby całkowicie odebrać aplikacji dostęp do Screen Time, przejdź do Ustawienia iOS → Screen Time → Aplikacje z dostępem do Screen Time.',
        },
        {
          question: 'Co zrobić, jeśli Focus Protection nie działa?',
          answer:
            'Sprawdź, czy Pro jest aktywne, dostęp do Screen Time jest dozwolony i wybrano aplikacje lub kategorie do blokowania. Focus Protection działa tylko podczas sesji Skupienia, a nie przerw. Jeśli dostęp został cofnięty w ustawieniach systemu, otwórz aplikację i zezwól na niego ponownie. Po zmianie uprawnień może pomóc ponowne uruchomienie iPhone’a.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Konto i prywatność',
      items: [
        {
          question: 'Jak usunąć konto?',
          answer:
            'Zaloguj się, otwórz Ustawienia → Konto → Usuń konto i potwierdź. Twoje konto i synchronizowana Focus History zostaną trwale usunięte z naszej aktywnej bazy danych. Tej operacji nie można cofnąć i wymaga ona połączenia sieciowego. Usunięcie konta nie anuluje subskrypcji App Store — zarządzaj nią w ustawieniach App Store.',
        },
        {
          question: 'Na co wpływa usunięcie konta?',
          answer:
            'Synchronizowane dane tego konta w chmurze są usuwane, autoryzacja Sign in with Apple zostaje cofnięta, jeśli była zapisana, nasz dostawca zakupów otrzymuje prośbę o usunięcie rekordu zakupu powiązanego z kontem, a dane konta są usuwane z urządzenia, na którym wykonujesz operację. Lokalne kopie na innych urządzeniach nie mogą już się synchronizować; w razie potrzeby usuń tam aplikację lub wyczyść te kopie. Kopie zapasowe dostawców mogą przechowywać usunięte dane przez ograniczony okres odzyskiwania. Apple zachowuje własne zapisy transakcji App Store.',
        },
        {
          question: 'Jak wyeksportować dane?',
          answer:
            'Ustawienia → Konto → Eksportuj moje dane zapisuje plik JSON z sesjami, celami dziennymi, synchronizowanymi ustawieniami i profilem konta. Nieprzypisane dane lokalne można też wyeksportować z ekranu logowania.',
        },
        {
          question: 'Gdzie znajduje się Polityka prywatności?',
          answer:
            'Otwórz Politykę prywatności z witryny produktu lub użyj łącza prywatności na stronach produktu w tej witrynie.',
        },
      ],
    },
    requirements: {
      title: 'Wymagania',
      body: 'iPhone: iOS 17 lub nowszy. Mac: macOS 14.6 lub nowszy. Zakupy Pomodoro Pro i Focus Protection są dostępne na iPhonie.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Pomoc, opinie lub zgłoszenia błędów:',
    },
    privacyPolicyLink: 'Polityka prywatności',
  },
  privacy: {
    metaTitle: `Polityka prywatności ${PULSE_APP_NAME}`,
    metaDescription: `Polityka prywatności ${PULSE_APP_NAME} obejmująca logowanie przez Apple i Google, synchronizację w chmurze, zakupy Pomodoro Pro przez RevenueCat, Ochronę skupienia, analitykę i usuwanie konta na Macu i iPhonie.`,
    title: 'Polityka prywatności',
    subtitle: `${PULSE_APP_NAME} — Minutnik Pomodoro na Maca i iPhone’a`,
    lastUpdated: 'Ostatnia aktualizacja: 26 października 2026',
    summary: {
      title: 'Podsumowanie',
      body: `Gdy logujesz się przez Apple lub Google, Twoje konto synchronizuje Focus History, Daily Focus Goals i ustawienia minutnika między Makiem a iPhonem. Przechowujemy tylko dane potrzebne aplikacji do tego celu: adres email, identyfikator konta i tworzone przez Ciebie dane o skupieniu. Nigdy ich nie sprzedajemy, nie wykorzystujemy do reklam ani nie udostępniamy naszemu dostawcy analityki. Jeśli kupisz Pomodoro Pro na iPhonie, nasz dostawca zakupów RevenueCat przechowuje historię zakupów powiązaną z Twoim kontem, aby Pro działało na każdym urządzeniu, na którym się logujesz. Wybory aplikacji w Ochronie skupienia nigdy nie opuszczają iPhone’a. W każdej chwili możesz wyeksportować dane lub usunąć konto w Ustawieniach. Niezależnie od tego aplikacja może wysyłać anonimowe, chroniące prywatność dane o użyciu, abyśmy mogli ulepszać procesy skupienia.`,
    },
    localData: {
      title: 'Dane przechowywane na urządzeniu',
      body: 'Ustawienia minutnika, preferencje sesji i Focus History są zapisywane lokalnie na Macu lub iPhonie przy użyciu standardowej pamięci systemowej, dzięki czemu minutnik działa offline. Każde konto zalogowane na urządzeniu ma oddzielny magazyn lokalny. Sesja logowania jest przechowywana w systemowym Pęku kluczy. Ustawienia języka, wyglądu, Otwórz po zalogowaniu, powiadomień i przypomnień motywacyjnych pozostają na każdym urządzeniu i nie są synchronizowane. Sama zawartość historii skupienia nie jest przesyłana do naszego dostawcy analityki.',
      migrationSafety:
        'Gdy po raz pierwszy logujesz się na urządzeniu, które ma już Focus History, aplikacja pyta o zgodę przed przeniesieniem tej historii na konto. Do chwili potwierdzenia przeniesienia na naszych serwerach, a następnie jeszcze przez 90 dni, aplikacja przechowuje poprzednią kopię lokalną i lokalny plik kopii zapasowej na urządzeniu jako zabezpieczenie, po czym usuwa je automatycznie.',
    },
    accountAndSync: {
      title: 'Twoje konto i synchronizowane dane',
      intro: 'Jeśli się zalogujesz, przetwarzamy:',
      items: [
        'Dane kontaktowe: adres email udostępniony przez Sign in with Apple (może to być prywatny adres przekazujący przez Hide My Email) lub Google. Nie prosimy o imię ani nazwisko.',
        'Identyfikatory: identyfikator konta utworzony przy logowaniu oraz losowy identyfikator każdej instalacji, używane wyłącznie do synchronizacji i określenia, które urządzenie wprowadziło zmianę.',
        'Dane o skupieniu: ukończone i usunięte sesje skupienia i przerw (godziny, czasy trwania, lokalny dzień i strefa czasowa oraz wybrany tag), utworzone tagi (nazwa i kolor), Daily Focus Goals, najlepsza seria i synchronizowane ustawienia (czasy sesji, cel dzienny, dźwięk, animacje, dźwięk zakończenia i zwierzę animacji).',
      ],
      closing:
        'Dane te są używane wyłącznie do zapewnienia funkcji synchronizacji, historii i konta. Są powiązane z kontem, nie służą do śledzenia i nie są udostępniane podmiotom trzecim innym niż wymienieni niżej podmioty przetwarzające.',
    },
    processors: {
      title: 'Podmioty przetwarzające i miejsce przechowywania',
      bodyBeforeSupabase: 'Dane konta i synchronizacji są przechowywane przez',
      bodyAfterSupabase:
        '(baza danych i uwierzytelnianie) w Unii Europejskiej. Logowanie jest obsługiwane przez',
      orWord: 'lub',
      bodyAfterProviders:
        ', zależnie od wybranej opcji. Zakupy Pomodoro Pro są obsługiwane przez',
      bodyAfterRevenueCat:
        '(zobacz Zakupy poniżej). Dane są szyfrowane podczas przesyłania, a dostęp jest ograniczony, aby każde konto mogło odczytywać tylko własne dane.',
    },
    purchases: {
      title: 'Zakupy (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro jest sprzedawane przez App Store; Apple obsługuje płatność, a my nigdy nie widzimy danych płatniczych. Aby odblokować Pro na każdym urządzeniu, na którym się logujesz, aplikacja udostępnia identyfikator Twojego konta firmie',
      bodyAfterRevenueCat:
        ', która przechowuje historię zakupów (kupione produkty, daty zakupu i odnowienia oraz stan subskrypcji) powiązaną z tym identyfikatorem. Dane te są używane wyłącznie do przyznawania i przywracania dostępu Pro, nie służą do śledzenia i nie są udostępniane naszemu dostawcy analityki. Pro wymaga zalogowanego konta; przed zalogowaniem żadne dane nie są wysyłane do RevenueCat.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection używa frameworka Screen Time firmy Apple (Family Controls), aby blokować wybrane aplikacje, kategorie i witryny podczas sesji skupienia. Apple przekazuje aplikacji tylko nieprzejrzyste tokeny dotyczące wyborów: nie możemy zobaczyć, które aplikacje lub witryny wybrano, jak są używane ani żadnych innych danych Screen Time. Wybory pozostają na tym iPhonie, nigdy nie są przesyłane ani synchronizowane i nie trafiają do naszego dostawcy analityki. Ochronę skupienia można w każdej chwili wyłączyć w aplikacji albo odebrać aplikacji dostęp w Ustawienia → Screen Time → Aplikacje z dostępem do Screen Time.',
    },
    retention: {
      title: 'Przechowywanie, kopie zapasowe i usuwanie',
      items: [
        'Synchronizowane dane są przechowywane tak długo, jak istnieje konto.',
        'Usuń konto (Ustawienia → Konto → Usuń konto) trwale usuwa konto i wszystkie synchronizowane dane z naszej aktywnej bazy danych, cofa zapisaną autoryzację Sign in with Apple aplikacji, prosi RevenueCat o usunięcie rekordu zakupu powiązanego z kontem i usuwa dane tego konta z urządzenia, na którym wykonujesz operację. Lokalne kopie na innych urządzeniach nie mogą już się synchronizować i pozostają tam, dopóki nie usuniesz aplikacji z tych urządzeń lub nie usuniesz ich z ekranu logowania, gdy pojawi się taka opcja.',
        'Nasz dostawca bazy danych przechowuje codzienne kopie zapasowe przez 7 dni. Usunięte dane mogą pozostać w tych kopiach do ich wygaśnięcia; kopie są używane tylko do odzyskiwania po awarii. W tym samym celu możemy też przechowywać zaszyfrowaną cotygodniową kopię zapasową przez maksymalnie 90 dni.',
        'Usunięcie konta nie anuluje subskrypcji App Store; zarządzaj nią lub anuluj ją w ustawieniach Konta Apple. Apple zachowuje własny zapis transakcji App Store.',
        'Wylogowanie niczego nie usuwa. Zmiany, które nie zostały jeszcze zsynchronizowane, pozostają na urządzeniu do czasu ponownego zalogowania na to samo konto.',
        'Rekordy analityczne są obsługiwane przez TelemetryDeck zgodnie z jego zasadami przechowywania i nie służą do przywracania historii skupienia.',
      ],
    },
    export: {
      title: 'Eksport',
      body: 'Ustawienia → Konto → Eksportuj moje dane zapisuje plik JSON z sesjami, celami dziennymi, synchronizowanymi ustawieniami i profilem konta. Dane, które nie zostały jeszcze przeniesione na konto, można też wyeksportować z ekranu logowania.',
    },
    analytics: {
      title: 'Analityka',
      introBeforeLink: 'Korzystamy z',
      introAfterLink:
        ', usługi analitycznej dbającej o prywatność, aby rozumieć sposób używania aplikacji (na przykład rozpoczęte lub ukończone sesje skupienia i przerw, zmiany celu dziennego i ustawień, wyniki uprawnień do powiadomień, zdarzenia przypomnień motywacyjnych oraz ukończenie wdrożenia). Sygnały nie zawierają dowolnego tekstu, imion, adresów email ani treści historii skupienia.',
      identifier:
        'TelemetryDeck identyfikuje instalacje za pomocą zahaszowanego identyfikatora ograniczonego do urządzenia i może dołączać nieosobowe metadane urządzenia, takie jak model, wersja systemu operacyjnego i ustawienia regionalne. Dane te służą wyłącznie do analityki, nie są przez nas łączone z Twoją tożsamością i nie są używane do śledzenia w aplikacjach lub witrynach innych firm.',
      learnMore: 'Dowiedz się więcej:',
      faqLabel: 'Najczęstsze pytania o prywatność TelemetryDeck',
    },
    appStoreUpdates: {
      title: 'Aktualizacje z App Store',
      body: 'Jeśli użyjesz opcji „Sprawdź uaktualnienia” w Ustawieniach, aplikacja może skontaktować się z Apple, aby sprawdzić, czy w App Store jest dostępna nowsza wersja.',
    },
    launchAtLogin: {
      title: 'Otwórz po zalogowaniu (Mac)',
      body: 'Jeśli włączysz Otwórz po zalogowaniu w Ustawieniach na Macu, aplikacja użyje systemowych interfejsów API macOS, aby zarejestrować się jako element logowania. Masz kontrolę nad tą preferencją i możesz ją wyłączyć w dowolnym momencie.',
    },
    notifications: {
      title: 'Powiadomienia i Live Activities (iPhone)',
      body: 'Na iPhonie opcjonalne powiadomienia lokalne, przypomnienia motywacyjne i Live Activities pomagają zobaczyć zakończenie sesji lub łagodnie wrócić do skupienia. Aplikacja prosi o uprawnienie tylko wtedy, gdy zdecydujesz się włączyć te funkcje. Treść powiadomień pozostaje na urządzeniu.',
    },
    whatWeDoNotDo: {
      title: 'Czego nie robimy',
      items: [
        'Brak sieci reklamowych',
        'Brak sprzedaży danych osobowych',
        'Brak dostępu do kontaktów, zdjęć, dokładnej lokalizacji, aparatu lub mikrofonu na potrzeby analityki',
      ],
    },
    children: {
      title: 'Dzieci',
      body: `${PULSE_APP_NAME} nie zbiera świadomie danych osobowych dzieci poza informacjami, których konto potrzebuje do synchronizacji, zgodnie z opisem powyżej. Sygnały analityczne są anonimowe i nie zawierają treści osobistych.`,
    },
    changes: {
      title: 'Zmiany',
      body: 'Jeśli niniejsza polityka ulegnie zmianie, zaktualizowana wersja zostanie opublikowana pod tym adresem URL.',
    },
    contact: {
      title: 'Kontakt',
      body: 'Pytania dotyczące tej polityki:',
    },
  },
}
