import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'

interface UserToken {
  firstName: string
  lastName: string
  email: string
  picture: string
}

export function getUser(isAuthenticated: boolean) {
  if (isAuthenticated) {
    const token = cookies().get('token')?.value

    if (!token) throw new Error('Unauthenticated')

    const userToken: UserToken = jwtDecode(token)

    return userToken
  }
}
