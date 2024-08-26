import React, { useRef, useEffect, useState } from 'react';
import { ReactTyped as Typed } from "react-typed";
import './Header.scss';
import pythonLogo from './images/python-logo.png';
import javaLogo from './images/Java.png';
import cLogo from './images/c++.png';
//import profilePic from './images/Profile.jpg';

const logos = [pythonLogo, javaLogo, cLogo];

const Header = () => {
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

  const handleTyping = (typedText) => {
    const lastChar = typedText.slice(-1).toUpperCase();
    setPressedKey(lastChar);

    setTimeout(() => setPressedKey(null), 100); // Release key after 100ms
  };

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
        <h1>Hi, I'm Minh</h1>
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
            onStringTyped={(index, self) => handleTyping(self.strings[index])}
          />
        </div>
        <div className="keyboard-container">
          <div className="row">
            <div className="key esc">ESC</div>
            <div className={`key ${pressedKey === '1' ? 'pressed' : ''}`}>1</div>
            <div className={`key ${pressedKey === '2' ? 'pressed' : ''}`}>2</div>
            <div className={`key ${pressedKey === '3' ? 'pressed' : ''}`}>3</div>
            <div className={`key ${pressedKey === '4' ? 'pressed' : ''}`}>4</div>
            <div className={`key ${pressedKey === '5' ? 'pressed' : ''}`}>5</div>
            <div className={`key ${pressedKey === '6' ? 'pressed' : ''}`}>6</div>
            <div className={`key ${pressedKey === '7' ? 'pressed' : ''}`}>7</div>
            <div className={`key ${pressedKey === '8' ? 'pressed' : ''}`}>8</div>
            <div className={`key ${pressedKey === '9' ? 'pressed' : ''}`}>9</div>
            <div className={`key ${pressedKey === '0' ? 'pressed' : ''}`}>0</div>
            <div className={`key ${pressedKey === '-' ? 'pressed' : ''}`}>-</div>
            <div className={`key ${pressedKey === '=' ? 'pressed' : ''}`}>=</div>
            <div className="key backspace">Backspace</div>
          </div>
          <div className="row">
            <div className="key tab">Tab</div>
            <div className={`key ${pressedKey === 'Q' ? 'pressed' : ''}`}>Q</div>
            <div className={`key ${pressedKey === 'W' ? 'pressed' : ''}`}>W</div>
            <div className={`key ${pressedKey === 'E' ? 'pressed' : ''}`}>E</div>
            <div className={`key ${pressedKey === 'R' ? 'pressed' : ''}`}>R</div>
            <div className={`key ${pressedKey === 'T' ? 'pressed' : ''}`}>T</div>
            <div className={`key ${pressedKey === 'Y' ? 'pressed' : ''}`}>Y</div>
            <div className={`key ${pressedKey === 'U' ? 'pressed' : ''}`}>U</div>
            <div className={`key ${pressedKey === 'I' ? 'pressed' : ''}`}>I</div>
            <div className={`key ${pressedKey === 'O' ? 'pressed' : ''}`}>O</div>
            <div className={`key ${pressedKey === 'P' ? 'pressed' : ''}`}>P</div>
            <div className={`key ${pressedKey === '[' ? 'pressed' : ''}`}>[</div>
            <div className={`key ${pressedKey === ']' ? 'pressed' : ''}`}>]</div>
            <div className={`key ${pressedKey === '\\' ? 'pressed' : ''}`}>\\</div>
          </div>
          <div className="row">
            <div className="key capslock">Caps</div>
            <div className={`key ${pressedKey === 'A' ? 'pressed' : ''}`}>A</div>
            <div className={`key ${pressedKey === 'S' ? 'pressed' : ''}`}>S</div>
            <div className={`key ${pressedKey === 'D' ? 'pressed' : ''}`}>D</div>
            <div className={`key ${pressedKey === 'F' ? 'pressed' : ''}`}>F</div>
            <div className={`key ${pressedKey === 'G' ? 'pressed' : ''}`}>G</div>
            <div className={`key ${pressedKey === 'H' ? 'pressed' : ''}`}>H</div>
            <div className={`key ${pressedKey === 'J' ? 'pressed' : ''}`}>J</div>
            <div className={`key ${pressedKey === 'K' ? 'pressed' : ''}`}>K</div>
            <div className={`key ${pressedKey === 'L' ? 'pressed' : ''}`}>L</div>
            <div className={`key ${pressedKey === ';' ? 'pressed' : ''}`}>;</div>
            <div className={`key ${pressedKey === '\'' ? 'pressed' : ''}`}>'</div>
            <div className="key enter">Enter</div>
          </div>
          <div className="row">
            <div className="key shift">Shift</div>
            <div className={`key ${pressedKey === 'Z' ? 'pressed' : ''}`}>Z</div>
            <div className={`key ${pressedKey === 'X' ? 'pressed' : ''}`}>X</div>
            <div className={`key ${pressedKey === 'C' ? 'pressed' : ''}`}>C</div>
            <div className={`key ${pressedKey === 'V' ? 'pressed' : ''}`}>V</div>
            <div className={`key ${pressedKey === 'B' ? 'pressed' : ''}`}>B</div>
            <div className={`key ${pressedKey === 'N' ? 'pressed' : ''}`}>N</div>
            <div className={`key ${pressedKey === 'M' ? 'pressed' : ''}`}>M</div>
            <div className={`key ${pressedKey === ',' ? 'pressed' : ''}`}>,</div>
            <div className={`key ${pressedKey === '.' ? 'pressed' : ''}`}>.</div>
            <div className={`key ${pressedKey === '/' ? 'pressed' : ''}`}>/</div>
            <div className="key shift">Shift</div>
          </div>
          <div className="row">
            <div className="key ctrl">Ctrl</div>
            <div className="key win">Win</div>
            <div className="key alt">Alt</div>
            <div className="key space ${pressedKey === ' ' ? 'pressed' : ''}"></div>
            <div className="key alt">Alt</div>
            <div className="key win">Win</div>
            <div className="key menu">Menu</div>
            <div className="key ctrl">Ctrl</div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
