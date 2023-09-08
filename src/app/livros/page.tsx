'use client'

import { PublicHeader } from '@/components/PublicHeader'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { BookCard } from './components/BookCard'
import { MagnifyingGlass } from '@phosphor-icons/react'

export default function Books() {
  return (
    <div className="flex flex-col mx-auto max-w-[375px]">
      <PublicHeader />

      <Card componentType="section" type="content" className="text-gray-500">
        <h2 className="text-title-lg font-secondary mb-3">
          Explore Livros Disponíveis
        </h2>
        <p className="text-lg-140 mb-10">
          Encontre e inicie uma jornada de trocas para expandir sua biblioteca e
          compartilhar conhecimento.
        </p>

        <form className="flex items-center gap-1">
          <input
            type="text"
            placeholder="Busque por um livro, autor ou categoria."
            className="flex-1 bg-white-100 rounded-lg border-[1px] border-gray-300 p-4 font-primary placeholder:text-gray-400 placeholder:text-base-140 placeholder:font-primary"
          />

          <Button type="submit" variant="ghostPurple" size="sm" className="p-4">
            <MagnifyingGlass size={'1.4rem'} weight="bold" />
          </Button>
        </form>
      </Card>

      <main className="flex flex-wrap gap-4 mt-8 mb-9">
        <BookCard />
        <BookCard />
        <BookCard />
      </main>

      <Footer />
    </div>
  )
}
