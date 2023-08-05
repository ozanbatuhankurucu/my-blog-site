import { Footer } from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'
import Script from 'next/script'
import Head from 'next/head'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Script
          id='adsbygoogle-init'
          strategy='afterInteractive'
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          async
        />
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
