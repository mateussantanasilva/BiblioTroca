import { VariantProps, tv } from 'tailwind-variants'
import { BookmarkSimple } from '@phosphor-icons/react'
import * as RadioGroup from '@radix-ui/react-radio-group'

const item = tv({
  base: 'text-left w-full h-full flex justify-between items-center p-4 gap-1 border-[1px] border-gray-300 rounded-md data-[state="checked"]:bg-primary-100 data-[state="checked"]:border-primary-500 data-[state="checked"]:border-2',
  variants: {
    variant: {
      danger:
        'data-[state="checked"]:bg-red-100 data-[state="checked"]:border-red-500 data-[state="checked"]:border-2',
    },
  },
})

const indicator = tv({
  base: 'block bg-primary-500 w-3 h-3 rounded-full',
  variants: {
    variant: {
      danger: 'bg-red-500',
    },
  },
})

const containerIndicator = tv({
  base: 'flex-none w-6 h-6 border-2 border-primary-500 flex items-center justify-center rounded-full',
  variants: {
    variant: {
      danger: 'border-red-500',
    },
  },
})

type InputRadioProps = RadioGroup.RadioGroupItemProps &
  VariantProps<typeof item> & {
    title: string
    text: string
  }

export function InputRadio({
  id,
  title,
  value,
  text,
  variant,
}: InputRadioProps) {
  return (
    <RadioGroup.Item className={item({ variant })} value={value} id={id}>
      <BookmarkSimple className="md:[w-6 h-6] mt-1 h-4 w-4 flex-none place-self-start" />
      <label htmlFor={id} className="flex-1">
        <p className="mb-3 text-base-140-md">{title}</p>
        <p className="text-base-160">{text}</p>
      </label>
      <div className={containerIndicator({ variant })}>
        <RadioGroup.Indicator className={indicator({ variant })} />
      </div>
    </RadioGroup.Item>
  )
}
