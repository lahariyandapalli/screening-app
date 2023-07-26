// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'; // Custom CSS for login page

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your login logic (e.g., validating the credentials)
    // For simplicity, let's assume login is successful when username and password are not empty
    if (username && password) {
      // Replace the line below with the correct path for your second page
      // e.g., if the path for the second page is '/second-page', use: window.location.href = '/second-page';
      window.location.href = '/second-page';
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card p-4 login-card">
              <h3 className="card-title text-center">Login</h3>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary custom-white-btn">
                    Login
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <p>
                  Not a member? <Link to="/second-page">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
