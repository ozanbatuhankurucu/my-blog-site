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
    metaTitle: `${PULSE_APP_NAME} — macOS için menü çubuğu Pomodoro zamanlayıcısı`,
    metaDescription: `${PULSE_APP_NAME}, menü çubuğunda yaşayan native bir macOS Pomodoro zamanlayıcısıdır. Yenilenen arayüz, tam odak geçmişi, seansa özel bildirimler ve 12 dil desteği sunar.`,
    heroImageAlt: `${PULSE_APP_NAME} Türkçe odak zamanlayıcısı ve haftalık geçmiş görünümü`,
    backToProjects: 'Projelere dön',
    availableOnAppStore: 'Mac App Store’da mevcut',
    eyebrow: 'Menü çubuğu Pomodoro zamanlayıcısı',
    tagline: 'Menü çubuğunuzda yaşayan sakin bir Pomodoro zamanlayıcısı.',
    description: `Masaüstünüzü doldurmadan odaklanın. Bir odak seansı başlatın, mola verin ve ${PULSE_APP_NAME} ilerlemenizi tam odak geçmişiyle sessizce takip etsin.`,
    downloadCta: 'Mac App Store’dan indir',
    watchDemo: 'Nasıl çalıştığını izle',
    supportCta: 'Destek',
    stats: {
      platformLabel: 'Platform',
      platformValue: 'Native macOS',
      languagesLabel: 'Diller',
      languagesValue: '12 dil',
      dataLabel: 'Veri toplama',
      dataValue: 'Yok',
      builtWithLabel: 'Teknoloji',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Daha sessiz bir odaklanma',
      title: 'Zamanlayıcınız ihtiyaç duyduğunuzda orada—gerekmediğinde ortadan kaybolur.',
      description: `${PULSE_APP_NAME}’ı menü çubuğundan açın, bir seans seçin ve popover’ı kapatın. Zamanlayıcı siz çalışırken devam eder. İlk açılışta kısa bir tanıtım nerede bulacağınızı gösterir — Reduce Motion açıksa buna uyar.`,
      caption:
        'Yenilenen seans kontrolleri, tam odak geçmişi, 12 dil yerelleştirmesi, seansa özel tamamlanma bildirimleri ve ayarlar.',
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
          'Geri sayım siz çalışırken sessizce ilerler. Duraklatın, sıfırlayın veya atlayın; sayaç menü çubuğunda sabit kalır.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} odak seansı; duraklatma kontrolleri ve menü çubuğu geri sayımı`,
      },
      {
        title: 'Menü çubuğu',
        badge: 'Sabit sayaç',
        description:
          'Kalan süreyi anında gösterip gizleyin. Sabit genişlikli sayaç, 120:00’a kadar popover’ı kaydırmadan yerinde kalır.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} geri sayımının macOS menü çubuğunda görünümü`,
      },
      {
        title: 'Özelleştirme',
        badge: 'Sizin kurallarınız',
        description:
          'Esnek süreler, tamamlanma sesleri ve animasyonları, 12 arayüz dili, oturum açılışında başlatma.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} süre, tamamlanma uyarıları, dil ve oturum açılışında başlatma ayarları`,
      },
    ],
    history: {
      eyebrow: 'Baskısız ilerleme',
      title: 'İşin biriktiğini görün.',
      description:
        'Popover’dan veya durum menüsünden tam geçmiş penceresini açın. Toplamlar ve seriler, odağı yönetilecek başka bir panele çevirmeden ilerlemenizi gösterir.',
      items: ['Toplam odak süresi', 'Tamamlanan seans sayısı', 'Mevcut seri', 'En iyi seri'],
      imageAlt: `${PULSE_APP_NAME} haftalık odak geçmişi; seans sayıları, odak saatleri ve seri`,
    },
    feedback: {
      eyebrow: 'Nazik geri bildirim, sizin tarzınızda',
      title: 'Bitirmeyi ödüllendirici kılın.',
      description: `Altı sakin tamamlanma sesi ve altı hayvan kutlaması arasından seçin ya da ikisini de kapatın. ${PULSE_APP_NAME}, Odak, Kısa Mola ve Uzun Mola bittiğinde seansa uygun mesajı gösterir.`,
      items: [
        'Her seans türüne özel tamamlanma başlığı ve açıklaması',
        'Sistem dili varsayılanıyla 12 dilde arayüz',
        'Ayarlar’da dil seçimi: Sistem veya desteklenen herhangi bir dil',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} süre, dil, tamamlanma sesleri ve oturum açılışında başlatma ayarları`,
      celebrationImageAlt: `${PULSE_APP_NAME} seans tamamlandığında tavşan kutlama animasyonu`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Maymun', 'Koala', 'Kedi', 'Tilki', 'Panda', 'Tavşan'],
    },
    native: {
      eyebrow: 'Tasarım gereği native',
      title: 'Mac’inizde evinde hissetmek için tasarlandı.',
      description: `SwiftUI, AppKit ve macOS sistem alışkanlıkları ${PULSE_APP_NAME}’ı hızlı, tanıdık ve güvenilir tutar — VoiceOver etiketleri ve Reduce Motion desteğiyle birlikte.`,
      features: [
        {
          title: 'Menü çubuğunda yaşar',
          description: 'Dock simgesi yok; dikkatinizi çalan ana pencere de yok.',
        },
        {
          title: 'Doğru kalır',
          description:
            'Seanslar uyku, uyanma ve yeniden başlatmalarda doğru kalır; geçmişe gerçek bitiş zamanıyla kaydedilir.',
        },
        {
          title: 'Veriyi yerelde tutar',
          description: 'Ayarlarınız ve odak geçmişiniz Mac’inizden dışarı çıkmaz.',
        },
        {
          title: 'Dilinizi konuşur',
          description:
            '12 dilde tam arayüz; sistem dili varsayılanı ve Ayarlar’dan manuel seçim.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Varsayılan olarak özel',
      title: 'Odağınız bir veri noktası değil.',
      description: `${PULSE_APP_NAME} veri toplamaz. Hesap, analitik, reklam veya ağ isteği yok. Her şey Mac’inizde kalır.`,
      items: [
        'Giriş yok',
        'Bulut senkronizasyonu yok',
        'İzleme yok',
        'Kişisel dosyalara erişim yok',
        'Hiçbir veri Mac’inizden çıkmaz',
      ],
    },
    closing: {
      title: 'Odaklı çalışmaya yer açın.',
      description: `${PULSE_APP_NAME}’ı Mac App Store’dan indirin; yardıma ihtiyacınız olursa gizlilik politikası ve destek sayfasına bakın.`,
      getSupport: 'Destek al',
      privacy: 'Gizlilik',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} Destek`,
    metaDescription: `Mac için menü çubuğu Pomodoro zamanlayıcısı ${PULSE_APP_NAME} destek ve başlangıç rehberi.`,
    title: `${PULSE_APP_NAME} Destek`,
    intro: `${PULSE_APP_NAME}, Mac için basit bir menü çubuğu Pomodoro zamanlayıcısıdır.`,
    gettingStarted: {
      title: 'Başlarken',
      steps: [
        'Ekranın sağ üstündeki menü çubuğundaki uygulama simgesine tıklayın.',
        'Odak, Kısa Mola veya Uzun Mola seçin.',
        'Başlat’a basın. Zamanlayıcı çalışırken popover’ı kapatabilirsiniz.',
      ],
    },
    settings: {
      title: 'Ayarlar',
      body: 'Seans sürelerini, tamamlanma seslerini, menü çubuğu animasyonlarını ve Oturum Açılışında Başlat seçeneğini değiştirmek için Ayarlar sekmesini açın.',
    },
    history: {
      title: 'Tam odak geçmişi',
      body: 'Toplam odak sürenizi, tamamlanan seanslarınızı, mevcut serinizi ve en iyi serinizi görmek için popover’dan veya menü çubuğu durum menüsünden Tam Geçmiş’i açın.',
    },
    requirements: {
      title: 'Gereksinimler',
      body: 'macOS 14.6 veya üzeri.',
    },
    contact: {
      title: 'İletişim',
      body: 'Yardım, geri bildirim veya hata bildirimi için:',
    },
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} Gizlilik Politikası`,
    metaDescription: `Mac ve iPhone için Pomodoro zamanlayıcısı ${PULSE_APP_NAME} gizlilik politikası.`,
    title: 'Gizlilik Politikası',
    subtitle: `${PULSE_APP_NAME} — Mac ve iPhone için Pomodoro zamanlayıcısı`,
    lastUpdated: 'Son güncelleme: 24 Eylül 2026',
    summary: {
      title: 'Özet',
      body: `${PULSE_APP_NAME} hesap gerektirmez; isim, e-posta veya kişisel içerik toplamaz. Odak akışlarını iyileştirebilmek için uygulama anonim, gizlilik odaklı kullanım analitikleri gönderebilir. Zamanlayıcı ayarlarınız ve odak geçmişiniz cihazınızda kalır.`,
    },
    localData: {
      title: 'Cihazınızda saklanan veriler',
      body: 'Zamanlayıcı ayarlarınız, seans tercihleriniz ve odak geçmişiniz standart sistem depolama kullanılarak Mac veya iPhone’unuzda yerel olarak kaydedilir. Odak geçmişi içeriğinin kendisi analitik sağlayıcımıza yüklenmez.',
    },
    analytics: {
      title: 'Analitik',
      introBeforeLink: 'Uygulamanın nasıl kullanıldığını anlamak için gizlilik odaklı bir analitik hizmeti olan',
      introAfterLink:
        '’i kullanıyoruz (örneğin: başlatılan veya tamamlanan odak/mola seansları, günlük hedef değişiklikleri, ayar değişiklikleri ve onboarding’in tamamlanıp tamamlanmadığı). Sinyaller serbest metin, isim, e-posta veya odak geçmişi içeriği içermez.',
      identifier:
        'TelemetryDeck kurulumları hash’lenmiş, cihaza özel bir tanımlayıcıyla ayırt eder ve kişisel olmayan cihaz meta verisi (örneğin model, işletim sistemi sürümü ve dil/bölge) ekleyebilir. Bu veriler yalnızca analitik için kullanılır, kimliğinize tarafımızca bağlanmaz ve diğer şirketlerin uygulamaları veya web siteleri arasında izleme için kullanılmaz.',
      learnMore: 'Daha fazla bilgi:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store güncellemeleri',
      body: 'Ayarlar’da “Güncellemeleri Kontrol Et”i kullanırsanız, uygulama App Store’da daha yeni bir sürüm olup olmadığını görmek için Apple ile iletişim kurabilir.',
    },
    launchAtLogin: {
      title: 'Oturum Açılışında Başlat (Mac)',
      body: 'Mac’te Ayarlar’da Oturum Açılışında Başlat’ı etkinleştirirseniz uygulama, macOS sistem API’lerini kullanarak bir giriş öğesi olarak kaydolur. Bu tercih sizin kontrolünüzdedir ve istediğiniz zaman kapatılabilir.',
    },
    notifications: {
      title: 'Bildirimler ve Live Activities (iPhone)',
      body: 'iPhone’da isteğe bağlı yerel bildirimler ve Live Activities, bir seans bittiğinde bunu görmenize yardımcı olur. İzin yalnızca bu özellikleri etkinleştirmeyi seçtiğinizde istenir. Bildirim içeriği cihazınızda kalır.',
    },
    whatWeDoNotDo: {
      title: 'Yapmadıklarımız',
      items: [
        'Hesap veya giriş yok',
        'Reklam ağları yok',
        'Kişisel bilgi satışı yok',
        'Analitik için kişilerinize, fotoğraflarınıza, hassas konumunuza, kameranıza veya mikrofonunuza erişim yok',
      ],
    },
    children: {
      title: 'Çocuklar',
      body: `${PULSE_APP_NAME} çocuklardan bilerek kişisel bilgi toplamaz. Analitik sinyaller anonimdir ve kişisel içerik içermez.`,
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
