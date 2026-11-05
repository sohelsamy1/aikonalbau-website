import React from 'react';
import { Link } from 'react-router-dom';

function HomeService() {
  const services = [
    { 
      title: 'HOCHBAU & ROHBAU', 
      image: '/STARTSEITE/card1.webp', 
      icon: '🏗️', 
      desc: 'Fachgerechte Ausführung im Hochbau und Rohbau für stabile sowie langlebige Bauwerke.',
      points: ['Rohbauarbeiten', 'Beton- und Stahlbetonarbeiten', 'Maurerarbeiten', 'Schalungsarbeiten'] 
    },
    { 
      title: 'INNENBAU & TROCKENBAU', 
      image: '/STARTSEITE/card2.webp', 
      icon: '🛠️', 
      desc: 'Moderne Raumgestaltung, flexible Trennwände und hochwertige Decken- sowie Wandbekleidungen.',
      points: ['Trockenbauarbeiten', 'Akustikdecken', 'Dämmung & Isolierung', 'Montagewände'] 
    },
    { 
      title: 'PUTZ', 
      image: '/STARTSEITE/card3.webp', 
      icon: '🎨', 
      desc: 'Perfekte Oberflächen für Innen und Außen durch professionelle Putz- und .',
      points: ['Innenputz', 'Außenputz', 'Spachteltechnik'] 
    },
    { 
      title: 'FASSADEN', 
       image: '/STARTSEITE/card4.webp',
      icon: '🏢', 
      desc: 'Ganzheitliche Sanierungen, moderne WDVS-Dämmung und ästhetische Fassadengestaltung.',
      points: ['Fassadenbau', 'WDVS (Wärmedämmverbundsystem)'] 
    }
  ];

  return (
    <section id="leistungen" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold px-3 py-1 rounded" style={{ backgroundColor: '#C5A059', color: '#fff', fontSize: '11px', letterSpacing: '1.5px' }}>
           UNSERE LEISTUNGEN
          </span>
          <h2 className="fw-bold mt-3 mb-3" style={{ color: '#0b213a', fontSize: '32px' }}>
            KOMPETENZ IN JEDEM BEREICH
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '15px' }}>
            Entdecken Sie unsere professionellen Baudienstleistungen und handwerklichen Lösungen in Berlin und Umgebung.
          </p>
          <div className="mx-auto mt-3" style={{ width: '60px', height: '3px', backgroundColor: '#C5A059', borderRadius: '2px' }}></div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm bg-white d-flex flex-column position-relative service-box" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                
                {/* ইমেজ */}
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img src={service.image} alt={service.title} className="w-100 h-100" style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                </div>
                
                {/* গোল আইকন */}
                <div className="position-absolute d-flex align-items-center justify-content-center shadow-sm" 
                     style={{ top: '155px', left: '50%', transform: 'translateX(-50%)', width: '50px', height: '50px', backgroundColor: '#0b213a', color: '#fff', borderRadius: '50%', fontSize: '20px', border: '3px solid #fff', zIndex: 1 }}>
                  {service.icon}
                </div>

                <div className="card-body pt-5 d-flex flex-column px-4 pb-4 text-center">
                  
                  <h5 className="fw-bold text-center mb-2 mt-2" style={{ color: '#0b213a', fontSize: '16px' }}>{service.title}</h5>
                  <p className="text-muted small text-center mb-3" style={{ fontSize: '12.5px', lineHeight: '1.5' }}>{service.desc}</p>
                  
                  <ul className="list-unstyled text-start mb-4 mx-auto" style={{ fontSize: '12px', color: '#495057', maxWidth: '220px' }}>
                    {service.points.map((point, idx) => (
                      <li key={idx} className="mb-1 d-flex align-items-center">
                        <span style={{ color: '#C5A059', marginRight: '6px' }}>▪</span> {point}
                      </li>
                    ))}
                  </ul>
                  
                  {/* বাটন */}
                  <div className="mt-auto">
                    <Link to="/leistungen" className="btn w-100 fw-bold d-flex align-items-center justify-content-center text-uppercase home-service-btn" 
                      style={{ 
                        backgroundColor: '#C5A059', 
                        color: '#fff', 
                        padding: '10px 15px', 
                        borderRadius: '4px',
                        fontSize: '13px',
                        border: 'none',
                        transition: 'all 0.2s ease'
                      }}>
                      MEHR ERFAHREN <span className="ms-2">→</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeService;