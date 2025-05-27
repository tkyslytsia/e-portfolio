import React from 'react';
import modelingImage from '../assets/3d.png';
import websiteImage from '../assets/mysite.png';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Projekti</h2>
        <div className="projects-section">
          <div className="project-card">
            <div className="project-image">
              <img src={websiteImage} alt="College Website Project" />
            </div>
            <div className="project-content">
              <h3>Web Stranica za Fakultet</h3>
              <div className="project-meta">
                <div className="project-client"><strong>Datum:</strong> 10-20. kolovoza 2023.</div>
                <div className="project-type"><strong>Tip:</strong> Web Razvoj</div>
              </div>
              <p>
                Izradila sam web stranicu na freelance temu za svoj fakultet. Projekt je uključivao dizajn i implementaciju responzivne web stranice s modernim značajkama.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
              </div>
              <a href="https://drive.google.com/file/d/1RdIi7bvO_9exK62lWmKMMp--Su8LINPD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn project-btn">Pogledaj Projekt</a>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80" alt="Red Cross Website" />
            </div>
            <div className="project-content">
              <h3>Web Stranica za Crveni Križ</h3>
              <div className="project-meta">
                <div className="project-client"><strong>Datum:</strong> 1. srpnja - 15. rujna 2024.</div>
                <div className="project-type"><strong>Tip:</strong> Volonterski Rad</div>
              </div>
              <p>
                Izradili smo web stranicu za Crveni križ u Hrvatskoj. Bio je to volonterski rad s fakulteta, gdje sam radila u timu. Moj zadatak je bio izraditi jednu stranicu za web mjesto.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
              </div>
              <a href="#" className="btn project-btn">Pogledaj Projekt</a>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={modelingImage} alt="3D Modeling Project" />
            </div>
            <div className="project-content">
              <h3>3D Modeliranje Portfolio</h3>
              <div className="project-meta">
                <div className="project-client"><strong>Platforma:</strong> ArtStation</div>
                <div className="project-type"><strong>Tip:</strong> 3D Modeliranje</div>
              </div>
              <p>
                Kolekcija mojih radova 3D modeliranja i animacije stvorenih kao dio mojih sveučilišnih studija i osobnih projekata. Prikazuje moje vještine u Blenderu i drugim alatima za 3D modeliranje.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Blender</span>
                <span className="tech-tag">3D Modeliranje</span>
                <span className="tech-tag">Animacija</span>
              </div>
              <a href="https://loliklim.artstation.com/" target="_blank" rel="noopener noreferrer" className="btn project-btn">Pogledaj Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
