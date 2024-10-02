import React from 'react';
import './Footer.scss';  // Import the SCSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Coogan Kornya. All rights reserved.</p>
        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
