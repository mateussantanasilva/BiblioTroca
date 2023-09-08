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
      <main className="relative z-[2] font-primary px-6 pb-12">
        <div className="shadow-container bg-white border-white-100 rounded-lg pb-8 px-6 max-w-5xl -mt-24 mx-auto md:-mt-28">
          <Avatar
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            name="Ana Clara"
            className="w-20 h-20 ml-[50%] -translate-x-2/4 -mt-10 border-2 border-white mb-9 md:w-32 md:h-32"
          />
          <p className="font-secondary mb-8 text-title-base text-center">
            Ana Clara
          </p>
          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 md:flex-row">
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
              </div>
              <div className="flex flex-col md:flex-row md:gap-4 justify-between">
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
            <Button>Confirmar</Button>
          </form>
        </div>
      </main>
    </>
  )
}
