'use client'

import { Card, status } from '@/components/Card'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { formatDate } from '@/utils/format-date'
import {
  historySize,
  myBooksSize,
  pendingTransactionsSize,
  wishListSize,
} from '@/docs/navigationInfo'
import { useTransactions } from '@/hooks/useTransactions'

export default function TrocasPendentes() {
  const { query: transactionsQuery } = useTransactions()
  const { data: pendingTransactions, isLoading } = transactionsQuery

  return (
    <>
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
          <h1 className="mb-5 flex items-center gap-1 font-secondary text-title-xs text-gray-500 dark:text-white">
            Trocas
            <span className="font-primary text-sm-140 text-gray-400 dark:text-white">
              | {pendingTransactions?.length} troca(s)
            </span>
          </h1>
          <div className="flex flex-col gap-4">
            {pendingTransactions?.map((pendingTransaction) => (
              <Link
                key={pendingTransaction.bookDetails.id}
                href={`/perfil/trocas-pendentes/troca/${pendingTransaction.id}`}
              >
                <Card
                  type="common"
                  className="grid grid-cols-2 items-center justify-between gap-y-7 md:grid-cols-4"
                >
                  <div>
                    <strong className="text-base-140 text-gray-500 dark:text-yellow-500">
                      {pendingTransaction.bookDetails.name}
                    </strong>
                    <p className="text-xs-140 text-gray-400 dark:text-yellow-500">
                      {pendingTransaction.type === 'send' ? '+' : '-'}
                      20 pontos
                    </p>
                  </div>
                  <span className="flex items-center gap-1 justify-self-end text-sm-140 text-gray-500 dark:text-yellow-500 md:justify-self-center">
                    <Icon.Circle
                      weight="fill"
                      className={status({ color: pendingTransaction.status })}
                    />
                    {pendingTransaction.status}
                  </span>
                  <div className="flex items-center gap-1 text-sm-140 text-gray-500 dark:text-yellow-500 md:justify-self-center">
                    <Icon.PaperPlaneTilt size={10} />
                    <span>
                      {pendingTransaction.type === 'receive'
                        ? 'Recebendo de '
                        : 'Enviando para '}
                      {pendingTransaction.bookDetails.seller.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 justify-self-end text-sm-140 text-gray-500 dark:text-yellow-500">
                    <Icon.CalendarBlank size={10} />
                    <span>
                      {formatDate(Date.parse(pendingTransaction.createdAt))}
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
