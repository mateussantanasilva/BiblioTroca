'use client'

import { BooksQueryProvider } from '@/contexts/BooksQueryContext'

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <BooksQueryProvider>{children}</BooksQueryProvider>
}
