/** @jsx jsx */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from "theme-ui"
import { Header } from './header'
import { Footer } from './footer'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allWordpressMenusMenusItems {
            nodes {
                items {
                    menu_order
                    title
                    slug
                }
            }
        }
      }
    `}
    render={data => (
      <div>
        <Header title={data.site.siteMetadata.title} navItems={data.allWordpressMenusMenusItems.nodes[0].items} />
        <div sx={{
          color: "text.0",
        }}>
          {children}
        </div>
        <Footer title={data.site.siteMetadata.title} />
      </div>
    )}
  />
)
