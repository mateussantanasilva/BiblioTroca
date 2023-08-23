import { Barlow, Inter } from 'next/font/google'

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-secondary',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
})
