import { WishData } from '@/@types/wishData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

async function fetchWishById(id: string) {
  const response = await api.get(`/desejos/${id}`)

  return response.data
}

export function useSingleWish(id: string) {
  const query = useQuery<WishData>({
    queryKey: ['selectedWish', id],
    queryFn: async () => await fetchWishById(id),
    retry: false,
  })

  return query
}
