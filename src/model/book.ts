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
  createdAt: Date
}

export const booksDefault: Book[] = [
  {
    id: '1',
    title: 'Use a Cabeça: Java',
    author: 'Kathy Sierra & Bert Bates',
    studyArea: 'Tecnologia',
    language: 'Português (Brasil)',
    year: 2003,
    description:
      'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java',
    publishingCompany: 'Alta Books',
    bookCondition: 'Seminovo',
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Use a Cabeça: C#',
    author: 'Andrew Stellman & Jennifer Greene',
    studyArea: 'Tecnologia',
    language: 'Português (Brasil)',
    year: 2007,
    description:
      'O Use a Cabeça: C# é uma experiência completa de aprendizagem para a programação com C#, .NET Framework e IDE Visual Studio',
    publishingCompany: 'Alta Books',
    bookCondition: 'Novo',
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'Use a Cabeça: Python',
    author: 'Paul Barry',
    studyArea: 'Tecnologia',
    language: 'Português (Brasil)',
    year: 2018,
    description:
      'Com o Use a Cabeça! Python, você entenderá rapidamente os fundamentos do Python trabalhando com estruturas de dados e funções predefinidas. Então poderá construir seu próprio aplicativo web explorando o gerenciamento do banco de dados, tratamento de exceções e administração dos dados',
    publishingCompany: 'Alta Books',
    bookCondition: 'Novo',
    createdAt: new Date(2023, 4, 15),
  },
]
