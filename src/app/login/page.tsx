'use client'

import { Logo } from '@/components/Logo'
import Image from 'next/image'
import { Button } from '@/components/Button'

export default function Login() {
  return (
    <main className="font-primary flex flex-col h-screen bg-white-500 gap-4 lg:bg-white md:flex-row md:items-center">
      <Image
        src="/background-image-login.png"
        alt="Imagem de Fundo da Página de Login"
        width={683}
        height={1024}
        className="h-2/4 w-full object-bottom object-cover lg:h-full lg:w-2/3"
      />
      <div className="px-9 pb-6 lg:pb-0 my-auto">
        <Logo className="w-[172px] mx-auto mb-5" />
        <p className="text-center mb-16">
          Comece sua jornada no mundo da troca de livros educacionais. Clique no
          botão para acessar sua conta.
        </p>
        <Button className="font-bold">
          <Image src="/google.svg" alt="Google Logo" width={22} height={22} />
          Continue com o Google
        </Button>
      </div>
    </main>
  )
}
