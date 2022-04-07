import React from "react"

const Footer = ({location, title, children}) => {
    return (
        <footer className="footer">
            <h5 className="container">
                Worldwide. {new Date().getFullYear()}
            </h5>
        </footer>
    )
}

export default Footer
