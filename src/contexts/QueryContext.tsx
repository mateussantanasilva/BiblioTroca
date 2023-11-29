import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'

interface QueryProviderProps {
  children: ReactNode
}

interface QueryContextType {
  query: string | undefined
  createQuery: (query: string) => void
}

export const QueryContext = createContext({} as QueryContextType)

export function QueryProvider({ children }: QueryProviderProps) {
  const [query, setQuery] = useState<string | undefined>(undefined)

  function createQuery(query: string) {
    setQuery(query)
  }

  return (
    <QueryContext.Provider value={{ query, createQuery }}>
      {children}
    </QueryContext.Provider>
  )
}
