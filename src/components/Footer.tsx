import Link from 'next/link'
import { Button } from './Button'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="max-w-[73rem] mx-auto flex flex-col gap-5 py-9 px-6 text-gray-600 sm:flex-row sm:justify-between md:gap-40">
      <div>
        <Logo className="w-[8.438rem] mb-3" />

        <p className="text-base-140 mb-1">Copyright © 2023 Bibliotroca.</p>
        <p className="text-sm-140">Conhecimento. Compartilhado.</p>
      </div>

      <div className="flex flex-col justify-between gap-10 md:flex-row md:flex-1">
        <nav>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-7 max-w-fit text-base-140-md md:gap-x-14">
            <li>
              <Link
                href="/"
                className="hover:text-primary-500 transition-colors duration-200"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/livros"
                className="hover:text-primary-500 transition-colors duration-200"
              >
                Buscar Livros
              </Link>
            </li>

            <li>
              <Link
                href="/login"
                className="hover:text-primary-500 transition-colors duration-200"
              >
                Entrar
              </Link>
            </li>

            <li>
              <Link
                href="/login"
                className="hover:text-primary-500 transition-colors duration-200"
              >
                Cadastrar
              </Link>
            </li>
          </ul>
        </nav>

        <Button
          componentType={Link}
          size="lg"
          href="https://wa.me/11912345678"
          target="_blank"
          className="h-fit"
        >
          Fale conosco
        </Button>
      </div>
    </footer>
  )
}
