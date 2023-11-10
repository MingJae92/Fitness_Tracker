import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Register() {
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
      <h1>Register</h1>
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
      <div style={footerStyle}>
        <p>© 2023 Your Fitness App | <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a> | <a href="/terms-of-service" style={linkStyle}>Terms of Service</a></p>
      </div>
    </div>
  );
}

export default Register;
