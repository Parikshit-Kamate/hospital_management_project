import React from 'react';
import serv1 from '../Static/serv1.jpg';
import serv2 from '../Static/serv2.jpg';
import serv3 from '../Static/serv3.jpg';
import serv4 from '../Static/serv4.jpg';

const Services = () => {
  return (
    <div className="container my-5">

      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src={serv1}
              className="card-img-top"
              alt="Service 1"
              style={{ maxHeight: '250px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src={serv2}
              className="card-img-top"
              alt="Service 2"
              style={{ maxHeight: '250px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src={serv3}
              className="card-img-top"
              alt="Service 3"
              style={{ maxHeight: '250px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src={serv4}
              className="card-img-top"
              alt="Service 4"
              style={{ maxHeight: '250px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
