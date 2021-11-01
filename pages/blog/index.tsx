import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

interface Post {
  id: string
  title: string
  slug: string
  date: string
}

export default function Blog(props: { blogs: Post[] }) {
  return (
    <div className="grid place-items-center">
      <div className="w-1/2 my-8">
        <h3 className="font-courier text-3xl">Blog list</h3>
        <ul className="my-4">
          {props.blogs.map((post: Post) => {
            return (
              <li key={post.id} className="text-pink-500">
                <Link href={`/blog/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const fs = require('fs')
  const matter = require('gray-matter')
  const { v4: uuid } = require('uuid')

  const files = fs.readdirSync(`${process.cwd()}/contents`, 'utf-8')

  const blogs = files
    .filter((fn: string) => fn.endsWith('.md'))
    .map((fn: any) => {
      const path = `${process.cwd()}/contents/${fn}`
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
      })
      const { data } = matter(rawContent)

      return { ...data, id: uuid() }
    })

  return {
    props: { blogs },
  }
}
