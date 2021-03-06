import { Link } from 'gatsby'
import React from 'react'


const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog/">Blog</Link>
                </li>
                <li>
                    <Link to="/products/">Products</Link>
                </li>
                <li>
                    <Link to="/examples">Examples</Link>
                </li>
                <li>
                    <Link to="/images">images</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
