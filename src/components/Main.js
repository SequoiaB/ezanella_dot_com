import React from 'react';
import '../styles/Main.css';

function Main() {
  return (
    <main className="main-content">
      <div className="container">
        <section className="hero">
          <h2>Welcome to My Personal Website</h2>
          <p>I'm a passionate web developer creating modern and responsive websites.</p>
          <button className="cta-button">View My Work</button>
        </section>
        
        <section id="about" className="about-section">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
            consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. 
            Aliquam venenatis gravida nisl sit amet facilisis.
          </p>
        </section>
        
        <section id="projects" className="projects-section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>A description of project 1 goes here.</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>A description of project 2 goes here.</p>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>A description of project 3 goes here.</p>
            </div>
          </div>
        </section>
        
        <section id="contact" className="contact-section">
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me at: example@email.com</p>
        </section>
      </div>
    </main>
  );
}

export default Main; 