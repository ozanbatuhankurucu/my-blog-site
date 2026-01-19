import fs from 'fs'
import matter from 'gray-matter'
import { PostMetadata } from './types'

export const getPostMetadata = (): PostMetadata[] => {
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
      description: matterResult.data.description || '',
      slug: fileName.replace('.md', '')
    }
  })

  return articles
}
