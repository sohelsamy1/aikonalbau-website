import React from 'react';
import './Accessibility.css';

const Accessibilitystatement = () => {
  return (
    <>
    
      <div className="accessibility-page container py-5">
        <div className="content-section p-4 p-md-5 shadow-sm">
          
          {/* Main Title */}
          <h1 className="accessibility-title mb-3">
            Erklärung zur Barrierefreiheit
          </h1>
          <p className="accessibility-subtitle mb-4">
            Unser Engagement für einen barrierefreien digitalen Zugang bei aiko.nal Bau GmbH.
          </p>
          
          <p className="lead fw-semibold text-secondary mb-4">
            Die <strong>aiko.nal Bau GmbH</strong> ist bestrebt, ihre Website im Einklang mit den nationalen Rechtsvorschriften zur Umsetzung der Richtlinie (EU) 2016/2102 barrierefrei zugänglich zu machen.
          </p>
          
          <p className="mb-4">
            Diese Internetseite befindet sich kontinuierlich in der Optimierung, um allen Nutzerinnen und Nutzern ein uneingeschränktes digitales Erlebnis zu bieten und modernste Standards zu erfüllen.
          </p>

          <h2 className="accessibility-heading mt-5">
            1. Technische Barrierefreiheit & Bedienung
          </h2>
          <p>
            Wir arbeiten fortlaufend daran, Bedienelemente, Grafiken und visuelle Inhalte mit aussagekräftigen Alternativtexten auszustatten. Dies stellt sicher, dass auch assistive Technologien wie Screenreader visuelle Elemente präzise erfassen und hörbar machen können.
          </p>

          <h2 className="accessibility-heading mt-5">
            2. Struktur und Benutzerführung
          </h2>
          <p>
            Eine klare visuelle und technische Struktur hat für uns oberste Priorität. Überschriften und Textabschnitte werden hierarchisch aufgebaut, um eine fehlerfreie und komfortable Navigation für Menschen mit Sehbeeinträchtigungen zu gewährleisten.
          </p>

          {/* Feedback Box with Brand Touch */}
          <div className="accessibility-feedback-box mt-5 p-4">
            <h4 className="h5 fw-bold mb-2">Feedback und Kontakt</h4>
            <p className="mb-0 text-muted">
              Sollten Ihnen Mängel in Bezug auf die Barrierefreiheit auf unserer Website auffallen, zögern Sie nicht, uns zu kontaktieren. Ihr Feedback hilft uns dabei, unseren digitalen Service kontinuierlich zu verbessern.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Accessibilitystatement;