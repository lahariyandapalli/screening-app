// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './login'; // Correctly import the 'App' component from './login'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
