'use client'

import { FC, ReactNode, useEffect, useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import cx from 'classnames'
import { RiCloseLine } from 'react-icons/ri'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  width?: string
}

const Drawer: FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  width = '400px',
}) => {
  const drawerRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState(false)

  // Only render portal on client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  // Focus trap and body scroll lock
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'

      // Focus the drawer
      setTimeout(() => {
        drawerRef.current?.focus()
      }, 100)

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = ''
        previousActiveElement.current?.focus()
      }
    }
  }, [isOpen, handleKeyDown])

  // Don't render on server
  if (!mounted) return null

  return createPortal(
    <div
      className={cx(
        'fixed inset-0 z-50 transition-opacity duration-slow',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!isOpen}
    >
      {/* Overlay */}
      <div
        className={cx(
          'absolute inset-0 bg-bg-base/60 backdrop-blur-sm transition-opacity duration-slow',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'drawer-title' : undefined}
        tabIndex={-1}
        style={{ width }}
        className={cx(
          'absolute right-0 top-0 h-full bg-bg-elevated border-l border-border-subtle',
          'flex flex-col shadow-2xl',
          'transition-transform duration-slow ease-out-custom',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle">
          {title && (
            <h2
              id="drawer-title"
              className="font-mono text-xl font-medium text-text-primary"
            >
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className={cx(
              'p-2 -mr-2 rounded-md text-text-muted',
              'hover:text-text-primary hover:bg-bg-hover',
              'transition-colors duration-fast',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            )}
            aria-label="Close drawer"
          >
            <RiCloseLine size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}

export { Drawer }
export type { DrawerProps }
