import { SellerData } from './sellerData'

interface Seller extends SellerData {
  phoneNumber: string
}

export interface BookCompleteData {
  id: string
  name: string
  author: string
  category: string
  language: string
  year: string
  publishingCompany: string
  state: string
  description: string
  seller: Seller
  createdAt: string
}
