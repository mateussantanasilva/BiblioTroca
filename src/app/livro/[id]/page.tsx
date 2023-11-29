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
  return (
    <div className="dark:bg-black">
      <PublicHeader>
        <SessionButton />
      </PublicHeader>

      <ContentBook bookId={params.id} />

      <Footer />
    </div>
  )
}
