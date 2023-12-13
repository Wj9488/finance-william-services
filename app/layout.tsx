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
  title: 'BEA3008',
  description: 'Relevant Finance Equations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${NeueMontreal.className} mx-4 text-[#000] bg-[#fafafa] font-medium text-lg uppercase`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
