import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import SecondPage from './secondPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
