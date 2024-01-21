import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface ArticleCardProps {
  date: string
  img: string
  title: string
  slug: string
}

export const ArticleCard: FC<ArticleCardProps> = ({
  date,
  img,
  title,
  slug
}) => (
  <Link href={`/posts/${slug}`}>
    <div className='w-[300px] h-[425px] bg-white rounded-xl flex-shrink-0 p-5 relative shadow-md'>
      <img className='w-full h-[198px] object-contain' src={img} alt='image' />
      <div className='subheading-2 text-black font-bold mt-6'>{title}</div>
      <div className='absolute left-5 right-5 bottom-5 flex gap-[15px] items-center'>
        <Image
          className='rounded-full'
          alt='image'
          src='/images/pp1.png'
          width={57}
          height={57}
        />
        <div className='flex flex-col'>
          <div className='paragraph-3 font-semibold text-black'>Ozan</div>
          <div className='paragraph-4 font-normal text-black'>
            {moment(date).format('MMM DD, YYYY')}
          </div>
        </div>
      </div>
    </div>
  </Link>
)
