import { BookCompleteData } from './bookCompleteData'

interface Buyer {
  firstName: string
  lastName: string
  email: string
  averageRating: number
  avaliationsNumber: number
  phoneNumber: string
}

export interface TransactionData {
  id: string
  status: 'Pendente' | 'Concluído' | 'Cancelado'
  type: 'send' | 'receive'
  createdAt: string
  endedAt: string
  bookDetails: BookCompleteData
  buyer: Buyer
}
