import { z } from 'zod'

export const wishFormSchema = z.object({
  name: z
    .string()
    .nonempty('O Título é obrigatório')
    .min(5, 'O Título deve possuir no mínimo 5 caracteres'),
  author: z
    .string()
    .nonempty('O Autor é obrigatório')
    .min(5, 'O Autor deve possuir no mínimo 5 caracteres'),
  category: z.string().nonempty('A Categoria é obrigatória'),
})

export type WishFormSchema = z.infer<typeof wishFormSchema>
