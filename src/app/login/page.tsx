'use client'

import { Logo } from '@/components/Logo'
import Image from 'next/image'
import { Button } from '@/components/Button'

export default function Login() {
  return (
    <main className="font-primary flex flex-col h-screen gap-x-4 lg:bg-white-500 md:flex-row md:items-center">
      <Image
        src="/background-image-login.png"
        alt="Imagem de Fundo da Página de Login"
        width={683}
        height={1024}
        className="h-2/4 w-full object-bottom object-cover md:h-full md:w-2/3"
      />
      <div className="flex flex-col justify-center px-9 pb-6 pt-4 lg:pb-0 h-full bg-white-500">
        <Logo className="w-[172px] mx-auto mb-5" />
        <p className="text-base-160 text-center mb-16">
          Comece sua jornada no mundo da troca de livros educacionais. Clique no
          botão para acessar sua conta.
        </p>
        <Button className="font-bold">
          <Image src="/google.svg" alt="Google Logo" width={26} height={26} />
          Continue com o Google
        </Button>
      </div>
    </main>
  )
}
