import Image from 'next/image'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'

import BookWatermarkImage from '../../assets/book-watermark.png'

export function GetStarted() {
  return (
    <section className="relative bg-primary-500 py-9 text-white dark:bg-black">
      <Reveal>
        <div className="mx-auto flex max-w-[73rem] flex-col px-6 md:flex-row md:items-center md:justify-between md:gap-x-9">
          <div className="flex-1">
            <h2 className="mb-3 font-secondary text-title-lg">
              Pronto para Impulsionar Seu Aprendizado?
            </h2>
            <p className="mb-10 text-base-160">
              Acesse materiais didáticos e troque conhecimentos com nossa
              comunidade. Seu crescimento acadêmico e profissional começa aqui!
            </p>
          </div>

          <div className="relative z-10 flex h-fit max-w-sm flex-auto gap-1 max-[350px]:flex-col">
            <Button componentType={Link} href="/login" variant="white">
              Criar conta
            </Button>
            <Button componentType={Link} href="/livros" variant="ghostWhite">
              Explorar livros
            </Button>
          </div>

          <Image
            src={BookWatermarkImage}
            alt="Marca d'água de uma livro aberto"
            width={480}
            height={376}
            className="absolute bottom-0 right-0 z-0 w-60"
          />
        </div>
      </Reveal>
    </section>
  )
}
