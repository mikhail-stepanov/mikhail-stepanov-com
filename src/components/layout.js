import React, { useEffect } from "react"
import Footer from "./footer"
import Header from "./header"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false

const Layout = ({ location, title, children }) => {
  useEffect(() => {
    const root = document.documentElement
    let raf = 0
    let pendingX = 50
    let pendingY = 30

    const apply = () => {
      root.style.setProperty("--mouse-x", pendingX + "%")
      root.style.setProperty("--mouse-y", pendingY + "%")
      raf = 0
    }

    const onMove = e => {
      const t = e.touches ? e.touches[0] : e
      pendingX = (t.clientX / window.innerWidth) * 100
      pendingY = (t.clientY / window.innerHeight) * 100
      if (!raf) raf = requestAnimationFrame(apply)
    }

    const onCardMove = e => {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      card.style.setProperty("--card-x", ((e.clientX - rect.left) / rect.width) * 100 + "%")
      card.style.setProperty("--card-y", ((e.clientY - rect.top) / rect.height) * 100 + "%")
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("touchmove", onMove, { passive: true })

    const cards = document.querySelectorAll(".glass-card")
    cards.forEach(c => c.addEventListener("pointermove", onCardMove))

    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("touchmove", onMove)
      cards.forEach(c => c.removeEventListener("pointermove", onCardMove))
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <main className="wrapper">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <div id="main" className="content">
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout
