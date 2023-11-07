import type { Metadata } from 'next'
import { ThemesProvider } from '@/lib/NextThemes'
import { QueryProvider } from '@/lib/ReactQuery'
import { VLibrasPlugin } from '@/components/VLibrasPlugin'
import { MotionConfigs } from '@/lib/FramerMotion'
import { barlow, inter } from '@/styles/fonts'
import Hotjar from '@hotjar/browser'
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
  const siteId = 3725678
  const hotjarVersion = 6

  Hotjar.init(siteId, hotjarVersion)

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
