import { cookies } from 'next/headers'
import { getAuthentication } from '@/utils/auth'
import { PublicHeader } from '@/components/PublicHeader'
import { SessionButton } from '@/components/PublicHeader/SessionButton'
import { ContentBook } from './components/ContentBook'
import { Footer } from '@/components/Footer'

interface BookProps {
  params: {
    id: string
  }
}

export default function Book({ params }: BookProps) {
  const isAuthenticated = cookies().has('token')
  const { user, token } = getAuthentication(isAuthenticated)

  return (
    <div className="dark:bg-black">
      <PublicHeader>
        <SessionButton user={user} />
      </PublicHeader>

      <ContentBook bookId={params.id} userToken={token} />

      <Footer />
    </div>
  )
}
