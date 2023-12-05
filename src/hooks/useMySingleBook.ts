import { BookCompleteData } from '@/@types/bookCompleteData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

async function fetchMyBookById(id: string) {
  const response = await api.get(`/livros/${id}`)

  return response.data
}

export function useMySingleBook(id: string) {
  const query = useQuery<BookCompleteData>({
    queryKey: ['selectedBook', id],
    queryFn: async () => await fetchMyBookById(id),
    retry: false,
  })

  return query
}
