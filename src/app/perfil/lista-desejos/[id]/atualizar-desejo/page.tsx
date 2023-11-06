'use client'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import * as Icon from '@phosphor-icons/react'
import Link from 'next/link'
import { TextField } from '@/components/TextField'
import { useSingleWish } from '@/hooks/useSingleWish'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@/components/Skeleton'
import { generateArrayWithId } from '@/utils/generate-array-with-id'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/Input'
import { motion } from 'framer-motion'

type PagePropos = {
  params: {
    id: string
  }
}

export default function UpdateWish({ params }: PagePropos) {
  const { data: wish, isLoading, isSuccess, isError } = useSingleWish(params.id)

  const router = useRouter()
  isError && router.push('/perfil/lista-desejos')

  const { register } = useForm()

  const quantityToRepeat = generateArrayWithId(3)

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
          Edite os Dados <br /> Do Livro
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-10">
        <section className="mx-auto -mt-12 max-w-5xl">
          {isLoading && (
            <div className="mx-auto flex max-w-[540px] flex-col gap-10">
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
              </Skeleton>
              <Skeleton
                variant="line"
                className="animate-pulse"
                size="button"
              />
            </div>
          )}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              <form className="mx-auto flex max-w-[540px] flex-col gap-10">
                <Card type="content" className="flex flex-col gap-4 py-8">
                  <TextField label="Título" htmlFor="name">
                    <Input
                      id="name"
                      defaultValue={wish?.name}
                      {...register('name')}
                    />
                  </TextField>
                  <TextField label="Autor" htmlFor="author">
                    <Input
                      id="author"
                      defaultValue={wish?.name}
                      {...register('author')}
                    />
                  </TextField>

                  <TextField label="Categoria" htmlFor="category">
                    <div className="select">
                      <Input
                        componentType="select"
                        variant="select"
                        defaultValue={wish?.category}
                        id="category"
                        {...register('category')}
                      >
                        <option selected disabled>
                          Selecione...
                        </option>
                        <option value="Biologia">Ciências Biológicas</option>
                        <option value="Engenharia">Engenharias</option>
                        <option value="Medicina">Ciências da Saúde</option>
                        <option value="Ciência Agrária">
                          Ciências Agrárias
                        </option>
                        <option value="Linguística">
                          Linguística, Letras e Artes
                        </option>
                        <option value="Sociologia">
                          Ciências Sociais Aplicadas
                        </option>
                        <option value="Humanas">Ciências Humanas</option>
                        <option value="Exatas">
                          Ciências Exatas e da Terra
                        </option>
                      </Input>
                      <Icon.CaretDown
                        size={20}
                        className="absolute right-3 top-[calc(50%-10px)] z-[1]"
                      />
                    </div>
                  </TextField>
                </Card>
                <Button className="lg:max-w-full" disabled>
                  Atualizar
                </Button>
              </form>
            </motion.div>
          )}
        </section>
      </main>
    </>
  )
}
