import React, { useState } from 'react'
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
  const [isActive, setIsActive] = useState('')

  const handleMenu = () =>
    isActive === '' ? setIsActive('is-active') : setIsActive('')

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
            onClick={() => handleMenu()}
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasic"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasic" className={`navbar-menu ${isActive}`}>
          <div className="navbar-start">
            <Link href="/blog">
              <a className="navbar-item">blog</a>
            </Link>
            <Link href="/contact">
              <a className="navbar-item">contact</a>
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-light" href="https://github.com/gon250">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className="button is-light"
                  href="https://stackoverflow.com/users/2545964/gon250?tab=profile"
                >
                  <FontAwesomeIcon icon={faStackOverflow} />
                </a>
                <a
                  className="button is-light"
                  href="https://twitter.com/gon250"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  className="button is-light"
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
