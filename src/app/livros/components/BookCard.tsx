import Link from 'next/link'
import { Card } from '@/components/Card'
import { ArrowRight, PaperPlaneTilt, MapPin, Star } from '@phosphor-icons/react'

export function BookCard() {
  return (
    <Card componentType="article" type="content" className="text-gray-500 px-0">
      <header className="flex justify-between items-start gap-2 mb-3 px-4">
        <div className="flex flex-col">
          <strong className="font-secondary text-title-sm">Clean code</strong>
          <p className="text-gray-400 text-base-140">por Richard Helm</p>
        </div>

        <Link
          href="/livro/1"
          prefetch={false} // prefetch works only on hover
          className="flex items-center gap-1 text-sm-140 hover:text-primary-500 transition-colors duration-200"
        >
          Detalhes
          <ArrowRight size={'0.75rem'} />
        </Link>
      </header>

      <p className="text-base-160 mb-3 px-4">
        O livro destaca a importância de manter o código limpo, não apenas para
        a eficácia imediata, mas...
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
  )
}
