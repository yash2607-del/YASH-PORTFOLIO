import React from 'react';

const projects = [
  { title: 'Portfolio Website', desc: 'A personal portfolio built with React, Bootstrap, and GSAP.', link: '#' },
  { title: 'E-commerce App', desc: 'A full-stack e-commerce platform with modern UI.', link: '#' },
  { title: 'Blog Platform', desc: 'A minimal blog platform with markdown support.', link: '#' },
  { title: 'Task Manager', desc: 'A productivity app for managing daily tasks.', link: '#' },
  { title: 'Weather Dashboard', desc: 'A dashboard showing real-time weather data.', link: '#' },
  { title: 'Chat App', desc: 'A real-time chat application with WebSocket.', link: '#' }
];

const Projects = () => (
  <section id="projects" className="py-5" style={{background: '#fff7ed'}}>
    <div className="container">
      <h2 className="mb-4 fw-bold" style={{color: '#ff9800'}}>Projects</h2>
      <div className="row g-4">
        {projects.map((proj, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold" style={{color: '#ff9800'}}>{proj.title}</h5>
                <p className="card-text">{proj.desc}</p>
                <a href={proj.link} className="btn btn-outline-warning btn-sm" style={{color: '#ff9800', borderColor: '#ff9800'}}>View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
