'use client'

import { Logo } from '@/components/Logo'
import Image from 'next/image'
import { Button } from '@/components/Button'

export default function Login() {
  return (
    <main className="flex h-screen flex-col gap-x-4 font-primary dark:bg-black md:flex-row md:items-center lg:bg-white-500">
      <Image
        src="/background-image-login.png"
        alt="Imagem de Fundo da Página de Login"
        width={683}
        height={1024}
        className="h-2/4 w-full object-cover object-bottom md:h-full md:w-2/3"
      />
      <div className="flex h-full flex-col justify-center bg-white-500 px-9 pb-6 pt-4 dark:bg-black lg:pb-0">
        <Logo className="mx-auto mb-5 w-[172px]" />
        <p className="mb-16 text-center text-base-160">
          Comece sua jornada no mundo da troca de livros educacionais. Clique no
          botão para acessar sua conta.
        </p>
        <Button
          className="mx-auto font-bold"
          componentType="a"
          href="/perfil/completar-perfil"
        >
          <Image src="/google.svg" alt="Google Logo" width={26} height={26} />
          Continue com o Google
        </Button>
      </div>
    </main>
  )
}
