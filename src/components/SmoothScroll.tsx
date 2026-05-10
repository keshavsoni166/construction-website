"use client"

import Lenis from "@studio-freight/lenis"
import { useEffect } from "react"

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {

    const lenis = new Lenis({

      duration: 0.3,

      smoothWheel: true,

      wheelMultiplier: 1,

      touchMultiplier: 1,

      lerp: 0.15,

    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }

  }, [])

  return <>{children}</>
}