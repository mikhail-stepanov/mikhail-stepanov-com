import React from "react"

import "./bio.css"
import avatar from '../../content/assets/avatar.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faTelegram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const Bio = () => {
    return (
        <section className='container centered'>
            <div className="about">

                <img alt='Mikhail Stepanov' src={avatar} style={{
                    width: 200,
                    height: 200,
                    borderRadius: `60%`,
                }}/>

                <h1 className="name">Mikhail Stepanov</h1>
                <h2 className="position">Software Engineer</h2>

                <ul>
                    <li>
                        <a href="https://github.com/mikhail-stepanov" aria-label="Github" style={{boxShadow: 'none'}}>
                            <FontAwesomeIcon icon={faGithub} size="2x"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mikhail-stepanovv/" aria-label="LinkedIn"
                           style={{boxShadow: 'none'}}>
                            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/go_on_maggot_brain" aria-label="Telegram" style={{boxShadow: 'none'}}>
                            <FontAwesomeIcon icon={faTelegram} size="2x"/>
                        </a>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default Bio
