'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { LuPlay } from 'react-icons/lu'

const PLAY_EVENT = 'pulse-demo:play'
export const PULSE_DEMO_VIDEO_ID = 'pulse-demo-video'

export function requestPulseDemoPlay() {
  window.dispatchEvent(new Event(PLAY_EVENT))
}

export function scrollToPulseDemoVideo(onScrolled?: () => void) {
  const target = document.getElementById(PULSE_DEMO_VIDEO_ID)
  if (!target) {
    onScrolled?.()
    return
  }

  target.scrollIntoView({ behavior: 'smooth', block: 'center' })

  let didFinishScrolling = false
  const play = () => {
    if (didFinishScrolling) {
      return
    }

    didFinishScrolling = true
    onScrolled?.()
  }

  if ('onscrollend' in window) {
    const handleScrollEnd = () => {
      window.removeEventListener('scrollend', handleScrollEnd)
      play()
    }
    window.addEventListener('scrollend', handleScrollEnd, { once: true })
  }

  window.setTimeout(play, 800)
}

export default function PulseDemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  const play = useCallback(() => {
    const video = videoRef.current
    if (!video) {
      return
    }

    setHasStarted(true)
    void video.play().catch(() => {
      // Native controls remain available if playback is blocked.
    })
  }, [])

  useEffect(() => {
    const onPlayRequest = () => play()
    window.addEventListener(PLAY_EVENT, onPlayRequest)

    return () => window.removeEventListener(PLAY_EVENT, onPlayRequest)
  }, [play])

  return (
    <div
      id={PULSE_DEMO_VIDEO_ID}
      className="relative mx-auto scroll-mt-24"
      style={{
        aspectRatio: '868 / 646',
        width: 'min(100%, 80rem, calc(70dvh * 868 / 646))',
      }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full rounded-lg bg-bg-base object-contain"
        poster="/images/pulse-pomodoro/focus-dashboard.jpg"
        muted
        loop
        playsInline
        controls={hasStarted}
        preload="metadata"
        aria-label="Pomodoro: Work & Study Timer product walkthrough"
      >
        <source src="/images/pulse-pomodoro/pulse-demo.mp4" type="video/mp4" />
        Your browser does not support embedded video.
      </video>

      {!hasStarted && (
        <button
          type="button"
          onClick={play}
          className="
            absolute inset-0 z-10 flex flex-col items-center justify-center gap-3
            rounded-lg bg-bg-base/60 backdrop-blur-[2px]
            transition-colors duration-base ease-out-custom
            hover:bg-bg-base/40
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-elevated
          "
          aria-label="Play Pomodoro: Work & Study Timer product walkthrough"
        >
          <span
            className="
              flex h-14 w-14 items-center justify-center rounded-full
              bg-accent text-bg-base shadow-lg shadow-accent/20
              transition-transform duration-base ease-out-custom
              hover:scale-105
              sm:h-16 sm:w-16
            "
            aria-hidden="true"
          >
            <LuPlay size={28} className="ml-1" />
          </span>
          <span className="font-mono text-sm text-text-primary">Play walkthrough</span>
        </button>
      )}
    </div>
  )
}
