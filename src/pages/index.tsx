/** @jsx jsx */
import { SEOBlock } from "../components/SEO"
import { Link, graphql } from "gatsby"
import { Styled, jsx } from "theme-ui"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../scss/app.scss";

export default ({ data }) => {
  return (
    <Layout>
      <SEOBlock title={data.wordpressPage.acf.meta_title} desc={data.wordpressPage.acf.meta_description} />
      <Carousel showStatus={false} showArrows={true} showThumbs={false}> 
        {data.wordpressPage.acf.image_carousel.map((slide, i) => (
          <div>
          {slide.link ? 
          <Link to={slide.link}>
            <Img key={i} loading="lazy" fluid={slide.image.localFile.childImageSharp.fluid} alt={slide.altText} />
          </Link> :
          <Img key={i} loading="lazy" fluid={slide.image.localFile.childImageSharp.fluid} alt={slide.altText} />
          }
          </div>
        ))}
      </Carousel>
      <div sx={{
          py: 3,
          px: 4,
      }}>
        <div className="container container--text" dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}></div>
      </div> 
    </Layout>
  )
}


export const pageQuery = graphql`
query {
  wordpressPage(id: { eq: "c435e602-e568-53df-92a2-3e3643fdd401" }) {
    title
    content
    acf {
      meta_description
      meta_title
      image_carousel {
          link
          alt_text
          image {
              localFile {
                  childImageSharp {
                      fluid(maxWidth: 1920,  quality: 100) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
      }
  }
  }
}
`
