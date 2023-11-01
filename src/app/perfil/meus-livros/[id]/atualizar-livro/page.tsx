'use client'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { InputRadio } from '@/components/InputRadio'
import { Root } from '@radix-ui/react-radio-group'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { TextField } from '@/components/TextField'
import { useMySingleBook } from '@/hooks/useMySingleBook'
import { Skeleton } from '@/components/Skeleton'
import { generateArrayWithId } from '@/utils/generate-array-with-id'
import { useRouter } from 'next/navigation'

type PagePropos = {
  params: {
    id: string
  }
}

export default function Book({ params }: PagePropos) {
  const {
    data: book,
    isLoading,
    isSuccess,
    isError,
  } = useMySingleBook(params.id)

  const quantityToRepeat = generateArrayWithId(5)

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
          Edite os Dados <br /> Do Livro
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="mx-auto -mt-12 max-w-5xl">
          {isLoading && (
            <div className="mx-auto flex max-w-[520px] flex-col gap-11">
              <Skeleton
                variant="card"
                size="content"
                className="flex flex-col gap-4 py-8"
              >
                {quantityToRepeat.map((item) => (
                  <div className="flex flex-col gap-1" key={item}>
                    <Skeleton variant="line" className="w-20" />
                    <Skeleton variant="line" className="h-[55px]" />
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <Skeleton variant="line" className="w-20" />
                  <Skeleton variant="line" size="inputRadioSm" quantity={3} />
                </div>
                <div className="flex flex-col gap-1">
                  <Skeleton variant="line" className="w-20" />
                  <Skeleton variant="line" className="h-[55px]" />
                </div>
                <div className="flex flex-col gap-1">
                  <Skeleton variant="line" className="w-20" />
                  <Skeleton variant="line" className="h-28" />
                </div>
              </Skeleton>
              <Skeleton
                variant="line"
                className="animate-pulse"
                size="button"
              />
            </div>
          )}
          {isSuccess && (
            <form className="mx-auto flex max-w-[520px] flex-col gap-11">
              <Card type="content" className="flex flex-col gap-4 py-8">
                <TextField
                  label="Título"
                  id="name"
                  name="name"
                  defaultValue={book?.name}
                  clear
                />
                <TextField
                  label="Autor"
                  id="author"
                  name="author"
                  defaultValue={book?.author}
                  clear
                />
                <TextField
                  label="Categoria"
                  id="category"
                  name="category"
                  defaultValue={book?.category}
                  clear
                />
                <TextField
                  label="Editora"
                  id="publishingCompany"
                  name="publishingCompany"
                  defaultValue={book?.publishingCompany}
                  clear
                />
                <TextField
                  label="Ano de Lançamento"
                  id="year"
                  name="year"
                  defaultValue={book?.year}
                  clear
                />
                <div>
                  <label className="mb-1 text-base-140-md">
                    Condição do livro
                  </label>
                  <Root className="grid gap-2" defaultValue="good">
                    <InputRadio
                      title="Novo"
                      value="new"
                      text="Lido apenas uma vez ou poucas vezes, sem marcas"
                      id="new"
                    />
                    <InputRadio
                      title="Bom"
                      value="good"
                      text="Pode ter algumas marcas leves de manuseio, sem rasuras."
                      id="good"
                    />
                    <InputRadio
                      title="Desgastado"
                      value="worn-out"
                      text="Bastante usado, com várias marcas de uso e anotações."
                      id="worn-out"
                    />
                  </Root>
                </div>
                <TextField
                  label="Idioma"
                  id="language"
                  name="language"
                  defaultValue={book?.language}
                  clear
                />
                <TextField
                  label="Descrição"
                  id="description"
                  name="description"
                  defaultValue={book?.description}
                  componentType="textarea"
                  className="h-28 resize-none overflow-auto"
                  clear
                />
              </Card>
              <Button className="lg:max-w-full" disabled>
                Atualizar
              </Button>
            </form>
          )}
        </section>
      </main>
    </>
  )
}
