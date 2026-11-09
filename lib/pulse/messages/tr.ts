import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const trMessages: PulseMessages = {
  languageLabel: 'Sayfa dili',
  video: {
    ariaLabel: `${PULSE_APP_NAME} ürün tanıtımı`,
    playLabel: 'Tanıtımı oynat',
    unsupported: 'Tarayıcınız gömülü videoyu desteklemiyor.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — iPhone ve Mac için odak zamanlayıcısı`,
    metaDescription: `${PULSE_APP_NAME}, iPhone ve Mac için sakin bir Pomodoro zamanlayıcısıdır; Focus History, Daily Focus Goals, Apple ve Google ile giriş ve cihazlar arasında çevrimdışı öncelikli senkronizasyon sunar.`,
    heroImageAlt: `${PULSE_APP_NAME} odak zamanlayıcısı ve haftalık geçmiş görünümü`,
    backToProjects: 'Projelere dön',
    availableOnAppStore: 'App Store’da mevcut',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'iPhone ve Mac için odak zamanlayıcısı',
    tagline: 'Odaklanmanıza yardımcı olan nazik bir Pomodoro zamanlayıcısı — iPhone’da ve Mac menü çubuğunda.',
    description: `Bir Odak seansı başlatın, mola verin ve geçmişinizi yanınızda taşıyın. Apple veya Google ile giriş yapın; Daily Focus Goals, Focus History ve senkronize tercihler iPhone ile Mac’te hesabınızla kalsın — zamanlayıcı çevrimdışıyken de çalışmaya devam eder.`,
    downloadCta: 'App Store’dan indir',
    watchDemo: 'Nasıl çalıştığını izle',
    supportCta: 'Destek',
    stats: {
      platformLabel: 'Platformlar',
      platformValue: 'iPhone ve Mac',
      languagesLabel: 'Diller',
      languagesValue: '7 dil',
      dataLabel: 'Senkronizasyon',
      dataValue: 'Çevrimdışı öncelikli',
      builtWithLabel: 'Geliştirme',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Daha sakin bir odaklanma yolu',
      title: 'Zamanlayıcınız ihtiyaç duyduğunuzda orada — ihtiyaç duymadığınızda ise kaybolur.',
      description: `Mac’te ${PULSE_APP_NAME} uygulamasını menü çubuğundan açın, bir seans seçin ve açılır pencereyi kapatın. iPhone’da Ana sayfadan Odak’ı başlatın; desteklenen cihazlarda Live Activities ile devam edin. Siz çalışırken zamanlayıcı da çalışmaya devam eder.`,
      caption:
        'Odak ve mola zamanlayıcıları, Daily Focus Goals, Focus History, seri takibi, 7 dilde yerelleştirme ve isteğe bağlı tamamlanma uyarıları.',
    },
    rhythm: {
      eyebrow: 'Kontrol sizde olan bir ritim',
      title: 'Odaklan, duraklat, toparlan, tekrarla.',
      description: `${PULSE_APP_NAME} sıradaki adımı önerir ama hiçbir seansı sizin yerinize başlatmaz. Her süre, gününüze uyacak şekilde ayarlanabilir.`,
    },
    featureShowcases: [
      {
        title: 'Odak',
        badge: '1–120 dk',
        description:
          'Geri sayım siz çalışırken sessizce ilerler. Duraklatın, sıfırlayın veya atlayın — kontrol iPhone ve Mac’te sizde kalır.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} odak seansı çalışıyor; duraklatma kontrolleri ve geri sayım`,
      },
      {
        title: 'Menü çubuğu',
        badge: 'Mac',
        description:
          'Mac’te kalan süreyi menü çubuğunda gösterin veya gizleyin. Sabit genişlikli durum öğesi, açılır pencereyi kaydırmadan yerinde kalır; en fazla 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} geri sayımı macOS menü çubuğunda`,
      },
      {
        title: 'Özelleştirme',
        badge: 'Sizin kurallarınız',
        description:
          'Esnek süreler, Daily Focus Goals, tamamlanma sesleri ve animasyonları, 7 arayüz dili ve görünüm tercihleri.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} süreler, tamamlanma uyarıları, dil ve hedefler için ayarlar`,
      },
    ],
    history: {
      eyebrow: 'Baskısız ilerleme',
      title: 'Çalışmanın biriktiğini görün.',
      description:
        'Toplamları ve serileri incelemek için Focus History’yi açın. Giriş yaptığınızda geçmiş iPhone ve Mac’iniz arasında senkronize olabilir; ilerleme sizi takip eder.',
      items: ['Toplam odak süresi', 'Tamamlanan seans sayısı', 'Güncel seri', 'En iyi seri', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} haftalık odak geçmişi; seans sayıları, odaklanan saatler ve seri`,
    },
    feedback: {
      eyebrow: 'Nazik geri bildirim, sizin tarzınızda',
      title: 'Bitirmeyi ödüllendirici hissettirin.',
      description: `Altı sakin tamamlanma sesi ve altı hayvan kutlaması arasından seçin ya da ikisini de kapatın. ${PULSE_APP_NAME}, Odak, Kısa Mola veya Uzun Mola seansı bittiğinde doğru mesajı gösterir.`,
      items: [
        'Seansa özel tamamlanma başlığı ve alt başlığı',
        'Sistem dili varsayılanıyla 7 dilde arayüz',
        'Her cihazda dil ve görünüm tercihleri',
        'iPhone’da isteğe bağlı bildirimler ve Live Activities',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} süreler, dil, tamamlanma sesleri ve hedefler için ayarlar`,
      celebrationImageAlt: `${PULSE_APP_NAME} seans tamamlandığında tavşan kutlama animasyonu`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Maymun', 'Koala', 'Kedi', 'Tilki', 'Panda', 'Tavşan'],
    },
    native: {
      eyebrow: 'Doğası gereği yerel',
      title: 'Apple cihazlarında evinizde hissettirmek için tasarlandı.',
      description: `SwiftUI, AppKit ve sistem gelenekleri ${PULSE_APP_NAME} uygulamasını hızlı ve tanıdık tutar — baştan sona VoiceOver etiketleri ve Reduce Motion desteğiyle.`,
      features: [
        {
          title: 'Mac menü çubuğu ve iPhone Ana sayfa',
          description: 'Mac’te sessiz bir menü çubuğu arkadaşı, iPhone’da odaklı bir Ana sayfa deneyimi.',
        },
        {
          title: 'Doğru kalır',
          description:
            'Seanslar uyku, uyanma ve yeniden başlatmalar boyunca doğru kalır; geçmiş gerçek bitiş anında kaydedilir.',
        },
        {
          title: 'Çevrimdışı öncelikli senkronizasyon',
          description:
            'Bağlantı olmadan da odaklanmaya devam edin. Çevrimiçi olduğunuzda, giriş yapılmış değişiklikler hesabınıza senkronize edilir.',
        },
        {
          title: 'Sizin dilinizi konuşur',
          description:
            'İngilizce, Türkçe, Almanca, Japonca, Korece, Basitleştirilmiş Çince ve Geleneksel Çince tam arayüz; sistem dili varsayılanı ve Ayarlar’da manuel seçim.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Gizlilik odaklı tasarım',
      title: 'Odaklanmanız size aittir.',
      description: `${PULSE_APP_NAME}, geçmişin cihazlarınız arasında senkronize edilebilmesi için hesap kullanır. Yalnızca senkronizasyonun ihtiyacı olanı saklar, verilerinizi satmaz ve analitiği odak geçmişinizden ayrı tutar.`,
      items: [
        'Apple veya Google ile giriş',
        'Her cihazda çevrimdışı öncelikli odaklanma',
        'Geçmiş ve senkronize tercihler için bulut senkronizasyonu',
        'Reklam ağı yok',
        'Hesabınızı istediğiniz zaman Ayarlar’dan silin',
      ],
    },
    closing: {
      title: 'Odaklı çalışma için yer açın.',
      description: `${PULSE_APP_NAME} uygulamasını iPhone ve Mac için App Store’dan edinin; yardıma ihtiyacınız varsa gizlilik politikasını ve destek sayfasını okuyun.`,
      getSupport: 'Destek al',
      privacy: 'Gizlilik',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Destek`,
    metaDescription: `${PULSE_APP_NAME} için iPhone ve Mac’te destek, SSS ve hesap yardımı — Pomodoro Pro, ücretsiz denemeler, Limited Annual teklifleri, Focus Protection, giriş, senkronizasyon ve hesap silme dahil.`,
    title: `${PULSE_APP_NAME} Destek`,
    intro: `${PULSE_APP_NAME}, iPhone ve Mac için sakin bir Pomodoro zamanlayıcısıdır. Focus History’yi cihazlarınız arasında senkronize etmek için Apple veya Google ile giriş yapın. iPhone’da isteğe bağlı Pomodoro Pro; Focus Protection, özel etiketler, Tag Insights, Stopwatch Mode, Session Notes ve Custom Breaks özelliklerinin kilidini açar.`,
    gettingStarted: {
      title: 'Başlarken',
      items: [
        {
          question: 'Bir Odak seansını nasıl başlatır, duraklatır, sürdürür veya tamamlarım?',
          answer:
            'Mac’te menü çubuğundaki uygulama simgesine tıklayın, Odak, Kısa Mola veya Uzun Mola’yı seçin, ardından Başlat’a basın. iPhone’da uygulamayı açın, bir seans seçin ve Başlat’a basın. Çalışan seans kontrollerinden duraklatın ve sürdürün. Geri sayım bittiğinde seans otomatik tamamlanır; kontrollerden durdurabilir veya atlayabilirsiniz. Zamanlayıcı çalışırken uygulamadan çıkabilirsiniz.',
        },
        {
          question: 'Odak ve Mola zamanlayıcıları nasıl çalışır?',
          answer:
            'Odak derin çalışma içindir. Kısa Mola ve Uzun Mola dinlenme seanslarıdır. Uygulama bitirdikten sonra sıradakini önerebilir ama sonraki seansı sizin yerinize asla otomatik başlatmaz. Odak, Kısa Mola ve Uzun Mola sürelerini ayarlamak veya bir hazır ritim seçip dakikaları ince ayarlamak için Ayarlar’ı açın.',
        },
        {
          question: 'Etiketler ve özel etiketler nasıl çalışır?',
          answer:
            'Seansları ücretsiz yerleşik etiketlerle etiketleyebilirsiniz. iPhone’daki Pomodoro Pro, kendi adlarınız ve renklerinizle özel etiketlerin kilidini açar. Seçtiğiniz etiket seansla birlikte kaydedilir ve hesabınızla senkronize olabilir.',
        },
        {
          question: 'Daily Focus Goals ve seriler nasıl çalışır?',
          answer:
            'Ayarlar’da her gün kaç Odak seansı istediğinizi belirleyin. İlerleme Ana sayfada ve Focus History’de görünür. Seriler, giriş yaptığınızda tamamlanan Odak seanslarının olduğu ardışık günleri takip eder.',
        },
        {
          question: 'Üretkenlik istatistiklerini ve seans geçmişini nasıl görüntülerim?',
          answer:
            'Toplamları, serileri, haftalık ilerlemeyi ve geçmiş seansları incelemek için Focus History / Özet’i açın. Pomodoro Pro, iPhone’da daha zengin Tag Insights ve ek geçmiş filtrelerinin kilidini açar.',
        },
        {
          question: 'Dil ve görünümü nasıl değiştiririm?',
          answer:
            'Ayarlar’da Dil (Sistem veya desteklenen bir dil) ve Görünüm (Sistem, Açık veya Koyu) seçin. Bu tercihler her cihazda kalır ve senkronize edilmez. Desteklenen diller: İngilizce, Türkçe, Almanca, Japonca, Korece, Basitleştirilmiş Çince ve Geleneksel Çince.',
        },
      ],
    },
    accounts: {
      title: 'Hesaplar',
      items: [
        {
          question: 'Neden giriş zorunlu?',
          answer:
            'Bir hesap, Focus History, Daily Focus Goals ve senkronize tercihlerin iPhone ile Mac arasında sizinle kalmasını sağlar. Yeni kurulumlar zamanlayıcıyı kullanmadan önce giriş ister. Eski sürümlerden yükselten cihazlar, siz giriş yapana kadar yerel geçmişi kullanılabilir tutabilir. Pomodoro Pro satın alımları da giriş yaptığınız hesapta kalır.',
        },
        {
          question: 'Apple veya Google ile nasıl giriş yaparım?',
          answer:
            'Giriş ekranında Apple ile Devam Et veya Google ile Devam Et’i seçin ve sağlayıcı akışını tamamlayın. Apple, E-postamı Gizle seçeneği sunabilir.',
        },
        {
          question: 'Nasıl çıkış yaparım?',
          answer:
            'Ayarlar → Hesap → Çıkış yap’ı açın. Bazı değişiklikler henüz senkronize edilmediyse uygulama önce senkronize etmenizi veya yine de çıkış yapmanızı isteyebilir. Çıkış yapmak hesabınızı silmez.',
        },
        {
          question: 'Nasıl yeniden giriş yaparım?',
          answer:
            'Giriş ekranında aynı Apple veya Google yöntemini kullanın. Buluttaki geçmişiniz o hesaba o cihazda geri yüklenir.',
        },
        {
          question: 'Farklı bir hesap kullanırsam ne olur?',
          answer:
            'Her hesabın kendi geçmişi vardır. Başka bir hesaba giriş yapmak ilişkisiz geçmişleri birleştirmez. Zaten yerel seansları olan bir cihazda geçmişi hesaba eklemeyi onaylamadan önce dikkatli seçin.',
        },
        {
          question: 'Apple ve Google’ı aynı hesaba bağlayabilir miyim?',
          answer:
            'Evet. Ayarlar → Hesap’ta, diğer giriş yöntemi başka bir hesap tarafından kullanılmıyorsa bağlayabilirsiniz.',
        },
      ],
    },
    cloudSync: {
      title: 'Bulut senkronizasyonu',
      items: [
        {
          question: 'Cihazlar arasında neler senkronize edilir?',
          answer:
            'Odak ve mola seans geçmişi (seçtiğiniz etiket ve varsa seans notları dahil), oluşturduğunuz etiketler, Daily Focus Goal kayıtları, seriyle ilgili hesap verileri ve seans süreleri, günlük hedef, ses, animasyonlar, tamamlanma sesi ve kutlama hayvanı gibi senkronize tercihler.',
        },
        {
          question: 'İnternet yokken ne olur?',
          answer:
            'Giriş yaptıktan sonra zamanlayıcıyı çevrimdışı kullanmaya devam edebilirsiniz. Yeni seanslar ve değişiklikler bağlantı gelene kadar cihazda kalır.',
        },
        {
          question: 'Yeniden çevrimiçi olduğumda ne olur?',
          answer:
            'Uygulama bekleyen değişiklikleri hesabınızla senkronize eder. Senkronizasyon çevrimdışı önceliklidir ve nihai tutarlılığa dayanır — anlık gerçek zamanlı işbirliği değildir.',
        },
        {
          question: 'Aynı hesabı iPhone ve Mac’te nasıl kullanırım?',
          answer:
            'Uygulamayı her iki cihaza kurun ve aynı Apple veya Google hesabıyla giriş yapın. Geri yükleme bittikten sonra Focus History her ikisinde de görünebilir.',
        },
        {
          question: 'Geçmiş eksikse ne yapmalıyım?',
          answer:
            'Aynı hesaba giriş yaptığınızı doğrulayın, geri yükleme/senkronizasyonun bitmesini bekleyin ve Focus History’yi yeniden kontrol edin. Farklı bir hesaba giriş yaptıysanız o hesap kendi geçmişini gösterir.',
        },
      ],
    },
    migration: {
      title: 'Eski bir sürümden yükseltme',
      items: [
        {
          question: 'Mevcut yerel geçmişime ne olur?',
          answer:
            'Mevcut yerel geçmiş sessizce silinmez. Girişten sonra uygulama, o geçmişi hesabınıza eklemeden önce sorar.',
        },
        {
          question: 'Geçmişimi nasıl sahiplenmeliyim?',
          answer:
            'Geçmişin ait olması gereken hesaba giriş yapın, Geçmişinizi ekleyin ekranını inceleyin, ardından Bu hesaba ekle’yi seçin. Gösterilen hesap yanlışsa farklı bir hesap kullanın. Seanslar daha sonra başka bir hesaba taşınamaz.',
        },
        {
          question: 'Cihaz ve hesap ayarları farklıysa ne olur?',
          answer:
            'Uygulama bu cihazın ayarlarını mı yoksa hesap ayarlarını mı tutacağınızı sorabilir. Dil, görünüm, bildirim tercihleri ve Focus Protection seçimleri cihazda kalır.',
        },
      ],
    },
    notifications: {
      title: 'Bildirimler ve Live Activities',
      items: [
        {
          question: 'iPhone’da bildirimleri nasıl etkinleştiririm?',
          answer:
            'Ayarlar → Bildirimler’i açıp Etkinleştir’i seçin veya izin daha önce reddedildiyse sistem Ayarlar’ını açın. Seans sonu uyarıları için bildirim izni gerekir.',
        },
        {
          question: 'Live Activities nasıl çalışır?',
          answer:
            'Desteklenen iPhone’larda isteğe bağlı bir Live Activity, aktif seansı Kilit Ekranı’nda ve Dynamic Island’da gösterebilir. Live Activities’i Ayarlar’dan açıp kapatabilirsiniz. Live Activities sunucularımızdan anlık bildirim kullanmaz.',
        },
        {
          question: 'Bildirimler kapalıysa ne olur?',
          answer:
            'Bildirim izni olmadan seans sonu uyarıları görünemez. iOS Ayarları’nda açmak için Ayarlar → Bildirimler → Ayarları Aç’ı kullanın.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Ücretsiz ile Pomodoro Pro arasındaki fark nedir?',
          answer:
            'Ücretsiz sürüm Odak ve Mola zamanlayıcılarını, yerleşik etiketleri, Focus History temel özelliklerini, Daily Focus Goals’ı, serileri, girişi ve bulut senkronizasyonunu içerir. iPhone’daki Pomodoro Pro; Focus Protection, özel etiketler, Tag Insights, Stopwatch Mode, Session Notes, Custom Breaks, geçmiş seansları düzenleme veya silme ve daha zengin istatistik filtrelerinin kilidini açar.',
        },
        {
          question: 'Hangi satın alma seçenekleri var?',
          answer:
            'Pomodoro Pro; Aylık abonelik, Yıllık abonelik, uygun olduğunda Limited Annual teklifi veya Lifetime tek seferlik satın alma olarak sunulur. Abonelikler, mevcut dönemin bitiminden en az 24 saat önce iptal etmediğiniz sürece otomatik yenilenir. Lifetime bir kez ücretlendirilir ve abonelik değildir.',
        },
        {
          question: 'Limited Annual teklifi nedir?',
          answer:
            'Limited Annual, daha önce Pro satın almamış uygun kullanıcılar için sınırlı süreyle görünebilen indirimli yıllık bir Pomodoro Pro aboneliğidir. Düzenli Yıllık planla aynı Pro hakkını açar. Kullanılabilirlik süreyle sınırlıdır ve her hesap için garanti edilmez.',
        },
        {
          question: 'Aboneliklere ücretsiz deneme dahil mi?',
          answer:
            'Uygun Aylık veya Yıllık abonelikler ücretsiz deneme içerebilir. Ödeme duvarı, Apple Hesabınız için uygunluk doğrulandığında ücretsiz denemeyi gösterir; deneme süresi onaylamadan önce ödeme duvarında ve App Store satın alma sayfasında görünür. Lifetime deneme içermez. Uygun değilseniz standart fiyatlandırma gösterilir.',
        },
        {
          question: 'Pomodoro Pro’yu nereden satın alır veya görürüm?',
          answer:
            'iPhone’da Ayarlar → Pomodoro Pro’yu açın. Giriş yapmış olmanız gerekir. Pro, giriş yaptığınız her cihazda hesabınızla kalır.',
        },
        {
          question: 'Satın alımları nasıl geri yüklerim?',
          answer:
            'Ödeme duvarında veya Ayarlar → Pomodoro Pro’da Satın Alımları Geri Yükle’yi kullanın. Aynı Apple Hesabıyla yapılan satın alımlar, giriş yaptığınız hesaba taşınır. Hiçbir şey bulunamazsa Pro’yu satın aldığınız Apple Hesabını kullandığınızı doğrulayın ve çevrimiçiyken yeniden deneyin.',
        },
      ],
    },
    purchases: {
      title: 'Abonelikler ve satın alımlar',
      items: [
        {
          question: 'Bir aboneliği nasıl yönetir veya iptal ederim?',
          answer:
            'Abonelikler Apple tarafından faturalandırılır. iPhone’da Ayarlar → Pomodoro Pro → Aboneliği Yönet’i açın veya Ayarlar → [adınız] → Abonelikler’e gidip uygulamayı seçin. Sonraki ücretten kaçınmak için yenilemeden en az 24 saat önce iptal edin. Uygulamayı veya Pomodoro hesabınızı silmek aboneliği iptal etmez.',
        },
        {
          question: 'Nasıl iade talep ederim?',
          answer:
            'İadeler Apple tarafından yürütülür. reportaproblem.apple.com adresini ziyaret edin, satın alımda kullanılan Apple Hesabıyla giriş yapın, işlemi bulun ve iade talebi gönderin. App Store iadelerini biz işleyemeyiz.',
        },
        {
          question: 'Satın alma başarısız olursa veya Pro açılmazsa ne olur?',
          answer:
            'Girişte kalın, ağ bağlantınızı kontrol edin ve yeniden deneyin. Ödeme bekliyorsa (örneğin Satın Almayı Onayla), Pro onaydan sonra açılır. Zaten ödediyseniz Satın Alımları Geri Yükle’yi kullanın. Aktif bir abonelikte ödeme sorunları için App Store ayarlarında ödeme yönteminizi güncelleyin.',
        },
        {
          question: 'Abonelik aktifken Lifetime satın alırsam ne olur?',
          answer:
            'Lifetime, Pro’yu kalıcı olarak açar; ancak mevcut bir abonelik otomatik iptal edilmez. Yeniden ücretlendirilmemek için App Store abonelik ayarlarında otomatik yenilemeyi kapatın.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Focus Protection nedir?',
          answer:
            'Focus Protection, iPhone’da bir Pomodoro Pro özelliğidir. Odak seansı sürerken seçtiğiniz uygulamaları, kategorileri veya web sitelerini engellemek için Apple’ın Screen Time API’lerini kullanır. Molalar asla engellenmez. Seans bittiğinde engellenen uygulamalar otomatik açılır. Engelleme seçimleriniz o iPhone’da kalır; yüklenmez veya senkronize edilmez.',
        },
        {
          question: 'Nasıl kurarım?',
          answer:
            'Pro aktifken Ayarlar → Focus Protection’ı açın. İstendiğinde Screen Time erişimine izin verin, neyin engelleneceğini seçin, ardından Focus Protection’ı açın. Kalkanları uygulamak için bir Odak seansı başlatın.',
        },
        {
          question: 'Nasıl kapatır veya uygulamaların kilidini açarım?',
          answer:
            'Ayarlar’da Focus Protection’ı açıp özelliği kapatın veya bir seans sonrası kalkan ekranındaki kilit açma seçeneklerini kullanın. Uygulamanın Screen Time erişimini tamamen kaldırmak için iOS Ayarları → Ekran Süresi → Ekran Süresi Erişimi Olan Uygulamalar’a gidin.',
        },
        {
          question: 'Focus Protection çalışmıyorsa ne yapmalıyım?',
          answer:
            'Pro’nun aktif olduğunu, Screen Time erişiminin izinli olduğunu ve engellenecek uygulama veya kategoriler seçtiğinizi doğrulayın. Focus Protection yalnızca Odak seanslarında uygulanır, molalarda değil. Erişim sistem Ayarları’nda iptal edildiyse uygulamayı açıp yeniden izin verin. İzin değişikliğinden sonra iPhone’u yeniden başlatmak yardımcı olabilir.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Hesap ve gizlilik',
      items: [
        {
          question: 'Hesabımı nasıl silerim?',
          answer:
            'Giriş yapın, Ayarlar → Hesap → Hesabı sil’i açın, ardından onaylayın. Hesabınız ve senkronize odak geçmişiniz canlı veritabanımızdan kalıcı olarak silinir. Bu işlem geri alınamaz. Silme için ağ bağlantısı gerekir. Hesabınızı silmek App Store aboneliğini iptal etmez — bunu App Store ayarlarından yönetin.',
        },
        {
          question: 'Hesap silme neleri etkiler?',
          answer:
            'O hesabın senkronize bulut verileri kaldırılır, saklanmışsa Sign in with Apple yetkilendirmesi iptal edilir, hesabınıza bağlı satın alma kaydının satın alma sağlayıcımızdan silinmesi istenir ve hesabın verileri sildiğiniz cihazdan kaldırılır. Diğer cihazlardaki yerel kopyalar artık senkronize olamaz; gerekirse uygulamayı kaldırın veya oradan temizleyin. Sağlayıcı yedekleri silinen verileri sınırlı bir kurtarma süresi boyunca tutabilir. Apple kendi App Store işlem kayıtlarını saklar.',
        },
        {
          question: 'Verilerimi nasıl dışa aktarırım?',
          answer:
            'Ayarlar → Hesap → Verilerimi dışa aktar; seanslar, günlük hedef hedefleri, senkronize ayarlar ve hesap profiliyle bir JSON dosyası kaydeder. Sahipsiz yerel veriler giriş ekranından da dışa aktarılabilir.',
        },
        {
          question: 'Gizlilik Politikası nerede?',
          answer:
            'Gizlilik Politikasını ürün web sitesinden açın veya bu sitedeki ürün sayfalarındaki gizlilik bağlantısını kullanın.',
        },
      ],
    },
    requirements: {
      title: 'Gereksinimler',
      body: 'iPhone: iOS 17 veya üzeri. Mac: macOS 14.6 veya üzeri. Pomodoro Pro satın alımları, ücretsiz denemeler, Limited Annual teklifleri ve Focus Protection iPhone’da kullanılabilir.',
    },
    contact: {
      title: 'İletişim',
      body: 'Yardım, geri bildirim veya hata bildirimleri için:',
    },
    privacyPolicyLink: 'Gizlilik Politikası',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Gizlilik Politikası`,
    metaDescription: `${PULSE_APP_NAME} gizlilik politikası; Apple ve Google ile giriş, bulut senkronizasyonu, RevenueCat üzerinden Pomodoro Pro satın alımları, Focus Protection, analitik, hesap silme ve Mac ile iPhone’da gizlilik haklarını kapsar.`,
    title: 'Gizlilik Politikası',
    subtitle: `${PULSE_APP_NAME} — Mac ve iPhone için Pomodoro zamanlayıcısı`,
    lastUpdated: 'Son güncelleme: 9 Kasım 2026',
    summary: {
      title: 'Özet',
      body: `Apple veya Google ile giriş yaptığınızda hesabınız, odak geçmişinizi, günlük hedeflerinizi ve zamanlayıcı ayarlarınızı Mac ile iPhone arasında senkronize tutar. Yalnızca uygulamanın buna ihtiyacı olanı saklarız: e-posta adresiniz, bir hesap tanımlayıcısı ve oluşturduğunuz odak verileri. Bunları asla satmayız, reklam için kullanmayız ve analitik sağlayıcımızla paylaşmayız. iPhone’da Pomodoro Pro satın alırsanız — Aylık, Yıllık, Limited Annual, Lifetime veya uygun bir ücretsiz deneme dahil — satın alma sağlayıcımız RevenueCat, satın alma ve yetki geçmişinizi hesabınıza bağlayarak Pro’nun giriş yaptığınız her cihazda çalışmasını sağlar. Focus Protection uygulama seçimleri iPhone’unuzdan asla çıkmaz. Verilerinizi istediğiniz zaman Ayarlar’dan dışa aktarabilir veya hesabınızı silebilirsiniz. Ayrı olarak uygulama, odak akışlarını iyileştirmemiz için anonim, gizliliği koruyan kullanım analitiği gönderebilir.`,
    },
    localData: {
      title: 'Cihazınızda saklanan veriler',
      body: 'Zamanlayıcı ayarlarınız, seans tercihleriniz ve odak geçmişiniz Mac veya iPhone’unuzda standart sistem depolamasıyla yerel olarak kaydedilir; böylece zamanlayıcı çevrimdışı çalışmaya devam eder. Bir cihazda giriş yapılmış her hesabın kendi ayrı yerel deposu vardır. Giriş oturumunuz sistem Anahtar Zinciri’nde tutulur. Dil, görünüm, Açılışta Başlat, bildirim tercihleri, Live Activity tercihleri ve Focus Protection seçimleri her cihazda kalır ve senkronize edilmez. Odak geçmişi içeriğinin kendisi analitik sağlayıcımıza yüklenmez.',
      migrationSafety:
        'Zaten odak geçmişi olan bir cihazda ilk kez giriş yaptığınızda uygulama, o geçmişi hesabınıza taşımadan önce sorar. Taşıma sunucularımızda onaylanana kadar, artı 90 gün boyunca uygulama önceki yerel kopyayı ve cihazdaki yerel bir yedek dosyayı güvenlik ağı olarak tutar, ardından bunları otomatik kaldırır.',
    },
    accountAndSync: {
      title: 'Hesabınız ve senkronize veriler',
      intro: 'Giriş yaparsanız şunları işleriz:',
      items: [
        'İletişim bilgisi: Sign in with Apple (Hide My Email ile özel yönlendirme adresi olabilir) veya Google tarafından paylaşılan e-posta adresi. Adınızı istemeyiz.',
        'Tanımlayıcılar: girişte oluşturulan bir hesap kimliği ve her kurulum için rastgele bir kimlik; yalnızca senkronizasyon ve hangi cihazın değişiklik yaptığını belirlemek için kullanılır.',
        'Odak verileri: tamamlanan ve silinen odak ile mola seansları (saatler, süreler, yerel gün ve saat dilimi, seçtiğiniz etiket ve varsa seans notları), oluşturduğunuz etiketler (ad ve renk), günlük hedef hedefleri, en iyi seriniz ve senkronize ayarlar (seans süreleri, günlük hedef, ses, animasyonlar, tamamlanma sesi, kutlama hayvanı).',
      ],
      closing:
        'Bu veriler yalnızca senkronizasyon, geçmiş ve hesap özelliklerini sağlamak için kullanılır. Hesabınıza bağlıdır, izleme için kullanılmaz ve aşağıdaki işleyiciler dışında üçüncü taraflarla paylaşılmaz.',
    },
    processors: {
      title: 'İşleyiciler ve depolama konumu',
      bodyBeforeSupabase: 'Hesap ve senkronizasyon verileri',
      bodyAfterSupabase:
        'ile (veritabanı ve kimlik doğrulama) Avrupa Birliği’nde saklanır. Giriş şu sağlayıcılar tarafından yönetilir:',
      orWord: 'veya',
      bodyAfterProviders:
        ', seçtiğiniz seçeneğe bağlı olarak. Pomodoro Pro satın alımları ve yetkileri',
      bodyAfterRevenueCat:
        'ile yönetilir (aşağıdaki Satın Alımlar bölümüne bakın). Veriler aktarım sırasında şifrelenir ve erişim, her hesabın yalnızca kendi verilerini okuyabileceği şekilde kısıtlanır.',
    },
    purchases: {
      title: 'Satın alımlar (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro, App Store üzerinden Aylık, Yıllık, Limited Annual (sunulduğunda) ve Lifetime ürünleri olarak satılır; uygun abonelikler satın almadan önce gösterilen bir ücretsiz deneme içerebilir. Ödemeyi Apple yönetir; ödeme kartı bilgilerinizi asla görmeyiz. Pro’yu giriş yaptığınız her cihazda açmak için uygulama hesap kimliğinizi',
      bodyAfterRevenueCat:
        'ile paylaşır; bu sağlayıcı satın alma ve yetki geçmişinizi (satın alınan ürünler, satın alma ve yenileme tarihleri, deneme veya abonelik durumu ve lifetime kilidi açma) o kimliğe bağlar. Bu veriler yalnızca Pro erişimini vermek ve geri yüklemek için kullanılır, izleme için kullanılmaz ve analitik sağlayıcımızla paylaşılmaz. Pro için giriş yapılmış bir hesap gerekir; giriş yapmadan önce RevenueCat’e hiçbir şey gönderilmez.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection, bir odak seansı sürerken seçtiğiniz uygulamaları, kategorileri ve web sitelerini engellemek için Apple’ın Screen Time çerçevelerini (Family Controls, Managed Settings ve Device Activity dahil) kullanır. Apple uygulamaya seçimleriniz için yalnızca opak belirteçler verir: hangi uygulamaları veya web sitelerini seçtiğinizi, bunları nasıl kullandığınızı veya başka herhangi bir Screen Time kullanım bilgisini göremeyiz. Seçimleriniz o iPhone’da kalır, sunucularımıza asla yüklenmez veya senkronize edilmez ve analitik sağlayıcımıza gönderilmez. Screen Time verisi toplamayız veya satmayız. Focus Protection’ı uygulamada istediğiniz zaman kapatabilir veya erişimi Ayarlar → Ekran Süresi → Ekran Süresi Erişimi Olan Uygulamalar’dan kaldırabilirsiniz.',
    },
    retention: {
      title: 'Saklama, yedekler ve silme',
      items: [
        'Senkronize verileriniz hesabınız var olduğu sürece tutulur.',
        'Hesabı sil (Ayarlar → Hesap → Hesabı sil), hesabınızı ve tüm senkronize verileri canlı veritabanımızdan kalıcı olarak siler; saklanmışsa uygulamanın Sign in with Apple yetkilendirmesini iptal eder; RevenueCat’ten hesabınıza bağlı satın alma kaydını silmesini ister ve o hesabın verilerini sildiğiniz cihazdan kaldırır. Diğer cihazlarınızdaki yerel kopyalar artık senkronize olamaz ve o cihazlarda uygulamayı silene veya giriş ekranı sunduğunda kaldırana kadar orada kalır.',
        'Veritabanı sağlayıcımız 7 gün boyunca günlük yedek tutar. Silinen veriler bu yedeklerde süreleri dolana kadar kalabilir; yedekler yalnızca felaket kurtarma için kullanılır. Aynı amaçla şifreli haftalık bir yedeği 90 güne kadar tutabiliriz.',
        'Hesabınızı silmek App Store aboneliğini iptal etmez; bunu Apple Hesabı ayarlarınızdan yönetin veya iptal edin. Apple kendi App Store işlem kaydını tutar.',
        'Çıkış yapmak hiçbir şeyi silmez. Henüz senkronize edilmemiş değişiklikler, aynı hesap yeniden giriş yapana kadar cihazda kalır.',
        'Analitik kayıtları TelemetryDeck tarafından kendi saklama uygulamalarına göre işlenir ve odak geçmişinizi geri yüklemek için kullanılmaz.',
      ],
    },
    export: {
      title: 'Dışa aktarma',
      body: 'Ayarlar → Hesap → Verilerimi dışa aktar; seanslarınız, günlük hedef hedefleriniz, senkronize ayarlarınız ve hesap profilinizle bir JSON dosyası kaydeder. Henüz bir hesaba taşınmamış veriler giriş ekranından da dışa aktarılabilir.',
    },
    analytics: {
      title: 'Analitik',
      introBeforeLink: 'Uygulamanın nasıl kullanıldığını anlamak için',
      introAfterLink:
        ' adlı gizlilik odaklı bir analitik hizmetini kullanırız (örneğin: başlatılan veya tamamlanan odak ya da mola seansları, geçmişin açılması, ayar değişiklikleri, bildirim izni sonuçları, tanıtım tamamlanması ve seçili inceleme veya geçiş tanılama sinyalleri). Sinyaller serbest metin, ad, e-posta, seans notları veya odak geçmişi içeriği içermez.',
      identifier:
        'TelemetryDeck kurulumları karmalanmış cihaz kapsamlı bir tanımlayıcıyla tanımlar ve kişisel olmayan cihaz meta verilerini (model, işletim sistemi sürümü ve yerel ayar gibi) ekleyebilir. Bu veriler yalnızca analitik için kullanılır, kimliğinize bizim tarafımızdan bağlanmaz ve diğer şirketlerin uygulamaları veya web siteleri arasında izleme için kullanılmaz.',
      learnMore: 'Daha fazla bilgi:',
      faqLabel: 'TelemetryDeck Gizlilik SSS',
    },
    appStoreUpdates: {
      title: 'App Store güncellemeleri',
      body: 'Ayarlar’da “Güncellemeleri Denetle”yi kullanırsanız uygulama, App Store’da daha yeni bir sürüm olup olmadığını görmek için Apple ile iletişim kurabilir.',
    },
    launchAtLogin: {
      title: 'Açılışta Başlat (Mac)',
      body: 'Mac’te Ayarlar’da Açılışta Başlat’ı etkinleştirirseniz uygulama, giriş öğesi olarak kaydolmak için macOS sistem API’lerini kullanır. Bu tercih sizin kontrolünüzdedir ve istediğiniz zaman kapatılabilir.',
    },
    notifications: {
      title: 'Bildirimler ve Live Activities (iPhone)',
      body: 'iPhone’da isteğe bağlı yerel bildirimler ve Live Activities, bir seansın bittiğini görmenize veya aktif seansı Kilit Ekranı’nda ve Dynamic Island’da görünür tutmanıza yardımcı olur. İzin, ilgili özellikleri etkinleştirmeyi seçtiğinizde istenir. Bildirim ve Live Activity içeriği cihazınızda kalır ve sunucularımıza gönderilmez.',
    },
    whatWeDoNotDo: {
      title: 'Yapmadıklarımız',
      items: [
        'Reklam ağı yok',
        'Kişisel bilgilerin satışı yok',
        'Analitik için kişilerinize, fotoğraflarınıza, kesin konumunuza, kameranıza veya mikrofonunuza erişim yok',
        'Cihazınızdaki Focus Protection için Apple’ın sağladığı opak belirteçlerin ötesinde Screen Time kullanım ayrıntılarının toplanması veya yüklenmesi yok',
      ],
    },
    children: {
      title: 'Çocuklar',
      body: `${PULSE_APP_NAME}, yukarıda açıklandığı gibi bir hesabın senkronizasyon için ihtiyacı olanın ötesinde çocuklardan bilerek kişisel bilgi toplamaz. Analitik sinyalleri anonimdir ve kişisel içerik içermez.`,
    },
    privacyRights: {
      title: 'Gizlilik haklarınız (GDPR ve KVKK dahil)',
      intro:
        'Yaşadığınız yere bağlı olarak AB/Birleşik Krallık Genel Veri Koruma Tüzüğü (GDPR), Türkiye’nin Kişisel Verilerin Korunması Kanunu (KVKK) ve benzer yasalar kapsamında haklarınız olabilir. Geçerli hukuka tabi olarak bunlar şunları içerebilir:',
      items: [
        'Hesabınız hakkında tuttuğumuz kişisel verilere erişim talep etme',
        'Yanlış kişisel verilerin düzeltilmesini talep etme',
        'Verilerinizi uygulamadan dışa aktarma (Ayarlar → Hesap → Verilerimi dışa aktar)',
        'Hesabınızı ve senkronize verilerinizi silme (Ayarlar → Hesap → Hesabı sil) veya silme konusunda bizden yardım isteme',
        'Yasanın bu hakkı tanıdığı durumlarda belirli işlemlere itiraz etme veya bunları kısıtlama',
        'Yerel veri koruma otoritesine şikayette bulunma',
      ],
      closing:
        'Hesap ve senkronizasyon verileri, işleyicimiz Supabase ile Avrupa Birliği’nde saklanır. Bu hakları kullanmak için mevcut olduğunda uygulama içi kontrolleri kullanın veya aşağıdaki e-posta adresinden bize ulaşın. Doğrulanmış taleplere geçerli hukukun gerektirdiği şekilde yanıt veririz. Kişisel veri satmayız.',
    },
    changes: {
      title: 'Değişiklikler',
      body: 'Bu politika değişirse güncellenmiş sürüm, yeni bir “Son güncelleme” tarihiyle bu URL’de yayımlanır.',
    },
    contact: {
      title: 'İletişim',
      body: 'Bu politika veya gizlilik haklarıyla ilgili sorular:',
    },
  },
}
