import React from "react"
import Layout from "../components/layout"

const About = ({ location, title, children }) => {

    return (
        <Layout>
        
            <section className='container page'>
                <h1>About me</h1>
                <p>
                    Hi there! I am a backend tech lead and software engineer with 8 years of professional experience. I design software architecture on business need, build distributed, robust and fault tolerant services, manage and hire teams. I'm also interested in ML and some portion of frontend and mobile development. I am also finishing my <a href="https://www.hse.ru/staff/mstepanov">PhD at NRU HSE</a>.<br />
                </p>
                <p>
                    I contributed to architecture, design, integration and code base in <a href="https://www.aligntech.com/">Align Technology inc.</a>, <a href="https://dasreda.ru//">Business Environment (SberBank)</a>, <a href="https://www.docrobot.ru/">E-COM</a> and <a href="https://www.vtb.ru/n">VTB</a>.
                </p>
                <p>
                    I'm an active CTO and co-founder in startup Oneum which is in production and ready to use state – <a href="https://oneum.io/">Oneum.io</a>.
                </p>
                <p>
                    I always push myself to be a better lead, architect and developer and stay up to date with the latest technology trends. I'm also interested in ML and some portion of frontend and mobile development. You can check my resume here – <a href="https://mikhail-stepanov.com/resume.pdf">CV</a>. <br />
                </p>
                <p>
                    In my free time I'm dog walker, amateur musician, traveler and climber. Gotta be yacht captain soon.
                    <br />
                </p>
            </section>
        </Layout>
    )
}

export default About
