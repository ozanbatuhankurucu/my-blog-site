import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ozan Batuhan Kurucu - About'
}

export default function AboutMe() {
  return (
    <>
      <div className='max-w-[1250px] mx-auto py-24 px-4 md:px-0'>
        <div className='float-left mb-2 sm:mr-8'>
          <Image className='rounded-3xl' src='/images/wat_arun.png' alt="Ozan's picture" width={427} height={427} />
        </div>
        <div className=''>
          <h1 className='text-[2.625rem] text-black font-bold'>I'm Ozan Batuhan Kurucu</h1>
          <p className='paragraph-2 text-black mt-6'>
            I am a Front-End Engineer at Arena-AI, specializing in building modern, scalable, and interactive web
            applications. My daily tech stack includes{' '}
            <strong>Next.js, TypeScript, TailwindCSS, Styled-Components</strong>, and various AI-powered development
            tools like <strong>ChatGPT, Claude, and Cursor AI</strong>.
          </p>
          <p className='paragraph-2 text-black mt-5'>
            Passionate about emerging AI technologies, I actively explore ways to integrate AI into front-end
            development to enhance user experiences and streamline workflows. Currently, I am working on a personal
            project where I aim to complete <strong>50 HTML, CSS, and JavaScript projects </strong>
            using modern technologies to sharpen my skills and stay ahead in the industry.
          </p>
          <p className='paragraph-2 text-black mt-5'>
            I take pride in my meticulous approach to coding and problem-solving. Collaboration is a core aspect of my
            work philosophy—I proactively engage with my teammates to ensure seamless development processes and
            effective communication within the team.
          </p>
          <p className='paragraph-2 text-black mt-5'>
            Looking ahead, I am particularly interested in the evolving role of AI in front-end development. As these
            two fields continue to merge, I aspire to contribute to projects that push the boundaries of interactive and
            intelligent user interfaces. Additionally, if needed, I am open to transitioning into a{' '}
            <strong>full-stack role </strong>
            to expand my capabilities.
          </p>
          <p className='paragraph-2 text-black mt-5'>
            Outside of work, I enjoy <strong>walking, playing tennis and football</strong>, and sharing my knowledge
            through writing. In 2024, I had the opportunity to travel to <strong>Bangkok</strong> for a business trip,
            where I collaborated in person with colleagues from the New York office. Although I work remotely, I embrace
            opportunities for real-world interactions to strengthen professional relationships.
          </p>
          <p className='paragraph-2 text-black mt-5'>
            I define myself as <strong>hardworking, ambitious, and honest</strong>. My personal motto is:
            <em> "Those who don't work hard today will regret it in the future." </em>
            In life, I believe that the world is full of beauty—it all depends on the perspective from which you look. I
            continuously strive to learn new things, improve my skills, and seek insights from those more experienced
            than me.
          </p>
          <p className='paragraph-2 text-black mt-5'>
            With an outgoing personality, I find it easy to connect with people and engage in meaningful conversations.
            Due to time zone differences between Turkey and New York, I haven't been as involved in tech communities and
            meetups as I'd like, but I always look for ways to contribute and stay connected with the industry.
          </p>
        </div>
        <div className='mt-10 flex flex-col items-center'>
          <div className='flex flex-wrap justify-center'>
            <Image
              src='/images/bangkok_team_2024.jpg'
              alt='Team in Bangkok'
              className='rounded-lg m-2'
              width={400}
              height={200}
              layout='fixed'
            />
            <Image
              src='/images/bangkok_team_2_2024.jpeg'
              alt='Another Image'
              className='rounded-lg m-2'
              width={400}
              height={200}
              layout='fixed'
            />
          </div>
          <p className='paragraph-2 text-black mt-4 text-center'>
            Memorable moments with my teammates from New York during our trip to Bangkok in 2024, showcasing our
            collaboration and experiences together.
          </p>
        </div>
      </div>
    </>
  )
}
