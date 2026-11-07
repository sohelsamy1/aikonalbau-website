import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="container py-5" style={{ fontFamily: 'sans-serif' }}>
     
      {/* Hero Sektion (অপরিবর্তিত রাখা হয়েছে) */}
      <section style={{ marginTop: '-20px', marginBottom: '50px' }}>
        <div className="custom-box-width"> 
          <div className="row g-0 text-white shadow-lg" style={{ backgroundColor: '#0b213a', borderRadius: '5px' }}>
            <div className="col-12 p-4 p-md-5">
              <div className="row align-items-center">
                
                {/* বাম পাশে: About Us আর্টিকেল */}
                <div className="col-md-7 mb-4 mb-md-0">
                  <h3 className="fw-bold mb-3" style={{ color: '#C5A059', borderBottom: '2px solid #C5A059', display: 'inline-block' }}>Über Uns</h3>
                  <p className="lead mb-3">Ihr zuverlässiger Partner für hochwertige Bau- und Sanierungsarbeiten.</p>
                  <p className="opacity-75" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Seit 2018 steht aiko.nal Bau GmbH für Qualität, Zuverlässigkeit und fachgerechte Ausführung im Bauwesen. Unser Leistungsschwerpunkt liegt im Hochbau und Ausbau, insbesondere in den Bereichen Trockenbau, Innenputz, , Fassadenbau sowie energetische.
                  </p>
                </div>

                {/* ডান পাশে: ব্র্যান্ডিং ইনফো */}
                <div className="col-md-5 text-md-end text-center mt-4 mt-md-0 border-start-md border-secondary">
                  <div className="fw-bold h2 mb-2" style={{ color: '#ffffff' }}>
                   aiko.nal Bau GmbH
                  </div>
                  <div className="fw-bold mb-3" style={{ color: '#C5A059', letterSpacing: '1px' }}>
                    HOCHBAU 
                  </div>
                  <div className="small opacity-50 px-3" style={{ fontSize: '11px', lineHeight: '1.8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                    HOCHBAU • INNENAUSBAU • FASSADENBAU
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* স্মার্টলি বর্ধিত ও প্রফেশনাল Content Sektion */}
      <section className="about-content py-5 px-3 px-md-4" style={{ backgroundColor: '#fcfbfa', borderRadius: '12px', border: '1px solid #eee' }}>
        <div className="container py-3">
          <div className="row align-items-center g-5">
            
            {/* বাম পাশ: ইমেজ উইথ প্রিমিিয়াম কার্ড শ্যাডো ও বর্ডার */}
            <div className="col-lg-5">
              <div className="position-relative">
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  width: '100%',
                  height: '100%',
                  border: '2px solid #C5A059',
                  borderRadius: '12px',
                  zIndex: '1'
                }}></div>
                <div className="about-image-wrapper shadow" style={{ position: 'relative', zIndex: '2', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#fff' }}>
                  <img src="/STARTSEITE/about.webp" alt="aiko.nal Bau GmbH Team vor Ort" className="img-fluid w-100" style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                </div>
              </div>
            </div>

            {/* ডান পাশ: টেক্সট, হাইলাইট বক্স এবং অতিরিক্ত প্রফেশনাল পয়েন্ট */}
            <div className="col-lg-7">
              <div className="about-text-box ps-lg-4">
                <span className="text-uppercase fw-bold small mb-2 d-block" style={{ color: '#C5A059', letterSpacing: '2px' }}>Willkommen bei aiko.nal Bau GmbH</span>
                <h2 className="mb-4 fw-bold" style={{ color: '#0b213a', fontSize: '2rem' }}>Tradition, Moderne & Handwerkskunst</h2>
                
                <p className="mb-3 text-secondary" style={{ lineHeight: '1.8', fontSize: '15px' }}>
                  Darüber hinaus bieten wir umfassende Leistungen im Innenausbau, bei Renovierungs- und Modernisierungsarbeiten sowie bei der von Bestandsgebäuden.
                </p>
                
                <p className="mb-4 text-secondary" style={{ lineHeight: '1.8', fontSize: '15px' }}>
                  Wir verbinden langjährige handwerkliche Erfahrung mit modernen Verfahren und hochwertigen Materialien. Unser Anspruch ist es, Immobilien nachhaltig aufzuwerten, ihre Substanz langfristig zu erhalten und neue, hochwertige Lebens- und Arbeitsräume zu schaffen.
                </p>

                {/* অতিরিক্ত প্রফেশনাল প্যারাগ্রাফ বা লিস্ট যোগ করে সেকশনটি smartly বড় করা হয়েছে */}
                <div className="mb-4 pb-2 border-bottom">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-check-circle text-gold me-2" style={{ color: '#C5A059' }}></i>
                        <span className="small fw-bold text-dark">Termingerechte Ausführung</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-check-circle text-gold me-2" style={{ color: '#C5A059' }}></i>
                        <span className="small fw-bold text-dark">Höchste Qualitätsstandards</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ভিশন ও মিশন কার্ড */}
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="p-3 h-100 shadow-sm" style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #C5A059', borderRadius: '6px' }}>
                      <h5 className="fw-bold mb-2" style={{ color: '#0b213a' }}>Vision</h5>
                      <p className="mb-0 text-muted small" style={{ lineHeight: '1.6' }}>Nachhaltige Aufwertung und langfristiger Werterhalt von Immobilien.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 h-100 shadow-sm" style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #C5A059', borderRadius: '6px' }}>
                      <h5 className="fw-bold mb-2" style={{ color: '#0b213a' }}>Mission</h5>
                      <p className="mb-0 text-muted small" style={{ lineHeight: '1.6' }}>Verbindung von handwerklicher Erfahrung mit modernen Verfahren.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;