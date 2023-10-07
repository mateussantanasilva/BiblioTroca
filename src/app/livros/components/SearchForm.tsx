'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/Button'
import { MagnifyingGlass } from '@phosphor-icons/react'

interface SearchFormProps {
  createQuery: (query: string) => void
}

const searchFormSchema = z.object({
  query: z.string(),
})
type SearchFormData = z.infer<typeof searchFormSchema>

export function SearchForm({ createQuery }: SearchFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleFilterBooks({ query }: SearchFormData) {
    createQuery(query)
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilterBooks)}
      className="flex items-center gap-1"
    >
      <input
        type="text"
        placeholder="Busque por um livro, autor ou categoria."
        aria-label="Filtrar livros por nome, autor ou categoria."
        {...register('query')}
        className="w-[100%] max-w-md rounded-lg border-[1px] border-gray-300 bg-white-100 p-4 font-primary outline-none placeholder:font-primary placeholder:text-base-140 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500 dark:bg-black dark:placeholder:text-white dark:focus:ring-white"
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        variant="ghostPurple"
        size="sm"
        aria-label="Buscar livros"
        className="p-4"
      >
        <MagnifyingGlass size={'1.4rem'} weight="bold" />
      </Button>
    </form>
  )
}
