import { BookCompleteData } from '@/@types/bookCompleteData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

async function fetchMyBooks(email: string | undefined) {
  const response = await api.get<BookCompleteData[]>(`/${email}/livros`)

  return response.data
}

export function useMyBooks(email: string | undefined) {
  const query = useQuery<BookCompleteData[]>({
    queryKey: ['booksList', 'myBooksList'],
    queryFn: async () => await fetchMyBooks(email),
    refetchInterval: 1000 * 60 * 5, // 5 minutes in miliseconds
  })

  const filteredBooks = query.data?.filter(
    (book) => book.category !== 'Livro cadastrado pelo funcionário BiblioTroca',
  )

  const modifiedQuery = { ...query, data: filteredBooks }

  const bookCount = modifiedQuery.data?.length

  return { query: modifiedQuery, bookCount }
}
