import { Barlow, Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-primary',
})

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-secondary',
})
