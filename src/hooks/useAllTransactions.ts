import { TransactionData } from '@/@types/transactionData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

async function fetchTransactions() {
  const response = await api.get(`/transacoes`)

  return response.data
}

export function useAllTransactions() {
  const query = useQuery<TransactionData[]>({
    queryKey: ['transactionsList', 'allTransactions'],
    queryFn: async () => await fetchTransactions(),
    refetchInterval: 1000 * 60 * 5, // 5 minutes in miliseconds
  })

  const transactionsCount = query.data?.length

  return { query, transactionsCount }
}
