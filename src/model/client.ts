export type Client = {
  id: string
  name: string
  surname: string
  email: string
  cep: string
  telephone: string
  rating: number
}

export const clientsDefault: Client[] = [
  {
    id: '1',
    name: 'André Luiz',
    surname: 'da Silva Santos',
    email: 'andre.santos244@fatec.sp.gov.br',
    cep: '08240-590',
    telephone: '(11) 96850-0864',
    rating: 5,
  },
  {
    id: '2',
    name: 'Mateus',
    surname: 'Santana da Silva',
    email: 'teuszika2@gmail.com',
    cep: '08156-630',
    telephone: '(11) 94346-4488',
    rating: 4.7,
  },
]
