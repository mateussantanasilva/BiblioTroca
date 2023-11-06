import { TransactionData } from '@/@types/transactionData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

async function fetchTransactionById(id: string) {
  const response = await api.get(`/transactions/${id}`)

  return response.data
}

export function useSingleTransaction(id: string) {
  const query = useQuery<TransactionData>({
    queryKey: ['selectedTransaction', id],
    queryFn: async () => await fetchTransactionById(id),
    retry: false,
  })

  return query
}
