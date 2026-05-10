import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/cv.css"

const experience = [
  {
    when: "Sep 2025 — now",
    role: "Head of Backend",
    where: "SberEducation",
    location: "Moscow",
    bullets: [
      "Hiring, growth and organisational structure for the backend team",
      "Design system architecture and develop internal platform solutions",
      "Define technology choices and build technical strategy",
      "Implement engineering practice, ensure code quality and stability",
      "Collaborate with the CTO, heads of departments and product teams",
    ],
  },
  {
    when: "Jun 2024 — Aug 2025",
    role: "Founding Engineer · Tech Lead",
    where: "Oneum",
    bullets: [
      "Co-founder and acting CTO; owned backend, ML and frontend",
      "Designed the system end-to-end and brought Oneum.io to production",
    ],
  },
  {
    when: "Feb 2023 — Oct 2025",
    role: "Senior Software Engineer",
    where: "Align Technology",
    location: "Yerevan",
    bullets: [
      "Customer-facing backends for clinical and patient-care services",
      "Split a monolith into a distributed system",
      "Cross-functional process changes, hiring, sprint and release reviews",
    ],
  },
  {
    when: "Nov 2020 — Feb 2023",
    role: "Software Engineer",
    where: "Align Technology",
    location: "Moscow",
    bullets: [
      "Microservices for the doctor's portal; scrum-master role",
      "Sprint planning and progress reviews across the team",
      "Java, Spring, AWS, Heroku, Docker, PostgreSQL, Redis, Kafka, RabbitMQ",
    ],
  },
  {
    when: "Aug 2020 — Sep 2021",
    role: "Lecturer",
    where: "GeekBrains",
    bullets: [
      "Lectures on system architecture, Java and the Spring Framework",
    ],
  },
  {
    when: "Dec 2019 — Nov 2020",
    role: "Java Developer",
    where: "Business Environment · SberBank",
    location: "Moscow",
    bullets: [
      "Backend for an educational online platform on Java 8 + Play",
      "Microservice architecture, code reviews, GraphQL, Grafana, Kibana",
    ],
  },
  {
    when: "Feb 2019 — Nov 2019",
    role: "Junior Java Developer",
    where: "E-COM",
    location: "Moscow",
    bullets: [
      "Backend for an enterprise document-management system in retail",
      "Java 8, Spring, ElasticSearch, RabbitMQ, PostgreSQL",
    ],
  },
  {
    when: "Aug 2017 — Feb 2019",
    role: "Performance Test Engineer",
    where: "Аплана",
    location: "Moscow",
    bullets: [
      "Performance scripts in C and Java for banking software",
      "LoadRunner, JMeter, Java stubs",
    ],
  },
]

const education = [
  {
    when: "2022 — 2025",
    role: "PhD candidacy, System Analysis",
    where: "HSE University",
    note: "defense pending",
  },
  {
    when: "2020 — 2022",
    role: "MSc, Business Informatics",
    where: "HSE University",
  },
  {
    when: "2019 — 2020",
    role: "Exchange student · Cyber Security",
    where: "BTU Cottbus-Senftenberg",
  },
  {
    when: "2016 — 2020",
    role: "BSc, Computer Science",
    where: "HSE University",
  },
]

const skills = [
  "Java", "Kotlin", "Spring", "Apache Kafka", "RabbitMQ",
  "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS",
  "Heroku", "ElasticSearch", "GraphQL", "Flutter", "Applied ML",
]

const certs = [
  "Reactive Architecture III · IV · V",
  "Docker Mastery — Kubernetes + Swarm",
  "Foundations of Project Management",
]

const languages = [
  "English — full professional",
  "Russian — native",
  "German — elementary",
]

const handlePrint = () => {
  if (typeof window !== "undefined") window.print()
}

const CV = () => (
  <Layout>
    <SEO
      title="CV — Mikhail Stepanov"
      description="Mikhail Stepanov — Head of Backend at SberEducation, PhD candidate at HSE. 9+ years of distributed systems on the JVM, plus frontend, Flutter and applied ML."
    />
    <div className="cv-shell">
      <article className="cv">
        <div className="cv-toolbar">
          <button className="cv-print-btn" onClick={handlePrint} type="button">
            Save as PDF
          </button>
        </div>

        <header className="cv-header">
          <div className="cv-id">
            <h1>Mikhail Stepanov</h1>
            <p className="cv-role">
              Head of Backend · Founding Engineer · PhD Candidate
            </p>
          </div>
          <ul className="cv-contact">
            <li>
              <a href="mailto:the.mikhail.stepanov@gmail.com">
                the.mikhail.stepanov@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mikhail-stepanovv/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/mikhail-stepanovv
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mikhail-stepanov"
                target="_blank"
                rel="noreferrer"
              >
                github.com/mikhail-stepanov
              </a>
            </li>
            <li>Moscow</li>
          </ul>
        </header>

        <section className="cv-section">
          <h2 className="cv-eyebrow">Summary</h2>
          <p className="cv-summary">
            Backend engineering leader with 9+ years of hands-on experience.
            Currently Head of Backend at SberEducation. Focus on the
            management side — leading and growing engineering teams,
            hiring, and shaping technical strategy, while staying close to
            the code. Distributed, robust, fault-tolerant services on the
            JVM stack (Java / Kotlin); cross-stack reach into frontend,
            mobile (Dart / Flutter), and applied ML / AI. Founding-engineer
            experience.
          </p>
        </section>

        <section className="cv-section">
          <h2 className="cv-eyebrow">Experience</h2>
          <ul className="cv-list">
            {experience.map(item => (
              <li key={item.role + item.when} className="cv-item">
                <div className="cv-item-when">{item.when}</div>
                <div className="cv-item-body">
                  <h3>{item.role}</h3>
                  <div className="cv-where">
                    {item.where}
                    {item.location ? ` · ${item.location}` : ""}
                  </div>
                  <ul className="cv-bullets">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section">
          <h2 className="cv-eyebrow">Education</h2>
          <ul className="cv-list">
            {education.map(item => (
              <li key={item.role + item.when} className="cv-item">
                <div className="cv-item-when">{item.when}</div>
                <div className="cv-item-body">
                  <h3>{item.role}</h3>
                  <div className="cv-where">
                    {item.where}
                    {item.note ? ` · ${item.note}` : ""}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="cv-grid">
          <section className="cv-section">
            <h2 className="cv-eyebrow">Skills</h2>
            <p className="cv-pills">{skills.join(" · ")}</p>
          </section>
          <section className="cv-section">
            <h2 className="cv-eyebrow">Certifications</h2>
            <ul className="cv-bullets">
              {certs.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>
          <section className="cv-section">
            <h2 className="cv-eyebrow">Languages</h2>
            <ul className="cv-bullets">
              {languages.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </div>
  </Layout>
)

export default CV
