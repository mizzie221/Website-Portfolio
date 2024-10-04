import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import './App.css'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Header />
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;
