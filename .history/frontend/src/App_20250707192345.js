import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import ContactDetailsPage from './pages/ContactDetailsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-details" element={<ContactDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
