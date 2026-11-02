import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      {/* ১. হেডার বা নেভবার */}
      <header className="navbar">
        <div className="logo">
          <h2>Aikonalbau</h2>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* ২. হিরো সেকশন */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Build Modern Web Applications with React & Vite</h1>
          <p>
            Welcome to your new professional platform. Fast, scalable, and optimized for production.
          </p>
          <div className="hero-buttons">
            <button 
              className="primary-btn"
              onClick={() => setCount((count) => count + 1)}
            >
              Clicked {count} Times
            </button>
            <a href="#features" className="secondary-btn">Learn More</a>
          </div>
        </div>
      </section>

      {/* ৩. ফিচার বা সার্ভিস সেকশন */}
      <section id="features" className="features-section">
        <h2>Our Core Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>⚡ Blazing Fast</h3>
            <p>Powered by Vite for instant server start and lightning-fast HMR updates.</p>
          </div>
          <div className="card">
            <h3>⚛️ Modern React</h3>
            <p>Built using component-driven architecture with Hooks and modern state management.</p>
          </div>
          <div className="card">
            <h3>🎨 Fully Responsive</h3>
            <p>Optimized for all devices including mobile, tablet, and desktop screens.</p>
          </div>
        </div>
      </section>

      {/* ৪. ফুটার */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Aikonalbau. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App