'use client'

import { FC, useState } from 'react'
import dynamic from 'next/dynamic'
import { LuSparkles } from 'react-icons/lu'

const AiToolkit = dynamic(() => import('./AiToolkit'), { ssr: false })

interface AiToolkitLauncherProps {
  title: string
  article: string
}

const AiToolkitLauncher: FC<AiToolkitLauncherProps> = ({ title, article }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="
          inline-flex items-center gap-1.5 px-2 py-1 rounded
          text-xs font-medium
          text-text-muted hover:text-text-primary
          bg-transparent hover:bg-bg-hover
          transition-all duration-fast
          focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-base
        "
        aria-label="Open AI assistant for this article"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <LuSparkles size={14} className="text-accent" />
        <span>Ask AI</span>
      </button>
      {isOpen && (
        <AiToolkit
          title={title}
          article={article}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default AiToolkitLauncher
export type { AiToolkitLauncherProps }
