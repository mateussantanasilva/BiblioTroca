'use client'

import Link from 'next/link'

import { Avatar, AvatarProps } from './Avatar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Icon from '@phosphor-icons/react'
import { Card } from './Card'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import '@/styles/swiper.css'

type NavigationProps = AvatarProps & {
  amountExchanges: number
  amountBooks: number
  wishlist: number
  history: number
}

export function Navigation({
  name,
  src,
  amountBooks,
  amountExchanges,
  history,
  wishlist,
}: NavigationProps) {
  return (
    <nav className="relative z-[2] max-w-5xl mx-auto font-primary">
      <section className="flex justify-between items-center mb-10">
        <div>
          <span className="font-primary text-sm md:text-lg">Bem vindo(a),</span>
          <p className="font-secondary text-title-base md:text-title-lg">
            {name}
          </p>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="rounded-full w-max h-max">
              <Avatar src={src} name={name} />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="bg-white rounded-lg w-max h-max">
              <DropdownMenu.Item className="flex items-center gap-2">
                <Icon.PencilSimple className="text-black" />
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </section>

      <Swiper freeMode modules={[FreeMode]}>
        <SwiperSlide>
          <Link href="/perfil/trocas-pendentes">
            <Card type="menu">
              <Icon.Swap
                className="text-primary-500 mb-3"
                weight="bold"
                size={26}
              />
              <p className="text-base mb-7 text-gray-600 font-medium h-10 md:h-max md:mb-0">
                Trocas
              </p>
              <p className="text-xs text-gray-400">
                {amountExchanges} pendentes
              </p>
            </Card>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/perfil/meus-livros">
            <Card type="menu">
              <Icon.Books
                className="text-primary-500 mb-3"
                weight="bold"
                size={26}
              />
              <p className="text-base mb-7 text-gray-600 font-medium h-10">
                Meus Livros
              </p>
              <p className="text-xs text-gray-400">{amountBooks} livros</p>
            </Card>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/perfil/lista-desejos">
            <Card type="menu">
              <Icon.Heart
                className="text-primary-500 mb-3"
                weight="bold"
                size={26}
              />
              <p className="text-base mb-7 text-gray-600 font-medium h-10">
                Lista de Desejos
              </p>
              <p className="text-xs text-gray-400">{wishlist} livros</p>
            </Card>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/perfil/historico">
            <Card type="menu">
              <Icon.ListMagnifyingGlass
                className="text-primary-500 mb-3"
                weight="bold"
                size={26}
              />
              <p className="text-base mb-7 text-gray-600 font-medium h-10">
                Histórico
              </p>
              <p className="text-xs text-gray-400">{history} trocas</p>
            </Card>
          </Link>
        </SwiperSlide>
      </Swiper>

      <div className="hidden min-[650px]:grid grid-cols-4 absolute w-full gap-5">
        <Link href="/perfil/trocas-pendentes">
          <Card type="menu">
            <Icon.Swap
              className="text-primary-500 mb-3"
              weight="bold"
              size={26}
            />
            <p className="text-base text-gray-600 font-medium mb-2">Trocas</p>
            <p className="text-xs text-gray-400 break-keep">
              {amountExchanges} pendentes
            </p>
          </Card>
        </Link>
        <Link href="/perfil/meus-livros">
          <Card type="menu">
            <Icon.Books
              className="text-primary-500 mb-3"
              weight="bold"
              size={26}
            />
            <p className="text-base text-gray-600 font-medium mb-2">
              Meus Livros
            </p>
            <p className="text-xs text-gray-400 break-keep">
              {amountBooks} livros
            </p>
          </Card>
        </Link>
        <Link href="/perfil/lista-desejos">
          <Card type="menu">
            <Icon.Heart
              className="text-primary-500 mb-3"
              weight="bold"
              size={26}
            />
            <p className="text-base text-gray-600 font-medium mb-2">
              Lista de Desejos
            </p>
            <p className="text-xs text-gray-400 break-keep">
              {wishlist} livros
            </p>
          </Card>
        </Link>
        <Link href="/perfil/historico">
          <Card type="menu">
            <Icon.ListMagnifyingGlass
              className="text-primary-500 mb-3"
              weight="bold"
              size={26}
            />
            <p className="text-base text-gray-600 font-medium mb-2">
              Histórico
            </p>
            <p className="text-xs text-gray-400 break-keep">{history} trocas</p>
          </Card>
        </Link>
      </div>
    </nav>
  )
}
