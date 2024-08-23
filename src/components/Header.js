import React from 'react';
import './Header.scss';
import dvdLogo from './images/dvd-logo.png'; // Corrected path to the image

const Header = () => {
  return (
    <header className="header">
      <div className="dvd-logo-container">
        <img src={dvdLogo} alt="DVD Logo" className="dvd-logo" />
      </div>
      <div className="centered-content">
        <h1>Minh Pham</h1>
        <a href="#start" className="btn">Get Started</a>
      </div>
    </header>
  );
};

export default Header;
