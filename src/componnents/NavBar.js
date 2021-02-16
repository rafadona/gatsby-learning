import { Link } from 'gatsby'
import React from 'react'


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home test </Link>
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
