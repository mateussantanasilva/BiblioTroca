import { PublicHeader } from '@/components/PublicHeader'
import { SessionButton } from '@/components/PublicHeader/SessionButton'
import { HeroBanner } from './components/HeroBanner'
import { BookList } from './components/BookList'
import { Footer } from '@/components/Footer'

export default function Books() {
  return (
    <div className="dark:bg-black">
      <PublicHeader>
        <SessionButton />
      </PublicHeader>

      <main className="mx-auto max-w-[73rem]">
        <HeroBanner />

        <BookList />
      </main>

      <Footer />
    </div>
  )
}
