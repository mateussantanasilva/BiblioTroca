'use client'

import { Card, status } from '@/components/Card'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { Transaction, transactionsDefault } from '@/model/transaction'
import { useEffect, useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { formatDate } from '@/utils/format-date'

export default function TrocasPendentes() {
  const [pendingTransactions, setPendingTransactions] = useState<Transaction[]>(
    [],
  )
  const [transactionsLength, setTransactionsLenght] = useState(0)

  useEffect(() => {
    setPendingTransactions(
      transactionsDefault.filter((transaction) => {
        return transaction.status === 'Pendente'
      }),
    )

    transactionsDefault.forEach((transaction) => {
      if (transaction.status === 'Pendente')
        setTransactionsLenght((prev) => prev + 1)
    })
  }, [])

  return (
    <>
      <Header>
        <Navigation
          name="Ana Clara"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          amountExchanges={pendingTransactions.length}
          amountBooks={0}
          wishlist={0}
          history={transactionsLength}
        />
      </Header>
      <main className="px-6 pb-10 mt-28 md:mt-32">
        <section className="max-w-5xl mx-auto">
          <h1 className="font-secondary flex gap-1 items-center text-gray-500 text-title-xs mb-5">
            Trocas
            <span className="font-primary text-sm-140 text-gray-400">
              | {pendingTransactions.length} troca(s)
            </span>
          </h1>
          <div className="flex flex-col gap-4">
            {pendingTransactions.map((pendingTransaction) => (
              <Link
                key={pendingTransaction.book.id}
                href={`/perfil/troca/${pendingTransaction.id}`}
              >
                <Card
                  type="common"
                  className="grid grid-cols-2 justify-between gap-y-7 items-center md:grid-cols-4"
                >
                  <div>
                    <strong className="text-base-140 text-gray-500">
                      {pendingTransaction.book.title}
                    </strong>
                    <p className="text-xs-140 text-gray-400">
                      {pendingTransaction.type === 'send' ? '+' : '-'}
                      20 pontos
                    </p>
                  </div>
                  <span className="flex gap-1 items-center text-gray-500 text-sm-140 justify-self-end md:justify-self-center">
                    <Icon.Circle
                      weight="fill"
                      className={status({ color: pendingTransaction.status })}
                    />
                    {pendingTransaction.status}
                  </span>
                  <div className="flex gap-1 items-center text-gray-500 text-sm-140 md:justify-self-center">
                    <Icon.PaperPlaneTilt size={10} />
                    <span>
                      {pendingTransaction.type === 'receive'
                        ? 'Recebendo de'
                        : 'Enviando para'}{' '}
                      {pendingTransaction.sellerCustomer.name}
                    </span>
                  </div>
                  <div className="flex gap-1 items-center text-gray-500 text-sm-140 justify-self-end">
                    <Icon.CalendarBlank size={10} />
                    <span>{formatDate(pendingTransaction.startDate)}</span>
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
