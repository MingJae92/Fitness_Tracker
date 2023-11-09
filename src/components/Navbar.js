import React from 'react'
import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Homepage from './Homepage';
import { Link, Outlet } from 'react-router-dom';

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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/register">Register</Link>
            </li>
            <li>
            <Link to="/signup">Signup</Link>
             </li>
             <li>
              <Link to="/login">Login</Link>
             </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigationbar