import Link from 'next/link'
import { Button } from './Button'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="py-9 px-6 text-gray-600">
      <Logo className="w-[8.438rem] mb-3" />

      <p className="text-base-140 mb-1">Copyright © 2023 Bibliotroca.</p>
      <p className="text-sm-140">Conhecimento. Compartilhado.</p>

      <nav className="pt-5 pb-10">
        <ul className="grid grid-cols-2 gap-y-3 gap-x-7 max-w-fit text-base-140-md">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/livros">Buscar Livros</Link>
          </li>

          <li>
            <Link href="/login">Entrar</Link>
          </li>

          <li>
            <Link href="/login">Cadastrar</Link>
          </li>
        </ul>
      </nav>

      <Button
        componentType={Link}
        size="lg"
        href="https://wa.me/11912345678"
        target="_blank"
      >
        Fale conosco
      </Button>
    </footer>
  )
}
