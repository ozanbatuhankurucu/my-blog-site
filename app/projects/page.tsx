import _ from 'lodash'
import { Metadata } from 'next'
import React from 'react'
import Project from '../../components/Project'
import { Project as ProjectType, PROJECTS, PROJECT_STATUS } from '../projects'

export const metadata: Metadata = {
  title: 'Ozan Batuhan Kurucu - Projects'
}

export default function Projects() {
  const sortedList = _.orderBy(PROJECTS, ['createdAt'], ['desc'])
  const completedProjects = sortedList.filter(
    (item) => item.status === PROJECT_STATUS.completed
  )
  const unCompletedProjects = sortedList.filter(
    (item) => item.status === PROJECT_STATUS.progress
  )

  const renderProjects = (projects: ProjectType[]) =>
    projects.map(
      ({
        description,
        githubUrl,
        img,
        stack,
        status,
        title,
        features,
        featuresTitle,
        url
      }) => {
        return (
          <Project
            description={description}
            github={githubUrl}
            image={img}
            stack={stack}
            status={status}
            title={title}
            features={features}
            featuresTitle={featuresTitle}
            url={url}
          />
        )
      }
    )
  return (
    <section className='max-w-[1250px] mx-auto py-16 px-4 md:px-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {renderProjects(unCompletedProjects)}
        {renderProjects(completedProjects)}
      </div>
    </section>
  )
}
