import React, { useRef, useEffect, useState } from 'react';
import { ReactTyped as Typed } from "react-typed";
import './Header.scss';
import pythonLogo from './images/python-logo.png';
import javaLogo from './images/Java.png';
import cLogo from './images/c++.png';
//import profilePic from './images/Profile.jpg';

const logos = [pythonLogo, javaLogo, cLogo];

const About = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const directionLogo = useRef({ x: 1, y: 1 });
  const directionText = useRef({ x: -1, y: 1 });
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [pressedKey, setPressedKey] = useState(null);

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

    const logoChangeInterval = setInterval(changeLogo, 7000);

    return () => {
      clearInterval(logoChangeInterval);
    };
  }, []);

  return (
    <section id="about">
      <div className="container">
      <div className="dvd-logo-container">
        <img ref={logoRef} src={logos[currentLogoIndex]} alt="Logo" className="dvd-logo" />
      </div>
        <h2>About Me</h2>
        <p>
          I am a passionate front-end developer with a love for creating interactive and visually appealing websites.
        </p>
        <p>
          With a strong background in HTML, CSS, and JavaScript, I specialize in building responsive and user-friendly web applications using modern frameworks like React.js.
        </p>
      </div>
    </section>
  );
};


export default About;
