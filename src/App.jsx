import React from 'react';
import Hero from './components/Hero';
import BestPractices from './components/BestPractices';
import WorkoutProgram from './components/WorkoutProgram';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Hero />
        <WorkoutProgram />
        <BestPractices />
      </main>
      
      <footer className="footer">
        <p>Built for Sachi. Consistency is key. 🍑</p>
      </footer>
    </div>
  );
}

export default App;
