import React, { FC } from 'react'

interface SectionTitleProps {
  title: string
}

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
  <div className='flex items-center'>
    <div className='subheading-1 text-black '>{title}</div>
    <div className='w-[35px] h-[2px] ml-[10px] bg-black -mb-1'></div>
  </div>
)
