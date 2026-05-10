'use client'

import Link from 'next/link'
import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import {
  HiOutlineMenuAlt3,
  HiX,
} from 'react-icons/hi'

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <>
      {/* MAIN NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
        fixed top-0 left-0
        w-full
        z-50
        bg-white/75
        backdrop-blur-xl
        border-b border-gray-200
        "
      >

        <div className="
        max-w-7xl mx-auto
        px-5 md:px-8
        py-5
        flex items-center justify-between
        ">

          {/* LOGO */}
          <div className="
          text-2xl md:text-3xl
          font-bold
          tracking-tight
          ">
            Hometech Studio
          </div>

          {/* DESKTOP MENU */}
          <div className="
          hidden md:flex
          items-center
          gap-10
          text-sm
          font-medium
          uppercase
          tracking-[2px]
          ">

            <Link href="#">Home</Link>

            <Link href="#services">
              Services
            </Link>

            <Link href="#projects">
              Projects
            </Link>

            <Link href="#contact">
              Contact
            </Link>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* ADMIN BUTTON */}
            <a
              href="/studio"
              target="_blank"
              className="
              hidden md:flex
              bg-[#c07a5c]
              text-white
              px-5 py-2
              rounded-full
              hover:scale-105
              transition
              "
            >
              Admin
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="
              md:hidden
              text-4xl
              text-black
              "
            >
              <HiOutlineMenuAlt3 />
            </button>

          </div>

        </div>

      </motion.nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed inset-0
            z-[999]
            bg-black/80
            backdrop-blur-2xl
            flex
            items-center
            justify-center
            "
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="
              absolute top-6 right-6
              text-white
              text-5xl
              "
            >
              <HiX />
            </button>

            {/* MENU LINKS */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="
              flex flex-col
              gap-10
              text-center
              "
            >

              <a
                href="#"
                onClick={() => setOpen(false)}
                className="
                text-white
                text-4xl
                font-bold
                "
              >
                Home
              </a>

              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="
                text-white
                text-4xl
                font-bold
                "
              >
                Services
              </a>

              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="
                text-white
                text-4xl
                font-bold
                "
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="
                text-white
                text-4xl
                font-bold
                "
              >
                Contact
              </a>

              <a
                href="/studio"
                target="_blank"
                className="
                mt-8
                bg-[#c07a5c]
                text-white
                px-8 py-4
                rounded-full
                text-lg
                "
              >
                Admin Panel
              </a>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  )
}