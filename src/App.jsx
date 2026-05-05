import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseBreakdown from './pages/ExerciseBreakdown';
import Guide from './pages/Guide';
import './App.css';
import './breakdown.css';
import './guide.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakdown" element={<ExerciseBreakdown />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
