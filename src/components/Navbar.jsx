// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top w-100">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Dian's Portfolio</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/awards">Awards</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://dianprawinata.github.io" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
