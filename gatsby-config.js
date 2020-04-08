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
        custom: `
            # This is a custom rule!
            # This is a another custom rule!
            Redirect /stranraer/menu /menu
            Redirect /stranraer/contact /contact
            Redirect /stranraer /
        `,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-54500295-1",
        head: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "henrysbayhouse.co.uk",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
