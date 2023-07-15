import _ from 'lodash'
import { Metadata } from 'next'
import { ArticleSection } from '../components/ArticleSection'
import { Hero } from '../components/Hero'
import { getPostMetadata } from '../components/utils'

export const metadata: Metadata = {
  title: 'Ozan Batuhan Kurucu - Blog',
  description: 'Welcome to the blog of Ozan Batuhan Kurucu',
  openGraph: {
    title: 'Ozan Batuhan Kurucu - Blog',
    description: 'Welcome to the blog of Ozan Batuhan Kurucu',
    url: 'https://www.ozanbatuhankurucu.com',
    type: 'website',
    siteName: 'Ozan Batuhan Kurucu Blog'
  }
}

const HomePage = () => {
  const articles = getPostMetadata()
  const groupedArticlesByCategory = _.groupBy(articles, 'category')

  return (
    <>
      <Hero />
      <div className='max-w-[1250px] mx-auto px-4 pb-56'>
        {_.map(groupedArticlesByCategory, (articles, key) => (
          <ArticleSection
            key={key}
            category={key}
            sectionTitle={key}
            articles={articles}
          />
        ))}
      </div>
    </>
  )
}

export default HomePage
