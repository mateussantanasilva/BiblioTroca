import { TransactionData } from '@/@types/transactionData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

interface ApiParams {
  _sort: string
  _order: string
  q?: string
}

async function fetchTransactions() {
  const params: ApiParams = {
    _sort: 'createdAt',
    _order: 'desc',
  }

  const response = await api.get('/transactions', {
    params,
  })

  return response.data
}

export function useTransactions() {
  const query = useQuery<TransactionData[]>({
    queryKey: ['transactionsList'],
    queryFn: async () => await fetchTransactions(),
    refetchInterval: 1000 * 30, // 5 minutes in miliseconds
  })

  const transactionsCount = query.data?.length

  return { query, transactionsCount }
}
