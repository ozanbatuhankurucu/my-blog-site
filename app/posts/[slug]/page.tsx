import type { Metadata } from 'next'
import PostArticle, {
  generatePostMetadata
} from '../../../components/PostArticle'
import { getPostMetadata } from '../../../components/utils'

type Props = {
  params: { slug: string }
}

export const dynamicParams = false

export const generateStaticParams = () =>
  getPostMetadata('en').map((post) => ({
    slug: post.slug
  }))

export const generateMetadata = ({ params }: Props): Metadata =>
  generatePostMetadata(params.slug, 'en')

const PostPage = ({ params }: Props) => (
  <PostArticle slug={params.slug} locale="en" />
)

export default PostPage
