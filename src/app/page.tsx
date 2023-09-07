'use client'

import Image from 'next/image'
import { Logo } from '@/components/Logo'
import { PublicHeader } from '../components/PublicHeader'
import { Presentation } from './components/Presentation'
import { AboutUs } from './components/AboutUs'
import { GetStarted } from './components/GetStarted'
import { FAQ } from './components/FAQ'
import { ArrowDown } from '@phosphor-icons/react'

import MobileHero from '../assets/mobile-hero.png'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-[375px]">
      <div className="bg-radial-gradient pb-4">
        <PublicHeader variant="home" />

        <section role="banner">
          <h1 className="text-center font-secondary text-title-xl bg-gradient-title bg-clip-text text-transparent px-6">
            Cada Livro, uma Nova Jornada ao Conhecimento
          </h1>

          <Image
            src={MobileHero}
            alt="Dois celulares exibindo as versões do sistema mobile"
            width={750}
            height={924}
            quality={100}
            priority
            className="w-[23.4rem] -my-[1.58rem] relative z-0"
          />

          <button className="flex items-center justify-center bg-primary-500 w-11 h-11 mx-auto rounded-full relative z-10">
            <ArrowDown weight="bold" size={'1.25rem'} className="text-white" />
          </button>
        </section>
      </div>

      <main>
        <Presentation />

        <AboutUs />

        <GetStarted />

        <FAQ />
      </main>

      <Footer />
    </div>
  )
}
