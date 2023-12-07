'use client'

import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { TextField } from '@/components/TextField'
import { FocusEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Icon from '@phosphor-icons/react'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { ViaCEPData } from '@/@types/viaCepData'
import { Input } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserFormSchema, userFormSchema } from '@/schemas/userFormSchema'
import { SpanError } from '@/components/SpanError'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { UserToken } from '@/@types/UserToken'
import { api } from '@/lib/axios'
import { UserData } from '@/@types/userData'

export default function CompleteProfile() {
  const searchParams = useSearchParams()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [picture, setPicture] = useState('')
  const [user, setUser] = useState<UserData | undefined>(undefined)

  const [district, setDistrict] = useState<string | undefined>('')
  const [city, setCity] = useState<string | undefined>('')

  const [isLoadingCEP, setIsLoadingCEP] = useState(false)
  const [isLoadingToken, setIsLoadingToken] = useState(true)
  const [isError, setIsError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormSchema>({ resolver: zodResolver(userFormSchema) })

  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      setIsLoadingToken(true)

      const token = searchParams.get('token')
      if (!token) {
        router.push('/login')
      } else {
        const tokenDecoded = jwtDecode<UserToken>(token)
        Cookies.set('token', token)
        Cookies.set(
          'bibliotroca.userName',
          `${tokenDecoded.firstName}-${tokenDecoded.lastName.split(' ')[0]}`,
        )
        Cookies.set('bibliotroca.userPicture', tokenDecoded.picture)
        Cookies.set('bibliotroca.userEmail', tokenDecoded.email)

        const { data: user } = await api.get<UserData>(
          `/usuarios/${tokenDecoded.email}`,
        )

        setUser(user)

        if (user?.phoneNumber === null && user?.location === null) {
          setEmail(tokenDecoded.email)
          setName(
            `${tokenDecoded.firstName} ${tokenDecoded.lastName.split(' ')[0]}`,
          )
          setPicture(tokenDecoded.picture)

          setIsLoadingToken(false)
        } else {
          router.push('/perfil/trocas-pendentes')
        }
      }
    })()
  }, [])

  function checkCep(cep: string) {
    setIsLoadingCEP(true)
    axios
      .get<ViaCEPData>(`https://viacep.com.br/ws/${cep}/json`)
      .then(({ data: { bairro, localidade } }) => {
        setDistrict(bairro)
        setCity(localidade)
        setIsError(false)
      })
      .catch(
        (error) => error && (setIsError(true), setDistrict(''), setCity('')),
      )
      .finally(() => setIsLoadingCEP(false))
  }

  async function completeUser(data: UserFormSchema) {
    await api.put<UserData>(`/usuarios/${email}`, {
      id: user?.id,
      name: user?.name,
      surname: user?.surname,
      phoneNumber: data.phoneNumber,
      location: data.location,
      avaliationsNumber: 0,
      averageRating: 0,
    })

    router.push('/perfil/trocas-pendentes')
  }

  return (
    <>
      {isLoadingToken && (
        <main className="grid h-screen w-screen place-items-center">
          <div className="flex flex-col items-center gap-4">
            <Icon.SpinnerGap
              size={75}
              className="animate-loading dark:text-white"
            />
            <p className="animate-pulseSlow text-center font-primary text-title-base dark:text-white">
              Carregando
              <br />
              Informações
            </p>
          </div>
        </main>
      )}
      {!isLoadingToken && (
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
              onSubmit={handleSubmit(completeUser)}
              className="mx-auto flex w-full max-w-[540px] flex-col gap-10"
            >
              <div className="mx-auto -mt-24 w-full rounded-lg bg-white px-6 pb-8 shadow-container dark:border-2 dark:border-white dark:bg-black md:-mt-28">
                <Avatar
                  src={picture}
                  name={name}
                  className="mb-4 ml-[50%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 border-2 border-white md:h-32 md:w-32"
                />
                <div className="-mt-10 md:-mt-16">
                  <p className="mb-8 text-center font-secondary text-title-base">
                    {name}
                  </p>
                  <div className="flex flex-col gap-4">
                    <TextField label="Email" htmlFor="email">
                      <Input type="text" id="email" value={email} disabled />
                    </TextField>
                    <TextField label="Celular" htmlFor="phoneNumber">
                      <Input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Ex: 11987654321"
                        register={register}
                      />
                      {errors.phoneNumber && (
                        <SpanError>{errors.phoneNumber.message}</SpanError>
                      )}
                    </TextField>
                    <TextField label="CEP" htmlFor="location">
                      <Input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Ex: 01153000"
                        register={register}
                        onBlur={(event: FocusEvent<HTMLInputElement>) => {
                          checkCep(event.target.value)
                        }}
                      />
                      {errors.location && (
                        <SpanError>{errors.location.message}</SpanError>
                      )}
                      {isError && (
                        <Icon.XCircle
                          size={26}
                          className="absolute right-4 top-[42px] text-red-500 dark:text-white-500"
                        />
                      )}
                    </TextField>
                    <TextField label="Bairro" htmlFor="district">
                      <Input
                        type="text"
                        id="district"
                        value={district}
                        disabled
                      />
                      {isLoadingCEP && (
                        <Icon.SpinnerGap
                          size={24}
                          className="absolute bottom-4 right-4 animate-loading dark:text-white"
                        />
                      )}
                    </TextField>
                    <TextField label="Cidade" htmlFor="city">
                      <Input type="text" id="city" value={city} disabled />
                      {isLoadingCEP && (
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
      )}
    </>
  )
}
