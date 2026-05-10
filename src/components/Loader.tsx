'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed inset-0 bg-black z-[99999] flex items-center justify-center"
    >
      <h1 className="text-white text-4xl font-bold">
        BuildCo
      </h1>
    </motion.div>
  )
}