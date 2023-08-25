import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={twMerge('bg-white shadow-container rounded-lg', className)}>
      {children}
    </div>
  )
}
