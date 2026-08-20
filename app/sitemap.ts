import { MetadataRoute } from 'next'
import { getPostMetadata } from '../components/utils'
import { getPostPath } from '../lib/article-localization'
import { SITE_URL } from '../lib/constants'

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
    {
      url: `${SITE_URL}/pulse-pomodoro/support`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/pulse-pomodoro/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  return [...staticRoutes, ...englishPostEntries, ...turkishPostEntries]
}
