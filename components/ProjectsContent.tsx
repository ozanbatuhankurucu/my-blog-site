import { Project } from '../app/projects'
import { ProjectCard } from './ProjectCard'

interface ProjectsContentProps {
  projects: Project[]
}

export default function ProjectsContent({ projects }: ProjectsContentProps) {
  return (
    <section aria-label="Project collection">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </section>
  )
}
