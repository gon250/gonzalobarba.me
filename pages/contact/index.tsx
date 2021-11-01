import React from 'react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="grid place-items-center">
      <div className="w-1/2 my-8">
        <h3 className="font-courier text-3xl">I'm happy to hear from you.</h3>
        <ul className="mt-4">
          <li className="text-pink-500 cursor-pointer cursor-pointer">
            <Link href="https://github.com/gon250">Github</Link>
          </li>
          <li className="text-pink-500 cursor-pointer">
            <Link href="https://stackoverflow.com/users/2545964/gon250?tab=profile">
              Stackoverflow
            </Link>
          </li>
          <li className="text-pink-500 cursor-pointer">
            <Link href="https://twitter.com/gon250">Twitter</Link>
          </li>
          <li className="text-pink-500 cursor-pointer">
            <Link href="https://linkedin.com/in/gbarbalopez">Linkedin</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
