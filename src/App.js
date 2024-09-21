import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Set login as the default page */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
