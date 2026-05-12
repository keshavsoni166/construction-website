"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LuxuryLoader() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)

  }, [])

  return (

    <AnimatePresence mode="wait">

      {loading && (

        <motion.div

          initial={{ opacity: 1 }}

          animate={{ opacity: 1 }}

          exit={{
            opacity: 0,
            transition: {
              duration: 1.2,
              ease: "easeInOut",
            },
          }}

          className="
            fixed
            inset-0
            bg-[#111]
            z-[99999]
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >

          {/* BACKGROUND GLOW */}
          <motion.div

            initial={{ scale: 0.8, opacity: 0 }}

            animate={{
              scale: 1.4,
              opacity: 0.15,
            }}

            transition={{
              duration: 2,
              ease: "easeOut",
            }}

            className="
              absolute
              w-[500px]
              h-[500px]
              rounded-full
              bg-[#c78665]
              blur-[120px]
            "
          />

          {/* LOGO */}
          <motion.div

            initial={{
              opacity: 0,
              y: 40,
              letterSpacing: "4px",
            }}

            animate={{
              opacity: 1,
              y: 0,
              letterSpacing: "10px",
            }}

            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}

            className="
              relative
              z-10
              text-white
              text-4xl
              md:text-6xl
              font-bold
              tracking-[10px]
            "
          >

            HOMETECH

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}