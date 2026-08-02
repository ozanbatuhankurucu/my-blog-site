'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import cx from 'classnames'
import { RiCloseLine } from 'react-icons/ri'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export type GalleryImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

type ImageGalleryProps = {
  images: GalleryImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const lightboxRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  const isOpen = activeIndex !== null
  const activeImage = activeIndex !== null ? images[activeIndex] : null
  const hasMultipleImages = images.length > 1

  useEffect(() => {
    setMounted(true)
  }, [])

  const close = useCallback(() => {
    setActiveIndex(null)
  }, [])

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null
      return (current - 1 + images.length) % images.length
    })
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null
      return (current + 1) % images.length
    })
  }, [images.length])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        close()
      } else if (e.key === 'ArrowLeft' && hasMultipleImages) {
        showPrev()
      } else if (e.key === 'ArrowRight' && hasMultipleImages) {
        showNext()
      }
    },
    [isOpen, close, showPrev, showNext, hasMultipleImages]
  )

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'

      setTimeout(() => {
        lightboxRef.current?.focus()
      }, 100)

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = ''
        previousActiveElement.current?.focus()
      }
    }
  }, [isOpen, handleKeyDown])

  const navButtonClassName = cx(
    'absolute top-1/2 -translate-y-1/2 p-2 rounded-md',
    'text-text-muted hover:text-text-primary hover:bg-bg-hover',
    'transition-colors duration-fast',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
  )

  return (
    <>
      <div className='grid grid-cols-2 gap-4'>
        {images.map((image, index) => (
          <button
            key={image.src}
            type='button'
            onClick={() => setActiveIndex(index)}
            className={cx(
              'rounded-lg overflow-hidden border border-border-subtle text-left group',
              'cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            )}
            aria-label={`View ${image.alt}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width ?? 400}
              height={image.height ?? 300}
              className='w-full h-48 object-cover transition-transform duration-slow group-hover:scale-105'
            />
          </button>
        ))}
      </div>

      {mounted &&
        createPortal(
          <div
            className={cx(
              'fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 transition-opacity duration-slow',
              isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}
            aria-hidden={!isOpen}>
            <div
              className='absolute inset-0 bg-bg-base/80 backdrop-blur-sm'
              onClick={close}
              aria-hidden='true'
            />

            <div
              ref={lightboxRef}
              role='dialog'
              aria-modal='true'
              aria-label={activeImage?.alt}
              tabIndex={-1}
              className='relative z-10 w-full max-w-5xl animate-fade-in'>
              <button
                type='button'
                onClick={close}
                className={cx(
                  'absolute -top-12 right-0 p-2 rounded-md',
                  'text-text-muted hover:text-text-primary hover:bg-bg-hover',
                  'transition-colors duration-fast',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
                )}
                aria-label='Close image'>
                <RiCloseLine size={24} />
              </button>

              {activeImage && (
                <div className='relative'>
                  {hasMultipleImages && (
                    <button
                      type='button'
                      onClick={showPrev}
                      className={cx(navButtonClassName, '-left-12 hidden md:block')}
                      aria-label='Previous image'>
                      <LuChevronLeft size={24} />
                    </button>
                  )}

                  <div className='rounded-lg overflow-hidden border border-border-subtle bg-bg-elevated'>
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      width={activeImage.width ?? 1200}
                      height={activeImage.height ?? 900}
                      className='w-full h-auto max-h-[80vh] object-contain'
                    />
                  </div>

                  {hasMultipleImages && (
                    <button
                      type='button'
                      onClick={showNext}
                      className={cx(navButtonClassName, '-right-12 hidden md:block')}
                      aria-label='Next image'>
                      <LuChevronRight size={24} />
                    </button>
                  )}
                </div>
              )}

              {activeImage && (
                <p className='mt-4 text-center text-text-muted text-sm'>
                  {activeImage.alt}
                  {hasMultipleImages && activeIndex !== null && (
                    <span className='ml-2 text-text-muted/70'>
                      ({activeIndex + 1}/{images.length})
                    </span>
                  )}
                </p>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
