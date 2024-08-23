import React, { useRef, useEffect, useState } from 'react';
import {ReactTyped as Typed} from "react-typed";
import './Header.scss';
import pythonLogo from './images/python-logo.png';
import javaLogo from './images/Java.png';
import cLogo from './images/c++.png';

const logos = [pythonLogo, javaLogo, cLogo];

const Header = () => {
  const logoRef = useRef(null);
  const direction = useRef({ x: 1, y: 1 });
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

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
    const changeLogo = () => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    };

    const logoChangeInterval = setInterval(changeLogo, 5000);

    return () => clearInterval(logoChangeInterval);
  }, []);

  return (
    <header className="header">
      <div className="dvd-logo-container">
        <img ref={logoRef} src={logos[currentLogoIndex]} alt="DVD Logo" className="dvd-logo" />
      </div>
      <div className="centered-content">
        <h1>Hi, I'm Minh,</h1>
        <div className="typing-container">
          <span>a&nbsp;</span>
          <Typed
            strings={[
              "Creative Thinker",
              "Problem Solver",
              "Software Developer",
              "Lifelong Learner"
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
