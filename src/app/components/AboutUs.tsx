import Image from 'next/image'

import AboutUsImage from '../../assets/about-us-image.jpg'

export function AboutUs() {
  return (
    <section role="about us" className="py-9 px-6 text-gray-500">
      <h2 className="text-title-lg  font-secondary mb-3">
        Bibliotroca: Revivendo Livros, Impulsionando Educação
      </h2>
      <p className="text-gray-500 text-base-160 mb-5">
        A Bibliotroca é mais que uma plataforma de trocas. Aqui, seus livros
        didáticos encontram novos leitores e ampliam seu impacto educacional. Em
        vez de deixá-los esquecidos, permita que influenciem novas jornadas de
        aprendizado. Cada troca reforça uma comunidade que valoriza o
        compartilhamento e o saber.
      </p>

      <dl className="flex justify-between gap-3 mb-5">
        <div>
          <dt className="text-primary-500 font-secondary text-title-base mb-1">
            + 70
          </dt>
          <dd className="text-gray-500 text-base-140">Livros cadastrados</dd>
        </div>

        <div>
          <dt className="text-primary-500 font-secondary text-title-base mb-1">
            + 50
          </dt>
          <dd className="text-gray-500 text-base-140">Trocas realizadas</dd>
        </div>
      </dl>

      <Image
        src={AboutUsImage}
        alt="Estante com várias prateleiras cheia de livros"
        width={654}
        height={368}
        className="rounded-lg"
      />
    </section>
  )
}
