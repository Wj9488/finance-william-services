import type { Metadata } from 'next'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
import './globals.css'

import localFont from "next/font/local"

const NeueMontreal = localFont({ 
  src: "./Fonts/NeueMontreal-Medium.otf",
  display: "swap"
})

export const metadata: Metadata = {
  title: 'Finance For Managers',
  description: 'Relevant Finance Equations',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${NeueMontreal.className} transition-colors duration-200 ease-in-out dark:bg-[#070707] lg:mx-4 mx-2 text-[#070707] dark:text-[#ebebeb] bg-[#fafafa] font-medium text-base lg:text-lg `}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
