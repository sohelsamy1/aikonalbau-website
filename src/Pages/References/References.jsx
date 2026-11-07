import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './References.css';
import 'swiper/css';
import 'swiper/css/pagination';

const References = () => {
  // ক্লায়েন্টের দেওয়া আর্টিকেল ও তথ্য অনুযায়ী আপডেটকৃত প্রজেক্ট ডাটা
  const projects = [
    { 
      title: 'AM SCHLOSSPARK', 
      subtitle: 'Sophie-Charlotten-Straße, Berlin-Charlottenburg (2019–2021)', 
      desc: 'Innenputzarbeiten, vollständiges WDVS und Außenfassaden.', 
      src: '/References/card1.webp' 
    },
    { 
      title: 'MARTIN-LUTHER-STRASSE', 
      subtitle: 'Berlin-Tempelhof-Schöneberg (2022–2024)', 
      desc: 'WDVS, Fassaden sowie Maler- und Beschichtungsarbeiten.', 
      src: '/References/card2.webp' 
    },
    { 
      title: 'ZUHAUSE IM QUINTETT', 
      subtitle: 'Bruno-Walter-Straße 5, Berlin-Lichterfelde (2022)', 
      desc: 'Putzarbeiten, Fassaden, Anstrich & Montage von Fenstern/Türen.', 
      src: '/References/card3.webp' 
    },
    { 
      title: 'HOCHBAU & FASSADENBAU', 
      subtitle: 'Moderne Wohn- und Geschäftshäuser', 
      desc: 'Fachgerechte Ausführung und anspruchsvolle Oberflächengestaltung.', 
      src: '/References/card4.webp' 
    },
    { 
      title: 'WÄRMEDÄMMUNG (WDVS)', 
      subtitle: 'Energetische', 
      desc: 'Verbesserung der energetischen Qualität und des Witterungsschutzes.', 
      src: '/References/card5.webp' 
    },
    { 
      title: 'INNENPUTZ & TROCKENBAU', 
      subtitle: 'Gewerbliche & private Innenräume', 
      desc: 'Saubere Oberflächen, präzise Verarbeitung und moderne Raumgestaltung.', 
      src: '/References/ref6.webp' 
    },
   
  ];

  return (
    <section className="references-section">
      
      {/* ─── ১. টপ হেডার সেকশন (অপরিবর্তিত) ─── */}
      <div className="container mb-5">
        <div className="row g-0 text-white ref-header-box">
          <div className="col-12 p-4 p-md-5">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="fw-bold mb-1 ref-header-title">REFERENZEN</h1>
                <h4 className="fw-bold mb-3 ref-header-subtitle">Erfolgreiche Projekte. Starke Partner.</h4>
                <p className="small opacity-85 mb-0 ref-header-desc">
                  aiko.nal Bau GmbH steht für Qualität, Zuverlässigkeit und fachgerechte Ausführung im Bauwesen. Entdecken Sie hier einen Auszug unserer realisierten Referenzprojekte in Berlin und Umgebung.
                </p>
              </div>
              <div className="col-md-5 text-md-end text-center mt-4 mt-md-0">
                <div className="fw-bold h3 mb-0 ref-brand-title">
                  aiko.nal Bau GmbH <span className="ref-brand-sub">HOCHBAU</span>
                </div>
                <div className="small opacity-50 mt-2 ref-brand-tags">INNENPUTZ • TROCKENBAU • FASSADENBAU • WDVS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── ২. মেইন প্রজেক্ট গ্রিড সেকশন ─── */}
      <div className="container mb-5">
        <div className="row g-3">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 border-0 shadow-sm overflow-hidden d-flex flex-column ref-card-item">
                
                <div className="ref-card-img-container">
                  {project.src ? (
                    <img 
                      src={project.src} 
                      alt={project.title} 
                      className="ref-card-img"
                    />
                  ) : (
                    <div className="ref-card-placeholder">
                      [ Bild {index + 1} ]
                    </div>
                  )}
                </div>

                <div className="p-3 text-white d-flex flex-column justify-content-center mt-auto ref-card-footer">
                  <h6 className="fw-bold mb-1 text-uppercase ref-card-title-text">
                    📐 {project.title}
                  </h6>
                  <p className="mb-1 opacity-85 ref-card-subtitle-text">{project.subtitle}</p>
                  <p className="mb-0 opacity-75 ref-card-desc-text">{project.desc}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── ৩. স্লাইডারের ঠিক ওপরে নতুন প্রিমিয়াম সেকশন ─── */}
      <div className="container mb-5">
        <div className="p-4 p-md-5 shadow-sm rounded-4" style={{ backgroundColor: '#fcfbfa', border: '1px solid #eee' }}>
          
          {/* সাব-সেকশন ১: আরও প্রজেক্ট রেফারেন্স */}
          <div className="text-center mb-5">
            <span className="text-uppercase fw-bold small d-block mb-2" style={{ color: '#C5A059', letterSpacing: '2px' }}>Vielseitigkeit & Erfahrung</span>
            <h3 className="fw-bold mb-3" style={{ color: '#0b213a' }}>WEITERE PROJEKTREFERENZEN</h3>
            <p className="text-muted mx-auto" style={{ maxWidth: '800px', lineHeight: '1.7', fontSize: '15px' }}>
              Neben den ausführlich dargestellten Referenzobjekten verfügt die aiko.nal Bau GmbH über umfassende Erfahrung in den Bereichen Hochbau, Fassadenbau, Wärmedämmverbundsysteme, und Modernisierung. Unsere weiteren Projektarbeiten unterstreichen die Vielseitigkeit unseres Leistungsspektrums sowie unsere Erfahrung in der fachgerechten und zuverlässigen Umsetzung unterschiedlicher Bauvorhaben.
            </p>
          </div>

          <hr className="my-4 opacity-10" />

          {/* সাব-সেকশন ২: কর্মদক্ষতা / লিড সেকশন (Upore 2-ti, niche 2-ti box) */}
          <div className="pt-2">
            <h4 className="fw-bold text-center mb-4" style={{ color: '#0b213a', fontSize: '1.5rem' }}>UNSERE LEISTUNGSSCHWERPUNKTE</h4>
            <div className="row g-4 row-cols-1 row-cols-md-2">
              
              <div className="col">
                <div className="p-3 h-100 bg-white rounded shadow-sm border-start border-4 golden-left-border">
                  <h6 className="fw-bold mb-2" style={{ color: '#0b213a' }}>INNENPUTZ</h6>
                  <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>Professionelle und fachgerechte Ausführung von Innenputzarbeiten für Neubau- und Sanierungsprojekte mit Fokus auf saubere Oberflächen.</p>
                </div>
              </div>

              <div className="col">
                <div className="p-3 h-100 bg-white rounded shadow-sm border-start border-4 golden-left-border">
                  <h6 className="fw-bold mb-2" style={{ color: '#0b213a' }}>TROCKENBAU</h6>
                  <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>Fachgerechte Ausführung von Trockenbauarbeiten für unterschiedliche Anforderungen im modernen Innenausbau.</p>
                </div>
              </div>

              <div className="col">
                <div className="p-3 h-100 bg-white rounded shadow-sm border-start border-4 golden-left-border">
                  <h6 className="fw-bold mb-2" style={{ color: '#0b213a' }}>WÄRMEDÄMMVERBUNDSYSTEME (WDVS)</h6>
                  <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>Professionelle Ausführung von WDVS zur Verbesserung der energetischen Qualität, des Witterungsschutzes und der Langlebigkeit.</p>
                </div>
              </div>

              <div className="col">
                <div className="p-3 h-100 bg-white rounded shadow-sm border-start border-4 golden-left-border">
                  <h6 className="fw-bold mb-2" style={{ color: '#0b213a' }}>FASSADENBAU</h6>
                  <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>Hochwertige Ausführung von Fassadenarbeiten mit besonderem Augenmerk auf eine präzise und optisch anspruchsvolle Gestaltung.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ─── ৪. স্লাইডার সেকশন ─── */}
      <div className="py-5 ref-slider-section">
        <div className="container">
          <h5 className="fw-bold mb-4 text-center ref-slider-heading">
            WEITERE PROJEKTBEREICHE
          </h5>

          <Swiper 
            modules={[Autoplay, Pagination]} 
            spaceBetween={25} 
            slidesPerView={5} 
            loop={true} 
            autoplay={{ delay: 2500, disableOnInteraction: false }} 
            pagination={{ clickable: true }}
            className="swiper-custom-padding"
            breakpoints={{ 
              320: { slidesPerView: 1 }, 
              576: { slidesPerView: 2 }, 
              768: { slidesPerView: 3 }, 
              1024: { slidesPerView: 5 } 
            }}
          >
            {[
              { title: 'BÜROGEBÄUDE', src: '/STARTSEITE/slider1.webp' },
              { title: 'WOHNANLAGEN (WDVS)', src: '/STARTSEITE/slider2.webp' },
              { title: 'ROHBAU & BAUARBEITEN', src: '/STARTSEITE/slider3.webp' },
              { title: 'INDUSTRIE & GEWERBE', src: '/STARTSEITE/slider4.webp'},
              { title: 'PRAXEN & KANZLEIEN', src: '/STARTSEITE/slider5.webp'},
              { title: 'BAUARBEITEN', src: '/STARTSEITE/slider6.webp' }
            ].map((p, i) => (
              <SwiperSlide key={i}>
                <div className="card border-0 shadow-sm overflow-hidden ref-slide-card">
                  <img 
                    src={p.src} 
                    alt={p.title} 
                    className="ref-slide-img" 
                  />
                  <div className="p-3 text-center d-flex align-items-center justify-content-center ref-slide-footer">
                    <h6 className="ref-slide-title">
                      {p.title}
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </section>
  );
};

export default References;