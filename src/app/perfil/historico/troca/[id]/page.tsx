'use client'

import { Card, status } from '@/components/Card'
import { Header } from '@/components/Header'
import { Skeleton } from '@/components/Skeleton'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { useSingleTransaction } from '@/hooks/useSingleTransaction'
import { useRouter } from 'next/navigation'
import { formatDate } from '@/utils/format-date'
import { ModalContext } from '@/contexts/ModalContext'
import { useContextSelector } from 'use-context-selector'
import { Modal } from '@/components/Modal'
import * as Dialog from '@radix-ui/react-dialog'

type PagePropos = {
  params: {
    id: string
  }
}

export default function ExchangeHistory({ params }: PagePropos) {
  const {
    data: transaction,
    isLoading,
    isSuccess,
    isError,
  } = useSingleTransaction(params.id)

  const router = useRouter()
  isError && router.push('perfil/historico')

  transaction?.status === 'Pendente' && router.push('perfil/historico')

  const { modalIsOpen, changeModalVisibility } = useContextSelector(
    ModalContext,
    (context) => {
      return {
        ...context,
      }
    },
  )

  return (
    <>
      <Header className="pt-16 text-center">
        <Link
          href="/perfil/historico"
          className="absolute left-6 top-10 min-[768px]:hidden"
        >
          <Icon.ArrowLeft
            className="transition-transform duration-300 hover:scale-110 dark:text-yellow-500"
            size={24}
            weight="bold"
          />
        </Link>
        <h1 className="font-primary text-sm-160">Trocas</h1>
        <h2 className="font-secondary text-title-base">
          Detalhes da <br /> Troca
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="mx-auto -mt-12 max-w-5xl">
          {isLoading && (
            <>
              <Skeleton
                variant="card"
                size="content"
                className="mb-4 flex flex-col justify-between gap-2 md:h-[4.0625rem] md:flex-row md:items-center"
              >
                <div className="mb-1 flex justify-between md:hidden">
                  <Skeleton variant="line" className="w-[160px]" />
                  <Skeleton variant="line" className="w-[70px]" />
                </div>
                <Skeleton
                  variant="line"
                  className="hidden w-[200px] md:block"
                />
                <Skeleton variant="line" className="hidden w-[75px] md:block" />
                <Skeleton variant="line" className="w-[80px]" />
                <Skeleton variant="line" className="w-[140px]" />
              </Skeleton>
              <Skeleton variant="card" size="content" className="mb-4">
                <Skeleton variant="line" className="mb-3 w-[180px]" />
                <Skeleton variant="line" className="mb-4 w-[70px]" />
                <Skeleton variant="line" className="mb-5 w-[220px]" />
                <Skeleton
                  variant="line"
                  className="w-[170px] gap-1"
                  quantity={2}
                />
              </Skeleton>
              <Skeleton variant="card" size="content">
                <Skeleton variant="line" className="mb-3 w-[200px]" />
                <div className="mb-6 grid grid-cols-2">
                  <div>
                    <Skeleton variant="line" className="mb-1 w-[60px]" />
                    <Skeleton variant="line" className="w-[80px]" />
                  </div>
                  <div>
                    <Skeleton variant="line" className="mb-1 w-[60px]" />
                    <Skeleton variant="line" className="w-[80px]" />
                  </div>
                </div>
                <div className="mb-6 grid grid-cols-2">
                  <div>
                    <Skeleton variant="line" className="mb-1 w-[60px]" />
                    <Skeleton variant="line" className="w-[80px]" />
                  </div>
                  <div>
                    <Skeleton variant="line" className="mb-1 w-[60px]" />
                    <Skeleton variant="line" className="w-[80px]" />
                  </div>
                </div>
                <div className="mb-6">
                  <Skeleton variant="line" className="mb-1 w-[60px]" />
                  <Skeleton variant="line" className="w-[80px]" />
                </div>
                <Skeleton variant="line" className="mb-1 w-[80px]" />
                <Skeleton variant="line" className="mb-1 !gap-1" quantity={4} />
              </Skeleton>
            </>
          )}
          {isSuccess && (
            <>
              <Card
                type="content"
                className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex justify-between md:hidden">
                  <strong className="block truncate font-secondary text-title-xs md:text-title-sm">
                    {transaction?.bookDetails.name}
                  </strong>
                  <span className="flex w-max items-center gap-1 text-xs min-[375px]:text-sm-140">
                    <Icon.Circle
                      weight="fill"
                      className={status({ color: transaction?.status })}
                    />
                    {transaction?.status}
                  </span>
                </div>
                <strong className="hidden w-max font-secondary text-title-xs md:block md:text-title-sm">
                  {transaction?.bookDetails.name}
                </strong>
                <span className="hidden w-max items-center gap-1 text-xs min-[375px]:text-sm-140 md:flex md:justify-self-end">
                  <Icon.Circle
                    weight="fill"
                    className={status({ color: transaction?.status })}
                  />
                  {transaction?.status}
                </span>
                <p className="font-primary text-sm-140">
                  {transaction?.type === 'send' ? '+' : '-'} 20 pontos
                </p>
                <div className="flex items-center gap-1 text-sm-140">
                  <Icon.CalendarBlank className="h-3 w-3 md:h-4 md:w-4" />
                  Solicitada há x dias
                </div>
              </Card>
              <Card
                type="content"
                className="mb-4 flex flex-col justify-center lg:w-full"
              >
                <p className="mb-3 text-base-140-md">
                  {transaction?.type === 'send'
                    ? `Enviado para ${transaction?.buyer.firstName}`
                    : `Recebido de ${transaction?.bookDetails.seller.name}`}
                </p>
                <p className="mb-4 flex items-center gap-1">
                  <Icon.Star
                    size={12}
                    className="text-orange-500"
                    weight="fill"
                  />
                  {transaction?.type === 'send'
                    ? transaction?.buyer.averageRating.toFixed(1)
                    : transaction?.bookDetails.seller.averageRating.toFixed(1)}
                  <span className="text-sm-140 text-gray-400">
                    {transaction?.type === 'send'
                      ? transaction?.buyer.avaliationsNumber
                      : transaction?.bookDetails.seller.avaliationsNumber}
                  </span>
                </p>
                <Dialog.Root
                  onOpenChange={changeModalVisibility}
                  open={modalIsOpen}
                >
                  <Dialog.Trigger>
                    <p className="mb-4 flex cursor-pointer items-center gap-1">
                      <span>Avalia a experiência da troca</span>
                      <Icon.ArrowRight size={14} />
                    </p>
                  </Dialog.Trigger>

                  <Modal variant="evaluate" />
                </Dialog.Root>
                <p>
                  Solicitada em {formatDate(Date.parse(transaction?.createdAt))}
                </p>
                <p>
                  Entregue em {formatDate(Date.parse(transaction?.endedAt))}
                </p>
              </Card>
              <Card type="content">
                <p className="mb-3 text-base-140-md">
                  Escrito por {transaction?.bookDetails.author}
                </p>
                <div className="mb-6">
                  <div>
                    <p className="mb-1 text-base-140-md">Categoria</p>
                    <span className="rounded-lg border-[1px] border-primary-500 px-2 py-1 text-xs-140 text-primary-500 dark:border-white dark:text-white">
                      {transaction?.bookDetails.category}
                    </span>
                  </div>
                </div>
                <div className="mb-6 grid grid-cols-2">
                  <div>
                    <p className="text-base-140-md">Idioma</p>
                    <p>{transaction?.bookDetails.language}</p>
                  </div>
                  <div>
                    <p className="text-base-140-md">Ano</p>
                    <p>{transaction?.bookDetails.year}</p>
                  </div>
                </div>
                <div className="mb-6 grid grid-cols-2">
                  <div>
                    <p className="text-base-140-md">Editora</p>
                    <p>{transaction?.bookDetails.publishingCompany}</p>
                  </div>
                  <div>
                    <p className="text-base-140-md">Condição do livro</p>
                    <p>{transaction?.bookDetails.state}</p>
                  </div>
                </div>
                <p className="text-base-140-md">Descrição</p>
                <p>{transaction?.bookDetails.description}</p>
              </Card>
            </>
          )}
        </section>
      </main>
    </>
  )
}
