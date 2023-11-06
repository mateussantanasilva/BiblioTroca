import { SellerData } from './sellerData'

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
  createdAt: string
  seller: SellerData
}
