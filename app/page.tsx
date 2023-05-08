import PostPreview from '@/components/PostPreview'
import { getPostMetadata } from '@/utils/getPostMetadata'

export default function Home() {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map(({ date, slug, subtitle, title }) => (
    <PostPreview
      key={slug}
      date={date}
      slug={slug}
      subtitle={subtitle}
      title={title}
    />
  ))

  return <h1>{postPreviews}</h1>
}
