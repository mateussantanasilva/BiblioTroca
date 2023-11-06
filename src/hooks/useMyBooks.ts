import { BookCompleteData } from '@/@types/bookCompleteData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

interface ApiParams {
  _sort: string
  _order: string
}

async function fetchMyBooks() {
  const params: ApiParams = {
    _sort: 'createdAt',
    _order: 'desc',
  }

  const response = await api.get('/my-books', {
    params,
  })

  return response.data
}

export function useMyBooks() {
  const query = useQuery<BookCompleteData[]>({
    queryKey: ['booksList', 'myBooksList'],
    queryFn: async () => await fetchMyBooks(),
    refetchInterval: 1000 * 60 * 5, // 5 minutes in miliseconds
  })

  const bookCount = query.data?.length

  return { query, bookCount }
}
