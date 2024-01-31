import { useState } from 'react'
import {  Button, Col, Container, Row } from 'react-bootstrap'
import'./style/style.css'
import { useNavigate } from 'react-router-dom';
import NaviButton from './components/button';


export default function Home() {
  const navigate = useNavigate();

  return (
    <Container fluid>
     {/* Title and Author */}
     <Row style={{margin: 'auto'}}>
        <div className='title'>
          DIGITAL TRANSFORMATION
        </div>
       </Row>
       <Row style={{width: '90vh', margin: 'auto'}}>
       <div className="author">
            Created By: Darlene Louise M. Calica
        </div>
       </Row>
      {/* Buttons */}
      <Row style={{width: '60vh' ,margin:'auto'}}>
        <div className="Buttons">
          <Col style={{}}>
          <NaviButton label='Calculator' onClick={() => navigate("/calculator")}/>
          </Col>
          <Col>
          <NaviButton label='JSON Sample' onClick={() => navigate("/json_sample")}/>
          </Col>
         </div>
      </Row>

        {/* About me */}
        <Row style={{width: '90vh', margin: 'auto'}}>
     <div className="about">
              <div className="abTitle" style={{fontFamily:'Workbench', fontSize:'30px', fontWeight:'400'}}>
                 ABOUT ME
                 <hr />
              </div> 
               <div className="desc" style={{fontFamily: 'Pixelify Sans', fontSize: '18px', fontWeight: '400'}}>
                 What's up! <br /> My Name is Darlene Louise Calica, bit long? Aight, call me Darls <br />
              Wanna know what my Hobbies are?
               </div>
               <Button onClick={() =>navigate("/hobbies")} variant="dark"  style={{fontFamily: 'Pixelify Sans', fontSize: '18px', marginTop:'18px'}}>Yes, I wanna know! </Button>
        </div>
       </Row>

    </Container>
  )
}
