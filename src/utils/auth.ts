import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'
import { UserToken } from '@/@types/userToken'

interface ReturnValues {
  user: UserToken | null
  token: string | null
}

export function getAuthentication(isAuthenticated: boolean): ReturnValues {
  if (!isAuthenticated) return { user: null, token: null }

  const token = cookies().get('token')?.value

  if (!token) throw new Error('Unauthenticated')

  const user: UserToken = jwtDecode(token)

  return { user, token }
}
