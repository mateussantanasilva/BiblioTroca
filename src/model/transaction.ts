import { Book } from './book'

export type Transaction = {
  id: string
  book: Book
  sellerCustomerId: string
  buyerCustomerId: string
  status: 'Pendente' | 'Cancelado' | 'Concluído'
  type: 'send' | 'receive'
  startDate: Date
  endDate: Date
}

export const transactionsDefault: Transaction[] = []
