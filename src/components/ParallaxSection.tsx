'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxSection({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
    >
      {children}
    </motion.div>
  )
}