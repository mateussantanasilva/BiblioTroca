'use client'

import * as Icon from '@phosphor-icons/react'
import * as PopoverUI from '@radix-ui/react-popover'
import Image from 'next/image'

export function Popover() {
  return (
    <PopoverUI.Root>
      <PopoverUI.Trigger className="flex gap-2 items-center rounded-md p-2 text-lg text-white transition-all duration-300 bg-gray-700 hover:bg-gray-800">
        Clica aqui!
        <Icon.Info
          size={24}
          className="text-white"
          id="eye-closed"
          weight="regular"
        />
      </PopoverUI.Trigger>
      <PopoverUI.Portal>
        <PopoverUI.Content
          className="rounded-sm text-base bg-yellow-600 transition-all duration-300 text-white py-3 px-6 cursor-help hover:bg-yellow-700 focus:outline-none border-yellow-800 border-2"
          sideOffset={5}
        >
          <p className="font-primary flex gap-2">
            <span>Viu como é fácil trabalhar com</span>
            <Image
              src="/radix-ui.svg"
              alt="RadixUI Logo"
              width={10}
              height={10}
            />
            <span>RadixUI +</span>
            <Image
              src="/tailwind-css.svg"
              alt="TailwindCSS Logo"
              width={16}
              height={16}
            />
            TailwindCSS
          </p>
          <PopoverUI.Arrow className="fill-yellow-800" />
        </PopoverUI.Content>
      </PopoverUI.Portal>
    </PopoverUI.Root>
  )
}
