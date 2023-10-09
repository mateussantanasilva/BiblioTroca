'use client'

import { Card, status } from '@/components/Card'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { Transaction, transactionsDefault } from '@/model/transaction'
import { useEffect, useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { formatDate } from '@/utils/format-date'
import {
  historySize,
  myBooksSize,
  pendingTransactionsSize,
  wishListSize,
} from '@/docs/navigationInfo'

export default function Historico() {
  const [exchanges, setExchanges] = useState<Transaction[]>([])

  useEffect(() => {
    setExchanges(
      transactionsDefault.filter((transaction) => {
        return transaction.status !== 'Pendente'
      }),
    )
  }, [])

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
            Historico
            <span className="font-primary text-sm-140 text-gray-400 dark:text-white">
              | {exchanges.length} troca(s)
            </span>
          </h1>
          <div className="flex flex-col gap-4">
            {exchanges.map((exchange) => (
              <Link
                key={exchange.book.id}
                href={`/perfil/historico/troca/${exchange.id}`}
              >
                <Card
                  type="common"
                  className="grid grid-cols-2 items-center justify-between gap-y-7 md:grid-cols-4"
                >
                  <div>
                    <strong className="text-base-140 text-gray-500 dark:text-yellow-500">
                      {exchange.book.title}
                    </strong>
                    <p className="text-xs-140 text-gray-400 dark:text-yellow-500">
                      {exchange.type === 'send' ? '+' : '-'}
                      20 pontos
                    </p>
                  </div>
                  <span className="flex items-center gap-1 justify-self-end text-sm-140 text-gray-500 dark:text-yellow-500 md:justify-self-center">
                    <Icon.Circle
                      weight="fill"
                      className={status({ color: exchange.status })}
                    />
                    {exchange.status}
                  </span>
                  <div className="flex items-center gap-1 text-sm-140 text-gray-500 dark:text-yellow-500 md:justify-self-center">
                    <Icon.PaperPlaneTilt size={10} />
                    <span>
                      {exchange.type === 'receive'
                        ? 'Recebendo de '
                        : 'Enviando para '}
                      {exchange.sellerCustomer.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 justify-self-end text-sm-140 text-gray-500 dark:text-yellow-500">
                    <Icon.CalendarBlank size={10} />
                    <span>{formatDate(exchange.startDate)}</span>
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
