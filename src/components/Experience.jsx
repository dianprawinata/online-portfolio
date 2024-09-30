// Experience.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Experience = () => {
  return (
    <div className="container-fluid my-5 py-5 vh-100">
      <h1 className="display-5 text-center mb-4">My Experience</h1>
      <div className="row justify-content-center">
        <div className="col-lg-5 mb-4">
          <div className="card shadow border-0 h-100">
            <div className="card-body">
              <h2 className="h5">Web Developer at PT Javanese Code Technology</h2>
              <p className="text-muted">Feb 2023 - Jan 2024 (Freelance)</p>
              <p>Developed websites according to client requirements, coordinated closely with clients to deliver high-quality projects.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 mb-4">
          <div className="card shadow border-0 h-100">
            <div className="card-body">
              <h2 className="h5">IT Division - Web Developer at STAI Ihyaul Ulum Gresik</h2>
              <p className="text-muted">Sep 2022 - Nov 2022 (Internship)</p>
              <p>Created an Academic Information System website using CodeIgniter 3 during a 3-month internship.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
