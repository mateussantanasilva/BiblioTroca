import { UserData } from '@/@types/userData'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

async function fetchUser(email: string) {
  const response = await api.get(`/usuarios/${email}`)

  return response.data
}

export function useUser(email: string) {
  const query = useQuery<UserData>({
    queryKey: ['user', email],
    queryFn: async () => await fetchUser(email),
    retry: false,
  })

  return query
}
