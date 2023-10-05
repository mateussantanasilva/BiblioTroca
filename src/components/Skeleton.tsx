import { ComponentProps, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { generateArrayWithId } from '@/utils/generate-array-with-id'

// specify formats and heights
const skeleton = tv({
  base: 'rounded-lg',

  variants: {
    variant: {
      card: 'min-w-[12.5rem] min-h-[12.5rem] px-4 py-5 shadow-container animate-pulse bg-white dark:bg-black dark:border',
      line: 'h-[1rem] bg-gray-300 dark:bg-black dark:border',
    },
    size: {
      xs: 'h-[3rem]',
      md: 'h-[18rem]',
    },
  },

  defaultVariants: {
    variant: 'card',
  },
})

type SkeletonProps = ComponentProps<'div'> &
  VariantProps<typeof skeleton> & {
    children?: ReactNode
    quantity?: number
  }

export function Skeleton({
  quantity = 1,
  variant,
  size,
  className,
  children = null,
}: SkeletonProps) {
  let quantityToRepeat

  const repeatOnce = quantity === 1

  if (!repeatOnce) quantityToRepeat = generateArrayWithId(quantity)

  return (
    <>
      {repeatOnce && (
        <div className={skeleton({ variant, size, className })}>{children}</div>
      )}

      {!repeatOnce && (
        <div className={`${className} flex flex-col gap-2`}>
          {quantityToRepeat?.map((item) => {
            return (
              <div key={item} className={skeleton({ variant, size })}>
                {children}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
