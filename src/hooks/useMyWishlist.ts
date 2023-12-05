import { WishData } from '@/@types/wishData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

async function fetchMyWishlist() {
  const response = await api.get('/desejos')

  return response.data
}

export function useMyWishlist() {
  const query = useQuery<WishData[]>({
    queryKey: ['wishlistData', 'myWishlist'],
    queryFn: async () => await fetchMyWishlist(),
    refetchInterval: 1000 * 60 * 5, // 5 minutes in miliseconds
  })

  const wishlistCount = query.data?.length

  return { query, wishlistCount }
}
