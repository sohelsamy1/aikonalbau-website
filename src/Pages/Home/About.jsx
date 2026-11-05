import React from 'react';

function AboutSection() {
  return (
    <section id="uber-uns" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-3">
        {/* align-items-center দিলে ইমেজ এবং  টেক্সট একে অপরের সাথে সেন্টারে থাকবে  */}
        <div className="row g-4 g-lg-5 align-items-center">
          
          {/* বাম পাশ: টেক্সট কন্টেন্ট */}
          <div className="col-12 col-lg-6">
            <span className="text-uppercase fw-bold" style={{ color: '#C5A059', fontSize: '14px', letterSpacing: '1.5px' }}>
              ÜBER aiko.nal Bau GmbH
            </span>
            <h2 className="fw-bold mt-2 mb-4" style={{ color: '#0b213a', fontSize: 'clamp(26px, 3.5vw, 34px)', lineHeight: '1.3' }}>
              Ihr zuverlässiger Partner für <br />
              <span style={{ color: '#C5A059' }}>hochwertige Bau- und Sanierungsarbeiten</span>
            </h2>
            
            <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.7', textAlign: 'justify' }} className="mb-3">
              Seit 2018 steht aiko.nal Bau GmbH für Qualität, Zuverlässigkeit und fachgerechte Ausführung im Bauwesen. Unser Leistungsschwerpunkt liegt im Hochbau und Ausbau, insbesondere in den Bereichen Trockenbau, Innenputz, , Fassadenbau sowie energetische.
            </p>

            <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.7', textAlign: 'justify' }} className="mb-4">
              Darüber hinaus bieten wir umfassende Leistungen im Innenausbau, bei Renovierungs- und Modernisierungsarbeiten sowie bei der  von Bestandsgebäuden. Wir verbinden langjährige handwerkliche Erfahrung mit modernen Verfahren und hochwertigen Materialien. Unser Anspruch ist es, Immobilien nachhaltig aufzuwerten, ihre Substanz langfristig zu erhalten und neue, hochwertige Lebens- und Arbeitsräume zu schaffen.
            </p>

            {/* চেকমার্ক লিস্ট */}
            <ul className="list-unstyled mb-0">
              {[
                'Erfahrenes & geschultes Personal',
                'Moderne Bautechnik & Verfahren',
                'Individuelle & maßgeschneiderte Lösungen',
                'Höchste Qualitätsstandards',
                'Zuverlässig & termingerecht'
              ].map((item, idx) => (
                <li key={idx} className="d-flex align-items-center mb-3" style={{ fontSize: '15px', color: '#1a202c', fontWeight: '500' }}>
                  <span className="me-3 rounded-circle text-white d-flex align-items-center justify-content-center" style={{ width: '22px', height: '22px', fontSize: '12px', backgroundColor: '#C5A059', flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ডান পাশ: ইমেজ */}
          <div className="col-12 col-lg-6">
            <div className="shadow-lg overflow-hidden" style={{ borderRadius: '20px' }}>
              <img
                src="/STARTSEITE/about.webp"
                alt="aiko.nal Bau GmbH Team & Service"
                className="w-100"
                style={{
                  height: 'auto',
                  minHeight: '380px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;