'use client'

import Link from 'next/link'
import { ComponentProps, ElementType, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { WhatsappLogo } from '@phosphor-icons/react'

const button = tv({
  base: 'flex items-center justify-center gap-1 rounded-lg py-4 px-5 text-center font-secondary text-btn-base transition-colors duration-200 focus:outline-1 lg:max-w-md cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed dark:bg-black dark:[&:not(:disabled)]:hover:bg-black dark:border-2 dark:border-white dark:text-yellow-500 dark:[&:not(:disabled)]:hover:text-yellow-300',

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
      whatsapp: 'bg-green-500 text-white [&:not(:disabled)]:hover:bg-green-400',
      delete: 'bg-red-500 text-white [&:not(:disabled)]:hover:bg-red-600',
      evaluate:
        'bg-orange-500 text-white [&:not(:disabled)]:hover:bg-orange-400',
      cardEdit:
        'bg-transparent border-2 border-primary-500 text-primary-500 p-2 !w-max hover:bg-primary-500 hover:text-white',
      cardDelete:
        'bg-transparent border-2 border-red-500 text-red-500 p-2 !w-max hover:bg-red-500 hover:text-white',
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

type BaseButtonProps<T extends ElementType> = {
  componentType?: T
} & ComponentProps<T> &
  VariantProps<typeof button>

const ButtonComponent = forwardRef<any, BaseButtonProps<any>>(
  (
    {
      componentType: Component = 'button',
      variant,
      size,
      children,
      className,
      ...props
    },
    ref,
  ) => (
    <Component
      ref={ref}
      className={button({ variant, size, className })}
      {...props}
    >
      {variant === 'whatsapp' ? (
        <>
          <WhatsappLogo size={'1.54rem'} />
          {children}
        </>
      ) : (
        children
      )}
    </Component>
  ),
)

ButtonComponent.displayName = 'ButtonComponent'

export const Button = ButtonComponent as typeof ButtonComponent & {
  defaultProps: Partial<BaseButtonProps<'button' | typeof Link>>
}
