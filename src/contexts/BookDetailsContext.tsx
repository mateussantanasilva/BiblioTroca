import { useParams } from 'next/navigation'
import { ReactNode } from 'react'
import { createContext } from 'use-context-selector'

interface BookDetailsProviderProps {
  children: ReactNode
}

interface BookDetailsContextType {
  book: string
}

export const BookDetailsContext = createContext({} as BookDetailsContextType)

export function BookDetailsProvider({ children }: BookDetailsProviderProps) {
  const book = ''

  return (
    <BookDetailsContext.Provider value={{ book }}>
      {children}
    </BookDetailsContext.Provider>
  )
}
