'use client'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { TextField } from '@/components/TextField'
import { Input } from '@/components/Input'
import { useForm } from 'react-hook-form'

export default function CreateWish() {
  const { register } = useForm()

  return (
    <>
      <Header className="pt-16 text-center">
        <Link
          href="/perfil/lista-desejos"
          className="absolute left-6 top-10 min-[768px]:hidden"
        >
          <Icon.ArrowLeft
            className="transition-transform duration-300 hover:scale-110 dark:text-yellow-500"
            size={24}
            weight="bold"
          />
        </Link>
        <h1 className="font-primary text-sm-160">Lista de Desejos</h1>
        <h2 className="font-secondary text-title-base">
          Cadastre um Livro que <br /> Deseja Obter
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="mx-auto -mt-12 max-w-5xl">
          <form className="mx-auto flex max-w-[540px] flex-col gap-10">
            <Card type="content" className="flex flex-col gap-4 py-8">
              <TextField label="Título" htmlFor="name">
                <Input id="name" {...register('name')} />
              </TextField>
              <TextField label="Autor" htmlFor="author">
                <Input id="author" {...register('author')} />
              </TextField>

              <TextField label="Categoria" htmlFor="category">
                <div className="select">
                  <Input
                    id="category"
                    componentType="select"
                    variant="select"
                    {...register('category')}
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
              </TextField>
            </Card>
            <Button className="lg:max-w-full" disabled>
              Cadastrar
            </Button>
          </form>
        </section>
      </main>
    </>
  )
}
