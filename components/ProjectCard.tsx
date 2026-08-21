import Image from 'next/image'
import cx from 'classnames'
import { LuArrowUpRight, LuGithub } from 'react-icons/lu'
import { ButtonLink } from './Button'
import { Tag } from './Tag'
import { Project, ProjectStatus, TagStatus } from './types'

interface ProjectCardProps {
  project: Project
  index: number
}

const STATUS_CONFIG: Record<ProjectStatus, { label: string; tagStatus: TagStatus }> = {
  completed: { label: 'Completed', tagStatus: 'success' },
  progress: { label: 'In Progress', tagStatus: 'warning' },
  todo: { label: 'Planned', tagStatus: 'info' },
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { label, tagStatus } = STATUS_CONFIG[project.status]
  const titleId = `project-${project.slug}`
  const isMediaLast = index % 2 !== 0

  return (
    <article
      aria-labelledby={titleId}
      className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-16 border-t border-border-subtle"
    >
      <div
        className={cx(
          'relative overflow-hidden rounded-lg border border-border-subtle bg-bg-elevated aspect-video',
          isMediaLast && 'md:order-last'
        )}
      >
        <Image
          src={project.img}
          alt={project.imgAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-slow ease-out-custom group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 border border-border-default/50 rounded-lg" aria-hidden="true" />
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-mono text-sm text-text-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="w-8 h-px bg-border-default" aria-hidden="true" />
          <span className="font-mono text-sm text-text-secondary">{project.category}</span>
          <Tag variant="status" status={tagStatus} size="sm">
            {label}
          </Tag>
        </div>

        <h2
          id={titleId}
          className="font-mono text-3xl md:text-4xl font-medium text-text-primary mb-4 group-hover:text-accent transition-colors duration-fast"
        >
          {project.title}
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed mb-4">{project.description}</p>
        <p className="text-text-muted leading-relaxed mb-6">{project.outcome}</p>

        <ul className="space-y-3 mb-8">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3 text-text-secondary">
              <span className="text-accent mt-1" aria-hidden="true">—</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.slice(0, 5).map((tech) => (
            <Tag key={tech} variant="outline" size="sm">
              {tech}
            </Tag>
          ))}
          {project.stack.length > 5 && (
            <Tag variant="outline" size="sm">
              +{project.stack.length - 5}
            </Tag>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink
            href={project.primaryAction.href}
            external={project.primaryAction.external}
            variant="primary"
            size="md"
          >
            {project.primaryAction.label}
            <LuArrowUpRight className="ml-2" size={16} aria-hidden="true" />
          </ButtonLink>
          {project.secondaryAction && (
            <ButtonLink
              href={project.secondaryAction.href}
              external={project.secondaryAction.external}
              variant="ghost"
              size="md"
            >
              <LuGithub className="mr-2" size={16} aria-hidden="true" />
              {project.secondaryAction.label}
            </ButtonLink>
          )}
        </div>
      </div>
    </article>
  )
}

export type { ProjectCardProps }
