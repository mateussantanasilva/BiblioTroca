import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  noMargin?: boolean
}

export function Reveal({ children, noMargin = false }: RevealProps) {
  const margin = noMargin ? '' : '0px 0px -35% 0px'

  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateX: -200 }}
      animate={isInView && { opacity: 1, translateX: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      {children}
    </motion.div>
  )
}
