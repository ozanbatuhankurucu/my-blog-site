import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LuArrowLeft, LuArrowUpRight, LuClock3, LuGlobe, LuHistory, LuMonitor, LuSettings2, LuShieldCheck, LuSparkles } from 'react-icons/lu'
import { ButtonLink } from '../../../components/Button'
import PulseDemoVideo from '../../../components/PulseDemoVideo'
import { PulseLocaleSwitcher } from '../../../components/PulseLocaleSwitcher'
import { WatchPulseDemoButton } from '../../../components/WatchPulseDemoButton'
import { Tag } from '../../../components/Tag'
import {
  getPulseAppPath,
  getPulseImageDir,
  getPulseLanguageAlternates,
  PULSE_APP_NAME,
  PULSE_APP_VERSION,
  PULSE_APP_STORE_URL,
  SITE_CONFIG,
  SITE_URL
} from '../../../lib/constants'
import { PROJECTS } from '../../projects'

const pulseProject = PROJECTS.find((project) => project.slug === 'pomodoro-work-study-timer')!
const pulsePath = getPulseAppPath('tr')
const pulseImageDir = getPulseImageDir('tr')
const pageTitle = `${PULSE_APP_NAME} — macOS için menü çubuğu Pomodoro zamanlayıcısı`
const pageDescription =
  `${PULSE_APP_NAME}, menü çubuğunda yaşayan ücretsiz ve native bir macOS Pomodoro zamanlayıcısıdır. Yenilenen arayüz, tam odak geçmişi, seansa özel bildirimler ve İngilizce/Türkçe destek sunar.`

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}${pulsePath}`,
    languages: getPulseLanguageAlternates()
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}${pulsePath}`,
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: ['en_US'],
    siteName: `${SITE_CONFIG.name} Blog`,
    images: [
      {
        url: `${pulseImageDir}/hero.png`,
        width: 1024,
        height: 640,
        alt: `${PULSE_APP_NAME} Türkçe odak zamanlayıcısı ve haftalık geçmiş görünümü`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [`${pulseImageDir}/hero.png`]
  }
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: PULSE_APP_NAME,
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS 14.6 or later',
  softwareVersion: PULSE_APP_VERSION,
  description: pageDescription,
  url: `${SITE_URL}${pulsePath}`,
  downloadUrl: PULSE_APP_STORE_URL,
  inLanguage: ['tr', 'en'],
  author: {
    '@type': 'Person',
    name: SITE_CONFIG.name,
    url: SITE_URL
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  },
  featureList: pulseProject.features?.map((feature) => feature.text),
  screenshot: `${SITE_URL}${pulseImageDir}/hero.png`
}

const screenshotAspectRatio = '1024 / 640'

const featureShowcases = [
  {
    title: 'Odak',
    badge: '1–120 dk',
    description: 'Geri sayım siz çalışırken sessizce ilerler. Duraklatın, sıfırlayın veya atlayın; sayaç menü çubuğunda sabit kalır.',
    image: `${pulseImageDir}/focus-running.png`,
    alt: `${PULSE_APP_NAME} odak seansı; duraklatma kontrolleri ve menü çubuğu geri sayımı`
  },
  {
    title: 'Menü çubuğu',
    badge: 'Sabit sayaç',
    description: 'Kalan süreyi anında gösterip gizleyin. Sabit genişlikli sayaç, 120:00’a kadar popover’ı kaydırmadan yerinde kalır.',
    image: `${pulseImageDir}/menubar.png`,
    alt: `${PULSE_APP_NAME} geri sayımının macOS menü çubuğunda görünümü`
  },
  {
    title: 'Özelleştirme',
    badge: 'Sizin kurallarınız',
    description: 'Esnek süreler, tamamlanma sesleri ve animasyonları, İngilizce ve Türkçe arayüz, oturum açılışında başlatma.',
    image: `${pulseImageDir}/settings.png`,
    alt: `${PULSE_APP_NAME} süre, tamamlanma uyarıları, dil ve oturum açılışında başlatma ayarları`
  }
]

