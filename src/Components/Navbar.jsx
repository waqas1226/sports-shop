import '../CSSfiles/Navbar.css';
import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import pic from '../bird.jpg';

function NavBar(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
       <Navbar bg="dark" variant="light">
      <Navbar.Brand href="#home">Smart Cart</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#products">Products</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav>
      <Form inline className="ml-auto df">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav>
        <Nav.Link href="#login">Login</Nav.Link>
        <Nav.Link href="#cart">Cart</Nav.Link>
      </Nav>
    </Navbar>


    </div>
  );
}

export default NavBar;