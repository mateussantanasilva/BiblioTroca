import { v4 as uuidv4 } from 'uuid'

export function generateArrayWithId(quantity: number) {
  const quantityToRepeat = [...Array(quantity)].map(() => uuidv4())

  return quantityToRepeat
}
