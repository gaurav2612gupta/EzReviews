import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  return (
    <div className="container d-flex justify-content-center align-items-start mt-5 min-vh-100">
      <div className="card shadow-sm p-4" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Sign Up</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="signupEmail"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="signupPassword"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
