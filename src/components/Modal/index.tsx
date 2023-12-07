/* eslint-disable prettier/prettier */
import Image from 'next/image'
import { contentVariants } from '@/constants/modalVariants'
import * as Dialog from '@radix-ui/react-dialog'
import { Card } from '../Card'
import { RequestExchangeModal } from './RequestExchangeModal'
import { DeleteAccountModal } from './DeleteAccountModal'
import { RefuseExchangeModal } from './RefuseExchangeModal'
import { EvaluateModal } from './EvaluateModal'
import { DeleteBookModal } from './DeleteBookModal'
import { StarRating } from '../StarRating'
import { X } from '@phosphor-icons/react'

interface ModalProps {
  variant:
  | 'requestExchange'
  | 'deleteAccount'
  | 'refuseExchange'
  | 'evaluate'
  | 'deleteBook'
  namePersonEvaluated?: string
  onClick?: () => void
}

export function Modal({ variant, onClick }: ModalProps) {
  const selectedVariant = contentVariants[variant]

  function selectButtonSchema() {
    switch (variant) {
      case 'requestExchange':
        return <RequestExchangeModal />
      case 'deleteAccount':
        return <DeleteAccountModal />
      case 'refuseExchange':
        return <RefuseExchangeModal />
      case 'evaluate':
        return <EvaluateModal />
      case 'deleteBook':
        return <DeleteBookModal onClick={onClick} />
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 w-screen h-screen bg-overlay z-20" />

      <Dialog.Content className="w-max">
        <Card
          type="content"
          componentType="section"
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[20.438rem] max-[320px]:max-w-[15rem]  text-gray-500 dark:bg-black dark:border dark:text-white z-30"
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
