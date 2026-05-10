import "./globals.css"

// import Cursor from "@/components/Cursor"
import Loader from "@/components/Loader"
import SmoothScroll from "@/components/SmoothScroll"

import WhatsAppButton from "@/components/WhatsAppButton"

import {
  Playfair_Display,
  Inter,
} from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "BuildCo",
  description: "Premium construction website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >

      <body className="bg-black text-white overflow-x-hidden">

        <Loader />

        {/* <Cursor /> */}

        <SmoothScroll>
          {children}
        </SmoothScroll>

        <WhatsAppButton />

      </body>

    </html>
  )
}