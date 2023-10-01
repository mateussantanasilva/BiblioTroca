'use client'

import { ComponentProps, useState } from 'react'
import Link from 'next/link'
import { VariantProps, tv } from 'tailwind-variants'
import { Logo } from './Logo'
import { MobilePublicHeader } from './MobilePublicHeader'
import { SwitchTheme } from './SwitchTheme'
import { Button } from './Button'
import { List } from '@phosphor-icons/react'

const header = tv({
  base: 'py-6 mb-9 dark:bg-black',
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
        <div className="flex justify-between items-center px-6 max-w-[73rem] mx-auto">
          {isHomeHeader ? (
            <Logo isWhiteLogo className="w-[8.438rem]" />
          ) : (
            <Logo className="w-[8.438rem]" />
          )}

          <nav className="hidden sm:block">
            <ul
              className={`flex gap-5 font-primary text-base-140-md text-gray-600 dark:text-yellow-500
              ${isHomeHeader && 'text-white'}`}
            >
              <li
                className={`transition-colors duration-200 hover:text-primary-500 dark:hover:text-yellow-300 
                ${isHomeHeader && 'hover:text-primary-400'}`}
              >
                <Link href="/">Home</Link>
              </li>

              <li
                className={`transition-colors duration-200 hover:text-primary-500 dark:hover:text-yellow-300 
                ${isHomeHeader && 'hover:text-primary-400'}`}
              >
                <Link href="/livros">Buscar Livros</Link>
              </li>
            </ul>
          </nav>

          <div className="hidden items-center gap-5 sm:flex">
            <Button
              componentType="a"
              href="/login"
              variant={isHomeHeader ? 'ghostWhite' : 'ghostPurple'}
              size="sm"
            >
              Entrar
            </Button>

            <SwitchTheme isHomeHeader={isHomeHeader} />
          </div>

          <button onClick={handleOpenMobileMenu} className="sm:hidden">
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
