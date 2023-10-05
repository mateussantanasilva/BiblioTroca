import { ComponentProps, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type TextFieldProps<T extends ElementType> = ComponentProps<T> & {
  label: string
  componentType?: T
}

export function TextField<T extends ElementType = 'input'>({
  type,
  id,
  name,
  label,
  placeholder,
  className,
  componentType: ComponentType = 'input',
  ...rest
}: TextFieldProps<T>) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-base-140-md w-max" htmlFor={id}>
        {label}
      </label>
      <ComponentType
        className={twMerge(
          'w-full p-4 rounded-lg font-primary text-base-140 bg-white-100 border-gray-300 border-[1px] disabled:text-gray-300 placeholder:text-gray-400 placeholder:text-base-140 placeholder:font-primary disabled: hover:disabled:border-gray-300 outline-primary-500 hover:border-gray-400 dark:bg-black',
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
