'use client'

import * as AvatarUI from '@radix-ui/react-avatar'
import { twMerge } from 'tailwind-merge'

export type AvatarProps = {
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
        'inline-flex h-16 w-16 select-none items-center justify-center overflow-hidden rounded-full align-middle md:h-28 md:w-28',
        className,
      )}
    >
      <AvatarUI.Image
        className="h-full w-full rounded-full object-cover"
        src={src}
        alt={name}
      />
      <AvatarUI.Fallback className="leading-1 flex h-full w-full items-center justify-center bg-white font-primary text-title-base text-primary-500">
        {initials}
      </AvatarUI.Fallback>
    </AvatarUI.Root>
  )
}
