import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

interface Seller {
  name: string
  location: string
  averageRating: number
  avaliationsNumber: number
}

export interface BookSimpleData {
  id: string
  name: string
  author: string
  shortDescription: string
  category: string
  seller: Seller
}

interface ApiParams {
  _sort: string
  _order: string
  q?: string
}

async function fetchBooks(filterQuery?: string) {
  const params: ApiParams = {
    _sort: 'createdAt',
    _order: 'desc',
  }
  filterQuery && (params.q = filterQuery)

  const response = await api.get('/books', {
    params,
  })

  return response.data
}

export function useBooks(filterQuery?: string) {
  const query = useQuery<BookSimpleData[]>({
    queryKey: ['bookList', filterQuery],
    queryFn: async () => await fetchBooks(filterQuery),
    refetchInterval: 1000 * 60 * 5, // 5 minutes in miliseconds
  })

  return query
}
