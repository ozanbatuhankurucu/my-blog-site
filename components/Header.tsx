import Link from 'next/link'
import { RiFileDownloadLine } from 'react-icons/ri'

const Header = () => {
  return (
    <header
      style={{ boxShadow: '4px 6px 13px rgba(215, 215, 215, 0.25)' }}
      className='bg-light-grey-1  px-[95px]'>
      <div className='text-white py-4 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='flex items-baseline justify-center mb-4 md:mb-0'>
          <span className='text-[#001858] font-semibold text-4xl'>Ozan</span>
          <span className='text-blue text-lg font-bold'>.Blog</span>
        </div>
        <nav>
          <ul className='flex flex-col space-y-4 md:flex-row items-center md:gap-9 md:space-y-0 md:space-x-4'>
            <li>
              <Link className='subheading-2 text-black' href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='subheading-2 text-black' href='#'>
                Projects
              </Link>
            </li>
            <li>
              <Link className='subheading-2 text-black' href='#'>
                Blog
              </Link>
            </li>
            <li>
              <Link className='subheading-2 text-black' href='/aboutMe'>
                About Me
              </Link>
            </li>
            <li>
              <a
                className='bg-blue w-[213px] flex gap-[10px] items-center justify-center py-[10px] rounded-[4px]'
                href='https://my-portfolio-ozan.s3.eu-central-1.amazonaws.com/pdfFiles/OZAN+BATUHAN+KURUCU.pdf'
                target='_blank'>
                <RiFileDownloadLine size={24} />
                <span className='text-white text-lg font-bold'>
                  Download CV
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
