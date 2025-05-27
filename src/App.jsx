import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import BackgroundPattern from './components/BackgroundPattern'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Kontakt from './pages/Kontakt'
import AboutMe from './pages/AboutMe'

function usePageTracking() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('HOME');

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveSection('HOME');
    } else if (location.pathname === '/portfolio') {
      setActiveSection('PORTFOLIO');
    } else if (location.pathname === '/about') {
      setActiveSection('ABOUT');
    } else if (location.pathname === '/kontakt') {
      setActiveSection('KONTAKT');
    }
  }, [location]);

  return { activeSection, setActiveSection };
}

function AppContent() {
  const { activeSection, setActiveSection } = usePageTracking();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <BackgroundPattern />
      <header className="header">
        <div className="logo">Tetiana Kyslytsia</div>
        <nav>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/"
                onClick={() => {
                  setActiveSection('HOME');
                  setIsMenuOpen(false);
                }}
                className={activeSection === 'HOME' ? 'active' : ''}
              >
                POČETNA
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio"
                onClick={() => {
                  setActiveSection('PORTFOLIO');
                  setIsMenuOpen(false);
                }}
                className={activeSection === 'PORTFOLIO' ? 'active' : ''}
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                onClick={() => {
                  setActiveSection('ABOUT');
                  setIsMenuOpen(false);
                }}
                className={activeSection === 'ABOUT' ? 'active' : ''}
              >
                O MENI
              </Link>
            </li>
            <li>
              <Link 
                to="/kontakt"
                onClick={() => {
                  setActiveSection('KONTAKT');
                  setIsMenuOpen(false);
                }}
                className={activeSection === 'KONTAKT' ? 'active' : ''}
              >
                KONTAKT
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/e-portfolio" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">Tetiana Kyslytsia</div>
              <p className="footer-tagline">Student Multimedijske Tehnologije</p>
              <p className="footer-description">Visoko motivirana i detaljna studentica multimedijske tehnologije specijalizirana za informacijske i digitalne tehnologije, 3D modeliranje i animaciju.</p>
            </div>
            
            <div className="footer-links">
              <h4>Brzi Linkovi</h4>
              <ul>
                <li><Link to="/">Početna</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/about">O Meni</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Kontakt</h4>
              <p><i className="icon-location"></i> Osječka 80, 51000 Rijeka, Hrvatska</p>
              <p><i className="icon-mail"></i> tkyslytsia@gmail.com</p>
              <p><i className="icon-phone"></i> +385 976486236</p>
            </div>
          </div>
          
          <div className="footer-social">
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
        </div>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function App() {
  return <AppWrapper />;
}

export default App