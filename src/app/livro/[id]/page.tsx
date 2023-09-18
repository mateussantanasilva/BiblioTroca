'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSingleBook } from '@/hooks/useSingleBook'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { PublicHeader } from '@/components/PublicHeader'
import { Modal } from '@/components/Modal'
import * as Dialog from '@radix-ui/react-dialog'
import { MapPin, Star } from '@phosphor-icons/react'

interface BookProps {
  params: {
    id: string
  }
}

export default function Book({ params }: BookProps) {
  const { data: book, isError } = useSingleBook(params.id)

  const router = useRouter()
  isError && router.push('/livros')

  return (
    <div className="flex flex-col mx-auto max-w-[375px]">
      <PublicHeader />

      <main className="flex flex-col gap-4 mb-9">
        <Card
          componentType="section"
          type="content"
          className="text-gray-500 mx-6"
        >
          <header className="mb-3">
            <h2 className="font-secondary text-title-lg">{book?.name}</h2>
            <p className="text-gray-400 text-base-140">por {book?.author}</p>
          </header>

          <ul className="flex flex-col gap-5">
            <li className="flex flex-col gap-1">
              <strong className="text-base-140">Categoria</strong>
              <span
                aria-label="categoria"
                className="rounded-xl border-[1px] border-primary-500 py-1 px-3 text-primary-500 text-xs-140 w-fit"
              >
                {book?.category}
              </span>
            </li>

            <div className="flex gap-20">
              <li className="flex flex-col gap-1">
                <strong className="text-base-140">Idioma</strong>
                <p className="text-base-140">{book?.language}</p>
              </li>

              <li className="flex flex-col gap-1">
                <strong className="text-base-140">Ano</strong>
                <p className="text-base-140">{book?.year}</p>
              </li>
            </div>

            <li className="flex flex-col gap-1">
              <strong className="text-base-140">Editora</strong>
              <p className="text-base-140">{book?.publishingCompany}</p>
            </li>

            <li className="flex flex-col gap-1">
              <strong className="text-base-140">Condição do livro</strong>
              <p className="text-base-160">{book?.state}</p>
            </li>

            <li className="flex flex-col gap-1">
              <strong className="text-base-140">Descrição</strong>
              <p className="text-base-160">{book?.description}</p>
            </li>
          </ul>
        </Card>

        <Card
          componentType="section"
          type="content"
          className="text-gray-500 mx-6"
        >
          <h2 className="font-secondary text-title-base text-primary-500 mb-3">
            Custo de 60 pontos
          </h2>

          <section className="flex flex-col gap-1 mb-5">
            <p className="text-base-140">Enviado por {book?.seller.name}</p>

            <div className="flex items-center gap-1">
              <p className="flex items-center gap-1 text-base-140">
                <Star weight="fill" className="text-orange-500" />
                {book?.seller.averageRating}
              </p>
              <span className="text-gray-400 text-sm-140">{`(${book?.seller.avaliationsNumber})`}</span>
            </div>

            <p className="flex items-center gap-1 text-base-140">
              <MapPin size={'0.75rem'} />
              {book?.seller.location}
            </p>
          </section>

          <p className="text-base-160 mb-2">
            Negocie diretamente com {book?.seller.name} e defina os detalhes da
            troca antes de prosseguir com a solicitação. Toque abaixo para
            iniciar a conversa.
          </p>

          <Button
            componentType={Link}
            variant="whatsapp"
            size="sm"
            href={`https://wa.me/${book?.seller.phoneNumber}`}
            target="_blank"
          >
            Entrar em contato
          </Button>

          <p className="text-base-160 mt-5 mb-11">
            Tudo combinado e pronto para avançar? Solicite a troca agora mesmo
            clicando abaixo.
          </p>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button>Solicitar troca</Button>
            </Dialog.Trigger>

            <Modal variant="requestExchange" />
          </Dialog.Root>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
