import { Link } from 'gatsby'
import React from 'react'


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/blog/">Blog</Link>
                </li>
                <li>
                    <Link to="/products/">Products</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
