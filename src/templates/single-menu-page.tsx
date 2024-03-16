/** @jsx jsx */
import React from 'react'
import { SEOBlock } from "../components/SEO"
import { graphql } from "gatsby"
import { Styled, jsx } from "theme-ui"
import Layout from "../components/layout"
import "../scss/app.scss";

export default ({ data }) => {
    return (
      <Layout>
        <SEOBlock
          title={data.wordpressPage.acf.meta_title} 
          desc={data.wordpressPage.acf.meta_description} 
          image={data.wordpressPage.acf.share_image.localFile.publicURL} />
        <div sx={{
          py: 3,
          px: 4,
          }}>
          <div className="container container--text ta__center">
            <Styled.h1>{data.wordpressPage.title}</Styled.h1>
            {/* <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}></div> */}
          </div>

            {/* Starters */}
            <div className="container container--text ta__center">
                <Styled.h2>Starters</Styled.h2>
            </div>
            <div className="container container--text f-container f-container--menu ta__center">
                {data.wordpressPage.acf.starters.map((item, i) => ( 
                    <div className="f-item__menu">
                        <Styled.h3>{item.title} {item.allergens &&
                            <span className="allergens">
                                {item.allergens}
                            </span>
                        }</Styled.h3>
                        
                        <p>
                            {item.description ? 
                            <React.Fragment>{item.description}<br/></React.Fragment> : ""}
                            {item.price ? 
                            <strong>£{item.price}</strong> : ""}
                        </p>
                    </div>
                ))}
            </div>

            <div className="menu-spacer"></div>
            {/* Mains */}
            <div className="container container--text ta__center">
                <Styled.h2>Main Courses</Styled.h2>
            </div>
            <div className="container container--text f-container f-container--menu ta__center">
                {data.wordpressPage.acf.mains.map((item, i) => ( 
                    <div className="f-item__menu">
                        <Styled.h3>{item.title} {item.allergens &&
                            <span className="allergens">
                                {item.allergens}
                            </span>
                        }</Styled.h3>
                        
                        <p>
                            {item.description ? 
                            <React.Fragment>{item.description}<br/></React.Fragment> : ""}
                            {item.price ? 
                            <strong>£{item.price}</strong> : ""}
                        </p>
                    </div>
                ))}
            </div>
            <div className="menu-spacer"></div>
            {/* Grills */}
            <div className="container container--text ta__center">
                <Styled.h2>Grills</Styled.h2>
                <p style={{'maxWidth':'500px', 'margin': '0 auto'}}>{data.wordpressPage.acf.grills_text}</p>
            </div>
            <div className="container container--text f-container f-container--menu ta__center">
                {data.wordpressPage.acf.grills.map((item, i) => ( 
                    <div className="f-item__menu">
                        <Styled.h3>{item.title} {item.allergens &&
                            <span className="allergens">
                                {item.allergens}
                            </span>
                        }</Styled.h3>
                        
                        <p>
                            <strong>£{item.price}</strong>
                        </p>
                    </div>
                ))}
            </div>
            
            <div className="menu-spacer"></div>

            {/* Favourites 
            <div className="container container--text ta__center">
                <Styled.h2>Henrys Favourites</Styled.h2>
            </div>
            <div className="container container--text f-container f-container--menu ta__center">
                {data.wordpressPage.acf.favourites.map((item, i) => ( 
                    <div className="f-item__menu">
                        <Styled.h3>{item.title} {item.allergens &&
                            <span className="allergens">
                                {item.allergens}
                            </span>
                        }</Styled.h3>
                        
                        <p>
                            {item.description ? 
                            <React.Fragment>{item.description}<br/></React.Fragment> : ""}
                            {item.price ? 
                            <strong>£{item.price}</strong> : ""}
                        </p>
                    </div>
                ))}
            </div>
            <div className="menu-spacer"></div>*/}

            {/* Sweets */}
            <div className="container container--text ta__center">
                <Styled.h2>Sweets</Styled.h2>
            </div>
            <div className="container container--text f-container f-container--menu ta__center">
                {data.wordpressPage.acf.sweets.map((item, i) => ( 
                    <div className="f-item__menu">
                        <Styled.h3>{item.title} {item.allergens &&
                            <span className="allergens">
                                {item.allergens}
                            </span>
                        }</Styled.h3>
                        
                        <p>
                            {item.description ? 
                            <React.Fragment>{item.description}<br/></React.Fragment> : ""}
                            {item.price ? 
                            <strong>£{item.price}</strong> : ""}
                        </p>
                    </div>
                ))}
            </div>
            
            <div className="menu-spacer"></div>
            <div className="container container--text ta__center">
                <p>{data.wordpressPage.acf.legend}</p>
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
          share_image {
            localFile {
              publicURL
            }
          }
          grills {
            allergens
            price
            title
          }
          grills_text
          legend
          mains {
            description
            price
            title
            allergens
          }
          starters {
            description
            price
            title
            allergens
          }
          sweets {
            description
            price
            title
            allergens
          }
        }
    }
  }
`
