import React, { useRef, useEffect, useState } from 'react';
import './Header.scss';
import dvdLogo from './images/python-logo.png';

const phrases = [
  "a Developer",
  "a Problem Solver",
  "a Creative Thinker",
  "an Innovator"
];

const Header = () => {
  const logoRef = useRef(null);
  const direction = useRef({ x: 1, y: 1 });
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const moveLogo = () => {
      const logo = logoRef.current;
      const container = logo.parentElement;
      const logoRect = logo.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      let newX = logo.offsetLeft + direction.current.x;
      let newY = logo.offsetTop + direction.current.y;

      if (newX <= 0 || newX + logoRect.width >= containerRect.width) {
        direction.current.x *= -1;
      }

      if (newY <= 0 || newY + logoRect.height >= containerRect.height) {
        direction.current.y *= -1;
      }

      logo.style.left = `${newX}px`;
      logo.style.top = `${newY}px`;

      requestAnimationFrame(moveLogo);
    };

    requestAnimationFrame(moveLogo);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(prev => (prev + 1) % phrases.length);
    }, 2000); // Change phrase every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="dvd-logo-container">
        <img ref={logoRef} src={dvdLogo} alt="DVD Logo" className="dvd-logo" />
      </div>
      <div className="centered-content">
        <h1>Hi, I'm Minh</h1>
        <h2>{phrases[currentPhrase]}</h2>
      </div>
    </header>
  );
};

export default Header;
