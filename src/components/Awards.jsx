import React from 'react';

const Awards = () => {
  return (
    <div className="container my-5">
      <h1 className="display-5 text-center">Awards & Achievements</h1>
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <ul className="list-group">
            <li className="list-group-item">
              <h2 className="h5">3rd Place - Skilvul Innovation Challenge x TalentaAI and Microsoft</h2>
              <p className="text-muted">July 2024</p>
              <hr />
              <p>Developed inWarung, an AI-based inventory management system for micro MSMEs in Indonesia. The system uses Azure Machine Learning and Azure OpenAI for transaction recording and restock planning, with plans for e-commerce integration</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Awards;
