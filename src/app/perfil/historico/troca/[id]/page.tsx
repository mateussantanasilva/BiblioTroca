'use client'

import { Button } from '@/components/Button'
import { Card, status } from '@/components/Card'
import { Header } from '@/components/Header'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { Transaction, transactionsDefault } from '@/model/transaction'
import { useEffect, useState } from 'react'

type PagePropos = {
  params: {
    id: string
  }
}

export default function TrocaHistorico({ params }: PagePropos) {
  const [exchange, setExchange] = useState<Transaction | undefined>(undefined)

  useEffect(() => {
    setExchange(transactionsDefault.find(({ id }) => id === params.id))
  }, [params.id])

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
          <Card
            type="content"
            className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex justify-between md:hidden">
              <strong className="w-max font-secondary text-title-xs md:text-title-sm">
                {exchange?.book.title}
              </strong>
              <span className="flex w-max items-center gap-1 text-xs min-[375px]:text-sm-140">
                <Icon.Circle
                  weight="fill"
                  className={status({ color: exchange?.status })}
                />
                {exchange?.status}
              </span>
            </div>
            <strong className="hidden w-max font-secondary text-title-xs md:block md:text-title-sm">
              {exchange?.book.title}
            </strong>
            <span className="hidden w-max items-center gap-1 text-xs min-[375px]:text-sm-140 md:flex md:justify-self-end">
              <Icon.Circle
                weight="fill"
                className={status({ color: exchange?.status })}
              />
              {exchange?.status}
            </span>
            <p className="font-primary text-sm-140">
              {exchange?.type === 'send' ? '+' : '-'} 20 pontos
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
              {exchange?.type === 'send'
                ? `Enviado para ${exchange?.buyerCustomer.name}`
                : `Recebido de ${exchange?.sellerCustomer.name}`}
            </p>
            <p className="mb-4 flex items-center gap-1">
              <Icon.Star size={12} className="text-orange-500" weight="fill" />
              {exchange?.type === 'send'
                ? exchange?.buyerCustomer.rating.toFixed(1)
                : exchange?.sellerCustomer.rating.toFixed(1)}
              <span className="text-sm-140 text-gray-400">(14)</span>
            </p>
            {exchange?.status === 'Pendente' ? (
              <Button className="mb-5 lg:max-w-full" variant="whatsapp">
                Entrar em Contato
              </Button>
            ) : (
              <p className="mb-4 flex items-center gap-1">
                <span>Avalia a experiência da troca</span>
                <Icon.ArrowRight size={14} />
              </p>
            )}
            <p>Solicitada em {exchange?.startDate.toLocaleDateString()}</p>
            <p>Finalizado em {exchange?.endDate.toLocaleDateString()}</p>
          </Card>
          <Card type="content">
            <p className="mb-3 text-base-140-md">
              Escrito por {exchange?.book.author}
            </p>
            <div className="mb-4">
              <p className="mb-1 text-base-140-md">Categoria</p>
              <span className="rounded-lg border-[1px] border-primary-500 px-2 py-1 text-xs-140 text-primary-500 dark:border-white dark:text-white">
                {exchange?.book.studyArea}
              </span>
            </div>
            <div className="mb-4 grid grid-cols-2">
              <div>
                <p className="text-base-140-md">Idioma</p>
                <p>{exchange?.book.language}</p>
              </div>
              <div>
                <p className="text-base-140-md">Ano</p>
                <p>{exchange?.book.year}</p>
              </div>
            </div>
            <div className="mb-4 grid grid-cols-2">
              <div>
                <p className="text-base-140-md">Editora</p>
                <p>{exchange?.book.publishingCompany}</p>
              </div>
              <div>
                <p className="text-base-140-md">Condição do livro</p>
                <p>{exchange?.book.bookCondition}</p>
              </div>
            </div>
            <p className="text-base-140-md">Descrição</p>
            <p>{exchange?.book.description}</p>
          </Card>
        </section>
      </main>
    </>
  )
}
