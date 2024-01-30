import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import'./Home.css'

export default function Home() {
  return (
    <Container fluid='md'>
      {/* Title and Author */}
       <Row>
        <div className='title'>
          DIGITAL TRANSFORMATION
        </div>
       </Row>
       <Row >
       <div className="author">
            Created By: Darlene Louise M. Calica
        </div>
       </Row>

      {/* Buttons */}
      <Row className='Buttons' style={{fontFamily: 'Pixelify Sans'}}>
      <Col xs={6} md={4}>
           <Button variant="success" size="lg">
            Calculator
          </Button>{' '}
        </Col>
        <Col xs={6} md={4}>
      
        </Col>
        <Col xs={6} md={4}>
          <Button variant="success" size="lg">
            JSON Sample
          </Button>
        </Col>
      </Row>

      {/* Hobbies */}
      <Row>
      <Card>
      <Card.Header as="h5" style={{fontFamily: 'Workbench', fontSize: '30px'}}>ABOUT ME</Card.Header>
      <Card.Body>
        <Card.Title style={{fontFamily: 'Sixtyfour', fontSize: '20px'}}>My Hobbies</Card.Title>
        <Card.Text style={{fontFamily: 'Barlow', fontSize: '18px', fontWeight: '400'}}>
          What's up! My Name is Darlene Louise Calica, bit long? Aight, call me Darls <br></br>
          Wanna know what my Hobbies are?
        </Card.Text>
        <Button variant="dark"  style={{fontFamily: 'Barlow', fontSize: '18px'}}>Yes, I wanna know! </Button>
      </Card.Body>
    </Card>
    
      </Row>
    </Container>
  )
}
