import React, { FC } from 'react'
import { getProjectStatuProps, ProjectStatus } from '../app/projects'

interface ProjectProps {
  description: string
  title: string
  github: string
  stack: any[]
  image: string
  status: ProjectStatus
  url?: string
  features?: any[]
  featuresTitle?: string
}

const Project: FC<ProjectProps> = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  status,
  features = [],
  featuresTitle
}) => {
  const { projectStatu, statuColor } = getProjectStatuProps(status)

  return (
    <div
      key={title}
      className='bg-white rounded-lg shadow-md overflow-hidden relative'>
      <span
        style={{ backgroundColor: statuColor }}
        className='text-white px-2 py-1 right-2 top-2 rounded-full absolute font-bold'>
        {projectStatu}
      </span>
      <img src={image} alt={title} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h2 className='text-lg font-bold mb-2'>{title}</h2>
        <p className='text-gray-600 mb-4'>{description}</p>
        <div className='mb-2'>
          <span className='font-semibold'>Stack:</span> {stack.join(', ')}
        </div>
        {features && (
          <div>
            <h3 className='text-sm font-semibold mb-2'>{featuresTitle}</h3>
            <ul className='list-disc ml-6'>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        <div className='mt-4 flex justify-between'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'>
            Visit Project
          </a>
          <a
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:underline'>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
