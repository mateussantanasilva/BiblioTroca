'use client'

import Link from 'next/link'
import { useThemes } from '@/hooks/useThemes'
import { SwitchTheme } from './SwitchTheme'
import { Button } from './Button'
import { Logo } from './Logo'
import { motion } from 'framer-motion'
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

  const isNonFocusable = !openMenu ? -1 : 0

  const transitionConfigs = {
    opacity: { duration: 0.3 },
    y: { type: 'spring', damping: 20, stiffness: 120 },
  }

  return (
    <motion.header
      style={{ top: 0 }}
      initial={{ opacity: 0, y: '-100%' }}
      animate={openMenu ? { opacity: 1, y: '0' } : { opacity: 0, y: '-100%' }}
      transition={transitionConfigs}
      className={`fixed z-20 w-screen`}
    >
      <div className="flex items-center justify-between border-b-[1px] border-gray-300 bg-white px-6 py-6 dark:bg-black">
        {isDarkTheme ? (
          <Logo isWhiteLogo className="w-[8.438rem]" />
        ) : (
          <Logo className="w-[8.438rem]" />
        )}

        <button
          onClick={openMobileMenu}
          aria-label="Fechar menu"
          aria-expanded={openMenu}
          aria-hidden={!openMenu}
          tabIndex={isNonFocusable}
        >
          <X
            weight="bold"
            size={'1.75rem'}
            className="text-gray-500 dark:text-white"
          />
        </button>
      </div>

      <nav className="h-[calc(100vh-89.61px)] bg-white px-6 pt-9 dark:bg-black">
        <ul className="flex flex-col gap-9 font-primary text-xl-140-md text-gray-600 dark:text-white">
          <li className="dark:text-yellow-500 dark:hover:text-yellow-300">
            <Link href="/">Home</Link>
          </li>

          <li className="dark:text-yellow-500 dark:hover:text-yellow-300">
            <Link href="/livros">Buscar Livros</Link>
          </li>

          <li className="flex items-center justify-between">
            <label htmlFor="change-theme">Alterar Tema</label>

            <SwitchTheme id="change-mobile-theme" />
          </li>

          <li className="text-btn-base">
            <Button componentType={Link} href="/login">
              Entrar
            </Button>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
