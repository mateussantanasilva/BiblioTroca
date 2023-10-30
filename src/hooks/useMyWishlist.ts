import { WishListData } from '@/@types/wishlistData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

interface ApiParams {
  _sort: string
  _order: string
}

async function fetchMyWishlist() {
  const params: ApiParams = {
    _sort: 'createdAt',
    _order: 'desc',
  }

  const response = await api.get('/wishlist', {
    params,
  })

  return response.data
}

export function useMyWishlist() {
  const query = useQuery<WishListData[]>({
    queryKey: ['wishlistData', 'myWishlist'],
    queryFn: async () => await fetchMyWishlist(),
    refetchInterval: 1000 * 60 * 5, // 5 minutes in miliseconds
  })

  const bookCount = query.data?.length

  return { query, bookCount }
}
