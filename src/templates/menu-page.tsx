/** @jsx jsx */
import { SEOBlock } from "../components/SEO"
import { graphql } from "gatsby"
import { Styled, jsx } from "theme-ui"
import Layout from "../components/layout"
import Img from "gatsby-image"
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
            <Styled.h1>{data.wordpressPage.title}</Styled.h1>
            {/* <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}></div> */}
          </div>
          {data.wordpressPage.acf.menugroup.map((item, i) => ( 
              <div className="container container--text">
                <div className="one_half">
                    <Styled.h2>{item.menu_title}</Styled.h2>
                    <div dangerouslySetInnerHTML={{__html: item.menu_description}}></div>
                </div>
                
                <div className="one_half last">
                  <Img loading="lazy" fluid={item.menu_image.localFile.childImageSharp.fluid} alt={item.menu_title} />
                </div>
              </div>
            ))}
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
            menugroup {
                menu_title
                menu_description
                menu_image {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 600,  quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
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
