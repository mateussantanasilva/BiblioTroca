import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'

import BlackLogo from '../assets/black-logo.svg'
import WhiteLogo from '../assets/white-logo.svg'

type LogoProps = ComponentProps<'img'> & {
  isWhiteLogo?: boolean
}

export function Logo({ isWhiteLogo = false, className }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src={isWhiteLogo ? WhiteLogo : BlackLogo}
        alt="Logotipo Bibliotroca"
        width={1376}
        className={className}
      />
    </Link>
  )
}
