import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; // Custom CSS for login page

const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-sm-6">
            <div className="card p-4">
              <h3 className="card-title text-center">Login</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group pb-3"> {/* Add padding-bottom to the password input */}
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <div className="form-check mb-3"> {/* Add "Remember Me" checkbox */}
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary custom-white-btn">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
