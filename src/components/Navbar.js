import React from 'react'
import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

function Navigationbar() {
    const [expanded, setExpanded] = useState(false);
    return (
      <Navbar
      bg="light"
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="mx-auto"
    >
      <Navbar.Brand href="#home">CROSS FLEX</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto"> {/* Center the links horizontally */}
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#signup">SignUp</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Navigationbar