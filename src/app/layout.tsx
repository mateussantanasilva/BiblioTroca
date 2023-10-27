'use client'

import type { Metadata } from 'next'
import { ThemesProvider } from '@/lib/NextThemes'
import { QueryProvider } from '@/lib/ReactQuery'
import { VLibrasPlugin } from '@/components/VLibrasPlugin'
import { MotionConfigs } from '@/lib/FramerMotion'
import { barlow, inter } from '@/styles/fonts'
import { useEffect } from 'react'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'BiblioTroca',
  description: 'Plataforma de Troca de Livros Educacionais',
  authors: [
    {
      name: 'André Luiz da Silva Santos',
      url: 'https://github.com/eoAndrelz',
    },
    {
      name: 'Guilherme Gonçalves Ferreira da Silva',
      url: 'https://github.com/guilhermegg8',
    },
    {
      name: 'Gustavo Nascimento Souza',
      url: 'https://github.com/Gustavo-Nasc',
    },
    {
      name: 'Leonardo Alex Cajé',
      url: 'https://github.com/leocaje',
    },
    {
      name: 'Mateus Santana da Silva',
      url: 'https://github.com/mateussantanasilva',
    },
    {
      name: 'Pedro Beverglieri Pessina',
      url: 'https://github.com/Pessinaaa',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const window: MouseFlowWindow = {
      _mfq: undefined,
    }

    window._mfq = []
    ;(function () {
      const mf = document.createElement('script')
      mf.type = 'text/javascript'
      mf.defer = true
      mf.src =
        '//cdn.mouseflow.com/projects/e7dc990a-dfab-4866-b15f-1e442cd97f62'
      document.getElementsByTagName('head')[0].appendChild(mf)
    })()
  }, [])

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`antialiased ${inter.variable} ${barlow.variable} bg-white-200 dark:bg-black`}
      >
        <MotionConfigs>
          <VLibrasPlugin />

          <ThemesProvider>
            <QueryProvider>{children}</QueryProvider>
          </ThemesProvider>
        </MotionConfigs>
      </body>
    </html>
  )
}
