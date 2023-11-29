import Link from 'next/link'
import { cookies } from 'next/headers'
import { getUser } from '@/utils/auth'
import { Button } from '../Button'

interface SessionButtonProps {
  size?: 'desktop' | 'mobile'
  variant?: 'home' | 'generic'
}

export function SessionButton({
  size = 'desktop',
  variant = 'generic',
}: SessionButtonProps) {
  const isAuthenticated = cookies().has('token')
  const user = getUser(isAuthenticated)

  const isHomeHeader = variant === 'home'
  const isDesktopSize = size === 'desktop'

  return (
    <Button
      componentType={Link}
      href={user ? '/perfil/trocas-pendentes' : '/login'}
      variant={isDesktopSize && isHomeHeader ? 'ghostWhite' : 'ghostPurple'}
      size="sm"
    >
      {user ? user.firstName : 'Entrar'}
    </Button>
  )
}
