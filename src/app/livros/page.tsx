'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useBooks } from '@/hooks/useBooks'
import { PublicHeader } from '@/components/PublicHeader'
import { Card } from '@/components/Card'
import { BookCard } from './components/BookCard'
import { Footer } from '@/components/Footer'
import { SearchForm } from './components/SearchForm'

import SeachBooksImage from '../../assets/search-books.jpg'

export default function Books() {
  const [query, setQuery] = useState<string | undefined>(undefined)

  const { data: books, isLoading } = useBooks(query)

  function createQuery(query: string) {
    setQuery(query)
  }

  return (
    <>
      <PublicHeader />

      <main className="max-w-[73rem] mx-auto">
        <Card
          componentType="section"
          type="content"
          className="flex justify-between text-gray-500 mx-6 p-0 overflow-hidden"
        >
          <div className="px-4 py-5">
            <h2 className="text-title-lg font-secondary mb-3">
              Explore Livros Disponíveis
            </h2>
            <p className="text-lg-140 mb-10 max-w-[38.063rem]">
              Encontre e inicie uma jornada de trocas para expandir sua
              biblioteca e compartilhar conhecimento.
            </p>

            <SearchForm createQuery={createQuery} />
          </div>

          <Image
            src={SeachBooksImage}
            alt="Livros empilhados"
            width={342}
            priority
            className="hidden md:block"
          />
        </Card>

        <section className="grid grid-cols-book-cards gap-4 mt-8 mb-9 mx-6 max-[350px]:grid-cols-1">
          {isLoading && <p>Carregando...</p>}

          {books &&
            books.map((book) => {
              return <BookCard key={book.id} book={book} />
            })}
        </section>
      </main>

      <Footer />
    </>
  )
}
