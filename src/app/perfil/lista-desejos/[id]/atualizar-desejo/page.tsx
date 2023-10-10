'use client'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { TextField } from '@/components/TextField'
import { Wishlist, wishlistDefault } from '@/model/wishlist'

type PagePropos = {
  params: {
    id: string
  }
}

export default function UpdateWish({ params }: PagePropos) {
  const [wish, setWish] = useState<Wishlist | undefined>(undefined)

  useEffect(() => {
    setWish(wishlistDefault.find(({ id }) => id === params.id))
  }, [params.id])

  return (
    <>
      <Header className="pt-16 text-center">
        <Link href="/perfil/lista-desejos" className="absolute left-6 top-10">
          <Icon.ArrowLeft
            className="transition-transform duration-300 hover:scale-110"
            size={32}
            weight="bold"
          />
        </Link>
        <h1 className="font-primary text-sm-160">Lista de Desejos</h1>
        <h2 className="font-secondary text-title-base">
          Edite os Dados <br /> Do Livro
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="mx-auto -mt-12 max-w-5xl">
          <form className="mx-auto flex max-w-[520px] flex-col gap-11">
            <Card type="content" className="flex flex-col gap-4 py-8">
              <TextField
                label="Título"
                id="title"
                name="title"
                value={wish?.title}
              />
              <TextField
                label="Autor"
                id="author"
                name="author"
                value={wish?.author}
              />
              <TextField
                label="Categoria"
                id="studyArea"
                name="studyArea"
                value={wish?.studyArea}
              />
            </Card>
            <Button className="lg:max-w-full" disabled>
              Atualizar
            </Button>
          </form>
        </section>
      </main>
    </>
  )
}
