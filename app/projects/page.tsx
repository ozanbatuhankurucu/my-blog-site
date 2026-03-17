import { Metadata } from 'next'
import _ from 'lodash'
import ProjectsContent from '../../components/ProjectsContent'
import { PROJECTS, PROJECT_STATUS } from '../projects'
import { SITE_CONFIG, SITE_URL } from '../../lib/constants'

const projectsDescription = `Projects and experiments built by ${SITE_CONFIG.name}`

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} - Projects`,
  description: projectsDescription,
  openGraph: {
    title: `${SITE_CONFIG.name} - Projects`,
    description: projectsDescription,
    url: `${SITE_URL}/projects`,
    type: 'website',
    siteName: `${SITE_CONFIG.name} Blog`,
  },
  twitter: {
    card: 'summary',
    title: `${SITE_CONFIG.name} - Projects`,
    description: projectsDescription,
  },
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
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
