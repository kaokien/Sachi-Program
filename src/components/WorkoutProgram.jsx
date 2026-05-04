import React, { useState, useEffect, useRef } from 'react';
import { programData } from '../data/programData';
import { ChevronDown, Play, Check } from 'lucide-react';

const WorkoutProgram = () => {
  const [selectedPhase, setSelectedPhase] = useState(programData.phases[0]);
  const [selectedDay, setSelectedDay] = useState(programData.phases[0].days[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [completedSets, setCompletedSets] = useState({});
  const dropdownRef = useRef(null);

  // Load completed sets
  useEffect(() => {
    const saved = localStorage.getItem('sachi_booty_builder_progress');
    if (saved) {
      setCompletedSets(JSON.parse(saved));
    }
  }, []);

  // Save completed sets
  useEffect(() => {
    localStorage.setItem('sachi_booty_builder_progress', JSON.stringify(completedSets));
  }, [completedSets]);

  // Click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSet = (exerciseKey, setIndex) => {
    const setKey = `${exerciseKey}-${setIndex}`;
    setCompletedSets(prev => ({
      ...prev,
      [setKey]: !prev[setKey]
    }));
  };

  const handleSelectWorkout = (phase, day) => {
    setSelectedPhase(phase);
    setSelectedDay(day);
    setIsDropdownOpen(false);
  };

  return (
    <section className="section" id="program">
      <div className="section-header">
        <span className="section-subtitle">The Work</span>
        <h2 className="section-title">Select <span className="text-accent">Workout</span></h2>
      </div>

      <div className="program-container">
        
        {/* Dropdown Menu for Skulpt Vibe */}
        <div className="dropdown-container" ref={dropdownRef}>
          <button 
            className="dropdown-toggle"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedPhase.name.split(':')[0]} - {selectedDay.name.split(':')[0]}
            <ChevronDown style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
          </button>
          
          <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
            {programData.phases.map((phase) => (
              <React.Fragment key={phase.id}>
                {phase.days.map((day) => (
                  <button 
                    key={`${phase.id}-${day.id}`}
                    className={`dropdown-item ${(selectedPhase.id === phase.id && selectedDay.id === day.id) ? 'active' : ''}`}
                    onClick={() => handleSelectWorkout(phase, day)}
                  >
                    {phase.name.split(':')[0]}: {day.name}
                  </button>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Workout View */}
        <div className="workout-view animate-slide-up" key={`${selectedPhase.id}-${selectedDay.id}`}>
          <div className="workout-header">
            <h3 className="workout-title">{selectedDay.name}</h3>
            <p className="workout-subtitle">{selectedDay.subtitle}</p>
          </div>

          <div className="exercise-list">
            {selectedDay.exercises.map((exercise, idx) => {
              const exerciseKey = `${selectedPhase.id}-${selectedDay.id}-${idx}`;
              return (
                <div key={idx} className="exercise-card">
                  <div className="exercise-card-header">
                    <h4 className="exercise-name">{exercise.name}</h4>
                    {exercise.youtubeUrl && (
                      <a href={exercise.youtubeUrl} target="_blank" rel="noopener noreferrer" className="youtube-link">
                        <Play size={16} /> Tutorial
                      </a>
                    )}
                  </div>
                  
                  <div className="exercise-meta">
                    <span>{exercise.sets} SETS</span>
                    <span>{exercise.reps} REPS</span>
                  </div>
                  
                  {exercise.notes && (
                    <div className="exercise-notes">
                      {exercise.notes}
                    </div>
                  )}
                  
                  {/* Sets Tracker */}
                  <div className="set-trackers">
                    {Array.from({ length: exercise.sets }).map((_, setIdx) => {
                      const isCompleted = completedSets[`${exerciseKey}-${setIdx}`];
                      return (
                        <button
                          key={setIdx}
                          onClick={() => toggleSet(exerciseKey, setIdx)}
                          className={`set-btn ${isCompleted ? 'completed' : ''}`}
                        >
                          {isCompleted && <Check size={14} />}
                          SET {setIdx + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkoutProgram;
