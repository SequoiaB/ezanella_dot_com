import React, { useState } from 'react';
import '../styles/Main.css';
import '../styles/Button.css';
import SecondaryButton from './SecondaryButton';

/**
 * Main component for the website's main content
 * Contains the hero section, about section, projects section, and contact section
 */
function Main() {
  const [isPressed, setIsPressed] = useState(false);

  const handleTouchStart = () => {
    setIsPressed(true);
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  const handleClick = () => {
    // Navigate to the projects section
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="main-content">
      <div className="container">
        <section className="hero">
          <h2>Building the Future, One Line of Code at a Time</h2>
          <p>I'm a fast-learning problem solver with a passion for decentralization, blockchain technology, and software engineering. Let's build something great together!</p>
          <div className="button-container">
            <button 
              className={`button ${isPressed ? 'pressed' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              onClick={handleClick}
              aria-label="Explore My Work"
            >
              <div>
                <span>Explore My Work</span>
              </div>
            </button>
          </div>
        </section>
        
        {/* About section */}
        <section id="about" className="about-section">
          <h2>About Me</h2>
          <p>
          Hey there! I'm Eddi, an <strong>Information Engineer</strong> with a passion for problem-solving and decentralization. 
          I specialize in <strong>JavaScript, React, Node.js, and Python</strong>, and I'm currently diving deep into the technical details of ₿itcoin. 
          When I'm not coding, I explore the power of blockchain beyond speculation, focusing on fairness and distribution. 
          Oh, and meet my favorite ₿itcoin mascot, Billion Dollar Cat!
          </p>
        </section>
        
        {/* Projects section */}
        <section id="projects" className="projects-section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>🎨 Interactive Aquarium – Mackerell Packs</h3>
              <p><i>A visually immersive digital aquarium designed to engage users with interactive elements.</i></p>
              <p>🛠 <strong>Tech Used:</strong> JavaScript, React, Node.js</p>
              <SecondaryButton text="View Project" onClick={() => window.open('https://mackerelpacks.com/runes-rocket/', '_blank', 'noopener,noreferrer')} />
              
            </div>
            <div className="project-card">
              <h3>🤖 Telegram Bots</h3>
              <p><i>Developed multiple bots for various use cases, from automation to real-time data fetching.</i></p>
              <p>🛠 <strong>Tech Used:</strong> Python, SQLite, PostgreSQL, Python-Telegram-Bot, Telegram API</p>
              <SecondaryButton text="not public yet" />

            </div>
            <div className="project-card">
              <h3>🔍 SatsTracker.io</h3>
              <p><i>An open-source tool for tracking Bitcoin transactions and network activity.</i></p>
              <SecondaryButton text="not public yet" />
              
            </div>
          </div>
        </section>
        
        {/* Contact section */}
        <section id="contact" className="contact-section">
          <h2>Contact Me</h2>
          <p>Let's connect! Whether you want to discuss a project, ask about Bitcoin, or just say hi, feel free to reach out through any of the platforms below.</p>
        </section>
      </div>
    </main>
  );
}

export default Main; 