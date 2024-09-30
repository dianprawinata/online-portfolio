// About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from '../assets/myImage.jpg';

const About = () => {
  return (
    <div className="container-fluid my-5 py-5 vh-100 d-flex align-items-center">
      <div className="row align-items-center justify-content-center w-100">
        <div className="col-md-6">
          <img src={myImage} alt="Profile" className="img-fluid rounded-circle shadow-lg" />
        </div>
        <div className="col-lg-6 col-md-6 text-center text-md-start">
          <h1 className="display-5">About Me</h1>
          <p className="lead">
            I am a web developer with a background in UI/UX design. I have over 1 year of experience in creating user-friendly interfaces and building interactive websites.
          </p>
          <p className="lead">
            I hold a Bachelor Degree in Informatics from UPN Veteran Jawa Timur and have worked on various projects, including Academic Information Systems and Warehouse Websites.
          </p>
          <a href="/experience" className="btn btn-outline-primary mt-3">See My Experience</a>
        </div>
      </div>
    </div>
  );
};

export default About;

