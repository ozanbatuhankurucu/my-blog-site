import _ from 'lodash'
import { ArticleSection } from '../components/ArticleSection'
import { Hero } from '../components/Hero'
import { getPostMetadata } from '../components/utils'

const HomePage = () => {
  const articles = getPostMetadata()
  const groupedArticlesByCategory = _.groupBy(articles, 'category')

  return (
    <>
      <Hero />
      <div className='max-w-[1250px] mx-auto px-4 pb-56'>
        {_.map(groupedArticlesByCategory, (articles, key) => (
          <ArticleSection
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
