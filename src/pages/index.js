import React from 'react'
import Gatsby, { Link } from "gatsby";

function index() {
  return (
    <div>
      <h1>index page</h1>
      <Link to="/blog/">Blog</Link>
      <div><Link to="/products/">Products</Link></div>
      

    </div>
  )
}

export default index
