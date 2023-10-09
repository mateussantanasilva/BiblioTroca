'use client'

import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { useEffect, useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import { formatDate } from '@/utils/format-date'
import { Button } from '@/components/Button'
import {
  historySize,
  myBooksSize,
  pendingTransactionsSize,
  wishListSize,
} from '@/docs/navigationInfo'
import { Wishlist, wishlistDefault } from '@/model/wishlist'
import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from '@/components/Modal'
import * as Tooltip from '@radix-ui/react-tooltip'
import { TooltipContent } from '@/components/TooltipContent'
import { ModalContext } from '@/contexts/ModalContext'
import { useContextSelector } from 'use-context-selector'

export default function MeusLivros() {
  const [myWishlist, setMyWishlist] = useState<Wishlist[]>([])

  useEffect(() => {
    setMyWishlist(wishlistDefault)
  }, [])

  const { modalIsOpen, changeModalVisibility } = useContextSelector(
    ModalContext,
    (context) => {
      return {
        ...context,
      }
    },
  )

  return (
    <div>
      <Header>
        <Navigation
          name="Ana Clara"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          pendingExchanges={pendingTransactionsSize}
          amountBooks={myBooksSize}
          wishlist={wishListSize}
          history={historySize}
        />
      </Header>
      <main className="mt-28 px-6 pb-10 md:mt-32">
        <section className="mx-auto max-w-5xl">
          <h1 className="mb-5 flex items-center justify-between font-secondary text-title-xs text-gray-500">
            <div className="flex items-center gap-1">
              Lista de desejos
              <span className="font-primary text-sm-140 text-gray-400">
                | {myWishlist.length} livro(s)
              </span>
            </div>
            <span>
              <Button
                componentType="a"
                href="/perfil/lista-desejos/novo-desejo"
                className="p-2"
              >
                <Icon.Plus fill="#fff" size={20} weight="bold" />
              </Button>
            </span>
          </h1>
          <div className="flex flex-col gap-4">
            {myWishlist.map((wish) => (
              <Card
                type="content"
                className="grid grid-cols-2 items-center justify-between gap-y-7"
                key={wish.id}
              >
                <div className="flex grid-cols-2 flex-col gap-6 md:grid md:items-center">
                  <div>
                    <strong className="text-base-140 text-gray-500">
                      {wish.title}
                    </strong>
                    <p className="text-xs-140 text-gray-400">
                      por {wish.author}
                    </p>
                  </div>
                  <span className="h-max w-max rounded-lg border-[1px] border-primary-500 px-2 py-1 text-xs text-primary-500 md:justify-self-center">
                    {wish.studyArea}
                  </span>
                </div>
                <div className="flex h-full flex-col justify-between justify-self-end md:w-3/4 md:flex-row-reverse md:items-center">
                  <div className="flex items-center justify-end gap-2">
                    <Tooltip.Provider delayDuration={300}>
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <Button
                            variant="cardEdit"
                            componentType="a"
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
                              <TooltipContent>Excluir Desejo</TooltipContent>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                      </Dialog.Trigger>

                      <Modal variant="deleteBook" />
                    </Dialog.Root>
                  </div>
                  <div className="flex items-center gap-1 justify-self-end text-sm-140 text-gray-500">
                    <Icon.CalendarBlank size={10} />
                    <span>{formatDate(wish.createdAt)}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
