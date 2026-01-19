'use client'

import { FC } from 'react'
import { Tag } from './Tag'
import { ProjectStatus, TagStatus } from './types'

interface ProjectCardProps {
  title: string
  description: string
  stack: string[]
  status: ProjectStatus
  onClick: () => void
}

// Status configuration mapping
const STATUS_CONFIG: Record<ProjectStatus, { label: string; tagStatus: TagStatus }> = {
  completed: { label: 'Completed', tagStatus: 'success' },
  progress: { label: 'In Progress', tagStatus: 'warning' },
  todo: { label: 'Planned', tagStatus: 'info' },
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  stack,
  status,
  onClick,
}) => {
  const { label, tagStatus } = STATUS_CONFIG[status]

  return (
    <button
      onClick={onClick}
      className="
        w-full h-full text-left p-6 rounded-lg
        bg-bg-elevated border border-border-subtle
        transition-all duration-base ease-out-custom
        hover:border-border-default hover:-translate-y-0.5
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base
        group flex flex-col
      "
    >
      {/* Status badge */}
      <div className="mb-4">
        <Tag variant="status" status={tagStatus} size="sm">
          {label}
        </Tag>
      </div>

      {/* Title */}
      <h3
        className="
          font-mono text-xl font-medium text-text-primary
          line-clamp-2 mb-3
          group-hover:text-accent transition-colors duration-fast
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm line-clamp-3 mb-4 flex-grow">
        {description}
      </p>

      {/* Tech stack - always at bottom */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {stack.slice(0, 4).map((tech) => (
          <Tag key={tech} variant="outline" size="sm">
            {tech}
          </Tag>
        ))}
        {stack.length > 4 && (
          <Tag variant="outline" size="sm">
            +{stack.length - 4}
          </Tag>
        )}
      </div>
    </button>
  )
}

export type { ProjectCardProps }
