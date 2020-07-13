const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)


// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            acf {
              gatsby_template
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    console.error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage } = result.data

  // We want to create a detailed page for each
  // page node. We'll just use the WordPress Slug for the slug.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/${edge.node.slug}/`,
      component: slash(path.resolve(`./src/templates/${edge.node.acf.gatsby_template}`)),
      context: {
        id: edge.node.id,
      },
    })
  })
}

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type wordpress__PAGE implements Node {
      acf: acf
    }

    type acf implements Node @dontInfer {
      starters: [menuitem]
      mains: [menuitem]
      favourites: [menuitem]
      grills: [menuitem]
      sweets: [menuitem]
      grills_text: String!
      legend: String!
      gatsby_template: String!
      meta_description: String!
      meta_title: String!
      share_image: wordpress__wp_media
      image_carousel: [carouselitem]
      menugroup: [menugroup]
    }

    type menuitem implements Node @dontInfer {
      title: String!
      description: String!
      price: String!
      allergens: String!
    }
    
    
    type carouselitem implements Node @dontInfer {
      link: String!
      alt_text: String!
      image: wordpress__wp_media
    }
    type menugroup implements Node @dontInfer {
      menu_title: String!
      menu_description: String!
      menu_image: wordpress__wp_media
    }
  `)
}