'use client'

import Image from 'next/image'
import { Card } from '@/components/Card'
import { SearchForm } from './SearchForm'

import SeachBooksImage from '@/assets/search-books.png'
import { useContextSelector } from 'use-context-selector'
import { QueryContext } from '@/contexts/QueryContext'

export function HeroBanner() {
  const createQuery = useContextSelector(QueryContext, (context) => {
    return context.createQuery
  })

  return (
    <Card
      componentType="section"
      type="content"
      className="mx-6 flex justify-between overflow-hidden p-0 text-gray-500"
    >
      <div className="px-4 py-5">
        <h2 className="mb-3 font-secondary text-title-lg">
          Explore Livros Disponíveis
        </h2>
        <p className="mb-10 max-w-[38.063rem] text-lg-140">
          Encontre e inicie uma jornada de trocas para expandir sua biblioteca e
          compartilhar conhecimento.
        </p>

        <SearchForm createQuery={createQuery} />
      </div>

      <Image
        src={SeachBooksImage}
        alt="Livros empilhados"
        width={342}
        priority
        className="hidden md:block"
      />
    </Card>
  )
}
