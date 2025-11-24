// components/LandingPage.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import ProductHighlights from './ProductHighlights';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <ProductHighlights />
      <Footer />
    </div>
  );
};

export default LandingPage;