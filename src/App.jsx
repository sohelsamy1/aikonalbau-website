import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routes & Route ইমপোর্ট করতে হবে
import Header from './components/Header/Header'; 
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './pages/Services/Services';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/leistungen" element={<Services />} />
         <Route path="/uber-uns" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;