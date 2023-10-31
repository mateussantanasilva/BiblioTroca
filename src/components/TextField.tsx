import { XCircle } from '@phosphor-icons/react'
import { ComponentProps, ElementType, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type TextFieldProps<T extends ElementType> = ComponentProps<T> & {
  label: string
  componentType?: T
  clear?: boolean
}

export function TextField<T extends ElementType = 'input'>({
  type,
  id,
  name,
  defaultValue,
  clear,
  label,
  placeholder,
  className,
  componentType: ComponentType = 'input',
  ...rest
}: TextFieldProps<T>) {
  return (
    <div className="relative flex w-full flex-col gap-1">
      <label className="w-max text-base-140-md" htmlFor={id}>
        {label}
      </label>
      <ComponentType
        className={twMerge(
          'disabled: w-full rounded-lg border-[1px] border-gray-300 bg-white-100 p-4 font-primary text-base-140 outline-primary-500 placeholder:font-primary placeholder:text-base-140 placeholder:text-gray-400 hover:border-gray-400 disabled:text-gray-300 hover:disabled:border-gray-300 dark:bg-black',
          className,
        )}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        defaultValue={defaultValue}
        {...rest}
      />
    </div>
  )
}
