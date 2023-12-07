'use client'

import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import * as Icon from '@phosphor-icons/react'
import { formatDate } from '@/utils/format-date'
import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import * as Dialog from '@radix-ui/react-dialog'
import * as Tooltip from '@radix-ui/react-tooltip'
import Link from 'next/link'
import { useContextSelector } from 'use-context-selector'
import { ModalContext } from '@/contexts/ModalContext'
import { TooltipContent } from '@/components/TooltipContent'
import { Skeleton } from '@/components/Skeleton'
import { generateArrayWithId } from '@/utils/generate-array-with-id'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { TransactionData } from '@/@types/transactionData'
import { api } from '@/lib/axios'
import { WishData } from '@/@types/wishData'
import { BookCompleteData } from '@/@types/bookCompleteData'
import { PointsData } from '@/@types/pointsData'

type BookRequestData = {
  books: BookCompleteData[]
}

export default function MyBooks() {
  const [picture, setPicture] = useState<string | undefined>(undefined)
  const [name, setName] = useState<string | undefined>(undefined)

  const [isLoading, setIsLoading] = useState(true)

  const [pendingTransactionsSize, setPendingTransactionsSize] = useState<
    number | undefined
  >(undefined)
  const [myBooks, setMyBooks] = useState<BookCompleteData[] | undefined>(
    undefined,
  )
  const [wishlistSize, setWishlistSize] = useState<number | undefined>(
    undefined,
  )
  const [historySize, setHistorySize] = useState<number | undefined>(undefined)

  const [points, setPoints] = useState(0)

  useEffect(() => {
    ;(async () => {
      const email = Cookies.get('bibliotroca.userEmail')
      const { data: pendingTransactions } = await api.get<TransactionData[]>(
        `/transacoes/usuario/${email}/status/PENDING`,
      )

      const {
        data: { books },
      } = await api.get<BookRequestData>(`/usuarios/${email}/livros`)

      const { data: wishlist } = await api.get<WishData[]>(`/desejos`)

      const { data: cancelledTransactions } = await api.get<TransactionData[]>(
        `/transacoes/usuario/${email}/status/CANCELLED`,
      )

      const { data: concludedTransactions } = await api.get<TransactionData[]>(
        `/transacoes/usuario/${email}/status/CONCLUDED`,
      )

      const { data: points } = await api.get<PointsData>(`/pontos/${email}`)

      setPendingTransactionsSize(pendingTransactions.length)
      setMyBooks(books)
      setWishlistSize(wishlist.length)
      setHistorySize(
        cancelledTransactions.length + concludedTransactions.length,
      )

      setPoints(points.walletPoints)

      setPicture(Cookies.get('bibliotroca.userPicture'))
      setName(Cookies.get('bibliotroca.userName'))

      setIsLoading(false)
    })()
  }, [])

  const { modalIsOpen, changeModalVisibility } = useContextSelector(
    ModalContext,
    (context) => {
      return {
        ...context,
      }
    },
  )

  // GERAÇÃO DA QUANTIDADE DE SKELETONS
  const quantityToRepeat = generateArrayWithId(4)

  return (
    <div>
      <Header className="h-[233px]">
        <Navigation
          name={name}
          src={picture}
          pendingTransactions={pendingTransactionsSize}
          myBooks={myBooks?.length}
          wishList={wishlistSize}
          history={historySize}
          points={points}
          isLoading={isLoading}
        />
      </Header>
      <main className="mt-28 px-6 pb-10 md:mt-32">
        <section className="mx-auto max-w-[73rem]">
          <div className="mb-5 flex items-center justify-between font-secondary text-title-xs text-gray-500 dark:text-white">
            <h1 className="flex items-baseline gap-1">
              Meus Livros
              {!isLoading && myBooks?.length !== 0 && (
                <span className="font-primary text-sm-140 text-gray-400 dark:text-white">
                  | {myBooks?.length} livro(s)
                </span>
              )}
            </h1>
            <span>
              <Button
                componentType={Link}
                href="/perfil/meus-livros/cadastrar-livro"
                className="p-2"
              >
                <Icon.Plus size={20} weight="bold" />
              </Button>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {isLoading &&
              quantityToRepeat.map((item) => (
                <Skeleton
                  variant="card"
                  className="grid grid-cols-2"
                  size="content"
                  key={item}
                >
                  <div className="flex grid-cols-2 flex-col gap-6 md:grid md:items-center md:gap-0">
                    <div>
                      <Skeleton variant="line" className="mb-1 w-[125px]" />
                      <Skeleton variant="line" className="w-[90px]" />
                    </div>
                    <Skeleton
                      variant="line"
                      className="w-[80px] md:justify-self-center"
                    />
                  </div>
                  <div className="flex grid-cols-2 flex-col justify-between justify-self-end md:grid md:w-full md:items-center">
                    <Skeleton
                      variant="line"
                      className="hidden w-[90px] justify-self-center md:block"
                    />
                    <Skeleton
                      variant="line"
                      size="buttonSm"
                      quantity={2}
                      className="!flex-row justify-end"
                    />
                    <Skeleton variant="line" className="w-[90px] md:hidden" />
                  </div>
                </Skeleton>
              ))}
            {myBooks?.length === 0 && (
              <span className="mx-auto font-secondary text-title-base text-gray-400 dark:text-white">
                Sem livros cadastrados
              </span>
            )}
            {myBooks &&
              myBooks.map((book) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  key={book.id}
                >
                  <Card
                    type="content"
                    className="grid grid-cols-2 items-center justify-between gap-y-7"
                  >
                    <div className="flex grid-cols-2 flex-col gap-6 md:grid md:items-center md:gap-0">
                      <Link href={`/perfil/meus-livros/${book.id}`}>
                        <strong className="block truncate text-base-140 text-gray-500 dark:text-yellow-500">
                          {book.name}
                        </strong>
                        <p className="block truncate text-xs-140 text-gray-400 dark:text-yellow-500">
                          por {book.author}
                        </p>
                      </Link>
                      <span className="h-max w-max rounded-lg border-[1px] border-primary-500 px-2 py-1 text-xs text-primary-500 dark:border-white dark:text-white md:justify-self-center">
                        {book.category}
                      </span>
                    </div>
                    <div className="flex h-full w-full flex-col items-end justify-between md:grid md:grid-cols-2 md:items-center">
                      <div className="hidden items-center gap-1 justify-self-center text-sm-140 text-gray-500 dark:text-white md:flex">
                        <Icon.CalendarBlank size={10} />
                        <span>{formatDate(Date.parse(book.createdAt))}</span>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="cardEdit"
                          componentType={Link}
                          href={`/perfil/meus-livros/${book.id}/atualizar-livro`}
                        >
                          <Icon.PencilSimple weight="bold" />
                        </Button>

                        <Dialog.Root
                          onOpenChange={changeModalVisibility}
                          open={modalIsOpen}
                        >
                          <Dialog.Trigger>
                            <Tooltip.Provider delayDuration={300}>
                              <Tooltip.Root>
                                <Tooltip.Trigger asChild>
                                  <Button variant="cardDelete">
                                    <Icon.TrashSimple weight="bold" />
                                  </Button>
                                </Tooltip.Trigger>
                                <Tooltip.Portal>
                                  <TooltipContent>Excluir Livro</TooltipContent>
                                </Tooltip.Portal>
                              </Tooltip.Root>
                            </Tooltip.Provider>
                          </Dialog.Trigger>

                          <Modal
                            variant="deleteBook"
                            onClick={async () => {
                              await api.delete(`/livros/${book.id}`)

                              window.location.reload()
                            }}
                          />
                        </Dialog.Root>
                      </div>
                      <div className="flex items-center gap-1 justify-self-end text-sm-140 text-gray-500 dark:text-white md:hidden">
                        <Icon.CalendarBlank size={10} />
                        <span>{formatDate(Date.parse(book.createdAt))}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </section>
      </main>
    </div>
  )
}
