'use client'

import { UserToken } from '@/@types/UserToken'
import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextType {
  user: UserToken | null
  token: string | null
  createUser: (tokuseren: UserToken | null) => void
  createToken: (token: string | null) => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<UserToken | null>(null)

  function createToken(token: string | null) {
    setToken(token)
  }

  function createUser(user: UserToken | null) {
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{ user, createUser, token, createToken }}>
      {children}
    </AuthContext.Provider>
  )
}
