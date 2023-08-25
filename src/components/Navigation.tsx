'use client'

import { Avatar } from './Avatar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Icon from '@phosphor-icons/react'
import { Card } from './Card'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

type NavigationProps = {
  avatarImg: string
  avatarName: string
}

export function Navigation({ avatarImg, avatarName }: NavigationProps) {
  return (
    <nav className="max-w-5xl mx-auto font-primary">
      <section className="flex justify-between items-center mb-10">
        <div>
          <span className="font-primary text-sm md:text-lg">Bem vindo(a),</span>
          <p className="font-secondary text-title-base md:text-title-lg">
            {avatarName}
          </p>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="rounded-full w-max h-max">
              <Avatar src={avatarImg} name={avatarName} />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content>
              <DropdownMenu.Item></DropdownMenu.Item>
              <DropdownMenu.Separator />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </section>

      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        slidesPerView={2}
      >
        <SwiperSlide>
          <Card className="pt-4 pb-6 px-3 w-32">
            <Icon.Swap className="text-primary-500 mb-3" weight="bold" />
            <p className="text-base mb-7 text-black font-medium">Trocas</p>
            <p className="text-xs text-gray-400">3 pendentes</p>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="pt-4 pb-6 px-3 w-32">
            <Icon.Books className="text-primary-500 mb-3" weight="bold" />
            <p className="text-base mb-7 text-black font-medium">Meus Livros</p>
            <p className="text-xs text-gray-400">13 livros</p>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="!w-max ml-4">
          <Card className="pt-4 pb-6 px-3 w-32">
            <Icon.Books className="text-primary-500 mb-3" weight="bold" />
            <p className="text-base mb-7 text-black font-medium">Meus Livros</p>
            <p className="text-xs text-gray-400">13 livros</p>
          </Card>
        </SwiperSlide>
      </Swiper>
    </nav>
  )
}
