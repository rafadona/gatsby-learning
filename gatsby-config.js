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
  plugins: [`gatsby-plugin-styled-components`],
}
