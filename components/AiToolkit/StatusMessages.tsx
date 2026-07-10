'use client'

import { FC } from 'react'
import { LuAlertTriangle, LuLoader } from 'react-icons/lu'

interface LoadingHintProps {
  label?: string
}

export const LoadingHint: FC<LoadingHintProps> = ({
  label = 'Thinking...',
}) => (
  <div className="flex items-center gap-2 text-text-muted text-sm">
    <LuLoader size={14} className="animate-spin" />
    <span>{label}</span>
  </div>
)

interface ErrorBoxProps {
  message: string
  onRetry?: () => void
}

export const ErrorBox: FC<ErrorBoxProps> = ({ message, onRetry }) => (
  <div
    role="alert"
    className="flex items-start gap-3 p-3 rounded-md border border-error/40 bg-error/10 text-sm"
  >
    <LuAlertTriangle size={16} className="text-error mt-0.5 shrink-0" />
    <div className="flex-1 min-w-0">
      <p className="text-text-primary font-medium mb-1">Something went wrong</p>
      <p className="text-text-secondary break-words">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 text-accent hover:text-accent-hover text-xs font-medium transition-colors duration-fast focus:outline-none focus-visible:underline"
        >
          Try again
        </button>
      )}
    </div>
  </div>
)

interface EmptyStateProps {
  title: string
  description: string
  action?: React.ReactNode
}

export const EmptyState: FC<EmptyStateProps> = ({
  title,
  description,
  action,
}) => (
  <div className="text-center py-8">
    <p className="font-mono text-sm text-text-primary mb-1">{title}</p>
    <p className="text-sm text-text-muted mb-4">{description}</p>
    {action}
  </div>
)
