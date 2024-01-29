import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Home() {
  return (
    <Container fluid>
        <Row className="justify-content-md-center" >
            <Col md="auto">
              <div style={{backgroundPosition: 'center center'}}>
                <h1>DIGITAL TRANSFORMATION</h1>
              </div>
            </Col>
        </Row>
    </Container>
  )
}
