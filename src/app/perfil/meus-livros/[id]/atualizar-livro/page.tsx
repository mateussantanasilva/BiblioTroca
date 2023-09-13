'use client'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { InputRadio } from '@/components/InputRadio'
import { Root } from '@radix-ui/react-radio-group'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Book, booksDefault } from '@/model/book'
import { TextField } from '@/components/TextField'

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
          Edite os Dados <br /> Do Livro
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="-mt-12 max-w-5xl mx-auto">
          <form className="flex flex-col gap-11 max-w-[520px] mx-auto">
            <Card type="content" className="flex flex-col gap-4 py-8">
              <TextField
                label="Título"
                id="title"
                name="title"
                value={book?.title}
              />
              <TextField
                label="Autor"
                id="author"
                name="author"
                value={book?.author}
              />
              <TextField
                label="Categoria"
                id="studyArea"
                name="studyArea"
                value={book?.studyArea}
              />
              <TextField
                label="Editora"
                id="publishingCompany"
                name="publishingCompany"
                value={book?.publishingCompany}
              />
              <TextField
                label="Ano de Lançamento"
                id="year"
                name="year"
                value={book?.year}
              />
              <div>
                <label className="text-base-140-md mb-1">
                  Condição do livro
                </label>
                <Root
                  className="flex flex-col md:flex-row gap-2"
                  defaultValue="good"
                >
                  <InputRadio
                    title="Novo"
                    value="new"
                    text="Lido apenas uma vez ou poucas vezes,sem marcas"
                    id="new"
                  />
                  <InputRadio
                    title="Bom"
                    value="good"
                    text="Pode ter algumas marcas leves de manuseio, sem rasuras."
                    id="good"
                  />
                  <InputRadio
                    title="Desgastado"
                    value="worn-out"
                    text="Bastante usado,com várias marcas de uso e anotações."
                    id="worn-out"
                  />
                </Root>
              </div>
              <TextField
                label="Idioma"
                id="language"
                name="language"
                value={book?.language}
              />
              <TextField
                label="Descrição"
                id="description"
                name="description"
                value={book?.description}
              />
            </Card>
            <Button disabled>Atualizar</Button>
          </form>
        </section>
      </main>
    </>
  )
}
