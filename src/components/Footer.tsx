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
            <a href="/">Home</a>
          </li>

          <li>
            <a href="">Buscar Livros</a>
          </li>

          <li>
            <a href="">Entrar</a>
          </li>

          <li>
            <a href="">Cadastrar</a>
          </li>
        </ul>
      </nav>

      <a
        href=""
        className="block max-w-[11.125rem] rounded-lg py-4 px-5 text-center font-secondary text-btn-base bg-primary-500 text-white"
      >
        Fale conosco
      </a>
    </footer>
  )
}
