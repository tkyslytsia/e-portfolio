import React from 'react';
import tetiana from "../assets/tetiana.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">O Meni</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="profile-frame">
              <img src={tetiana} alt="Tetiana Kyslytsia" />
            </div>
          </div>
          
          <div className="about-details">
            <div className="about-section">
              <h3>Osobni Podaci</h3>
              <div className="personal-details">
                <div className="personal-item">
                  <span className="personal-label">Nacionalnost:</span>
                  <span className="personal-value">Ukrajinska</span>
                </div>
                <div className="personal-item">
                  <span className="personal-label">Datum Rođenja:</span>
                  <span className="personal-value">25. kolovoza 2004.</span>
                </div>
              </div>
            </div>
            <div className="about-section">
              <h3>Obrazovanje</h3>
              <div className="education-item">
                <h4>Sveučilište u Rijeci</h4>
                <p className="education-period">2021 - 2025</p>
                <p>Preddiplomski studij Multimedijske Tehnologije</p>
                <p>Specijalizacija: Informacijske i digitalne tehnologije</p>
              </div>
            </div>
            
            <div className="about-section">
              <h3>Radno Iskustvo</h3>
              <div className="experience-item">
                <h4>Freelance 3D Modeliranje</h4>
                <p className="experience-period">2024 - Danas</p>
                <p className="experience-company">ArtStation Portfolio</p>
                <ul className="experience-duties">
                  <li>Kreiranje 3D modela za različite klijente i projekte</li>
                  <li>Razvoj vizualnih koncepata i animacija</li>
                  <li>Korištenje Blendera za stvaranje detaljnih 3D modela</li>
                </ul>
              </div>
            </div>
            
            <div className="about-section">
              <h3>Jezici</h3>
              <div className="language-skills">
                <div className="language-item">
                  <span className="language-name">Hrvatski</span>
                  <div className="language-level">
                    <div className="level-bar" style={{ width: '90%' }}></div>
                  </div>
                  <span className="language-level-text">C1</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Engleski</span>
                  <div className="language-level">
                    <div className="level-bar" style={{ width: '70%' }}></div>
                  </div>
                  <span className="language-level-text">B1</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Ukrajinski</span>
                  <div className="language-level">
                    <div className="level-bar" style={{ width: '100%' }}></div>
                  </div>
                  <span className="language-level-text">Materinski</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Ruski</span>
                  <div className="language-level">
                    <div className="level-bar" style={{ width: '100%' }}></div>
                  </div>
                  <span className="language-level-text">Materinski</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Poljski</span>
                  <div className="language-level">
                    <div className="level-bar" style={{ width: '40%' }}></div>
                  </div>
                  <span className="language-level-text">A2</span>
                </div>
              </div>
            </div>
            
            <div className="about-section">
              <h3>Profesionalne Vještine</h3>
              <ul className="skills-list">
                <li>Web razvoj (HTML, CSS, JavaScript)</li>
                <li>Programiranje (Java, C, C++, C#)</li>
                <li>3D modeliranje i animacija (Blender)</li>
                <li>UI/UX dizajn</li>
                <li>Timski rad i komunikacija</li>
                <li>Rješavanje problema</li>
              </ul>
            </div>
            
            <div className="about-section">
              <h3>Interesi</h3>
              <ul className="interests-list">
                <li>3D modeliranje</li>
                <li>Digitalna umjetnost</li>
                <li>Web dizajn</li>
                <li>Nove tehnologije</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
