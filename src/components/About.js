import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
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
      <h1>About Us</h1>
      {/* <img src={gymImage} alt="Gym Workout" style={{ width: '100%', height: 'auto' }} /> */}
      <p>Welcome to Fitness Fusion, where we turn sweat into success!</p>
      <p>At Fitness Fusion, we're not just a gym; we're a community of fitness enthusiasts committed to transforming lives. Our team of certified personal trainers is here to guide you on your fitness journey.</p>
      <p>What sets us apart? Our personalized workout tracking system! With state-of-the-art technology, we tailor your fitness plan to your unique goals. Track your progress, set new milestones, and celebrate your achievements with us.</p>
      <p>Ready to crush your fitness goals? Join Fitness Fusion today and let's sculpt the new you!</p>
      <div style={footerStyle}>
        <p>© 2023 Your Fitness App | <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a> | <a href="/terms-of-service" style={linkStyle}>Terms of Service</a></p>
      </div>
    </div>
  );
}

export default About;
