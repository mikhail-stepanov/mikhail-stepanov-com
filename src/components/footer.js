import React from "react"

const Footer = ({location, title, children}) => {
    return (
        <footer className="footer">
            <h2 className="container">
                Worldwide. {new Date().getFullYear()}
            </h2>
        </footer>
    )
}

export default Footer
