import { TransactionData } from '@/@types/transactionData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

export type Status = 'Pendente' | 'Cancelado&Concluído'

interface ApiParams {
  _sort: string
  _order: string
  status: Status
}

async function fetchTransactions(status: Status) {
  const params: ApiParams = {
    _sort: 'createdAt',
    _order: 'desc',
    status,
  }

  if (params.status === 'Cancelado&Concluído') {
    const response = await api.get(
      '/transactions?status=Cancelado&status=Concluído',
      {
        params: { _sort: params._sort, _order: params._order },
      },
    )

    return response.data
  } else {
    const response = await api.get('/transactions', {
      params,
    })

    return response.data
  }
}

export function useTransactions(status: Status) {
  const query = useQuery<TransactionData[]>({
    queryKey: ['transactionsList', status],
    queryFn: async () => await fetchTransactions(status),
    refetchInterval: 1000 * 60 * 5, // 5 minutes in miliseconds
  })

  const transactionsCount = query.data?.length

  return { query, transactionsCount }
}
