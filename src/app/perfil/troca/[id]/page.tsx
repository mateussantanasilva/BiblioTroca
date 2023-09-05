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
              <div className="flex gap-1 items-center text-xs min-[375px]:text-sm-140">
                <Icon.Circle
                  weight="fill"
                  className={status({ color: exchange?.status })}
                />
                {exchange?.status}
              </div>
            </div>
            <p className="font-primary text-sm-140">+ 60 pontos (aguardando)</p>
            <div className="flex gap-1 items-center text-sm-140">
              <Icon.CalendarBlank className="w-3 h-3 md:w-4 md:h-4" />
              Solicitada há x dias
            </div>
          </Card>
          <Card type="content" className="mb-4">
            <strong className="text-base-140-md mb-3">
              Atualize os status
            </strong>
            <p className="text-base-160 mb-1">
              Selecione o status certo para manter todos informados sobre o
              progresso da troca.
            </p>
            <form className="flex flex-col gap-11">
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
              <Button>Atualizar status</Button>
            </form>
          </Card>
          <div className="grid md:grid-cols-2 gap-4">
            <Card type="content">
              <div className="flex md:items-center gap-3 flex-col mb-5 md:flex-row">
                <p className="text-base-140-md">
                  {exchange?.type === 'send' ? 'Enviado' : 'Recebendo'} de{' '}
                  {exchange?.sellerCustomer.name}
                </p>
                <p className="flex gap-1 items-center">
                  <Icon.Star className="text-orange-500" weight="fill" />
                  4.7
                  <span className="text-gray-400 text-sm-140">(14)</span>
                </p>
              </div>
              <Button whatsapp className="mb-5 lg:max-w-full">
                <Icon.WhatsappLogo />
                Entrar em Contato
              </Button>
              <p>Solicitada em {exchange?.startDate.toLocaleDateString()}</p>
            </Card>
            <Card type="content">
              <strong> Escrito por Robert Cecil Martin</strong>
              <p>Categoria- Tecnologia</p>
              <p>Idioma- Portguês</p>
            </Card>
          </div>
        </section>
      </main>
    </>
  )
}
