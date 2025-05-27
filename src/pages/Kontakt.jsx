import React from 'react';

const Kontakt = () => {
  return (
    <section id="kontakt" className="section d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="info-card text-center">
              <h3 className="text-center mb-4">Kontakt Informacije</h3>
              <div className="info-item">
                <strong>Ime:</strong> Tetiana Kyslytsia
              </div>
              <div className="info-item">
                <strong>Email:</strong> tkyslytsia@gmail.com
              </div>
              <div className="info-item">
                <strong>Lokacija:</strong> Osječka 80, 51000 Rijeka, Hrvatska
              </div>
              <div className="info-item">
                <strong>Telefon:</strong> +385 976486236
              </div>
              <div className="info-item">
                <strong>Portfolio:</strong> <a href="https://loliklim.artstation.com/" target="_blank" rel="noopener noreferrer">loliklim.artstation.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
