import fs from 'fs'
import matter from 'gray-matter'
import { ArticleSection } from '../components/ArticleSection'
import { Hero } from '../components/Hero'
import { PostMetadata } from '../components/types'

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', '')
    }
  })

  return posts
}

const HomePage = () => {
  const postMetadata = getPostMetadata()

  return (
    <>
      <Hero />
      <ArticleSection category='featured' sectionTitle='Featured Article' />
      <ArticleSection category='tutorials' sectionTitle='Tutorials' />
    </>
  )
}

export default HomePage
