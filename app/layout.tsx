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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* JetBrains Mono for headings and code */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Geist font from Vercel */}
        <link
          href="https://cdn.jsdelivr.net/npm/geist@1.2.0/dist/fonts/geist-sans/style.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {GOOGLE_ADS_CLIENT_ID && (
          <>
            <Script
              id="adsbygoogle-init"
              strategy="afterInteractive"
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_CLIENT_ID}`}
              async
            />
            <Script strategy="afterInteractive">
              {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </Script>
          </>
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
