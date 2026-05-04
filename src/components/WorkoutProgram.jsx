import React, { useState, useEffect, useRef } from 'react';
import { programData } from '../data/programData';
import { ChevronDown, Play, Check } from 'lucide-react';

const WorkoutProgram = () => {
  const [selectedPhase, setSelectedPhase] = useState(programData.phases[0]);
  const [selectedDay, setSelectedDay] = useState(programData.phases[0].days[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [setData, setSetData] = useState({});
  const dropdownRef = useRef(null);

  // Load completed sets and weights
  useEffect(() => {
    const saved = localStorage.getItem('sachi_booty_builder_progress_v2');
    if (saved) {
      setSetData(JSON.parse(saved));
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('sachi_booty_builder_progress_v2', JSON.stringify(setData));
  }, [setData]);

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

  const handlePhaseChange = (phase) => {
    setSelectedPhase(phase);
    setSelectedDay(phase.days[0]); // Reset to day 1 of the new phase
    setIsDropdownOpen(false);
  };

  const toggleSet = (exerciseKey, setIndex) => {
    const setKey = `${exerciseKey}-${setIndex}`;
    setSetData(prev => {
      const currentData = prev[setKey] || { completed: false, weight: '' };
      return {
        ...prev,
        [setKey]: { ...currentData, completed: !currentData.completed }
      };
    });
  };

  const updateWeight = (exerciseKey, setIndex, weight) => {
    const setKey = `${exerciseKey}-${setIndex}`;
    setSetData(prev => {
      const currentData = prev[setKey] || { completed: false, weight: '' };
      return {
        ...prev,
        [setKey]: { ...currentData, weight }
      };
    });
  };

  return (
    <section className="section" id="program">
      <div className="section-header">
        <span className="section-subtitle">The Work</span>
        <h2 className="section-title">Select <span className="text-accent">Workout</span></h2>
      </div>

      <div className="program-container">
        
        {/* Phase Selector Tabs */}
        <div className="phase-tabs-container">
          {programData.phases.map((phase) => (
            <button
              key={phase.id}
              className={`phase-btn ${selectedPhase.id === phase.id ? 'active' : ''}`}
              onClick={() => handlePhaseChange(phase)}
            >
              {phase.name.split(':')[0]}
              <span className="phase-weeks">{phase.weeks}</span>
            </button>
          ))}
        </div>

        {/* Day Dropdown Selector */}
        <div className="dropdown-container" ref={dropdownRef}>
          <button 
            className="dropdown-toggle"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedDay.name}
            <ChevronDown style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
          </button>
          
          <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
            {selectedPhase.days.map((day) => (
              <button 
                key={`${selectedPhase.id}-${day.id}`}
                className={`dropdown-item ${selectedDay.id === day.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedDay(day);
                  setIsDropdownOpen(false);
                }}
              >
                {day.name}
              </button>
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
                  
                  {/* Sets Tracker with Weight Logging */}
                  <div className="set-trackers">
                    {Array.from({ length: exercise.sets }).map((_, setIdx) => {
                      const currentSet = setData[`${exerciseKey}-${setIdx}`] || { completed: false, weight: '' };
                      
                      return (
                        <div key={setIdx} className="set-row">
                          <button
                            onClick={() => toggleSet(exerciseKey, setIdx)}
                            className={`set-btn ${currentSet.completed ? 'completed' : ''}`}
                          >
                            {currentSet.completed && <Check size={14} />}
                            SET {setIdx + 1}
                          </button>
                          
                          <div className="weight-input-wrapper">
                            <input
                              type="number"
                              className={`weight-input ${currentSet.completed ? 'completed-input' : ''}`}
                              placeholder="lbs"
                              value={currentSet.weight}
                              onChange={(e) => updateWeight(exerciseKey, setIdx, e.target.value)}
                              disabled={currentSet.completed}
                            />
                          </div>
                        </div>
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
