'use client'

import cx from 'classnames'
import { FC, MouseEvent, useEffect, useState } from 'react'
import { RiListUnordered } from 'react-icons/ri'
import { TocHeading } from './types'

interface TableOfContentsProps {
  headings: TocHeading[]
}

const HEADER_OFFSET = 80

const TableOfContents: FC<TableOfContentsProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>('')
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    if (headings.length === 0) return

    let rafId = 0

    const updateActive = () => {
      const elements = headings
        .map(({ id }) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)

      if (elements.length === 0) return

      const threshold = window.scrollY + HEADER_OFFSET + 24
      let currentId = elements[0].id
      elements.forEach((el) => {
        if (el.offsetTop <= threshold) currentId = el.id
      })
      setActiveId(currentId)
    }

    const onScrollOrResize = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        updateActive()
      })
    }

    updateActive()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [headings])

  // Hide the desktop sidebar when the footer enters the viewport so the fixed
  // TOC doesn't visually overlap the footer content near the bottom of the page.
  useEffect(() => {
    if (headings.length === 0) return
    const footer = document.querySelector('footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { rootMargin: '0px' }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  const activeHeading = headings.find(({ id }) => id === activeId)
  const activeIndex = headings.findIndex(({ id }) => id === activeId)

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    const el = document.getElementById(id)
    if (!el) return
    event.preventDefault()

    const top =
      el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
    window.history.replaceState(null, '', `#${id}`)
    setActiveId(id)
    setIsMobileOpen(false)
  }

  const renderList = () => (
    <ul className="space-y-0.5">
      {headings.map(({ id, text, level }) => {
        const isActive = activeId === id
        const isH3 = level === 3
        return (
          <li key={id} className="relative">
            {isActive && !isH3 && (
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] rounded-full bg-accent"
              />
            )}
            <a
              href={`#${id}`}
              onClick={(event) => handleClick(event, id)}
              className={cx(
                'block leading-snug transition-colors duration-fast',
                'focus-visible:outline-none focus-visible:text-accent',
                isH3 ? 'pl-6 py-1 text-xs' : 'pl-4 py-1.5 text-sm',
                isActive
                  ? 'text-accent font-medium'
                  : 'text-text-muted hover:text-text-primary'
              )}
              aria-current={isActive ? 'location' : undefined}
            >
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )

  const total = headings.length
  const progress = activeIndex >= 0 ? ((activeIndex + 1) / total) * 100 : 0

  return (
    <>
      {/* Desktop TOC - sticky sidebar on the left, open by default */}
      <aside
        aria-label="Table of contents"
        aria-hidden={isFooterVisible ? 'true' : undefined}
        className={cx(
          'hidden xl:block fixed top-24 left-4 2xl:left-8 w-56 2xl:w-64 z-30',
          'transition-opacity duration-base ease-out-custom',
          isFooterVisible
            ? 'opacity-0 pointer-events-none'
            : 'opacity-100 pointer-events-auto'
        )}
      >
        <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 -mr-2">
          <div className="pl-4 mb-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-secondary">
              On this page
            </span>
            <div
              className="mt-3 h-px bg-border-subtle relative overflow-hidden"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
              aria-label="Reading progress through sections"
            >
              <span
                className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-slow ease-out-custom"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <nav>{renderList()}</nav>
        </div>
      </aside>

      {/* Mobile / tablet TOC - collapsible card in the article flow */}
      <div className="xl:hidden mb-10">
        <div
          className={cx(
            'bg-bg-elevated border rounded-lg overflow-hidden transition-colors duration-fast',
            isMobileOpen ? 'border-border-default' : 'border-border-subtle'
          )}
        >
          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className={cx(
              'w-full flex items-center justify-between gap-3 px-4 py-3 text-left',
              'hover:bg-bg-hover transition-colors duration-fast',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset'
            )}
            aria-expanded={isMobileOpen}
            aria-controls="toc-mobile-panel"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="flex items-center justify-center w-8 h-8 rounded-md bg-bg-surface text-text-muted shrink-0">
                <RiListUnordered size={16} />
              </span>
              <span className="flex flex-col min-w-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
                  On this page
                </span>
                <span
                  className={cx(
                    'text-sm truncate',
                    activeHeading ? 'text-text-primary' : 'text-text-secondary'
                  )}
                >
                  {activeHeading ? activeHeading.text : `${total} sections`}
                </span>
              </span>
            </span>
            <span
              className={cx(
                'shrink-0 text-text-muted transition-transform duration-base',
                isMobileOpen ? 'rotate-180' : 'rotate-0'
              )}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>
          {activeHeading && (
            <div
              className="h-px bg-border-subtle relative overflow-hidden"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
              aria-label="Reading progress through sections"
            >
              <span
                className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-slow ease-out-custom"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
          <div
            id="toc-mobile-panel"
            className={cx(
              'grid transition-[grid-template-rows] duration-slow ease-out-custom',
              isMobileOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            )}
          >
            <div className="overflow-hidden">
              <nav className="border-t border-border-subtle px-2 py-3 max-h-[60vh] overflow-y-auto">
                {renderList()}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TableOfContents
export type { TableOfContentsProps }
