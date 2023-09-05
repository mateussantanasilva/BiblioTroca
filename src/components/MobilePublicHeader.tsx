'use client'

import { Logo } from './Logo'
import { X } from '@phosphor-icons/react'

import { SwitchTheme } from './SwitchTheme'

export function MobilePublicHeader() {
  return (
    <>
      <header className="flex justify-between items-center py-10 bg-white border-b-[1px] border-gray-300 px-6">
        <Logo className="w-[8.438rem]" />

        <button>
          <X weight="bold" size={'1.75rem'} className="text-gray-500" />
        </button>
      </header>

      <nav className="bg-white pt-9 px-6 h-[calc(100vh-122px)]">
        <ul className="flex flex-col gap-9 text-gray-600 text-xl-140 font-primary">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="">Buscar Livros</a>
          </li>

          <li className="flex justify-between items-center">
            <label htmlFor="change-theme">Alterar Tema</label>

            <SwitchTheme />
          </li>

          <li>
            <a
              href=""
              className="block rounded-lg py-4 px-5 text-center font-secondary text-btn-base bg-primary-500 text-white"
            >
              Entrar
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
