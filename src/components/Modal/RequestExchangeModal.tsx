import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useContextSelector } from 'use-context-selector'
import { AuthContext } from '@/contexts/AuthContext'
import { ModalContext } from '@/contexts/ModalContext'
import { useTransaction } from '@/hooks/useTransaction'
import { useSingleBook } from '@/hooks/useSingleBook'
import { TransactionToAdd } from '@/@types/transactionToAdd'
import { Button } from '../Button'

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

  const transactionToAdd: TransactionToAdd = {
    bookRegistry: bookDetails.id,
    buyerEmail: user.email,
    sellerEmail: bookDetails.user.email,
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
