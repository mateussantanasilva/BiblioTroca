'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  noMargin?: boolean
  isHero?: boolean
}

export function Reveal({
  children,
  noMargin = false,
  isHero = false,
}: RevealProps) {
  const margin = noMargin ? '' : '0px 0px -35% 0px'

  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin,
  })

  const variantInitial = isHero
    ? { opacity: 0, translateY: 200 }
    : { opacity: 0, translateX: -200 }

  const variantAnimate = isHero
    ? { opacity: 1, translateY: 0 }
    : { opacity: 1, translateX: 0 }

  return (
    <motion.div
      ref={ref}
      initial={variantInitial}
      animate={isInView && variantAnimate}
      transition={{ type: 'spring', damping: 20, stiffness: 120 }}
    >
      {children}
    </motion.div>
  )
}
