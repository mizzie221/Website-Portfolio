import React from 'react';
// import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Hello, I'm <span className="name">Minh Pham</span></h1>
        <p className="tagline">I love Coding!<span id="dynamic-text"></span></p>
        <div className="buttons">
          <a href="#work" className="btn">View my work</a>
          <a href="#resume" className="btn">View Resume</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
