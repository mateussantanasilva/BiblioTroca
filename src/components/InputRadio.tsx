import { VariantProps, tv } from 'tailwind-variants'
import { BookmarksSimple } from '@phosphor-icons/react'

export const item = tv({
  base: `relative w-full cursor-pointer rounded-lg border border-gray-300
  bg-white-100 p-3 after:absolute after:bottom-[calc(50%-10px)] after:right-3
  after:h-5 after:w-5 after:rounded-full after:border-2 after:border-primary-500
  after:content-[""] dark:bg-black dark:after:border-white`,
  variants: {
    variant: {
      danger: '',
    },
  },
})

type InputRadioProps = VariantProps<typeof item> & {
  title: string
  text: string
  htmlFor: string
}

export function InputRadio({ variant, htmlFor, title, text }: InputRadioProps) {
  return (
    <label className={item({ variant })} htmlFor={htmlFor}>
      <div className="mb-1 flex items-center gap-1 font-medium">
        <BookmarksSimple size={16} weight="bold" />
        <p className="text-base leading-none">{title}</p>
      </div>
      <p className="ml-[18px] mr-6 text-sm-140">{text}</p>
    </label>
  )
}
