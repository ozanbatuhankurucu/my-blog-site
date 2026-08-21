'use client'

import { Button } from './Button'
import { requestPulseDemoPlay, scrollToPulseDemoVideo } from './PulseDemoVideo'

export function WatchPulseDemoButton() {
  const handleClick = () => {
    scrollToPulseDemoVideo(requestPulseDemoPlay)
  }

  return (
    <Button variant="primary" size="lg" onClick={handleClick}>
      Watch Pulse in action
    </Button>
  )
}
