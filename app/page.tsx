import _ from 'lodash'
import { Metadata } from 'next'
import { ArticleCard } from '../components/ArticleCard'
import { Hero } from '../components/Hero'
import { CategoryType } from '../components/types'
import { getPostMetadata, getPostSearchIndex } from '../components/utils'
import HomeContent from '../components/HomeContent'
import { SITE_CONFIG, SITE_URL } from '../lib/constants'

const CATEGORIES: CategoryType[] = [
  'Artificial Intelligence',
  'ReactJS',
  'NextJS',
  'TypeScript',
  'JavaScript',
  'CSS',
  'TailwindCSS',
  'HTML',
  'Self-improvement'
]

export const metadata: Metadata = {
  title: { absolute: `${SITE_CONFIG.name} - Blog` },
  description: SITE_CONFIG.description,
  openGraph: {
    title: `${SITE_CONFIG.name} - Blog`,
    description: SITE_CONFIG.description,
    url: SITE_URL,
    type: 'website',
    siteName: `${SITE_CONFIG.name} Blog`,
    images: {
      url: `/images/mainpage1.png`,
      width: 1200,
      height: 630,
      alt: `${SITE_CONFIG.name} Blog`
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - Blog`,
    description: SITE_CONFIG.description,
    images: [`/images/mainpage1.png`]
  },
  alternates: {
    canonical: SITE_URL
  }
}

// Section header component
function SectionHeader({ title }: { title: string }) {
  return (
    <div className='flex items-center justify-between mb-8'>
      <h2 className='font-mono text-2xl font-medium text-text-primary'>{title}</h2>
    </div>
  )
}

const HomePage = () => {
  const articles = getPostMetadata()
  const searchIndex = getPostSearchIndex()
  const sortedArticles = _.orderBy(articles, ['date'], ['desc'])
  const latestArticles = sortedArticles.slice(0, 6)

  // Get unique categories that have articles
  const activeCategories = _.uniq(articles.map((a) => a.category))
    .filter((cat) => CATEGORIES.includes(cat))
    .sort((a, b) => CATEGORIES.indexOf(a) - CATEGORIES.indexOf(b))

  return (
    <>
      <Hero />

      <div className='container pb-24'>
        {/* Latest Posts Section */}
        <section className='mb-20'>
          <SectionHeader title='Latest Posts' />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {latestArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                date={article.date}
                title={article.title}
                slug={article.slug}
                category={article.category}
                description={article.description}
              />
            ))}
          </div>
        </section>

        {/* All Posts with Category Filter */}
        <section>
          <SectionHeader title='All Posts' />
          <HomeContent articles={sortedArticles} categories={activeCategories} searchIndex={searchIndex} />
        </section>
      </div>
    </>
  )
}

export default HomePage
