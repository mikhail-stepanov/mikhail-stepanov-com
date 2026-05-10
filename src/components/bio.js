import React from "react"

import "./bio.css"
import avatar from "../../content/assets/kabina.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Bio = () => {
  return (
    <section className="container centered">
      <div className="about">
        <div className="avatar-wrap">
          <img alt="Mikhail Stepanov" src={avatar} />
        </div>

        <h1 className="name">Mikhail Stepanov</h1>
        <h2 className="position">
          Head of Backend · Founding Engineer · PhD Candidate
        </h2>

        <ul>
          <li>
            <a
              href="https://github.com/mikhail-stepanov"
              aria-label="Github"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mikhail-stepanovv/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/go_on_maggot_brain"
              aria-label="Telegram"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Bio
