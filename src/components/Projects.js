import React from 'react';
import './Projects.scss';  // Import the SCSS file

const projects = [
  {
    title: 'Project One',
    description: 'This is a description of Project One.',
    technologies: ['React', 'CSS', 'JavaScript'],
  },
  {
    title: 'Project Two',
    description: 'This is a description of Project Two.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="heading">Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
