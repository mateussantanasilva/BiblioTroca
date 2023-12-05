'use client'

import Link from 'next/link'
import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import * as Icon from '@phosphor-icons/react'
import { formatDate } from '@/utils/format-date'
import { Button } from '@/components/Button'
import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from '@/components/Modal'
import * as Tooltip from '@radix-ui/react-tooltip'
import { TooltipContent } from '@/components/TooltipContent'
import { ModalContext } from '@/contexts/ModalContext'
import { useContextSelector } from 'use-context-selector'
import { Skeleton } from '@/components/Skeleton'
import { generateArrayWithId } from '@/utils/generate-array-with-id'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { api } from '@/lib/axios'
import Cookies from 'js-cookie'
import { TransactionData } from '@/@types/transactionData'
import { WishData } from '@/@types/wishData'

export default function Wishlist() {
  const [picture, setPicture] = useState<string | undefined>(undefined)
  const [name, setName] = useState<string | undefined>(undefined)

  const [isLoading, setIsLoading] = useState(true)

  const [pendingTransactionsSize, setPendingTransactionsSize] = useState<
    number | undefined
  >(undefined)
  const [myBooksSize, setMyBooksSize] = useState<number | undefined>(undefined)
  const [wishlist, setWishlist] = useState<WishData[] | undefined>(undefined)
  const [historySize, setHistorySize] = useState<number | undefined>(undefined)

  useEffect(() => {
    ;(async () => {
      const email = Cookies.get('bibliotroca.userEmail')
      const { data: pendingTransactions } = await api.get<TransactionData[]>(
        `/transacoes/usuario/${email}/status/PENDING`,
      )

      const { data: myBooks } = await api.get(`/usuarios/${email}/livros`)

      const { data: wishlist } = await api.get<WishData[]>(`/desejos`)

      const { data: cancelledTransactions } = await api.get<TransactionData[]>(
        `/transacoes/usuario/${email}/status/CANCELLED`,
      )

      const { data: concludedTransactions } = await api.get<TransactionData[]>(
        `/transacoes/usuario/${email}/status/CONCLUDED`,
      )

      setPendingTransactionsSize(pendingTransactions.length)
      setMyBooksSize(myBooks.books.length)
      setWishlist(wishlist)
      setHistorySize(
        cancelledTransactions.length + concludedTransactions.length,
      )

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

  const quantityToRepeat = generateArrayWithId(4)

  return (
    <div>
      <Header className="h-[233px]">
        <Navigation
          name={name}
          src={picture}
          pendingTransactions={pendingTransactionsSize}
          myBooks={myBooksSize}
          wishList={wishlist?.length}
          history={historySize}
          isLoading={isLoading}
        />
      </Header>
      <main className="mt-28 px-6 pb-10 md:mt-32">
        <section className="mx-auto max-w-5xl">
          <div className="mb-5 flex items-center justify-between font-secondary text-title-xs text-gray-500 dark:text-white">
            <h1 className="flex items-baseline gap-1">
              Lista de desejos
              {!isLoading && wishlist?.length !== 0 && (
                <span className="font-primary text-sm-140 text-gray-400 dark:text-white">
                  | {wishlist?.length} livro(s)
                </span>
              )}
            </h1>
            <span>
              <Tooltip.Provider delayDuration={300}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <Button
                      componentType={Link}
                      href="/perfil/lista-desejos/novo-desejo"
                      className="p-2"
                    >
                      <Icon.Plus size={20} weight="bold" />
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <TooltipContent>Cadastrar Desejo</TooltipContent>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {isLoading &&
              quantityToRepeat.map((item) => (
                <Skeleton variant="card" size="content" key={item}>
                  <div className="grid grid-cols-2">
                    <div className="flex grid-cols-2 flex-col gap-6 md:grid md:items-center">
                      <div>
                        <Skeleton variant="line" className="mb-1 w-[125px]" />
                        <Skeleton variant="line" className="w-[90px]" />
                      </div>
                      <Skeleton
                        variant="line"
                        className="w-[80px] md:justify-self-center"
                      />
                    </div>
                    <div className="flex h-full flex-col justify-between justify-self-end md:w-3/4 md:flex-row-reverse md:items-center">
                      <div className="flex justify-end gap-2">
                        <Skeleton variant="line" size="buttonSm" />
                        <Skeleton variant="line" size="buttonSm" />
                      </div>
                      <Skeleton variant="line" className="w-[90px]" />
                    </div>
                  </div>
                </Skeleton>
              ))}
            {wishlist?.length === 0 && (
              <span className="mx-auto font-secondary text-title-base text-gray-400 dark:text-white">
                Sem livros cadastrados
              </span>
            )}
            {!isLoading &&
              wishlist?.map((wish) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  key={wish.id}
                >
                  <Card
                    type="content"
                    className="relative grid grid-cols-2 items-center justify-between gap-y-7"
                  >
                    <div className="flex grid-cols-2 flex-col gap-6 md:grid md:items-center">
                      <div>
                        <strong className="block w-full truncate text-base-140 text-gray-500 dark:text-white">
                          {wish.name}
                        </strong>
                        <p className="text-xs-140 text-gray-400 dark:text-white">
                          por {wish.author}
                        </p>
                      </div>
                      <span className="h-max w-max rounded-lg border-[1px] border-primary-500 px-2 py-1 text-xs text-primary-500 dark:border-white dark:text-white md:justify-self-center">
                        {wish.category}
                      </span>
                    </div>
                    <div className="flex h-full flex-col justify-between justify-self-end md:w-3/4 md:flex-row-reverse md:items-center">
                      <div className="flex items-center justify-end gap-2">
                        <Tooltip.Provider delayDuration={300}>
                          <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                              <Button
                                variant="cardEdit"
                                componentType={Link}
                                href={`/perfil/lista-desejos/${wish.id}/atualizar-desejo`}
                              >
                                <Icon.PencilSimple weight="bold" />
                              </Button>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <TooltipContent>Editar Desejo</TooltipContent>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>

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
                                  <TooltipContent>
                                    Excluir Desejo
                                  </TooltipContent>
                                </Tooltip.Portal>
                              </Tooltip.Root>
                            </Tooltip.Provider>
                          </Dialog.Trigger>

                          <Modal variant="deleteBook" />
                        </Dialog.Root>
                      </div>
                      <div className="flex items-center gap-1 justify-self-end text-sm-140 text-gray-500 dark:text-white">
                        <Icon.CalendarBlank size={10} />
                        <span>{new Date().toLocaleDateString()}</span>
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
