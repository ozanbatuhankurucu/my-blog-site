import { Metadata } from 'next'
import Link from 'next/link'
import { LuArrowLeft } from 'react-icons/lu'
import { PulseLocaleSwitcher } from '../../../../components/PulseLocaleSwitcher'
import {
  getPulseAppPath,
  getPulseLanguageAlternates,
  PULSE_APP_NAME,
  SITE_URL
} from '../../../../lib/constants'

const pulsePath = getPulseAppPath('tr')

export const metadata: Metadata = {
  title: `${PULSE_APP_NAME} Destek`,
  description: `Mac için menü çubuğu Pomodoro zamanlayıcısı ${PULSE_APP_NAME} destek ve başlangıç rehberi.`,
  alternates: {
    canonical: `${SITE_URL}${pulsePath}/support`,
    languages: getPulseLanguageAlternates('support')
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function PulsePomodoroTurkishSupportPage() {
  return (
    <article className='container max-w-2xl py-16 md:py-24' lang='tr'>
      <div className='flex flex-wrap items-center justify-between gap-4 mb-10'>
        <Link
          href={pulsePath}
          className='inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors duration-fast'>
          <LuArrowLeft size={16} aria-hidden='true' />
          {PULSE_APP_NAME}
        </Link>
        <PulseLocaleSwitcher locale='tr' pathSuffix='support' />
      </div>

      <header className='mb-10'>
        <h1 className='font-mono text-3xl md:text-4xl font-medium text-text-primary mb-4'>
          {PULSE_APP_NAME} Destek
        </h1>
        <p className='text-text-secondary text-lg leading-relaxed'>
          <strong className='text-text-primary'>{PULSE_APP_NAME}</strong>, Mac için basit bir menü çubuğu Pomodoro
          zamanlayıcısıdır.
        </p>
      </header>

      <div className='space-y-10 text-text-secondary leading-relaxed'>
        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Başlarken</h2>
          <ol className='list-decimal list-inside space-y-2'>
            <li>Ekranın sağ üstündeki menü çubuğundaki uygulama simgesine tıklayın.</li>
            <li>Odak, Kısa Mola veya Uzun Mola seçin.</li>
            <li>
              <strong className='text-text-primary'>Başlat</strong>’a basın. Zamanlayıcı çalışırken popover’ı
              kapatabilirsiniz.
            </li>
          </ol>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Ayarlar</h2>
          <p>
            Seans sürelerini, tamamlanma seslerini, menü çubuğu animasyonlarını ve Oturum Açılışında Başlat seçeneğini
            değiştirmek için <strong className='text-text-primary'>Ayarlar</strong> sekmesini açın.
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Gereksinimler</h2>
          <p>macOS 14.6 veya üzeri.</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>İletişim</h2>
          <p className='mb-2'>Yardım, geri bildirim veya hata bildirimi için:</p>
          <p>
            <a href='mailto:ozanbatusss@gmail.com' className='text-accent hover:text-accent-hover transition-colors'>
              ozanbatusss@gmail.com
            </a>
          </p>
        </section>
      </div>
    </article>
  )
}
