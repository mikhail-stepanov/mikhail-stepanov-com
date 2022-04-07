import React from "react"
import Layout from "../components/layout"

const About = ({ location, title, children }) => {

    return (
        <Layout>
        
            <section className='container page'>
                <h1>About me</h1>
                <p>
                    Hi! My name is Mikhail Stepanov. I am a backend (Java) software engineer with 4+ years of professional experience and passion for clean and performant code. I build distributed, robust and fault tolerant services for businesses. <br />
                </p>
                <p>
                    Born in Russia, I lived in Germany but currently - Russia. I contrubuted to <a href="https://www.aligntech.com/">Align Technology inc.</a>, <a href="https://dasreda.ru//">Business Environment (SberBank)</a>, <a href="https://www.docrobot.ru/">E-COM</a> and <a href="https://www.vtb.ru/n">VTB</a>.
                </p>
                <p>
                    I always push myself to be a better developer and stay up to date with the latest technology trends. I'm also interested in ML (scikit-learn, pytorch) and mobile development (Flutter). <br />
                </p>
                <p>
                    In my free time I play music and travel.
                    <br />
                </p>
            </section>
        </Layout>
    )
}

export default About
