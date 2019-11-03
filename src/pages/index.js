import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import '../sass/index.scss'

import blogImageOne from '../images/post-thumb-md-a.jpg'

const IndexPage = () => (
  <Layout>
      <section className="blogSection">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="blogSection__wrapper">

                <div className="blogSection__img">
                  <Link>
                    <img src={blogImageOne} alt="" />
                  </Link>
                </div>

                <div className="blogSection__body">
                  <div className="blogSection__header">
                    <p className="blogSection__header--postDate"><FontAwesomeIcon icon={['far', 'clock']} /> 30 June, 2019</p>
                    <p className="blogSection__header--authorName"><FontAwesomeIcon icon={['far', 'user']} /> Mushfiqur Niloy</p>
                    
                  </div>
                  <div className="blogSection__content">
                    <h2 className="blogSection__content--title">
                      <Link>Subline of her own road the headline of Alphabet Village arround</Link>
                    </h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="blogSection__wrapper">

                <div className="blogSection__img">
                  <Link>
                    <img src={blogImageOne} alt="" />
                  </Link>
                </div>

                <div className="blogSection__body">
                  <div className="blogSection__header">
                    <p className="blogSection__header--postDate"><FontAwesomeIcon icon={['far', 'clock']} /> 30 June, 2019</p>
                    <p className="blogSection__header--authorName"><FontAwesomeIcon icon={['far', 'user']} /> Mushfiqur Niloy</p>
                    
                  </div>
                  <div className="blogSection__content">
                    <h2 className="blogSection__content--title">
                      <Link>Subline of her own road the headline of Alphabet Village arround</Link>
                    </h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  </Layout>
)

export default IndexPage
