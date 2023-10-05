'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useContextSelector } from 'use-context-selector'
import { ModalContext } from '@/contexts/ModalContext'
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
  const { modalIsOpen, changeModalVisibility } = useContextSelector(
    ModalContext,
    (context) => {
      return {
        ...context,
      }
    },
  )

  const { data: book, isError } = useSingleBook(params.id)

  const router = useRouter()
  isError && router.push('/livros')

  return (
    <div className="dark:bg-black">
      <PublicHeader />

      <main className="mx-auto mb-9 grid max-w-[73rem] grid-cols-1 gap-4 px-6 md:grid-cols-book">
        <Card
          componentType="section"
          type="content"
          className="text-gray-500 dark:bg-black dark:text-white dark:shadow-solid-white"
        >
          <header className="mb-3">
            <h2 className="font-secondary text-title-lg">{book?.name}</h2>
            <p className="text-base-140 text-gray-400 dark:text-white">
              por {book?.author}
            </p>
          </header>

          <ul className="flex flex-col gap-5">
            <li className="flex flex-col gap-1">
              <strong className="text-base-140">Categoria</strong>
              <span
                aria-label="categoria"
                className="w-fit rounded-xl border-[1px] border-primary-500 px-3 py-1 text-xs-140 text-primary-500 dark:border-white dark:text-white"
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
          className="flex flex-col justify-between text-gray-500 dark:bg-black dark:text-white dark:shadow-solid-white"
        >
          <div>
            <h2 className="mb-3 font-secondary text-title-base text-primary-500 dark:text-white">
              Custo de 60 pontos
            </h2>

            <section className="mb-5 flex flex-col gap-1">
              <p className="text-base-140">Enviado por {book?.seller.name}</p>

              <div className="flex items-center gap-1">
                <p className="flex items-center gap-1 text-base-140">
                  <Star weight="fill" className="text-orange-500" />
                  {book?.seller.averageRating}
                </p>
                <span className="text-sm-140 text-gray-400 dark:text-white">{`(${book?.seller.avaliationsNumber})`}</span>
              </div>

              <p className="flex items-center gap-1 text-base-140">
                <MapPin size={'0.75rem'} />
                {book?.seller.location}
              </p>
            </section>

            <p className="mb-2 text-base-160">
              Negocie diretamente com {book?.seller.name} e defina os detalhes
              da troca antes de prosseguir com a solicitação. Toque abaixo para
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

            <p className="mb-11 mt-5 text-base-160">
              Tudo combinado e pronto para avançar? Solicite a troca agora mesmo
              clicando abaixo.
            </p>
          </div>

          <Dialog.Root onOpenChange={changeModalVisibility} open={modalIsOpen}>
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
