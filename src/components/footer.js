import React from "react"

const Footer = ({location, title, children}) => {
    return (
        <footer className="footer">
            <section className="container">
                {new Date().getFullYear()}
            </section>
        </footer>
    )
}

export default Footer
