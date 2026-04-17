'use client'

import { useEffect, useState } from 'react'

type ReadingProgressBarProps = {
  targetId?: string
}

const ReadingProgressBar = ({
  targetId = 'article-content'
}: ReadingProgressBarProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId = 0

    const computeProgress = () => {
      const el = document.getElementById(targetId)
      if (!el) {
        setProgress(0)
        return
      }

      const rect = el.getBoundingClientRect()
      const total = Math.max(rect.height - window.innerHeight, 1)
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      const nextProgress = (scrolled / total) * 100

      setProgress(nextProgress)
    }

    const onScrollOrResize = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        computeProgress()
      })
    }

    computeProgress()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [targetId])

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-accent transition-[width] duration-75 ease-out-custom"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ReadingProgressBar
