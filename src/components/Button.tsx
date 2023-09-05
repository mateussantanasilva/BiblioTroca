import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center mx-auto gap-2 text-btn-base leading-none font-bold rounded-lg w-full py-4 text-white font-secondary outline-primary-500 bg-primary-500 transition-colors duration-200 hover:bg-primary-400 focus:outline-1 lg:max-w-md',
  variants: {
    whatsapp: {
      true: 'bg-green-500',
    },
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({
  children,
  className,
  whatsapp,
  ...rest
}: ButtonProps) {
  return (
    <button className={button({ whatsapp, className })} {...rest}>
      {children}
    </button>
  )
}
