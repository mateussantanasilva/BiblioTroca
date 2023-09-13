'use client'

import { Button } from '@/components/Button'
import { Card, status } from '@/components/Card'
import { Header } from '@/components/Header'
import { InputRadio } from '@/components/InputRadio'
import { Root } from '@radix-ui/react-radio-group'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { Transaction, transactionsDefault } from '@/model/transaction'
import { useEffect, useState } from 'react'

type PagePropos = {
  params: {
    id: string
  }
}

export default function Troca({ params }: PagePropos) {
  const [exchange, setExchange] = useState<Transaction | undefined>(undefined)

  useEffect(() => {
    setExchange(transactionsDefault.find(({ id }) => id === params.id))
  }, [params.id])

  return (
    <>
      <Header className="text-center pt-16">
        <Link
          href="/perfil/trocas-pendentes"
          className="absolute left-6 top-10"
        >
          <Icon.ArrowLeft
            className="hover:scale-110 transition-transform duration-300"
            size={32}
            weight="bold"
          />
        </Link>
        <h1 className="font-primary text-sm-160">Trocas</h1>
        <h2 className="font-secondary text-title-base">
          Detalhes da Troca em <br /> Andamento
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="-mt-12 max-w-5xl mx-auto">
          <Card
            type="content"
            className="flex flex-col md:items-center gap-2 md:flex-row md:justify-between mb-4"
          >
            <div className="flex justify-between items-center md:grid grid-cols-2">
              <strong className="font-secondary text-title-xs md:text-title-sm">
                {exchange?.book.title}
              </strong>
              <div className="flex gap-1 items-center text-xs min-[375px]:text-sm-140 md:justify-self-end">
                <Icon.Circle
                  weight="fill"
                  className={status({ color: exchange?.status })}
                />
                {exchange?.status}
              </div>
            </div>
            <p className="font-primary text-sm-140">
              {exchange?.type === 'send' ? '+' : '-'} 20 pontos (aguardando)
            </p>
            <div className="flex gap-1 items-center text-sm-140">
              <Icon.CalendarBlank className="w-3 h-3 md:w-4 md:h-4" />
              Solicitada há x dias
            </div>
          </Card>
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <Card type="content" className="lg:w-[65%]">
              <p className="text-base-140-md mb-3">
                {exchange?.type === 'send'
                  ? 'Atualize os status'
                  : 'Solicitação a ser confirmada'}
              </p>
              <p className="text-base-160 mb-1">
                {exchange?.type === 'send'
                  ? 'Selecione o status certo para manter todos informados sobre o progresso da troca.'
                  : 'Você enviou uma solicitação de troca. Aguarde a decisão do vendedor de confirmar ou recusar a solicitação. Se mudar de ideia, você tem a opção de cancelar a solicitação a qualquer momento antes da confirmação.'}
              </p>
              <form className="flex flex-col gap-11">
                {exchange?.type === 'send' ? (
                  <>
                    <Root
                      className="flex flex-col md:flex-row gap-2"
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
                      className="flex flex-col md:flex-row gap-2"
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
            <Card
              type="content"
              className="flex flex-col justify-center lg:w-[35%]"
            >
              <p className="text-base-140-md mb-3">
                {exchange?.type === 'send'
                  ? `Enviando para ${exchange?.sellerCustomer.name}`
                  : `Recebendo de ${exchange?.buyerCustomer.name}`}
              </p>
              <p className="flex gap-1 items-center mb-4">
                <Icon.Star className="text-orange-500" weight="fill" />
                {exchange?.type === 'send'
                  ? exchange?.sellerCustomer.name
                  : exchange?.buyerCustomer.name}
                <span className="text-gray-400 text-sm-140">(14)</span>
              </p>
              <Button className="mb-5 lg:max-w-full" variant="whatsapp">
                Entrar em Contato
              </Button>
              <p>Solicitada em {exchange?.startDate.toLocaleDateString()}</p>
            </Card>
          </div>
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
