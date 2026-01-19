/**
 * Shared constants used across the application
 * Centralized to avoid duplication and ensure consistency
 */

// Navigation links used in Header and Footer
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/aboutMe', label: 'About' },
] as const

// Social media links
export const SOCIAL_LINKS = [
  {
    href: 'https://twitter.com/ozankurucu_',
    label: 'Twitter',
    platform: 'twitter',
  },
  {
    href: 'https://github.com/ozanbatuhankurucu',
    label: 'GitHub',
    platform: 'github',
  },
  {
    href: 'https://www.linkedin.com/in/ozan-batuhan-kurucu-66b120182/',
    label: 'LinkedIn',
    platform: 'linkedin',
  },
  {
    href: 'mailto:ozanbatuhankurucu@gmail.com',
    label: 'Email',
    platform: 'email',
  },
] as const

// Resume/CV link
export const RESUME_URL = 'https://my-portfolio-ozan.s3.eu-central-1.amazonaws.com/pdfFiles/OZAN+BATUHAN+KURUCU+(2).pdf'

// Site metadata
export const SITE_CONFIG = {
  name: 'Ozan Batuhan Kurucu',
  title: 'Frontend Engineer',
  company: 'ArenaAI',
  domain: 'ozanbatuhankurucu.com',
  logo: 'ozan.dev',
  description: 'Frontend engineer writing about React, TypeScript, and building for the web.',
} as const

// Tech stack used in About page
export const TECH_STACK = [
  'Next.js',
  'React',
  'ReactNative',
  'TypeScript',
  'TailwindCSS',
  'Styled Components',
  'HTML/CSS',
  'Git',
] as const

// AI Tools used
export const AI_TOOLS = [
  'ChatGPT',
  'Claude',
  'Cursor',
] as const

// Type exports for type safety
export type NavLink = typeof NAV_LINKS[number]
export type SocialLink = typeof SOCIAL_LINKS[number]
export type SocialPlatform = SocialLink['platform']
