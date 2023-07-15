import _ from 'lodash'
import React from 'react'
import Project from '../../components/Project'
import { getProjectStatuProps, PROJECTS } from '../projects'

export default function Projects() {
  const sortedList = _.orderBy(PROJECTS, ['createdAt'], ['desc'])

  return (
    <section className='max-w-[1250px] mx-auto py-16 px-4 md:px-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {sortedList.map((project) => {
          const { projectStatu, statuColor } = getProjectStatuProps(
            project.status
          )
          return (
            <div
              key={project.title}
              className='bg-white rounded-lg shadow-md overflow-hidden'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h2 className='text-lg font-bold mb-2'>{project.title}</h2>
                <p className='text-gray-600 mb-4'>{project.description}</p>
                <div className='mb-2'>
                  <span className='font-semibold'>Created At:</span>{' '}
                  {project.createdAt}
                </div>
                <div className='mb-2'>
                  <span className='font-semibold'>Stack:</span>{' '}
                  {project.stack.join(', ')}
                </div>
                <div className='mb-4'>
                  <span className='font-semibold'>Status:</span> {projectStatu}
                </div>
                {project.features && (
                  <div>
                    <h3 className='text-sm font-semibold mb-2'>
                      {project.featuresTitle}
                    </h3>
                    <ul className='list-disc ml-6'>
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className='mt-4 flex justify-between'>
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'>
                    Visit Project
                  </a>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:underline'>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* <div>
        {sortedList.map(
          (
            {
              updatedAt,
              description,
              githubUrl,
              img,
              stack,
              title,
              features,
              featuresTitle,
              url,
              status
            },
            index
          ) => {
            return (
              <Project
                description={description}
                features={features}
                featuresTitle={featuresTitle}
                github={githubUrl}
                image={img}
                index={index}
                stack={stack}
                status={status}
                title={title}
                updatedAt={updatedAt}
                url={url}
              />
            )
          }
        )}
      </div> */}
    </section>
  )
}
