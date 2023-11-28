'use client'

import { Card, status } from '@/components/Card'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { formatDate } from '@/utils/format-date'
import { useTransactions } from '@/hooks/useTransactions'
import { useMyBooks } from '@/hooks/useMyBooks'
import { useMyWishlist } from '@/hooks/useMyWishlist'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@/components/Skeleton'
import { generateArrayWithId } from '@/utils/generate-array-with-id'

export default function History() {
  const {
    query: { data: pendingTransactions },
  } = useTransactions('Pendente')

  const {
    query: { data: myBooks },
  } = useMyBooks()

  const {
    query: { data: myWishlist },
  } = useMyWishlist()

  const {
    query: { data: transactions, isLoading, isError, isSuccess },
  } = useTransactions('Cancelado&Concluído')

  const router = useRouter()
  isError && router.push('/perfil/historico')

  const quantityToRepeat = generateArrayWithId(4)

  return (
    <>
      <Header className="h-[233px]">
        <Navigation
          name="Ana Clara"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          pendingTransactions={pendingTransactions?.length}
          myBooks={myBooks?.length}
          wishList={myWishlist?.length}
          history={transactions?.length}
          isLoading={isLoading}
        />
      </Header>
      <main className="mt-28 px-6 pb-10 md:mt-32">
        <section className="mx-auto max-w-5xl">
          <h1 className="mb-5 flex items-center gap-1 font-secondary text-title-xs text-gray-500 dark:text-white">
            Histórico
            {isSuccess && transactions?.length !== 0 && (
              <span className="font-primary text-sm-140 text-gray-400 dark:text-white">
                | {transactions?.length} troca(s)
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
            {transactions?.length === 0 && (
              <span className="mx-auto font-secondary text-title-base text-gray-400 dark:text-white">
                Sem trocas realizadas
              </span>
            )}
            {isSuccess &&
              transactions?.map((transaction) => (
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
                          ? `Recebendo de ${transaction.bookDetails.seller.firstName}`
                          : `Enviando para ${transaction.buyer.firstName}`}
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
