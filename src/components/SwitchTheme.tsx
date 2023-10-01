'use client'

import * as Switch from '@radix-ui/react-switch'
import { CircleHalf, Sun } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'

interface SwitchThemeProps {
  isHomeHeader?: boolean
}

export function SwitchTheme({ isHomeHeader = false }: SwitchThemeProps) {
  const { theme, setTheme } = useTheme()

  function handleChangeTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <Switch.Root
      id="change-theme"
      onCheckedChange={handleChangeTheme}
      className={`relative w-[3.5rem] h-[1.563rem] rounded-full bg-gray-600 dark:bg-black dark:shadow-solid-white
      ${isHomeHeader && 'bg-white'}`}
    >
      <CircleHalf
        size={'1.25rem'}
        weight="fill"
        className={`absolute z-0 left-1 top-[50%] translate-y-[-50%] text-gray-300 dark:text-white
        ${isHomeHeader && 'text-gray-600'}`}
      />

      <Switch.Thumb
        className={`block absolute w-[1.25rem] h-[1.25rem] rounded-full top-[50%] translate-y-[-50%] left-1 data-[state=checked]:translate-x-[28px] z-10 dark:bg-white
        ${isHomeHeader ? 'bg-primary-500' : 'bg-white-500'}`}
      />

      <Sun
        size={'1.25rem'}
        weight="bold"
        className="absolute z-0 right-1 top-[50%] translate-y-[-50%] text-orange-500"
      />
    </Switch.Root>
  )
}
