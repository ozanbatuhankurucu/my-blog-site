'use client'
import cx from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import { RiCloseLine, RiFileDownloadLine, RiMenuLine } from 'react-icons/ri'
import { Logo } from './Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      style={{ boxShadow: '4px 6px 13px rgba(215, 215, 215, 0.25)' }}
      className='bg-light-grey-1 sticky top-0 z-50'>
      <div className='text-white py-4 max-w-[1250px] mx-auto flex flex-col px-4 justify-between items-center md:flex-row xl:px-0'>
        <Logo />
        <div className='ml-auto md:hidden'>
          <button className='text-blue' onClick={toggleMenu}>
            {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>
        <nav className={cx('md:flex', { flex: isMenuOpen, hidden: !isMenuOpen })}>
          <ul className='flex flex-col space-y-4 md:flex-row items-center md:gap-9 md:space-y-0 md:space-x-4'>
            <li>
              <Link className='subheading-2 text-black' href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='subheading-2 text-black' href='/projects'>
                Projects
              </Link>
            </li>
            <li>
              <Link className='subheading-2 text-black' href='/aboutMe'>
                About Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
