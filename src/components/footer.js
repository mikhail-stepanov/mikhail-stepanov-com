import React from "react"

const Footer = ({location, title, children}) => {
    return (
        <footer className="footer">
            <h4 className="container">
                Worldwide. {new Date().getFullYear()}
            </h4>
        </footer>
    )
}

export default Footer
