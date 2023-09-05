import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const card = tv({
  base: 'bg-white shadow-container font-primary rounded-lg transition-all hover:shadow-container-lg hover:scale-[1.01]',
  variants: {
    type: {
      menu: 'pt-4 pb-6 px-3 w-32 min-[650px]:w-full h-full',
      common: 'p-6',
      content: 'px-4 py-5 hover:transform-none hover:shadow-container',
    },
  },
})

export const status = tv({
  base: 'rounded-full w-2 h-2',
  variants: {
    color: {
      Pendente: 'text-orange-500',
      Cancelado: 'text-red-500',
      Concluído: 'text-green-500',
    },
  },
})

type CardProps = ComponentProps<'div'> & VariantProps<typeof card>

export function Card({ children, type, className }: CardProps) {
  return <div className={card({ type, className })}>{children}</div>
}
