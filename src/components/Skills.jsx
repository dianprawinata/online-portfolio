// Skills.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className="container my-5 text-center">
      <h1 className="display-5 mb-4">My Skills</h1>
      <div className="row">
        <div className="col-6 col-md-4 mb-3">
          <FontAwesomeIcon icon={faReact} size="4x" className="text-primary" />
          <h4 className="mt-2">React</h4>
        </div>
        <div className="col-6 col-md-4 mb-3">
          <FontAwesomeIcon icon={faJs} size="4x" className="text-warning" />
          <h4 className="mt-2">JavaScript</h4>
        </div>
        <div className="col-6 col-md-4 mb-3">
          <FontAwesomeIcon icon={faCss3Alt} size="4x" className="text-info" />
          <h4 className="mt-2">CSS3</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
