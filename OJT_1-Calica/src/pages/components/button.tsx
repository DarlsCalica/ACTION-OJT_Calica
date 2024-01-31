import React from 'react'
import { Button } from 'react-bootstrap';

interface Button{
    label: string;
    onClick: () => void;
}

const NaviButton: React.FC<Button> = ({ label, onClick }) => {
    return (
        <Button style={{width: '200px', fontFamily: 'Pixelify Sans'}} variant="outline-dark" onClick={onClick}>
        {label}
      </Button>
  );
};

export default NaviButton;