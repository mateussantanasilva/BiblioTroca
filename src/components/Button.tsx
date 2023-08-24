import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ComponentProps<'button'>

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center mx-auto gap-2 text-base leading-none font-bold rounded-lg w-full py-4 text-white font-secondary outline-yellow-600 bg-yellow-500 transition-colors duration-200 hover:bg-yellow-600 focus:outline-1 lg:max-w-md',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
