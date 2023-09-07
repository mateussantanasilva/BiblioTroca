'use client'

import Image from 'next/image'
import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { Logo } from './Logo'
import { List } from '@phosphor-icons/react'

import LogoImage from '../assets/white-logo.svg'

const header = tv({
  base: 'py-10 mb-9',
  variants: {
    variant: {
      generic: 'bg-white border-b-[1px] border-gray-300',
      home: 'bg-transparent',
    },
  },

  defaultVariants: {
    variant: 'generic',
  },
})

type PublicHeaderProps = ComponentProps<'header'> & VariantProps<typeof header>

export function PublicHeader({ variant }: PublicHeaderProps) {
  const isHomeHeader = variant === 'home'

  return (
    <header className={header({ variant })}>
      <div className="flex justify-between items-center px-6">
        {isHomeHeader ? (
          <Image
            src={LogoImage}
            alt="Logo com 3 livros roxos do lado esquerdo e a escrita BIBLIOTROCA"
            width={135}
            height={42}
            className="fill"
          />
        ) : (
          <Logo className="w-[8.438rem]" />
        )}

        <button>
          <List
            weight="bold"
            size={'1.75rem'}
            className={isHomeHeader ? 'text-white' : 'text-gray-500'}
          />
        </button>
      </div>
    </header>
  )
}
