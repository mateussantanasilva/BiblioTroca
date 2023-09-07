'use client'

import Link from 'next/link'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { PublicHeader } from '@/components/PublicHeader'
import { MapPin, Star } from '@phosphor-icons/react'

export default function Livro() {
  return (
    <div className="flex flex-col mx-auto max-w-[375px]">
      <PublicHeader />

      <main className="flex flex-col gap-4 mb-9">
        <Card type="content" className="text-gray-500">
          <header className="mb-3">
            <h2 className="font-secondary text-title-lg">Clean code</h2>
            <p className="text-gray-400 text-base-140">por Richard Helm</p>
          </header>

          <ul className="flex flex-col gap-5">
            <li className="flex flex-col gap-1">
              <strong className="text-base-140">Categoria</strong>
              <span
                aria-label="categoria"
                className="rounded-xl border-[1px] border-primary-500 py-1 px-3 text-primary-500 text-xs-140 w-fit"
              >
                Tecnologia
              </span>
            </li>

            <div className="flex gap-20">
              <li className="flex flex-col gap-1">
                <strong className="text-base-140">Idioma</strong>
                <p className="text-base-140">Português</p>
              </li>

              <li className="flex flex-col gap-1">
                <strong className="text-base-140">Ano</strong>
                <p className="text-base-140">2009</p>
              </li>
            </div>

            <li className="flex flex-col gap-1">
              <strong className="text-base-140">Editora</strong>
              <p className="text-base-140">Alta Books</p>
            </li>

            <li className="flex flex-col gap-1">
              <strong className="text-base-140">Condição do livro</strong>
              <p className="text-base-160">
                Pode ter algumas marcas leves de manuseio, sem rasuras.
              </p>
            </li>

            <li className="flex flex-col gap-1">
              <strong className="text-base-140">Descrição</strong>
              <p className="text-base-160">
                O livro destaca a importância de manter o código limpo, não
                apenas para a eficácia imediata, mas para garantir que o
                software permaneça sustentável e fácil de manter a longo prazo.
                Utilizando exemplos práticos e diretrizes claras, Martin
                delineia os princípios do desenvolvimento de software ágil,
                focando em técnicas e práticas que levam a um código mais limpo
                e eficiente.
              </p>
            </li>
          </ul>
        </Card>

        <Card type="content" className="text-gray-500">
          <h2 className="font-secondary text-title-base text-primary-500 mb-3">
            Custo de 60 pontos
          </h2>

          <section className="flex flex-col gap-1 mb-5">
            <p className="text-base-140">Enviado por Pedro</p>

            <div className="flex items-center gap-1">
              <p className="flex items-center gap-1 text-base-140">
                <Star weight="fill" className="text-orange-500" />
                4.7
              </p>
              <span className="text-gray-400 text-sm-140">{'(14)'}</span>
            </div>

            <p className="flex items-center gap-1 text-base-140">
              <MapPin size={'0.75rem'} />
              Itaim Bibi, São Paulo
            </p>
          </section>

          <p className="text-base-160 mb-2">
            Negocie diretamente com Pedro e defina os detalhes da troca antes de
            prosseguir com a solicitação. Toque abaixo para iniciar a conversa.
          </p>

          <Button
            componentType={Link}
            variant="whatsapp"
            size="sm"
            href="https://wa.me/11912345678"
            target="_blank"
          >
            Entrar em contato
          </Button>

          <p className="text-base-160 mt-5 mb-11">
            Tudo combinado e pronto para avançar? Solicite a troca agora mesmo
            clicando abaixo.
          </p>

          <Button>Solicitar troca</Button>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
