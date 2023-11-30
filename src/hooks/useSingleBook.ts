import { BookCompleteData } from '@/@types/bookCompleteData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

async function fetchBookById(id: string) {
  const response = await api.get(`/livros/${id}`)

  return response.data
}

export function useSingleBook(id: string) {
  const query = useQuery<BookCompleteData>({
    queryKey: ['selectedBook', id],
    queryFn: async () => await fetchBookById(id),
    retry: false,
  })

  return query
}
