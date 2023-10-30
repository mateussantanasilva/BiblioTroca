'use client'

import { Card, status } from '@/components/Card'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import * as Icon from '@phosphor-icons/react'
import { formatDate } from '@/utils/format-date'
import { useTransactions } from '@/hooks/useTransactions'
import { Skeleton } from '@/components/Skeleton'
import { generateArrayWithId } from '@/utils/generate-array-with-id'
import { useMyBooks } from '@/hooks/useMyBooks'
import { useMyWishlist } from '@/hooks/useMyWishlist'

export default function TrocasPendentes() {
  const {
    query: { data: history },
  } = useTransactions('Cancelado&Concluído')

  const {
    query: { data: myBooks },
  } = useMyBooks()

  const {
    query: { data: myWishlist },
  } = useMyWishlist()

  const {
    query: { data: pendingTransactions, isLoading, isSuccess },
  } = useTransactions('Pendente')

  const quantityToRepeat = generateArrayWithId(4)

  return (
    <>
      <Header>
        <Navigation
          name="Ana Clara"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          pendingTransactions={pendingTransactions?.length}
          myBooks={myBooks?.length}
          wishList={myWishlist?.length}
          history={history?.length}
          isLoading={isLoading}
        />
      </Header>
      <main className="mt-28 px-6 pb-10 md:mt-32">
        <section className="mx-auto max-w-5xl">
          <h1 className="mb-5 flex items-center gap-1 font-secondary text-title-xs text-gray-500 dark:text-white">
            Trocas
            {isSuccess && pendingTransactions?.length !== 0 && (
              <span className="font-primary text-sm-140 text-gray-400 dark:text-white">
                | {pendingTransactions?.length} troca(s)
              </span>
            )}
          </h1>
          <div className="flex flex-col gap-4">
            {isLoading &&
              quantityToRepeat.map((item) => (
                <Skeleton variant="cardContent" className="gap-4" key={item}>
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
              <span className="mx-auto font-secondary text-title-base text-gray-400">
                Sem transações pendentes
              </span>
            )}
            {isSuccess &&
              pendingTransactions?.map((pendingTransaction) => (
                <Card
                  key={pendingTransaction.id}
                  className="grid grid-cols-2"
                  type="common"
                  componentType="a"
                  href={`/perfil/trocas-pendentes/troca/${pendingTransaction.id}`}
                >
                  <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0">
                    <div>
                      <p className="block truncate text-sm-140 text-gray-500 md:text-base-140">
                        {pendingTransaction.bookDetails.name}
                      </p>
                      <span className="text-xs-140 text-gray-400 md:text-sm-140">
                        {pendingTransaction.type === 'send' ? '-' : '+'}20
                        pontos
                      </span>
                    </div>
                    <div className="flex items-center gap-1 md:hidden">
                      <Icon.PaperPlaneTilt size={12} />
                      <span className="block truncate text-xs-140 text-gray-500 md:text-sm-140">
                        {pendingTransaction.type === 'send'
                          ? `Enviando para ${pendingTransaction.buyer.firstName}`
                          : `Recebendo de ${pendingTransaction.bookDetails.seller.name}`}
                      </span>
                    </div>
                    <div className="hidden items-center gap-1 justify-self-center md:flex">
                      <Icon.Circle
                        weight="fill"
                        size={12}
                        className={status({ color: pendingTransaction.status })}
                      />
                      <span className="text-xs-140 text-gray-500 md:text-sm-140">
                        {pendingTransaction.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-end justify-between md:grid md:grid-cols-2 md:items-center">
                    <div className="hidden items-center gap-1 md:flex">
                      <Icon.PaperPlaneTilt size={12} />
                      <span className="block truncate text-xs-140 text-gray-500 md:text-sm-140">
                        {pendingTransaction.type === 'send'
                          ? `Enviando para ${pendingTransaction.buyer.firstName}`
                          : `Recebendo de ${pendingTransaction.bookDetails.seller.name}`}
                      </span>
                    </div>
                    <div className="ml-auto flex items-center gap-1 md:hidden">
                      <Icon.Circle
                        weight="fill"
                        size={12}
                        className={status({ color: pendingTransaction.status })}
                      />
                      <span className="text-xs-140 text-gray-500 md:text-sm-140">
                        {pendingTransaction.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 md:justify-self-end">
                      <Icon.CalendarBlank size={12} className="text-gray-500" />
                      <span className="text-xs-140 text-gray-500 md:text-sm-140">
                        {formatDate(Date.parse(pendingTransaction.createdAt))}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>
      </main>
    </>
  )
}
