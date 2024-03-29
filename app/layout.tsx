import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import './globals.css'

//components
import Navbar from './components/Navbar'

const inconsolata = Inconsolata({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SilviaRbgl',
  description: 'Frontend developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
