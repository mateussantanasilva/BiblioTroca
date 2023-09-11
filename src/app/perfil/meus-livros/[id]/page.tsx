'use client'

import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Book, booksDefault } from '@/model/book'

type PagePropos = {
  params: {
    id: string
  }
}

export default function Book({ params }: PagePropos) {
  const [books, setmybooks] = useState<Book | undefined>(undefined)

  useEffect(() => {
    setmybooks(booksDefault.find(({ id }) => id === params.id))
  }, [params.id])

  return (
    <>
      <Header className="text-center pt-16">
        <Link href="/perfil/meus-livros" className="absolute left-6 top-10">
          <Icon.ArrowLeft
            className="hover:scale-110 transition-transform duration-300"
            size={32}
            weight="bold"
          />
        </Link>
        <h1 className="font-primary text-sm-160">Meus Livros</h1>
        <h2 className="font-secondary text-title-base">
          Detalhes do <br /> Livro
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="-mt-12 max-w-5xl mx-auto">
          <Card type="content">
            <h2 className="font-secondary text-title-lg">{books?.title}</h2>
            <p className="text-gray-400 text-base-140">{books?.author}</p>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-col gap-1">
                <strong className="text-base-140">Categoria</strong>
                <span
                  aria-label="categoria"
                  className="rounded-xl border-[1px] border-primary-500 py-1 px-3 text-primary-500 text-xs-140 w-fit"
                >
                  {books?.studyArea}
                </span>
              </li>

              <div className="flex gap-20">
                <li className="flex flex-col gap-1">
                  <strong className="text-base-140">Idioma</strong>
                  <p className="text-base-140">{books?.language}</p>
                </li>

                <li className="flex flex-col gap-1">
                  <strong className="text-base-140">Ano</strong>
                  <p className="text-base-140">{books?.year}</p>
                </li>
              </div>

              <li className="flex flex-col gap-1">
                <strong className="text-base-140">Editora</strong>
                <p className="text-base-140">{books?.publishingCompany}</p>
              </li>

              <li className="flex flex-col gap-1">
                <strong className="text-base-140">Condição do livro</strong>
                <p className="text-base-160"> {books?.bookCondition}</p>
              </li>
              <li className="flex flex-col gap-1">
                <strong className="text-base-140">Descrição</strong>
                <p className="text-base-160"> {books?.description}</p>
              </li>
            </ul>
            <div className="flex gap-1 items-center text-xs min-[375px]:text-sm-140"></div>
          </Card>
        </section>
      </main>
    </>
  )
}
