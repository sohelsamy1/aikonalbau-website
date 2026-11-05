import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css'; // CSS ফাইল ইমপোর্ট করা হলো

export default function Hero() {
  return (
    <section className="hero-section w-100 d-flex align-items-center py-5">
      <div className="container py-4">
        <div className="hero-content text-white">
          
          {/* টপ ট্যাগ */}
          <span className="hero-tag text-uppercase fw-bold px-3 py-1 rounded d-inline-block mb-3 shadow-sm">
            FASSADEN- UND HOCHBAU
          </span>

          {/* মেইন টাইটেল  */}
          <h1 className="hero-title fw-bold lh-sm text-uppercase mb-3">
            Qualität und Präzision für Ihr Bauprojekt
          </h1>

          {/* প্যারাগ্রাফ / আর্টিকেল */}
          <p className="hero-desc lead mb-4 text-light opacity-85">
            Ihr zuverlässiger Partner für Trockenbau, Putz und in Berlin und Umgebung. Wir verwirklichen Ihre Bauvorhaben mit höchster Sorgfalt.
          </p>

          {/* বাটন গ্রুপ */}
          <div className="d-flex flex-wrap gap-3">
            <Link to="/kontakt" className="btn hero-btn-primary fw-bold text-uppercase px-4 py-3 shadow border-0">
              GRATIS ANGEBOT →
            </Link>
            <Link to="/leistungen" className="btn hero-btn-outline fw-bold text-uppercase px-4 py-3">
              Unsere Leistungen
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}