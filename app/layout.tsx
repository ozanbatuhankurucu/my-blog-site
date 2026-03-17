import { Metadata } from 'next'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'
import Script from 'next/script'
import { SITE_CONFIG, SITE_URL } from '../lib/constants'

const GOOGLE_ADS_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_CONFIG.name} - Blog`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: `${SITE_CONFIG.name} Blog`,
    title: `${SITE_CONFIG.name} - Blog`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ozankurucu_',
    title: `${SITE_CONFIG.name} - Blog`,
    description: SITE_CONFIG.description,
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${SITE_CONFIG.name} Blog`,
  url: SITE_URL,
  description: SITE_CONFIG.description,
  author: {
    '@type': 'Person',
    name: SITE_CONFIG.name,
    url: SITE_URL,
  },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/geist@1.2.0/dist/fonts/geist-sans/style.min.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
