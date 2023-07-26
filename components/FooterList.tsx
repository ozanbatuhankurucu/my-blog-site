'use client'
import Link from 'next/link'
import React, { FC, HTMLAttributeAnchorTarget } from 'react'
import cx from 'classnames'

interface FooterListProps {
  containerClassName?: string
  title: string
  list: {
    label: string
    link?: string
    target?: HTMLAttributeAnchorTarget
    onClick?: React.MouseEventHandler<HTMLDivElement>
  }[]
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
        {list.map(({ label, link, target, onClick }) => {
          if (link) {
            return (
              <Link className='paragraph-2' href={link} target={target}>
                {label}
              </Link>
            )
          }
          return (
            <div
              className={cx('paragraph-2', {
                'cursor-pointer': onClick
              })}
              onClick={onClick}>
              {label}
            </div>
          )
        })}
      </div>
    </div>
  )
}
