import { TransactionData } from '@/@types/transactionData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

type Status = 'CONCLUDED' | 'CANCELLED' | 'PENDING'

async function fetchTransactions(status: Status, email: string | undefined) {
  const response = await api.get(
    `/transacoes/usuario/${email}/status/${status}`,
  )

  return response.data
}

export function useTransactions(status: Status, email: string | undefined) {
  const query = useQuery<TransactionData[]>({
    queryKey: ['transactionsList', status, email],
    queryFn: async () => await fetchTransactions(status, email),
    refetchInterval: 1000 * 60 * 5, // 5 minutes in miliseconds
  })

  const transactionsCount = query.data?.length

  return { query, transactionsCount }
}
