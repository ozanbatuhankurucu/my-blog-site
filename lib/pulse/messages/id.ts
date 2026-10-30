import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const idMessages: PulseMessages = {
  languageLabel: 'Bahasa halaman',
  video: {
    ariaLabel: `Walkthrough produk ${PULSE_APP_NAME}`,
    playLabel: 'Putar walkthrough',
    unsupported: 'Peramban Anda tidak mendukung video tersemat.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Timer fokus untuk iPhone dan Mac`,
    metaDescription: `${PULSE_APP_NAME} adalah timer Pomodoro yang tenang untuk iPhone dan Mac dengan Riwayat Fokus, Target Harian, masuk dengan Apple dan Google, serta sinkronisasi offline-first di semua perangkat Anda.`,
    heroImageAlt: `${PULSE_APP_NAME} timer fokus dan ringkasan riwayat mingguan`,
    backToProjects: 'Kembali ke proyek',
    availableOnAppStore: 'Tersedia di App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Timer fokus untuk iPhone dan Mac',
    tagline: 'Timer Pomodoro yang lembut membantu Anda fokus — di iPhone dan bilah menu Mac.',
    description: `Mulai sesi Fokus, istirahat sebentar, dan bawa riwayat Anda. Masuk dengan Apple atau Google agar Target Harian, Riwayat Fokus, dan preferensi tersinkron tetap dengan akun di iPhone dan Mac — sementara timer tetap berjalan offline.`,
    downloadCta: 'Unduh di App Store',
    watchDemo: 'Lihat dalam aksi',
    supportCta: 'Dukungan',
    stats: {
      platformLabel: 'Platform',
      platformValue: 'iPhone & Mac',
      languagesLabel: 'Bahasa',
      languagesValue: '48 bahasa',
      dataLabel: 'Sinkronisasi',
      dataValue: 'Offline-first',
      builtWithLabel: 'Dibangun dengan',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Cara fokus yang lebih tenang',
      title: 'Timer ada saat Anda butuh — dan hilang saat tidak.',
      description: `Di Mac, buka ${PULSE_APP_NAME} dari bilah menu, pilih sesi, lalu tutup popover. Di iPhone, mulai Fokus dari Beranda dan lanjutkan dengan Live Activities di perangkat yang didukung. Timer tetap berjalan saat Anda bekerja.`,
      caption:
        'Timer Fokus dan istirahat, Target Harian, Riwayat Fokus, pelacakan runtunan, lokalisasi 48 bahasa, dan peringatan selesai opsional.',
    },
    rhythm: {
      eyebrow: 'Ritme yang Anda kendalikan',
      title: 'Fokus, jeda, pulih, ulangi.',
      description: `${PULSE_APP_NAME} menyarankan langkah berikutnya tetapi tidak pernah memulai sesi untuk Anda. Setiap durasi dapat disesuaikan dengan hari Anda.`,
    },
    featureShowcases: [
      {
        title: 'Fokus',
        badge: '1–120 menit',
        description:
          'Hitung mundur berjalan tenang saat Anda bekerja. Jeda, reset, atau lewati — Anda tetap mengendalikan di iPhone dan Mac.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} sesi fokus berjalan dengan kontrol jeda dan hitung mundur`,
      },
      {
        title: 'Bilah menu',
        badge: 'Mac',
        description:
          'Di Mac, tampilkan atau sembunyikan sisa waktu di bilah menu. Item status lebar tetap tidak bergeser popover, hingga 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} hitung mundur di bilah menu macOS`,
      },
      {
        title: 'Kustomisasi',
        badge: 'Aturan Anda',
        description:
          'Durasi fleksibel, Target Harian, suara dan animasi selesai, 48 bahasa UI, dan preferensi tampilan.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} pengaturan durasi, peringatan selesai, bahasa, dan target`,
      },
    ],
    history: {
      eyebrow: 'Kemajuan tanpa tekanan',
      title: 'Lihat pekerjaan terakumulasi.',
      description:
        'Buka Riwayat Fokus untuk meninjau total dan runtunan. Saat masuk, riwayat dapat disinkronkan antara iPhone dan Mac agar kemajuan mengikuti Anda.',
      items: [
        'Total waktu fokus',
        'Jumlah sesi selesai',
        'Runtunan saat ini',
        'Runtunan terbaik',
        'Target Harian',
      ],
      imageAlt: `${PULSE_APP_NAME} riwayat fokus mingguan dengan jumlah sesi, jam fokus, dan runtunan`,
    },
    feedback: {
      eyebrow: 'Umpan balik lembut, cara Anda',
      title: 'Buat menyelesaikan terasa rewarding.',
      description: `Pilih dari enam suara selesai yang tenang dan enam perayaan hewan, atau matikan salah satunya. ${PULSE_APP_NAME} menampilkan pesan yang tepat saat sesi Fokus, Istirahat Singkat, atau Istirahat Panjang berakhir.`,
      items: [
        'Judul dan subjudul selesai sesuai sesi',
        'UI dalam 48 bahasa dengan default bahasa sistem',
        'Preferensi bahasa dan tampilan di setiap perangkat',
        'Pengingat motivasi opsional di iPhone',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} pengaturan durasi, bahasa, suara selesai, dan target`,
      celebrationImageAlt: `${PULSE_APP_NAME} animasi perayaan kelinci saat sesi selesai`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Monyet', 'Koala', 'Kucing', 'Rubah', 'Panda', 'Kelinci'],
    },
    native: {
      eyebrow: 'Native by design',
      title: 'Dibuat agar terasa di rumah di perangkat Apple.',
      description: `SwiftUI, AppKit, dan konvensi sistem menjaga ${PULSE_APP_NAME} cepat dan familiar — dengan label VoiceOver dan dukungan Reduce Motion di seluruh aplikasi.`,
      features: [
        {
          title: 'Bilah menu Mac & Beranda iPhone',
          description: 'Teman bilah menu yang tenang di Mac, dan pengalaman Beranda fokus di iPhone.',
        },
        {
          title: 'Tetap akurat',
          description:
            'Sesi tetap benar saat tidur, bangun, dan peluncuran ulang, dengan riwayat dicatat pada batas waktu aktual.',
        },
        {
          title: 'Sinkronisasi offline-first',
          description:
            'Tetap fokus tanpa koneksi. Saat online kembali, perubahan yang masuk disinkronkan ke akun Anda.',
        },
        {
          title: 'Berbicara bahasa Anda',
          description:
            'UI penuh dalam 48 bahasa dengan default bahasa sistem dan override manual di Pengaturan.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privat by design',
      title: 'Fokus Anda tetap milik Anda.',
      description: `${PULSE_APP_NAME} menggunakan akun agar riwayat dapat disinkronkan antar perangkat. Kami hanya menyimpan yang dibutuhkan sinkronisasi, tidak pernah menjual data Anda, dan memisahkan analitik dari riwayat fokus.`,
      items: [
        'Masuk dengan Apple atau Google',
        'Fokus offline-first di setiap perangkat',
        'Sinkronisasi cloud untuk riwayat dan preferensi tersinkron',
        'Tanpa jaringan iklan',
        'Hapus akun kapan saja di Pengaturan',
      ],
    },
    closing: {
      title: 'Buat ruang untuk pekerjaan fokus.',
      description: `Dapatkan ${PULSE_APP_NAME} di App Store untuk iPhone dan Mac, atau baca kebijakan privasi dan halaman dukungan jika Anda butuh bantuan.`,
      getSupport: 'Dapatkan dukungan',
      privacy: 'Privasi',
    },
  },
  support: {
    metaTitle: `Dukungan ${PULSE_APP_NAME}`,
    metaDescription: `Dukungan, FAQ, dan bantuan akun untuk ${PULSE_APP_NAME} di iPhone dan Mac — termasuk Pomodoro Pro, pembelian, Perlindungan Fokus, masuk, sinkronisasi, dan penghapusan akun.`,
    title: `Dukungan ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} adalah timer Pomodoro yang tenang untuk iPhone dan Mac. Masuk dengan Apple atau Google untuk menyinkronkan Riwayat Fokus antar perangkat. Di iPhone, Pomodoro Pro opsional membuka Perlindungan Fokus, Tag kustom, dan Wawasan Tag.`,
    gettingStarted: {
      title: 'Memulai',
      items: [
        {
          question: 'Bagaimana memulai sesi Fokus?',
          answer:
            'Di Mac, klik ikon aplikasi di bilah menu, pilih Fokus, Istirahat Singkat, atau Istirahat Panjang, lalu tekan Mulai. Di iPhone, buka aplikasi, pilih sesi di Beranda, dan tekan Mulai. Anda dapat meninggalkan aplikasi saat timer berjalan.',
        },
        {
          question: 'Bagaimana mengubah durasi Fokus dan Istirahat?',
          answer:
            'Buka Pengaturan dan sesuaikan panjang Fokus, Istirahat Singkat, dan Istirahat Panjang. Anda juga dapat memilih ritme preset, lalu menyesuaikan menitnya.',
        },
        {
          question: 'Bagaimana mengonfigurasi Target Harian?',
          answer:
            'Di Pengaturan, tentukan berapa sesi Fokus yang Anda inginkan setiap hari. Kemajuan muncul di Beranda dan di Riwayat Fokus.',
        },
        {
          question: 'Bagaimana melihat Riwayat Fokus?',
          answer:
            'Buka Riwayat Fokus dari aplikasi (di Mac, dari popover atau menu status). Anda akan melihat total, runtunan, dan kemajuan mingguan.',
        },
        {
          question: 'Bagaimana mengubah bahasa dan tampilan?',
          answer:
            'Di Pengaturan, pilih Bahasa (Sistem atau bahasa yang didukung) dan Tampilan (Sistem, Terang, atau Gelap). Preferensi ini tetap di setiap perangkat dan tidak disinkronkan.',
        },
      ],
    },
    accounts: {
      title: 'Akun',
      items: [
        {
          question: 'Mengapa masuk diperlukan?',
          answer:
            'Akun membuat Riwayat Fokus, Target Harian, dan preferensi tersinkron mengikuti Anda di iPhone dan Mac. Instal baru meminta Anda masuk sebelum menggunakan timer. Perangkat yang upgrade dari versi lama mungkin tetap dapat memakai riwayat lokal hingga Anda masuk. Pembelian Pomodoro Pro juga tetap dengan akun yang masuk.',
        },
        {
          question: 'Bagaimana masuk dengan Apple atau Google?',
          answer:
            'Di layar masuk, pilih Lanjutkan dengan Apple atau Lanjutkan dengan Google dan selesaikan alur penyedia. Apple mungkin menawarkan Hide My Email.',
        },
        {
          question: 'Bagaimana keluar?',
          answer:
            'Buka Pengaturan → Akun → Keluar. Jika beberapa perubahan belum disinkronkan, aplikasi mungkin meminta sinkronisasi dulu atau keluar saja. Keluar tidak menghapus akun Anda.',
        },
        {
          question: 'Bagaimana masuk kembali?',
          answer:
            'Gunakan metode Apple atau Google yang sama di layar masuk. Riwayat cloud dipulihkan ke akun tersebut di perangkat.',
        },
        {
          question: 'Apa yang terjadi jika saya memakai akun berbeda?',
          answer:
            'Setiap akun punya riwayat sendiri. Masuk ke akun lain tidak menggabungkan riwayat yang tidak terkait. Pilih dengan hati-hati sebelum mengonfirmasi klaim riwayat di perangkat yang sudah punya sesi lokal.',
        },
        {
          question: 'Bisakah menghubungkan Apple dan Google ke akun yang sama?',
          answer:
            'Ya. Di Pengaturan → Akun Anda dapat menautkan metode masuk lainnya jika belum dipakai akun berbeda.',
        },
      ],
    },
    cloudSync: {
      title: 'Sinkronisasi cloud',
      items: [
        {
          question: 'Apa yang disinkronkan antar perangkat?',
          answer:
            'Riwayat sesi Fokus dan istirahat (termasuk Tag yang Anda pilih), Tag yang Anda buat, catatan Target Harian, data akun terkait runtunan, dan preferensi tersinkron seperti durasi sesi, target harian, suara, animasi, suara selesai, dan hewan perayaan.',
        },
        {
          question: 'Apa yang terjadi tanpa internet?',
          answer:
            'Setelah masuk, Anda tetap dapat memakai timer offline. Sesi dan perubahan baru tetap di perangkat hingga koneksi tersedia.',
        },
        {
          question: 'Apa yang terjadi saat online kembali?',
          answer:
            'Aplikasi menyinkronkan perubahan tertunda dengan akun Anda. Sinkronisasi offline-first dan eventually consistent — bukan kolaborasi real-time instan.',
        },
        {
          question: 'Bagaimana memakai akun yang sama di iPhone dan Mac?',
          answer:
            'Instal aplikasi di kedua perangkat dan masuk dengan akun Apple atau Google yang sama. Setelah pemulihan selesai, Riwayat Fokus dapat muncul di keduanya.',
        },
        {
          question: 'Bagaimana jika riwayat hilang?',
          answer:
            'Pastikan Anda masuk ke akun yang sama, tunggu pemulihan/sinkronisasi selesai, dan periksa Riwayat Fokus lagi. Jika Anda masuk ke akun berbeda, akun itu akan menampilkan riwayatnya sendiri.',
        },
      ],
    },
    migration: {
      title: 'Upgrade dari versi lama',
      items: [
        {
          question: 'Apa yang terjadi pada riwayat lokal yang ada?',
          answer:
            'Riwayat lokal yang ada tidak dihapus diam-diam. Setelah masuk, aplikasi bertanya sebelum menambahkan riwayat itu ke akun Anda.',
        },
        {
          question: 'Bagaimana seharusnya saya klaim riwayat?',
          answer:
            'Masuk ke akun yang seharusnya memiliki riwayat, tinjau layar Tambahkan riwayat Anda, lalu pilih Tambahkan ke akun ini. Gunakan akun berbeda jika akun yang ditampilkan salah. Sesi tidak dapat dipindahkan ke akun lain nanti.',
        },
        {
          question: 'Bagaimana jika pengaturan perangkat dan akun berbeda?',
          answer:
            'Aplikasi mungkin bertanya apakah mempertahankan pengaturan perangkat ini atau memakai pengaturan akun. Bahasa, tampilan, notifikasi, dan pengingat motivasi tetap lokal per perangkat.',
        },
      ],
    },
    notifications: {
      title: 'Notifikasi',
      items: [
        {
          question: 'Bagaimana mengaktifkan notifikasi di iPhone?',
          answer:
            'Buka Pengaturan → Notifikasi dan pilih Aktifkan, atau buka Pengaturan sistem jika izin sebelumnya ditolak.',
        },
        {
          question: 'Bagaimana pengingat motivasi bekerja?',
          answer:
            'Di iPhone, buka Pengaturan → Pengingat motivasi dan aktifkan setelah notifikasi diizinkan. Anda dapat menjeda atau mengatur jam tenang. Opsional dan default mati.',
        },
        {
          question: 'Bagaimana jika notifikasi dinonaktifkan?',
          answer:
            'Peringatan akhir sesi dan pengingat motivasi membutuhkan izin notifikasi. Gunakan Pengaturan → Notifikasi → Buka Pengaturan untuk mengaktifkannya di Pengaturan iOS.',
        },
        {
          question: 'Bagaimana Live Activities bekerja?',
          answer:
            'Di iPhone yang didukung, Live Activity opsional dapat menampilkan sesi aktif di Layar Kunci dan Dynamic Island. Izin diminta saat Anda mengaktifkan fitur terkait.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Apa itu Pomodoro Pro?',
          answer:
            'Pomodoro Pro adalah pembelian dalam aplikasi opsional di iPhone. Membuka Perlindungan Fokus, Tag kustom (nama dan warna Anda), dan Wawasan Tag (waktu fokus per Tag mingguan dan bulanan). Timer, Tag bawaan, Riwayat Fokus, dan sinkronisasi tetap tersedia tanpa Pro.',
        },
        {
          question: 'Opsi pembelian apa yang tersedia?',
          answer:
            'Pomodoro Pro ditawarkan sebagai langganan Bulanan, langganan Tahunan (Annual), atau pembelian sekali Lifetime. Langganan diperpanjang otomatis kecuali Anda membatalkan setidaknya 24 jam sebelum akhir periode saat ini. Lifetime ditagih sekali dan bukan langganan.',
        },
        {
          question: 'Di mana membeli atau melihat Pomodoro Pro?',
          answer:
            'Di iPhone, buka Pengaturan → Pomodoro Pro, atau ketuk chip perlindungan di Beranda. Anda harus masuk. Pro tetap dengan akun di setiap perangkat yang Anda masuki.',
        },
        {
          question: 'Bagaimana memulihkan pembelian?',
          answer:
            'Gunakan Restore Purchases di paywall atau di Pengaturan → Pomodoro Pro. Pembelian dengan Apple Account yang sama pindah ke akun yang Anda masuki. Jika tidak ditemukan, pastikan Apple Account yang membeli Pro dan coba lagi saat online.',
        },
      ],
    },
    purchases: {
      title: 'Langganan dan pembelian',
      items: [
        {
          question: 'Bagaimana mengelola atau membatalkan langganan?',
          answer:
            'Langganan ditagih oleh Apple. Di iPhone, buka Pengaturan → Pomodoro Pro → Manage Subscription, atau ke Pengaturan → [nama Anda] → Subscriptions dan pilih aplikasi. Batalkan setidaknya 24 jam sebelum perpanjangan untuk menghindari tagihan berikutnya. Menghapus aplikasi atau akun Pomodoro tidak membatalkan langganan.',
        },
        {
          question: 'Bagaimana meminta refund?',
          answer:
            'Refund ditangani Apple. Kunjungi reportaproblem.apple.com, masuk dengan Apple Account yang dipakai untuk pembelian, temukan transaksi, dan kirim permintaan refund. Kami tidak dapat memproses refund App Store sendiri.',
        },
        {
          question: 'Bagaimana jika pembelian gagal atau Pro tidak terbuka?',
          answer:
            'Tetap masuk, periksa koneksi jaringan, dan coba lagi. Jika pembayaran tertunda (misalnya Ask to Buy), Pro terbuka setelah disetujui. Jika sudah bayar, gunakan Restore Purchases. Untuk masalah pembayaran pada langganan aktif, perbarui metode pembayaran di pengaturan App Store.',
        },
        {
          question: 'Bagaimana jika membeli Lifetime saat langganan masih aktif?',
          answer:
            'Lifetime membuka Pro permanen, tetapi langganan yang ada tidak dibatalkan otomatis. Matikan perpanjangan otomatis di pengaturan langganan App Store agar tidak ditagih lagi.',
        },
      ],
    },
    focusProtection: {
      title: 'Perlindungan Fokus',
      items: [
        {
          question: 'Apa itu Perlindungan Fokus?',
          answer:
            'Perlindungan Fokus adalah fitur Pomodoro Pro di iPhone. Memakai API Screen Time Apple untuk memblokir aplikasi, kategori, atau situs web yang Anda pilih saat sesi Fokus berjalan. Istirahat tidak pernah diblokir. Saat sesi berakhir, aplikasi yang diblokir terbuka otomatis.',
        },
        {
          question: 'Bagaimana menyiapkannya?',
          answer:
            'Dengan Pro aktif, ketuk chip Perlindungan Fokus di Beranda (atau buka dari Pengaturan). Izinkan akses Screen Time saat diminta, pilih yang diblokir, lalu aktifkan Perlindungan Fokus. Mulai sesi Fokus untuk menerapkan perisai.',
        },
        {
          question: 'Bagaimana mematikannya atau membuka kunci aplikasi?',
          answer:
            'Buka sheet Perlindungan Fokus dan pilih Turn Off Now, atau matikan fitur. Setelah sesi berakhir Anda juga dapat memakai Unlock Apps di layar perisai. Untuk menghapus akses Screen Time aplikasi sepenuhnya, buka Pengaturan iOS → Screen Time → Apps with Screen Time Access.',
        },
        {
          question: 'Bagaimana jika Perlindungan Fokus tidak bekerja?',
          answer:
            'Pastikan Pro aktif, akses Screen Time diizinkan, dan Anda memilih aplikasi atau kategori untuk diblokir. Perlindungan Fokus hanya berlaku selama sesi Fokus, bukan istirahat. Jika akses dicabut di Pengaturan sistem, buka aplikasi dan izinkan lagi. Restart iPhone dapat membantu setelah perubahan izin.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Akun dan privasi',
      items: [
        {
          question: 'Bagaimana menghapus akun?',
          answer:
            'Masuk, buka Pengaturan → Akun → Hapus akun, lalu konfirmasi. Akun dan riwayat fokus tersinkron dihapus permanen dari basis data live kami. Tidak dapat dibatalkan. Penghapusan membutuhkan koneksi jaringan. Menghapus akun tidak membatalkan langganan App Store — kelola di pengaturan App Store.',
        },
        {
          question: 'Apa dampak penghapusan akun?',
          answer:
            'Data cloud tersinkron untuk akun itu dihapus, otorisasi Sign in with Apple dicabut jika disimpan, catatan pembelian terkait akun diminta dihapus dari penyedia pembelian, dan data akun dihapus dari perangkat tempat Anda menghapusnya. Salinan lokal di perangkat lain tidak lagi sinkron; hapus aplikasi atau bersihkan di sana jika perlu. Backup penyedia mungkin menyimpan data terhapus dalam jendela pemulihan terbatas. Apple menyimpan catatan transaksi App Store sendiri.',
        },
        {
          question: 'Bagaimana mengekspor data?',
          answer:
            'Pengaturan → Akun → Ekspor data saya menyimpan file JSON dengan sesi, target harian, pengaturan tersinkron, dan profil akun. Data lokal yang belum diklaim juga dapat diekspor dari layar masuk.',
        },
        {
          question: 'Di mana Kebijakan Privasi?',
          answer:
            'Buka Kebijakan Privasi dari situs web produk, atau gunakan tautan privasi di halaman produk situs ini.',
        },
      ],
    },
    requirements: {
      title: 'Persyaratan',
      body: 'iPhone: iOS 17 atau lebih baru. Mac: macOS 14.6 atau lebih baru. Pembelian Pomodoro Pro dan Perlindungan Fokus tersedia di iPhone.',
    },
    contact: {
      title: 'Kontak',
      body: 'Untuk bantuan, masukan, atau laporan bug:',
    },
    privacyPolicyLink: 'Kebijakan Privasi',
  },
  privacy: {
    metaTitle: `Kebijakan Privasi ${PULSE_APP_NAME}`,
    metaDescription: `Kebijakan privasi untuk ${PULSE_APP_NAME}, mencakup masuk Apple dan Google, sinkronisasi cloud, pembelian Pomodoro Pro via RevenueCat, Perlindungan Fokus, analitik, dan penghapusan akun di Mac dan iPhone.`,
    title: 'Kebijakan Privasi',
    subtitle: `${PULSE_APP_NAME} — Timer Pomodoro untuk Mac dan iPhone`,
    lastUpdated: 'Terakhir diperbarui: 26 Oktober 2026',
    summary: {
      title: 'Ringkasan',
      body: `Saat Anda masuk dengan Apple atau Google, akun Anda menjaga riwayat fokus, target harian, dan pengaturan timer tersinkron antara Mac dan iPhone. Kami hanya menyimpan yang dibutuhkan aplikasi: alamat email, pengenal akun, dan data fokus yang Anda buat. Kami tidak pernah menjualnya, tidak memakainya untuk iklan, dan tidak membagikannya dengan penyedia analitik kami. Jika Anda membeli Pomodoro Pro di iPhone, penyedia pembelian RevenueCat menyimpan riwayat pembelian terkait akun agar Pro bekerja di setiap perangkat yang Anda masuki. Pilihan aplikasi Perlindungan Fokus tidak pernah meninggalkan iPhone Anda. Anda dapat mengekspor data atau menghapus akun kapan saja dari Pengaturan. Terpisah, aplikasi dapat mengirim analitik penggunaan anonim yang menjaga privasi agar kami dapat meningkatkan alur fokus.`,
    },
    localData: {
      title: 'Data disimpan di perangkat Anda',
      body: 'Pengaturan timer, preferensi sesi, dan riwayat fokus disimpan lokal di Mac atau iPhone menggunakan penyimpanan sistem standar, sehingga timer tetap berjalan offline. Setiap akun yang masuk di perangkat punya penyimpanan lokal terpisah. Sesi masuk disimpan di Keychain sistem. Bahasa, tampilan, Launch at Login, notifikasi, dan pengaturan pengingat motivasi tetap di setiap perangkat dan tidak disinkronkan. Konten riwayat fokus sendiri tidak diunggah ke penyedia analitik kami.',
      migrationSafety:
        'Saat pertama kali masuk di perangkat yang sudah punya riwayat fokus, aplikasi bertanya sebelum memindahkan riwayat itu ke akun Anda. Hingga pemindahan dikonfirmasi di server kami, plus 90 hari, aplikasi menyimpan salinan lokal sebelumnya dan file backup lokal di perangkat sebagai jaring pengaman, lalu menghapusnya otomatis.',
    },
    accountAndSync: {
      title: 'Akun dan data tersinkron Anda',
      intro: 'Jika Anda masuk, kami memproses:',
      items: [
        'Info kontak: alamat email yang dibagikan Sign in with Apple (bisa alamat relay privat via Hide My Email) atau Google. Kami tidak meminta nama Anda.',
        'Pengenal: ID akun dibuat saat masuk, dan ID acak untuk setiap instal, hanya dipakai untuk sinkronisasi dan mengidentifikasi perangkat mana yang membuat perubahan.',
        'Data fokus: sesi Fokus dan istirahat selesai dan dihapus (waktu, durasi, hari lokal dan zona waktu, serta Tag yang Anda pilih), Tag yang Anda buat (nama dan warna), target harian, runtunan terbaik, dan pengaturan tersinkron (durasi sesi, target harian, suara, animasi, suara selesai, hewan perayaan).',
      ],
      closing:
        'Data ini hanya dipakai untuk menyediakan sinkronisasi, riwayat, dan fitur akun. Terkait akun Anda, tidak dipakai untuk pelacakan, dan tidak dibagikan ke pihak ketiga selain prosesor di bawah.',
    },
    processors: {
      title: 'Prosesor dan lokasi penyimpanan',
      bodyBeforeSupabase: 'Data akun dan sinkronisasi disimpan dengan',
      bodyAfterSupabase:
        '(basis data dan autentikasi) di Uni Eropa. Masuk ditangani oleh',
      orWord: 'atau',
      bodyAfterProviders:
        ', tergantung opsi yang Anda pilih. Pembelian Pomodoro Pro dikelola dengan',
      bodyAfterRevenueCat:
        '(lihat Pembelian di bawah). Data dienkripsi saat transit, dan akses dibatasi agar setiap akun hanya dapat membaca data sendiri.',
    },
    purchases: {
      title: 'Pembelian (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro dijual melalui App Store; Apple menangani pembayaran, dan kami tidak pernah melihat detail pembayaran Anda. Agar Pro terbuka di setiap perangkat yang Anda masuki, aplikasi membagikan ID akun dengan',
      bodyAfterRevenueCat:
        ', yang menyimpan riwayat pembelian (produk dibeli, tanggal pembelian dan perpanjangan, status langganan) terkait ID itu. Data ini hanya dipakai untuk memberikan dan memulihkan akses Pro, tidak dipakai untuk pelacakan, dan tidak dibagikan ke penyedia analitik kami. Pro membutuhkan akun masuk; tidak ada yang dikirim ke RevenueCat sebelum Anda masuk.',
    },
    focusProtection: {
      title: 'Perlindungan Fokus (iPhone)',
      body: 'Perlindungan Fokus memakai framework Screen Time Apple (Family Controls) untuk memblokir aplikasi, kategori, dan situs web yang Anda pilih saat sesi fokus berjalan. Apple hanya memberi token tidak transparan untuk pilihan Anda: kami tidak dapat melihat aplikasi atau situs web mana yang Anda pilih, cara Anda memakainya, atau data Screen Time lainnya. Pilihan Anda tetap di iPhone itu, tidak pernah diunggah atau disinkronkan, dan tidak dikirim ke penyedia analitik kami. Anda dapat mematikan Perlindungan Fokus di aplikasi kapan saja, atau menghapus akses aplikasi di Pengaturan → Screen Time → Apps with Screen Time Access.',
    },
    retention: {
      title: 'Retensi, backup, dan penghapusan',
      items: [
        'Data tersinkron Anda disimpan selama akun ada.',
        'Hapus akun (Pengaturan → Akun → Hapus akun) menghapus permanen akun dan semua data tersinkron dari basis data live kami, mencabut otorisasi Sign in with Apple jika disimpan, meminta RevenueCat menghapus catatan pembelian terkait akun, dan menghapus data akun dari perangkat tempat Anda menghapusnya. Salinan lokal di perangkat lain tidak lagi sinkron dan tetap ada hingga Anda menghapus aplikasi di perangkat itu, atau menghapusnya dari layar masuk jika ditawarkan.',
        'Penyedia basis data menyimpan backup harian selama 7 hari. Data terhapus mungkin masih ada di backup hingga kedaluwarsa; backup hanya untuk pemulihan bencana. Kami juga dapat menyimpan backup mingguan terenkripsi hingga 90 hari untuk tujuan yang sama.',
        'Menghapus akun tidak membatalkan langganan App Store; kelola atau batalkan di pengaturan Apple Account. Apple menyimpan catatan transaksi App Store sendiri.',
        'Keluar tidak menghapus apa pun. Perubahan yang belum disinkronkan tetap di perangkat hingga akun yang sama masuk lagi.',
        'Catatan analitik ditangani TelemetryDeck sesuai praktik retensi mereka dan tidak dipakai untuk memulihkan riwayat fokus Anda.',
      ],
    },
    export: {
      title: 'Ekspor',
      body: 'Pengaturan → Akun → Ekspor data saya menyimpan file JSON dengan sesi, target harian, pengaturan tersinkron, dan profil akun. Data yang belum dipindahkan ke akun juga dapat diekspor dari layar masuk.',
    },
    analytics: {
      title: 'Analitik',
      introBeforeLink: 'Kami memakai',
      introAfterLink:
        ', layanan analitik yang fokus privasi, untuk memahami cara aplikasi dipakai (misalnya: sesi fokus atau istirahat dimulai atau selesai, perubahan target harian, perubahan pengaturan, hasil izin notifikasi, peristiwa pengingat motivasi, dan apakah onboarding selesai). Sinyal tidak termasuk teks bebas, nama, email, atau isi riwayat fokus Anda.',
      identifier:
        'TelemetryDeck mengidentifikasi instal dengan pengenal hashed scoped perangkat dan dapat melampirkan metadata perangkat non-pribadi (seperti model, versi OS, dan locale). Data ini hanya untuk analitik, tidak ditautkan ke identitas Anda oleh kami, dan tidak dipakai untuk pelacakan di aplikasi atau situs web perusahaan lain.',
      learnMore: 'Pelajari lebih lanjut:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Pembaruan App Store',
      body: 'Jika Anda memakai “Periksa Pembaruan” di Pengaturan, aplikasi dapat menghubungi Apple untuk melihat apakah versi lebih baru tersedia di App Store.',
    },
    launchAtLogin: {
      title: 'Launch at Login (Mac)',
      body: 'Jika Anda mengaktifkan Launch at Login di Pengaturan di Mac, aplikasi memakai API sistem macOS untuk mendaftar sebagai item login. Preferensi ini dikendalikan Anda dan dapat dinonaktifkan kapan saja.',
    },
    notifications: {
      title: 'Notifikasi dan Live Activities (iPhone)',
      body: 'Di iPhone, notifikasi lokal opsional, pengingat motivasi, dan Live Activities membantu Anda melihat saat sesi berakhir atau kembali fokus dengan lembut. Izin diminta hanya saat Anda memilih mengaktifkan fitur tersebut. Konten notifikasi tetap di perangkat Anda.',
    },
    whatWeDoNotDo: {
      title: 'Yang tidak kami lakukan',
      items: [
        'Tanpa jaringan iklan',
        'Tanpa penjualan informasi pribadi',
        'Tanpa akses ke kontak, foto, lokasi presisi, kamera, atau mikrofon untuk analitik',
      ],
    },
    children: {
      title: 'Anak-anak',
      body: `${PULSE_APP_NAME} tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak di luar yang dibutuhkan akun untuk sinkronisasi, seperti dijelaskan di atas. Sinyal analitik anonim dan tidak termasuk konten pribadi.`,
    },
    changes: {
      title: 'Perubahan',
      body: 'Jika kebijakan ini berubah, versi terbaru akan diposting di URL ini.',
    },
    contact: {
      title: 'Kontak',
      body: 'Pertanyaan tentang kebijakan ini:',
    },
  },
}
