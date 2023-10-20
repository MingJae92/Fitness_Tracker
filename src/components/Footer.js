// src/components/Footer.js

import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <div className="text-center py-3">
          &copy; {new Date().getFullYear()} Your Company Name
          <p>Contact us at: contact@email.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>123 Main St, City, Country</p>
          <div>
            <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p>Subscribe to our newsletter for updates:</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
          <div>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/products">Products</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
