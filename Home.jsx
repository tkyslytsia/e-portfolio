import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundPattern from '../components/BackgroundPattern';
import tetiana from "../assets/tetiana.jpg"

const Home = () => {
  const navigate = useNavigate();
  return (
    <section id="intro" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="profile-image">
            <img src={tetiana} alt="Tetiana Kyslytsia" />
          </div>
          <div className="hero-text">
            <h1>Tetiana Kyslytsia</h1>
            <h2>Student Multimedijske Tehnologije</h2>
            <p>Visoko motivirana i detaljna studentica multimedijske tehnologije na završnoj godini Sveučilišta u Rijeci, specijalizirana za informacijske i digitalne tehnologije. Trenutno se fokusiram na 3D modeliranje i animaciju kao dio sveučilišnih studija, nadopunjeno dodatnim tečajevima za poboljšanje stručnosti u tom području.</p>
            
            <div className="digital-skills">
              <h3>Digitalne Vještine</h3>
              <div className="skills-container">
                <div className="skill-item">
                  <span className="skill-tag">HTML</span>
                </div>
                <div className="skill-item">
                  <span className="skill-tag">CSS</span>
                </div>
                <div className="skill-item">
                  <span className="skill-tag">JavaScript</span>
                </div>
                <div className="skill-item">
                  <span className="skill-tag">Java</span>
                </div>
                <div className="skill-item">
                  <span className="skill-tag">C</span>
                </div>
                <div className="skill-item">
                  <span className="skill-tag">C++</span>
                </div>
                <div className="skill-item">
                  <span className="skill-tag">C#</span>
                </div>
                <div className="skill-item">
                  <span className="skill-tag">UI/UX</span>
                </div>
                <div className="skill-item">
                  <span className="skill-tag">Blender</span>
                </div>
                <div className="skill-item">
                  <span className="skill-tag">3D Modeliranje</span>
                </div>
                <div className="skill-item">
                  <span className="skill-tag">3D Animacija</span>
                </div>
              </div>
            </div>
            <div className="hero-social">
              <a href="https://github.com/tkyslytsia" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub">
                <i className="icon-github">GitHub</i>
              </a>
              <a href="https://www.linkedin.com/in/tetiana-kyslytsia-4a12432bb/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
                <i className="icon-linkedin">LinkedIn</i>
              </a>
              <a href="mailto:tkyslytsia@gmail.com" className="social-icon gmail" aria-label="Gmail">
                <i className="icon-mail">Gmail</i>
              </a>
              <a href="https://loliklim.artstation.com/" target="_blank" rel="noopener noreferrer" className="social-icon artstation" aria-label="ArtStation">
                <i className="icon-artstation">ArtStation</i>
              </a>
            </div>
            <div className="hero-cta">
              <button onClick={() => navigate('/portfolio')} className="btn primary">
                Pogledaj Portfolio
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
