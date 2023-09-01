import { clientsDefault } from './client'

export type Rating = {
  id: string
  clientId: string
  score: number
  evaluationDate: Date
}

export const ratingsDefault: Rating[] = [
  {
    id: '1',
    clientId: clientsDefault[1].id,
    score: 1,
    evaluationDate: new Date(),
  },
  {
    id: '2',
    clientId: clientsDefault[0].id,
    score: 5,
    evaluationDate: new Date(),
  },
  {
    id: '3',
    clientId: clientsDefault[0].id,
    score: 3,
    evaluationDate: new Date(),
  },
]
