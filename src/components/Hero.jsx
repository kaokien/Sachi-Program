import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <Link to="/breakdown" className="primary-button">
          Exercise Breakdown <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
