'use client'

import Image from 'next/image'
import { PublicHeader } from '../components/PublicHeader'
import { ArrowDown } from '@phosphor-icons/react'

import { Card } from '@/components/Card'
import { FeatureCard } from './components/FeatureCard'
import { FAQ } from './components/FAQ'

import MobileHero from '../assets/mobile-hero.png'
import MobilePresentation from '../assets/mobile-presentation.png'
import SearchImage from '../assets/featureCard/search.png'
import NegotiateImage from '../assets/featureCard/negotiate.png'
import TradeImage from '../assets/featureCard/trade.png'
import AvaliationImage from '../assets/featureCard/avaliation.png'
import AboutUsImage from '../assets/about-us-image.jpg'
import BookWatermarkImage from '../assets/book-watermark.png'

export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-[375px]">
      <div className="bg-radial-gradient pb-4">
        <PublicHeader />

        <section role="banner">
          <h1 className="text-center font-secondary text-title-xl bg-gradient-title bg-clip-text text-transparent px-6">
            Cada Livro, uma Nova Jornada ao Conhecimento
          </h1>

          <Image
            src={MobileHero}
            alt="Dois celulares exibindo as versões do sistema mobile"
            width={750}
            height={924}
            className="w-[23.4rem] -my-[1.58rem] relative z-0"
          />

          <button className="flex items-center justify-center bg-primary-500 w-11 h-11 mx-auto rounded-full relative z-10">
            <ArrowDown weight="bold" size={'1.25rem'} className="text-white" />
          </button>
        </section>
      </div>

      <main>
        <section
          role="presentation"
          className="flex flex-col gap-4 py-9 px-6 text-gray-500"
        >
          <Card type="content" className="pb-0">
            <h2 className="text-title-lg font-secondary mb-3">
              Reviva Cada Página
            </h2>
            <p className=" text-base-160 mb-11">
              Descubra o prazer de dar nova vida aos seus livros. Conecte-se,
              troque e aprofunde-se em novos temas de forma simples e direta.
            </p>

            <Image
              src={MobilePresentation}
              alt="Celular pela metade exibindo uma página do sistema de detalhes da troca"
              width={590}
              height={582}
            />
          </Card>

          <Card type="content">
            <h2 className="text-title-lg font-secondary mb-3">
              Excelência em Cada Ferramenta
            </h2>
            <p className="text-base-160 mb-5">
              Do início ao fim, facilitamos cada etapa do processo para que você
              possa focar no que realmente importa: a sua próxima grande
              leitura.
            </p>

            <ul className="flex flex-wrap gap-2">
              <FeatureCard
                src={SearchImage}
                alt="Mulher buscando livro na prateleira"
                title="Busque e Explore"
                content="Explore e encontre livros desejados com facilidade em nossa plataforma."
              />
              <FeatureCard
                src={NegotiateImage}
                alt="Homem no telefone"
                title="Negocie Diretamente"
                content="Converse pelo WhatsApp para acertar detalhes e combinar a
                    troca do livro."
              />
              <FeatureCard
                src={TradeImage}
                alt="Dois homens fazendo soquinho"
                title="Confirme a Troca"
                content="Finalize sua negociação e confirme a troca com apenas alguns
                    cliques."
              />
              <FeatureCard
                src={AvaliationImage}
                alt="Mulher fazendo joia"
                title="Avaliações Transparentes"
                content="Veja feedbacks de trocas anteriores e compartilhe sua
                    experiência."
              />
            </ul>
          </Card>
        </section>

        <section role="about us" className="py-9 px-6 text-gray-500">
          <h2 className="text-title-lg  font-secondary mb-3">
            Bibliotroca: Revivendo Livros, Impulsionando Educação
          </h2>
          <p className="text-gray-500 text-base-160 mb-5">
            A Bibliotroca é mais que uma plataforma de trocas. Aqui, seus livros
            didáticos encontram novos leitores e ampliam seu impacto
            educacional. Em vez de deixá-los esquecidos, permita que influenciem
            novas jornadas de aprendizado. Cada troca reforça uma comunidade que
            valoriza o compartilhamento e o saber.
          </p>

          <dl className="flex justify-between gap-3 mb-5">
            <div>
              <dt className="text-primary-500 font-secondary text-title-base mb-1">
                + 70
              </dt>
              <dd className="text-gray-500 text-base-140">
                Livros cadastrados
              </dd>
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

        <section
          role="get started"
          className="bg-primary-500 text-white py-9 px-6 relative"
        >
          <h2 className="text-title-lg font-secondary mb-3">
            Pronto para Impulsionar Seu Aprendizado?
          </h2>
          <p className="text-base-160 mb-10">
            Acesse materiais didáticos e troque conhecimentos com nossa
            comunidade. Seu crescimento acadêmico e profissional começa aqui!
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

        <section role="FAQ" className="py-9 px-6 text-gray-500">
          <h2 className="text-center text-title-lg font-secondary mb-3">
            Temos Respostas para Suas Perguntas
          </h2>
          <p className="text-center text-base-160 mb-10">
            Dê uma olhada nas questões mais frequentes sobre a Bibliotroca. Se
            não encontrar o que procura, não hesite em nos enviar sua dúvida.
          </p>

          <a
            href=""
            className="block mx-auto max-w-[10.938rem] rounded-lg py-4 px-5 text-center font-secondary text-btn-base bg-primary-500 text-white mb-10"
          >
            Envie sua pergunta
          </a>

          <FAQ />
        </section>
      </main>
    </div>
  )
}
