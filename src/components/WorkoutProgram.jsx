import { useState, useEffect, useRef } from 'react';
import { programData } from '../data/programData';
import { ChevronDown, Play, Check, RotateCcw, Download, Trophy } from 'lucide-react';

const STORAGE_KEY = 'sachi_booty_builder_progress_v2';
const WEEK_KEY = 'sachi_booty_builder_current_week';

const WorkoutProgram = () => {
  const [selectedPhase, setSelectedPhase] = useState(programData.phases[0]);
  const [selectedDay, setSelectedDay] = useState(programData.phases[0].days[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [setData, setSetData] = useState({});
  const [currentWeek, setCurrentWeek] = useState(1);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const dropdownRef = useRef(null);

  // Load completed sets, weights, and current week
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setSetData(JSON.parse(saved));
    }
    const savedWeek = localStorage.getItem(WEEK_KEY);
    if (savedWeek) {
      setCurrentWeek(parseInt(savedWeek, 10));
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(setData));
  }, [setData]);

  useEffect(() => {
    localStorage.setItem(WEEK_KEY, String(currentWeek));
  }, [currentWeek]);

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

  // Calculate completion percentage
  const totalSets = programData.phases.reduce((sum, phase) =>
    sum + phase.days.reduce((daySum, day) =>
      daySum + day.exercises.reduce((exSum, ex) => exSum + ex.sets, 0), 0), 0);

  const completedSets = Object.values(setData).filter(s => s.completed).length;
  const progressPercent = totalSets > 0 ? Math.round((completedSets / totalSets) * 100) : 0;

  // Export weight data as JSON
  const exportData = () => {
    const exportPayload = {
      exportDate: new Date().toISOString(),
      currentWeek,
      progressPercent,
      completedSets,
      totalSets,
      exercises: {}
    };

    // Organize data by exercise name for readability
    Object.entries(setData).forEach(([key, value]) => {
      if (value.weight || value.completed) {
        exportPayload.exercises[key] = value;
      }
    });

    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sachi-booty-builder-progress-week${currentWeek}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Reset all progress
  const resetProgress = () => {
    setSetData({});
    setCurrentWeek(1);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(WEEK_KEY);
    setShowResetConfirm(false);
  };

  return (
    <section className="section" id="program">
      <div className="section-header">
        <span className="section-subtitle">The Work</span>
        <h2 className="section-title">Select <span className="text-accent">Workout</span></h2>
      </div>

      {/* Progress Tracker */}
      <div className="progress-tracker">
        <div className="progress-header">
          <div className="progress-info">
            <Trophy size={20} className="progress-icon" />
            <span className="progress-label">Week {currentWeek} of 12</span>
            <span className="progress-percent">{progressPercent}%</span>
          </div>
          <div className="progress-actions">
            <button
              className="week-selector"
              onClick={() => setCurrentWeek(prev => Math.min(prev + 1, 12))}
              aria-label="Advance to next week"
            >
              Week +
            </button>
            <button
              className="week-selector"
              onClick={() => setCurrentWeek(prev => Math.max(prev - 1, 1))}
              aria-label="Go back one week"
            >
              Week −
            </button>
            <button className="action-btn" onClick={exportData} aria-label="Export progress data">
              <Download size={16} /> Export
            </button>
            <button className="action-btn danger" onClick={() => setShowResetConfirm(true)} aria-label="Reset all progress">
              <RotateCcw size={16} /> Reset
            </button>
          </div>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="modal-overlay" onClick={() => setShowResetConfirm(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3 className="modal-title">Reset All Progress?</h3>
            <p className="modal-desc">This will erase all completed sets, weight entries, and reset your week counter. This cannot be undone.</p>
            <div className="modal-actions">
              <button className="modal-btn cancel" onClick={() => setShowResetConfirm(false)}>Cancel</button>
              <button className="modal-btn confirm" onClick={resetProgress}>Yes, Reset Everything</button>
            </div>
          </div>
        </div>
      )}

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
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
          >
            {selectedDay.name}
            <ChevronDown style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
          </button>
          
          <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`} role="listbox">
            {selectedPhase.days.map((day) => (
              <button 
                key={`${selectedPhase.id}-${day.id}`}
                className={`dropdown-item ${selectedDay.id === day.id ? 'active' : ''}`}
                role="option"
                aria-selected={selectedDay.id === day.id}
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
                    {exercise.rest && <span className="rest-label">Rest: {exercise.rest}</span>}
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
                            aria-pressed={currentSet.completed}
                            aria-label={`Set ${setIdx + 1} of ${exercise.name} — ${currentSet.completed ? 'completed' : 'not completed'}`}
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
                              aria-label={`Weight in pounds for set ${setIdx + 1} of ${exercise.name}`}
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
