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
  const [book, setBook] = useState<Book | undefined>(undefined)

  useEffect(() => {
    setBook(booksDefault.find(({ id }) => id === params.id))
  }, [params.id])

  return (
    <>
      <Header className="pt-16 text-center">
        <Link href="/perfil/meus-livros" className="absolute left-6 top-10">
          <Icon.ArrowLeft
            className="transition-transform duration-300 hover:scale-110 dark:text-yellow-500"
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
        <section className="mx-auto -mt-12 max-w-5xl">
          <Card type="content">
            <p className="mb-3 text-base-140-md">Escrito por {book?.author}</p>
            <div className="mb-4">
              <p className="mb-1 text-base-140-md">Categoria</p>
              <span className="rounded-lg border-[1px] border-primary-500 px-2 py-1 text-xs-140 text-primary-500 dark:border-white dark:text-white">
                {book?.studyArea}
              </span>
            </div>
            <div className="mb-4 grid grid-cols-2">
              <div>
                <p className="text-base-140-md">Idioma</p>
                <p>{book?.language}</p>
              </div>
              <div>
                <p className="text-base-140-md">Ano</p>
                <p>{book?.year}</p>
              </div>
            </div>
            <div className="mb-4 grid grid-cols-2">
              <div>
                <p className="text-base-140-md">Editora</p>
                <p>{book?.publishingCompany}</p>
              </div>
              <div>
                <p className="text-base-140-md">Condição do livro</p>
                <p>{book?.bookCondition}</p>
              </div>
            </div>
            <p className="text-base-140-md">Descrição</p>
            <p>{book?.description}</p>
          </Card>
        </section>
      </main>
    </>
  )
}
