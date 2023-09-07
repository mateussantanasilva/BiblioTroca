'use client'

import { Card } from '@/components/Card'
import { Footer } from '@/components/Footer'
import { PublicHeader } from '@/components/PublicHeader'
import {
  ArrowRight,
  MagnifyingGlass,
  MapPin,
  PaperPlaneTilt,
  Star,
} from '@phosphor-icons/react'

export default function Books() {
  return (
    <div className="flex flex-col mx-auto max-w-[375px]">
      <PublicHeader />

      <Card type="content" className="text-gray-500">
        <h2 className="text-title-lg font-secondary mb-3">
          Explore Livros Disponíveis
        </h2>
        <p className="text-lg-140 mb-10">
          Encontre e inicie uma jornada de trocas para expandir sua biblioteca e
          compartilhar conhecimento.
        </p>

        <form className="flex items-center gap-1">
          <input
            type="text"
            placeholder="Busque por um livro, autor ou categoria."
            className="flex-1 bg-white-100 rounded-lg border-[1px] border-gray-300 p-4 font-primary placeholder:text-gray-400 placeholder:text-base-140 placeholder:font-primary"
          />
          <button
            type="submit"
            aria-label="Filtrar busca"
            title="Filtrar busca"
            className="rounded-lg border-2 border-primary-500 bg-white p-4 leading-none text-primary-500"
          >
            <MagnifyingGlass size={'1.4rem'} weight="bold" />
          </button>
        </form>
      </Card>

      <main className="flex flex-wrap gap-4 mt-8 mb-9">
        <Card type="content" className="text-gray-500 px-0">
          <header className="flex justify-between items-start gap-2 mb-3 px-4">
            <div className="flex flex-col">
              <strong className="font-secondary text-title-sm">
                Clean code
              </strong>
              <p className="text-gray-400 text-base-140">por Richard Helm</p>
            </div>

            <a href="" className="flex items-center gap-1 text-sm-140">
              Detalhes
              <ArrowRight size={'0.75rem'} />
            </a>
          </header>

          <p className="text-base-160 mb-3 px-4">
            O livro destaca a importância de manter o código limpo, não apenas
            para a eficácia imediata, mas...
          </p>

          <span
            aria-label="categoria"
            className="rounded-xl border-[1px] border-primary-500 py-1 px-3 text-primary-500 text-xs-140 mb-4 mx-4 inline-block"
          >
            Tecnologia
          </span>

          <footer className="pt-4 flex justify-between items-start border-t-[1px] border-gray-300">
            <div className="flex flex-col gap-[0.125rem] px-4">
              <p className="flex items-center gap-1 text-base-140">
                <PaperPlaneTilt size={'0.75rem'} />
                Enviado por Pedro
              </p>
              <p className="flex items-center gap-1 text-sm-140 text-gray-400">
                <MapPin size={'0.75rem'} />
                Itaim Bibi, São Paulo
              </p>
            </div>

            <div className="flex items-center gap-1 px-4">
              <p className="flex items-center gap-1 text-base-140">
                <Star weight="fill" className="text-orange-500" />
                4.7
              </p>
              <span className="text-gray-400 text-sm-140">{'(14)'}</span>
            </div>
          </footer>
        </Card>

        <Card type="content" className="text-gray-500 px-0">
          <header className="flex justify-between items-start gap-2 mb-3 px-4">
            <div className="flex flex-col">
              <strong className="font-secondary text-title-sm">
                Clean code
              </strong>
              <p className="text-gray-400 text-base-140">por Richard Helm</p>
            </div>

            <a href="" className="flex items-center gap-1 text-sm-140">
              Detalhes
              <ArrowRight size={'0.75rem'} />
            </a>
          </header>

          <p className="text-base-160 mb-3 px-4">
            O livro destaca a importância de manter o código limpo, não apenas
            para a eficácia imediata, mas...
          </p>

          <span
            aria-label="categoria"
            className="rounded-xl border-[1px] border-primary-500 py-1 px-3 text-primary-500 text-xs-140 mb-4 mx-4 inline-block"
          >
            Tecnologia
          </span>

          <footer className="pt-4 flex justify-between items-start border-t-[1px] border-gray-300">
            <div className="flex flex-col gap-[0.125rem] px-4">
              <p className="flex items-center gap-1 text-base-140">
                <PaperPlaneTilt size={'0.75rem'} />
                Enviado por Pedro
              </p>
              <p className="flex items-center gap-1 text-sm-140 text-gray-400">
                <MapPin size={'0.75rem'} />
                Itaim Bibi, São Paulo
              </p>
            </div>

            <div className="flex items-center gap-1 px-4">
              <p className="flex items-center gap-1 text-base-140">
                <Star weight="fill" className="text-orange-500" />
                4.7
              </p>
              <span className="text-gray-400 text-sm-140">{'(14)'}</span>
            </div>
          </footer>
        </Card>

        <Card type="content" className="text-gray-500 px-0">
          <header className="flex justify-between items-start gap-2 mb-3 px-4">
            <div className="flex flex-col">
              <strong className="font-secondary text-title-sm">
                Clean code
              </strong>
              <p className="text-gray-400 text-base-140">por Richard Helm</p>
            </div>

            <a href="" className="flex items-center gap-1 text-sm-140">
              Detalhes
              <ArrowRight size={'0.75rem'} />
            </a>
          </header>

          <p className="text-base-160 mb-3 px-4">
            O livro destaca a importância de manter o código limpo, não apenas
            para a eficácia imediata, mas...
          </p>

          <span
            aria-label="categoria"
            className="rounded-xl border-[1px] border-primary-500 py-1 px-3 text-primary-500 text-xs-140 mb-4 mx-4 inline-block"
          >
            Tecnologia
          </span>

          <footer className="pt-4 flex justify-between items-start border-t-[1px] border-gray-300">
            <div className="flex flex-col gap-[0.125rem] px-4">
              <p className="flex items-center gap-1 text-base-140">
                <PaperPlaneTilt size={'0.75rem'} />
                Enviado por Pedro
              </p>
              <p className="flex items-center gap-1 text-sm-140 text-gray-400">
                <MapPin size={'0.75rem'} />
                Itaim Bibi, São Paulo
              </p>
            </div>

            <div className="flex items-center gap-1 px-4">
              <p className="flex items-center gap-1 text-base-140">
                <Star weight="fill" className="text-orange-500" />
                4.7
              </p>
              <span className="text-gray-400 text-sm-140">{'(14)'}</span>
            </div>
          </footer>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
