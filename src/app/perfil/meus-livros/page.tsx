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
import { useMyBooks } from '@/hooks/useMyBooks'
import { useTransactions } from '@/hooks/useTransactions'
import { Skeleton } from '@/components/Skeleton'
import { generateArrayWithId } from '@/utils/generate-array-with-id'
import { useMyWishlist } from '@/hooks/useMyWishlist'
import { motion } from 'framer-motion'

export default function MyBooks() {
  const {
    query: { data: pendingTransactions },
  } = useTransactions('Pendente')

  const {
    query: { data: history },
  } = useTransactions('Cancelado&Concluído')

  const {
    query: { data: myWishlist },
  } = useMyWishlist()

  const {
    query: { data: myBooks, isLoading, isSuccess },
  } = useMyBooks()

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
          name="Ana Clara"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          pendingTransactions={pendingTransactions?.length}
          myBooks={myBooks?.length}
          wishList={myWishlist?.length}
          history={history?.length}
          isLoading={isLoading}
        />
      </Header>
      <main className="mt-28 px-6 pb-10 md:mt-32">
        <section className="mx-auto max-w-5xl">
          <div className="mb-5 flex items-center justify-between font-secondary text-title-xs text-gray-500 dark:text-white">
            <h1 className="flex items-baseline gap-1">
              Meus Livros
              {isSuccess && myBooks?.length !== 0 && (
                <span className="font-primary text-sm-140 text-gray-400 dark:text-white">
                  | {myBooks?.length} livro(s)
                </span>
              )}
            </h1>
            <span>
              <Tooltip.Provider delayDuration={300}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <Button
                      componentType="a"
                      href="/perfil/meus-livros/cadastrar-livro"
                      className="p-2"
                    >
                      <Icon.Plus size={20} weight="bold" />
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <TooltipContent>Cadastrar Livro</TooltipContent>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
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
            {isSuccess &&
              myBooks?.map((book) => (
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
                      <Tooltip.Provider delayDuration={300}>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <Link href={`/perfil/meus-livros/${book.id}`}>
                              <strong className="block truncate text-base-140 text-gray-500 dark:text-yellow-500">
                                {book.name}
                              </strong>
                              <p className="block truncate text-xs-140 text-gray-400 dark:text-yellow-500">
                                por {book.author}
                              </p>
                            </Link>
                          </Tooltip.Trigger>
                          <TooltipContent>Visualizar Livro</TooltipContent>
                        </Tooltip.Root>
                      </Tooltip.Provider>
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
                        <Tooltip.Provider delayDuration={300}>
                          <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                              <Button
                                variant="cardEdit"
                                componentType="a"
                                href={`/perfil/meus-livros/${book.id}/atualizar-livro`}
                              >
                                <Icon.PencilSimple weight="bold" />
                              </Button>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <TooltipContent>Editar Livro</TooltipContent>
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
                                  <TooltipContent>Excluir Livro</TooltipContent>
                                </Tooltip.Portal>
                              </Tooltip.Root>
                            </Tooltip.Provider>
                          </Dialog.Trigger>

                          <Modal variant="deleteBook" />
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
