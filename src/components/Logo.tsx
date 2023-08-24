import Image from 'next/image'
import { ComponentProps } from 'react'

type LogoProps = ComponentProps<'img'>

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Logotipo Bibliotroca"
      width={1376}
      height={413}
      className={className}
    />
  )
}
