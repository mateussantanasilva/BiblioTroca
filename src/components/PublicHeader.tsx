'use client'

import { ComponentProps, useState } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { Logo } from './Logo'
import { List } from '@phosphor-icons/react'
import { MobilePublicHeader } from './MobilePublicHeader'

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

  const [openMenu, setOpenMenu] = useState(false)

  function handleOpenMobileMenu() {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <header className={header({ variant })}>
        <div className="flex justify-between items-center px-6">
          {isHomeHeader ? (
            <Logo isWhiteLogo className="w-[8.438rem]" />
          ) : (
            <Logo className="w-[8.438rem]" />
          )}

          <button onClick={handleOpenMobileMenu}>
            <List
              weight="bold"
              size={'1.75rem'}
              className={isHomeHeader ? 'text-white' : 'text-gray-500'}
            />
          </button>
        </div>
      </header>

      <MobilePublicHeader
        openMenu={openMenu}
        openMobileMenu={handleOpenMobileMenu}
      />
    </>
  )
}
