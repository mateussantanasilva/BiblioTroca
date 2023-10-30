'use client'

import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { useSingleBook } from '@/hooks/useSingleBook'
import { Skeleton } from '@/components/Skeleton'
import { useRouter } from 'next/navigation'

type PagePropos = {
  params: {
    id: string
  }
}

export default function Book({ params }: PagePropos) {
  const { data: book, isLoading, isError, isSuccess } = useSingleBook(params.id)

  const router = useRouter()
  isError && router.push('/perfil/meus-livros')

  return (
    <>
      <Header className="pt-16 text-center">
        <Link
          href="/perfil/meus-livros"
          className="absolute left-6 top-10 min-[768px]:hidden"
        >
          <Icon.ArrowLeft
            className="transition-transform duration-300 hover:scale-110 dark:text-yellow-500"
            size={24}
            weight="bold"
          />
        </Link>
        <h1 className="font-primary text-sm-160">Meus Livros</h1>
        <h2 className="font-secondary text-title-base">
          Detalhes do <br /> Livro
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="mx-auto -mt-12 max-w-5xl">
          {isLoading && (
            <Skeleton variant="cardContent" className="!block">
              <Skeleton variant="line" className="mb-3 w-[200px]" />
              <div className="mb-6 grid grid-cols-2">
                <div>
                  <Skeleton variant="line" className="mb-1 w-[60px]" />
                  <Skeleton variant="line" className="w-[80px]" />
                </div>
                <div>
                  <Skeleton variant="line" className="mb-1 w-[60px]" />
                  <Skeleton variant="line" className="w-[80px]" />
                </div>
              </div>
              <div className="mb-6 grid grid-cols-2">
                <div>
                  <Skeleton variant="line" className="mb-1 w-[60px]" />
                  <Skeleton variant="line" className="w-[80px]" />
                </div>
                <div>
                  <Skeleton variant="line" className="mb-1 w-[60px]" />
                  <Skeleton variant="line" className="w-[80px]" />
                </div>
              </div>
              <div className="mb-6">
                <Skeleton variant="line" className="mb-1 w-[60px]" />
                <Skeleton variant="line" className="w-[80px]" />
              </div>
              <Skeleton variant="line" className="mb-1 w-[80px]" />
              <Skeleton variant="line" className="mb-1 !gap-1" quantity={4} />
            </Skeleton>
          )}
          {isSuccess && (
            <Card type="content">
              <p className="mb-3 text-base-140-md">
                Escrito por {book?.author}
              </p>
              <div className="mb-4">
                <p className="mb-1 text-base-140-md">Categoria</p>
                <span className="rounded-lg border-[1px] border-primary-500 px-2 py-1 text-xs-140 text-primary-500 dark:border-white dark:text-white">
                  {book?.category}
                </span>
              </div>
              <div className="mb-4 grid grid-cols-2">
                <div>
                  <p className="text-base-140-md">Idioma</p>
                  <p>{book?.language}</p>
                </div>
                <div>
                  <p className="text-base-140-md">Ano</p>
                  <p>{book?.year}</p>
                </div>
              </div>
              <div className="mb-4 grid grid-cols-2">
                <div>
                  <p className="text-base-140-md">Editora</p>
                  <p>{book?.publishingCompany}</p>
                </div>
                <div>
                  <p className="text-base-140-md">Condição do livro</p>
                  <p>{book?.state}</p>
                </div>
              </div>
              <p className="text-base-140-md">Descrição</p>
              <p>{book?.description}</p>
            </Card>
          )}
        </section>
      </main>
    </>
  )
}
