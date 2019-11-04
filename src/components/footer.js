import React from "react"
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="copyrightInfo text-center">
                            <p>Copyright &copy; 2019 Kisko Blog Proudly Designed & Developed by <a href="https://www.mushfiqur.me" target="_blank">Mushfiqur Niloy</a> </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;