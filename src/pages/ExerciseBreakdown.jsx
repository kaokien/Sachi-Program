import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Info } from 'lucide-react';

const ExerciseBreakdown = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const exercises = [
    {
      name: "Hip Thrusts",
      focus: "Gluteus Maximus (Lower/Mid)",
      cues: [
        "Keep your chin tucked and ribs down to prevent lower back arching.",
        "Drive through your heels, not your toes.",
        "Squeeze the glutes hard at the top for a full 2 seconds.",
        "Maintain a straight line from your knees to your shoulders at the top."
      ]
    },
    {
      name: "Romanian Deadlifts (RDLs)",
      focus: "Gluteus Maximus (Lengthened) & Hamstrings",
      cues: [
        "This is a hinge, not a squat. Push your hips back towards an imaginary wall.",
        "Keep a soft bend in your knees, but do not bend them more as you lower the weight.",
        "Only lower the weight until you feel a deep stretch in your hamstrings.",
        "Squeeze your glutes to drive your hips forward to stand up."
      ]
    },
    {
      name: "Bulgarian Split Squats",
      focus: "Gluteus Maximus & Medius",
      cues: [
        "Lean your torso forward slightly (about 45 degrees) to target the glutes over the quads.",
        "Keep your shin vertical on the working leg.",
        "Drive through the heel of your front foot to stand back up.",
        "Keep 80% of your weight on the front leg, 20% on the back leg for balance."
      ]
    }
  ];

  return (
    <div className="breakdown-page animate-fade-in">
      <nav className="nav-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={24} /> Back to Program
        </Link>
      </nav>

      <div className="breakdown-container">
        <header className="breakdown-header">
          <h1 className="breakdown-title">Exercise <span className="text-accent">Breakdown</span></h1>
          <p className="breakdown-subtitle">Mastering the form is more important than the weight.</p>
        </header>

        <div className="anatomy-section glass">
          <div className="anatomy-content">
            <h2 className="anatomy-title">The Target <span className="text-accent">Anatomy</span></h2>
            <p className="anatomy-desc">Understanding what you are working is the first step to the mind-muscle connection.</p>
            <ul className="anatomy-list">
              <li><strong>Gluteus Maximus:</strong> The largest muscle, responsible for the overall size and shape. Worked heavily by thrusts and deadlifts.</li>
              <li><strong>Gluteus Medius:</strong> The side/upper glute. Crucial for stability and the "shelf" look. Worked by abductions and unilateral exercises.</li>
              <li><strong>Gluteus Minimus:</strong> Deep stabilizing muscle working with the medius.</li>
            </ul>
          </div>
          <div className="anatomy-visual">
            <svg viewBox="0 0 200 200" className="glute-svg">
              <defs>
                <linearGradient id="gluteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D9FD3F" />
                  <stop offset="100%" stopColor="#8db814" />
                </linearGradient>
              </defs>
              {/* Stylized pelvis/glute representation */}
              <path d="M50 80 Q100 20 150 80 Q180 150 120 180 Q100 190 80 180 Q20 150 50 80 Z" 
                    fill="none" 
                    stroke="var(--border-color)" 
                    strokeWidth="2"/>
              <path d="M60 85 Q100 35 140 85 Q165 140 115 165 Q100 170 85 165 Q35 140 60 85 Z" 
                    fill="url(#gluteGrad)" 
                    opacity="0.8"/>
              <circle cx="100" cy="100" r="40" fill="var(--bg-secondary)" opacity="0.3"/>
              
              {/* Highlight points */}
              <circle cx="75" cy="100" r="6" fill="#fff" className="pulse-dot"/>
              <circle cx="125" cy="100" r="6" fill="#fff" className="pulse-dot"/>
              
              <text x="100" y="105" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="var(--font-display)" letterSpacing="1">MAXIMUS</text>
            </svg>
          </div>
        </div>

        <div className="cues-section">
          <h2 className="section-title">The Big <span className="text-accent">Three</span></h2>
          <div className="cues-grid">
            {exercises.map((ex, i) => (
              <div key={i} className="cue-card">
                <div className="cue-header">
                  <h3 className="cue-title">{ex.name}</h3>
                  <span className="cue-focus"><Target size={16} /> {ex.focus}</span>
                </div>
                <div className="cue-body">
                  <h4 className="cue-subtitle"><Info size={16} /> Key Cues</h4>
                  <ul className="cue-list">
                    {ex.cues.map((cue, idx) => (
                      <li key={idx}>{cue}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseBreakdown;
