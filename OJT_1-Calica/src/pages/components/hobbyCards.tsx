import React from 'react'
import { Card } from 'react-bootstrap'
import TransButton from './translate'

    interface Card{
        titleCard:string
        desc:string
        trans:string
        image:string
    }
    const HobbyCard: React.FC<Card> = ({titleCard, desc, trans, image}) => {
    
  return (

        <Card style={{ width: '18rem', marginBottom: '100px'}}>
    <Card.Img variant="top" src= {image} />
    <Card.Body>
    <Card.Title style={{fontFamily: 'Noto Sans JP'}}>{titleCard}</Card.Title>
      <TransButton label={trans}/>
      <Card.Text>
        {desc}
      </Card.Text>
    </Card.Body>
  </Card>
    
  )
}
export default HobbyCard;