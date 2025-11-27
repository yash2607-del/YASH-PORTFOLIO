import React from 'react';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Tech Solutions',
    period: 'Jan 2023 - Present',
    details: 'Developed and maintained responsive web applications using React, Bootstrap, and GSAP. Collaborated with designers and backend teams to deliver seamless user experiences.'
  },
  {
    role: 'Web Intern',
    company: 'Webify',
    period: 'Jun 2022 - Dec 2022',
    details: 'Assisted in building landing pages and dashboards. Improved website performance and accessibility.'
  }
];

const Experience = () => (
  <section id="experience" className="py-5" style={{background: '#fff'}}>
    <div className="container">
      <h2 className="mb-4 fw-bold" style={{color: '#ff9800'}}>Work Experience</h2>
      <div className="row g-4">
        {experiences.map((exp, idx) => (
          <div className="col-md-6" key={idx}>
            <div className="card shadow-sm border-0 h-100" style={{background: '#fff7ed'}}>
              <div className="card-body">
                <h5 className="card-title fw-bold" style={{color: '#ff9800'}}>{exp.role}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{exp.company}</h6>
                <p className="card-text mb-1"><small>{exp.period}</small></p>
                <p className="card-text">{exp.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
