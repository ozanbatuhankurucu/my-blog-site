'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { Suspense, useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

type GoogleAnalyticsProps = {
  gaId: string
}

const PageViewTracker = ({ gaId }: GoogleAnalyticsProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname || typeof window.gtag !== 'function') return

    const query = searchParams?.toString()
    const url = query ? `${pathname}?${query}` : pathname

    window.gtag('event', 'page_view', {
      page_path: url,
      page_location: `${window.location.origin}${url}`,
      page_title: document.title,
      send_to: gaId,
    })
  }, [pathname, searchParams, gaId])

  return null
}

const GoogleAnalytics = ({ gaId }: GoogleAnalyticsProps) => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      strategy='afterInteractive'
    />
    <Script id='google-analytics' strategy='afterInteractive'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', { send_page_view: false });
      `}
    </Script>
    <Suspense fallback={null}>
      <PageViewTracker gaId={gaId} />
    </Suspense>
  </>
)

export default GoogleAnalytics
