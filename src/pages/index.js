import React from "react"
import { Container, Row } from 'react-bootstrap';


import Layout from "../components/layout"
import Blog from '../components/blog'
import '../sass/index.scss'

const IndexPage = () => (
  <Layout>
      <section className="blogSection">
        <Container>
          <Row>
            <Blog />
          </Row>
        </Container>
      </section>
  </Layout>
)

export default IndexPage
