
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer py-5 text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h5 className="fw-light">
              Sé tú. <em className="fw-bold">Sin filtros.</em>
            </h5>
            <div className="mt-3">
              <a href="#" className="text-white fs-4 me-3" aria-label="TikTok">
                <i className="bi bi-tiktok"></i>
              </a>
              <a href="#" className="text-white fs-4 me-3" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-4 me-3" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white fs-4 me-3" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="text-white fs-4" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">Aurea</h4>
            <p className="text-white-50">Impulsando confianza y amor propio.</p>
          </div>

          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">Síguenos</h4>
            <p className="text-white-50">
              Instagram: @Aurea<br />
              YouTube: AureaOficial<br />
              TikTok: @AureaOficial
            </p>
          </div>

          <div className="col-md-2 mb-4">
            <h4 className="fw-bold">Contacto</h4>
            <p className="text-white-50">
              aurea.oficial@gmail.com<br />
              +51 937 744 131
            </p>
          </div>
        </div>

        <div className="text-center pt-4 mt-4 border-top border-white-50">
          <p className="text-white-50 small">
            © 2025 Aurea. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


