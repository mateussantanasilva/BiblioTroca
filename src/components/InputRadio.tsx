import { twMerge } from 'tailwind-merge'
import { BookmarksSimple } from '@phosphor-icons/react'

type InputRadioProps = {
  title: string
  text: string
  htmlFor: string
  className?: string
}

export function InputRadio({
  htmlFor,
  title,
  text,
  className,
}: InputRadioProps) {
  return (
    <label
      className={twMerge(
        `relative w-full cursor-pointer rounded-lg border border-gray-300
        bg-white-100 p-3 after:absolute after:bottom-[calc(50%-10px)]
        after:right-3 after:h-5 after:w-5 after:rounded-full after:border-2
        after:border-primary-500 after:content-[""] dark:bg-black
        dark:after:border-white`,
        className,
      )}
      htmlFor={htmlFor}
    >
      <div className="mb-1 flex items-center gap-1 font-medium">
        <BookmarksSimple size={16} weight="bold" />
        <p className="text-base leading-none">{title}</p>
      </div>
      <p className="ml-[18px] mr-6 text-sm-140">{text}</p>
    </label>
  )
}
