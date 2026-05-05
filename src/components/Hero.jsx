import { ArrowRight, Flame, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {

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
        <div className="hero-buttons">
          <Link to="/breakdown" className="primary-button">
            Exercise Breakdown <ArrowRight size={20} />
          </Link>
          <Link to="/guide" className="secondary-button">
            <BookOpen size={20} /> Read the Guide
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
