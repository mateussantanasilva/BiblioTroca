import { XCircle } from '@phosphor-icons/react'
import { ComponentProps, ElementType, useEffect, useRef, useState } from 'react'
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
  defaultValue: dv,
  clear,
  label,
  placeholder,
  className,
  componentType: ComponentType = 'input',
  ...rest
}: TextFieldProps<T>) {
  const [defaultValue, setDefaultValue] = useState<string | undefined>('')

  useEffect(() => {
    setDefaultValue(dv)
  }, [dv])

  const inputRef = useRef<HTMLInputElement>(null)

  function clearValue() {
    setDefaultValue('')
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <div className="relative flex w-full flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <ComponentType
        className={twMerge(
          'disabled: w-full rounded-lg border-[1px] border-gray-300 bg-white-100 p-4 font-primary text-base-140 outline-primary-500 placeholder:font-primary placeholder:text-base-140 placeholder:text-gray-400 hover:border-gray-400 disabled:text-gray-300 hover:disabled:border-gray-300 dark:bg-black',
          className,
        )}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        ref={inputRef}
        defaultValue={defaultValue}
        onChange={() => setDefaultValue(inputRef.current?.value)}
        {...rest}
      />
      {clear && (inputRef.current?.value !== '' || defaultValue !== '') && (
        <XCircle
          className="absolute right-4 top-1/2 cursor-pointer text-red-500 dark:text-yellow-500"
          weight="fill"
          size={24}
          onClick={() => clearValue()}
        />
      )}
    </div>
  )
}
