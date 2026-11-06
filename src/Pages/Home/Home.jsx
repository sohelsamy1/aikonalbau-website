import React from 'react';

// সেকশনগুলো ইমপোর্ট করুন (আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী পাথ ঠিক করে নেবেন)
import Hero from './Hero';
import Service from './Service';
import Features from './Features';
import About from './About';
import Slider from './Slider';


function Home() {
  return (
    <main>
      <Hero />
       <Service />
       <Features />
       <About />
        <Slider />
    </main>
  );
}

export default Home;