import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
// Mock data for spaces
const spaces = [
    { id: 1, name: 'Customer Feedback' },
    { id: 2, name: 'Product Reviews' },
    { id: 3, name: 'Service Ratings' },
  ];

  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      {/* Main Content */}
      <div className="d-flex justify-content-center align-items-start mt-5 " style={{ height: '40vh'}}>
        <h1 className="text-center display-4 fw-bold">
          Get Reviews from your Customers with ease
        </h1>
      </div>

      {/* Spaces Section */}
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Your Spaces</h2>
          <Link to="/add-space" className="btn btn-success">Add Spaces</Link> {/* Add Spaces button */}
        </div>
        <div className="row">
          {spaces.map(space => (
            <div className="col-md-4 mb-3" key={space.id}>
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">{space.name}</h5>
                  <p className="card-text">Manage your {space.name} here.</p>
                  <Link to={`/spaces/${space.id}`} className="btn btn-primary">View</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
