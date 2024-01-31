import  { useState } from 'react'
import { Button, Col, Collapse, Container, Row } from 'react-bootstrap'
import TransButton from './components/translate'
import HobbyCard from './components/hobbyCards';
import ongaku from './style/picture/ongaku.jpg';
import eiga from './style/picture/eiga.jpg';
import gemu from './style/picture/gemu.jpg';
import anime from './style/picture/anime.jpg'
import geijutsu from './style/picture/Geijutsu2.jpg'
import { useNavigate } from 'react-router-dom';
import HomeButton from './components/homebutton';

export default function Hobbies() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

  return (
   <Container fluid>
    {/* Title */}
        <Row style={{width: '140px'}}>
          <div style={{marginTop: '20px'}}>
            <HomeButton label='Home' onClick={() => navigate("/")} />
          </div>
          
        </Row>
        <Row>
            <div className="aboutTitle">
            ABOUT ME
            </div>
        </Row>
    {/* Small Introduction */}
        <Row style={{width: '90vh', margin: 'auto'}}>
            <div className="intro">
           <p> はじめまして!!!</p>  
            わたし  の  なまえ  は  カリカ  ダルリン です。<br />
            Baguio City から きました。<br />
            わたし は 22歳 です。<br />
            {/* Collapse Button with Translation */}
            <Button className='trans'
            style={{fontFamily: 'Barlow'}}
            variant='dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
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
        {/* Hobbies Title */}
        <Row style={{ margin: 'auto'}}>
          <div className="hobbyTitle">
          わたし   の   しゅみ は...
          </div>
          <div className="transButHob"
        style={{marginTop: '8px', marginBottom: '29px'}}>
          <TransButton label='My hobbies are...' />
          </div>
        </Row>
        {/* The Hobbies */}
        <Row style={{margin:'auto'}}>
        <div className="hobbiecards">
               <Col>
            <HobbyCard titleCard='おんがく' desc='I like listening to music, and I can quite say I have a flexible music taste' trans='Listening to Music' image = {ongaku} />
          </Col>
          <Col>
            <HobbyCard titleCard='えいが' desc='I like watching movies, tiktoks, and TV series. My favorite is the American Sitcom Series, Brooklyn Nine-Nine' trans='Movie' image = {eiga} />
          </Col>
          <Col>
            <HobbyCard titleCard='ゲーム' desc='I may not play games that much, but I still feel the sense of relaxation whenever I play cozy games.' trans='Games' image = {gemu} />
          </Col>
          <Col>
            <HobbyCard titleCard='アニメ' desc='I like listening to music, and I can quite say I have a flexible music taste' trans='Anime' image = {anime} />
          </Col>
          <Col>
            <HobbyCard titleCard='げいじゅつ' desc='This is my favorite hobby. I love being creative and explore other mediums. My favorite is painting (oil, acrylic, watercolor) and sketching.' trans='Art' image = {geijutsu} />
          </Col>
          </div>
        </Row>
        <Row style={{ margin: 'auto'}}>
          <div className="hobbyEnd">
          どうぞ よろしく おねがいします。🍪
          </div>
          <div className="transButHob"
        style={{marginTop: '8px', marginBottom: '29px'}}>
          <TransButton label='Pleased to meet you' />
          </div>
          </Row>
   </Container>
  )
}
