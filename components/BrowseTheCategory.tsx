'use client'
import cx from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

function CategoryCard({ src, text }: { src: string; text: string }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      style={{
        filter: 'drop-shadow(4px 6px 13px rgba(215, 215, 215, 0.25))'
      }}
      className='flex items-center flex-shrink-0 w-[220px] h-[280px] rounded-lg bg-white overflow-hidden pl-[30px]  hover:bg-blue'
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}>
      <div className='flex flex-col gap-[30px]'>
        <Image alt='image' src={src} width={60} height={60} />
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
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='flex items-center'>
            <div className='subheading-1 text-black '>Browse The Category</div>
            <div className='w-[35px] h-[2px] ml-[10px] bg-black -mb-1'></div>
          </div>
          <div className='flex gap-3 items-center'>
            <span className='subheading-2 text-black'>See All Category</span>
            <MdKeyboardArrowRight className='text-black -mb-1' size={18} />
          </div>
        </div>
        <div className='flex flex-col items-center gap-9 mt-[50px] hide-scrollbar md:flex-row md:overflow-x-auto'>
          <CategoryCard src='/images/css.svg' text='CSS' />
          <CategoryCard src='/images/JS.svg' text='JavaScript' />
          <CategoryCard src='/images/tailwind.svg' text='Tailwind' />
          <CategoryCard src='/images/vuejs.svg' text='VueJS' />
          <CategoryCard src='/images/react.svg' text='ReactJS' />
        </div>
      </div>
    </div>
  )
}

export default BrowseTheCategory