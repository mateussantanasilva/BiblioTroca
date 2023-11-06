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
        'dark:border-t-none h-[277px] bg-primary-500 px-6 py-10 pb-20 text-white dark:border-b-2 dark:border-b-white dark:bg-black md:pb-16',
        className,
      )}
    >
      {children}
    </header>
  )
}
