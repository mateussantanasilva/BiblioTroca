import Image from 'next/image'

import AboutUsImage from '../../assets/about-us-image.jpg'

export function AboutUs() {
  return (
    <section className="mx-auto max-w-[73rem] px-6 py-9 text-gray-500 md:text-center">
      <h2 className="mb-3 font-secondary text-title-lg dark:text-white">
        Bibliotroca: Revivendo Livros, Impulsionando Educação
      </h2>
      <p className="mb-5 text-base-160 text-gray-500 dark:text-white md:mx-auto md:max-w-3xl">
        A Bibliotroca é mais que uma plataforma de trocas. Aqui, seus livros
        didáticos encontram novos leitores e ampliam seu impacto educacional. Em
        vez de deixá-los esquecidos, permita que influenciem novas jornadas de
        aprendizado. Cada troca reforça uma comunidade que valoriza o
        compartilhamento e o saber.
      </p>

      <dl className="mb-5 flex w-fit gap-8 md:mx-auto">
        <div>
          <dt className="mb-1 font-secondary text-title-base text-primary-500 dark:text-white">
            + 70
          </dt>
          <dd className="text-base-140 text-gray-500 dark:text-white">
            Livros cadastrados
          </dd>
        </div>

        <div>
          <dt className="mb-1 font-secondary text-title-base text-primary-500 dark:text-white">
            + 50
          </dt>
          <dd className="text-base-140 text-gray-500 dark:text-white">
            Trocas realizadas
          </dd>
        </div>
      </dl>

      <Image
        src={AboutUsImage}
        alt="Estante com várias prateleiras cheia de livros"
        width={1000}
        className="mx-auto max-h-[25rem] rounded-lg object-cover"
      />
    </section>
  )
}
