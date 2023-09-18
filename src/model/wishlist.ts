export type Wishlist = {
  id: string
  title: string
  author: string
  studyArea: string
  createdAt: Date
}

export const wishlistDefault: Wishlist[] = [
  {
    id: '1',
    title: 'Clean Code',
    author: 'Robert Cecil Martin',
    studyArea: 'Tecnologia',
    createdAt: new Date(),
  },
]
