import React from 'react';

// সেকশনগুলো ইমপোর্ট করুন (আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী পাথ ঠিক করে নেবেন)
import Hero from './Hero';
import Service from './Service';


function Home() {
  return (
    <main>
      <Hero />
       <Service />
    </main>
  );
}

export default Home;