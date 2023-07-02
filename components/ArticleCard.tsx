import moment from 'moment'
import Image from 'next/image'
import React, { FC } from 'react'

interface ArticleCardProps {
  category: string
  date: string
  img: string
  title: string
}

export const ArticleCard: FC<ArticleCardProps> = ({
  category,
  date,
  img,
  title
}) => (
  <div className='w-[300px] h-[425px] bg-white rounded-xl flex-shrink-0 p-5 relative hover:shadow-md'>
    <Image alt='image' src={img} width={260} height={198} />
    <div className='subheading-2 text-black font-bold mt-6'>{title}</div>
    <div className='absolute left-5 right-5 bottom-5 flex gap-[15px] items-center'>
      <Image alt='image' src='/images/pp.png' width={57} height={57} />
      <div className='flex flex-col'>
        <div className='paragraph-3 font-semibold text-black'>Ozan</div>
        <div className='paragraph-4 font-normal text-black'>
          {moment(date).format('MMM DD, YYYY')}
        </div>
      </div>
    </div>
  </div>
)
