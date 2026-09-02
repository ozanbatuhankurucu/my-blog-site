'use client'

import { Button } from './Button'
import { requestPulseDemoPlay, scrollToPulseDemoVideo } from './PulseDemoVideo'
import { ButtonSize, ButtonVariant } from './types'

interface WatchPulseDemoButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  label?: string
}

export function WatchPulseDemoButton({
  variant = 'ghost',
  size = 'lg',
  label = 'Watch it in action',
}: WatchPulseDemoButtonProps) {
  const handleClick = () => {
    scrollToPulseDemoVideo(requestPulseDemoPlay)
  }

  return (
    <Button variant={variant} size={size} onClick={handleClick}>
      {label}
    </Button>
  )
}
