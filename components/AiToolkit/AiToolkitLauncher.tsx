'use client'

import { FC, useState } from 'react'
import dynamic from 'next/dynamic'
import { LuSparkles } from 'react-icons/lu'
import { getArticleMessages } from '../../lib/article-localization'
import type { PostLocale } from '../types'

const AiToolkit = dynamic(() => import('./AiToolkit'), { ssr: false })

interface AiToolkitLauncherProps {
  slug: string
  articleRevision: string
  locale?: PostLocale
}

const AiToolkitLauncher: FC<AiToolkitLauncherProps> = ({
  slug,
  articleRevision,
  locale = 'en'
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const messages = getArticleMessages(locale).ai

  const openToolkit = () => {
    setHasOpened(true)
    setIsOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={openToolkit}
        className="
          inline-flex items-center gap-1.5 px-2 py-1 rounded
          text-xs font-medium
          text-text-muted hover:text-text-primary
          bg-transparent hover:bg-bg-hover
          transition-all duration-fast
          focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-base
        "
        aria-label={messages.launcherAria}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <LuSparkles size={14} className="text-accent" />
        <span>{messages.launcher}</span>
      </button>
      {hasOpened && (
        <AiToolkit
          slug={slug}
          articleRevision={articleRevision}
          locale={locale}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default AiToolkitLauncher
export type { AiToolkitLauncherProps }
