'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useBooks } from '@/hooks/useBooks'
import { PublicHeader } from '@/components/PublicHeader'
import { Card } from '@/components/Card'
import { BookCard } from './components/BookCard'
import { Footer } from '@/components/Footer'
import { SearchForm } from './components/SearchForm'
import { SkeletonList } from './components/SkeletonList'
import { motion } from 'framer-motion'

import SeachBooksImage from '../../assets/search-books.png'

export default function Books() {
  const [query, setQuery] = useState<string | undefined>(undefined)

  const { query: bookQuery } = useBooks(query)
  const { data: books, isLoading } = bookQuery

  function createQuery(query: string) {
    setQuery(query)
  }

  return (
    <div className="dark:bg-black">
      <PublicHeader />

      <main className="mx-auto max-w-[73rem]">
        <Card
          componentType="section"
          type="content"
          className="mx-6 flex justify-between overflow-hidden p-0 text-gray-500"
        >
          <div className="px-4 py-5">
            <h2 className="mb-3 font-secondary text-title-lg">
              Explore Livros Disponíveis
            </h2>
            <p className="mb-10 max-w-[38.063rem] text-lg-140">
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

        <section className="mx-6 mb-9 mt-8 grid grid-cols-book-cards gap-4 max-[350px]:grid-cols-1">
          {isLoading && <SkeletonList />}

          {books &&
            books.map((book) => {
              return (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                >
                  <BookCard book={book} />
                </motion.div>
              )
            })}
        </section>
      </main>

      <Footer />
    </div>
  )
}
