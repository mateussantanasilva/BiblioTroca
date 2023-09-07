import Link from 'next/link'
import { ComponentProps, ElementType } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { WhatsappLogo } from '@phosphor-icons/react'

const button = tv({
  base: 'flex items-center justify-center gap-1 rounded-lg py-4 px-5 text-center font-secondary text-btn-base transition-colors duration-200 focus:outline-1 lg:max-w-md cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed',

  variants: {
    variant: {
      purple:
        'bg-primary-500 outline-primary-500 text-white [&:not(:disabled)]:hover:bg-primary-400',
      ghostPurple:
        'text-primary-500 border-2 border-primary-500 [&:not(:disabled)]:hover:bg-primary-500 [&:not(:disabled)]:hover:text-white',
      ghostWhite:
        'text-white border-2 border-white [&:not(:disabled)]:hover:bg-primary-100 [&:not(:disabled)]:hover:text-primary-500',
      white:
        'bg-white text-primary-500 [&:not(:disabled)]:hover:bg-primary-100',
      whatsapp: 'bg-green-500 text-white',
    },

    size: {
      sm: 'w-fit py-2 px-4',
      md: 'w-fit',
      lg: 'w-[11.125rem]',
      full: 'w-full',
    },
  },

  defaultVariants: {
    variant: 'purple',
    size: 'full',
  },
})

type ButtonProps<T extends ElementType> = ComponentProps<T> &
  VariantProps<typeof button> & {
    componentType?: T // changes component type based on choice
  }

// options: button or Link
export function Button<T extends ElementType = 'button' | typeof Link>({
  componentType: ComponentType = 'button',
  variant,
  size,
  children,
  className,
  ...props
}: ButtonProps<T>) {
  return (
    <ComponentType className={button({ variant, size, className })} {...props}>
      {variant === 'whatsapp' ? (
        <>
          <WhatsappLogo size={'1.54rem'} />
          {children}
        </>
      ) : (
        children
      )}
    </ComponentType>
  )
}
