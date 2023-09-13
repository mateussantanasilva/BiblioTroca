'use client'

import { Card } from '@/components/Card'
import { Book, booksDefault } from '@/model/book'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { useEffect, useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import { formatDate } from '@/utils/format-date'
import Link from 'next/link'
import { Button } from '@/components/Button'
import {
  historySize,
  myBooksSize,
  pendingTransactionsSize,
} from '@/docs/navigationInfo'

export default function MeusLivros() {
  const [myBooks, setMyBooks] = useState<Book[]>([])

  useEffect(() => {
    setMyBooks(booksDefault)
  }, [])

  return (
    <div>
      <Header>
        <Navigation
          name="Ana Clara"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          pendingExchanges={pendingTransactionsSize}
          amountBooks={myBooksSize}
          wishlist={0}
          history={historySize}
        />
      </Header>
      <main className="px-6 pb-10 mt-28 md:mt-32">
        <section className="max-w-5xl mx-auto">
          <h1 className="font-secondary flex justify-between items-center text-gray-500 text-title-xs mb-5">
            <div className="flex gap-1 items-center">
              Meus Livros
              <span className="font-primary text-sm-140 text-gray-400">
                | {myBooks.length} livro(s)
              </span>
            </div>
            <span>
              <Button
                componentType="a"
                href="/perfil/meus-livros/cadastrar-livro"
                className="p-2"
              >
                <Icon.Plus fill="#fff" size={20} weight="bold" />
              </Button>
            </span>
          </h1>
          <div className="flex flex-col gap-4">
            {myBooks.map((book) => (
              <Link href={`/perfil/meus-livros/${book.id}`} key={book.id}>
                <Card
                  type="common"
                  className="grid grid-cols-2 justify-between gap-y-7 items-center"
                >
                  <div className="flex flex-col gap-6">
                    <div>
                      <strong className="text-base-140 text-gray-500">
                        {book.title}
                      </strong>
                      <p className="text-xs-140 text-gray-400">
                        por {book.author}
                      </p>
                    </div>
                    <span className="border-[1px] border-primary-500 text-xs w-max py-1 px-2 text-primary-500 rounded-lg">
                      {book.studyArea}
                    </span>
                  </div>
                  <div className="flex flex-col justify-between justify-self-end h-full">
                    <div className="flex gap-1 items-center text-gray-500 text-sm-140 justify-self-end">
                      <Icon.CalendarBlank size={10} />
                      <span>{formatDate(book.createdAt)}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
