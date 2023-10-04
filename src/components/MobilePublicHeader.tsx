'use client'

import Link from 'next/link'
import { useThemes } from '@/hooks/useThemes'
import { SwitchTheme } from './SwitchTheme'
import { Button } from './Button'
import { Logo } from './Logo'
import { X } from '@phosphor-icons/react'

interface MobileHeaderProps {
  openMenu: boolean
  openMobileMenu: () => void
}

export function MobilePublicHeader({
  openMenu,
  openMobileMenu,
}: MobileHeaderProps) {
  const { isDarkTheme } = useThemes()

  const menuVisibility = openMenu ? 'translate-y-full block' : 'hidden'

  return (
    <header className={`${menuVisibility} fixed z-20 -top-full w-screen`}>
      <div className="flex justify-between items-center py-6 border-b-[1px] border-gray-300 px-6 bg-white dark:bg-black">
        {isDarkTheme ? (
          <Logo isWhiteLogo className="w-[8.438rem]" />
        ) : (
          <Logo className="w-[8.438rem]" />
        )}

        <button onClick={openMobileMenu}>
          <X
            weight="bold"
            size={'1.75rem'}
            className="text-gray-500 dark:text-white"
          />
        </button>
      </div>

      <nav className="pt-9 px-6 h-[calc(100vh-89.61px)] bg-white dark:bg-black">
        <ul className="flex flex-col gap-9 text-xl-140-md font-primary text-gray-600 dark:text-white">
          <li className="dark:text-yellow-500 dark:hover:text-yellow-300">
            <Link href="/">Home</Link>
          </li>

          <li className="dark:text-yellow-500 dark:hover:text-yellow-300">
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
