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
import { Dropdown } from './Dropdown'

type NavigationProps = AvatarProps & {
  pendingExchanges: number
  amountBooks: number
  wishlist: number
  history: number
}

export function Navigation({
  name,
  src,
  amountBooks,
  pendingExchanges,
  history,
  wishlist,
}: NavigationProps) {
  return (
    <nav className="mx-auto max-w-5xl font-primary">
      <section className="mb-10 flex items-center justify-between">
        <div>
          <span className="font-primary text-sm md:text-lg">Bem vindo(a),</span>
          <p className="font-secondary text-title-base md:text-title-lg">
            {name}
          </p>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="h-max w-max rounded-full">
              <Avatar src={src} name={name} />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <Dropdown.Content>
              <Dropdown.Item>
                <Link
                  className="flex h-full w-full items-center justify-between px-3"
                  href="/perfil/editar-perfil"
                >
                  <span>Gerenciar Conta</span>
                  <Icon.Gear size={18} color="#000" />
                </Link>
              </Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Item>
                <button className="flex h-full w-full items-center justify-between px-3">
                  <span>Alto Contraste</span>
                  <Icon.CircleHalf size={18} weight="fill" color="#000" />
                </button>
              </Dropdown.Item>
              <Dropdown.Item>
                <button className="flex h-full w-full items-center justify-between px-3">
                  <span>Tema claro</span>
                  <Icon.Sun size={18} color="#000" />
                </button>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  className="flex h-full w-full items-center justify-between px-3 text-red-500"
                  href="/login"
                >
                  <span>Encerrar sessão</span>
                  <Icon.SignOut size={18} className="text-red-500" />
                </Link>
              </Dropdown.Item>
            </Dropdown.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </section>

      <Swiper freeMode modules={[FreeMode]}>
        <SwiperSlide>
          <Link href="/perfil/trocas-pendentes">
            <Card type="menu">
              <Icon.Swap
                className="mb-3 text-primary-500"
                weight="bold"
                size={26}
              />
              <p className="mb-7 h-10 text-base font-medium text-gray-600 md:mb-0 md:h-max">
                Trocas
              </p>
              <p className="text-xs text-gray-400">
                {pendingExchanges} pendentes
              </p>
            </Card>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/perfil/meus-livros">
            <Card type="menu">
              <Icon.Books
                className="mb-3 text-primary-500"
                weight="bold"
                size={26}
              />
              <p className="mb-7 h-10 text-base font-medium text-gray-600">
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
                className="mb-3 text-primary-500"
                weight="bold"
                size={26}
              />
              <p className="mb-7 h-10 text-base font-medium text-gray-600">
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
                className="mb-3 text-primary-500"
                weight="bold"
                size={26}
              />
              <p className="mb-7 h-10 text-base font-medium text-gray-600">
                Histórico
              </p>
              <p className="text-xs text-gray-400">{history} trocas</p>
            </Card>
          </Link>
        </SwiperSlide>
      </Swiper>

      <div className="hidden w-full grid-cols-4 gap-5 min-[600px]:grid">
        <Link href="/perfil/trocas-pendentes">
          <Card type="menu">
            <Icon.Swap
              className="mb-3 text-primary-500"
              weight="bold"
              size={26}
            />
            <p className="mb-2 text-base font-medium text-gray-600">Trocas</p>
            <p className="break-keep text-xs text-gray-400">
              {pendingExchanges} pendentes
            </p>
          </Card>
        </Link>
        <Link href="/perfil/meus-livros">
          <Card type="menu">
            <Icon.Books
              className="mb-3 text-primary-500"
              weight="bold"
              size={26}
            />
            <p className="mb-2 text-base font-medium text-gray-600">
              Meus Livros
            </p>
            <p className="break-keep text-xs text-gray-400">
              {amountBooks} livros
            </p>
          </Card>
        </Link>
        <Link href="/perfil/lista-desejos">
          <Card type="menu">
            <Icon.Heart
              className="mb-3 text-primary-500"
              weight="bold"
              size={26}
            />
            <p className="mb-2 text-base font-medium text-gray-600">
              Lista de Desejos
            </p>
            <p className="break-keep text-xs text-gray-400">
              {wishlist} livros
            </p>
          </Card>
        </Link>
        <Link href="/perfil/historico">
          <Card type="menu">
            <Icon.ListMagnifyingGlass
              className="mb-3 text-primary-500"
              weight="bold"
              size={26}
            />
            <p className="mb-2 text-base font-medium text-gray-600">
              Histórico
            </p>
            <p className="break-keep text-xs text-gray-400">{history} trocas</p>
          </Card>
        </Link>
      </div>
    </nav>
  )
}
