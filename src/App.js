import React from 'react';
import Header from './components/Header';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Header />
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;
