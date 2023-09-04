import React from 'react';
import './Footer.css'; // Create this CSS file to style the footer


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            An Agriculture based weather & Guidence Site.
          </p>
        </div>
        <div className="footer-section">
          <h2>Links</h2>
          <ul> 
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="http://localhost:3000/Weather">Weather</a></li>
            <li><a href="#services">Information</a></li>
            <li><a href="#contact">AboutUs</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Subsciption</h2>
          <li><a href="http://localhost:3001/home">Premium</a></li>
          <li><a href="http://localhost:3000/subscription">My Subsciptions</a></li>
        </div>


        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>
            Email: agroweather@gmail.com<br />
            Phone: +91 7771199222
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AgroWeather. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
