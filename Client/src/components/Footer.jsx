import React from 'react';

const Footer = () => (
  <footer className="py-3 text-center" style={{background: '#fff', color: '#ff9800', fontSize: 14}}>
    <div className="container">
      &copy; {new Date().getFullYear()} Yash Portfolio. All rights reserved.
    </div>
  </footer>
);

export default Footer;
