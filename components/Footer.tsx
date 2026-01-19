'use client'

import Link from 'next/link'
import { LuTwitter, LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import { IconType } from 'react-icons'
import { NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG, SocialPlatform } from '../lib/constants'

// Map platform names to icons
const platformIcons: Record<SocialPlatform, IconType> = {
  twitter: LuTwitter,
  github: LuGithub,
  linkedin: LuLinkedin,
  email: LuMail,
}

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle bg-bg-elevated pt-12 pb-12 mt-8">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left side - Logo and tagline */}
          <div className="space-y-3">
            <Link
              href="/"
              className="font-mono text-lg font-medium text-text-primary hover:text-accent transition-colors duration-fast"
            >
              {SITE_CONFIG.logo}
            </Link>
            <p className="text-text-muted text-sm max-w-xs">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Right side - Navigation and social */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            {/* Navigation */}
            <nav className="space-y-3">
              <h4 className="font-mono text-xs font-medium text-text-muted uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-text-secondary hover:text-text-primary transition-colors duration-fast text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-medium text-text-muted uppercase tracking-wider">
                Connect
              </h4>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ href, label, platform }) => {
                  const Icon = platformIcons[platform]
                  return (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        p-2 rounded-md text-text-muted
                        hover:text-text-primary hover:bg-bg-hover
                        transition-colors duration-fast
                      "
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-text-muted text-xs">
            © 2021–{currentYear} {SITE_CONFIG.name}
          </p>
          <p className="text-text-muted text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
