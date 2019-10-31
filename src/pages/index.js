import React from "react"
import { Link } from "gatsby"
import { Container, Row } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
      <Container>
        <Row md={4}>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <SEO title="Home" />
          <Link to="/page-2/">Go to page 2</Link>
        </Row>
      </Container>
  </Layout>
)

export default IndexPage
