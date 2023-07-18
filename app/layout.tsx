import { Footer } from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'

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
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
