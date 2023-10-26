'use client'

import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { TextField } from '@/components/TextField'

export default function Perfil() {
  return (
    <>
      <Header className="h-[300px]">
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-primary text-sm-140">Cadastro</h1>
          <h2 className="text-center font-secondary text-title-base">
            Complete seu <br className="md:hidden" /> perfil
          </h2>
        </div>
      </Header>
      <main className="relative z-[2] px-6 pb-12 font-primary">
        <form
          className="mx-auto flex w-full max-w-[540px] flex-col gap-8"
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
          <Button className="w-full lg:max-w-full">Confirmar</Button>
        </form>
      </main>
    </>
  )
}
