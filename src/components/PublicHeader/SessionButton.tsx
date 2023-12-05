import Link from 'next/link'
import { UserToken } from '@/@types/UserToken'
import { Button } from '../Button'

interface SessionButtonProps {
  size?: 'desktop' | 'mobile'
  variant?: 'home' | 'generic'
  user: UserToken | null
}

export function SessionButton({
  size = 'desktop',
  variant = 'generic',
  user,
}: SessionButtonProps) {
  const isHomeHeader = variant === 'home'
  const isDesktopSize = size === 'desktop'

  return (
    <>
      {isDesktopSize && (
        <Button
          componentType={Link}
          href={user ? '/perfil/trocas-pendentes' : '/login'}
          variant={isHomeHeader ? 'ghostWhite' : 'ghostPurple'}
          size="sm"
        >
          {user ? user.firstName : 'Entrar'}
        </Button>
      )}

      {!isDesktopSize && (
        <Button
          componentType={Link}
          href={user ? '/perfil/trocas-pendentes' : '/login'}
        >
          {user ? user.firstName : 'Entrar'}
        </Button>
      )}
    </>
  )
}
