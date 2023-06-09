import Header from '../components/Header'
import '../styles/globals.css'
import Head from './head'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head />
      <body>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
