/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby tutorial",
    description: "qualquer descricao",
    author: "rafael",
    data: ["item1", "item2"],
    person: { name: "peter", age: 32 },

  },
  plugins: [`gatsby-plugin-styled-components`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `yb7lmmcnk16c`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `ZSe_0F4u99_EcH57-Pwl3HXModx3eRn3sYnYN_SxYsw`,
      },
    },
  ],
}
