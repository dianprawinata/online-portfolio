// Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-3 fw-bold mb-4">Dian Agus Prawinata</h1>
        <p className="lead">Web Developer & UI/UX Designer</p>
        <a href="about" className="btn btn-primary btn-lg mt-4">Learn More About Me</a>
      </div>
    </div>
  );
};

export default Home;
