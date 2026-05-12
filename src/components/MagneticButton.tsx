"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {

  const ref = useRef<HTMLDivElement>(null)

  function handleMouse(e: any) {

    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
  }

  function reset() {
    if (!ref.current) return
    ref.current.style.transform = `translate(0px,0px)`
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      transition={{ type: "spring", stiffness: 120 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}