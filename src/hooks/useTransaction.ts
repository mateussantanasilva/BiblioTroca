import { useMutation } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { TransactionData } from '@/@types/transactionData'

async function createExchangeRequest(transaction: TransactionData) {
  return await api.post('/transacoes', transaction)
}

export function useTransaction() {
  const mutation = useMutation({
    mutationFn: createExchangeRequest,
  })

  return mutation
}
