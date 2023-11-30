import { useMutation } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { TransactionToAdd } from '@/@types/transactionToAdd'

async function createExchangeRequest(transaction: TransactionToAdd) {
  return await api.post('/transacoes', transaction)
}

export function useTransaction() {
  const mutation = useMutation({
    mutationFn: createExchangeRequest,
  })

  return mutation
}
