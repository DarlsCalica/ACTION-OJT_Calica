import React from 'react'
import { Button } from 'react-bootstrap';

interface Button{
    label: string;
    onClick: () => void;
}

const NaviButton: React.FC<Button> = ({ label, onClick }) => {
    return (
        <Button variant="success" size="lg" onClick={onClick}>
        {label}
      </Button>
  );
};

export default NaviButton;