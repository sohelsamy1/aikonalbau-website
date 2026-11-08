import React from 'react';
import { Link } from 'react-router-dom';
import './EasyLanguage.css';

const EasyLanguage = () => {
  return (
    <>
     
      <div className="accessibility-page container py-5">
        {/* মেইন কন্টেন্ট সেকশন বক্স */}
        <div className="content-section p-4 p-md-5 shadow-sm mb-5">
          
          <h1 className="easy-title mb-3">
            Leichte Sprache
          </h1>
          <p className="easy-subtitle mb-4">
            Herzlich willkommen bei aiko.nal Bau GmbH Berlin.
          </p>
          
          <p className="lead fw-semibold text-secondary mb-4">
            Wir sind Ihr zuverlässiger Partner für professionelle Bauleistungen, Sanierungen und Baudienstleistungen.
          </p>
          
          <p className="mb-4">
            Um unseren Service für alle Menschen gleichermaßen verständlich und zugänglich zu machen, finden Sie hier die wichtigsten Informationen über unser Unternehmen und unsere Angebote auch in Leichter Sprache sowie in Gebärdensprache.
          </p>
          
          <p className="mb-0 fw-semibold text-muted">
            Wählen Sie einfach eines der untenstehenden Themen aus, um detaillierte Informationen zu erhalten.
          </p>
        </div>

        {/* কার্ড সেকশন */}
        <div className="row">
          {/* কার্ড ১: বারিয়েনফ্রিহাইট */}
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded overflow-hidden easy-card">
              <img src="/Language/Language1.webp" alt="Erklärung zur Barrierefreiheit" className="card-img-top" />
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h3 className="h4 fw-bold mb-3">
                    <Link to="/Barrierefreiheit" className="text-decoration-none card-link-title">
                      Erklärung zur Barrierefreiheit
                    </Link>
                  </h3>
                  <p className="text-muted mb-4">
                    Erfahren Sie hier alle wichtigen Informationen in Leichter Sprache zum Thema Barrierefreiheit auf unserer Website und wie wir diese kontinuierlich verbessern.
                  </p>
                </div>
                <div>
                  <Link to="/Barrierefreiheit" className="btn btn-sm fw-bold px-3 py-2 text-white custom-btn">
                    MEHR ERFAHREN →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* কার্ড ২: গেবার্ডেনস্প্রাচে */}
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded overflow-hidden easy-card">
              <img src="/Language/Language2.webp" alt="Gebärdensprache" className="card-img-top" />
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h3 className="h4 fw-bold mb-3">
                    <Link to="/Gebärdensprache" className="text-decoration-none card-link-title">
                      Gebärdensprache
                    </Link>
                  </h3>
                  <p className="text-muted mb-4">
                    Hier stellen wir Ihnen sämtliche Informationen und Inhalte unseres Unternehmens ausführlich und verständlich in Gebärdensprache zur Verfügung.
                  </p>
                </div>
                <div>
                  <Link to="/Gebärdensprache" className="btn btn-sm fw-bold px-3 py-2 text-white custom-btn">
                    MEHR ERFAHREN →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EasyLanguage;