'use client'

import { Button } from './Button'
import { requestPulseDemoPlay, scrollToPulseDemoVideo } from './PulseDemoVideo'
import { ButtonSize, ButtonVariant } from './types'

interface WatchPulseDemoButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function WatchPulseDemoButton({
  variant = 'ghost',
  size = 'lg',
}: WatchPulseDemoButtonProps) {
  const handleClick = () => {
    scrollToPulseDemoVideo(requestPulseDemoPlay)
  }

  return (
    <Button variant={variant} size={size} onClick={handleClick}>
      Watch it in action
    </Button>
  )
}
