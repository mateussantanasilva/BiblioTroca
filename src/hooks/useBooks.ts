import { BookSimpleData } from '@/@types/bookSimpleData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

interface ApiParams {
  q?: string
}

async function fetchBooks(filterQuery?: string) {
  const params: ApiParams = {}
  filterQuery && (params.q = filterQuery)

  const response = await api.get('/livros', {
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

  const bookCount = query.data?.length

  const filteredBooks = query.data?.filter(
    (book) => book.category !== 'Livro cadastrado pelo funcionário BiblioTroca',
  )

  const modifiedQuery = { ...query, data: filteredBooks }

  return { query: modifiedQuery, bookCount }
}
