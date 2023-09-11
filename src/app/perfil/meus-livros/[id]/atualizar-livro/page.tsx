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

type PagePropos = {
  params: {
    id: string
  }
}

export default function Book({ params }: PagePropos) {
  const [, setmybooks] = useState<Book | undefined>(undefined)

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
          Edite os Dados <br /> Do Livro
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="-mt-12 max-w-5xl mx-auto">
          <Card type="content" className="mb-4">
            <form>
              <label htmlFor="titulo">Titulo</label>
              <input type="text" />
              <label htmlFor="autor">Autor</label>
              <input type="text" />
              <label htmlFor="categoria">Categoria</label>
              <select id="studyArea" name="Area" form="studyAreaform">
                <option value="C.Bio">Ciências Biológicas</option>
                <option value="Eng">Engenharias</option>
                <option value="C.Sau">Ciências da Saúde</option>
                <option value="C.Agra">Ciências Agrárias</option>
                <option value="Ling.L.A">Linguística, Letras e Artes</option>
                <option value="C.Soci">Ciências Sociais Aplicadas</option>
                <option value="C.Human">Ciências Humanas</option>
                <option value="C.Exat">Ciências Exatas e da Terra</option>
              </select>
              <label htmlFor="Editoria">Editora</label>
              <input type="text" />
              <label htmlFor="Ano">Ano de Lançamento</label>
              <input type="text" />
            </form>
            <strong className="text-base-140-md mb-3">Condição do livro</strong>
            <form className="flex flex-col gap-11">
              <Root
                className="flex flex-col md:flex-row gap-2"
                defaultValue="accept"
              >
                <InputRadio
                  title="Novo"
                  value="new"
                  text="Lido apenas uma vez ou poucas vezes,sem marcas"
                  id="accept"
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
              <form>
                <label>Idioma</label>
                <input type="text" />
                <label>Descrição</label>
                <input type="text" />
              </form>
              <Button> Atualizar</Button>
            </form>
          </Card>
        </section>
      </main>
    </>
  )
}
