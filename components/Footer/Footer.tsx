import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="grid place-items-center">
      <footer className="my-16">
        <p className="text-gray-500">
          © {new Date().getFullYear()}, Built with 💛 {` `}{' '}
          <Link href="https://www.twitter.com/gon250">
            <span className="text-pink-400">Gonzalo</span>
          </Link>
        </p>
      </footer>
    </div>
  )
}
