import React from "react"
import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <section className="container page">
        <h1>About me</h1>

        <p>Hi there! 👋</p>

        <p>
          I'm a backend engineering leader with 9+ years of hands-on
          experience, currently serving as <strong>Head of Backend at{" "}
          <a
            href="https://www.linkedin.com/company/sbereducation/"
            target="_blank"
            rel="noreferrer"
          >
            SberEducation
          </a></strong>.
        </p>

        <p>
          My focus today is on the management side — leading and growing
          engineering teams, hiring, and shaping technical strategy, while
          staying close to the code. I design software architectures driven
          by business needs and build distributed, robust, and fault-tolerant
          services on the JVM stack (Java / Kotlin).
        </p>

        <p>
          Beyond backend, I work across frontend, mobile (Dart / Flutter),
          and increasingly ML and applied AI. That breadth has been
          especially useful in founding-engineer roles, where the job is to
          ship the whole product, not just one slice of it.{" "}
          <strong>Open to conversations</strong> about backend architecture,
          engineering leadership, and{" "}
          <strong>early-stage product building</strong>.
        </p>

        <p>
          Along the way I contributed to architecture, design, integration
          and code base at{" "}
          <a href="https://www.aligntech.com/">Align Technology</a>,{" "}
          <a href="https://dasreda.ru/">Business Environment (SberBank)</a>,{" "}
          <a href="https://www.docrobot.ru/">E-COM</a> and{" "}
          <a href="https://www.vtb.ru/">VTB</a>. At{" "}
          <a href="https://oneum.io/">Oneum</a> I was the founding
          engineer — designed the system end-to-end and brought the startup
          to production.
        </p>

        <p>
          I hold a PhD candidacy from{" "}
          <a href="https://www.hse.ru/staff/mstepanov">HSE University</a>{" "}
          (defense pending).
        </p>

        <p>
          Grab my resume here —{" "}
          <a href="https://mikhail-stepanov.com/resume.pdf">CV</a>, or reach
          out at{" "}
          <a href="mailto:the.mikhail.stepanov@gmail.com">
            the.mikhail.stepanov@gmail.com
          </a>{" "}
          or on{" "}
          <a
            href="https://t.me/go_on_maggot_brain"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>.
        </p>

        <p>
          In my free time I'm a dog walker, amateur musician and sailor.
        </p>
      </section>
    </Layout>
  )
}

export default About
