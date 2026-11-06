import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Service() {
  // মূল ৩টি সার্ভিস কার্ড
  const mainServices = [
    { 
      title: 'INNENPUTZ & TROCKENBAU', 
      image: '/LEISTUNGEN/service1.webp', 
      points: ['Fachgerechter Innenputz', 'Wände & Decken verputzen', 'Trockenbauarbeiten', 'Gipskartonarbeiten', 'Schall- und Brandschutz', 'Dämmung im Innenausbau'] 
    },
    { 
      title: 'HOCHBAU', 
      image: '/LEISTUNGEN/service3.webp', 
      points: ['Fachgerechte Umsetzung von Bauprojekten', 'Mit hohem Qualitätsanspruch', 'Solide Fundamente', 'Tragende Strukturen', 'Rohbauarbeiten', 'Termingerechte Ausführung'] 
    },
   
  ];

  // অতিরিক্ত সার্ভিসগুলো (২টি আইটেম)
  const additionalServices = [
    {
      title: 'Fassadenbau & WDVS',
      desc: 'Wärmedämmverbundsystem (WDVS), professionelle Fassadengestaltung, Putz- und Fassadenarbeiten sowie energetische für optimalen Witterungsschutz.'
    },
    {
      title: 'Abbruch- & Sanierungsarbeiten',
      desc: 'Sorgfältige Vorbereitung, Modernisierung und fachgerechte Instandsetzung sowie Rückbau von Bestandsgebäuden.'
    }
  ];

  return (
    <>
   

      {/* ব্যানার সেকশন */}
      <section className="py-4" style={{ backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div className="container mb-3"> 
          <div className="row g-0 text-white" style={{ backgroundColor: '#0b213a', borderRadius: '5px' }}>
            <div className="col-12 p-4 p-md-5">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h1 className="fw-bold mb-1" style={{ letterSpacing: '1px', fontSize: '2.5rem' }}>LEISTUNGEN</h1>
                  <h4 className="fw-bold mb-3" style={{ color: '#C5A059' }}>Qualität für Ihr Gebäude.</h4>
                  <p className="small opacity-85 mb-0" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    Seit 2018 steht aiko.nal Bau GmbH für erstklassige Ausführung im Hochbau und Ausbau. Von der energetischen bis zur präzisen Oberflächengestaltung – wir sorgen für nachhaltigen Werterhalt.
                  </p>
                </div>
                <div className="col-md-5 text-md-end text-center mt-4 mt-md-0">
                  <div className="fw-bold h3 mb-0" style={{ color: '#ffffff' }}>
                    aiko.nal Bau GmbH <span style={{ color: '#C5A059', fontSize: '14px', display: 'block' }}>HOCHBAU </span>
                  </div>
                  <div className="small opacity-50 mt-2" style={{ fontSize: '10px' }}>INNENPUTZ • TROCKENBAU • FASSADENBAU • WDVS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* মূল ৩টি কার্ড সেকশন (col-lg-4 ব্যবহার করা হয়েছে যেন ৩টি কলামে সুন্দর ফিট হয়) */}
      <section className="services-grid-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="subtitle-badge">UNSER ANGEBOT</span>
            <h2 className="section-main-title">ALLE LEISTUNGEN IM ÜBERBLICK</h2>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4 justify-content-center">
            {mainServices.map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="service-card-modern h-100">
                  <div className="card-img-wrapper">
                    <img src={service.image} alt={service.title} className="img-fluid" />
                  </div>
                  <div className="card-content-area d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="service-title">{service.title}</h5>
                      <ul className="service-list">
                        {service.points.map((p, i) => (
                          <li key={i}>
                            <i className="fas fa-check-circle"></i> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-btn-wrapper mt-3">
                      <Link to="/kontakt" className="btn-anfrage w-100 text-center">
                        ANFRAGE SENDEN <i className="fas fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEITERE KOMPETENZEN সেকশন (col-md-6 দিয়ে ২ কলামে সেন্টারড করা হয়েছে) */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container">
          <div className="text-center mb-5">
            <span className="subtitle-badge">WEITERE KOMPETENZEN</span>
            <h3 className="section-main-title">Ergänzende Baudienstleistungen</h3>
            <div className="title-underline"></div>
          </div>
          <div className="row g-4 justify-content-center">
            {additionalServices.map((item, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="p-4 border rounded shadow-sm h-100 bg-light d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="fw-bold mb-3" style={{ color: '#0b213a' }}>
                      <i className="fas fa-check text-gold me-2"></i> {item.title}
                    </h5>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* কেন আমাদের বেছে নেবেন ও কন্টাক্ট সেকশন */}
      <section className="why-us-section py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <span className="subtitle-badge">WARUM aiko.nal Bau GmbH</span>
              <h3 className="section-main-title text-start mb-3">Ihr Experte für Bau &  in Berlin</h3>
              <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                Wir realisieren Ihre Bauprojekte mit höchster Präzision, termingerecht und zu fairen Konditionen. Unser erfahrenes Team begleitet Sie von der ersten Planung bis zur schlüsselfertigen Übergabe.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="info-box-highlight p-4 rounded shadow-sm text-center text-lg-start d-lg-flex align-items-center justify-content-between">
                <div>
                  <h5 className="text-white mb-1">Planen Sie ein Projekt?</h5>
                  <p className="text-white opacity-85 small mb-0">Kostenloses Angebot anfordern.</p>
                </div>
                <Link to="/kontakt" className="btn btn-light fw-bold px-3 py-2 text-uppercase mt-3 mt-lg-0" style={{ color: '#0b213a', fontSize: '13px', borderRadius: '4px' }}>
                  Anfragen
                </Link>
              </div>
            </div>
          </div>

          {/* ৪টি ফিচার বক্সের গ্রিড */}
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="feature-box-item h-100">
                <i className="fas fa-shield-alt text-gold mb-3"></i>
                <h6>Geprüfte Qualität</h6>
                <p className="small text-muted mb-0">Hochwertige Materialien & Standards nach deutschen Richtlinien.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-box-item h-100">
                <i className="fas fa-clock text-gold mb-3"></i>
                <h6>Termintreue</h6>
                <p className="small text-muted mb-0">Verlässliche Fristen, pünktliche Umsetzung und klare Absprachen.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-box-item h-100">
                <i className="fas fa-handshake text-gold mb-3"></i>
                <h6>Transparente Preise</h6>
                <p className="small text-muted mb-0">Faire, nachvollziehbare Angebote ohne versteckte Zusatzkosten.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-box-item h-100">
                <i className="fas fa-users-cog text-gold mb-3"></i>
                <h6>Erfahrenes Team</h6>
                <p className="small text-muted mb-0">Kompetente Fachkräfte für Hochbau und Innenausbau.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ব্রোশিওর সেকশন */}
      <section className="brochure-section py-5 bg-white text-center">
        <div className="container">
          <h3 className="mb-3" style={{ color: '#0b213a', fontWeight: '700' }}>Informationsmaterial</h3>
          <p className="text-muted mb-4">Hier können Sie unsere aktuelle Broschüre direkt ansehen und herunterladen.</p>    
          <a 
            href="/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-brochure"
          >
            <i className="fas fa-file-pdf me-2"></i> Broschüre ansehen / downloaden
          </a>
        </div>
      </section>

      <div style={{ height: '40px' }}></div> 
    </>
  );
}

export default Service;