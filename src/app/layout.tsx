import { barlow, inter } from './fonts'
import './globals.css'
import type { Metadata } from 'next'

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
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${barlow.variable}`}>
        {children}
      </body>
    </html>
  )
}
