import * as Switch from '@radix-ui/react-switch'
import { CircleHalf, Sun } from '@phosphor-icons/react'

export function SwitchTheme() {
  return (
    <Switch.Root
      id="change-theme"
      className="relative bg-gray-600 w-[3.5rem] h-[1.563rem] rounded-full"
    >
      <CircleHalf
        size={'1.25rem'}
        weight="fill"
        className="absolute z-0 left-1 top-[50%] translate-y-[-50%] text-gray-300"
      />

      <Switch.Thumb className="block absolute w-[1.25rem] h-[1.25rem] rounded-full top-[50%] translate-y-[-50%] left-1 bg-white-500 data-[state=checked]:translate-x-[28px] z-10" />

      <Sun
        size={'1.25rem'}
        weight="bold"
        className="absolute z-0 right-1 top-[50%] translate-y-[-50%] text-orange-500"
      />
    </Switch.Root>
  )
}
