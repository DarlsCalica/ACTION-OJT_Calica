import React, { useEffect, useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { User } from '../TypeIndex';
import HomeButton from './components/homebutton';
import { useNavigate } from 'react-router-dom';

interface user{
  id: number;
  name: string;
  username: string;
  email: string;
  address:{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  }
}

export default function Json() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User[] | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=> response.json())
      .then((data)=> setUserData(data))
      .catch((error)=> console.error("Error fetching data:", error));
  },[]);

  if (userData === null){
    //loading to fetch data
    return <div>loading...</div>
  }
  return (
   <Container fluid>
       {/* Home Button */}
       <Row style={{width: '140px'}}>
          <div style={{marginTop: '20px'}}>
            <HomeButton label='Home' onClick={() => navigate("/")} />
          </div>
        </Row>

    {/* Title */}
        <Row>
            <div className="jsonTitle">
            JSON Sample
            </div>
        </Row>
    <div>
      <Row>
        {userData.map((user) =>(
          <Col>
            <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">UserName: {user.username}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">ID: {user.id}</Card.Subtitle>
            <ListGroup variant="flush">
              <ListGroup.Item>{user.email}</ListGroup.Item>
              <strong>
                Address
              </strong>
              <ListGroup.Item> Street: {user.address.street}</ListGroup.Item>
              <ListGroup.Item> Suite: {user.address.suite}</ListGroup.Item>
              <ListGroup.Item> City: {user.address.city}</ListGroup.Item>
              <ListGroup.Item> Zipcode: {user.address.zipcode}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
          </Col>
        ))}
      </Row>
    </div>
   </Container>
  )
}
