import React from 'react';
import './Skills.scss';

const skills = [
  { name: 'HTML', level: '90%' },
  { name: 'CSS', level: '85%' },
  { name: 'JavaScript', level: '80%' },
  { name: 'React.js', level: '75%' },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div style={{ width: skill.level }}>{skill.level}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
