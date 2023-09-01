export type Exchange = {
  id: string
  bookTitle: string
  sender: string
  amountPoints: number
  date: Date
  status: 'Pendente' | 'Cancelado' | 'Concluído'
  type: 'send' | 'receive'
}

export const exchangesDefault: Exchange[] = [
  {
    id: 'b36f52',
    bookTitle: 'Clean Code',
    sender: 'Pedro',
    amountPoints: 60,
    date: new Date(),
    status: 'Pendente',
    type: 'send',
  },
  {
    id: 'a8c21f',
    bookTitle: 'C++',
    sender: 'André',
    amountPoints: 80,
    date: new Date(),
    status: 'Concluído',
    type: 'receive',
  },
]
