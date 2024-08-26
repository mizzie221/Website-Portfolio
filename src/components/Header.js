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

        <div className="tv-screen">
          <div className="screen-content">
            
          </div>
        </div>

        <div className="keyboard-wrapper">
          <div className="keyboard-container">
            <div className="row">
              <div className="key esc" data-key="ESC">ESC</div>
              <div className={`key ${pressedKey === '1' ? 'pressed' : ''}`} data-key="1">1</div>
              <div className={`key ${pressedKey === '2' ? 'pressed' : ''}`} data-key="2">2</div>
              <div className={`key ${pressedKey === '3' ? 'pressed' : ''}`} data-key="3">3</div>
              <div className={`key ${pressedKey === '4' ? 'pressed' : ''}`} data-key="4">4</div>
              <div className={`key ${pressedKey === '5' ? 'pressed' : ''}`} data-key="5">5</div>
              <div className={`key ${pressedKey === '6' ? 'pressed' : ''}`} data-key="6">6</div>
              <div className={`key ${pressedKey === '7' ? 'pressed' : ''}`} data-key="7">7</div>
              <div className={`key ${pressedKey === '8' ? 'pressed' : ''}`} data-key="8">8</div>
              <div className={`key ${pressedKey === '9' ? 'pressed' : ''}`} data-key="9">9</div>
              <div className={`key ${pressedKey === '0' ? 'pressed' : ''}`} data-key="0">0</div>
              <div className={`key ${pressedKey === '-' ? 'pressed' : ''}`} data-key="-">-</div>
              <div className={`key ${pressedKey === '=' ? 'pressed' : ''}`} data-key="=">=</div>
              <div className="key backspace" data-key="Back">Backspace</div>
            </div>
            <div className="row">
              <div className="key tab" data-key="Tab">Tab</div>
              <div className={`key ${pressedKey === 'Q' ? 'pressed' : ''}`} data-key="Q">Q</div>
              <div className={`key ${pressedKey === 'W' ? 'pressed' : ''}`} data-key="W">W</div>
              <div className={`key ${pressedKey === 'E' ? 'pressed' : ''}`} data-key="E">E</div>
              <div className={`key ${pressedKey === 'R' ? 'pressed' : ''}`} data-key="R">R</div>
              <div className={`key ${pressedKey === 'T' ? 'pressed' : ''}`} data-key="T">T</div>
              <div className={`key ${pressedKey === 'Y' ? 'pressed' : ''}`} data-key="Y">Y</div>
              <div className={`key ${pressedKey === 'U' ? 'pressed' : ''}`} data-key="U">U</div>
              <div className={`key ${pressedKey === 'I' ? 'pressed' : ''}`} data-key="I">I</div>
              <div className={`key ${pressedKey === 'O' ? 'pressed' : ''}`} data-key="O">O</div>
              <div className={`key ${pressedKey === 'P' ? 'pressed' : ''}`} data-key="P">P</div>
              <div className={`key ${pressedKey === '[' ? 'pressed' : ''}`} data-key="[">[</div>
              <div className={`key ${pressedKey === ']' ? 'pressed' : ''}`} data-key="]">]</div>
              <div className={`key ${pressedKey === '\\' ? 'pressed' : ''}`} data-key="\\">\\</div>
            </div>
            <div className="row">
              <div className="key capslock" data-key="Caps">Caps</div>
              <div className={`key ${pressedKey === 'A' ? 'pressed' : ''}`} data-key="A">A</div>
              <div className={`key ${pressedKey === 'S' ? 'pressed' : ''}`} data-key="S">S</div>
              <div className={`key ${pressedKey === 'D' ? 'pressed' : ''}`} data-key="D">D</div>
              <div className={`key ${pressedKey === 'F' ? 'pressed' : ''}`} data-key="F">F</div>
              <div className={`key ${pressedKey === 'G' ? 'pressed' : ''}`} data-key="G">G</div>
              <div className={`key ${pressedKey === 'H' ? 'pressed' : ''}`} data-key="H">H</div>
              <div className={`key ${pressedKey === 'J' ? 'pressed' : ''}`} data-key="J">J</div>
              <div className={`key ${pressedKey === 'K' ? 'pressed' : ''}`} data-key="K">K</div>
              <div className={`key ${pressedKey === 'L' ? 'pressed' : ''}`} data-key="L">L</div>
              <div className={`key ${pressedKey === ';' ? 'pressed' : ''}`} data-key=";">;</div>
              <div className={`key ${pressedKey === '\'' ? 'pressed' : ''}`} data-key="'">'</div>
              <div className="key enter" data-key="Enter">Enter</div>
            </div>
            <div className="row">
              <div className="key shift" data-key="Shift">Shift</div>
              <div className={`key ${pressedKey === 'Z' ? 'pressed' : ''}`} data-key="Z">Z</div>
              <div className={`key ${pressedKey === 'X' ? 'pressed' : ''}`} data-key="X">X</div>
              <div className={`key ${pressedKey === 'C' ? 'pressed' : ''}`} data-key="C">C</div>
              <div className={`key ${pressedKey === 'V' ? 'pressed' : ''}`} data-key="V">V</div>
              <div className={`key ${pressedKey === 'B' ? 'pressed' : ''}`} data-key="B">B</div>
              <div className={`key ${pressedKey === 'N' ? 'pressed' : ''}`} data-key="N">N</div>
              <div className={`key ${pressedKey === 'M' ? 'pressed' : ''}`} data-key="M">M</div>
              <div className={`key ${pressedKey === ',' ? 'pressed' : ''}`} data-key=",">,</div>
              <div className={`key ${pressedKey === '.' ? 'pressed' : ''}`} data-key=".">.</div>
              <div className={`key ${pressedKey === '/' ? 'pressed' : ''}`} data-key="/">/</div>
              <div className="key shift" data-key="Shift">Shift</div>
            </div>
            <div className="row">
              <div className="key ctrl" data-key="Ctrl">Ctrl</div>
              <div className="key win" data-key="Win">Win</div>
              <div className="key alt" data-key="Alt">Alt</div>
              <div className="key space" data-key=" "></div>
              <div className="key alt" data-key="Alt">Alt</div>
              <div className="key win" data-key="Win">Win</div>
              <div className="key menu" data-key="Menu">Menu</div>
              <div className="key ctrl" data-key="Ctrl">Ctrl</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
