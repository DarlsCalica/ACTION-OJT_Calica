import { Container, Row } from "react-bootstrap";
import HomeButton from "./components/homebutton";
import { useNavigate } from "react-router-dom";

export default function Calculator() {

  const navigate = useNavigate();

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
          
        </Row>
      </Container>
  )
}
