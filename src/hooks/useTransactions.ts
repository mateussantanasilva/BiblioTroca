import { TransactionData } from '@/@types/transactionData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

type Status = 'CONCLUDED' | 'CANCELLED' | 'PENDING'

type TransactionsRequestProps = {
  email: string | undefined
  status: Status
}

async function fetchTransactions({ email, status }: TransactionsRequestProps) {
  const response = await api.get(
    `/transacoes/usuario/${email}/status/${status}`,
  )

  return response.data
}

export function useTransactions(props: TransactionsRequestProps) {
  const query = useQuery<TransactionData[]>({
    queryKey: ['transactionsList', props],
    queryFn: async () => await fetchTransactions(props),
    refetchInterval: 1000 * 60 * 5, // 5 minutes in miliseconds
  })

  const transactionsCount = query.data?.length

  return { query, transactionsCount }
}
