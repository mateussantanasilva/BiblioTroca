'use client'

import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { TextField } from '@/components/TextField'

export default function Perfil() {
  return (
    <>
      <Header className="h-[300px]">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="font-primary text-sm-140">Perfil</h1>
          <h2 className="font-secondary text-title-base text-center">
            Complete seu <br className="md:hidden" /> perfil
          </h2>
        </div>
      </Header>
      <main className="relative z-[2] font-primary pb-12 px-6">
        <form
          className="flex flex-col gap-8 max-w-lg w-full mx-auto"
          action="/perfil/trocas-pendentes"
        >
          <div className="shadow-container bg-white w-full rounded-lg pb-8 px-6 -mt-24 mx-auto md:-mt-28">
            <Avatar
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              name="Ana Clara"
              className="w-20 h-20 ml-[50%] -translate-x-2/4 -translate-y-2/4 border-2 border-white mb-9 md:w-32 md:h-32"
            />
            <div className="-translate-y-[10%]">
              <p className="font-secondary mb-8 text-title-base text-center">
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
