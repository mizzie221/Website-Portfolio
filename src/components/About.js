import React from 'react';
import './About.scss';


const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-links">
        <a href="#header">Header</a>
        <a href="#projects">Projects</a>
        <a href="#Contact">Contact</a>
      </div>

      <div className="about-container">
        <div className="centered-content">
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Hello! I'm Minh, a first-generation Vietnamese American student majoring in Computer Science at the University of Central Florida. I am a student with efficient problem-solving skills paired with a never-satisfied work ethic. I manage different tasks effectively and understand how to apply the necessary resources for improvement.
          </p>
        </div>
        </div>
        <div className="separator-line"></div>
        <div className="skills-container">
          <h3>Skills</h3>
          <div className="skills-list">
            <div className="skill" style={{ backgroundColor: '#8cb9df' }}>HTML</div>
            <div className="skill" style={{ backgroundColor: '#BCD8E2' }}>CSS</div>
            <div className="skill" style={{ backgroundColor: '#8cb9df' }}>React</div>
            <div className="skill" style={{ backgroundColor: '#BCD8E2' }}>JavaScript</div>
            <div className="skill" style={{ backgroundColor: '#8cb9df' }}>Python</div>
            <div className="skill" style={{ backgroundColor: '#BCD8E2' }}>Java</div>
            <div className="skill" style={{ backgroundColor: '#8cb9df' }}>C++</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
