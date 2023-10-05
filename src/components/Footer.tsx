import Link from 'next/link'
import { useThemes } from '@/hooks/useThemes'
import { Button } from './Button'
import { Logo } from './Logo'

export function Footer() {
  const { isDarkTheme } = useThemes()

  return (
    <div className="border-t border-gray-300 dark:bg-black">
      <footer className="mx-auto flex max-w-[73rem] flex-col gap-5 px-6 py-9 text-gray-600 sm:flex-row sm:justify-between md:gap-40">
        <div className="dark:text-white">
          {isDarkTheme ? (
            <Logo isWhiteLogo className="mb-3 w-[8.438rem]" />
          ) : (
            <Logo className="mb-3 w-[8.438rem]" />
          )}

          <p className="mb-1 text-base-140">Copyright © 2023 Bibliotroca.</p>
          <p className="text-sm-140">Conhecimento. Compartilhado.</p>
        </div>

        <div className="flex flex-col justify-between gap-10 dark:text-yellow-500 md:flex-1 md:flex-row">
          <nav>
            <ul className="grid max-w-fit grid-cols-2 gap-x-7 gap-y-3 text-base-140-md md:gap-x-14">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-200 hover:text-primary-500 dark:hover:text-yellow-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/livros"
                  className="transition-colors duration-200 hover:text-primary-500 dark:hover:text-yellow-300"
                >
                  Buscar Livros
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="transition-colors duration-200 hover:text-primary-500 dark:hover:text-yellow-300"
                >
                  Entrar
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="transition-colors duration-200 hover:text-primary-500 dark:hover:text-yellow-300"
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
    </div>
  )
}
