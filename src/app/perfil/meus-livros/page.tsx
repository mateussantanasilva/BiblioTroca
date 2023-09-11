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

export default function MeusLivros() {
  const [mybooks, setmybooks] = useState<Book[]>([])
  const [isListVisible, setListVisible] = useState(false)

  const toggleList = () => {
    setListVisible(!isListVisible)
  }

  useEffect(() => {
    setmybooks(booksDefault)
  }, [])

  return (
    <>
      <Header>
        <Navigation
          name="Ana Clara"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          amountExchanges={0}
          amountBooks={mybooks.length}
          wishlist={0}
          history={0}
        />
      </Header>
      <main className="px-6 pb-10 mt-28 md:mt-32">
        <section className="max-w-5xl mx-auto">
          <h1 className="font-secondary flex gap-1 items-center text-gray-500 text-title-xs mb-5">
            Meus Livros
            <span className="font-primary text-sm-140 text-gray-400">
              | {mybooks.length} livro(s)
            </span>
            <span>
              <Button>
                <Link href="/perfil/meus-livros/cadastrar-livro">
                  <Icon.Plus className="w-5 h-5" />
                </Link>
              </Button>
            </span>
          </h1>
          <div className="flex flex-col gap-4">
            {mybooks.map((book) => (
              <Link key={book.id} href={`/perfil/meus-livros/${book.id}`}>
                <Card
                  type="common"
                  className="grid grid-cols-2 justify-between gap-y-7 items-center md:grid-cols-4"
                >
                  <div>
                    <strong className="text-base-140 text-gray-500">
                      {book.title}
                    </strong>
                    <div>
                      <span>{book.author}</span>
                    </div>
                    <div>
                      <span>{book.studyArea}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center text-gray-500 text-sm-140 justify-self-end">
                    <Icon.CalendarBlank size={10} />
                    <span>{formatDate(book.createdAt)}</span>
                  </div>
                  <div className="App">
                    <button onClick={toggleList}>
                      {' '}
                      <Icon.SlidersHorizontal />
                    </button>
                    {isListVisible && (
                      <ul>
                        <li>
                          <Link href="/perfil/meus-livros/atualizar-livro">
                            <Icon.PencilSimple />
                          </Link>
                        </li>
                        <li>
                          <Icon.TrashSimple />
                        </li>
                      </ul>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
