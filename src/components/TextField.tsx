import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextFieldProps {
  id: string
  label: string
  className?: string
  children: ReactNode
}

export function TextField({
  id,
  label,
  className,
  children,
  ...rest
}: TextFieldProps) {
  return (
    <div className={twMerge('relative flex w-full flex-col gap-1', className)}>
      <label htmlFor={id} className="text-base-140-md">
        {label}
      </label>
      {children}
    </div>
  )
}
