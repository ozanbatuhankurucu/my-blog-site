import { ArticleSection } from '../components/ArticleSection'
import { Hero } from '../components/Hero'
import { getPostMetadata } from '../components/utils'

const HomePage = () => {
  const articles = getPostMetadata()

  return (
    <>
      <Hero />
      <div className='max-w-[1250px] mx-auto px-4'>
        <ArticleSection
          category='featured'
          sectionTitle='Featured Article'
          articles={articles}
        />
        <ArticleSection
          category='tutorials'
          sectionTitle='Tutorials'
          articles={articles}
        />
      </div>
    </>
  )
}

export default HomePage
