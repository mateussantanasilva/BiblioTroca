import { z } from 'zod'

export const bookFormSchema = z.object({
  name: z
    .string()
    .nonempty('O Título é obrigatório')
    .min(5, { message: 'O Título precisa conter no mínimo 5 caracteres' }),
  author: z
    .string()
    .nonempty('O Autor é obrigatório')
    .min(5, 'O Autor precisa conter no mínimo 5 caracteres'),
  category: z.string().nonempty('A Categoria é obrigatória'),
  publishingCompany: z
    .string()
    .nonempty('A Editora é obrigatória')
    .min(5, 'A Editora precisa conter no mínimo 5 caracteres'),
  state: z.string().nonempty('A condição do livro é obrigatória'),
  language: z
    .string()
    .nonempty('O Idioma é obrigatório')
    .min(5, 'O Idioma deve conter no mínimo 5 caracteres'),
  year: z.preprocess(
    (yearNumber) => Number(yearNumber),
    z
      .number()
      .gte(1970, 'Ano do Livro deve ser maior ou igual a 1970')
      .lte(
        new Date().getFullYear(),
        `Ano do Livro deve ser menor ou igual a ${new Date().getFullYear()}`,
      ),
  ),
  description: z
    .string()
    .nonempty('A Descrição é obrigatória')
    .min(15, 'A Descrição deve conter no mínimo 15 caracteres'),
})

export type BookFormSchema = z.infer<typeof bookFormSchema>
