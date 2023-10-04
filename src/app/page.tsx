'use client'

import Image from 'next/image'
import { PublicHeader } from '../components/PublicHeader'
import { Presentation } from './components/Presentation'
import { AboutUs } from './components/AboutUs'
import { GetStarted } from './components/GetStarted'
import { FAQ } from './components/FAQ'
import { Footer } from '@/components/Footer'

import MobileHero from '../assets/mobile-hero.svg'
import ShadowHero from '../assets/shadow-hero.png'

export default function Home() {
  return (
    <>
      <div className="relative bg-radial-gradient h-screen overflow-hidden">
        <PublicHeader variant="home" />

        <section className="max-w-[73rem] mx-auto flex flex-col items-center relative">
          <h1 className="text-center font-secondary bg-gradient-title bg-clip-text text-transparent px-6 max-w-xl text-title-xl lg:text-title-2xl lg:max-w-[45rem]">
            Cada Livro, uma Nova Jornada ao Conhecimento
          </h1>

          <Image
            src={MobileHero}
            alt="Dois celulares exibindo as versões do sistema mobile"
            width={550}
            quality={100}
            priority
            className="px-6 relative z-0 lg:-my-[1.45rem] lg:w-[34.375rem] min-[2000px]:w-[42rem]"
          />

          {/* <button className="flex items-center justify-center bg-primary-500 w-11 h-11 mx-auto rounded-full absolute z-10 translate-y-[26rem] lg:translate-y-[32rem]">
            <ArrowDown weight="bold" size={'1.25rem'} className="text-white" />
          </button> */}
        </section>

        <Image
          src={ShadowHero}
          alt=""
          width={1440}
          className="absolute h-44 bottom-0"
        />
      </div>

      <main className="dark:bg-black">
        <Presentation />

        <AboutUs />

        <GetStarted />

        <FAQ />
      </main>

      <Footer />
    </>
  )
}
