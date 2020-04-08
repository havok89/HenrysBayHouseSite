/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import { SEOBlock } from "../components/SEO"
import { Link } from "gatsby"
import "../scss/app.scss";

const NotFoundPage = () => (
  <Layout>
    <SEOBlock title="404: Not found" />
    <div sx={{
          py: 3,
          px: 4,
          }}>
    <div className="container container--text">
      <h1>NOT FOUND</h1>
      <p>This page doesnt exist, please return to the <Link to="/">homepage</Link> and try again.</p>
    </div>
    </div>
  </Layout>
)

export default NotFoundPage
