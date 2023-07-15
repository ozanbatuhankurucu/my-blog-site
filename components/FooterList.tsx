import Link from 'next/link'
import React, { FC } from 'react'
import cx from 'classnames'

interface FooterListProps {
  containerClassName?: string
  title: string
  list: { label: string; link?: string }[]
}

export const FooterList: FC<FooterListProps> = ({
  list,
  title,
  containerClassName
}) => {
  return (
    <div className={cx('flex flex-col', containerClassName)}>
      <div className='text-xl text-black font-bold uppercase'>{title}</div>
      <div className='flex flex-col gap-5 mt-6'>
        {list.map(({ label, link }) => {
          if (link) {
            return (
              <Link className='paragraph-2' href={link} target='_blank'>
                {label}
              </Link>
            )
          }
          return <div className='paragraph-2'>{label}</div>
        })}
      </div>
    </div>
  )
}
