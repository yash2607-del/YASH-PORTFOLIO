import React from 'react';

const Contact = () => (
  <section id="contact" className="py-5" style={{background: '#fff7ed'}}>
    <div className="container">
      <h2 className="mb-4 fw-bold" style={{color: '#ff9800'}}>Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm border-0" style={{background: '#fff'}}>
            <div className="card-body text-center">
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="d-block mb-2 text-decoration-none" style={{color: '#0a66c2'}}><i className="bi bi-linkedin" style={{fontSize: 24}}></i> LinkedIn</a>
              <a href="mailto:your.email@example.com" className="d-block mb-2 text-decoration-none" style={{color: '#ff9800'}}><i className="bi bi-envelope" style={{fontSize: 24}}></i> your.email@example.com</a>
              <span className="d-block text-muted"><i className="bi bi-telephone" style={{fontSize: 24}}></i> +91-XXXXXXXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
