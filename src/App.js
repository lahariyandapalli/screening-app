// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/loginPage/login';
import SecondPage from './Components/secondPage/secondPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/secondpage" element={<SecondPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
