import { CircleHalf, Sun } from '@phosphor-icons/react'
import * as Switch from '@radix-ui/react-switch'

export function SwitchTheme() {
  return (
    <Switch.Root
      id="change-theme"
      className="relative bg-gray-600 w-[4.75rem] h-8 rounded-full"
    >
      <CircleHalf
        size={'1.75rem'}
        weight="fill"
        className="absolute z-0 left-1 top-[50%] translate-y-[-50%] text-gray-300"
      />

      <Switch.Thumb className="block absolute w-[1.625rem] h-[1.625rem] rounded-full top-[50%] translate-y-[-50%] left-1 bg-white-500 data-[state=checked]:translate-x-[42px] z-10" />

      <Sun
        size={'1.625rem'}
        weight="bold"
        className="absolute z-0 right-1 top-[50%] translate-y-[-50%] text-orange-500"
      />
    </Switch.Root>
  )
}
