import React from 'react'
import Layout from "../componnents/Layout"
import styles from "../css/products.module.css"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"


const products = ({ data }) => {
    const { allContentfulProduct: { nodes: products } } = data;
    return (
        <Layout>
            <div className={styles.page}>

                {products.map((product) => {
                    return <article key={product.id}>
                        <Image fluid={product.image.fluid} alt={product.title} />
                        <h3>{product.title} <span>R${product.price}</span></h3>
                        <Link to={`/products/${product.slug}`}>more details</Link>
                    </article>

                })}

            </div>

        </Layout>

    )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        image {
          fluid(maxWidth:5000) {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

export default products

