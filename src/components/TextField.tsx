import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextFieldProps {
  htmlFor: string
  label: string
  className?: string
  children: ReactNode
}

export function TextField({
  htmlFor,
  label,
  className,
  children,
}: TextFieldProps) {
  return (
    <div className={twMerge('relative flex w-full flex-col gap-1', className)}>
      <label htmlFor={htmlFor} className="text-base-140-md">
        {label}
      </label>
      {children}
    </div>
  )
}
