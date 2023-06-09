import fs from 'fs'
import matter from 'gray-matter'
import PostPreview from '../components/PostPreview'
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
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return <div>Hello world!</div>
}

export default HomePage
