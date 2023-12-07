'use client'

import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { TextField } from '@/components/TextField'
import { Modal } from '@/components/Modal'
import * as Icon from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { ViaCEPData } from '@/@types/viaCepData'
import Link from 'next/link'
import axios from 'axios'
import { FocusEvent, useEffect, useState } from 'react'
import { Input } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { UserFormSchema, userFormSchema } from '@/schemas/userFormSchema'
import Cookies from 'js-cookie'
import { SpanError } from '@/components/SpanError'
import { UserData } from '@/@types/userData'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@/components/Skeleton'

export default function EditProfile() {
  const [bairro, setBairro] = useState<string | undefined>('')
  const [cidade, setCidade] = useState<string | undefined>('')

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [email, setEmail] = useState<string | undefined>(undefined)
  const [name, setName] = useState<string | undefined>(undefined)
  const [picture, setPicture] = useState<string | undefined>(undefined)

  const [user, setUser] = useState<UserData | undefined>(undefined)

  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const nameCookies = Cookies.get('bibliotroca.userName')

      if (nameCookies) {
        const nameArray = nameCookies?.split('-')
        setName(`${nameArray[0]} ${nameArray[1]}`)
      }
      setEmail(Cookies.get('bibliotroca.userEmail'))
      setPicture(Cookies.get('bibliotroca.userPicture'))

      await api.get<UserData>(`usuarios/${email}`).then(async (response) => {
        setUser(response.data)

        await axios
          .get<ViaCEPData>(
            `https://viacep.com.br/ws/${response.data.location}/json`,
          )
          .then((response) => {
            setBairro(response.data.bairro)
            setCidade(response.data.localidade)
          })
      })
    })()

    setIsLoading(false)
  }, [email])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormSchema>({ resolver: zodResolver(userFormSchema) })

  async function updateUser(data: UserFormSchema) {
    api.put(`/usuarios/${email}`, {
      id: user?.id,
      name: user?.name,
      surname: user?.surname,
      phoneNumber: data.phoneNumber,
      location: data.location,
      avaliationsNumber: user?.avaliationsNumber,
      averageRating: user?.averageRating,
    })

    router.push('/perfil/trocas-pendentes')
  }

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

  return (
    <>
      <Header className="h-[300px] pt-16 text-center">
        <Link
          href="/perfil/trocas-pendentes"
          className="absolute left-6 top-10 min-[768px]:hidden"
        >
          <Icon.ArrowLeft
            className="transition-transform duration-300 hover:scale-110 dark:text-yellow-500"
            size={24}
            weight="bold"
          />
        </Link>
        <h1 className="font-primary text-sm-160">Cadastro</h1>
        <h2 className="font-secondary text-title-base">
          Gerencie seu <br className="md:hidden" /> Perfil
        </h2>
      </Header>
      <main className="relative z-[2] px-6 pb-12 font-primary">
        <form
          className="mx-auto flex w-full max-w-lg flex-col gap-8"
          onSubmit={handleSubmit(updateUser)}
        >
          {isLoading && (
            <Skeleton variant="card" className="-mt-10 md:-mt-20">
              <Skeleton
                variant="circle"
                className="mb-9 ml-[50%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 border-2 border-white md:h-32 md:w-32"
              />
              <Skeleton
                variant="line"
                className="mx-auto -mt-[10%] mb-10 h-[30px] w-72"
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <Skeleton variant="line" className="h-7 w-32" />
                  <Skeleton variant="line" className="h-16 w-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <Skeleton variant="line" className="h-7 w-32" />
                  <Skeleton variant="line" className="h-16 w-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <Skeleton variant="line" className="h-7 w-32" />
                  <Skeleton variant="line" className="h-16 w-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <Skeleton variant="line" className="h-7 w-32" />
                  <Skeleton variant="line" className="h-16 w-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <Skeleton variant="line" className="h-7 w-32" />
                  <Skeleton variant="line" className="h-16 w-full" />
                </div>
              </div>
            </Skeleton>
          )}
          {!isLoading && (
            <div className="mx-auto -mt-10 w-full rounded-lg bg-white px-6 pb-8 shadow-container dark:border-2 dark:border-white dark:bg-black md:-mt-20">
              <Avatar
                name={name}
                src={picture}
                className="mb-9 ml-[50%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 border-2 border-white md:h-32 md:w-32"
              />
              <div className="-mt-[10%]">
                <p className="mb-8 text-center font-secondary text-title-base">
                  {name}
                </p>
                <div className="flex flex-col gap-4">
                  <TextField label="Email" htmlFor="email">
                    <Input
                      type="text"
                      id="email"
                      className="cursor-not-allowed text-gray-400 focus:ring-0"
                      value={email}
                    />
                  </TextField>
                  <TextField label="Celular" htmlFor="phoneNumber">
                    <Input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      register={register}
                      defaultValue={user?.phoneNumber}
                    />
                    {errors.phoneNumber && (
                      <SpanError>{errors.phoneNumber.message}</SpanError>
                    )}
                  </TextField>
                  <TextField label="CEP" htmlFor="location">
                    <Input
                      componentType="input"
                      type="text"
                      id="location"
                      name="location"
                      register={register}
                      onBlur={(event: FocusEvent<HTMLInputElement>) => {
                        checkCep(event.target.value)
                      }}
                      defaultValue={user?.location}
                    />
                    {errors.location && (
                      <SpanError>{errors.location.message}</SpanError>
                    )}
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
          )}
          {isLoading && (
            <>
              <Skeleton variant="line" size="button" className="mb-10" />
              <Skeleton variant="line" size="button" />
            </>
          )}
          {!isLoading && (
            <>
              <Button size="full">Atualizar Perfil</Button>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button
                    variant="ghostRed"
                    className="mt-10 w-full lg:max-w-full"
                  >
                    Excluir Conta
                    <Icon.UserMinus weight="bold" size={20} />
                  </Button>
                </Dialog.Trigger>

                <Modal
                  variant="deleteAccount"
                  onClick={async () => {
                    await api.delete(`usuarios/${email}`)

                    router.push('/')
                  }}
                />
              </Dialog.Root>
            </>
          )}
        </form>
      </main>
    </>
  )
}
