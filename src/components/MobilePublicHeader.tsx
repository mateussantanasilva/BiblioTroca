'use client'

import { Logo } from './Logo'
import { X } from '@phosphor-icons/react'

import { SwitchTheme } from './SwitchTheme'
import { Button } from './Button'
import Link from 'next/link'

interface MobileHeaderProps {
  openMenu: boolean
  openMobileMenu: () => void
}

export function MobilePublicHeader({
  openMenu,
  openMobileMenu,
}: MobileHeaderProps) {
  const menuVisibility = openMenu && 'translate-y-full'

  return (
    <header
      className={`${menuVisibility} fixed z-20 -top-full left-0 right-0 w-screen max-w-sm mx-auto`}
    >
      <div className="flex justify-between items-center py-10 bg-white border-b-[1px] border-gray-300 px-6">
        <Logo className="w-[8.438rem]" />

        <button onClick={openMobileMenu}>
          <X weight="bold" size={'1.75rem'} className="text-gray-500" />
        </button>
      </div>

      <nav className="bg-white pt-9 px-6 h-[calc(100vh-122px)]">
        <ul className="flex flex-col gap-9 text-gray-600 text-xl-140-md font-primary">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/livros">Buscar Livros</Link>
          </li>

          <li className="flex justify-between items-center">
            <label htmlFor="change-theme">Alterar Tema</label>

            <SwitchTheme />
          </li>

          <li className="text-btn-base">
            <Button componentType={Link} href="/login">
              Entrar
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
