import { Brain, Dumbbell, Apple } from 'lucide-react';

const BestPractices = () => {
  const practices = [
    {
      icon: <Dumbbell size={32} />,
      title: "Progressive Overload",
      description: "The golden rule of growth. You must consistently challenge your muscles by increasing weight, reps, or sets over time. If it's easy, it's not growing."
    },
    {
      icon: <Brain size={32} />,
      title: "Mind-Muscle Connection",
      description: "Don't just move the weight—feel the muscle working. Squeeze hard at the top of every hip thrust and control the lowering phase to prevent 'gluteal amnesia'."
    },
    {
      icon: <Apple size={32} />,
      title: "Fuel for Growth",
      description: "You cannot build a booty in a caloric deficit. Eat in a slight surplus and aim for 1.6-2.2g of protein per kg of body weight daily to optimize muscle synthesis."
    }
  ];

  return (
    <section className="section" id="practices">
      <div className="section-header animate-fade-in">
        <span className="section-subtitle">The Science</span>
        <h2 className="section-title">Rules of the <span className="text-gradient">Booty</span></h2>
      </div>
      
      <div className="practices-grid">
        {practices.map((practice, index) => (
          <div 
            key={index} 
            className="practice-card glass"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="practice-icon">
              {practice.icon}
            </div>
            <h3 className="practice-title">{practice.title}</h3>
            <p className="practice-desc">{practice.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestPractices;
