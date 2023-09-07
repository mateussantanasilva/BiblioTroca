import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'

type LogoProps = ComponentProps<'img'>

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Logotipo Bibliotroca"
        width={1376}
        height={413}
        className={className}
      />
    </Link>
  )
}
