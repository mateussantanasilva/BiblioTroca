import { booksDefault } from '@/model/book'
import { transactionsDefault } from '@/model/transaction'
import { wishlistDefault } from '@/model/wishlist'

let pendingTransactionsSize = 0
let historySize = 0
const myBooksSize = booksDefault.length
const wishListSize = wishlistDefault.length

transactionsDefault.forEach((transaction) => {
  transaction.status === 'Pendente' ? pendingTransactionsSize++ : historySize++
})

export { pendingTransactionsSize, historySize, myBooksSize, wishListSize }
