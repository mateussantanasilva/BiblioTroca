export type Exchange = {
  bookTitle: string
  sender: string
  amountPoints: number
  date: Date
  status: 'Pendente' | 'Cancelado' | 'Concluído'
}

export const exchangesDefault: Exchange[] = [
  {
    bookTitle: 'Clean Code',
    sender: 'Pedro',
    amountPoints: 60,
    date: new Date(),
    status: 'Pendente',
  },
]
