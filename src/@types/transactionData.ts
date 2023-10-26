import { BookCompleteData } from './bookCompleteData'

interface Buyer {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

export interface TransactionData {
  id: string
  status: 'Pendente' | 'Concluído' | 'Cancelado'
  type: 'send' | 'receive'
  createdAt: string
  bookDetails: BookCompleteData
  buyer: Buyer
}
