// src/components/Footer.js

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company Name</p>
          </Col>
          <Col md={4} className="text-center">
            <p>Contact us:</p>
            <p>Email: contact@email.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>123 Main St, City, Country</p>
            {/* Place the form here */}
            <Form className="d-flex flex-column align-items-center">
              <Form.Control type="email" placeholder="Your email" className="mb-2 pl-2 pr-2" style={{ width: '60%' }} />
              <Button type="submit">Subscribe</Button>
            </Form>
          </Col>
          <Col md={4} className="text-center">
            <p>Connect with us:</p>
            <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook mr-3"></i>
            </a>
            <a href="https://www.twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter mr-3"></i>
            </a>
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <div className="mt-2">
              <a href="/privacy-policy" className="mr-2">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <div>
              <a href="/">Home</a>
              <a href="/about" className="ml-3">About Us</a>
              <a href="/products" className="ml-3">Products</a>
              <a href="/services" className="ml-3">Services</a>
              <a href="/contact" className="ml-3">Contact</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
