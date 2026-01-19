'use client'

import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { RiCloseLine, RiMenuLine } from 'react-icons/ri'
import { NAV_LINKS, RESUME_URL, SITE_CONFIG } from '../lib/constants'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-bg-base/80 backdrop-blur-md border-b border-border-subtle">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-lg font-medium text-text-primary hover:text-accent transition-colors duration-fast"
          >
            {SITE_CONFIG.logo}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={cx(
                    'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-fast',
                    isActive
                      ? 'text-text-primary bg-bg-surface'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
                  )}
                >
                  {label}
                </Link>
              )
            })}
            
            {/* CV Download - Ghost button style */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                ml-2 px-4 py-2 rounded-md text-sm font-mono font-medium
                bg-accent text-bg-base
                hover:bg-accent-hover
                transition-colors duration-fast
              "
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors duration-fast"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={cx(
            'md:hidden overflow-hidden transition-all duration-slow ease-out-custom',
            isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cx(
                    'px-4 py-3 rounded-md text-sm font-medium transition-colors duration-fast',
                    isActive
                      ? 'text-text-primary bg-bg-surface'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
                  )}
                >
                  {label}
                </Link>
              )
            })}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mx-4 mt-2 px-4 py-3 rounded-md text-sm font-mono font-medium text-center
                bg-accent text-bg-base
                hover:bg-accent-hover
                transition-colors duration-fast
              "
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
