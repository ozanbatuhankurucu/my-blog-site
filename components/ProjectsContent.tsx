'use client'

import { useState } from 'react'
import { Project } from '../app/projects'
import { ProjectCard } from './ProjectCard'
import { Drawer } from './Drawer'
import { Tag } from './Tag'
import { Button } from './Button'
import { LuExternalLink, LuGithub } from 'react-icons/lu'
import Link from 'next/link'

interface ProjectsContentProps {
  inProgressProjects: Project[]
  completedProjects: Project[]
}

export default function ProjectsContent({ 
  inProgressProjects, 
  completedProjects 
}: ProjectsContentProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const renderProjects = (projects: Project[]) =>
    projects.map((project) => (
      <ProjectCard
        key={project.title}
        title={project.title}
        description={project.description}
        stack={project.stack}
        status={project.status}
        onClick={() => setSelectedProject(project)}
      />
    ))

  return (
    <>
      {/* In Progress Section */}
      {inProgressProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="font-mono text-xl font-medium text-text-primary mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-warning" />
            In Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderProjects(inProgressProjects)}
          </div>
        </section>
      )}

      {/* Completed Section */}
      {completedProjects.length > 0 && (
        <section>
          <h2 className="font-mono text-xl font-medium text-text-primary mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-success" />
            Completed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderProjects(completedProjects)}
          </div>
        </section>
      )}

      {/* Project Drawer */}
      <Drawer
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        width="480px"
      >
        {selectedProject && (
          <div className="space-y-8">
            {/* Project Image */}
            {selectedProject.img && (
              <div className="rounded-lg overflow-hidden border border-border-subtle">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            )}

            {/* Description */}
            <div>
              <h3 className="font-mono text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                About
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="font-mono text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <Tag key={tech} variant="outline" size="md">
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>

            {/* Features */}
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div>
                <h3 className="font-mono text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                  {selectedProject.featuresTitle || 'Features'}
                </h3>
                <ul className="space-y-2">
                  {selectedProject.features.map(({ text, link }) => (
                    <li key={text} className="flex items-start gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      {link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent transition-colors duration-fast"
                        >
                          {text}
                        </a>
                      ) : (
                        <span className="text-text-secondary">{text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="pt-4 border-t border-border-subtle">
              <div className="flex flex-wrap gap-3">
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="md">
                      <LuExternalLink className="mr-2" size={16} />
                      View Project
                    </Button>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="md">
                      <LuGithub className="mr-2" size={16} />
                      Source Code
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </>
  )
}
