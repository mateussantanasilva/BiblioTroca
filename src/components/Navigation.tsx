'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Icon from '@phosphor-icons/react'
import { Avatar, AvatarProps } from './Avatar'
import { Card } from './Card'
import { Dropdown } from './Dropdown'
import { Skeleton } from './Skeleton'
import { useThemes } from '@/hooks/useThemes'

import 'swiper/css'
import 'swiper/css/free-mode'
import '@/styles/swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

type NavigationProps = AvatarProps & {
  pendingTransactions: number | undefined
  myBooks: number | undefined
  wishList: number | undefined
  history: number | undefined
}

export function Navigation({
  name,
  src,
  pendingTransactions,
  myBooks,
  wishList,
  history,
}: NavigationProps) {
  const { changeTheme, isDarkTheme } = useThemes()

  function handleChangeTheme() {
    changeTheme()
  }

  type MenuItem = {
    link: string
    name: string
    length: number | undefined
    subtitle: string
    icon: ReactNode
  }

  const menuItems: MenuItem[] = [
    {
      link: '/perfil/trocas-pendentes',
      name: 'Trocas',
      subtitle: 'pendente(s)',
      length: pendingTransactions,
      icon: (
        <Icon.Swap
          weight="bold"
          size={22}
          className="text-primary-500 dark:text-yellow-500"
        />
      ),
    },
    {
      link: '/perfil/meus-livros',
      name: 'Meus Livros',
      subtitle: 'livro(s)',
      length: myBooks,
      icon: (
        <Icon.Books
          weight="bold"
          size={22}
          className="text-primary-500 dark:text-yellow-500"
        />
      ),
    },
    {
      link: '/perfil/lista-desejos',
      name: 'Lista de Desejos',
      subtitle: 'desejo(s)',
      length: wishList,
      icon: (
        <Icon.Heart
          weight="bold"
          size={22}
          className="text-primary-500 dark:text-yellow-500"
        />
      ),
    },
    {
      link: '/perfil/historico',
      name: 'Histórico',
      subtitle: 'troca(s)',
      length: history,
      icon: (
        <Icon.ListMagnifyingGlass
          weight="bold"
          size={22}
          className="text-primary-500 dark:text-yellow-500"
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
                      className="flex h-full w-full items-center justify-between px-3"
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
        slidesPerView="auto"
        spaceBetween={2}
        freeMode={true}
        modules={[FreeMode]}
      >
        {menuItems.map((menuItem) => (
          <SwiperSlide key={menuItem.link}>
            <Link href={menuItem.link}>
              <Card type="menu">
                {menuItem.icon}
                <p className="h-max text-base-140-md text-black dark:text-yellow-500">
                  {menuItem.name}
                </p>
                <span className="h-max self-end text-xs-140 text-gray-400 dark:text-yellow-500">
                  {menuItem.length ? (
                    menuItem.length === 0 ? (
                      'Sem trocas'
                    ) : (
                      `${menuItem.length} ${menuItem.subtitle}`
                    )
                  ) : (
                    <Skeleton
                      variant="line"
                      className="w-[78px] animate-pulse"
                    />
                  )}
                </span>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </nav>
  )
}
