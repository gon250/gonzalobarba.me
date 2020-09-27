import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faStackOverflow,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  const { pathname } = useRouter()

  return (
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <h1 className="title is-3 family-secondary">Gonzalo Barba</h1>
            </a>
          </Link>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/blog">
              blog
            </a>
            <a className="navbar-item" href="/contact">
              contact
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="button btn-sm is-light"
                  href="https://github.com/gon250"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className="button btn-sm is-light"
                  href="https://stackoverflow.com/users/2545964/gon250?tab=profile"
                >
                  <FontAwesomeIcon icon={faStackOverflow} />
                </a>
                <a
                  className="button btn-sm is-light"
                  href="https://twitter.com/gon250"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  className="button btn-sm is-light"
                  href="https://www.linkedin.com/in/gbarbalopez"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
