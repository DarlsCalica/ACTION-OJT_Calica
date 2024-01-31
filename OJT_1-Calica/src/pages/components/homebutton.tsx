import React from 'react'
import { Button } from 'react-bootstrap';

interface Button{
    label: string;
    onClick: () => void;
}

const HomeButton: React.FC<Button> = ({ label, onClick }) => {
    return (
        <Button style={{width: '100px', marginLeft:'30px', fontFamily: 'Barlow'}} variant="outline-dark" onClick={onClick}>
        {label}
      </Button>
  );
};

export default HomeButton;