import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getPostMetadata } from '../../../components/utils'
import moment from 'moment'
import { Metadata } from 'next'

const getPostContent = (slug: string) => {
  const folder = 'posts/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

type Props = {
  params: { slug: string }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const slug = params.slug
  const post = getPostContent(slug)
  const { title, img, description } = post.data

  return {
    title,
    description,
    openGraph: {
      title,
      description: description,
      url: `https://www.ozanbatuhankurucu.com/posts/${slug}`,
      type: 'article',
      siteName: 'Ozan Batuhan Kurucu Blog',
      images: {
        url: `https://www.ozanbatuhankurucu.com${img}`,
        width: 1200, // Specify the width of the image in pixels
        height: 630, // Specify the height of the image in pixels
        alt: `${title} Image` // Optional alt text for the image
      }
    }
  }
}

const PostPage = ({ params }: Props) => {
  const slug = params.slug
  const post = getPostContent(slug)

  return (
    <section className='blog-template'>
      <div className='w-[90vw] max-w-[1250px] my-0 mx-auto'>
        <div className='mb-12 text-center'>
          <h1 className='text-[2.875rem] font-bold text-slate-600 '>
            {post.data.title}
          </h1>
          <h2 className='subheading-2 text-slate-400 mt-2'>
            {moment(post.data.date).format('MMMM D, YYYY')}
          </h2>
        </div>
        <article>
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </section>
  )
}

export default PostPage
