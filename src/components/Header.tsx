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
        'z-[1] h-60 bg-primary-500 px-6 py-10 pb-20 text-white md:pb-16',
        className,
      )}
    >
      {children}
    </header>
  )
}
