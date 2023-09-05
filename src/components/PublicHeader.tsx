'use client'

import { List } from '@phosphor-icons/react'
import Image from 'next/image'
import Logo from '../assets/white-logo.svg'

export function PublicHeader() {
  return (
    <header className="flex justify-between items-center py-10 bg-transparent mb-9 px-6">
      {/* <Logo className="w-[8.4375rem]" /> */}
      <Image
        src={Logo}
        alt="Logo com 3 livros roxos do lado esquerdo e a escrita BIBLIOTROCA"
        width={135}
        height={42}
        className="fill"
      />

      <button>
        <List weight="bold" size={'1.75rem'} className="text-white" />
      </button>
    </header>
  )
}
