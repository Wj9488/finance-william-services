import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import localFont from "next/font/local"

const Telegraf = localFont({ 
  src: "./Fonts/Telegraf.otf",
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
      <body className={Telegraf.className}>{children}</body>
    </html>
  )
}
