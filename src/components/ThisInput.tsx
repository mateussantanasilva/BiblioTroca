import { InputHTMLAttributes } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

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

type InputProps = VariantProps<typeof input> &
  InputHTMLAttributes<HTMLInputElement>

export function ThisInput({ className, variant, ...rest }: InputProps) {
  return <input className={input({ variant, className })} {...rest} />
}
