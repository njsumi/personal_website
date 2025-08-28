import React from 'react';
import './Projects.css';

export default function Projects({ projects, setSelectedProject }) {
  return (
    <section id="projects">
      <h1 className="projects">Projects</h1>
      <div className="project-images">
        {projects.map((project, index) => (
          <div
            className="project-item"
            key={index}
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
          >
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </section>
  );
}