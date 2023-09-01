export type Book = {
  id: string
  title: string
  author: string
  studyArea: string
  language: string
  year: number
  description: string
  publishingCompany: string
  bookCondition: 'Novo' | 'Seminovo' | 'Usado'
  amountPoints: 20
}

export const booksDefault: Book[] = []
