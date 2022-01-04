import React, { ReactNode } from 'react'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

interface LayoutProps {
  children?: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="font-mono">
      <Navbar />
      <section className="relative w-full h-full py-20 min-h-screen">
        <div className="container mx-auto px-4 h-full">{children}</div>
        <Footer />
      </section>
    </main>
  )
}
