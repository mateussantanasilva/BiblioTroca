'use client'

import Link from 'next/link'

import { Avatar, AvatarProps } from './Avatar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Icon from '@phosphor-icons/react'
import { Card } from './Card'

import { Dropdown } from './Dropdown'
import { useThemes } from '@/hooks/useThemes'
import { ReactNode } from 'react'

import 'swiper/css'
import 'swiper/css/free-mode'
import '@/styles/swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

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
  const { changeTheme, isDarkTheme } = useThemes()

  function handleChangeTheme() {
    changeTheme()
  }

  type MenuItem = {
    link: string
    name: string
    subtitle: string
    icon: ReactNode
  }

  const menuItems: MenuItem[] = [
    {
      link: '/perfil/trocas-pendentes',
      name: 'Trocas',
      subtitle: `${pendingExchanges} trocas`,
      icon: <Icon.Swap weight="bold" size={22} className="text-primary-500" />,
    },
    {
      link: '/perfil/livros',
      name: 'Meus Livros',
      subtitle: `${amountBooks} livros`,
      icon: <Icon.Books weight="bold" size={22} className="text-primary-500" />,
    },
    {
      link: '/perfil/lista-de-desejos',
      name: 'Lista de Desejos',
      subtitle: `${wishlist} desejos`,
      icon: <Icon.Heart weight="bold" size={22} className="text-primary-500" />,
    },
    {
      link: '/perfil/historico',
      name: 'Histórico',
      subtitle: `${history} trocas`,
      icon: (
        <Icon.ListMagnifyingGlass
          weight="bold"
          size={22}
          className="text-primary-500"
        />
      ),
    },
  ]

  return (
    <nav className="mx-auto max-w-5xl font-primary">
      <section className="mb-10 flex items-start justify-between">
        <div>
          <p className="font-secondary text-title-sm md:text-title-base">
            Olá, {name}!
          </p>
          <span className="font-primary text-xs-140 md:text-lg">
            Sua jornada já lhe rendeu
          </span>
          <div className="mt-2 flex items-center gap-1">
            <Icon.CurrencyCircleDollar
              className="h-[27px] w-[27px] text-yellow-500 md:h-9 md:w-9"
              weight="bold"
            />
            <span className="font-secondary text-title-base">240 pontos</span>
          </div>
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
                  className="flex h-full w-full items-center justify-between px-3 dark:text-yellow-500"
                  href="/perfil/editar-perfil"
                >
                  <span>Gerenciar Conta</span>
                  <Icon.Gear size={14} />
                </Link>
              </Dropdown.Item>
              <Dropdown.Separator />
              {!isDarkTheme && (
                <>
                  <Dropdown.Item>
                    <button
                      className="flex h-full w-full items-center justify-between px-3"
                      onClick={handleChangeTheme}
                    >
                      <span>Alto Contraste</span>
                      <Icon.CircleHalf size={18} weight="fill" color="#000" />
                    </button>
                  </Dropdown.Item>
                  <Dropdown.Separator />
                </>
              )}
              {isDarkTheme && (
                <>
                  <Dropdown.Item>
                    <button
                      onClick={handleChangeTheme}
                      className="flex h-full w-full items-center justify-between px-3 dark:text-yellow-500"
                    >
                      <span>Tema claro</span>
                      <Icon.Sun size={18} />
                    </button>
                  </Dropdown.Item>
                  <Dropdown.Separator />
                </>
              )}
              <Dropdown.Item>
                <Link
                  className="flex h-full w-full items-center justify-between px-3 text-red-500 dark:text-yellow-500"
                  href="/login"
                >
                  <span>Encerrar sessão</span>
                  <Icon.SignOut
                    size={18}
                    className="text-red-500 dark:text-yellow-500"
                  />
                </Link>
              </Dropdown.Item>
            </Dropdown.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </section>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={2}
        freeMode={true}
        modules={[FreeMode]}
      >
        {menuItems.map((menuItem) => (
          <SwiperSlide key={menuItem.link}>
            <Link href={menuItem.link}>
              <Card type="menu">
                {menuItem.icon}
                <p className="mb-auto mt-3 text-base-140-md text-black">
                  {menuItem.name}
                </p>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </nav>
  )
}
