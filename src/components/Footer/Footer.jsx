import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="kontakt" className="site-footer py-5">
      <div className="container">
        <div className="row g-4 text-center text-md-start justify-content-between">
          
          {/* ১. লোগো এবং ইমারজেন্সি BOX */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <img src="/STARTSEITE/logo.webp" alt="AIKOBau Logo" className="footer-logo mb-4" />
            
            <div className="emergency-box d-flex align-items-center p-2 border rounded mb-3">
              <div className="emergency-num fw-bold me-3">24/7</div>
              <div className="text-start emergency-text">
                <span className="fw-bold">NOTDIENST</span><br />
                <span>AUF ANFRAGE</span>
              </div>
            </div>

            {/* সোশ্যাল মিডিয়া আইকনগুলো */}
            <div className="social-icons-wrapper">
              <a href="#" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* ২. LEISTUNGEN (৬টি আইটেম) */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading text-uppercase fw-bold mb-3">LEISTUNGEN</h6>
            <ul className="list-unstyled ps-0">
              <li className="mb-1"><a href="#leistungen" className="footer-link">Hoch- & Rohbau</a></li>
              <li className="mb-1"><a href="#leistungen" className="footer-link">Innenausbau</a></li>
            </ul>
          </div>

          {/* ৩. UNTERNEHMEN (৬টি আইটেম) */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading text-uppercase fw-bold mb-3">UNTERNEHMEN</h6>
            <ul className="list-unstyled ps-0">
              <li className="mb-1"><a href="#uber-uns" className="footer-link">Über uns</a></li>
              <li className="mb-1"><a href="#referenzen" className="footer-link">Unsere Projekte</a></li>
              <li className="mb-1"><a href="#kontakt" className="footer-link">Qualität & Sicherheit</a></li>
              <li className="mb-1"><a href="#kontakt" className="footer-link">Partner & Netzwerk</a></li>
              <li className="mb-1"><a href="#kontakt" className="footer-link">Karriere</a></li>
              <li className="mb-1"><a href="#kontakt" className="footer-link">Standort & Kontakt</a></li>
            </ul>
          </div>

          {/* ৪. KONTAKT */}
          <div className="col-12 col-md-3">
            <h6 className="footer-heading text-uppercase fw-bold mb-3">KONTAKT</h6>
            <ul className="list-unstyled ps-0 contact-list">
              <li className="mb-2 d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                <span><i className="bi bi-telephone-fill"></i></span> 
                <span>+49 0178 927 11 18</span>
              </li>
              <li className="mb-2 d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                <span><i className="bi bi-envelope-fill"></i></span> 
                <span>aikonalarbeit@gmail.com</span>
              </li>
              <li className="mb-2 d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                <span><i className="bi bi-geo-alt-fill"></i></span> 
                <span>Bonifatius Straße 24 , 13509 Berlin</span>
              </li>
              <li className="mb-2 d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                <span>🏛️</span> 
                <span>HRB 290626 B (Amtsgericht Charlottenburg)</span>
              </li>              
              <li className="mb-2 d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                <span><i className="bi bi-building"></i></span>
                <span>Betriebsnummer: 14066582</span>
              </li>
              <li className="mb-2 d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                <span>🌐</span> 
                <span>Website: aikonalbau.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;