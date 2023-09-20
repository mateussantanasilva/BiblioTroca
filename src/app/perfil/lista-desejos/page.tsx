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
import { Dropdown } from '@/components/Dropdown'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

export default function MeusLivros() {
  const [myWishlist, setMyWishlist] = useState<Wishlist[]>([])

  useEffect(() => {
    setMyWishlist(wishlistDefault)
  }, [])

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
      <main className="px-6 pb-10 mt-28 md:mt-32">
        <section className="max-w-5xl mx-auto">
          <h1 className="font-secondary flex justify-between items-center text-gray-500 text-title-xs mb-5">
            <div className="flex gap-1 items-center">
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
                className="grid grid-cols-2 justify-between gap-y-7 items-center"
                key={wish.id}
              >
                <div className="flex flex-col gap-6 md:grid grid-cols-2 md:items-center">
                  <div>
                    <strong className="text-base-140 text-gray-500">
                      {wish.title}
                    </strong>
                    <p className="text-xs-140 text-gray-400">
                      por {wish.author}
                    </p>
                  </div>
                  <span className="border-[1px] h-max border-primary-500 text-xs w-max py-1 px-2 text-primary-500 rounded-lg md:justify-self-center">
                    {wish.studyArea}
                  </span>
                </div>
                <div className="flex flex-col justify-between justify-self-end h-full md:flex-row-reverse md:w-3/4 md:items-center">
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button className="p-1 w-max self-end border-2 border-primary-500 rounded-lg md:self-center">
                        <Icon.SlidersHorizontal
                          size={20}
                          weight="bold"
                          className="text-primary-500"
                        />
                      </button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                      <Dropdown.Content>
                        <Dropdown.Item>
                          <Link
                            href={`/perfil/lista-desejos/${wish.id}/atualizar-desejo`}
                            className="flex items-center justify-between px-3 w-full h-full"
                          >
                            <span>Editar item</span>
                            <Icon.PencilSimple size={18} />
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Separator />
                        <Dropdown.Item>
                          <button className="flex items-center justify-between px-3 w-full h-full">
                            <span className="text-red-500">Deletar item</span>
                            <Icon.TrashSimple
                              size={18}
                              className="text-red-500"
                            />
                          </button>
                        </Dropdown.Item>
                      </Dropdown.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                  <div className="flex gap-1 items-center text-gray-500 text-sm-140 justify-self-end">
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
