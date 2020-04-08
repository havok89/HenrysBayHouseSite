/** @jsx jsx */
import { SEOBlock } from "../components/SEO"
import { graphql } from "gatsby"
import { Styled, jsx } from "theme-ui"
import Layout from "../components/layout"
import "../scss/app.scss";

export default ({ data }) => {
    return (
      <Layout>
        <SEOBlock title={data.wordpressPage.acf.meta_title} desc={data.wordpressPage.acf.meta_description} />
        <div sx={{
          py: 3,
          px: 4,
          }}>
          <div className="container container--text">
            <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}></div>
          </div>
        </div>
      </Layout>
    )
  }


export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      acf {
        meta_description
        meta_title
      }
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
