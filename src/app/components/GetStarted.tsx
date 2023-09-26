import Image from 'next/image'

import Link from 'next/link'
import { Button } from '@/components/Button'

import BookWatermarkImage from '../../assets/book-watermark.png'

export function GetStarted() {
  return (
    <section className="bg-primary-500 text-white py-9 relative">
      <div className="max-w-[73rem] mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center md:gap-x-9">
        <div className="flex-1">
          <h2 className="text-title-lg font-secondary mb-3">
            Pronto para Impulsionar Seu Aprendizado?
          </h2>
          <p className="text-base-160 mb-10">
            Acesse materiais didáticos e troque conhecimentos com nossa
            comunidade. Seu crescimento acadêmico e profissional começa aqui!
          </p>
        </div>

        <div className="flex gap-1 relative z-10 flex-auto h-fit max-w-sm max-[350px]:flex-col">
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
          className="absolute w-60 bottom-0 right-0 z-0"
        />
      </div>
    </section>
  )
}
