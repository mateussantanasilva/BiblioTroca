import { SellerData } from './sellerData'

export interface BookSimpleData {
  id: string
  name: string
  author: string
  shortDescription: string
  category: string
  user: SellerData
}
