import { Metadata } from 'next'
import _ from 'lodash'
import ProjectsContent from '../../components/ProjectsContent'
import { PROJECTS, PROJECT_STATUS } from '../projects'

export const metadata: Metadata = {
  title: 'Ozan Batuhan Kurucu - Projects',
  description: 'Projects and experiments built by Ozan Batuhan Kurucu'
}

export default function ProjectsPage() {
  const sortedList = _.orderBy(PROJECTS, ['createdAt'], ['desc'])
  const inProgressProjects = sortedList.filter(
    (item) => item.status === PROJECT_STATUS.progress
  )
  const completedProjects = sortedList.filter(
    (item) => item.status === PROJECT_STATUS.completed
  )

  return (
    <div className="container py-16 md:py-24">
      {/* Page Header */}
      <header className="mb-16">
        <h1 className="font-mono text-4xl font-medium text-text-primary mb-4">
          Projects
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          A collection of projects I've built to learn new technologies, 
          solve problems, and experiment with ideas.
        </p>
      </header>

      {/* Projects content with drawer */}
      <ProjectsContent 
        inProgressProjects={inProgressProjects}
        completedProjects={completedProjects}
      />
    </div>
  )
}
