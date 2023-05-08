import { PostMetadata } from '@/types/types'
import Link from 'next/link'

const PostPreview = ({ date, slug, subtitle, title }: PostMetadata) => {
  return (
    <div
      className='border border-slate-300 p-4 rounded-md shadow-sm
    bg-white'>
      <p className='text-sm text-slate-400'>{date}</p>

      <Link href={`/posts/${slug}`}>
        <h2 className=' text-violet-600 hover:underline mb-4'>{title}</h2>
      </Link>
      <p className='text-slate-700'>{subtitle}</p>
    </div>
  )
}

export default PostPreview
