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

async function fetchBooks() {
  const response = await api.get('/books')

  return response.data
}

export function useBooks() {
  const query = useQuery<BookSimpleData[]>({
    queryKey: ['bookList'],
    queryFn: fetchBooks,
    refetchInterval: 1000 * 60 * 5, // 5 minutes in miliseconds
  })

  return query
}
