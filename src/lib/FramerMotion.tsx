'use client'

import { ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'

interface MotionConfigsProps {
  children: ReactNode
}

export function MotionConfigs({ children }: MotionConfigsProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
