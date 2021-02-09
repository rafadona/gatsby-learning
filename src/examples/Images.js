import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image3.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "image1.jpeg"}) {
      childImageSharp {
        fixed {
            ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "image2.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic image</h3>
        <img src={img} alt="a" />
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>Fluid image test/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} alt="" />
      </article>

    </section>
  )
}

export default Images
