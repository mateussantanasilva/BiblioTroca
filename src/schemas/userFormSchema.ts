import { z } from 'zod'

export const userFormSchema = z.object({
  phoneNumber: z
    .string()
    .length(11, 'O Telefone deve conter 11 caracteres. Ex: 11987654321')
    .nonempty('O Telefone é obrigatório'),
  location: z
    .string()
    .length(8, 'O CEP deve conter 8 caracteres. Ex: 01153000')
    .nonempty('O CEP é obrigatório'),
})

export type UserFormSchema = z.infer<typeof userFormSchema>
