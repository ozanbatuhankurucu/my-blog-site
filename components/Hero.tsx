import Image from 'next/image'
import BrowseTheCategory from './BrowseTheCategory'

export const Hero = () => {
  return (
    <div>
      <div className='relative min-h-[814px] w-full'>
        <div className='h-full w-full grid grid-cols-12 gap-2 absolute pt-4 px-3 md:grid-cols-25'>
          {Array.from({ length: 312 }).map((_, index) => (
            <div
              key={index}
              className='bg-[#D2D6DB] rounded-full w-[3px] h-[3px]'
            />
          ))}
        </div>
        <div className='max-w-[1250px] mx-auto left-0 right-0 px-4 flex h-full items-center absolute flex-col gap-6 md:flex-row xl:px-0'>
          <div className='w-full p-4 md:w-2/3'>
            <h1 className='heading-1 text-black text-center md:text-left'>
              Hi, I'm Ozan
            </h1>
            <h1 className='heading-1 text-black text-center md:text-left'>
              Front End Engineer
            </h1>
            <div className='flex gap-3 mt-4'>
              <div className='h-8 w-[3px] bg-black hidden lg:block'></div>
              <p className='paragraph-1 text-dark-grey text-center md:text-left md:max-w-[664px]'>
                On this blog I share tips and tricks, frameworks, projects,
                tutorials, etc
              </p>
            </div>
          </div>
          <div className='w-2/3 md:w-1/3'>
            <Image
              src='/images/group.svg'
              alt='Responsive Image'
              width={434}
              height={363}
            />
          </div>
        </div>
      </div>
      <BrowseTheCategory />
    </div>
  )
}
