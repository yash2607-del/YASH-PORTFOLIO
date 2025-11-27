import React from 'react';

const Hero = () => (
  <section id="hero" className="d-flex align-items-center" style={{minHeight: '80vh', background: '#fff7ed'}}>
    <div className="container text-center">
      <h1 className="display-4 fw-bold" style={{color: '#ff9800'}}>Hi, I'm Yash</h1>
      <p className="lead text-dark mb-4">A passionate developer crafting beautiful and functional web experiences. I love building minimal, professional, and eye-catching products with modern tech.</p>
      <a href="/public/Yash_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-warning text-white fw-bold shadow" style={{background: '#ff9800', border: 'none'}}>Hire Me</a>
    </div>
  </section>
);

export default Hero;
