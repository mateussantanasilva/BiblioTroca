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
      <Header className="text-center pt-16">
        <Link href="/perfil/historico" className="absolute left-6 top-10">
          <Icon.ArrowLeft
            className="hover:scale-110 transition-transform duration-300"
            size={32}
            weight="bold"
          />
        </Link>
        <h1 className="font-primary text-sm-160">Trocas</h1>
        <h2 className="font-secondary text-title-base">
          Detalhes da <br /> Troca
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="-mt-12 max-w-5xl mx-auto">
          <Card
            type="content"
            className="flex flex-col md:items-center gap-2 md:flex-row md:justify-between mb-4"
          >
            <div className="flex justify-between md:hidden">
              <strong className="font-secondary w-max text-title-xs md:text-title-sm">
                {exchange?.book.title}
              </strong>
              <span className="flex gap-1 items-center w-max text-xs min-[375px]:text-sm-140">
                <Icon.Circle
                  weight="fill"
                  className={status({ color: exchange?.status })}
                />
                {exchange?.status}
              </span>
            </div>
            <strong className="hidden md:block font-secondary w-max text-title-xs md:text-title-sm">
              {exchange?.book.title}
            </strong>
            <span className="hidden md:flex gap-1 items-center w-max text-xs min-[375px]:text-sm-140 md:justify-self-end">
              <Icon.Circle
                weight="fill"
                className={status({ color: exchange?.status })}
              />
              {exchange?.status}
            </span>
            <p className="font-primary text-sm-140">
              {exchange?.type === 'send' ? '+' : '-'} 20 pontos
            </p>
            <div className="flex gap-1 items-center text-sm-140">
              <Icon.CalendarBlank className="w-3 h-3 md:w-4 md:h-4" />
              Solicitada há x dias
            </div>
          </Card>
          <Card
            type="content"
            className="flex flex-col justify-center lg:w-full mb-4"
          >
            <p className="text-base-140-md mb-3">
              {exchange?.type === 'send'
                ? `Enviado para ${exchange?.buyerCustomer.name}`
                : `Recebido de ${exchange?.sellerCustomer.name}`}
            </p>
            <p className="flex gap-1 items-center mb-4">
              <Icon.Star size={12} className="text-orange-500" weight="fill" />
              {exchange?.type === 'send'
                ? exchange?.buyerCustomer.rating.toFixed(1)
                : exchange?.sellerCustomer.rating.toFixed(1)}
              <span className="text-gray-400 text-sm-140">(14)</span>
            </p>
            {exchange?.status === 'Pendente' ? (
              <Button className="mb-5 lg:max-w-full" variant="whatsapp">
                Entrar em Contato
              </Button>
            ) : (
              <p className="flex gap-1 items-center mb-4">
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
              <p className="text-base-140-md mb-1">Categoria</p>
              <span className="border-[1px] border-primary-500 text-xs-140 rounded-lg px-2 py-1 text-primary-500">
                {exchange?.book.studyArea}
              </span>
            </div>
            <div className="grid grid-cols-2 mb-4">
              <div>
                <p className="text-base-140-md">Idioma</p>
                <p>{exchange?.book.language}</p>
              </div>
              <div>
                <p className="text-base-140-md">Ano</p>
                <p>{exchange?.book.year}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-4">
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
