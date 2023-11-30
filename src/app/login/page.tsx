'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useThemes } from '@/hooks/useThemes'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

import BgLoginImage from '../../assets/background-login.png'

export default function Login() {
  const { isDarkTheme } = useThemes()

  return (
    <main className="flex h-screen flex-col bg-white-500 font-primary dark:bg-black lg:flex-row lg:items-center">
      <Image
        src={BgLoginImage}
        alt="Livros empilhados com uma planta atrás"
        width={683}
        quality={100}
        priority
        className="h-2/4 w-full object-cover object-bottom min-[500px]:h-3/5 sm:h-2/5 sm:object-center lg:h-full lg:w-2/4 lg:max-w-[42.5rem] lg:object-bottom"
      />

      <div className="mx-auto flex h-full max-w-lg flex-col px-6 py-4 text-center text-gray-500 dark:bg-black dark:text-white lg:hidden">
        {isDarkTheme ? (
          <Logo isWhiteLogo className="mx-auto mb-5 w-[10.75rem]" />
        ) : (
          <Logo className="mx-auto mb-5 w-[10.75rem]" />
        )}

        <h2 className="mb-3 hidden font-secondary text-title-base min-[500px]:block">
          Sua plataforma de trocas está à sua espera
        </h2>

        <p className="mx-auto mb-16 max-w-xs text-base-160 min-[500px]:max-w-md">
          Comece sua jornada no mundo da troca de livros educacionais. Clique no
          botão para acessar sua conta.
        </p>

        <Button
          className="mx-auto"
          componentType={Link}
          href="/perfil/completar-perfil"
        >
          <Image src="/google.svg" alt="Google Logo" width={22} height={22} />
          Continue com o Google
        </Button>
      </div>

      <Card
        type="login"
        className="mx-auto hidden text-center text-gray-500 dark:bg-black lg:block"
      >
        {isDarkTheme ? (
          <Logo isWhiteLogo className="mx-auto mb-5 w-[10.75rem]" />
        ) : (
          <Logo className="mx-auto mb-5 w-[10.75rem]" />
        )}

        <h2 className="mb-3 hidden font-secondary text-title-base min-[500px]:block">
          Sua plataforma de trocas está à sua espera
        </h2>

        <p className="mb-16 text-base-160">
          Comece sua jornada no mundo da troca de livros educacionais. Clique no
          botão para acessar sua conta.
        </p>

        <Button
          className="mx-auto"
          componentType={Link}
          href="/perfil/completar-perfil"
        >
          <Image src="/google.svg" alt="Google Logo" width={22} height={22} />
          Continue com o Google
        </Button>
      </Card>
    </main>
  )
}
