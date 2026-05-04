import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Info } from 'lucide-react';

const ExerciseBreakdown = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const exerciseCategories = [
    {
      title: "Hip Thrusts & Bridges (Horizontal Loading)",
      description: "These exercises place maximum tension on the glutes in the shortened (squeezed) position. They are the primary driver of glute growth.",
      exercises: [
        {
          name: "Barbell Hip Thrust (All Variations)",
          focus: "Gluteus Maximus (Lower/Mid)",
          cues: [
            "Keep your chin tucked and ribs down to prevent lower back arching.",
            "Drive through your heels, not your toes.",
            "Squeeze the glutes hard at the top for a full 2 seconds.",
            "Maintain a straight line from your knees to your shoulders at the top."
          ]
        },
        {
          name: "Glute Bridge & Kas Glute Bridge",
          focus: "Gluteus Maximus (Upper/Mid)",
          cues: [
            "A bridge has a shorter range of motion than a thrust.",
            "Never let your butt fully rest on the floor between reps.",
            "For the Kas Bridge, use a very short, controlled range of motion keeping constant tension on the glutes."
          ]
        },
        {
          name: "Frog Pumps",
          focus: "Gluteus Maximus",
          cues: [
            "Put the soles of your feet together, knees dropping out wide.",
            "Keep your chin tucked.",
            "Pump your hips up and down in a fast, rhythmic motion for high reps."
          ]
        }
      ]
    },
    {
      title: "Hinges & Deadlifts (Vertical Loading)",
      description: "These build massive tension by stretching the glutes under load (the lengthened position).",
      exercises: [
        {
          name: "Romanian Deadlifts (RDL & B-Stance)",
          focus: "Gluteus Maximus (Lengthened) & Hamstrings",
          cues: [
            "This is a hinge, not a squat. Push your hips back towards an imaginary wall.",
            "Keep a soft bend in your knees, but do not bend them more as you lower the weight.",
            "Only lower the weight until you feel a deep stretch in your hamstrings.",
            "For B-Stance, keep 80% of your weight on the flat front foot."
          ]
        },
        {
          name: "Good Mornings",
          focus: "Gluteus Maximus & Erector Spinae",
          cues: [
            "Similar hinge motion to the RDL, but the load is on your back.",
            "Keep your core extremely tight.",
            "Push hips back until your torso is nearly parallel to the floor."
          ]
        },
        {
          name: "Cable Pull-throughs",
          focus: "Gluteus Maximus",
          cues: [
            "Stand a few feet away from the cable machine so there is constant tension.",
            "Let the weight pull your hips back between your legs.",
            "Squeeze your glutes to stand tall—do not pull with your arms."
          ]
        },
        {
          name: "Hyperextensions (45-Degree & Reverse)",
          focus: "Gluteus Maximus & Lower Back",
          cues: [
            "To target glutes over lower back, round your upper back slightly and flare your toes outward.",
            "Squeeze your glutes to lift your torso/legs, stopping when your body is in a straight line."
          ]
        }
      ]
    },
    {
      title: "Squats, Lunges & Step-Ups (Unilateral)",
      description: "These fix imbalances between your left and right sides and heavily recruit the stabilizing glute medius.",
      exercises: [
        {
          name: "Bulgarian Split Squats",
          focus: "Gluteus Maximus & Medius",
          cues: [
            "Lean your torso forward slightly (about 45 degrees) to target the glutes over the quads.",
            "Keep your shin vertical on the working leg.",
            "Drive through the heel of your front foot to stand back up.",
            "Keep 80% of your weight on the front leg, 20% on the back leg for balance."
          ]
        },
        {
          name: "Reverse & Curtsy Lunges",
          focus: "Gluteus Maximus & Medius",
          cues: [
            "Take a long step backward to increase glute stretch (short steps target quads).",
            "Lean forward slightly.",
            "For Curtsy lunges, step back and slightly across your midline."
          ]
        },
        {
          name: "Step-Ups",
          focus: "Gluteus Maximus",
          cues: [
            "Use a box height where your knee is roughly at a 90-degree angle.",
            "Do NOT push off the bottom foot. Pull your entire body weight up using only the top glute.",
            "Lower yourself down as slowly as possible."
          ]
        },
        {
          name: "Dumbbell Sumo Squats",
          focus: "Gluteus Maximus & Adductors",
          cues: [
            "Take a wide stance with your toes pointed outward.",
            "Keep your chest up and push your knees out wide as you descend.",
            "Only go down as far as you can while keeping tension on your glutes."
          ]
        }
      ]
    },
    {
      title: "Isolation & Abduction (The 'Shelf')",
      description: "These target the upper/side glutes (medius and minimus) to create that round 'shelf' look.",
      exercises: [
        {
          name: "Hip Abduction (Machine, Cable, Banded)",
          focus: "Gluteus Medius",
          cues: [
            "When using the machine, leaning forward targets the gluteus maximus more; leaning back targets the medius.",
            "Pause for 1-2 seconds at the point of maximum abduction (when your legs are widest)."
          ]
        },
        {
          name: "Cable Kickbacks",
          focus: "Gluteus Medius & Maximus",
          cues: [
            "Keep your torso stable; do not swing your lower back.",
            "Kick back at a slight 45-degree angle outward to maximize glute medius engagement.",
            "Control the weight on the way back down."
          ]
        },
        {
          name: "Lateral Band Walks & Fire Hydrants",
          focus: "Gluteus Medius & Minimus",
          cues: [
            "Keep constant tension on the band.",
            "Stay low in an athletic stance during walks.",
            "Lead with your knee, not your ankle."
          ]
        }
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
          <p className="breakdown-subtitle">Mastering the form is more important than the weight. Here is the complete database of every exercise in your program.</p>
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

        {exerciseCategories.map((category, catIdx) => (
          <div key={catIdx} className="cues-section" style={{ marginTop: '5rem' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
              <span className="text-accent">{category.title.split(' ')[0]}</span> {category.title.split(' ').slice(1).join(' ')}
            </h2>
            <p className="anatomy-desc" style={{ marginBottom: '2rem' }}>{category.description}</p>
            
            <div className="cues-grid">
              {category.exercises.map((ex, i) => (
                <div key={i} className="cue-card">
                  <div className="cue-header">
                    <h3 className="cue-title" style={{ fontSize: '1.5rem' }}>{ex.name}</h3>
                    <span className="cue-focus"><Target size={16} /> {ex.focus}</span>
                  </div>
                  <div className="cue-body">
                    <h4 className="cue-subtitle" style={{ fontSize: '1.1rem' }}><Info size={16} /> Key Cues</h4>
                    <ul className="cue-list">
                      {ex.cues.map((cue, idx) => (
                        <li key={idx} style={{ fontSize: '0.95rem' }}>{cue}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseBreakdown;
