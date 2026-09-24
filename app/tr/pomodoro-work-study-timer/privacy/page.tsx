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
  description: `Mac ve iPhone için Pomodoro zamanlayıcısı ${PULSE_APP_NAME} gizlilik politikası.`,
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
          <strong className='text-text-primary'>{PULSE_APP_NAME}</strong> — Mac ve iPhone için Pomodoro zamanlayıcısı
        </p>
        <p className='text-text-muted text-sm'>Son güncelleme: 24 Eylül 2026</p>
      </header>

      <div className='space-y-10 text-text-secondary leading-relaxed'>
        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Özet</h2>
          <p>
            {PULSE_APP_NAME} hesap gerektirmez; isim, e-posta veya kişisel içerik toplamaz. Odak akışlarını
            iyileştirebilmek için uygulama anonim, gizlilik odaklı kullanım analitikleri gönderebilir. Zamanlayıcı
            ayarlarınız ve odak geçmişiniz cihazınızda kalır.
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Cihazınızda saklanan veriler</h2>
          <p>
            Zamanlayıcı ayarlarınız, seans tercihleriniz ve odak geçmişiniz standart sistem depolama kullanılarak Mac
            veya iPhone&apos;unuzda yerel olarak kaydedilir. Odak geçmişi içeriğinin kendisi analitik sağlayıcımıza
            yüklenmez.
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Analitik</h2>
          <p className='mb-4'>
            Uygulamanın nasıl kullanıldığını anlamak için gizlilik odaklı bir analitik hizmeti olan{' '}
            <a
              href='https://telemetrydeck.com'
              className='text-accent hover:text-accent-hover transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              TelemetryDeck
            </a>
            &apos;i kullanıyoruz (örneğin: başlatılan veya tamamlanan odak/mola seansları, günlük hedef değişiklikleri,
            ayar değişiklikleri ve onboarding&apos;in tamamlanıp tamamlanmadığı). Sinyaller serbest metin, isim, e-posta
            veya odak geçmişi içeriği içermez.
          </p>
          <p className='mb-4'>
            TelemetryDeck kurulumları hash&apos;lenmiş, cihaza özel bir tanımlayıcıyla ayırt eder ve kişisel olmayan
            cihaz meta verisi (örneğin model, işletim sistemi sürümü ve dil/bölge) ekleyebilir. Bu veriler yalnızca
            analitik için kullanılır, kimliğinize tarafımızca bağlanmaz ve diğer şirketlerin uygulamaları veya
            web siteleri arasında izleme için kullanılmaz.
          </p>
          <p>
            Daha fazla bilgi:{' '}
            <a
              href='https://telemetrydeck.com/docs/guides/privacy-faq/'
              className='text-accent hover:text-accent-hover transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              TelemetryDeck Privacy FAQ
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>App Store güncellemeleri</h2>
          <p>
            Ayarlar&apos;da &ldquo;Güncellemeleri Kontrol Et&rdquo;i kullanırsanız, uygulama App Store&apos;da daha yeni
            bir sürüm olup olmadığını görmek için Apple ile iletişim kurabilir.
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Oturum Açılışında Başlat (Mac)</h2>
          <p>
            Mac&apos;te Ayarlar&apos;da Oturum Açılışında Başlat&apos;ı etkinleştirirseniz uygulama, macOS sistem
            API&apos;lerini kullanarak bir giriş öğesi olarak kaydolur. Bu tercih sizin kontrolünüzdedir ve istediğiniz
            zaman kapatılabilir.
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>
            Bildirimler ve Live Activities (iPhone)
          </h2>
          <p>
            iPhone&apos;da isteğe bağlı yerel bildirimler ve Live Activities, bir seans bittiğinde bunu görmenize
            yardımcı olur. İzin yalnızca bu özellikleri etkinleştirmeyi seçtiğinizde istenir. Bildirim içeriği
            cihazınızda kalır.
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Yapmadıklarımız</h2>
          <ul className='list-disc list-inside space-y-2'>
            <li>Hesap veya giriş yok</li>
            <li>Reklam ağları yok</li>
            <li>Kişisel bilgi satışı yok</li>
            <li>Analitik için kişilerinize, fotoğraflarınıza, hassas konumunuza, kameranıza veya mikrofonunuza erişim yok</li>
          </ul>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Çocuklar</h2>
          <p>
            {PULSE_APP_NAME} çocuklardan bilerek kişisel bilgi toplamaz. Analitik sinyaller anonimdir ve kişisel içerik
            içermez.
          </p>
        </section>

        <section>
          <h2 className='font-mono text-xl font-medium text-text-primary mb-4'>Değişiklikler</h2>
          <p>Bu politika değişirse güncellenmiş sürüm bu URL&apos;de yayınlanır.</p>
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
