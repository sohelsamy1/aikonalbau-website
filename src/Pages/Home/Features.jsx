import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section 
      style={{ 
        backgroundColor: '#0b213a',
        /* 👇 এখান থেকে পুরো সেকশনের ওপর ও নিচের প্যাডিং/ফাঁকা জায়গা কন্ট্রোল করুন 👇 */
        paddingTop: '20px',    
        paddingBottom: '20px', 
      }}
    >
      <div 
        className="container"
        style={{
          /* 👇 এখান থেকে কন্টেনারের ওপর ও নিচের প্যাডিং কন্ট্রোল করতে পারেন 👇 */
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <div 
          className="text-white text-center position-relative shadow-sm"
          style={{
            backgroundColor: '#111f33',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            borderRadius: '12px',
            /* 👇 এখান থেকে বক্সের ভেতরের ওপর ও নিচের ফাঁকা জায়গা কন্ট্রোল করুন 👇 */
            paddingTop: '30px',    
            paddingBottom: '30px', 
            paddingLeft: '30px',
            paddingRight: '30px',
          }}
        >
          <span 
            className="text-uppercase fw-bold d-inline-block mb-2" 
            style={{ color: '#C5A059', fontSize: '12px', letterSpacing: '2px' }}
          >
            BEREIT FÜR IHR PROJEKT
          </span>

          <h2 className="fw-bold mb-3 text-white" style={{ fontSize: '28px' }}>
            Bereit für Ihr nächstes Projekt?
          </h2>

          <p className="text-light opacity-85 mb-4 mx-auto" style={{ maxWidth: '600px', fontSize: '14px', lineHeight: '1.6' }}>
            Kontaktieren Sie uns noch heute für eine unverbindliche Beratung, professionelle Planung und ein maßgeschneidertes, kostenloses Angebot für Ihr Bauvorhaben in Berlin.
          </p>

          <div>
            <Link 
              to="/kontakt" 
              className="btn fw-bold text-uppercase px-4 py-3 shadow border-0"
              style={{ 
                backgroundColor: '#C5A059', 
                color: '#fff', 
                fontSize: '13px',
                borderRadius: '4px',
                transition: 'all 0.2s ease'
              }}
            >
              Jetzt Kontakt aufnehmen →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}