'use client'

import { FC, useState } from 'react'
import { LuCheck, LuDownload } from 'react-icons/lu'

interface DownloadArticleButtonProps {
  content: string
  filename: string
}

const DownloadArticleButton: FC<DownloadArticleButtonProps> = ({
  content,
  filename
}) => {
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = () => {
    try {
      const blob = new Blob([content], {
        type: 'text/markdown;charset=utf-8'
      })
      const url = URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.download = filename
      document.body.appendChild(anchor)
      anchor.click()
      document.body.removeChild(anchor)
      URL.revokeObjectURL(url)
      setDownloaded(true)
      window.setTimeout(() => setDownloaded(false), 2000)
    } catch (err) {
      console.error('Failed to download markdown:', err)
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="
        inline-flex items-center gap-1.5 px-2 py-1 rounded
        text-xs font-medium
        text-text-muted hover:text-text-primary
        bg-transparent hover:bg-bg-hover
        transition-all duration-fast
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-base
      "
      aria-label={downloaded ? 'Downloaded!' : 'Download markdown'}
    >
      {downloaded ? (
        <>
          <LuCheck size={14} className="text-success" />
          <span className="text-success">Downloaded!</span>
        </>
      ) : (
        <>
          <LuDownload size={14} />
          <span>Download .md</span>
        </>
      )}
    </button>
  )
}

export default DownloadArticleButton
export type { DownloadArticleButtonProps }
