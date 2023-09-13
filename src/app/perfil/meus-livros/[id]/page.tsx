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
            <p className="mb-3 text-base-140-md">Escrito por {book?.author}</p>
            <div className="mb-4">
              <p className="text-base-140-md mb-1">Categoria</p>
              <span className="border-[1px] border-primary-500 text-xs-140 rounded-lg px-2 py-1 text-primary-500">
                {book?.studyArea}
              </span>
            </div>
            <div className="grid grid-cols-2 mb-4">
              <div>
                <p className="text-base-140-md">Idioma</p>
                <p>{book?.language}</p>
              </div>
              <div>
                <p className="text-base-140-md">Ano</p>
                <p>{book?.year}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-4">
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
