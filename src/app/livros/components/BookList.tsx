'use client'

import { useContextSelector } from 'use-context-selector'
import { BooksQueryContext } from '@/contexts/BooksQueryContext'
import { useBooks } from '@/hooks/useBooks'
import { motion } from 'framer-motion'
import { BookCard } from './BookCard'
import { SkeletonList } from './SkeletonList'

export function BookList() {
  const query = useContextSelector(BooksQueryContext, (context) => {
    return context.query
  })

  const { query: bookQuery } = useBooks(query)
  const { data: books, isLoading } = bookQuery

  return (
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
  )
}
