import { ComponentProps, ElementType } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const input = tv({
  base: `w-full rounded-lg border border-gray-300 bg-white-100 p-4 font-primary
  outline-none placeholder:font-primary placeholder:text-base-140
  placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500
  data-[type='radio']:hidden dark:bg-black dark:text-white
  dark:placeholder:text-white dark:focus:ring-white`,
  variants: {
    variant: {
      textarea: 'h-[156px]',
      select: 'appearance-none focus:[+svg]:rotate-180',
    },
  },
})

type InputProps<T extends ElementType> = ComponentProps<T> &
  VariantProps<typeof input> & {
    componentType?: T // changes components type based on choice
  }

export function Input<T extends ElementType = 'input' | 'textarea' | 'select'>({
  id,
  className,
  componentType: ComponentType = 'input',
  variant,
  ...rest
}: InputProps<T>) {
  return (
    <ComponentType
      id={id}
      className={input({ variant, className })}
      {...rest}
    />
  )
}
