import React, { FC } from 'react'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'
import moment from 'moment'
import { getProjectStatuProps, ProjectStatus } from './constants'
import Image from 'next/image'

interface ProjectProps {
  description: string
  title: string
  github: string
  stack: any[]
  image: string
  index: number
  status: ProjectStatus
  updatedAt: string
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
  index,
  status,
  updatedAt,
  features = [],
  featuresTitle
}) => {
  const { projectStatu, statuColor } = getProjectStatuProps(status)

  return (
    <article className='project'>
      <Image width={500} height={500} src={image} alt='project-img' />
      <div>
        <span>0{index + 1}.</span>
        <span style={{ backgroundColor: statuColor }}>{projectStatu}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        {features.length > 0 && (
          <figure>
            {featuresTitle && <figcaption>{featuresTitle}</figcaption>}
            <ul className='features-list'>
              {features.map((feature) => {
                const { id, featureText } = feature
                return <li key={id}>{featureText}</li>
              })}
            </ul>
          </figure>
        )}
        <div className='project-stack'>
          {stack.map((item) => {
            const { id, title } = item
            return <span key={id}>{title}</span>
          })}
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <a href={github} target='_blank'>
              <FaGithubSquare className='project-icon' />
            </a>
            {url && (
              <a href={url} target='_blank'>
                <FaShareSquare className='project-icon' />
              </a>
            )}
          </div>
          <div className='text-base'>
            Updated at:{' '}
            <label className='font-extrabold text-sm ml-1'>
              {moment(updatedAt).format('LLL')}
            </label>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Project
