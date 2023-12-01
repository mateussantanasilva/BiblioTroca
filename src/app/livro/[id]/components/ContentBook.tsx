'use client'

import { useRouter } from 'next/navigation'
import { useContextSelector } from 'use-context-selector'
import { AuthContext } from '@/contexts/AuthContext'
import { useSingleBook } from '@/hooks/useSingleBook'
import { DetailsSkeleton } from './DetailsSkeleton'
import { RequestSkeleton } from './RequestSkeleton'
import { DetailsBook } from './DetailsBook'
import { RequestBook } from './RequestBook'

interface ContentBookProps {
  bookId: string
  userToken: string | null
}

export function ContentBook({ bookId, userToken }: ContentBookProps) {
  const createToken = useContextSelector(AuthContext, (context) => {
    return context.createToken
  })
  createToken(userToken)

  const { data: book, isLoading, isSuccess, isError } = useSingleBook(bookId)

  const router = useRouter()
  isError && router.push('/livros')

  return (
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
  )
}
