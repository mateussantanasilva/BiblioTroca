import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'

interface BooksQueryProviderProps {
  children: ReactNode
}

interface BooksQueryContextType {
  query: string | undefined
  createQuery: (query: string) => void
}

export const BooksQueryContext = createContext({} as BooksQueryContextType)

export function BooksQueryProvider({ children }: BooksQueryProviderProps) {
  const [query, setQuery] = useState<string | undefined>(undefined)

  function createQuery(query: string) {
    setQuery(query)
  }

  return (
    <BooksQueryContext.Provider value={{ query, createQuery }}>
      {children}
    </BooksQueryContext.Provider>
  )
}
