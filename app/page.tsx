import fs from 'fs'
import matter from 'gray-matter'
import { ArticleSection } from '../components/ArticleSection'
import { Hero } from '../components/Hero'
import { PostMetadata } from '../components/types'

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownArticles = files.filter((file) => file.endsWith('.md'))

  // Get gray-matter data from each file.
  const articles = markdownArticles.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      img: matterResult.data.img,
      category: matterResult.data.category,
      slug: fileName.replace('.md', '')
    }
  })

  return articles
}

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
