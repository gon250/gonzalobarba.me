import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export default function Blog(props: { blogs: any[] }) {
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <h3 className="title is-4">Blog list</h3>
            <ul>
              {props.blogs.map(
                (
                  blog: {
                    id: string | number
                    slug: any
                    title: React.ReactNode
                  },
                  idx: any
                ) => {
                  return (
                    <li key={blog.id}>
                      <Link href={`/blog/${blog.slug}`}>
                        <a>{blog.title}</a>
                      </Link>
                    </li>
                  )
                }
              )}
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
