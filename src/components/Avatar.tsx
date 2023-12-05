'use client'

import * as AvatarUI from '@radix-ui/react-avatar'
import { twMerge } from 'tailwind-merge'

export type AvatarProps = {
  src: string | undefined
  name: string | undefined
  className?: string
}

export function Avatar({ src, name, className }: AvatarProps) {
  const nameArray = name?.split('-')

  return (
    <AvatarUI.Root
      className={twMerge(
        'inline-flex h-[60px] w-[60px] select-none items-center justify-center overflow-hidden rounded-full align-middle transition-all md:h-24 md:w-24',
        className,
      )}
    >
      <AvatarUI.Image
        className="h-full w-full rounded-full object-cover"
        src={src}
        alt={name}
        referrerPolicy="no-referrer"
      />
    </AvatarUI.Root>
  )
}
