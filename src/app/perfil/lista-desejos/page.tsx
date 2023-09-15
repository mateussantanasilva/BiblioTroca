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
                <div className="flex flex-col gap-6">
                  <div>
                    <strong className="text-base-140 text-gray-500">
                      {wish.title}
                    </strong>
                    <p className="text-xs-140 text-gray-400">
                      por {wish.author}
                    </p>
                  </div>
                  <span className="border-[1px] border-primary-500 text-xs w-max py-1 px-2 text-primary-500 rounded-lg">
                    {wish.studyArea}
                  </span>
                </div>
                <div className="flex flex-col justify-between justify-self-end h-full">
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
