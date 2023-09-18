/* eslint-disable prettier/prettier */
import Image from 'next/image'
import { Card } from './Card'
import { Button } from './Button'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'

import RequestExchangeImage from '../assets/variantsModal/requestExchange.png'
import DeleteAccountImage from '../assets/variantsModal/deleteAccount.svg'
import RefuseExchangeImage from '../assets/variantsModal/refuseExchange.svg'
import EvaluateImage from '../assets/variantsModal/evaluate.svg'
import DeleteBookImage from '../assets/variantsModal/deleteBook.svg'
import { StarRating } from './StarRating'

interface ModalProps {
  variant:
  | 'requestExchange'
  | 'deleteAccount'
  | 'refuseExchange'
  | 'evaluate'
  | 'deleteBook'
  namePersonEvaluated?: string 
}

export function Modal({ variant }: ModalProps) {
  const contentVariants = {
    requestExchange: {
      imageUrl: RequestExchangeImage,
      alt: 'Aperto de mão',
      title: 'Confirme a Solicitação',
      description:
        'Ao confirmar, você estará solicitando a troca pelo livro Clean code. Deseja continuar?',
    },
    deleteAccount: {
      imageUrl: DeleteAccountImage,
      alt: 'Usuário triste que porque será apagado',
      title: 'Confirmar Exclusão',
      description:
        'Excluindo sua conta, todos os seus dados e pontos serão permanentemente perdidos.',
    },
    refuseExchange: {
      imageUrl: RefuseExchangeImage,
      alt: 'Aperto de mão com um X vermelho',
      title: 'Desfazer Acordo',
      description:
        'Você está prestes a interromper o processo de troca. Tem certeza de que quer continuar?',
    },
    evaluate: {
      imageUrl: EvaluateImage,
      alt: 'Estrelas acima de um perfil',
      title: 'Avalie Pedro',
      description:
        'Como foi sua experiência com Pedro durante esta troca? Seu feedback é essencial para nossa comunidade.',
    },
    deleteBook: {
      imageUrl: DeleteBookImage,
      alt: 'Livro com um X vermelho',
      title: 'Confirmar Exclusão',
      description:
        'Você está prestes a excluir este livro do seu perfil. Tem certeza de que deseja continuar?',
    },
  }
  const selectedVariant = contentVariants[variant]

  function selectButtonSchema() {
    switch (variant) {
      case 'requestExchange':
        return (
          <div className="flex flex-col gap-1">
            <Button className="border-2 border-primary-500 [&:not(:disabled)]:hover:border-primary-400">
              Confirmar solicitação
            </Button>
            <Button variant="ghostPurple">Retornar à negociação</Button>
          </div>
        )
      case 'deleteAccount':
        return <Button variant="delete">Confirmar exclusão</Button>
      case 'refuseExchange':
        return <Button variant="delete">Confirmar ação</Button>
      case 'evaluate':
        return <Button variant="evaluate">Enviar avaliação</Button>
      case 'deleteBook':
        return <Button variant="delete">Sim, excluir</Button>
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 w-screen h-screen bg-overlay" />

      <Dialog.Content asChild className="w-max">
        <Card
          type="content"
          componentType="section"
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[20.438rem] max-[350px]:max-w-[18rem]  text-gray-500"
        >
          <Dialog.Close className="block ml-auto">
            <X weight="bold" size={'1.53rem'} />
          </Dialog.Close>

          <Image
            src={selectedVariant.imageUrl}
            alt={selectedVariant.alt}
            width={100}
            height={100}
            className="w-20 mx-auto my-6"
          />

          <Dialog.Title className="text-center text-xl-140-md">
            {selectedVariant.title}
          </Dialog.Title>

          <Dialog.Description className="mt-1 mb-12 text-center text-base-160">
            {selectedVariant.description}
          </Dialog.Description>

          {variant === 'evaluate' && (
            <StarRating />
          )}

          {selectButtonSchema()}
        </Card>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
