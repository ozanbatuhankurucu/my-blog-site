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
  title: `${PULSE_APP_NAME} Gizlilik Politikası`,
  description: `Mac için menü çubuğu Pomodoro zamanlayıcısı ${PULSE_APP_NAME} gizlilik politikası.`,
  alternates: {
    canonical: `${SITE_URL}${pulsePath}/privacy`,
    languages: getPulseLanguageAlternates('privacy')
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function PulsePomodoroTurkishPrivacyPage() {
  return (
    <article className='container max-w-2xl py-16 md:py-24' lang='tr'>
      <div className='flex flex-wrap items-center justify-between gap-4 mb-10'>
        <Link
          href={pulsePath}
          className='inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors duration-fast'>
          <LuArrowLeft size={16} aria-hidden='true' />
          {PULSE_APP_NAME}
        </Link>
        <PulseLocaleSwitcher locale='tr' pathSuffix='privacy' />
      </div>

      <header className='mb-10'>
        <h1 className='font-mono text-3xl md:text-4xl font-medium text-text-primary mb-4'>Gizlilik Politikası</h1>
        <p className='text-text-secondary text-lg leading-relaxed mb-2'>
          <strong className='text-text-primary'>{PULSE_APP_NAME}</strong> — Mac için menü çubuğu Pomodoro zamanlayıcısı
        </p>
        <p className='text-text-muted text-sm'>Son güncelleme: 30 Ağustos 2026</p>
      </header>

      <div className='space-y-10 text-text-secondary leading-relaxed'>
        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Özet</h2>
          <p>{PULSE_APP_NAME} herhangi bir kişisel veriyi toplamaz, saklamaz veya iletmez.</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Veri toplama</h2>
          <p className='mb-4'>{PULSE_APP_NAME} sizden hiçbir bilgi toplamaz. Uygulama:</p>
          <ul className='list-disc list-inside space-y-2'>
            <li>Hesap veya giriş gerektirmez</li>
            <li>Analitik veya reklam kullanmaz</li>
            <li>Ağ isteği yapmaz</li>
            <li>Dosyalarınıza, kişilerinize, konumunuza, kameranıza veya mikrofonunuza erişmez</li>
          </ul>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Cihazınızda saklanan veriler</h2>
          <p>
            Zamanlayıcı ayarlarınız, seans tercihleriniz ve odak geçmişiniz standart macOS depolama kullanılarak
            Mac’inizde yerel olarak kaydedilir. Bu veriler cihazınızdan dışarı çıkmaz.
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Oturum Açılışında Başlat</h2>
          <p>
            Ayarlar’da Oturum Açılışında Başlat’ı etkinleştirirseniz {PULSE_APP_NAME}, macOS sistem API’lerini kullanarak
            bir giriş öğesi olarak kaydolur. Bu tercih sizin kontrolünüzdedir ve istediğiniz zaman kapatılabilir.
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Çocuklar</h2>
          <p>{PULSE_APP_NAME} çocuklar dahil hiç kimseden kişisel bilgi toplamaz.</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Değişiklikler</h2>
          <p>Bu politika değişirse güncellenmiş sürüm bu URL’de yayınlanır.</p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>İletişim</h2>
          <p>
            Bu politikayla ilgili sorular:{' '}
            <a href='mailto:ozanbatusss@gmail.com' className='text-accent hover:text-accent-hover transition-colors'>
              ozanbatusss@gmail.com
            </a>
          </p>
        </section>
      </div>
    </article>
  )
}
