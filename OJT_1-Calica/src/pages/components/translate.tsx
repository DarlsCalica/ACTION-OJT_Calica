import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';


    interface Button{
        label:string
    }

const TransButton: React.FC<Button> = ({ label}) =>{
 const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        style={{width: '100px', fontFamily: 'Barlow', marginBottom:'10px'}}
        variant='success'
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Translate
      </Button>
      <Collapse in={open}>
        <div style={{fontFamily: 'Barlow', marginTop:'15px', marginBottom: '10px'}} id="example-collapse-text">
          {label}
        </div>
      </Collapse>
    </>
  );
}
export default TransButton;