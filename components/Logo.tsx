import React, { FC } from 'react'
import cx from 'classnames'

interface LogoProps {
  containerClassName?: string
}

export const Logo: FC<LogoProps> = ({ containerClassName }) => {
  return (
    <div
      className={cx(
        'items-baseline justify-center mb-4 hidden md:flex md:mb-0',
        containerClassName
      )}>
      <span className='text-[#001858] font-semibold text-4xl'>Ozan</span>
      <span className='text-blue text-lg font-bold'>.Blog</span>
    </div>
  )
}
