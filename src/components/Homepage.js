import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Landingpage from '../img/carousel-1.jpg';

function Homepage() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        position: 'relative',
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
    };

    const footerStyle = {
        background: 'lightgray',
        padding: '10px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    };

    return (
        <div style={containerStyle}>
            <img src={Landingpage} alt="Landing Page" style={imageStyle} />
            
        </div>
    );
}

export default Homepage;
