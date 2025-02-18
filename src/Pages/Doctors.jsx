import React from 'react'
import doc1 from '../Static/doc1.jpg'
import doc2 from '../Static/doc2.jpg'
import doc3 from '../Static/doc3.jpg'
import doc4 from '../Static/doc4.jpg'
import doc5 from '../Static/doc5.jpg'

const Doctors = () => {
  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src={doc1}
              className="card-img-top"
              alt="Doctor 1"
              style={{ maxHeight: '250px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src={doc2}
              className="card-img-top"
              alt="Doctor 2"
              style={{ maxHeight: '250px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src={doc3}
              className="card-img-top"
              alt="Doctor 3"
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
              src={doc4}
              className="card-img-top"
              alt="Doctor 4"
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
              src={doc5}
              className="card-img-top"
              alt="Doctor 5"
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
  )
}

export default Doctors
