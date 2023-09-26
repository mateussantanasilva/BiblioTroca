'use client'

import { ModalProvider } from '@/contexts/ModalContext'

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ModalProvider>{children}</ModalProvider>
}
