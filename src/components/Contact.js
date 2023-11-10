import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from '../img/feature-3.jpg';

function ContactForm() {
  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const headerStyle = {
    textAlign: 'center',
    marginTop: '20px', // Adjust the margin-top as needed
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <div style={headerStyle}>
        <h1>Contact</h1>
      </div>
      <img src={Contact} alt="Landing Page" style={imageStyle} />
      <Form onSubmit={handleSubmit}>
        {/* Form fields go here */}
      </Form>
      <div style={footerStyle}>
        <p>© 2023 Your Fitness App | <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a> | <a href="/terms-of-service" style={linkStyle}>Terms of Service</a></p>
      </div>
    </div>
  );
}

export default ContactForm;
