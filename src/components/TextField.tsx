import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TextFieldProps = ComponentProps<'input'> & {
  label: string
}

export function TextField({
  type,
  id,
  name,
  label,
  placeholder,
  className,
  ...rest
}: TextFieldProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id}>{label}</label>
      <input
        className={twMerge(
          'w-full p-4 rounded-lg border-gray-300 border-[1px] disabled:text-gray-300 placeholder:opacity-50 disabled: hover:disabled:border-gray-300 outline-primary-500 hover:border-gray-400',
          className,
        )}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        {...rest}
      />
    </div>
  )
}
