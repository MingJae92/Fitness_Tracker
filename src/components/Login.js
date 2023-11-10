import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
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
    <div>
      <Container className="mt-5">
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      
    </Container>
      <div style={footerStyle}>
        <p>© 2023 Your Fitness App | <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a> | <a href="/terms-of-service" style={linkStyle}>Terms of Service</a></p>
      </div>
    </div>
    
    
  );
}

export default Login;
