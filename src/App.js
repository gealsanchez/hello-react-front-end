import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Salutes from './components/Salutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Salutes />} />
      </Routes>
    </Router>
  );
}

export default App;
