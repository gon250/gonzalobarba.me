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
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <h3 className="title is-4">Blog list</h3>
            <ul>
              {props.blogs.map((post: Post) => {
                return (
                  <li key={post.id}>
                    <Link href={`/blog/${post.slug}`}>
                      <a>{post.title}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
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
