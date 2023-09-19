import { useRequest } from '@/hooks/useRequest'
import { Button } from '../Button'
import { useSingleBook } from '@/hooks/useSingleBook'
import { useParams } from 'next/navigation'
import { TransactionData } from '@/@types/transactionData'

export function RequestExchangeModal() {
  const { mutate, isSuccess } = useRequest()

  const { id } = useParams()
  const { data: bookDetails } = useSingleBook(id.toString())

  if (!bookDetails) return

  const currentTime = JSON.stringify(new Date())

  const transactionToAdd: TransactionData = {
    id: currentTime,
    status: 'Solicitação pendente',
    createdAt: currentTime,
    bookDetails,
    // gets user data by session
    buyer: {
      firstName: 'Mateus',
      lastName: 'Santana',
      email: 'santanasilva1778@gmail.com',
      phoneNumber: '11912345678',
    },
  }

  function handleCreateRequest() {
    mutate(transactionToAdd)
  }

  return (
    <div className="flex flex-col gap-1">
      <Button
        onClick={handleCreateRequest}
        className="border-2 border-primary-500 [&:not(:disabled)]:hover:border-primary-400"
      >
        Confirmar solicitação
      </Button>

      <Button variant="ghostPurple">Retornar à negociação</Button>
    </div>
  )
}
