import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

const Hero = () => {
  const scrollToProgram = () => {
    document.getElementById('program').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-content animate-fade-in">
        <span className="hero-subtitle">
          <Flame size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} />
          For Sachi
        </span>
        <h1 className="hero-title">
          Build the <span className="text-gradient">Blueprint</span>
        </h1>
        <p className="hero-description">
          A 12-week specialized program designed to maximize glute hypertrophy without over-developing your legs. 
          Science-backed, perfectly structured, and made just for you.
        </p>
        <button className="primary-button" onClick={scrollToProgram}>
          Start the Program <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
