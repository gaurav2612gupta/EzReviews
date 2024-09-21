import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-start mt-5 min-vh-100">
      <div className="card shadow-sm p-4" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
