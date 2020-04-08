import React from "react"
import Layout from "../components/layout"
import { SEOBlock } from "../components/SEO"
import { Link } from "gatsby"
const NotFoundPage = () => (
  <Layout>
    <SEOBlock title="404: Not found" />
    <div className="container container--text">
      <h1>NOT FOUND</h1>
      <p>This page doesnt exist, please return to the <Link to="/">homepage</Link> and try again.</p>
    </div>
  </Layout>
)

export default NotFoundPage
