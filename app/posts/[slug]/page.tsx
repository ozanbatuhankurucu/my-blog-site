import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getPostMetadata } from '../../../components/utils'
import moment from 'moment'

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

const PostPage = (props: any) => {
  const slug = props.params.slug
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
