export type Wishlist = {
  id: string
  title: string
  author: string
  studyArea: string
  createdAt: Date
}

export const listDefault: Wishlist[] = [
  {
    id: '1',
    title: 'Use a Cabeça: Java',
    author: 'Carlos',
    studyArea: 'Tecnologia',
    createdAt: new Date(),
  },
]
