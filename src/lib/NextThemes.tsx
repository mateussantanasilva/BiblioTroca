'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

interface ThemesProviderProps {
  children: ReactNode
}

export function ThemesProvider({ children }: ThemesProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      themes={['light', 'dark']}
      defaultTheme="light"
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  )
}
