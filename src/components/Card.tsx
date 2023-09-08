import Link from 'next/link'
import { ComponentProps, ElementType } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const card = tv({
  base: 'bg-white shadow-container font-primary rounded-lg transition-all',
  variants: {
    type: {
      menu: 'pt-5 pb-6 px-3 w-[7.75rem] min-[650px]:w-full h-full hover:shadow-container-lg hover:scale-[1.005]',
      common: 'p-4 hover:shadow-container-lg hover:scale-[1.005]',
      content: 'px-4 py-5',
      form: 'px-3 py-8',
      dropdown: 'p-3',
    },
  },
})

export const status = tv({
  base: 'rounded-fu ll w-[0.625rem] h-[0.625rem]',
  variants: {
    color: {
      Pendente: 'text-orange-500',
      Cancelado: 'text-red-500',
      Concluído: 'text-green-500',
    },
  },
})

type CardProps<T extends ElementType> = ComponentProps<T> &
  VariantProps<typeof card> & {
    componentType?: T // changes components type based on choice
  }

// options: div, article, section or Link
export function Card<
  T extends ElementType = 'div' | 'article' | 'section' | typeof Link,
>({
  componentType: ComponentType = 'div',
  children,
  type,
  className,
  ...props
}: CardProps<T>) {
  return (
    <ComponentType className={card({ type, className })} {...props}>
      {children}
    </ComponentType>
  )
}
