import { Footer } from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'
import Script from 'next/script'

const GOOGLE_ADS_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Script
          id='adsbygoogle-init'
          strategy='afterInteractive'
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_CLIENT_ID}`}
          async
        />
        <Script strategy='afterInteractive'>
          {`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}
        </Script>
        <ins
          className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client={GOOGLE_ADS_CLIENT_ID}
          data-ad-slot='9883750649'
          data-ad-format='auto'
          data-full-width-responsive='true'></ins>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
