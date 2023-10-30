'use client'

import { Button } from '@/components/Button'
import { Card, status } from '@/components/Card'
import { Header } from '@/components/Header'
import { InputRadio } from '@/components/InputRadio'
import { Root } from '@radix-ui/react-radio-group'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { useSingleTransaction } from '@/hooks/useSingleTransaction'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@/components/Skeleton'
import { formatDate } from '@/utils/format-date'

type PagePropos = {
  params: {
    id: string
  }
}

export default function PendingExchange({ params }: PagePropos) {
  const {
    data: transaction,
    isLoading,
    isSuccess,
    isError,
  } = useSingleTransaction(params.id)

  const router = useRouter()
  isError && router.push('/perfil/trocas-pendentes')

  isSuccess &&
    transaction?.status !== 'Pendente' &&
    router.push('/perfil/trocas-pendentes')

  return (
    <>
      <Header className="pt-16 text-center">
        <Link
          href="/perfil/trocas-pendentes"
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
          Detalhes da Troca em <br /> Andamento
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="mx-auto -mt-12 max-w-5xl">
          {isLoading && (
            <>
              <Skeleton
                variant="cardContent"
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
              <Skeleton variant="cardContent" className="mb-4">
                <Skeleton variant="line" className="mb-4 w-[137px]" />
                <Skeleton variant="line" quantity={2} className="mb-2" />
                <Skeleton variant="line" className="mb-1 w-[150px] sm:hidden" />
                <div className="flex flex-col gap-11">
                  <div className="flex flex-col gap-2 md:flex-row">
                    <Skeleton variant="line" size="inputRadio" />
                    <Skeleton variant="line" size="inputRadio" />
                  </div>
                  <Skeleton variant="line" size="button" />
                </div>
              </Skeleton>
              <Skeleton variant="cardContent" className="mb-4">
                <Skeleton variant="line" className="mb-3 w-[180px]" />
                <Skeleton variant="line" className="mb-4 w-[70px]" />
                <Skeleton
                  variant="line"
                  size="buttonWhatsapp"
                  className="mb-5"
                />
                <Skeleton variant="line" className="w-[170px]" />
              </Skeleton>
              <Skeleton variant="cardContent">
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
                  <strong className="w-max font-secondary text-title-xs md:text-title-sm">
                    {transaction?.bookDetails.name}
                  </strong>
                  <span className="flex w-max items-center gap-1 text-xs min-[375px]:text-sm-140 md:justify-self-end">
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
              <Card type="content" className="mb-4">
                <p className="mb-3 text-base-140-md">
                  {transaction?.type === 'send'
                    ? 'Atualize os status'
                    : 'Solicitação a ser confirmada'}
                </p>
                <p className="mb-1 text-base-160">
                  {transaction?.type === 'send'
                    ? 'Selecione o status certo para manter todos informados sobre o progresso da troca.'
                    : 'Você enviou uma solicitação de troca. Aguarde a decisão do vendedor de confirmar ou recusar a solicitação. Se mudar de ideia, você tem a opção de cancelar a solicitação a qualquer momento antes da confirmação.'}
                </p>
                <form className="flex flex-col gap-11">
                  {transaction?.type === 'send' ? (
                    <>
                      <Root
                        className="flex flex-col gap-2 md:flex-row"
                        defaultValue="accept"
                      >
                        <InputRadio
                          title="Aceitar Solicitação"
                          value="accept"
                          text="Ao selecionar essa opção, você está aceitando prosseguir com a troca"
                          id="accept"
                        />
                        <InputRadio
                          title="Recusar Solicitação"
                          value="reject"
                          text="Selecione esta opção caso não deseje seguir com esta troca atual."
                          id="reject"
                        />
                      </Root>
                      <Button className="mx-auto">Atualizar status</Button>
                    </>
                  ) : (
                    <>
                      <Root
                        className="flex flex-col gap-2 md:flex-row"
                        defaultValue="cancel"
                      >
                        <InputRadio
                          title="Cancelar Solicitação"
                          value="cancel"
                          text="Selecione esta opção se decidir interromper a solicitação de troca em andamento."
                          id="reject"
                          variant="danger"
                        />
                      </Root>
                      <Button className="mx-auto" variant="ghostPurple">
                        Cancelar solicitação
                      </Button>
                    </>
                  )}
                </form>
              </Card>
              <Card type="content" className="mb-4">
                <p className="mb-3 text-base-140-md">
                  {transaction?.type === 'send'
                    ? `Enviando para ${transaction?.buyer.firstName}`
                    : `Recebendo de ${transaction?.bookDetails.seller.name}`}
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
                    ({transaction?.bookDetails.seller.avaliationsNumber})
                  </span>
                </p>
                <Button
                  className="mb-5"
                  variant="whatsapp"
                  href={
                    transaction?.type === 'send'
                      ? `https://wa.me/${transaction?.buyer.phoneNumber}`
                      : `https://wa.me/${transaction?.bookDetails.seller.phoneNumber}`
                  }
                >
                  Entrar em Contato
                </Button>
                <p>
                  Solicitada em {formatDate(Date.parse(transaction?.createdAt))}
                </p>
              </Card>
              <Card type="content">
                <p className="mb-3 text-base-140-md">
                  Escrito por {transaction?.bookDetails.author}
                </p>
                <div className="mb-6 grid grid-cols-2">
                  <div>
                    <p className="mb-1 text-base-140-md">Categoria</p>
                    <span className="rounded-lg border-[1px] border-primary-500 px-2 py-1 text-xs-140 text-primary-500 dark:border-white dark:text-white">
                      {transaction?.bookDetails.category}
                    </span>
                  </div>
                  <div>
                    <p className="text-base-140-md">Idioma</p>
                    <p>{transaction?.bookDetails.language}</p>
                  </div>
                </div>
                <div className="mb-6 grid grid-cols-2">
                  <div>
                    <p className="text-base-140-md">Ano</p>
                    <p>{transaction?.bookDetails.year}</p>
                  </div>
                  <div>
                    <p className="text-base-140-md">Editora</p>
                    <p>{transaction?.bookDetails.publishingCompany}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-base-140-md">Condição do livro</p>
                  <p>{transaction?.bookDetails.state}</p>
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
