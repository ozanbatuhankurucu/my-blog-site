import { MetadataRoute } from 'next'
import { getPostMetadata } from '../components/utils'
import { getPostPath } from '../lib/article-localization'
import { SITE_URL } from '../lib/constants'
import { getPulseAppPath, PULSE_LOCALES } from '../lib/pulse/locales'

const PULSE_PATH_SUFFIXES = ['', 'support', 'privacy'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const englishPosts = getPostMetadata('en')
  const turkishPosts = getPostMetadata('tr')

  const englishPostEntries: MetadataRoute.Sitemap = englishPosts.map((post) => ({
    url: `${SITE_URL}${getPostPath(post.slug, 'en')}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const turkishPostEntries: MetadataRoute.Sitemap = turkishPosts.map((post) => ({
    url: `${SITE_URL}${getPostPath(post.slug, 'tr')}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const pulseEntries: MetadataRoute.Sitemap = PULSE_LOCALES.flatMap((locale) =>
    PULSE_PATH_SUFFIXES.map((suffix) => ({
      url: `${SITE_URL}${getPulseAppPath(locale, suffix)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: suffix === '' ? 0.9 : 0.5,
    }))
  )

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/aboutMe`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  return [...staticRoutes, ...pulseEntries, ...englishPostEntries, ...turkishPostEntries]
}
