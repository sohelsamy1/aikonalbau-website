import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import Select from 'react-select';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './Contact.css';

const ContactPage = () => {
  const form = useRef();
  const [selectedOption, setSelectedOption] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [startDate, setStartDate] = useState(null);

  const options = [
    { value: 'Hochbau', label: 'Hochbau' },
    { value: 'Fassadenbau', label: 'Fassadenbau' },
    { value: 'WDVS (Wärmedämmung)', label: 'WDVS (Wärmedämmung)' },
    { value: 'Innenputz & Trockenbau', label: 'Innenputz & Trockenbau' },
    { value: '', label: '' },
    { value: 'Sanierung', label: 'Sanierung' }
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: '7px 12px',
      backgroundColor: '#fcfcfc',
      borderRadius: '10px',
      borderColor: state.isFocused ? '#C5A059' : '#e2e8f0',
      boxShadow: state.isFocused ? '0 0 0 4px rgba(197, 160, 89, 0.12)' : 'none',
      '&:hover': { borderColor: '#C5A059' }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#f8f5ef' : 'white',
      color: state.isFocused ? '#0b213a' : '#334155',
      fontWeight: state.isFocused ? '600' : 'normal',
      cursor: 'pointer',
      padding: '10px 14px'
    })
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3tbloeb', 'template_bsugqhf', form.current, 'uY_QWuE2moZzOidEH')
      .then((result) => {
        setSuccessMessage("Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet."); 
        form.current.reset(); 
        setStartDate(null); 
        setSelectedOption(null); 
        
        setTimeout(() => setSuccessMessage(''), 5000);
      }, (error) => {
        alert("Fehler beim Senden: " + error.text);
      });
  };

  return (
    <div className="container py-5" style={{ fontFamily: 'sans-serif' }}>
  
      <Helmet>
        <title>Kontaktieren Sie aiko.nal Bau GmbH | Hochbau in Berlin</title>
        <meta name="description" content="Haben Sie Fragen zu unseren Leistungen? Kontaktieren Sie aiko.nal Bau GmbH in Berlin für Hochbau, Fassadenbau, WDVS. Wir freuen uns auf Ihre Anfrage." />
        <meta name="keywords" content="aiko.nal Bau GmbH, Hochbau Berlin, Fassadenbau, WDVS, Trockenbau, , Bauunternehmen Berlin" />
        <meta name="author" content="aiko.nal Bau GmbH" />
        <link rel="canonical" href="https://aikonalbau.com/kontakt" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Kontaktieren Sie aiko.nal Bau GmbH | Hochbau  in Berlin" />
        <meta property="og:description" content="Nehmen Sie Kontakt mit uns auf. Ihr Partner für professionellen Hochbau, Fassadenbau in Berlin." />
        <meta property="og:url" content="https://aikonalbau.com/kontakt" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aikonalbau.com/References/card1.webp" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kontaktieren Sie aiko.nal Bau GmbH | Hochbau in Berlin" />
        <meta name="twitter:description" content="Nehmen Sie Kontakt mit uns auf. Ihr Partner für professionellen Hochbau, Fassadenbau in Berlin." />
        <meta name="twitter:image" content="https://aikonalbau.com/References/card1.webp" />
      </Helmet>

      {/* ব্যানার সেকশন */}
      <section style={{ marginTop: '-20px', marginBottom: '40px' }}>
        <div className="custom-box-width"> 
          <div className="row g-0 text-white shadow-lg" style={{ backgroundColor: '#0b213a', borderRadius: '12px', overflow: 'hidden' }}>
            <div className="col-12 p-4 p-md-5">
              <div className="row align-items-center">
                
                {/* বাম পাশে: কন্টাক্ট ডিটেইলস */}
                <div className="col-md-7 mb-4 mb-md-0">
                  <h3 className="fw-bold mb-4" style={{ color: '#C5A059', borderBottom: '2px solid #C5A059', display: 'inline-block', paddingBottom: '5px' }}>KONTAKT</h3>
                  <div className="row" style={{ fontSize: '15px' }}>
                    <div className="col-sm-6 mb-3">
                      <p className="mb-1 opacity-50">📍 Adresse</p>
                      <strong className="d-block">Bonifatius Straße 24 , 13509 Berlin</strong>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <p className="mb-1 opacity-50">📞 Telefon</p>
                      <strong className="d-block">+49 0178 927 11 18</strong>
                    </div>
                    <div className="col-sm-6 mb-0">
                      <p className="mb-1 opacity-50">✉️ E-Mail</p>
                      <strong className="d-block">aikonalarbeit@gmail.com</strong>
                    </div>
                    <div className="col-sm-6 mb-0">
                      <p className="mb-1 opacity-50">🕒 Bürozeiten</p>
                      <strong className="d-block">Mo - Fr: 8:00 - 18:00 Uhr</strong>
                    </div>
                  </div>
                </div>

                {/* ডান পাশে:ব্র্যান্ডিং ইনফো */}
                <div className="col-md-5 text-md-end text-center mt-4 mt-md-0 border-start-md border-secondary">
                  <div className="fw-bold h2 mb-2" style={{ color: '#ffffff' }}>
                    aiko.nal Bau GmbH
                  </div>
                  <div className="fw-bold mb-3" style={{ color: '#C5A059', letterSpacing: '1px' }}>
                    HOCHBAU
                  </div>
                  <div className="small opacity-50 px-3" style={{ fontSize: '11px', lineHeight: '1.8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                    INNENPUTZ • TROCKENBAU • FASSADENBAU • WDVS
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* প্রিমিয়াম রি-ডিজাইনড ইন্ট্রোডাকশন সেকশন */}
     <section>
        <div className="p-4 p-md-5 text-center shadow-sm rounded-4 custom-box-bg">
          <span className="text-uppercase fw-bold small d-block mb-2" style={{ color: '#C5A059', letterSpacing: '2px' }}>IHR LOKALER EXPERTE</span>
          <h2 className="fw-bold mb-3" style={{ color: '#0b213a', fontSize: '1.9rem' }}>Wir verwirklichen Ihre Bauprojekte in Berlin</h2>
          <p className="text-muted mx-auto mb-4" style={{ maxWidth: '750px', fontSize: '16px', lineHeight: '1.7' }}>
            Haben Sie ein konkretes Bauprojekt im Kopf oder wünschen Sie eine fachkundige Beratung? Füllen Sie unser kurzes Anfrageformular aus – unser erfahrenes Team steht Ihnen jederzeit kompetent zur Seite für Hochbau und Fassadenarbeiten.
          </p>
          <div className="mx-auto" style={{ width: '80px', height: '3px', backgroundColor: '#C5A059', borderRadius: '2px' }}></div>
        </div>
      </section>

      {/* ফর্ম ও ম্যাপ সেকশন */}
      <div className="row g-4 align-items-stretch">
        
        {/* বাম পাশ: প্রিমিয়াম লুক কন্টাক্ট ফর্ম */}
        <div className="col-12 col-lg-7">
          <div className="p-4 p-md-5 h-100 shadow modern-form-card" style={{ backgroundColor: '#ffffff', borderRadius: '16px', borderTop: '6px solid #C5A059', border: '1px solid #edf2f7' }}>
            
            <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
              <div className="icon-box me-3 text-white rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: '50px', height: '50px', backgroundColor: '#0b213a', fontSize: '20px' }}>
                ✍️
              </div>
              <div>
                <h3 className="fw-bold mb-1" style={{ color: '#0b213a', fontSize: '1.4rem', letterSpacing: '0.5px' }}>ANGEBOT ANFORDERN</h3>
                <p className="mb-0 text-muted" style={{ fontSize: '13.5px' }}>Unverbindlich anfragen & zeitnah ein massgeschneidertes Angebot erhalten.</p>
              </div>
            </div>
            
            <form ref={form} onSubmit={sendEmail}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-secondary">Ihr Name *</label>
                  <input type="text" name="name" className="form-control modern-input" placeholder="Max Mustermann" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-secondary">Firma (optional)</label>
                  <input type="text" name="firma" className="form-control modern-input" placeholder="Musterfirma GmbH" />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-secondary">E-Mail-Adresse *</label>
                  <input type="email" name="email" className="form-control modern-input" placeholder="beispiel@domain.de" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-secondary">Telefonnummer *</label>
                  <input type="tel" name="telefon" className="form-control modern-input" placeholder="+49 30 12345678" required />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-secondary">Stadt / PLZ</label>
                  <input type="text" name="stadt_plz" className="form-control modern-input" placeholder="z.B. 10827 Berlin" />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold text-secondary">Wunschtermin</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="form-control modern-input"
                    placeholderText="TT.MM.JJJJ"
                    autoComplete="one-time-code"
                  />
                  <input 
                    type="hidden" 
                    name="datum" 
                    value={startDate ? startDate.toLocaleDateString('de-DE') : ''} 
                  />
                </div>

                <div className="col-12">
                  <label className="form-label small fw-bold text-secondary">Dringlichkeit</label>
                  <input type="text" name="dringlichkeit" className="form-control modern-input" placeholder="z.B. Sofort, In 2 Wochen, Flexibel" />
                </div>
                
                <div className="col-12">
                  <label className="form-label small fw-bold text-secondary">Gewünschte Leistung</label>
                  <Select 
                    options={options} 
                    styles={customStyles} 
                    placeholder="Leistung auswählen..."
                    isSearchable={false}
                    onChange={(option) => setSelectedOption(option)}
                  />
                  <input type="hidden" name="leistung" value={selectedOption ? selectedOption.value : ''} />
                </div>
                
                <div className="col-12">
                  <label className="form-label small fw-bold text-secondary">Ihre Nachricht / Projektbeschreibung *</label>
                  <textarea name="nachricht" className="form-control modern-input" rows="4" placeholder="Beschreiben Sie kurz Ihr Bauvorhaben..." required></textarea>
                </div>
                
                <div className="col-12 mt-4">
                  <button type="submit" className="btn text-white w-100 fw-bold py-3 submit-btn-custom shadow" style={{ backgroundColor: '#C5A059', letterSpacing: '0.8px', borderRadius: '10px', fontSize: '15px' }}>
                    UNVERBINDLICHE ANFRAGE SENDEN &nbsp;→
                  </button>
                </div>
              </div>
            </form>

            {/* সাকসেস মেসেজ */}
            {successMessage && (
              <div className="alert mt-4 text-center fw-bold d-flex align-items-center justify-content-center p-3 shadow-sm" style={{ backgroundColor: '#f4ecdf', color: '#8a6d2b', border: '1px solid #d4b87a', borderRadius: '10px', fontSize: '14.5px' }}>
                ✅ &nbsp;{successMessage}
              </div>
            )}

          </div>
        </div>

        {/* ডান পাশ: ম্যাপ সেকশন */}
       <div className="col-12 col-lg-5">
          <div className="shadow overflow-hidden h-100" style={{ borderRadius: '16px', minHeight: '500px', border: '1px solid #edf2f7' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.539828456075!2d13.303254576571556!3d52.5843799720743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85233e738c6bf%3A0x8534b3f815b3c375!2sBonifatiusstra%C3%9Fe%2024%2C%2013509%20Berlin!5e0!3m2!1sde!2sde!4v1680000000000!5m2!1sde!2sde" 
              width="100%" height="100%" style={{ border: 0, minHeight: '100%' }} allowFullScreen="" loading="lazy" title="Location Map">
            </iframe>
           </div>
        </div>

      </div>    
    </div>
  );
};

export default ContactPage;