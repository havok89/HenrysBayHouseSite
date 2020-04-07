const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Henrys Bay House Restaurant`,
    description: `this is the description`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: true,
        https: true,
        www: false,
        SymLinksIfOwnerMatch: false,
        host: 'henrysbayhouse.co.uk', 
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
          {
            from: 'henrysbayhouse.co.uk/stranraer/menu',
            to: 'henrysbayhouse.co.uk/menu',
          },
          {
            from: 'henrysbayhouse.co.uk/stranraer/contact',
            to: 'henrysbayhouse.co.uk/contact',
          },
          {
            from: 'henrysbayhouse.co.uk/stranraer',
            to: 'henrysbayhouse.co.uk',
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans\:300,400`,
          `Roboto Condensed\:300,400,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `cms.henrysbayhouse.co.uk`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
      },
      
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `libs`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
