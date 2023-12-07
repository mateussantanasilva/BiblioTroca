'use client'

import { Card, status } from '@/components/Card'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import * as Icon from '@phosphor-icons/react'
import { Skeleton } from '@/components/Skeleton'
import { generateArrayWithId } from '@/utils/generate-array-with-id'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { TransactionData } from '@/@types/transactionData'
import { api } from '@/lib/axios'
import { WishData } from '@/@types/wishData'
import { formatDate } from '@/utils/format-date'
import { PointsData } from '@/@types/pointsData'

export default function PendingExchanges() {
  const [picture, setPicture] = useState<string | undefined>(undefined)
  const [name, setName] = useState<string | undefined>(undefined)

  const [isLoading, setIsLoading] = useState(true)

  const [pendingTransactions, setPendingTransactions] = useState<
    TransactionData[] | undefined
  >(undefined)
  const [myBooksSize, setMyBooksSize] = useState<number | undefined>(undefined)
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

      const { data: myBooks } = await api.get(`/usuarios/${email}/livros`)

      const { data: wishlist } = await api.get<WishData[]>(`/desejos`)

      const { data: cancelledTransactions } = await api.get<TransactionData[]>(
        `/transacoes/usuario/${email}/status/CANCELLED`,
      )

      const { data: concludedTransactions } = await api.get<TransactionData[]>(
        `/transacoes/usuario/${email}/status/CONCLUDED`,
      )

      const { data: points } = await api.get<PointsData>(`/pontos/${email}`)

      setPendingTransactions(pendingTransactions)
      setMyBooksSize(myBooks.books.length)
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

  // GERAÇÃO DA QUANTIDADE DE SKELETONS
  const quantityToRepeat = generateArrayWithId(4)

  return (
    <>
      <Header className="h-[233px]">
        <Navigation
          name={name}
          src={picture}
          pendingTransactions={pendingTransactions?.length}
          myBooks={myBooksSize}
          wishList={wishlistSize}
          history={historySize}
          points={points}
          isLoading={isLoading}
        />
      </Header>
      <main className="mt-28 px-6 pb-10 md:mt-32">
        <section className="mx-auto max-w-[73rem]">
          <h1 className="mb-5 flex items-baseline gap-1 font-secondary text-title-xs text-gray-500 dark:text-white">
            Trocas
            {!isLoading && pendingTransactions?.length !== 0 && (
              <span className="font-primary text-sm-140 text-gray-400 dark:text-white">
                | {pendingTransactions?.length} troca(s)
              </span>
            )}
          </h1>
          <div className="flex flex-col gap-4">
            {isLoading &&
              quantityToRepeat.map((item) => (
                <Skeleton
                  variant="card"
                  size="content"
                  className="gap-4"
                  key={item}
                >
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
            {pendingTransactions?.length === 0 && (
              <span className="mx-auto font-secondary text-title-base text-gray-400 dark:text-white">
                Sem transações pendentes
              </span>
            )}
            {!isLoading &&
              pendingTransactions?.map((pendingTransaction) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  key={pendingTransaction.id}
                >
                  <Card
                    className="grid grid-cols-2"
                    type="common"
                    componentType="a"
                    href={`/perfil/trocas-pendentes/troca/${pendingTransaction.id}`}
                  >
                    <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
                      <div>
                        <p className="block truncate text-base-140 text-gray-500 dark:text-yellow-500">
                          {pendingTransaction.bookDetails.name}
                        </p>
                        <span className="text-sm-140 text-gray-400 dark:text-yellow-500">
                          + 20 pontos
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-yellow-500 md:hidden">
                        <Icon.PaperPlaneTilt size={12} />
                        <span className="block truncate text-sm-140">
                          {`Enviando para ${pendingTransaction.buyer.name}`}
                        </span>
                      </div>
                      <div className="hidden items-center gap-1 justify-self-center md:flex">
                        <Icon.Circle
                          weight="fill"
                          size={12}
                          className={status({
                            color: pendingTransaction.status,
                          })}
                        />
                        <span className="text-sm-140 text-gray-500 dark:text-yellow-500">
                          {pendingTransaction.status
                            .substring(0, 1)
                            .toUpperCase()
                            .concat(
                              pendingTransaction.status
                                .substring(1)
                                .toLowerCase(),
                            )}
                        </span>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-end justify-between md:grid md:grid-cols-2 md:items-center">
                      <div className="hidden items-center justify-center gap-1 text-gray-500 dark:text-yellow-500 md:flex">
                        <Icon.PaperPlaneTilt size={12} />
                        <span className="block truncate text-xs-140 md:text-sm-140">
                          {`Enviando para ${pendingTransaction.buyer.name}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 justify-self-end text-gray-500 dark:text-yellow-500 md:hidden">
                        <Icon.Circle
                          weight="fill"
                          size={12}
                          className={status({
                            color: pendingTransaction.status,
                          })}
                        />
                        <span className="text-sm-140">
                          {pendingTransaction.status
                            .substring(0, 1)
                            .toUpperCase()
                            .concat(
                              pendingTransaction.status
                                .substring(1)
                                .toLowerCase(),
                            )}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-yellow-500 md:justify-self-end">
                        <Icon.CalendarBlank size={12} />
                        <span className="text-sm-140">
                          {formatDate(Date.parse(pendingTransaction.createdAt))}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </section>
      </main>
    </>
  )
}
