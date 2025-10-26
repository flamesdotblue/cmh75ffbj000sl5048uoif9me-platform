import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TestimonialsPricing from './components/TestimonialsPricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Features />
      <TestimonialsPricing />
      <Footer />
    </div>
  );
}

export default App;
