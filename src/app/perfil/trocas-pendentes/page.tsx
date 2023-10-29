'use client'

import { Card, status } from '@/components/Card'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { formatDate } from '@/utils/format-date'
import { useTransactions } from '@/hooks/useTransactions'
import { Skeleton } from '@/components/Skeleton'
import { useBooks } from '@/hooks/useBooks'

export default function TrocasPendentes() {
  const { query: pendingTransactionsQuery } = useTransactions('Pendente')
  const {
    data: pendingTransactions,
    isLoading,
    isSuccess,
  } = pendingTransactionsQuery

  const { query: historyQuery } = useTransactions('Cancelado&Concluído')
  const { data: history } = historyQuery

  const { query: booksQuery } = useBooks()
  const { data: myBooks } = booksQuery

  return (
    <>
      <Header>
        <Navigation
          name="Ana Clara"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          pendingTransactions={pendingTransactions?.length}
          myBooks={myBooks?.length}
          wishList={0}
          history={history?.length}
        />
      </Header>
      <main className="mt-28 px-6 pb-10 md:mt-32">
        <section className="mx-auto max-w-5xl">
          <h1 className="mb-5 flex items-center gap-1 font-secondary text-title-xs text-gray-500 dark:text-white">
            Trocas
            <span className="font-primary text-sm-140 text-gray-400 dark:text-white">
              | {pendingTransactions?.length} troca(s)
            </span>
          </h1>
          <div className="flex flex-col gap-4">
            {isLoading && (
              <Skeleton variant="cardContent">
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
              </Skeleton>
            )}
            {isSuccess &&
              pendingTransactions?.map((pendingTransaction) => (
                <Link
                  key={pendingTransaction.bookDetails.id}
                  href={`/perfil/trocas-pendentes/troca/${pendingTransaction.id}`}
                >
                  <Card
                    componentType="article"
                    type="common"
                    className="flex flex-col justify-between gap-7 md:grid md:grid-cols-2"
                  >
                    <div className="flex justify-between md:grid md:grid-cols-2 md:items-center">
                      <div className="flex flex-col">
                        <p className="text-sm-140 text-gray-500 dark:text-yellow-500 md:text-base-140">
                          {pendingTransaction.bookDetails.name}
                        </p>
                        <span className="text-xs-140 text-gray-400 dark:text-yellow-500">
                          {pendingTransaction.type === 'send' ? '+' : '-'}20
                          pontos
                        </span>
                      </div>
                      <div className="mt-[2px] flex items-center gap-1 self-start md:mt-0 md:self-auto md:justify-self-center">
                        <Icon.Circle
                          weight="fill"
                          className={status({
                            color: pendingTransaction.status,
                          })}
                          size={10}
                        />
                        <span className="text-xs-140 text-gray-500 dark:text-yellow-500 md:text-sm-140">
                          {pendingTransaction.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between md:grid md:grid-cols-2">
                      <div className="flex items-center gap-1 md:justify-self-center">
                        <Icon.PaperPlaneTilt
                          size={10}
                          className="text-gray-500 dark:text-yellow-500"
                        />
                        <span className="text-xs-140 text-gray-500 dark:text-yellow-500 md:text-sm-140">
                          {pendingTransaction.type === 'send'
                            ? `Enviado para ${pendingTransaction.buyer.firstName}`
                            : `Recebendo de ${pendingTransaction.bookDetails.seller.name}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 md:justify-self-end">
                        <Icon.CalendarBlank
                          size={10}
                          className="text-gray-500 dark:text-yellow-500"
                        />
                        <span className="text-xs-140 text-gray-500 dark:text-yellow-500 md:text-sm-140">
                          {formatDate(Date.parse(pendingTransaction.createdAt))}
                        </span>
                      </div>
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
