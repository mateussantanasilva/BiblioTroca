import { cookies } from 'next/headers'
import { getAuthentication } from '@/utils/auth'
import { PublicHeader } from '@/components/PublicHeader'
import { SessionButton } from '@/components/PublicHeader/SessionButton'
import { HeroBanner } from './components/HeroBanner'
import { BookList } from './components/BookList'
import { Footer } from '@/components/Footer'

export default function Books() {
  const isAuthenticated = cookies().has('token')
  const { user } = getAuthentication(isAuthenticated)

  return (
    <div className="dark:bg-black">
      <PublicHeader>
        <SessionButton user={user} />
      </PublicHeader>

      <main className="mx-auto max-w-[73rem]">
        <HeroBanner />

        <BookList />
      </main>

      <Footer />
    </div>
  )
}
