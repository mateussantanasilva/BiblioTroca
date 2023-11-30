import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { ModalContext } from '@/contexts/ModalContext'
import { useContextSelector } from 'use-context-selector'
import { useTransaction } from '@/hooks/useTransaction'
import { useSingleBook } from '@/hooks/useSingleBook'
import { Button } from '../Button'
import { TransactionToAdd } from '@/@types/transactionToAdd'
import { AuthContext } from '@/contexts/AuthContext'
import { v4 as uuidv4 } from 'uuid'

export function RequestExchangeModal() {
  const router = useRouter()

  const changeModalVisibility = useContextSelector(ModalContext, (context) => {
    return context.changeModalVisibility
  })

  const user = useContextSelector(AuthContext, (context) => {
    return context.user
  })

  const { mutate, isSuccess, isLoading } = useTransaction()

  const transactionCreated = isSuccess || isLoading

  useEffect(() => {
    if (isSuccess) {
      router.push('/perfil/trocas-pendentes')
    }
  }, [isSuccess, router])

  const { id } = useParams()
  const { data: bookDetails } = useSingleBook(id.toString())

  if (!bookDetails || !user) return

  // const currentTime = JSON.stringify(new Date())

  // const transactionToAdd: TransactionData = {
  //   id: currentTime,
  //   status: 'Pendente',
  //   createdAt: currentTime,
  //   bookDetails,
  //   // gets user data by session
  //   buyer: {
  //     firstName: 'Mateus',
  //     lastName: 'Santana',
  //     email: 'santanasilva1778@gmail.com',
  //     phoneNumber: '11912345678',
  //     averageRating: 4.7,
  //     avaliationsNumber: 12,
  //   },
  //   type: 'send',
  //   endedAt: '2023-10-25T20:29:59.153Z',
  // }

  const transactionToAdd: TransactionToAdd = {
    bookRegistry: bookDetails.id,
    buyerEmail: user.email,
    sellerId: bookDetails.user.id,
  }

  function handleCreateRequest() {
    mutate(transactionToAdd)
  }

  return (
    <div className="flex flex-col gap-1">
      <Button
        onClick={handleCreateRequest}
        disabled={transactionCreated}
        className="border-2 border-primary-500 dark:border-white [&:not(:disabled)]:hover:border-primary-400 dark:[&:not(:disabled)]:hover:border-white"
      >
        Confirmar solicitação
      </Button>

      <Button
        variant="ghostPurple"
        onClick={changeModalVisibility}
        disabled={transactionCreated}
      >
        Retornar à negociação
      </Button>
    </div>
  )
}
