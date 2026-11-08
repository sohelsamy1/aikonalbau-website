import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routes & Route ইমপোর্ট করতে হবে
import Header from './components/Header/Header'; 
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './Pages/Services/Services';
import AboutUs from './Pages/AboutUs/AboutUs';
import References from './Pages/References/References'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/leistungen" element={<Services />} />
         <Route path="/uber-uns" element={<AboutUs />} />
          <Route path="/referenzen" element={<References />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;