const nativeFeatures = [
  {
    icon: LuMonitor,
    title: 'Menü çubuğunda yaşar',
    description: 'Dock simgesi yok; dikkatinizi çalan ana pencere de yok.'
  },
  {
    icon: LuClock3,
    title: 'Doğru kalır',
    description: 'Seanslar uyku, uyanma ve yeniden başlatmalarda doğru kalır; geçmişe gerçek bitiş zamanıyla kaydedilir.'
  },
  {
    icon: LuShieldCheck,
    title: 'Veriyi yerelde tutar',
    description: 'Ayarlarınız ve odak geçmişiniz Mac’inizden dışarı çıkmaz.'
  },
  {
    icon: LuGlobe,
    title: 'Dilinizi konuşur',
    description: 'Tam İngilizce ve Türkçe arayüz; sistem dili varsayılanı ve Ayarlar’dan manuel seçim.'
  }
]

export default function PulsePomodoroTurkishPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareJsonLd).replace(/</g, '\\u003c')
        }}
      />

      <div className='overflow-hidden' lang='tr'>
        <section className='container py-12 md:py-24 relative'>
          <div className='absolute top-16 right-0 w-64 h-64 rounded-full bg-accent-muted blur-3xl' aria-hidden='true' />
          <div className='flex flex-wrap items-center justify-between gap-4 mb-12'>
            <Link
              href='/projects'
              className='inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors duration-fast'>
              <LuArrowLeft size={16} aria-hidden='true' />
              Projelere dön
            </Link>
            <PulseLocaleSwitcher locale='tr' />
          </div>

          <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            <div className='animate-slide-up'>
              <div className='flex flex-wrap items-center gap-3 mb-6'>
                <Tag variant='status' status='success' size='md'>
                  Mac App Store’da mevcut
                </Tag>
                <span className='font-mono text-sm text-text-muted'>v{PULSE_APP_VERSION} · Ücretsiz · macOS 14.6+</span>
              </div>
              <p className='font-mono text-sm text-accent mb-4'>Menü çubuğu Pomodoro zamanlayıcısı</p>
              <h1 className='font-mono text-4xl md:text-5xl font-medium text-text-primary mb-6'>{PULSE_APP_NAME}</h1>
              <p className='text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-4'>
                Menü çubuğunuzda yaşayan sakin bir Pomodoro zamanlayıcısı.
              </p>
              <p className='text-text-secondary text-lg leading-relaxed max-w-2xl mb-8'>
                Masaüstünüzü doldurmadan odaklanın. Bir odak seansı başlatın, mola verin ve {PULSE_APP_NAME}{' '}
                ilerlemenizi tam odak geçmişiyle sessizce takip etsin.
              </p>
              <div className='flex flex-wrap gap-3'>
                <ButtonLink href={PULSE_APP_STORE_URL} external variant='primary' size='lg'>
                  Mac App Store’dan indir
                  <LuArrowUpRight className='ml-2' size={16} aria-hidden='true' />
                </ButtonLink>
                <WatchPulseDemoButton label='Nasıl çalıştığını izle' />
                <ButtonLink href={`${pulsePath}/support`} variant='ghost' size='lg'>
                  Destek
                </ButtonLink>
              </div>
            </div>

            <div className='relative animate-fade-in'>
              <div
                className='absolute inset-0 bg-accent-muted rounded-lg translate-x-3 translate-y-3'
                aria-hidden='true'
              />
              <div
                className='relative overflow-hidden rounded-lg border border-border-default bg-bg-elevated'
                style={{ aspectRatio: screenshotAspectRatio }}>
                <Image
                  src={`${pulseImageDir}/hero.png`}
                  alt={`${PULSE_APP_NAME} Türkçe odak zamanlayıcısı ve haftalık geçmiş görünümü`}
                  fill
                  priority
                  sizes='(min-width: 768px) 50vw, 100vw'
                  className='object-cover'
                />
              </div>
            </div>
          </div>

          <dl className='relative grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 md:mt-24 pt-8 border-t border-border-subtle'>
            <div>
              <dt className='font-mono text-xs text-text-muted uppercase tracking-wider mb-2'>Platform</dt>
              <dd className='text-text-primary'>Native macOS</dd>
            </div>
            <div>
              <dt className='font-mono text-xs text-text-muted uppercase tracking-wider mb-2'>Diller</dt>
              <dd className='text-text-primary'>İngilizce, Türkçe</dd>
            </div>
            <div>
              <dt className='font-mono text-xs text-text-muted uppercase tracking-wider mb-2'>Fiyat</dt>
              <dd className='text-text-primary'>Ücretsiz</dd>
            </div>
            <div>
              <dt className='font-mono text-xs text-text-muted uppercase tracking-wider mb-2'>Veri toplama</dt>
              <dd className='text-text-primary'>Yok</dd>
            </div>
            <div>
              <dt className='font-mono text-xs text-text-muted uppercase tracking-wider mb-2'>Teknoloji</dt>
              <dd className='text-text-primary'>SwiftUI + AppKit</dd>
            </div>
          </dl>
        </section>

        <section id='demo' className='container py-16 md:py-24'>
          <div className='max-w-3xl mb-10'>
            <p className='font-mono text-sm text-accent mb-3'>Daha sessiz bir odaklanma</p>
            <h2 className='font-mono text-3xl md:text-4xl text-text-primary mb-4'>
              Zamanlayıcınız ihtiyaç duyduğunuzda orada—gerekmediğinde ortadan kaybolur.
            </h2>
            <p className='text-text-secondary text-lg leading-relaxed'>
              {PULSE_APP_NAME}’ı menü çubuğundan açın, bir seans seçin ve popover’ı kapatın. Zamanlayıcı siz çalışırken
              devam eder. İlk açılışta kısa bir tanıtım nerede bulacağınızı gösterir — Reduce Motion açıksa buna uyar.
            </p>
          </div>
          <div className='rounded-lg border border-border-default bg-bg-elevated p-2 sm:p-3'>
            <PulseDemoVideo locale='tr' />
          </div>
          <p className='text-text-muted text-sm mt-4'>
            Yenilenen seans kontrolleri, tam odak geçmişi, İngilizce ve Türkçe yerelleştirme, seansa özel tamamlanma bildirimleri ve ayarlar.
          </p>
        </section>

        <section className='border-y border-border-subtle bg-bg-elevated'>
          <div className='container py-16 md:py-24'>
            <div className='max-w-3xl mb-12'>
              <p className='font-mono text-sm text-accent mb-3'>Kontrol sizde olan bir ritim</p>
              <h2 className='font-mono text-3xl md:text-4xl text-text-primary mb-4'>Odaklan, duraklat, toparlan, tekrarla.</h2>
              <p className='text-text-secondary text-lg'>
                {PULSE_APP_NAME} sıradaki adımı önerir ama sizin yerinize seans başlatmaz. Her süre gününüze uyacak
                şekilde ayarlanabilir.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {featureShowcases.map((feature) => (
                <article
                  key={feature.title}
                  className='rounded-lg border border-border-subtle bg-bg-base overflow-hidden'>
                  <div className='relative border-b border-border-subtle' style={{ aspectRatio: screenshotAspectRatio }}>
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      sizes='(min-width: 768px) 33vw, 100vw'
                      className='object-cover'
                    />
                  </div>
                  <div className='p-6'>
                    <div className='flex items-center justify-between gap-4 mb-3'>
                      <h3 className='font-mono text-xl text-text-primary'>{feature.title}</h3>
                      <Tag variant='outline' size='sm'>
                        {feature.badge}
                      </Tag>
                    </div>
                    <p className='text-text-secondary'>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='container py-16 md:py-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-24'>
            <div
              className='relative overflow-hidden rounded-lg border border-border-default bg-bg-elevated'
              style={{ aspectRatio: screenshotAspectRatio }}>
              <Image
                src={`${pulseImageDir}/history.png`}
                alt={`${PULSE_APP_NAME} haftalık odak geçmişi; seans sayıları, odak saatleri ve seri`}
                fill
                sizes='(min-width: 768px) 50vw, 100vw'
                className='object-cover'
              />
            </div>
            <div>
              <LuHistory className='text-accent mb-6' size={32} aria-hidden='true' />
              <p className='font-mono text-sm text-accent mb-3'>Baskısız ilerleme</p>
              <h2 className='font-mono text-3xl md:text-4xl text-text-primary mb-5'>İşin biriktiğini görün.</h2>
              <p className='text-text-secondary text-lg leading-relaxed mb-6'>
                Popover’dan veya durum menüsünden tam geçmiş penceresini açın. Toplamlar ve seriler, odağı yönetilecek
                başka bir panele çevirmeden ilerlemenizi gösterir.
              </p>
              <ul className='space-y-3'>
                {[
                  'Toplam odak süresi',
                  'Tamamlanan seans sayısı',
                  'Mevcut seri',
                  'En iyi seri'
                ].map((item) => (
                  <li key={item} className='flex items-center gap-3 text-text-secondary'>
                    <span className='w-2 h-2 rounded-full bg-accent' aria-hidden='true' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center'>
            <div className='md:order-last grid grid-cols-2 gap-4'>
              <div
                className='relative overflow-hidden rounded-lg border border-border-default bg-bg-elevated col-span-2'
                style={{ aspectRatio: screenshotAspectRatio }}>
                <Image
                  src={`${pulseImageDir}/settings.png`}
                  alt={`${PULSE_APP_NAME} süre, dil, tamamlanma sesleri ve oturum açılışında başlatma ayarları`}
                  fill
                  sizes='(min-width: 768px) 50vw, 100vw'
                  className='object-cover'
                />
              </div>
              <div
                className='relative overflow-hidden rounded-lg border border-border-default bg-bg-elevated col-span-2'
                style={{ aspectRatio: screenshotAspectRatio }}>
                <Image
                  src={`${pulseImageDir}/celebration.png`}
                  alt={`${PULSE_APP_NAME} seans tamamlandığında tavşan kutlama animasyonu`}
                  fill
                  sizes='(min-width: 768px) 50vw, 100vw'
                  className='object-cover'
                />
              </div>
            </div>
            <div>
              <LuSparkles className='text-accent mb-6' size={32} aria-hidden='true' />
              <p className='font-mono text-sm text-accent mb-3'>Nazik geri bildirim, sizin tarzınızda</p>
              <h2 className='font-mono text-3xl md:text-4xl text-text-primary mb-5'>Bitirmeyi ödüllendirici kılın.</h2>
              <p className='text-text-secondary text-lg leading-relaxed mb-6'>
                Altı sakin tamamlanma sesi ve altı hayvan kutlaması arasından seçin ya da ikisini de kapatın.{' '}
                {PULSE_APP_NAME}, Odak, Kısa Mola ve Uzun Mola bittiğinde seansa uygun mesajı gösterir.
              </p>
              <ul className='space-y-3 mb-6'>
                {[
                  'Her seans türüne özel tamamlanma başlığı ve açıklaması',
                  'Sistem dili varsayılanıyla İngilizce ve Türkçe arayüz',
                  'Ayarlar’da dil seçimi: Sistem, İngilizce veya Türkçe'
                ].map((item) => (
                  <li key={item} className='flex items-center gap-3 text-text-secondary'>
                    <span className='w-2 h-2 rounded-full bg-accent' aria-hidden='true' />
                    {item}
                  </li>
                ))}
              </ul>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'].map(
                  (choice) => (
                    <Tag key={choice} variant='outline' size='md'>
                      {choice}
                    </Tag>
                  )
                )}
              </div>
              <div className='flex flex-wrap gap-2'>
                {['Maymun', 'Koala', 'Kedi', 'Tilki', 'Panda', 'Tavşan'].map((choice) => (
                  <Tag key={choice} variant='outline' size='md'>
                    {choice}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className='border-y border-border-subtle bg-bg-elevated'>
          <div className='container py-16 md:py-24'>
            <div className='max-w-3xl mb-12'>
              <p className='font-mono text-sm text-accent mb-3'>Tasarım gereği native</p>
              <h2 className='font-mono text-3xl md:text-4xl text-text-primary mb-4'>
                Mac’inizde evinde hissetmek için tasarlandı.
              </h2>
              <p className='text-text-secondary text-lg'>
                SwiftUI, AppKit ve macOS sistem alışkanlıkları {PULSE_APP_NAME}’ı hızlı, tanıdık ve güvenilir tutar —
                VoiceOver etiketleri ve Reduce Motion desteğiyle birlikte.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {nativeFeatures.map(({ icon: Icon, title, description }) => (
                <article key={title} className='p-6 rounded-lg border border-border-subtle bg-bg-base'>
                  <Icon className='text-accent mb-5' size={28} aria-hidden='true' />
                  <h3 className='font-mono text-xl text-text-primary mb-3'>{title}</h3>
                  <p className='text-text-secondary leading-relaxed'>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='container py-16 md:py-24'>
          <div className='rounded-lg border border-border-default bg-bg-elevated p-6 md:p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center'>
              <div>
                <LuShieldCheck className='text-success mb-6' size={36} aria-hidden='true' />
                <p className='font-mono text-sm text-success mb-3'>Varsayılan olarak özel</p>
                <h2 className='font-mono text-3xl md:text-4xl text-text-primary mb-5'>
                  Odağınız bir veri noktası değil.
                </h2>
                <p className='text-text-secondary text-lg leading-relaxed'>
                  {PULSE_APP_NAME} veri toplamaz. Hesap, analitik, reklam veya ağ isteği yok. Her şey Mac’inizde kalır.
                </p>
              </div>
              <ul className='space-y-4'>
                {[
                  'Giriş yok',
                  'Bulut senkronizasyonu yok',
                  'İzleme yok',
                  'Kişisel dosyalara erişim yok',
                  'Hiçbir veri Mac’inizden çıkmaz'
                ].map((item) => (
                  <li
                    key={item}
                    className='flex items-center gap-3 p-4 rounded-md bg-bg-base border border-border-subtle text-text-primary'>
                    <LuShieldCheck className='text-success' size={18} aria-hidden='true' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className='container pb-16 md:pb-24'>
          <div className='text-center py-16 md:py-24 border-y border-border-subtle'>
            <LuSettings2 className='text-accent mx-auto mb-6' size={32} aria-hidden='true' />
            <Tag variant='status' status='success' size='md'>
              Mac App Store’da mevcut
            </Tag>
            <h2 className='font-mono text-3xl md:text-4xl text-text-primary mt-6 mb-4'>Odaklı çalışmaya yer açın.</h2>
            <p className='text-text-secondary text-lg max-w-2xl mx-auto mb-8'>
              {PULSE_APP_NAME} Mac için ücretsizdir. App Store’dan indirin; yardıma ihtiyacınız olursa gizlilik politikası
              ve destek sayfasına bakın.
            </p>
            <div className='flex flex-wrap justify-center gap-3'>
              <ButtonLink href={PULSE_APP_STORE_URL} external variant='primary' size='lg'>
                Mac App Store’dan indir
                <LuArrowUpRight className='ml-2' size={16} aria-hidden='true' />
              </ButtonLink>
              <ButtonLink href={`${pulsePath}/support`} variant='ghost' size='lg'>
                Destek al
              </ButtonLink>
              <ButtonLink href={`${pulsePath}/privacy`} variant='ghost' size='lg'>
                Gizlilik
              </ButtonLink>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
