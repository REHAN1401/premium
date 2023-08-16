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
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Weather</a></li>
            <li><a href="#services">Information</a></li>
            <li><a href="#About Us">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>
            Email: contact@example.com<br />
            Phone: +123 456 7890
          </p>
        </div>

       
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
