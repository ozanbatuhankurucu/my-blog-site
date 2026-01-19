'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import cx from 'classnames'
import { ButtonVariant, ButtonSize } from './types'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center font-mono font-medium
      transition-all duration-base ease-out-custom
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base
      disabled:opacity-50 disabled:cursor-not-allowed
      active:scale-[0.98]
    `

    const variants: Record<ButtonVariant, string> = {
      primary: `
        bg-accent text-bg-base
        hover:bg-accent-hover
      `,
      ghost: `
        bg-transparent text-text-secondary
        hover:bg-bg-hover hover:text-text-primary
      `,
    }

    const sizes: Record<ButtonSize, string> = {
      sm: 'px-3 py-1.5 text-sm rounded-base',
      md: 'px-4 py-2 text-base rounded-md',
      lg: 'px-6 py-3 text-lg rounded-md',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cx(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
