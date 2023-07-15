import Image from 'next/image'

export default function AboutMe() {
  return (
    <div className='max-w-[1250px] mx-auto py-24 px-4 md:px-0'>
      <div className='float-left mb-2 sm:mr-8'>
        <Image
          className='rounded-3xl'
          src='/images/zafertaki1.png'
          alt="Ozan's picture"
          width={427}
          height={427}
        />
      </div>
      <div className=''>
        <h1 className='text-[2.625rem] text-black font-bold'>
          I m Ozan Kurucu
        </h1>
        <p className='paragraph-2 text-black mt-6'>
          Ozan is a committed Software Engineer with a specialized interest in
          Front-end Development. Backed by a solid Computer Science education,
          he consistently applies his knowledge of core programming principles
          to deliver clean, efficient, and maintainable code. Ozan has a knack
          for creating interactive and responsive web applications, thanks to
          his mastery of modern frameworks and libraries.
        </p>
        <p className='paragraph-2 text-black mt-5'>
          His professional journey reflects his natural curiosity and ambition.
          Ozan continually integrates the latest web development trends and
          tools into his work, driven by a desire to stay at the forefront of
          technological innovation.
        </p>
        <p className='paragraph-2 text-black mt-5'>
          Outside of his professional sphere, Ozan has a fervent love for
          exploration and adventure. He revels in the thrill of discovering new
          places, immersing himself in different cultures, and sampling exotic
          cuisines. These rich experiences have broadened his worldview and
          deepened his appreciation for diversity—a perspective he brings into
          his personal and professional relationships.
        </p>
        <p className='paragraph-2 text-black mt-5'>
          Regardless of the setting, Ozan brings his spirit of innovation,
          collaboration, and exploration. Whether he's navigating through
          unfamiliar territories on his travels or solving complex coding
          challenges, his inherent problem-solving skills and ceaseless
          eagerness to learn come to the fore.
        </p>
        <p className='paragraph-2 text-black mt-5'>
          In essence, Ozan is more than just a Software Engineer; he is a global
          explorer, successfully merging his love for technology and travel into
          a fulfilling lifestyle.
        </p>
      </div>
    </div>
  )
}
