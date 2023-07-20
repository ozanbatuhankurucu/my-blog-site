'use client'
import cx from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import { SectionTitle } from './SectionTitle'

function CategoryCard({ src, text }: { src: string; text: string }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      style={{
        filter: 'drop-shadow(4px 6px 13px rgba(215, 215, 215, 0.25))'
      }}
      className='flex items-center flex-shrink-0 w-[240px] h-[280px] rounded-lg bg-white overflow-hidden pl-[30px]  hover:bg-blue'
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}>
      <div className='flex flex-col gap-[30px]'>
        <Image alt='image' src={`/images/${src}`} width={60} height={60} />
        <div
          className={cx('subheading-1 text-black', {
            '!text-white': isHovered
          })}>
          {text}
        </div>
      </div>
    </div>
  )
}

const BrowseTheCategory = () => {
  return (
    <div className='min-h-[500px]'>
      <div className='max-w-[1250px] mx-auto py-[68px] px-4'>
        <SectionTitle title='Browse The Category' />
        <div className='flex flex-col items-center gap-9 mt-[50px] hide-scrollbar md:flex-row md:overflow-x-auto'>
          <CategoryCard src='css.svg' text='CSS' />
          <CategoryCard src='puzzle.svg' text='Self-improvement' />
          <CategoryCard src='html.svg' text='HTML' />
          <CategoryCard src='JS.svg' text='JavaScript' />
          <CategoryCard src='tsLogo.svg' text='TypeScript' />
          <CategoryCard src='tailwind.svg' text='Tailwind' />
          <CategoryCard src='nextjsLogo.svg' text='NextJS' />
          <CategoryCard src='react.svg' text='ReactJS' />
        </div>
      </div>
    </div>
  )
}

export default BrowseTheCategory
