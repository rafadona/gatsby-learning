import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../componnents/Layout"
import Image from "gatsby-image"

const ComponentName = ({
    data: {
        product: {
            price,
            title,
            image: { fixed },
            info: { info },
        },
    },
}) => {
    return (
        <Layout>
            <div style={{ textAlign: "center" }}>

                <h1>single product : {title}</h1>
            </div>
            <section className="single-product">
                <article>
                    <Image fixed={fixed} alt={title} />
                </article>
                <article>
                    <h1>{title}</h1>
                    <h3>${price}</h3>
                    <p>{info}</p>
                    <button>add to cart</button>
                    <div style={{ textAlign: "center" }}>
                        <Link to="/products">back to products</Link>
                    </div>

                </article>

            </section>
        </Layout>
    )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 1000) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName