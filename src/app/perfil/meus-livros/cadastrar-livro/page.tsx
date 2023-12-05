'use client'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { InputRadio } from '@/components/InputRadio'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { TextField } from '@/components/TextField'
import { Input } from '@/components/Input'
import { useForm } from 'react-hook-form'
import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { BookFormSchema, bookFormSchema } from '@/schemas/bookFormSchema'
import { SpanError } from '@/components/SpanError'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function CreateBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormSchema>({ resolver: zodResolver(bookFormSchema) })

  const router = useRouter()

  const email = Cookies.get('bibliotroca.userEmail')

  async function createBook(data: BookFormSchema) {
    const response = await api.post(`/usuarios/${email}/cadastrar-livro`, {
      name: data.name,
      author: data.author,
      field: data.category,
      language: data.language,
      edition: data.year.toString(),
      description: data.description,
      publishingCompany: data.publishingCompany,
      state: data.state,
    })

    console.log(response)
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
          Cadastre um <br /> Novo Livro
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="mx-auto -mt-12 max-w-5xl">
          <form
            className="mx-auto flex max-w-[540px] flex-col gap-11"
            onSubmit={handleSubmit(createBook)}
          >
            <Card type="content" className="flex flex-col gap-4 py-8">
              <TextField label="Título" htmlFor="name">
                <Input id="name" name="name" register={register} />
                {errors.name && <SpanError>{errors.name.message}</SpanError>}
              </TextField>
              <TextField label="Autor" htmlFor="author">
                <Input id="author" name="author" register={register} />
                {errors.author && (
                  <SpanError>{errors.author.message}</SpanError>
                )}
              </TextField>
              <TextField label="Categoria" htmlFor="category">
                <div className="select">
                  <Input
                    componentType="select"
                    variant="select"
                    id="category"
                    name="category"
                    register={register}
                  >
                    <option selected disabled>
                      Selecione...
                    </option>
                    <option value="Biologia">Ciências Biológicas</option>
                    <option value="Engenharia">Engenharias</option>
                    <option value="Medicina">Ciências da Saúde</option>
                    <option value="Ciência Agrária">Ciências Agrárias</option>
                    <option value="Linguística">
                      Linguística, Letras e Artes
                    </option>
                    <option value="Sociologia">
                      Ciências Sociais Aplicadas
                    </option>
                    <option value="Humanas">Ciências Humanas</option>
                    <option value="Exatas">Ciências Exatas e da Terra</option>
                  </Input>
                  <Icon.CaretDown
                    size={20}
                    className="absolute right-3 top-[calc(50%-10px)] z-[1]"
                  />
                </div>
                {errors.category && (
                  <SpanError>{errors.category.message}</SpanError>
                )}
              </TextField>
              <TextField label="Editora" htmlFor="publishingCompany">
                <Input
                  id="publishingCompany"
                  name="publishingCompany"
                  register={register}
                />
                {errors.publishingCompany && (
                  <SpanError>{errors.publishingCompany.message}</SpanError>
                )}
              </TextField>
              <TextField label="Ano de Lançamento" htmlFor="year">
                <Input
                  id="year"
                  name="year"
                  type="number"
                  register={register}
                  className="appearance-none"
                />
              </TextField>
              {errors.year && <SpanError>{errors.year.message}</SpanError>}
              <div>
                <p className="mb-1 text-base-140-md">Condição do Livro</p>
                <div className="flex flex-col gap-3">
                  <Input
                    id="new"
                    value="Lido apenas uma ou poucas vezes, sem marcas."
                    type="radio"
                    data-type="radio"
                    register={register}
                    name="state"
                  />
                  <InputRadio
                    title="Novo"
                    text="Lido apenas uma ou poucas vezes, sem marcas."
                    htmlFor="new"
                  />
                  <Input
                    id="good"
                    value="Pode ter algumas marcas leves de manuseio, sem rasuras."
                    type="radio"
                    data-type="radio"
                    register={register}
                    name="state"
                  />
                  <InputRadio
                    title="Bom"
                    text="Pode ter algumas marcas leves de manuseio, sem rasuras."
                    htmlFor="good"
                  />
                  <Input
                    id="warn-out"
                    value="Bastante usado, com várias marcas de uso e anotações."
                    type="radio"
                    data-type="radio"
                    register={register}
                    name="state"
                  />
                  <InputRadio
                    title="Desgastado"
                    text="Bastante usado, com várias marcas de uso e anotações."
                    htmlFor="warn-out"
                  />
                </div>
                {errors.state && <SpanError>{errors.state.message}</SpanError>}
              </div>
              <TextField label="Idioma" htmlFor="language">
                <Input id="language" name="language" register={register} />
                {errors.language && (
                  <SpanError>{errors.language.message}</SpanError>
                )}
              </TextField>
              <TextField label="Descrição" htmlFor="description">
                <Input
                  variant="textarea"
                  componentType="textarea"
                  id="description"
                  name="description"
                  register={register}
                />
                {errors.description && (
                  <SpanError>{errors.description.message}</SpanError>
                )}
              </TextField>
            </Card>
            <Button className="lg:max-w-full">Cadastrar</Button>
          </form>
        </section>
      </main>
    </>
  )
}
