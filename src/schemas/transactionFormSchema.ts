import { z } from 'zod'

export const transactionFormSchema = z.object({
  status: z.string().nonempty('O Status é obrigatório'),
})

export type TransactionFormSchema = z.infer<typeof transactionFormSchema>
