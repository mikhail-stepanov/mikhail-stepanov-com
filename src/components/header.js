import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className="navigation">
      <section className="container">
        <Link className="navigation-title" to="/">
          Mikhail Stepanov
        </Link>
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to="/about" partiallyActive>
              About me
            </Link>
          </li>
          <li className="navigation-item">
            <a
              href="https://github.com/mikhail-stepanov"
              target="_blank"
              rel="noreferrer"
            >
              Projects
            </a>
          </li>
          <li className="navigation-item">
            <a href="/resume.pdf">CV</a>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default Header
