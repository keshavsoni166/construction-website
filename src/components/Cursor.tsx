"use client"

import { useEffect, useState } from "react"

export default function Cursor() {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    // DISABLE ON MOBILE
    if (window.innerWidth < 768) return

    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }

  }, [])

  // HIDE ON MOBILE
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null
  }

  return (
    <div
      className="
      fixed top-0 left-0
      w-6 h-6
      rounded-full
      bg-[#c78665]
      pointer-events-none
      z-[9999]
      mix-blend-difference
      transition-transform duration-75
      "
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  )
}