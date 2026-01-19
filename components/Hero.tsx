'use client'

import Link from 'next/link'
import { Button } from './Button'
import { SITE_CONFIG } from '../lib/constants'

export const Hero = () => {
  return (
    <section className="relative py-24 md:py-32">
      {/* Subtle gradient background using CSS variable */}
      <div 
        className="absolute inset-0 -z-10 bg-gradient-radial from-accent-muted to-transparent"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-muted), transparent)'
        }}
      />

      <div className="container">
        <div className="max-w-2xl">
          {/* Name with accent */}
          <h1 className="font-mono text-4xl md:text-5xl font-medium text-text-primary mb-4">
            {SITE_CONFIG.name}
          </h1>

          {/* Role */}
          <p className="font-mono text-xl md:text-2xl text-accent mb-6">
            {SITE_CONFIG.title}
          </p>

          {/* Description */}
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl">
            Writing about React, TypeScript, and building for the web. 
            Currently crafting interfaces at {SITE_CONFIG.company}.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button variant="primary" size="md">
                View Projects
              </Button>
            </Link>
            <Link href="/aboutMe">
              <Button variant="ghost" size="md">
                About Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
