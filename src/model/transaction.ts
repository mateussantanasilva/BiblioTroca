import { Book, booksDefault } from './book'
import { Client, clientsDefault } from './client'

export type Transaction = {
  id: string
  book: Book
  sellerCustomer: Client
  buyerCustomer: Client
  status: 'Pendente' | 'Cancelado' | 'Concluído'
  type: 'send' | 'receive'
  startDate: Date
  endDate: Date
}

export const transactionsDefault: Transaction[] = [
  {
    id: '1',
    book: booksDefault[0],
    sellerCustomer: clientsDefault[0],
    buyerCustomer: clientsDefault[1],
    status: 'Pendente',
    type: 'receive',
    startDate: new Date(2023, 3, 10),
    endDate: new Date(),
  },
  {
    id: '2',
    book: booksDefault[1],
    sellerCustomer: clientsDefault[0],
    buyerCustomer: clientsDefault[1],
    status: 'Concluído',
    type: 'send',
    startDate: new Date(2014, 10, 14),
    endDate: new Date(2023, 10, 17),
  },
  {
    id: '3',
    book: booksDefault[2],
    sellerCustomer: clientsDefault[1],
    buyerCustomer: clientsDefault[2],
    status: 'Pendente',
    type: 'send',
    startDate: new Date(),
    endDate: new Date(),
  },
]
