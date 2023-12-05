import { BookCompleteData } from './bookCompleteData'
import { SellerData } from './sellerData'

interface BuyerData {
  id: string
  name: string
  surname: string
  email: string
  phoneNumber: string
  location: string
  averageRating: number
  avaliationsNumber: number
}

export interface TransactionData {
  id: string
  seller: SellerData
  buyer: BuyerData
  bookDetails: BookCompleteData
  createdAt: string
  endedAt: string
  status: 'CANCELADO' | 'CONCLUÍDO' | 'PENDENTE'
  type: string
}
