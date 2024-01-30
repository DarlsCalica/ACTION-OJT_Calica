import React, { useState } from 'react'
import { Button, Collapse, Container, Row } from 'react-bootstrap'



export default function Hobbies() {
    const [open, setOpen] = useState(false);

  return (
   <Container fluid>
        <Row>
            <div className="aboutTitle">
            ABOUT ME
            </div>
        </Row>
        <Row style={{width: '90vh', margin: 'auto'}}>
            <div className="intro">
           <p> はじめまして!!!</p>  
            わたし  の  なまえ  は  カリカ  ダルリン です。<br />
            Baguio City から きました。<br />
            わたし は 22歳 です。<br />
            <Button className='trans'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Translate
      </Button>
      <Collapse in={open}>
        <div id="translation">
         <p>Nice to meet you! </p>
          My name is Darlene Calica <br />
          I am from Baguio City <br />
          I am 22 years old. <br />
          </div>
      </Collapse>
            </div>
        </Row>
   </Container>
  )
}
