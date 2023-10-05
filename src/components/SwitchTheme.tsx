'use client'

import * as Switch from '@radix-ui/react-switch'
import { useThemes } from '@/hooks/useThemes'
import { motion } from 'framer-motion'
import { CircleHalf, Sun } from '@phosphor-icons/react'

interface SwitchThemeProps {
  isHomeHeader?: boolean
}

export function SwitchTheme({ isHomeHeader = false }: SwitchThemeProps) {
  const { changeTheme, isDarkTheme } = useThemes()

  function handleChangeTheme() {
    changeTheme()
  }

  return (
    <Switch.Root
      id="change-theme"
      onCheckedChange={handleChangeTheme}
      checked={isDarkTheme}
      className={`relative h-[1.563rem] w-[3.5rem] rounded-full bg-gray-600 dark:bg-black dark:shadow-solid-white
      ${isHomeHeader && 'bg-white'}`}
    >
      <CircleHalf
        size={'1.25rem'}
        weight="fill"
        className={`absolute left-1 top-[50%] translate-y-[-50%] text-gray-300 dark:text-white
        ${isHomeHeader && 'text-gray-600'}`}
      />

      <motion.div
        animate={{ x: isDarkTheme ? '1.75rem' : 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        <Switch.Thumb
          className={`absolute left-1 top-[50%] h-[1.25rem] w-[1.25rem] translate-y-[-50%] rounded-full dark:bg-white
        ${isHomeHeader ? 'bg-primary-500' : 'bg-white-500'}`}
        />
      </motion.div>

      <Sun
        size={'1.25rem'}
        weight="bold"
        className="absolute right-1 top-[50%] translate-y-[-50%] text-orange-500"
      />
    </Switch.Root>
  )
}
