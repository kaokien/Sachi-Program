import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Zap, TrendingUp, Dumbbell, Apple, Moon, Brain, Heart, Target, Award } from 'lucide-react';

const chapters = [
  { id: 'overview', title: 'The Blueprint', icon: <Target size={20} /> },
  { id: 'science', title: 'The Science', icon: <Brain size={20} /> },
  { id: 'phase1', title: 'Phase 1', icon: <Zap size={20} /> },
  { id: 'phase2', title: 'Phase 2', icon: <TrendingUp size={20} /> },
  { id: 'phase3', title: 'Phase 3', icon: <Award size={20} /> },
  { id: 'nutrition', title: 'Nutrition', icon: <Apple size={20} /> },
  { id: 'recovery', title: 'Recovery', icon: <Moon size={20} /> },
  { id: 'mindset', title: 'Mindset', icon: <Heart size={20} /> },
];

const Guide = () => {
  const [activeChapter, setActiveChapter] = useState('overview');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveChapter(entry.target.id);
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    chapters.forEach(ch => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="guide-page animate-fade-in">
      <nav className="nav-header">
        <Link to="/" className="back-link"><ArrowLeft size={24} /> Back to Program</Link>
      </nav>

      {/* Cover */}
      <header className="guide-cover">
        <img src="/guide-cover.png" alt="" className="guide-cover-img" />
        <div className="guide-cover-overlay">
          <span className="guide-tag">The Complete Guide</span>
          <h1 className="guide-cover-title">
            12 Weeks to Build the <span className="text-gradient">Blueprint</span>
          </h1>
          <p className="guide-cover-sub">Everything you need to know about your glute hypertrophy program — the science, the phases, the nutrition, and the mindset.</p>
        </div>
      </header>

      {/* Table of Contents — sticky on desktop */}
      <div className="guide-layout">
        <aside className="guide-toc">
          <span className="toc-label">Chapters</span>
          {chapters.map(ch => (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className={`toc-link ${activeChapter === ch.id ? 'active' : ''}`}
              onClick={() => setActiveChapter(ch.id)}
            >
              {ch.icon} {ch.title}
            </a>
          ))}
        </aside>

        <div className="guide-content">

          {/* Ch 1 — Overview */}
          <section id="overview" className="guide-chapter">
            <span className="ch-number">01</span>
            <h2 className="ch-title">The <span className="text-accent">Blueprint</span></h2>
            <p className="ch-lead">This is a 12-week periodized glute hypertrophy program split into three 4-week phases. Each phase has a specific purpose — and together they build on each other to maximize your results.</p>

            <div className="ch-card">
              <h3>How It Works</h3>
              <p>You will train <strong>3 days per week</strong> with at least one rest day between sessions. Each session takes roughly 45–60 minutes. The program follows a principle called <strong>periodization</strong> — strategically changing the training variables (weight, reps, tempo, exercise selection) across phases so your body never fully adapts.</p>
            </div>

            <div className="timeline-grid">
              <div className="timeline-card">
                <span className="timeline-phase">Phase 1</span>
                <span className="timeline-weeks">Weeks 1–4</span>
                <h4>Foundation & Activation</h4>
                <p>Learn the movements. Build the mind-muscle connection. Establish your baseline weights.</p>
              </div>
              <div className="timeline-card">
                <span className="timeline-phase">Phase 2</span>
                <span className="timeline-weeks">Weeks 5–8</span>
                <h4>Volume & Hypertrophy</h4>
                <p>Increase the load. Add advanced techniques like deficit RDLs and Kas bridges. Push your limits.</p>
              </div>
              <div className="timeline-card">
                <span className="timeline-phase">Phase 3</span>
                <span className="timeline-weeks">Weeks 9–12</span>
                <h4>Overload & Polish</h4>
                <p>Peak strength. 1¼ reps. Maximum pump sessions. Shape and refine everything you built.</p>
              </div>
            </div>
          </section>

          {/* Ch 2 — The Science */}
          <section id="science" className="guide-chapter">
            <span className="ch-number">02</span>
            <h2 className="ch-title">The <span className="text-accent">Science</span></h2>
            <p className="ch-lead">Your glutes are actually three separate muscles, and they each respond to different types of loading. This program is designed around that fact.</p>

            <div className="anatomy-duo">
              <div className="ch-card">
                <h3><Dumbbell size={18} /> The Three Glute Muscles</h3>
                <ul className="ch-list">
                  <li><strong>Gluteus Maximus</strong> — The largest muscle in your body. Responsible for overall size and the "roundness" shape. Activated most by hip thrusts, deadlifts, and deep squats.</li>
                  <li><strong>Gluteus Medius</strong> — The side/upper glute. Creates the "shelf" look and side roundness. Targeted by abductions, kickbacks, and lateral work.</li>
                  <li><strong>Gluteus Minimus</strong> — Deep stabilizer that works alongside the medius. Trained through unilateral exercises and band work.</li>
                </ul>
              </div>
              <div className="ch-card">
                <h3><Target size={18} /> The Three Growth Mechanisms</h3>
                <ul className="ch-list">
                  <li><strong>Mechanical Tension</strong> — Lifting heavy with good form. The #1 driver of muscle growth. This is why progressive overload matters.</li>
                  <li><strong>Metabolic Stress</strong> — The "burn" and "pump" you feel during high-rep sets. This triggers chemical signals for growth.</li>
                  <li><strong>Muscle Damage</strong> — Controlled micro-tears from eccentric (lowering) portions of exercises. This is why slow negatives matter.</li>
                </ul>
              </div>
            </div>

            <blockquote className="ch-quote">
              "The glutes respond best to a combination of heavy compound lifts and high-rep isolation work — not one or the other."
              <cite>— Based on Contreras & Schoenfeld glute EMG research</cite>
            </blockquote>

            <div className="ch-card">
              <h3>Loading Vectors — Why Exercise Variety Matters</h3>
              <p>Research shows glutes are activated differently depending on the <em>direction</em> of resistance:</p>
              <ul className="ch-list">
                <li><strong>Horizontal loading</strong> (hip thrusts, bridges) — Maximum activation at the top (shortened position). Best for peak contraction.</li>
                <li><strong>Vertical loading</strong> (RDLs, squats) — Maximum activation at the bottom (stretched position). Best for muscle damage and growth signaling.</li>
                <li><strong>Lateral loading</strong> (abductions, band walks) — Targets the medius and minimus. Essential for the "shelf" look.</li>
              </ul>
              <p>Your program includes all three vectors in every phase. That's by design.</p>
            </div>
          </section>

          {/* Ch 3 — Phase 1 */}
          <section id="phase1" className="guide-chapter">
            <span className="ch-number">03</span>
            <h2 className="ch-title">Phase 1: <span className="text-accent">Foundation</span></h2>
            <p className="ch-lead">Weeks 1–4 are about learning the movements, building the neuromuscular connection, and establishing your working weights. Don't rush this phase — it sets the foundation for everything that follows.</p>

            <div className="week-grid">
              <div className="week-card">
                <h4>Week 1</h4>
                <p>Use lighter weight than you think you need. Focus entirely on <strong>feeling the glutes work</strong> on every rep. If you feel it in your quads or lower back, adjust your form.</p>
              </div>
              <div className="week-card">
                <h4>Week 2</h4>
                <p>Start adding weight on compounds (hip thrusts, RDLs). Keep isolation work light. You should be sore — that's the muscle damage mechanism working.</p>
              </div>
              <div className="week-card">
                <h4>Week 3</h4>
                <p>By now the movements should feel natural. Push for the top of each rep range. If the program says 8–10 reps, aim for 10.</p>
              </div>
              <div className="week-card">
                <h4>Week 4</h4>
                <p>Test your strength. Try to set personal records on hip thrusts and RDLs. Record these weights — they become your Phase 2 baseline.</p>
              </div>
            </div>

            <div className="ch-card highlight">
              <h3>🔑 Phase 1 Key Rules</h3>
              <ul className="ch-list">
                <li>Always do the warm-up activation circuit before training</li>
                <li>Hold the top of every hip thrust for a full 2-second squeeze</li>
                <li>Keep rest periods at 60–90 seconds for isolation, 2–3 minutes for compounds</li>
                <li>Log your weights in the app every session — you'll need them for Phase 2</li>
              </ul>
            </div>
          </section>

          {/* Ch 4 — Phase 2 */}
          <section id="phase2" className="guide-chapter">
            <span className="ch-number">04</span>
            <h2 className="ch-title">Phase 2: <span className="text-accent">Hypertrophy</span></h2>
            <p className="ch-lead">Weeks 5–8 are the growth engine. Volume increases, new exercises appear, and advanced techniques like deficit RDLs and Kas bridges push your muscles into unfamiliar territory — which is exactly where growth happens.</p>

            <div className="ch-card">
              <h3>What Changes</h3>
              <ul className="ch-list">
                <li><strong>Heavier hip thrusts</strong> — Drop to 6–8 reps with 3-second negatives. This maximizes mechanical tension.</li>
                <li><strong>Deficit RDLs</strong> — Standing on a plate increases range of motion, creating a deeper stretch under load.</li>
                <li><strong>Kas Glute Bridge</strong> — A shortened-range bridge that keeps constant tension on the glutes. No rest at the bottom.</li>
                <li><strong>Time under tension focus</strong> — Slower eccentrics, pauses at peak contraction, controlled tempos throughout.</li>
              </ul>
            </div>

            <blockquote className="ch-quote">
              "Progressive overload isn't just adding weight. It's also adding reps, slowing the tempo, increasing range of motion, or reducing rest periods. Phase 2 uses all of these."
            </blockquote>

            <div className="ch-card highlight">
              <h3>🔑 Phase 2 Key Rules</h3>
              <ul className="ch-list">
                <li>Increase hip thrust weight by 10–20% from your Phase 1 max</li>
                <li>On Kas bridges, never let the bar fully rest on the ground between reps</li>
                <li>Day 3 "Burnout & Shape" should leave you unable to walk normally — that's the goal</li>
                <li>If you plateau mid-phase, add one extra set to your weakest exercise instead of more weight</li>
              </ul>
            </div>
          </section>

          {/* Ch 5 — Phase 3 */}
          <section id="phase3" className="guide-chapter">
            <span className="ch-number">05</span>
            <h2 className="ch-title">Phase 3: <span className="text-accent">Overload</span></h2>
            <p className="ch-lead">Weeks 9–12 are the peak. You're stronger now, the movements are second nature, and your muscles are primed for maximum growth. This phase brings advanced techniques and the highest intensity.</p>

            <div className="ch-card">
              <h3>Advanced Techniques</h3>
              <ul className="ch-list">
                <li><strong>1¼ Reps</strong> — One full hip thrust rep + a quarter rep at the top = 1 rep. This doubles the time your glutes spend in peak contraction.</li>
                <li><strong>Deficit Bulgarian Split Squats</strong> — Front foot elevated on a plate. Deeper stretch = more growth stimulus.</li>
                <li><strong>100-Rep Burnout Circuit</strong> — The final workout of the program. Mix bridges, abductions, and kicks until you hit 100 total reps. Pure metabolic stress.</li>
              </ul>
            </div>

            <div className="ch-card highlight">
              <h3>🔑 Phase 3 Key Rules</h3>
              <ul className="ch-list">
                <li>You should be lifting your heaviest weights ever on Day 1</li>
                <li>Day 2 "Hyper-Pump" is about blood flow — lighter weight, more reps, shorter rest</li>
                <li>The 100-rep burnout circuit on Day 3 of Week 12 is your graduation. Give it everything.</li>
                <li>After Week 12, take a full deload week: train at 50% weight, 50% volume. Your body needs it.</li>
              </ul>
            </div>
          </section>

          {/* Ch 6 — Nutrition */}
          <section id="nutrition" className="guide-chapter">
            <span className="ch-number">06</span>
            <h2 className="ch-title">Fuel for <span className="text-accent">Growth</span></h2>
            <p className="ch-lead">You cannot build a booty in a caloric deficit. Your muscles need raw materials — protein, carbs, and fats — to repair and grow. Here's the no-BS nutrition framework.</p>

            <div className="nutrition-grid">
              <div className="nutrient-card">
                <span className="nutrient-emoji">🥩</span>
                <h4>Protein</h4>
                <p className="nutrient-target">1.6–2.2g per kg of bodyweight daily</p>
                <p>The building block of muscle. Spread intake across 3–5 meals. Prioritize: chicken, fish, eggs, Greek yogurt, whey protein.</p>
              </div>
              <div className="nutrient-card">
                <span className="nutrient-emoji">🍚</span>
                <h4>Carbs</h4>
                <p className="nutrient-target">3–5g per kg of bodyweight daily</p>
                <p>Your fuel for training intensity. Eat the majority around your workouts. Prioritize: rice, oats, potatoes, fruit, whole grains.</p>
              </div>
              <div className="nutrient-card">
                <span className="nutrient-emoji">🥑</span>
                <h4>Fats</h4>
                <p className="nutrient-target">0.7–1g per kg of bodyweight daily</p>
                <p>Essential for hormone production (including the ones that drive muscle growth). Prioritize: avocado, nuts, olive oil, eggs.</p>
              </div>
            </div>

            <div className="ch-card">
              <h3>Caloric Surplus: How Much?</h3>
              <p>To build muscle, eat <strong>200–400 calories above your maintenance</strong> (TDEE). This is a "lean bulk" — enough surplus to fuel growth without excessive fat gain. A rough starting point:</p>
              <ul className="ch-list">
                <li>If you weigh 130 lbs (59 kg): aim for ~2,000–2,200 calories/day</li>
                <li>If you weigh 150 lbs (68 kg): aim for ~2,200–2,500 calories/day</li>
                <li>Adjust every 2 weeks based on weight trends. Gaining 0.25–0.5 lbs/week is ideal.</li>
              </ul>
            </div>

            <blockquote className="ch-quote">"Eat to grow. Train to shape. Sleep to recover. Skip any one and the other two can't compensate."</blockquote>
          </section>

          {/* Ch 7 — Recovery */}
          <section id="recovery" className="guide-chapter">
            <span className="ch-number">07</span>
            <h2 className="ch-title"><span className="text-accent">Recovery</span> & Sleep</h2>
            <p className="ch-lead">Muscles don't grow in the gym — they grow while you recover. Training creates the stimulus; sleep and rest create the adaptation. This is non-negotiable.</p>

            <div className="ch-card">
              <h3><Moon size={18} /> The Recovery Checklist</h3>
              <ul className="ch-list">
                <li><strong>Sleep 7–9 hours per night.</strong> Growth hormone peaks during deep sleep. Less sleep = less growth, period.</li>
                <li><strong>Rest at least 1 day between glute sessions.</strong> The 3-day split has built-in recovery. Don't add extra glute work on rest days.</li>
                <li><strong>Stay hydrated.</strong> Aim for half your bodyweight in ounces of water daily. Dehydrated muscles recover slower.</li>
                <li><strong>Light movement on rest days.</strong> Walking, stretching, or yoga. Active recovery promotes blood flow to muscles without adding training stress.</li>
                <li><strong>Manage stress.</strong> Cortisol (stress hormone) directly opposes muscle growth. Find what helps you decompress.</li>
              </ul>
            </div>

            <div className="ch-card">
              <h3>Signs You Need More Recovery</h3>
              <ul className="ch-list">
                <li>Soreness lasting more than 72 hours after a session</li>
                <li>Weights that were easy last week suddenly feel heavy</li>
                <li>Low energy, poor sleep, loss of motivation</li>
                <li>Persistent joint aches (not just muscle soreness)</li>
              </ul>
              <p>If you hit 2+ of these, take an extra rest day. It's not laziness — it's strategy.</p>
            </div>
          </section>

          {/* Ch 8 — Mindset */}
          <section id="mindset" className="guide-chapter">
            <span className="ch-number">08</span>
            <h2 className="ch-title">The <span className="text-accent">Mindset</span></h2>
            <p className="ch-lead">The most important muscle you'll train in this program is your consistency. Here's the truth about building glutes — and about building anything worth having.</p>

            <div className="ch-card">
              <h3><Heart size={18} /> The Honest Timeline</h3>
              <ul className="ch-list">
                <li><strong>Weeks 1–2:</strong> You'll feel the soreness but see nothing. That's normal. The neural adaptations are happening invisibly.</li>
                <li><strong>Weeks 3–4:</strong> Your glutes will start "waking up." You'll feel them activating in daily life — walking, climbing stairs.</li>
                <li><strong>Weeks 5–8:</strong> This is where visible changes begin. Clothes fit differently. You'll feel stronger in every lift.</li>
                <li><strong>Weeks 9–12:</strong> Real, visible growth. The shape changes. The strength is undeniable. Other people will notice.</li>
              </ul>
            </div>

            <blockquote className="ch-quote">"Consistency beats intensity. Three average workouts per week for 12 weeks will always beat six perfect workouts followed by three weeks off."</blockquote>

            <div className="ch-card highlight">
              <h3>🍑 After Week 12</h3>
              <p>Take a <strong>deload week</strong> (Week 13): train at 50% weight and volume. Then you have two options:</p>
              <ul className="ch-list">
                <li><strong>Run it again.</strong> Reset the program with your new, heavier baseline weights. You'll grow even more the second time through.</li>
                <li><strong>Maintain.</strong> Drop to 2 sessions/week with your Phase 3 weights. This preserves everything you built with less time commitment.</li>
              </ul>
              <p>Either way — you built something real. Be proud of that. 💛</p>
            </div>
          </section>

          {/* CTA */}
          <div className="guide-cta">
            <h2 className="ch-title">Ready to <span className="text-accent">Start</span>?</h2>
            <div className="cta-buttons">
              <Link to="/" className="primary-button">Go to Workouts <ChevronRight size={20} /></Link>
              <Link to="/breakdown" className="secondary-button">Exercise Breakdown <ChevronRight size={20} /></Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Guide;
