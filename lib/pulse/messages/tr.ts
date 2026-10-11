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
      languagesValue: '12 dil',
      dataLabel: 'Senkronizasyon',
      dataValue: 'Çevrimdışı öncelikli',
      builtWithLabel: 'Teknoloji',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Daha sessiz bir odaklanma',
      title: 'Zamanlayıcınız ihtiyaç duyduğunuzda orada—gerekmediğinde kaybolur.',
      description: `Mac’te ${PULSE_APP_NAME}’ı menü çubuğundan açın, bir seans seçin ve popover’ı kapatın. iPhone’da Ana ekrandan Odak’ı başlatın; desteklenen cihazlarda Live Activities ile devam edin. Siz işinize bakarken zamanlayıcı çalışmaya devam eder.`,
      caption:
        'Odak ve mola zamanlayıcıları, Daily Focus Goals, Focus History, seri takibi, 12 dil yerelleştirmesi ve isteğe bağlı tamamlanma uyarıları.',
    },
    rhythm: {
      eyebrow: 'Kontrol sizde olan bir ritim',
      title: 'Odaklan, duraklat, toparlan, tekrarla.',
      description: `${PULSE_APP_NAME} sıradaki adımı önerir ama sizin yerinize seans başlatmaz. Her süre gününüze uyacak şekilde ayarlanabilir.`,
    },
    featureShowcases: [
      {
        title: 'Odak',
        badge: '1–120 dk',
        description:
          'Geri sayım siz çalışırken sessizce ilerler. Duraklatın, sıfırlayın veya atlayın — iPhone ve Mac’te kontrol sizde.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} odak seansı; duraklatma kontrolleri ve geri sayım`,
      },
      {
        title: 'Menü çubuğu',
        badge: 'Mac',
        description:
          'Mac’te kalan süreyi menü çubuğunda gösterin veya gizleyin. Sabit genişlikli durum öğesi popover’ı kaydırmadan, 120:00’a kadar yerinde kalır.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} geri sayımının macOS menü çubuğunda görünümü`,
      },
      {
        title: 'Özelleştirme',
        badge: 'Sizin kurallarınız',
        description:
          'Esnek süreler, Daily Focus Goals, tamamlanma sesleri ve animasyonları, 12 arayüz dili ve görünüm tercihleri.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} süre, tamamlanma uyarıları, dil ve hedef ayarları`,
      },
    ],
    history: {
      eyebrow: 'Baskısız ilerleme',
      title: 'İşin biriktiğini görün.',
      description:
        'Toplamları ve serileri görmek için Focus History’i açın. Giriş yaptıysanız geçmiş iPhone ve Mac arasında senkronize olabilir; ilerleme sizinle gelir.',
      items: ['Toplam odak süresi', 'Tamamlanan seans sayısı', 'Mevcut seri', 'En iyi seri', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} haftalık odak geçmişi; seans sayıları, odak saatleri ve seri`,
    },
    feedback: {
      eyebrow: 'Nazik geri bildirim, sizin tarzınızda',
      title: 'Bitirmeyi ödüllendirici kılın.',
      description: `Altı sakin tamamlanma sesi ve altı hayvan kutlaması arasından seçin ya da ikisini de kapatın. ${PULSE_APP_NAME}, Odak, Kısa Mola veya Uzun Mola bittiğinde seansa uygun mesajı gösterir.`,
      items: [
        'Seansa göre tamamlanma başlığı ve alt başlığı',
        'Sistem dili varsayılanıyla 12 dilde arayüz',
        'Her cihazda dil ve görünüm tercihleri',
        'iPhone’da isteğe bağlı motivasyon hatırlatıcıları',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} süre, dil, tamamlanma sesleri ve hedef ayarları`,
      celebrationImageAlt: `${PULSE_APP_NAME} seans tamamlandığında tavşan kutlama animasyonu`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Maymun', 'Koala', 'Kedi', 'Tilki', 'Panda', 'Tavşan'],
    },
    native: {
      eyebrow: 'Tasarım gereği native',
      title: 'Apple cihazlarında evinde hissettirmek için tasarlandı.',
      description: `SwiftUI, AppKit ve sistem alışkanlıkları ${PULSE_APP_NAME}’ı hızlı ve tanıdık tutar — VoiceOver etiketleri ve Reduce Motion desteğiyle birlikte.`,
      features: [
        {
          title: 'Mac menü çubuğu ve iPhone Ana ekran',
          description: 'Mac’te sessiz bir menü çubuğu yardımcısı, iPhone’da odaklanmış bir Ana ekran deneyimi.',
        },
        {
          title: 'Doğru kalır',
          description:
            'Seanslar uyku, uyanma ve yeniden başlatmalarda doğru kalır; geçmiş gerçek bitiş zamanına göre kaydedilir.',
        },
        {
          title: 'Çevrimdışı öncelikli senkronizasyon',
          description:
            'Bağlantı olmadan odaklanmaya devam edin. Çevrimiçi olduğunuzda, giriş yapmış değişiklikler hesabınızla senkronize olur.',
        },
        {
          title: 'Dilinizi konuşur',
          description:
            '12 dilde tam arayüz; sistem dili varsayılanı ve Ayarlar’da manuel seçim.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Gizlilik odaklı tasarım',
      title: 'Odağınız size ait kalır.',
      description: `${PULSE_APP_NAME} geçmişin cihazlar arasında senkronize olması için bir hesap kullanır. Yalnızca senkronizasyonun gerektirdiği verileri saklarız; verilerinizi satmayız ve analitiği odak geçmişinizden ayrı tutarız.`,
      items: [
        'Apple veya Google ile giriş',
        'Her cihazda çevrimdışı öncelikli odak',
        'Geçmiş ve senkronize tercihler için bulut senkronizasyonu',
        'Reklam ağı yok',
        'Hesabınızı istediğiniz zaman Ayarlar’dan silin',
      ],
    },
    closing: {
      title: 'Odaklı çalışmaya yer açın.',
      description: `${PULSE_APP_NAME}’ı iPhone ve Mac için App Store’dan edinin; yardıma ihtiyacınız olursa gizlilik politikası ve destek sayfasına bakın.`,
      getSupport: 'Destek al',
      privacy: 'Gizlilik',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Destek`,
    metaDescription: `iPhone ve Mac’te ${PULSE_APP_NAME} için destek, SSS ve hesap yardımı — giriş, senkronizasyon, geçiş ve hesap silme dahil.`,
    title: `${PULSE_APP_NAME} Destek`,
    intro: `${PULSE_APP_NAME}, iPhone ve Mac için sakin bir Pomodoro zamanlayıcısıdır. Focus History’yi cihazlar arasında senkronize etmek için Apple veya Google ile giriş yapın.`,
    gettingStarted: {
      title: 'Başlarken',
      items: [
        {
          question: 'Odak seansına nasıl başlarım?',
          answer:
            'Mac’te menü çubuğundaki uygulama simgesine tıklayın, Odak, Kısa Mola veya Uzun Mola seçin, ardından Başlat’a basın. iPhone’da uygulamayı açın, Ana ekranda bir seans seçin ve Başlat’a basın. Zamanlayıcı çalışırken uygulamadan çıkabilirsiniz.',
        },
        {
          question: 'Odak ve mola sürelerini nasıl değiştiririm?',
          answer:
            'Ayarlar’ı açın ve Odak, Kısa Mola ve Uzun Mola sürelerini ayarlayın. Bir hazır ritim de seçebilir, ardından dakikaları ince ayar yapabilirsiniz.',
        },
        {
          question: 'Daily Focus Goals nasıl yapılandırılır?',
          answer:
            'Ayarlar’da her gün kaç Odak seansı istediğinizi belirleyin. İlerleme Ana ekranda ve Focus History’de görünür.',
        },
        {
          question: 'Focus History’yi nasıl görüntülerim?',
          answer:
            'Uygulamadan Focus History’i açın (Mac’te popover veya durum menüsünden). Toplamları, serileri ve haftalık ilerlemeyi görürsünüz.',
        },
        {
          question: 'Dil ve görünümü nasıl değiştiririm?',
          answer:
            'Ayarlar’da Dil (Sistem veya desteklenen bir dil) ve Görünüm (Sistem, Açık veya Koyu) seçin. Bu tercihler her cihazda kalır ve senkronize edilmez.',
        },
      ],
    },
    accounts: {
      title: 'Hesaplar',
      items: [
        {
          question: 'Giriş neden gerekli?',
          answer:
            'Bir hesap, Focus History, Daily Focus Goals ve senkronize tercihlerin iPhone ile Mac arasında sizinle kalmasını sağlar. Yeni kurulumlar zamanlayıcıyı kullanmadan önce giriş yapmanızı ister. Eski sürümlerden yükselen cihazlar, giriş yapana kadar yerel geçmişi kullanılabilir tutabilir.',
        },
        {
          question: 'Apple veya Google ile nasıl giriş yaparım?',
          answer:
            'Giriş ekranında Apple ile devam et veya Google ile devam et seçeneğini seçin ve sağlayıcı akışını tamamlayın. Apple, Hide My Email sunabilir.',
        },
        {
          question: 'Nasıl çıkış yaparım?',
          answer:
            'Ayarlar → Hesap → Çıkış yap’ı açın. Henüz senkronize olmamış değişiklikler varsa uygulama önce senkronize etmenizi veya yine de çıkış yapmanızı isteyebilir. Çıkış yapmak hesabınızı silmez.',
        },
        {
          question: 'Tekrar nasıl giriş yaparım?',
          answer:
            'Giriş ekranında aynı Apple veya Google yöntemini kullanın. Bulut geçmişiniz o hesap için cihaza geri yüklenir.',
        },
        {
          question: 'Farklı bir hesap kullanırsam ne olur?',
          answer:
            'Her hesabın kendi geçmişi vardır. Başka bir hesapla giriş yapmak ilgisiz geçmişleri birleştirmez. Yerel seansları olan bir cihazda geçmiş talebini onaylamadan önce dikkatli seçin.',
        },
        {
          question: 'Apple ve Google’ı aynı hesaba bağlayabilir miyim?',
          answer:
            'Evet. Ayarlar → Hesap bölümünde, diğer yöntem farklı bir hesapta kullanılmıyorsa diğer giriş yöntemini bağlayabilirsiniz.',
        },
      ],
    },
    cloudSync: {
      title: 'Bulut senkronizasyonu',
      items: [
        {
          question: 'Cihazlar arasında ne senkronize olur?',
          answer:
            'Odak ve mola seans geçmişi, Daily Focus Goal kayıtları, seriyle ilgili hesap verileri ve seans süreleri, günlük hedef, ses, animasyonlar, tamamlanma sesi ve kutlama hayvanı gibi senkronize tercihler.',
        },
        {
          question: 'İnternet olmadan ne olur?',
          answer:
            'Giriş yaptıktan sonra zamanlayıcıyı çevrimdışı kullanmaya devam edebilirsiniz. Yeni seanslar ve değişiklikler bağlantı olana kadar cihazda kalır.',
        },
        {
          question: 'Tekrar çevrimiçi olduğumda ne olur?',
          answer:
            'Uygulama bekleyen değişiklikleri hesabınızla senkronize eder. Senkronizasyon çevrimdışı önceliklidir ve sonunda tutarlıdır — anlık gerçek zamanlı iş birliği değildir.',
        },
        {
          question: 'Aynı hesabı iPhone ve Mac’te nasıl kullanırım?',
          answer:
            'Uygulamayı her iki cihaza kurun ve aynı Apple veya Google hesabıyla giriş yapın. Geri yükleme bittikten sonra Focus History her ikisinde de görünebilir.',
        },
        {
          question: 'Geçmiş eksikse ne yapmalıyım?',
          answer:
            'Aynı hesapla giriş yaptığınızdan emin olun, geri yükleme/senkronizasyonun bitmesini bekleyin ve Focus History’yi tekrar kontrol edin. Farklı bir hesapla giriş yaptıysanız o hesabın kendi geçmişi gösterilir.',
        },
      ],
    },
    migration: {
      title: 'Eski sürümden yükseltme',
      items: [
        {
          question: 'Mevcut yerel geçmişime ne olur?',
          answer:
            'Mevcut yerel geçmiş sessizce silinmez. Giriş yaptıktan sonra uygulama, o geçmişi hesabınıza eklemeden önce sorar.',
        },
        {
          question: 'Geçmişimi nasıl talep etmeliyim?',
          answer:
            'Geçmişin sahibi olması gereken hesapla giriş yapın, Geçmişinizi ekleyin ekranını inceleyin, ardından Bu hesaba ekle’yi seçin. Gösterilen hesap yanlışsa farklı bir hesap kullanın. Seanslar daha sonra başka bir hesaba taşınamaz.',
        },
        {
          question: 'Cihaz ve hesap ayarları farklıysa ne olur?',
          answer:
            'Uygulama bu cihazın ayarlarını mı yoksa hesap ayarlarını mı kullanacağınızı sorabilir. Dil, görünüm, bildirimler ve motivasyon hatırlatıcıları cihaza özel kalır.',
        },
      ],
    },
    notifications: {
      title: 'Bildirimler',
      items: [
        {
          question: 'iPhone’da bildirimleri nasıl etkinleştiririm?',
          answer:
            'Ayarlar → Bildirimler’i açın ve Etkinleştir’i seçin veya izin daha önce reddedildiyse sistem Ayarlar’ını açın.',
        },
        {
          question: 'Motivasyon hatırlatıcıları nasıl çalışır?',
          answer:
            'iPhone’da Ayarlar → Motivasyon hatırlatıcıları’nı açın ve bildirimlere izin verildikten sonra açın. Duraklatabilir veya sessiz saatler ayarlayabilirsiniz. İsteğe bağlıdır ve varsayılan olarak kapalıdır.',
        },
        {
          question: 'Bildirimler kapalıysa ne olur?',
          answer:
            'Seans bitiş uyarıları ve motivasyon hatırlatıcıları bildirim izni gerektirir. Ayarlar → Bildirimler → Ayarları aç yolunu kullanarak iOS Ayarlar’ında açın.',
        },
        {
          question: 'Live Activities nasıl çalışır?',
          answer:
            'Desteklenen iPhone’larda isteğe bağlı bir Live Activity, Kilit Ekranı ve Dynamic Island’da etkin seansı gösterebilir. İlgili özellikleri etkinleştirdiğinizde izin istenir.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Hesap ve gizlilik',
      items: [
        {
          question: 'Hesabımı nasıl silerim?',
          answer:
            'Giriş yapın, Ayarlar → Hesap → Hesabı sil’i açın ve onaylayın. Hesabınız ve senkronize odak geçmişiniz canlı veritabanımızdan kalıcı olarak silinir. Bu geri alınamaz. Silme işlemi ağ bağlantısı gerektirir.',
        },
        {
          question: 'Hesap silme neleri etkiler?',
          answer:
            'Bu hesaba ait senkronize bulut verileri kaldırılır, saklanıyorsa Sign in with Apple yetkisi iptal edilir ve hesabın verileri sildiğiniz cihazdan kaldırılır. Diğer cihazlardaki yerel kopyalar artık senkronize olamaz; gerekirse uygulamayı kaldırın veya orada temizleyin. Sağlayıcı yedekleri silinen verileri sınırlı bir kurtarma süresi boyunca tutabilir.',
        },
        {
          question: 'Verilerimi nasıl dışa aktarırım?',
          answer:
            'Ayarlar → Hesap → Verilerimi dışa aktar, seanslar, günlük hedefler, senkronize ayarlar ve hesap profili içeren bir JSON dosyası kaydeder. Talep edilmemiş yerel veriler giriş ekranından da dışa aktarılabilir.',
        },
        {
          question: 'Gizlilik Politikası nerede?',
          answer:
            'Gizlilik Politikası’na ürün web sitesinden erişin veya bu sitenin ürün sayfalarındaki gizlilik bağlantısını kullanın.',
        },
      ],
    },
    requirements: {
      title: 'Gereksinimler',
      body: 'iPhone: iOS 17 veya üzeri. Mac: macOS 14.6 veya üzeri.',
    },
    contact: {
      title: 'İletişim',
      body: 'Yardım, geri bildirim veya hata bildirimi için:',
    },
    privacyPolicyLink: 'Gizlilik Politikası',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Gizlilik Politikası`,
    metaDescription: `${PULSE_APP_NAME} gizlilik politikası; Mac ve iPhone’da Apple ve Google ile giriş, bulut senkronizasyonu, yerel depolama, analitik ve hesap silme.`,
    title: 'Gizlilik Politikası',
    subtitle: `${PULSE_APP_NAME} — Mac ve iPhone için Pomodoro zamanlayıcısı`,
    lastUpdated: 'Son güncelleme: 11 Ekim 2026',
    summary: {
      title: 'Özet',
      body: `Apple veya Google ile giriş yaptığınızda hesabınız odak geçmişinizi, günlük hedeflerinizi ve zamanlayıcı ayarlarınızı Mac ile iPhone arasında senkronize tutar. Bunun için yalnızca uygulamanın ihtiyaç duyduğu verileri saklarız: e-posta adresiniz, bir hesap tanımlayıcısı ve oluşturduğunuz odak verileri. Verilerinizi asla satmayız, reklam için kullanmayız ve analitik sağlayıcımızla paylaşmayız. Verilerinizi Ayarlar’dan istediğiniz zaman dışa aktarabilir veya hesabınızı silebilirsiniz. Ayrıca uygulama, odak akışlarını iyileştirebilmemiz için anonim, gizliliği koruyan kullanım analitiği gönderebilir.`,
    },
    localData: {
      title: 'Cihazınızda saklanan veriler',
      body: 'Zamanlayıcı ayarlarınız, seans tercihleriniz ve odak geçmişiniz, zamanlayıcının çevrimdışı çalışmaya devam etmesi için standart sistem depolaması kullanılarak Mac veya iPhone’unuzda yerel olarak kaydedilir. Bir cihazda oturum açmış her hesabın ayrı yerel deposu vardır. Giriş oturumunuz sistem Anahtar Zinciri’nde tutulur. Dil, görünüm, Oturum Açılışında Başlat, bildirim ve motivasyon hatırlatıcı ayarları her cihazda kalır ve senkronize edilmez. Odak geçmişi içeriğinin kendisi analitik sağlayıcımıza yüklenmez.',
      migrationSafety:
        'Zaten odak geçmişi olan bir cihazda ilk kez giriş yaptığınızda uygulama, o geçmişi hesabınıza taşımadan önce sorar. Taşıma sunucularımızda onaylanana kadar, artı 90 gün boyunca uygulama önceki yerel kopyayı ve cihazda yerel bir yedek dosyasını güvenlik ağı olarak tutar, ardından bunları otomatik kaldırır.',
    },
    accountAndSync: {
      title: 'Hesabınız ve senkronize veriler',
      intro: 'Giriş yaparsanız şunları işleriz:',
      items: [
        'İletişim bilgisi: Sign in with Apple (Hide My Email ile özel aktarma adresi olabilir) veya Google tarafından paylaşılan e-posta adresi. Adınızı istemeyiz.',
        'Tanımlayıcılar: girişte oluşturulan bir hesap kimliği ve yalnızca senkronizasyon ile hangi cihazın değişiklik yaptığını belirlemek için kullanılan her kurulum için rastgele bir kimlik.',
        'Odak verileri: tamamlanan ve silinen odak ve mola seansları (zamanlar, süreler, yerel gün ve saat dilimi), günlük hedefler, en iyi seriniz ve senkronize ayarlar (seans süreleri, günlük hedef, ses, animasyonlar, tamamlanma sesi, kutlama hayvanı).',
      ],
      closing:
        'Bu veriler yalnızca senkronizasyon, geçmiş ve hesap özelliklerini sağlamak için kullanılır. Hesabınıza bağlıdır, izleme için kullanılmaz ve aşağıdaki işleyiciler dışında üçüncü taraflarla paylaşılmaz.',
    },
    processors: {
      title: 'İşleyiciler ve depolama konumu',
      bodyBeforeSupabase: 'Hesap ve senkronizasyon verileri',
      bodyAfterSupabase:
        ' (veritabanı ve kimlik doğrulama) ile Avrupa Birliği’nde saklanır. Giriş, seçtiğiniz seçeneğe bağlı olarak',
      orWord: 'veya',
      bodyAfterProviders:
        ' tarafından yönetilir. Veriler aktarım sırasında şifrelenir ve erişim, her hesabın yalnızca kendi verisini okuyabilmesi için kısıtlanır.',
    },
    retention: {
      title: 'Saklama, yedekler ve silme',
      items: [
        'Senkronize verileriniz hesabınız var olduğu sürece saklanır.',
        'Hesabı sil (Ayarlar → Hesap → Hesabı sil), hesabınızı ve tüm senkronize verileri canlı veritabanımızdan kalıcı olarak siler, saklanıyorsa uygulamanın Sign in with Apple yetkisini iptal eder ve hesabın verilerini sildiğiniz cihazdan kaldırır. Diğer cihazlardaki yerel kopyalar artık senkronize olamaz; o cihazlarda uygulamayı silene veya giriş ekranı sunulduğunda kaldırana kadar orada kalır.',
        'Veritabanı sağlayıcımız günlük yedekleri 7 gün tutar. Silinen veriler bu yedeklerde süre dolana kadar kalabilir; yedekler yalnızca felaket kurtarması içindir. Aynı amaçla 90 güne kadar şifreli haftalık bir yedek de tutabiliriz.',
        'Çıkış yapmak hiçbir şeyi silmez. Henüz senkronize olmamış değişiklikler, aynı hesap tekrar giriş yapana kadar cihazda kalır.',
        'Analitik kayıtları TelemetryDeck tarafından kendi saklama uygulamalarına göre işlenir ve odak geçmişinizi geri yüklemek için kullanılmaz.',
      ],
    },
    export: {
      title: 'Dışa aktarma',
      body: 'Ayarlar → Hesap → Verilerimi dışa aktar, seanslarınız, günlük hedefleriniz, senkronize ayarlarınız ve hesap profilinizle bir JSON dosyası kaydeder. Henüz bir hesaba taşınmamış veriler giriş ekranından da dışa aktarılabilir.',
    },
    analytics: {
      title: 'Analitik',
      introBeforeLink: 'Uygulamanın nasıl kullanıldığını anlamak için gizlilik odaklı bir analitik hizmeti olan',
      introAfterLink:
        '’i kullanıyoruz (örneğin: başlatılan veya tamamlanan odak/mola seansları, günlük hedef değişiklikleri, ayar değişiklikleri, bildirim izni sonuçları, motivasyon hatırlatıcı olayları ve onboarding’in tamamlanıp tamamlanmadığı). Sinyaller serbest metin, isim, e-posta veya odak geçmişi içeriği içermez.',
      identifier:
        'TelemetryDeck kurulumları hash’lenmiş, cihaza özel bir tanımlayıcıyla ayırt eder ve kişisel olmayan cihaz meta verisi (örneğin model, işletim sistemi sürümü ve dil/bölge) ekleyebilir. Bu veriler yalnızca analitik için kullanılır, kimliğinize tarafımızca bağlanmaz ve diğer şirketlerin uygulamaları veya web siteleri arasında izleme için kullanılmaz.',
      learnMore: 'Daha fazla bilgi:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store güncellemeleri',
      body: 'Ayarlar’da “Güncellemeleri Kontrol Et”i kullanırsanız uygulama, App Store’da daha yeni bir sürüm olup olmadığını görmek için Apple ile iletişim kurabilir.',
    },
    launchAtLogin: {
      title: 'Oturum Açılışında Başlat (Mac)',
      body: 'Mac’te Ayarlar’da Oturum Açılışında Başlat’ı etkinleştirirseniz uygulama, macOS sistem API’lerini kullanarak bir giriş öğesi olarak kaydolur. Bu tercih sizin kontrolünüzdedir ve istediğiniz zaman kapatılabilir.',
    },
    notifications: {
      title: 'Bildirimler ve Live Activities (iPhone)',
      body: 'iPhone’da isteğe bağlı yerel bildirimler, motivasyon hatırlatıcıları ve Live Activities, bir seans bittiğinde bunu görmenize veya nazikçe odağa dönmenize yardımcı olur. İzin yalnızca bu özellikleri etkinleştirmeyi seçtiğinizde istenir. Bildirim içeriği cihazınızda kalır.',
    },
    whatWeDoNotDo: {
      title: 'Yapmadıklarımız',
      items: [
        'Reklam ağı yok',
        'Kişisel bilgi satışı yok',
        'Analitik için kişilerinize, fotoğraflarınıza, hassas konumunuza, kameranıza veya mikrofonunuza erişim yok',
      ],
    },
    children: {
      title: 'Çocuklar',
      body: `${PULSE_APP_NAME}, yukarıda açıklandığı gibi senkronizasyon için bir hesabın gerektirdiği ötesinde çocuklardan bilerek kişisel bilgi toplamaz. Analitik sinyaller anonimdir ve kişisel içerik içermez.`,
    },
    changes: {
      title: 'Değişiklikler',
      body: 'Bu politika değişirse güncellenmiş sürüm bu URL’de yayınlanır.',
    },
    contact: {
      title: 'İletişim',
      body: 'Bu politikayla ilgili sorular:',
    },
  },
}
