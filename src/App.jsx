import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routes & Route ইমপোর্ট করতে হবে
import Header from './components/Header/Header'; 
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;