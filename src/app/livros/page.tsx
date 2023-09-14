'use client'

import { useState } from 'react'
import { useBooks } from '@/hooks/useBooks'
import { PublicHeader } from '@/components/PublicHeader'
import { Card } from '@/components/Card'
import { BookCard } from './components/BookCard'
import { Footer } from '@/components/Footer'
import { SearchForm } from './components/SearchForm'

export default function Books() {
  const [query, setQuery] = useState<string | undefined>(undefined)

  const { data: books, isLoading } = useBooks(query)

  function createQuery(query: string) {
    setQuery(query)
  }

  return (
    <div className="flex flex-col mx-auto max-w-[375px]">
      <PublicHeader />

      <Card
        componentType="section"
        type="content"
        className="text-gray-500 mx-6"
      >
        <h2 className="text-title-lg font-secondary mb-3">
          Explore Livros Disponíveis
        </h2>
        <p className="text-lg-140 mb-10">
          Encontre e inicie uma jornada de trocas para expandir sua biblioteca e
          compartilhar conhecimento.
        </p>

        <SearchForm createQuery={createQuery} />
      </Card>

      <main className="flex flex-wrap gap-4 mt-8 mb-9 mx-6">
        {isLoading && <p>Carregando...</p>}

        {books &&
          books.map((book) => {
            return <BookCard key={book.id} book={book} />
          })}
      </main>

      <Footer />
    </div>
  )
}
