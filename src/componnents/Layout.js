import React from 'react'
import NavBar from "./NavBar"
import Footer from "./Footer"
import "../css/Layout.css"

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
