'use client'
import { useEffect } from 'react'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import { initGA, logPageView } from './analytics'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    initGA() // Initialize Google Analytics
    logPageView() // Log the initial pageview
  }, [])

  return (
    <html>
      <body>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
