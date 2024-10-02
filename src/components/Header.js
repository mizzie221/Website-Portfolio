import React, { useRef, useEffect, useState } from 'react';
import { ReactTyped as Typed } from "react-typed";
import './Header.scss';


const Header = () => {
  const textRef = useRef(null);
  const [pressedKey, setPressedKey] = useState(null);
  const [screenText, setScreenText] = useState(['Welcome to my Portfolio...', 'Press "Enter" to continue...']);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        setShowContent(true);
        setScreenText(['Please select any of the links below to navigate', 'Enjoy your journey!']); // Change the text on the TV screen
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleTyping = (typedText) => {
    const lastChar = typedText.slice(-1).toUpperCase();
    setPressedKey(lastChar);

    setTimeout(() => setPressedKey(null), 100); // Release key after 100ms
  };

  return (
    <header className="header">
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
            <Typed
              strings={screenText} 
              typeSpeed={60}
              backSpeed={80}
              showCursor={true}
              loop
            />
            {showContent && (
              <div className="navigation-links">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
              </div>
            )}
          </div>
        </div>

        <svg className="cable" viewBox="0 0 100 300">
          <path
            d="M 50, 0
              C 20, 100, 80, 200, 50, 300"
            stroke="#4B8BBE"
            fill="transparent"
            strokeWidth="5"
          />
        </svg>

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