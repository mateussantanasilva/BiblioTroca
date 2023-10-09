'use client'

import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { TextField } from '@/components/TextField'
import { Modal } from '@/components/Modal'
import * as Icon from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'

export default function EditProfile() {
  return (
    <>
      <Header className="h-[300px] pt-16 text-center">
        <Link
          href="/perfil/trocas-pendentes"
          className="absolute left-6 top-10"
        >
          <Icon.ArrowLeft
            className="transition-transform duration-300 hover:scale-110 dark:text-yellow-500"
            size={32}
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
          action="/perfil/trocas-pendentes"
        >
          <div className="mx-auto -mt-24 w-full rounded-lg bg-white px-6 pb-8 shadow-container dark:border-2 dark:border-white dark:bg-black md:-mt-28">
            <Avatar
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              name="Ana Clara"
              className="mb-9 ml-[50%] h-20 w-20 -translate-x-2/4 -translate-y-2/4 border-2 border-white md:h-32 md:w-32"
            />
            <div className="-translate-y-[10%]">
              <p className="mb-8 text-center font-secondary text-title-base">
                Ana Clara
              </p>
              <div className="flex flex-col gap-4">
                <TextField
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  disabled
                />
                <TextField
                  label="Celular"
                  id="telephone"
                  name="telephone"
                  type="tel"
                />
                <TextField label="CEP" id="cep" name="cep" type="string" />
                <TextField
                  label="Bairro"
                  id="district"
                  name="district"
                  type="string"
                />
                <TextField label="Cidade" id="city" name="city" type="string" />
              </div>
            </div>
          </div>
          <Button className="w-full lg:max-w-full">Atualizar Livro</Button>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button variant="ghostRed" className="mt-10 w-full lg:max-w-full">
                Excluir Conta
                <Icon.UserMinus weight="bold" size={20} />
              </Button>
            </Dialog.Trigger>

            <Modal variant="deleteAccount" />
          </Dialog.Root>
        </form>
      </main>
    </>
  )
}
