import React from 'react';
import { Helmet } from 'react-helmet-async';

// সেকশনগুলো ইমপোর্ট করুন (আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী পাথ ঠিক করে নেবেন)
import Hero from './Hero';
import Service from './Service';
import Features from './Features';
import About from './About';
import Slider from './Slider';

function Home() {
  return (
    <>
     <Helmet>
        <title>aiko.nal Bau GmbH | Professionelle Baudienstleistungen  in Berlin</title>
      
       <meta 
          name="description" 
          content="Ihr zuverlässiger Experte für Hochbau, Rohbau, Trockenbau, , WDVS  in Berlin. Höchste Qualität & Termintreue vom Fachbetrieb aiko.nal Bau GmbH." 
        />
        
        {/* টার্গেটেড কিওয়ার্ডস */}
        <meta name="keywords" content="aiko.nal Bau GmbH, Bauunternehmen Berlin, Hochbau Berlin, Rohbau, Trockenbau, , WDVS, Fassadenbau" />
        
        {/* ক্যানোনিক্যাল ট্যাগ */}
        <link rel="canonical" href="https://aikonalbau.com/" />
        
        {/* সোশ্যাল মিডিয়া শেয়ারিং (Open Graph) ট্যাগ */}
        <meta property="og:title" content="aiko.nal Bau GmbH | Professionelle Baudienstleistungen in Berlin" />
        <meta property="og:description" content="Entdecken Sie unsere Baudienstleistungen in Berlin: Hochbau,  Trockenbau,  und mehr." />
        <meta property="og:url" content="https://aikonalbau.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aikonalbau.com/assets/logo-og.jpg" />
      </Helmet>

      <main>
        <Hero />
        <Service />
        <Features />
        <About />
        <Slider />
      </main>
    </>
  );
}

export default Home;