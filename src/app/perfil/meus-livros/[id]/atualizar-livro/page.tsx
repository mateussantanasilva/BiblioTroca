'use client'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { InputRadio } from '@/components/InputRadio'
import { Root } from '@radix-ui/react-radio-group'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { TextField, inputStyle } from '@/components/TextField'
import { useMySingleBook } from '@/hooks/useMySingleBook'
import { Skeleton } from '@/components/Skeleton'
import { generateArrayWithId } from '@/utils/generate-array-with-id'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

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

  const { register, handleSubmit } = useForm()

  const [output, setOutput] = useState('')

  function updateWish(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }

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
            <form
              onSubmit={handleSubmit(updateWish)}
              className="mx-auto flex max-w-[520px] flex-col gap-11"
            >
              <Card type="content" className="flex flex-col gap-4 py-8">
                <TextField label="Título" id="name">
                  <input {...register('name')} id="name" className="input" />
                </TextField>
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
              </Card>
              <Button className="lg:max-w-full">Atualizar</Button>
            </form>
          )}
        </section>
        <pre>{output}</pre>
      </main>
    </>
  )
}
