'use client'

import { useRouter } from 'next/navigation'
import { useSingleBook } from '@/hooks/useSingleBook'
import { Footer } from '@/components/Footer'
import { PublicHeader } from '@/components/PublicHeader'
import { DetailsSkeleton } from './components/DetailsSkeleton'
import { RequestSkeleton } from './components/RequestSkeleton'
import { DetailsBook } from './components/DetailsBook'
import { RequestBook } from './components/RequestBook'

interface BookProps {
  params: {
    id: string
  }
}

export default function Book({ params }: BookProps) {
  const { data: book, isLoading, isSuccess, isError } = useSingleBook(params.id)

  const router = useRouter()
  isError && router.push('/livros')

  return (
    <div className="dark:bg-black">
      <PublicHeader />

      <main className="mx-auto mb-9 grid max-w-[73rem] grid-cols-1 gap-4 px-6 md:grid-cols-book">
        {isLoading && (
          <>
            <DetailsSkeleton />

            <RequestSkeleton />
          </>
        )}

        {isSuccess && (
          <>
            <DetailsBook book={book} />

            <RequestBook book={book} />
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
