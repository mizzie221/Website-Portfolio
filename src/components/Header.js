import React, { useRef, useEffect, useState } from 'react';
import { ReactTyped as Typed } from "react-typed";
import './Header.scss';
import pythonLogo from './images/python-logo.png';
import javaLogo from './images/Java.png';
import cLogo from './images/c++.png';

const logos = [pythonLogo, javaLogo, cLogo];

const Header = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null); 
  const directionLogo = useRef({ x: 1, y: 1 });
  const directionText = useRef({ x: -1, y: 1 }); 
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const moveElement = (elementRef, direction) => {
      const element = elementRef.current;
      const container = element.parentElement;
      const elementRect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      let newX = element.offsetLeft + direction.current.x;
      let newY = element.offsetTop + direction.current.y;

      if (newX <= 0 || newX + elementRect.width >= containerRect.width) {
        direction.current.x *= -1;
      }

      if (newY <= 0 || newY + elementRect.height >= containerRect.height) {
        direction.current.y *= -1;
      }

      element.style.left = `${newX}px`;
      element.style.top = `${newY}px`;

      requestAnimationFrame(() => moveElement(elementRef, direction));
    };

    const changeLogo = () => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    };

    requestAnimationFrame(() => moveElement(logoRef, directionLogo));
    requestAnimationFrame(() => moveElement(textRef, directionText));

    const logoChangeInterval = setInterval(changeLogo, 5000);

    return () => {
      clearInterval(logoChangeInterval);
    };
  }, []);

  return (
    <header className="header">
      <nav className="top-nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
      </nav>
      <div className="floating-text" ref={textRef}>
      </div>
      <div className="dvd-logo-container">
        <img ref={logoRef} src={logos[currentLogoIndex]} alt="Logo" className="dvd-logo" />
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
