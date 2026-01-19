'use client'

import { FC, HTMLAttributes } from 'react'
import cx from 'classnames'
import { TagVariant, TagStatus, TagSize } from './types'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant
  status?: TagStatus
  size?: TagSize
}

const Tag: FC<TagProps> = ({
  children,
  variant = 'default',
  status,
  size = 'sm',
  className,
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center font-mono font-medium
    transition-colors duration-fast ease-out-custom
  `

  const variants: Record<TagVariant, string> = {
    default: 'bg-accent-muted text-accent',
    outline: 'bg-transparent border border-border-subtle text-text-secondary',
    status: '',
  }

  const statusStyles: Record<TagStatus, string> = {
    success: 'bg-success/15 text-success',
    warning: 'bg-warning/15 text-warning',
    error: 'bg-error/15 text-error',
    info: 'bg-accent-muted text-accent',
  }

  const sizes: Record<TagSize, string> = {
    sm: 'px-2 py-0.5 text-xs rounded-base',
    md: 'px-3 py-1 text-sm rounded-md',
  }

  const variantStyle = variant === 'status' && status 
    ? statusStyles[status] 
    : variants[variant]

  return (
    <span
      className={cx(baseStyles, variantStyle, sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  )
}

export { Tag }
export type { TagProps }
