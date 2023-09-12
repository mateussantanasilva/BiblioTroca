import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

interface Seller {
  name: string
  location: string
  averageRating: number
  avaliationsNumber: number
  phoneNumber: string
}

interface BookCompleteData {
  id: string
  name: string
  author: string
  category: string
  language: string
  year: string
  publishingCompany: string
  state: string
  description: string
  seller: Seller
}

async function fetchBookById(id: string) {
  const response = await api.get(`/books-details/${id}`)

  return response.data
}

export function useSingleBook(id: string) {
  const query = useQuery<BookCompleteData>({
    queryKey: ['selectedBook'],
    queryFn: async () => await fetchBookById(id),
  })

  return query
}
