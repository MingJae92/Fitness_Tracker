import React from 'react';
import { Form, Button } from 'react-bootstrap';
import RegisterForm from '../img/bg.jpg';

function Register() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const headerStyle = {
    padding: '20px', // Add equal padding to the header
  };

  const footerStyle = {
    background: '#333',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: 'white',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'underline',
    margin: '0 10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Register</h1>
      <img src={RegisterForm} alt="Landing Page" style={imageStyle} />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      
    </div>
  );
}

export default Register;
