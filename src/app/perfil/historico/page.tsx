'use client'

import { Card, status } from '@/components/Card'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { formatDate } from '@/utils/format-date'
import { Skeleton } from '@/components/Skeleton'
import { generateArrayWithId } from '@/utils/generate-array-with-id'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { api } from '@/lib/axios'
import { TransactionData } from '@/@types/transactionData'

export default function History() {
  const [picture, setPicture] = useState<string | undefined>(undefined)
  const [name, setName] = useState<string | undefined>(undefined)

  const [isLoading, setIsLoading] = useState(true)

  const [pendingTransactionsSize, setPendingTransactionsSize] = useState<
    number | undefined
  >(undefined)
  const [myBooksSize, setMyBooksSize] = useState<number | undefined>(undefined)
  const [wishlistSize, setWishlistSize] = useState<number | undefined>(
    undefined,
  )
  const history: TransactionData[] = []

  useEffect(() => {
    ;(async () => {
      const email = Cookies.get('bibliotroca.userEmail')
      const { data: pendingTransactions } = await api.get<TransactionData[]>(
        `/transacoes/usuario/${email}/status/PENDING`,
      )

      const { data: myBooks } = await api.get(`/usuarios/${email}/livros`)

      const { data: wishlist } = await api.get(`/desejos`)

      const { data: cancelledTransactions } = await api.get<TransactionData[]>(
        `/transacoes/usuario/${email}/status/CANCELLED`,
      )

      const { data: concludedTransactions } = await api.get<TransactionData[]>(
        `/transacoes/usuario/${email}/status/CONCLUDED`,
      )

      setPendingTransactionsSize(pendingTransactions.length)
      setMyBooksSize(myBooks.books.length)
      setWishlistSize(wishlist)

      cancelledTransactions.forEach((transaction) => {
        history.push(transaction)
      })

      concludedTransactions.forEach((transaction) => {
        history.push(transaction)
      })

      setPicture(Cookies.get('bibliotroca.userPicture'))
      setName(Cookies.get('bibliotroca.userName'))

      setIsLoading(false)
    })()
  }, [])

  const quantityToRepeat = generateArrayWithId(4)

  return (
    <>
      <Header className="h-[233px]">
        <Navigation
          name={name}
          src={picture}
          pendingTransactions={pendingTransactionsSize}
          myBooks={myBooksSize}
          wishList={wishlistSize}
          history={history?.length}
          isLoading={isLoading}
        />
      </Header>
      <main className="mt-28 px-6 pb-10 md:mt-32">
        <section className="mx-auto max-w-5xl">
          <h1 className="mb-5 flex items-center gap-1 font-secondary text-title-xs text-gray-500 dark:text-white">
            Histórico
            {!isLoading && history?.length !== 0 && (
              <span className="font-primary text-sm-140 text-gray-400 dark:text-white">
                | {history?.length} troca(s)
              </span>
            )}
          </h1>
          <div className="flex flex-col gap-4">
            {isLoading &&
              quantityToRepeat.map((item) => (
                <Skeleton variant="card" size="content" key={item}>
                  <div className="flex flex-col gap-7 md:grid md:grid-cols-2">
                    <div className="flex justify-between md:grid md:grid-cols-2 md:items-center">
                      <div className="flex flex-col gap-1">
                        <Skeleton
                          variant="line"
                          className="w-[156px] md:w-[181px]"
                        />
                        <Skeleton variant="line" className="h-4 w-[67px]" />
                      </div>
                      <Skeleton
                        variant="line"
                        className="w-[68px] md:w-[77px] md:justify-self-center"
                      />
                    </div>
                    <div className="flex justify-between md:grid md:grid-cols-2 md:items-center">
                      <Skeleton
                        variant="line"
                        className="w-[132px] md:w-[152px] md:justify-self-center"
                      />
                      <Skeleton
                        variant="line"
                        className="w-[80px] md:w-[91px] md:justify-self-end"
                      />
                    </div>
                  </div>
                </Skeleton>
              ))}
            {history?.length === 0 && (
              <span className="mx-auto font-secondary text-title-base text-gray-400 dark:text-white">
                Sem trocas realizadas
              </span>
            )}
            {!isLoading &&
              history?.map((transaction) => (
                <Link
                  key={transaction.bookDetails.id}
                  href={`/perfil/historico/troca/${transaction.id}`}
                >
                  <Card
                    type="common"
                    className="grid grid-cols-2 items-center justify-between gap-y-7 md:grid-cols-4"
                  >
                    <div>
                      <strong className="block truncate text-base-140 text-gray-500 dark:text-yellow-500">
                        {transaction.bookDetails.name}
                      </strong>
                      <p className="text-xs-140 text-gray-400 dark:text-yellow-500">
                        {transaction.type === 'send' ? '+' : '-'}
                        20 pontos
                      </p>
                    </div>
                    <span className="flex items-center gap-1 justify-self-end text-sm-140 text-gray-500 dark:text-yellow-500 md:justify-self-center">
                      <Icon.Circle
                        weight="fill"
                        className={status({ color: transaction.status })}
                      />
                      {transaction.status}
                    </span>
                    <div className="flex items-center gap-1 text-sm-140 text-gray-500 dark:text-yellow-500 md:justify-self-center">
                      <Icon.PaperPlaneTilt size={10} />
                      <span className="block truncate">
                        {transaction.type === 'receive'
                          ? `Recebendo de ${transaction.bookDetails.user.name}`
                          : `Enviando para ${transaction.buyer.surname}`}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 justify-self-end text-sm-140 text-gray-500 dark:text-yellow-500">
                      <Icon.CalendarBlank size={10} />
                      <span>
                        {formatDate(Date.parse(transaction.createdAt))}
                      </span>
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
