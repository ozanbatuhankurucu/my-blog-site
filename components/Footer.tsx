'use client'
import React from 'react'
import { LuTwitter } from 'react-icons/lu'
import { IoLogoInstagram } from 'react-icons/io'
import { FiLinkedin } from 'react-icons/fi'
import { Logo } from './Logo'
import { FooterList } from './FooterList'
import Link from 'next/link'
import GoogleAdsenseContainer from './GoogleAdsenseContainer'

export const Footer = () => {
  const handleCategoryOnClick = (elementId: string) => {
    const categoryTitleElement = document.getElementById(elementId)
    if (categoryTitleElement) {
      const scrollOffset = categoryTitleElement.offsetTop - 90
      window.scrollTo({
        top: scrollOffset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <div className='mt-4 bg-light-grey-1'>
        <GoogleAdsenseContainer />
        <div className='max-w-[1250px] mx-auto px-4 pt-[70px] pb-[26px]'>
          <div className='flex flex-col lg:flex-row lg:gap-[160px]'>
            <div className='flex flex-col gap-5'>
              <Logo containerClassName='!block' />
              <div className='flex gap-[30px]'>
                <Link href='https://twitter.com/ozankurucu_' target='_blank'>
                  <LuTwitter className='text-black' size={22} />
                </Link>
                <Link
                  href='https://www.instagram.com/ozanbkurucu_/'
                  target='_blank'>
                  <IoLogoInstagram className='text-black' size={22} />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/ozan-batuhan-kurucu-66b120182/'
                  target='_blank'>
                  <FiLinkedin className='text-black' size={22} />
                </Link>
              </div>
            </div>
            <div className='flex flex-wrap gap-20 gap-y-10 mt-12 lg:mt-0'>
              <FooterList
                title='Category'
                list={[
                  {
                    label: 'HTML',
                    onClick: () => handleCategoryOnClick('HTML')
                  },
                  {
                    label: 'Self-improvement',
                    onClick: () => handleCategoryOnClick('Self-improvement')
                  },
                  {
                    label: 'CSS'
                  },
                  {
                    label: 'JavaScript',
                    onClick: () => handleCategoryOnClick('JavaScript')
                  },
                  {
                    label: 'TailwindCSS'
                  },
                  {
                    label: 'TypeScript',
                    onClick: () => handleCategoryOnClick('TypeScript')
                  },
                  {
                    label: 'NextJS',
                    onClick: () => handleCategoryOnClick('NextJS')
                  },
                  {
                    label: 'ReactJS',
                    onClick: () => handleCategoryOnClick('ReactJS')
                  }
                ]}
              />
              <FooterList
                title='About Me'
                list={[
                  {
                    label: 'About Me',
                    link: '/aboutMe'
                  },
                  {
                    label: 'Projects'
                  }
                ]}
              />
              <FooterList
                title='Get In Touch'
                list={[
                  {
                    label: 'ozanbatuhankurucu@gmail.com',
                    target: '_blank'
                  }
                ]}
              />
              <FooterList
                title='Follow Me'
                list={[
                  {
                    label: 'Twitter',
                    link: 'https://twitter.com/ozankurucu_',
                    target: '_blank'
                  },
                  {
                    label: 'Instagram',
                    link: 'https://www.instagram.com/ozanbkurucu_/',
                    target: '_blank'
                  },
                  {
                    label: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/ozan-batuhan-kurucu-66b120182/',
                    target: '_blank'
                  }
                ]}
              />
            </div>
          </div>
          <hr className='h-[1px] w-full bg-grey mt-[50px]' />
          <div className='mt-[26px] text-sm font-normal text-black'>© 2023</div>
        </div>
      </div>{' '}
    </>
  )
}
