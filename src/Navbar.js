import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-4 py-3 shadow-sm">
      <div className="container-fluid d-flex justify-content-between">
        <Link to="/" className="navbar-brand">EzReviews</Link> {/* Link to Landing Page */}
        <div>
          <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
