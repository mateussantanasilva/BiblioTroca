'use client'

import * as AvatarUI from '@radix-ui/react-avatar'
import { twMerge } from 'tailwind-merge'

type AvatarProps = {
  src: string
  name: string
  className?: string
}

export function Avatar({ src, name, className }: AvatarProps) {
  const nameArray = name.split(' ')

  const initials = nameArray[0][0] + nameArray[1][0]

  return (
    <AvatarUI.Root
      className={twMerge(
        'overflow-hidden inline-flex items-center justify-center rounded-full align-middle select-none w-16 h-16 md:w-28 md:h-28',
        className,
      )}
    >
      <AvatarUI.Image
        className="w-full h-full object-cover rounded-full"
        src={src}
        alt={name}
      />
      <AvatarUI.Fallback className="text-primary-500 font-primary leading-1 flex h-full w-full items-center justify-center bg-white text-title-base">
        {initials}
      </AvatarUI.Fallback>
    </AvatarUI.Root>
  )
}
