import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} eZanella.com | All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/SequoiaB" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/edoardozanella/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/bc1pEddi" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 