'use client'

import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { TextField } from '@/components/TextField'
import { FocusEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Icon from '@phosphor-icons/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { ViaCEPData } from '@/@types/viaCepData'
import { Input } from '@/components/Input'

export default function CompleteProfile() {
  const [bairro, setBairro] = useState<string | undefined>('')
  const [cidade, setCidade] = useState<string | undefined>('')

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const { register } = useForm()

  function checkCep(cep: string) {
    setIsLoading(true)
    axios
      .get<ViaCEPData>(`https://viacep.com.br/ws/${cep}/json`)
      .then(({ data: { bairro, localidade } }) => {
        setBairro(bairro)
        setCidade(localidade)
        setIsError(false)
      })
      .catch(
        (error) => error && (setIsError(true), setBairro(''), setCidade('')),
      )
      .finally(() => setIsLoading(false))
  }

  const router = useRouter()

  return (
    <>
      <Header className="h-[300px]">
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-primary text-sm-140">Cadastro</h1>
          <h2 className="text-center font-secondary text-title-base">
            Complete seu <br /> perfil
          </h2>
        </div>
      </Header>
      <main className="relative z-[2] px-6 pb-12 font-primary">
        <form
          action="/perfil/trocas-pendentes"
          onSubmit={(e) => {
            e.preventDefault()
            router.push('/perfil/trocas-pendentes')
          }}
          className="mx-auto flex w-full max-w-[540px] flex-col gap-10"
        >
          <div className="mx-auto -mt-24 w-full rounded-lg bg-white px-6 pb-8 shadow-container dark:border-2 dark:border-white dark:bg-black md:-mt-28">
            <Avatar
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              name="Ana Clara"
              className="mb-4 ml-[50%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 border-2 border-white md:h-32 md:w-32"
            />
            <div className="-mt-10 md:-mt-16">
              <p className="mb-8 text-center font-secondary text-title-base">
                Ana Clara
              </p>
              <div className="flex flex-col gap-4">
                <TextField label="Email" htmlFor="email">
                  <Input
                    type="text"
                    id="email"
                    className="cursor-not-allowed text-gray-400 focus:ring-0"
                    value="anaclara@gmail.com"
                    {...register('email')}
                  />
                </TextField>
                <TextField label="Celular" htmlFor="phoneNumber">
                  <Input
                    type="text"
                    id="phoneNumber"
                    {...register('phoneNumber')}
                  />
                </TextField>
                <TextField label="CEP" htmlFor="cep">
                  <Input
                    type="text"
                    id="cep"
                    {...register('cep')}
                    onBlur={(event: FocusEvent<HTMLInputElement>) => {
                      checkCep(event.target.value)
                    }}
                  />
                  {isError && (
                    <Icon.XCircle
                      size={24}
                      className="absolute bottom-4 right-4 text-red-500 dark:text-white-500"
                    />
                  )}
                </TextField>
                <TextField label="Bairro" htmlFor="bairro">
                  <Input
                    type="text"
                    id="bairro"
                    className="cursor-not-allowed text-gray-400 focus:ring-0"
                    value={bairro}
                    {...register('bairro')}
                  />
                  {isLoading && (
                    <Icon.SpinnerGap
                      size={24}
                      className="absolute bottom-4 right-4 animate-loading dark:text-white"
                    />
                  )}
                </TextField>
                <TextField label="Cidade" htmlFor="cidade">
                  <Input
                    type="text"
                    id="cidade"
                    className="cursor-not-allowed text-gray-400 focus:ring-0"
                    {...register('cidade')}
                    value={cidade}
                  />
                  {isLoading && (
                    <Icon.SpinnerGap
                      size={24}
                      className="absolute bottom-4 right-4 animate-loading dark:text-white"
                    />
                  )}
                </TextField>
              </div>
            </div>
          </div>
          <Button size="full">Confirmar</Button>
        </form>
      </main>
    </>
  )
}
