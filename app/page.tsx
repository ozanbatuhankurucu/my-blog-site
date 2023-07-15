import _ from 'lodash'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import { ArticleSection } from '../components/ArticleSection'
import { Hero } from '../components/Hero'
import { getPostMetadata } from '../components/utils'

const HomePage = () => {
  const articles = getPostMetadata()
  const groupedArticlesByCategory = _.groupBy(articles, 'category')

  // SEO information
  const SEO = {
    title: 'Ozan Batuhan Kurucu - Blog',
    description: 'Welcome to the blog of Ozan Batuhan Kurucu',
    openGraph: {
      title: 'Ozan Batuhan Kurucu - Blog',
      description: 'Welcome to the blog of Ozan Batuhan Kurucu',
      type: 'website',
      url: 'https://www.ozanbatuhankurucu.com',
      site_name: 'Ozan Batuhan Kurucu Blog'
    }
  }

  return (
    <>
      <NextSeo {...SEO} />
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
