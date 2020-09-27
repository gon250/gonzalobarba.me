import Link from 'next/link'
import React from 'react'

function IndexPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-4">
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <img src="/me.jpg" />
            </div>
          </div>
          <div className="column is-6">
            <h3 className="title is-3">Hey, I’m Gonzalo</h3>
            <p>
              I’m a full stack software developer, creative and ambitious. This
              website is a compilation of the things I have learned/shared over
              the years and in what I like to spend my free time.
            </p>
            <br />
            <p>
              I have a <a href="https://github.com/gon250">GitHub</a> account
              where you can follow what I'm doing. Or you can contact me by{' '}
              <a href="https://twitter.com/gon250">Twitter</a>. Or both.
            </p>
            <br />
            <p>
              You can read my <Link href="/blog">posts </Link> or contact me.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
