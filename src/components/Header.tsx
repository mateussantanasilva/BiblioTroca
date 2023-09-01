import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type HeaderProps = {
  children?: ReactNode
  className?: string
}

export function Header({ children, className }: HeaderProps) {
  return (
    <header
      className={twMerge(
        'relative h-60 bg-primary-500 px-6 py-10 pb-20 md:pb-16 z-[1] text-white',
        className,
      )}
    >
      {children}
    </header>
  )
}
