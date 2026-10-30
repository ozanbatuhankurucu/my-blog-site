import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const msMessages: PulseMessages = {
  languageLabel: 'Bahasa halaman',
  video: {
    ariaLabel: `Video pengenalan produk ${PULSE_APP_NAME}`,
    playLabel: 'Mainkan video pengenalan',
    unsupported: 'Pelayar anda tidak menyokong video terbenam.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Pemasa fokus untuk iPhone dan Mac`,
    metaDescription: `${PULSE_APP_NAME} ialah pemasa Pomodoro yang tenang untuk iPhone dan Mac dengan Sejarah Fokus, Matlamat Harian, log masuk Apple dan Google, serta penyegerakan offline-first merentas peranti anda.`,
    heroImageAlt: `${PULSE_APP_NAME} pemasa fokus dan gambaran sejarah mingguan`,
    backToProjects: 'Kembali ke projek',
    availableOnAppStore: 'Tersedia di App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Pemasa fokus untuk iPhone dan Mac',
    tagline: 'Pemasa Pomodoro yang lembut untuk membantu anda fokus — pada iPhone dan bar menu Mac.',
    description: `Mulakan sesi Fokus, berehat, dan bawa sejarah anda bersama. Log masuk dengan Apple atau Google supaya Matlamat Harian, Sejarah Fokus, dan keutamaan disegerakkan kekal dengan akaun anda pada iPhone dan Mac — sementara pemasa masih berfungsi luar talian.`,
    downloadCta: 'Muat turun di App Store',
    watchDemo: 'Tonton dalam tindakan',
    supportCta: 'Sokongan',
    stats: {
      platformLabel: 'Platform',
      platformValue: 'iPhone & Mac',
      languagesLabel: 'Bahasa',
      languagesValue: '48 bahasa',
      dataLabel: 'Segerak',
      dataValue: 'Offline-first',
      builtWithLabel: 'Dibina dengan',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Cara yang lebih tenang untuk fokus',
      title: 'Pemasa ada apabila anda perlukan — dan hilang apabila anda tidak perlukan.',
      description: `Pada Mac, buka ${PULSE_APP_NAME} dari bar menu, pilih sesi, dan tutup popover. Pada iPhone, mulakan Fokus dari Home dan teruskan dengan Live Activities pada peranti yang disokong. Pemasa terus berjalan semasa anda bekerja.`,
      caption:
        'Pemasa Fokus dan rehat, Matlamat Harian, Sejarah Fokus, penjejakan rentetan, penyetempatan 48 bahasa, dan amaran penyelesaian pilihan.',
    },
    rhythm: {
      eyebrow: 'Rentak yang anda kawal',
      title: 'Fokus, jeda, pulih, ulang.',
      description: `${PULSE_APP_NAME} mencadangkan langkah seterusnya tetapi tidak pernah memulakan sesi untuk anda. Setiap tempoh boleh diselaraskan mengikut hari anda.`,
    },
    featureShowcases: [
      {
        title: 'Fokus',
        badge: '1–120 min',
        description:
          'Undur masa berjalan senyap semasa anda bekerja. Jeda, set semula, atau langkau — anda kekal mengawal pada iPhone dan Mac.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} sesi Fokus berjalan dengan kawalan jeda dan undur masa`,
      },
      {
        title: 'Bar menu',
        badge: 'Mac',
        description:
          'Pada Mac, tunjuk atau sembunyikan masa yang tinggal di bar menu. Item status lebar tetap kekal tanpa menggeser popover, sehingga 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} undur masa dipaparkan di bar menu macOS`,
      },
      {
        title: 'Penyesuaian',
        badge: 'Peraturan anda',
        description:
          'Tempoh fleksibel, Matlamat Harian, bunyi dan animasi penyelesaian, 48 bahasa UI, dan keutamaan penampilan.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} tetapan untuk tempoh, amaran penyelesaian, bahasa, dan matlamat`,
      },
    ],
    history: {
      eyebrow: 'Kemajuan tanpa tekanan',
      title: 'Lihat kerja terkumpul.',
      description:
        'Buka Sejarah Fokus untuk semak jumlah dan rentetan. Apabila anda log masuk, sejarah boleh disegerakkan antara iPhone dan Mac supaya kemajuan mengikuti anda.',
      items: [
        'Jumlah masa fokus',
        'Bilangan sesi selesai',
        'Rentetan semasa',
        'Rentetan terbaik',
        'Matlamat Harian',
      ],
      imageAlt: `${PULSE_APP_NAME} sejarah fokus mingguan dengan bilangan sesi, jam fokus, dan rentetan`,
    },
    feedback: {
      eyebrow: 'Maklum balas lembut, cara anda',
      title: 'Jadikan penyelesaian terasa bermakna.',
      description: `Pilih daripada enam bunyi penyelesaian yang tenang dan enam sambutan haiwan, atau matikan salah satu. ${PULSE_APP_NAME} memaparkan mesej yang sesuai apabila sesi Fokus, Rehat Pendek, atau Rehat Panjang tamat.`,
      items: [
        'Tajuk dan sari kata penyelesaian mengikut sesi',
        'UI dalam 48 bahasa dengan lalai bahasa sistem',
        'Keutamaan bahasa dan penampilan pada setiap peranti',
        'Peringatan motivasi pilihan pada iPhone',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} tetapan untuk tempoh, bahasa, bunyi penyelesaian, dan matlamat`,
      celebrationImageAlt: `${PULSE_APP_NAME} animasi sambutan arnab apabila sesi selesai`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Monyet', 'Koala', 'Kucing', 'Musang', 'Panda', 'Arnab'],
    },
    native: {
      eyebrow: 'Asli mengikut reka bentuk',
      title: 'Dibina untuk terasa selesa pada peranti Apple.',
      description: `SwiftUI, AppKit, dan konvensyen sistem memastikan ${PULSE_APP_NAME} pantas dan familiar — dengan label VoiceOver dan sokongan Reduce Motion sepanjang aplikasi.`,
      features: [
        {
          title: 'Bar menu Mac & Home iPhone',
          description: 'Rakan bar menu yang senyap pada Mac, dan pengalaman Home fokus pada iPhone.',
        },
        {
          title: 'Kekal tepat',
          description:
            'Sesi kekal betul merentasi tidur, bangun, dan pelancaran semula, dengan sejarah direkod pada tarikh akhir sebenar.',
        },
        {
          title: 'Segerak offline-first',
          description:
            'Terus fokus tanpa sambungan. Apabila anda kembali dalam talian, perubahan akaun log masuk disegerakkan ke akaun anda.',
        },
        {
          title: 'Berbahasa anda',
          description:
            'UI penuh dalam 48 bahasa dengan lalai bahasa sistem dan pilihan manual dalam Tetapan.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Peribadi mengikut reka bentuk',
      title: 'Fokus anda kekal milik anda.',
      description: `${PULSE_APP_NAME} menggunakan akaun supaya sejarah boleh disegerakkan antara peranti. Kami hanya menyimpan apa yang diperlukan untuk penyegerakan, tidak pernah menjual data anda, dan memisahkan analitik daripada sejarah fokus anda.`,
      items: [
        'Log masuk dengan Apple atau Google',
        'Fokus offline-first pada setiap peranti',
        'Penyegerakan awan untuk sejarah dan keutamaan disegerakkan',
        'Tiada rangkaian pengiklanan',
        'Padam akaun bila-bila masa dalam Tetapan',
      ],
    },
    closing: {
      title: 'Cipta ruang untuk kerja fokus.',
      description: `Dapatkan ${PULSE_APP_NAME} di App Store untuk iPhone dan Mac, atau baca dasar privasi dan halaman sokongan jika anda perlukan bantuan.`,
      getSupport: 'Dapatkan sokongan',
      privacy: 'Privasi',
    },
  },
  support: {
    metaTitle: `Sokongan ${PULSE_APP_NAME}`,
    metaDescription: `Sokongan, FAQ, dan bantuan akaun untuk ${PULSE_APP_NAME} pada iPhone dan Mac — termasuk Pomodoro Pro, pembelian, Perlindungan Fokus, log masuk, penyegerakan, dan pemadaman akaun.`,
    title: `Sokongan ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} ialah pemasa Pomodoro yang tenang untuk iPhone dan Mac. Log masuk dengan Apple atau Google untuk menyegerakkan Sejarah Fokus merentas peranti. Pada iPhone, Pomodoro Pro pilihan membuka Perlindungan Fokus, Tag tersuai, dan Cerapan Tag.`,
    gettingStarted: {
      title: 'Permulaan',
      items: [
        {
          question: 'Bagaimana saya memulakan sesi Fokus?',
          answer:
            'Pada Mac, klik ikon aplikasi di bar menu, pilih Fokus, Rehat Pendek, atau Rehat Panjang, kemudian tekan Mula. Pada iPhone, buka aplikasi, pilih sesi di Home, dan tekan Mula. Anda boleh meninggalkan aplikasi semasa pemasa berjalan.',
        },
        {
          question: 'Bagaimana saya menukar tempoh Fokus dan Rehat?',
          answer:
            'Buka Tetapan dan laraskan panjang Fokus, Rehat Pendek, dan Rehat Panjang. Anda juga boleh memilih rentak pratetap, kemudian menala halus minit.',
        },
        {
          question: 'Bagaimana saya mengkonfigurasi Matlamat Harian?',
          answer:
            'Dalam Tetapan, tetapkan berapa sesi Fokus yang anda mahukan setiap hari. Kemajuan dipaparkan di Home dan dalam Sejarah Fokus.',
        },
        {
          question: 'Bagaimana saya melihat Sejarah Fokus?',
          answer:
            'Buka Sejarah Fokus dari aplikasi (pada Mac, dari popover atau menu status). Anda akan melihat jumlah, rentetan, dan kemajuan mingguan.',
        },
        {
          question: 'Bagaimana saya menukar bahasa dan penampilan?',
          answer:
            'Dalam Tetapan, pilih Bahasa (Sistem atau bahasa yang disokong) dan Penampilan (Sistem, Cerah, atau Gelap). Keutamaan ini kekal pada setiap peranti dan tidak disegerakkan.',
        },
      ],
    },
    accounts: {
      title: 'Akaun',
      items: [
        {
          question: 'Mengapa log masuk diperlukan?',
          answer:
            'Akaun memastikan Sejarah Fokus, Matlamat Harian, dan keutamaan disegerakkan kekal dengan anda pada iPhone dan Mac. Pemasangan baharu meminta anda log masuk sebelum menggunakan pemasa. Peranti yang menaik taraf dari versi lama mungkin kekal menggunakan sejarah tempatan sehingga anda log masuk. Pembelian Pomodoro Pro juga kekal dengan akaun log masuk anda.',
        },
        {
          question: 'Bagaimana saya log masuk dengan Apple atau Google?',
          answer:
            'Pada skrin log masuk, pilih Teruskan dengan Apple atau Teruskan dengan Google dan selesaikan aliran pembekal. Apple mungkin menawarkan Hide My Email.',
        },
        {
          question: 'Bagaimana saya log keluar?',
          answer:
            'Buka Tetapan → Akaun → Log keluar. Jika sesetengah perubahan belum disegerakkan, aplikasi mungkin meminta anda segerakkan dahulu atau log keluar juga. Log keluar tidak memadam akaun anda.',
        },
        {
          question: 'Bagaimana saya log masuk semula?',
          answer:
            'Gunakan kaedah Apple atau Google yang sama pada skrin log masuk. Sejarah awan anda dipulihkan ke akaun itu pada peranti.',
        },
        {
          question: 'Apa yang berlaku jika saya menggunakan akaun lain?',
          answer:
            'Setiap akaun mempunyai sejarah sendiri. Log masuk ke akaun lain tidak menggabungkan sejarah yang tidak berkaitan. Pilih dengan teliti sebelum mengesahkan tuntutan sejarah pada peranti yang sudah mempunyai sesi tempatan.',
        },
        {
          question: 'Bolehkah saya pautkan Apple dan Google ke akaun yang sama?',
          answer:
            'Ya. Dalam Tetapan → Akaun anda boleh memautkan kaedah log masuk yang lain apabila ia belum digunakan oleh akaun berbeza.',
        },
      ],
    },
    cloudSync: {
      title: 'Penyegerakan awan',
      items: [
        {
          question: 'Apa yang disegerakkan antara peranti?',
          answer:
            'Sejarah sesi Fokus dan rehat (termasuk Tag yang anda pilih), Tag yang anda cipta, rekod Matlamat Harian, data akaun berkaitan rentetan, dan keutamaan disegerakkan seperti tempoh sesi, matlamat harian, bunyi, animasi, bunyi penyelesaian, dan haiwan sambutan.',
        },
        {
          question: 'Apa yang berlaku tanpa internet?',
          answer:
            'Selepas anda log masuk, anda boleh terus menggunakan pemasa luar talian. Sesi dan perubahan baharu kekal pada peranti sehingga sambungan tersedia.',
        },
        {
          question: 'Apa yang berlaku apabila saya kembali dalam talian?',
          answer:
            'Aplikasi menyegerakkan perubahan tertunda dengan akaun anda. Penyegerakan adalah offline-first dan akhirnya konsisten — bukan kerjasama masa nyata serta-merta.',
        },
        {
          question: 'Bagaimana saya menggunakan akaun yang sama pada iPhone dan Mac?',
          answer:
            'Pasang aplikasi pada kedua-dua peranti dan log masuk dengan akaun Apple atau Google yang sama. Selepas pemulihan selesai, Sejarah Fokus boleh muncul pada kedua-duanya.',
        },
        {
          question: 'Bagaimana jika sejarah hilang?',
          answer:
            'Sahkan anda log masuk ke akaun yang sama, tunggu pemulihan/penyegerakan selesai, dan semak Sejarah Fokus semula. Jika anda log masuk ke akaun lain, akaun itu akan memaparkan sejarahnya sendiri.',
        },
      ],
    },
    migration: {
      title: 'Naik taraf dari versi lama',
      items: [
        {
          question: 'Apa yang berlaku kepada sejarah tempatan sedia ada saya?',
          answer:
            'Sejarah tempatan sedia ada tidak dipadam secara senyap. Selepas log masuk, aplikasi bertanya sebelum menambah sejarah itu ke akaun anda.',
        },
        {
          question: 'Bagaimana saya menuntut sejarah saya?',
          answer:
            'Log masuk ke akaun yang patut memiliki sejarah, semak skrin Tambah sejarah anda, kemudian pilih Tambah ke akaun ini. Gunakan akaun lain jika akaun yang dipaparkan salah. Sesi tidak boleh dipindahkan ke akaun lain kemudian.',
        },
        {
          question: 'Bagaimana jika tetapan peranti dan akaun berbeza?',
          answer:
            'Aplikasi mungkin bertanya sama ada hendak mengekalkan tetapan peranti ini atau menggunakan tetapan akaun. Bahasa, penampilan, pemberitahuan, dan peringatan motivasi kekal tempatan peranti.',
        },
      ],
    },
    notifications: {
      title: 'Pemberitahuan',
      items: [
        {
          question: 'Bagaimana saya mendayakan pemberitahuan pada iPhone?',
          answer:
            'Buka Tetapan → Pemberitahuan dan pilih Dayakan, atau buka Tetapan sistem jika kebenaran ditolak sebelum ini.',
        },
        {
          question: 'Bagaimana Peringatan motivasi berfungsi?',
          answer:
            'Pada iPhone, buka Tetapan → Peringatan motivasi dan hidupkannya selepas pemberitahuan dibenarkan. Anda boleh menjeda atau menetapkan waktu senyap. Ia pilihan dan dimatikan secara lalai.',
        },
        {
          question: 'Bagaimana jika pemberitahuan dimatikan?',
          answer:
            'Amaran tamat sesi dan peringatan motivasi memerlukan kebenaran pemberitahuan. Gunakan Tetapan → Pemberitahuan → Buka Tetapan untuk menghidupkannya dalam Tetapan iOS.',
        },
        {
          question: 'Bagaimana Live Activities berfungsi?',
          answer:
            'Pada iPhone yang disokong, Live Activity pilihan boleh memaparkan sesi aktif pada Skrin Kunci dan Dynamic Island. Kebenaran diminta apabila anda mendayakan ciri berkaitan.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Apakah Pomodoro Pro?',
          answer:
            'Pomodoro Pro ialah pembelian dalam aplikasi pilihan pada iPhone. Ia membuka Perlindungan Fokus, Tag tersuai (nama dan warna anda sendiri), dan Cerapan Tag (masa fokus mingguan dan bulanan mengikut Tag). Pemasa, Tag terbina dalam, Sejarah Fokus, dan penyegerakan kekal tersedia tanpa Pro.',
        },
        {
          question: 'Apakah pilihan pembelian yang tersedia?',
          answer:
            'Pomodoro Pro ditawarkan sebagai langganan Bulanan, langganan Tahunan (Annual), atau pembelian sekali Lifetime. Langganan diperbaharui secara automatik melainkan anda membatalkan sekurang-kurangnya 24 jam sebelum akhir tempoh semasa. Lifetime dicaj sekali dan bukan langganan.',
        },
        {
          question: 'Di manakah saya membeli atau melihat Pomodoro Pro?',
          answer:
            'Pada iPhone, buka Tetapan → Pomodoro Pro, atau ketik cip perlindungan di Home. Anda mesti log masuk. Pro kekal dengan akaun anda pada setiap peranti yang anda log masuk.',
        },
        {
          question: 'Bagaimana saya memulihkan pembelian?',
          answer:
            'Gunakan Pulihkan Pembelian pada paywall atau dalam Tetapan → Pomodoro Pro. Pembelian dengan Apple Account yang sama dipindahkan ke akaun yang anda log masuk. Jika tiada dijumpai, sahkan anda menggunakan Apple Account yang membeli Pro dan cuba lagi semasa dalam talian.',
        },
      ],
    },
    purchases: {
      title: 'Langganan dan pembelian',
      items: [
        {
          question: 'Bagaimana saya mengurus atau membatalkan langganan?',
          answer:
            'Langganan dibilkan oleh Apple. Pada iPhone, buka Tetapan → Pomodoro Pro → Urus Langganan, atau pergi ke Tetapan → [nama anda] → Langganan dan pilih aplikasi. Batalkan sekurang-kurangnya 24 jam sebelum pembaharuan untuk mengelak caj seterusnya. Memadam aplikasi atau akaun Pomodoro anda tidak membatalkan langganan.',
        },
        {
          question: 'Bagaimana saya meminta bayaran balik?',
          answer:
            'Bayaran balik dikendalikan oleh Apple. Lawati reportaproblem.apple.com, log masuk dengan Apple Account yang digunakan untuk pembelian, cari transaksi, dan hantar permintaan bayaran balik. Kami tidak boleh memproses bayaran balik App Store sendiri.',
        },
        {
          question: 'Bagaimana jika pembelian gagal atau Pro tidak dibuka?',
          answer:
            'Kekal log masuk, semak sambungan rangkaian, dan cuba lagi. Jika pembayaran tertunda (contohnya Ask to Buy), Pro dibuka selepas kelulusan. Jika anda sudah bayar, gunakan Pulihkan Pembelian. Untuk masalah pembayaran pada langganan aktif, kemas kini kaedah pembayaran dalam tetapan App Store.',
        },
        {
          question: 'Bagaimana jika saya membeli Lifetime semasa langganan aktif?',
          answer:
            'Lifetime membuka Pro secara kekal, tetapi langganan sedia ada tidak dibatalkan secara automatik. Matikan pembaharuan automatik dalam tetapan langganan App Store supaya anda tidak dicaj lagi.',
        },
      ],
    },
    focusProtection: {
      title: 'Perlindungan Fokus',
      items: [
        {
          question: 'Apakah Perlindungan Fokus?',
          answer:
            'Perlindungan Fokus ialah ciri Pomodoro Pro pada iPhone. Ia menggunakan API Screen Time Apple untuk menyekat aplikasi, kategori, atau laman web yang anda pilih semasa sesi Fokus berjalan. Rehat tidak pernah disekat. Apabila sesi tamat, aplikasi yang disekat dibuka kunci secara automatik.',
        },
        {
          question: 'Bagaimana saya menetapkannya?',
          answer:
            'Dengan Pro aktif, ketik cip Perlindungan Fokus di Home (atau bukanya dari Tetapan). Benarkan akses Screen Time apabila diminta, pilih apa hendak disekat, kemudian hidupkan Perlindungan Fokus. Mulakan sesi Fokus untuk menggunakan perisai.',
        },
        {
          question: 'Bagaimana saya mematikannya atau membuka kunci aplikasi?',
          answer:
            'Buka helaian Perlindungan Fokus dan pilih Matikan Sekarang, atau matikan ciri tersebut. Selepas sesi tamat anda juga boleh gunakan Buka Kunci Aplikasi pada skrin perisai. Untuk membuang akses Screen Time aplikasi sepenuhnya, pergi ke Tetapan iOS → Screen Time → Apps with Screen Time Access.',
        },
        {
          question: 'Bagaimana jika Perlindungan Fokus tidak berfungsi?',
          answer:
            'Sahkan Pro aktif, akses Screen Time dibenarkan, dan anda memilih aplikasi atau kategori untuk disekat. Perlindungan Fokus hanya terpakai semasa sesi Fokus, bukan rehat. Jika akses dibatalkan dalam Tetapan sistem, buka aplikasi dan benarkan akses semula. Memulakan semula iPhone boleh membantu selepas perubahan kebenaran.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Akaun dan privasi',
      items: [
        {
          question: 'Bagaimana saya memadam akaun saya?',
          answer:
            'Log masuk, buka Tetapan → Akaun → Padam akaun, kemudian sahkan. Akaun dan sejarah fokus disegerakkan anda dipadam secara kekal dari pangkalan data langsung kami. Ini tidak boleh dibatalkan. Pemadaman memerlukan sambungan rangkaian. Memadam akaun tidak membatalkan langganan App Store — uruskannya dalam tetapan App Store.',
        },
        {
          question: 'Apakah kesan pemadaman akaun?',
          answer:
            'Data awan disegerakkan untuk akaun itu dibuang, kebenaran Sign in with Apple dibatalkan apabila disimpan, rekod pembelian yang dipautkan ke akaun anda diminta dipadam dari pembekal pembelian kami, dan data akaun dibuang dari peranti tempat anda memadam. Salinan tempatan pada peranti lain tidak lagi boleh disegerakkan; buang aplikasi atau kosongkan di sana jika perlu. Sandaran pembekal mungkin mengekalkan data yang dipadam untuk tempoh pemulihan terhad. Apple mengekalkan rekod transaksi App Store sendiri.',
        },
        {
          question: 'Bagaimana saya mengeksport data saya?',
          answer:
            'Tetapan → Akaun → Eksport data saya menyimpan fail JSON dengan sesi, sasaran matlamat harian, tetapan disegerakkan, dan profil akaun. Data tempatan yang belum dituntut juga boleh dieksport dari skrin log masuk.',
        },
        {
          question: 'Di manakah Dasar Privasi?',
          answer:
            'Buka Dasar Privasi dari laman web produk, atau gunakan pautan privasi pada halaman produk laman ini.',
        },
      ],
    },
    requirements: {
      title: 'Keperluan',
      body: 'iPhone: iOS 17 atau lebih baharu. Mac: macOS 14.6 atau lebih baharu. Pembelian Pomodoro Pro dan Perlindungan Fokus tersedia pada iPhone.',
    },
    contact: {
      title: 'Hubungi',
      body: 'Untuk bantuan, maklum balas, atau laporan pepijat:',
    },
    privacyPolicyLink: 'Dasar Privasi',
  },
  privacy: {
    metaTitle: `Dasar Privasi ${PULSE_APP_NAME}`,
    metaDescription: `Dasar privasi untuk ${PULSE_APP_NAME}, merangkumi log masuk Apple dan Google, penyegerakan awan, pembelian Pomodoro Pro melalui RevenueCat, Perlindungan Fokus, analitik, dan pemadaman akaun pada Mac dan iPhone.`,
    title: 'Dasar Privasi',
    subtitle: `${PULSE_APP_NAME} — Pemasa Pomodoro untuk Mac dan iPhone`,
    lastUpdated: 'Kemas kini terakhir: 26 Oktober 2026',
    summary: {
      title: 'Ringkasan',
      body: `Apabila anda log masuk dengan Apple atau Google, akaun anda mengekalkan sejarah fokus, matlamat harian, dan tetapan pemasa disegerakkan antara Mac dan iPhone. Kami hanya menyimpan apa yang aplikasi perlukan: alamat e-mel, pengenal akaun, dan data fokus yang anda cipta. Kami tidak menjualnya, tidak menggunakannya untuk pengiklanan, dan tidak berkongsi dengan pembekal analitik kami. Jika anda membeli Pomodoro Pro pada iPhone, pembekal pembelian RevenueCat mengekalkan sejarah pembelian dipautkan ke akaun anda supaya Pro berfungsi pada setiap peranti yang anda log masuk. Pilihan aplikasi Perlindungan Fokus tidak pernah meninggalkan iPhone anda. Anda boleh mengeksport data atau memadam akaun bila-bila masa dari Tetapan. Secara berasingan, aplikasi mungkin menghantar analitik penggunaan tanpa nama dan mesra privasi supaya kami boleh menambah baik aliran fokus.`,
    },
    localData: {
      title: 'Data disimpan pada peranti anda',
      body: 'Tetapan pemasa, keutamaan sesi, dan sejarah fokus disimpan secara tempatan pada Mac atau iPhone menggunakan storan sistem standard, supaya pemasa terus berfungsi luar talian. Setiap akaun log masuk pada peranti mempunyai stor tempatan berasingan. Sesi log masuk anda disimpan dalam Keychain sistem. Bahasa, penampilan, Lancar semasa Log Masuk, pemberitahuan, dan tetapan peringatan motivasi kekal pada setiap peranti dan tidak disegerakkan. Kandungan sejarah fokus sendiri tidak dimuat naik ke pembekal analitik kami.',
      migrationSafety:
        'Apabila anda log masuk buat kali pertama pada peranti yang sudah mempunyai sejarah fokus, aplikasi bertanya sebelum memindahkan sejarah itu ke akaun anda. Sehingga pemindahan disahkan pada pelayan kami, ditambah 90 hari, aplikasi mengekalkan salinan tempatan sebelumnya dan fail sandaran tempatan pada peranti sebagai jaring keselamatan, kemudian membuangnya secara automatik.',
    },
    accountAndSync: {
      title: 'Akaun dan data disegerakkan anda',
      intro: 'Jika anda log masuk, kami memproses:',
      items: [
        'Maklumat hubungan: alamat e-mel dikongsi oleh Sign in with Apple (yang mungkin alamat relay peribadi melalui Hide My Email) atau Google. Kami tidak meminta nama anda.',
        'Pengenal: ID akaun dicipta semasa log masuk, dan ID rawak untuk setiap pemasangan, digunakan hanya untuk penyegerakan dan mengenal pasti peranti yang membuat perubahan.',
        'Data fokus: sesi Fokus dan rehat yang selesai dan dipadam (masa, tempoh, hari tempatan dan zon waktu, dan Tag yang anda pilih), Tag yang anda cipta (nama dan warna), sasaran matlamat harian, rentetan terbaik anda, dan tetapan disegerakkan (tempoh sesi, matlamat harian, bunyi, animasi, bunyi penyelesaian, haiwan sambutan).',
      ],
      closing:
        'Data ini digunakan hanya untuk menyediakan penyegerakan, sejarah, dan ciri akaun. Ia dipautkan ke akaun anda, tidak digunakan untuk penjejakan, dan tidak dikongsi dengan pihak ketiga selain pemproses di bawah.',
    },
    processors: {
      title: 'Pemproses dan lokasi storan',
      bodyBeforeSupabase: 'Data akaun dan penyegerakan disimpan dengan',
      bodyAfterSupabase:
        '(pangkalan data dan pengesahan) di Kesatuan Eropah. Log masuk dikendalikan oleh',
      orWord: 'atau',
      bodyAfterProviders:
        ', bergantung pada pilihan anda. Pembelian Pomodoro Pro diurus dengan',
      bodyAfterRevenueCat:
        '(lihat Pembelian di bawah). Data disulitkan semasa transit, dan akses dihadkan supaya setiap akaun hanya boleh membaca datanya sendiri.',
    },
    purchases: {
      title: 'Pembelian (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro dijual melalui App Store; Apple mengendalikan pembayaran, dan kami tidak pernah melihat butiran pembayaran anda. Untuk membuka Pro pada setiap peranti yang anda log masuk, aplikasi berkongsi ID akaun anda dengan',
      bodyAfterRevenueCat:
        ', yang mengekalkan sejarah pembelian (produk dibeli, tarikh pembelian dan pembaharuan, status langganan) dipautkan ke ID itu. Data ini digunakan hanya untuk memberi dan memulihkan akses Pro, tidak digunakan untuk penjejakan, dan tidak dikongsi dengan pembekal analitik kami. Pro memerlukan akaun log masuk; tiada apa-apa dihantar ke RevenueCat sebelum anda log masuk.',
    },
    focusProtection: {
      title: 'Perlindungan Fokus (iPhone)',
      body: 'Perlindungan Fokus menggunakan rangka kerja Screen Time Apple (Family Controls) untuk menyekat aplikasi, kategori, dan laman web yang anda pilih semasa sesi fokus berjalan. Apple hanya memberikan token tidak telus untuk pilihan anda: kami tidak dapat melihat aplikasi atau laman web yang anda pilih, cara anda menggunakannya, atau data Screen Time lain. Pilihan anda kekal pada iPhone itu, tidak pernah dimuat naik atau disegerakkan, dan tidak dihantar ke pembekal analitik kami. Anda boleh mematikan Perlindungan Fokus dalam aplikasi bila-bila masa, atau membuang akses aplikasi dalam Tetapan → Screen Time → Apps with Screen Time Access.',
    },
    retention: {
      title: 'Pengekalan, sandaran, dan pemadaman',
      items: [
        'Data disegerakkan anda disimpan selagi akaun anda wujud.',
        'Padam akaun (Tetapan → Akaun → Padam akaun) memadam akaun dan semua data disegerakkan secara kekal dari pangkalan data langsung kami, membatalkan kebenaran Sign in with Apple aplikasi apabila disimpan, meminta RevenueCat memadam rekod pembelian dipautkan ke akaun anda, dan membuang data akaun dari peranti tempat anda memadam. Salinan tempatan pada peranti lain tidak lagi boleh disegerakkan dan kekal sehingga anda memadam aplikasi pada peranti tersebut, atau membuangnya dari skrin log masuk apabila ditawarkan.',
        'Pembekal pangkalan data kami mengekalkan sandaran harian selama 7 hari. Data yang dipadam mungkin kekal dalam sandaran itu sehingga tamat tempoh; sandaran digunakan hanya untuk pemulihan bencana. Kami juga mungkin mengekalkan sandaran mingguan disulitkan sehingga 90 hari untuk tujuan yang sama.',
        'Memadam akaun tidak membatalkan langganan App Store; urus atau batalkan dalam tetapan Apple Account anda. Apple mengekalkan rekod transaksi App Store sendiri.',
        'Log keluar tidak memadam apa-apa. Perubahan yang belum disegerakkan kekal pada peranti sehingga akaun yang sama log masuk semula.',
        'Rekod analitik dikendalikan oleh TelemetryDeck di bawah amalan pengekalan mereka dan tidak digunakan untuk memulihkan sejarah fokus anda.',
      ],
    },
    export: {
      title: 'Eksport',
      body: 'Tetapan → Akaun → Eksport data saya menyimpan fail JSON dengan sesi, sasaran matlamat harian, tetapan disegerakkan, dan profil akaun. Data yang belum dipindahkan ke akaun juga boleh dieksport dari skrin log masuk.',
    },
    analytics: {
      title: 'Analitik',
      introBeforeLink: 'Kami menggunakan',
      introAfterLink:
        ', perkhidmatan analitik berfokus privasi, untuk memahami cara aplikasi digunakan (contohnya: sesi fokus atau rehat dimulakan atau diselesaikan, perubahan matlamat harian, perubahan tetapan, hasil kebenaran pemberitahuan, acara peringatan motivasi, dan sama ada onboarding selesai). Isyarat tidak termasuk teks bebas, nama, e-mel, atau kandungan sejarah fokus anda.',
      identifier:
        'TelemetryDeck mengenal pasti pemasangan dengan pengenal berhash skop peranti dan mungkin melampirkan metadata peranti bukan peribadi (seperti model, versi OS, dan locale). Data ini digunakan hanya untuk analitik, tidak dipautkan kepada identiti anda oleh kami, dan tidak digunakan untuk penjejakan merentas aplikasi atau laman web syarikat lain.',
      learnMore: 'Ketahui lebih lanjut:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Kemas kini App Store',
      body: 'Jika anda menggunakan “Semak Kemas Kini” dalam Tetapan, aplikasi mungkin menghubungi Apple untuk melihat sama ada versi lebih baharu tersedia di App Store.',
    },
    launchAtLogin: {
      title: 'Lancar semasa Log Masuk (Mac)',
      body: 'Jika anda mendayakan Lancar semasa Log Masuk dalam Tetapan pada Mac, aplikasi menggunakan API sistem macOS untuk mendaftar sebagai item log masuk. Keutamaan ini dikawal oleh anda dan boleh dimatikan bila-bila masa.',
    },
    notifications: {
      title: 'Pemberitahuan dan Live Activities (iPhone)',
      body: 'Pada iPhone, pemberitahuan tempatan pilihan, peringatan motivasi, dan Live Activities membantu anda melihat bila sesi tamat atau kembali fokus dengan lembut. Kebenaran diminta hanya apabila anda memilih untuk mendayakan ciri tersebut. Kandungan pemberitahuan kekal pada peranti anda.',
    },
    whatWeDoNotDo: {
      title: 'Apa yang kami tidak lakukan',
      items: [
        'Tiada rangkaian pengiklanan',
        'Tiada jualan maklumat peribadi',
        'Tiada akses kepada kenalan, foto, lokasi tepat, kamera, atau mikrofon untuk analitik',
      ],
    },
    children: {
      title: 'Kanak-kanak',
      body: `${PULSE_APP_NAME} tidak dengan sengaja mengumpul maklumat peribadi kanak-kanak melainkan apa yang akaun perlukan untuk penyegerakan, seperti diterangkan di atas. Isyarat analitik adalah tanpa nama dan tidak termasuk kandungan peribadi.`,
    },
    changes: {
      title: 'Perubahan',
      body: 'Jika dasar ini berubah, versi dikemas kini akan disiarkan di URL ini.',
    },
    contact: {
      title: 'Hubungi',
      body: 'Soalan tentang dasar ini:',
    },
  },
}
