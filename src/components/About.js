// About.js
import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-links">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#Resume">Resume</a>
        <a href="#Contact">Contact</a>
      </div>

      <div className="about-container">
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Hello! I'm Minh, a first-generation Vietnamese American student majoring in Computer Science at the University of Central Florida. I am a student with efficient problem-solving skills paired with a never-satisfied work ethic. I manage different tasks effectively and understand how to apply the necessary resources for improvement.
          </p>
        </div>
        <div className="separator-line"></div>
        <div className="skills-container">
          <h3>Skills</h3>
          <div className="skills-list">
            <div className="skill" style={{ backgroundColor: '#E34F26' }}>HTML</div>
            <div className="skill" style={{ backgroundColor: '#1572B6' }}>CSS</div>
            <div className="skill" style={{ backgroundColor: '#61DAFB' }}>React</div>
            <div className="skill" style={{ backgroundColor: '#F0DB4F' }}>JavaScript</div>
            <div className="skill" style={{ backgroundColor: '#3776AB' }}>Python</div>
            <div className="skill" style={{ backgroundColor: '#007396' }}>Java</div>
            <div className="skill" style={{ backgroundColor: '#00599C' }}>C++</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
