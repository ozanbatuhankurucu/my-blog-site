import { Metadata } from 'next'
import ProjectsContent from '../../components/ProjectsContent'
import { PROJECTS } from '../projects'
import { SITE_CONFIG, SITE_URL } from '../../lib/constants'

const projectsDescription = `Explore native apps, developer tools, and data visualizations designed and built by ${SITE_CONFIG.name}.`

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
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - Projects`,
    description: projectsDescription,
  },
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
}

export default function ProjectsPage() {
  const sortedProjects = [...PROJECTS].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
  const shippedCount = PROJECTS.filter((project) => project.status === 'completed').length
  const activeCount = PROJECTS.filter((project) => project.status === 'progress').length

  return (
    <div className="container py-16 md:py-24">
      <header className="max-w-4xl mb-12 md:mb-16 animate-fade-in">
        <p className="font-mono text-sm text-accent mb-4">Selected work / 2022—2026</p>
        <h1 className="font-mono text-4xl md:text-6xl font-medium text-text-primary mb-6">
          Ideas shaped into useful, thoughtful products.
        </h1>
        <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-3xl">
          A collection of native apps, developer tools, and visual experiments—
          built to solve real problems while learning deeply along the way.
        </p>
      </header>

      <dl className="grid grid-cols-3 gap-4 py-6 border-y border-border-subtle mb-4">
        <div>
          <dt className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">Projects</dt>
          <dd className="font-mono text-2xl text-text-primary">{PROJECTS.length}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">Active</dt>
          <dd className="font-mono text-2xl text-warning">{activeCount}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">Shipped</dt>
          <dd className="font-mono text-2xl text-success">{shippedCount}</dd>
        </div>
      </dl>

      <ProjectsContent projects={sortedProjects} />
    </div>
  )
}
