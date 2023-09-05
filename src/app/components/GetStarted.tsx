import Image from 'next/image'

import BookWatermarkImage from '../../assets/book-watermark.png'

export function GetStarted() {
  return (
    <section
      role="get started"
      className="bg-primary-500 text-white py-9 px-6 relative"
    >
      <h2 className="text-title-lg font-secondary mb-3">
        Pronto para Impulsionar Seu Aprendizado?
      </h2>
      <p className="text-base-160 mb-10">
        Acesse materiais didáticos e troque conhecimentos com nossa comunidade.
        Seu crescimento acadêmico e profissional começa aqui!
      </p>

      <div className="flex gap-1 relative z-10">
        <a
          href=""
          className="rounded-lg py-4 text-center font-secondary text-btn-base bg-white text-primary-500 min-w-[10rem]"
        >
          Criar conta
        </a>
        <a
          href=""
          className="rounded-lg border-2 border-white py-4 text-center font-secondary text-btn-base bg-transparent text-white min-w-[10rem]"
        >
          Explorar livros
        </a>
      </div>

      <Image
        src={BookWatermarkImage}
        alt="Marca d'água de uma livro aberto"
        width={480}
        height={376}
        className="absolute w-60 bottom-0 right-0 z-0"
      />
    </section>
  )
}
