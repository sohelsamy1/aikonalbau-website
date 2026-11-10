import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Signlanguage.css';
const Signlanguage = () => {
  return (
    <>    
      <Helmet>
        <title>Gebärdensprache & Inklusion | aiko.nal Bau GmbH Berlin</title>
        <meta name="description" content="Entdecken Sie unsere Erklärvideos in Deutscher Gebärdensprache (DGS) für eine barrierefreie und inklusive Navigation auf der aiko.nal Bau GmbH Website." />
        <link rel="canonical" href="https://aikonalbau.com/gebaerdensprache" />
      </Helmet>
      <div className="sign-language-page container py-5">
        <div className="content-section p-4 p-md-5 shadow-sm">
          
          <h1 className="sign-title mb-3">
            Gebärdensprache & Barrierefreiheit
          </h1>
          <p className="sign-subtitle mb-4">
            Inklusive und barrierefreie Navigation bei aiko.nal Bau GmbH.
          </p>
          
          <p className="lead fw-semibold text-secondary mb-4">
            Die <strong>aiko.nal Bau GmbH</strong> steht für Chancengleichheit, Inklusion und umfassende Unterstützung für alle Nutzerinnen und Nutzer im digitalen Raum.
          </p>
          
          <p className="mb-4">
            Auf dieser Seite finden gehörlose und schwerhörige Menschen spezielle Erklärvideos in Deutscher Gebärdensprache (DGS). Diese Videos veranschaulichen detailliert, wie Sie sich auf unserer Plattform orientieren und unsere Bau- und Baudienstleistungen einfach nutzen können.
          </p>

          <p className="mb-4">
            Zusätzlich bereiten wir wichtige Inhalte verständlich auf, um komplexe Themen für alle Besucherinnen und Besucher transparent und zugänglich zu machen.
          </p>

          <h2 className="sign-heading mt-5">
            Unser Engagement für digitale Inklusion
          </h2>
          <p>
            Unser oberstes Ziel ist es, unsere digitalen Inhalte für jeden Menschen uneingeschränkt zugänglich zu machen – völlig unabhängig von körperlichen oder sprachlichen Barrieren. Mit diesen Angeboten stellen wir sicher, dass unsere Website transparent, barrierefrei und benutzerfreundlich bleibt.
          </p>

          {/* Feedback / Info Box with Golden Accent */}
          <div className="sign-info-box mt-5 p-4">
            <h4 className="h5 fw-bold mb-2">Haben Sie Fragen oder Anregungen?</h4>
            <p className="mb-0 text-muted">
              Sollten Sie Unterstützung benötigen oder Anmerkungen zur Barrierefreiheit haben, zögern Sie nicht, uns zu kontaktieren. Wir helfen Ihnen gerne weiter.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Signlanguage;