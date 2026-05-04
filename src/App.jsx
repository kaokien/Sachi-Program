import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseBreakdown from './pages/ExerciseBreakdown';
import './App.css';
import './breakdown.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakdown" element={<ExerciseBreakdown />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
