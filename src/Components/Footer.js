import React from 'react';
import '../App.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><strong>Email:</strong> <a href="mailto:info@myecom.com">info@myecom.com</a></p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Main Office</h4>
          <p>123 Commerce Lane</p>
          <p>Tech City, 12345</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 My-Ecom. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
