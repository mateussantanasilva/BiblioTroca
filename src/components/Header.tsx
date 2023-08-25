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
        'relative bg-gradient-to-b from-primary-500 from-60% to-transparent px-6 py-10 text-white -z-[1]',
        className,
      )}
    >
      {children}
    </header>
  )
}
