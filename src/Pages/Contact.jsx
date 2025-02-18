import React from "react";
import Logo from "../Static/Logo.png";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {


  const { register, handleSubmit, reset } = useForm()

  const postData = (data) => {
    axios.post('http://localhost:5000/patients', data)

      .then(() => {
        alert('Data added successfully')
        reset()


      })
      .catch((error) => {
        alert('Error adding data')
        console.error(error)
      })
  }





  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <h1 className="text-center">CONTACT US</h1>


          <form onSubmit={handleSubmit(postData)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Full Name" {...register('fullname')}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email" {...register('email')}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                placeholder="Enter Your Mobile Number" {...register('mobilenumber')}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Enter Your Message" {...register('writemessage')}
              ></textarea>
            </div>

            <div className="text-center mt-5">
              <button type="submit" className="btn btn-primary">
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="text-center mt-5">
        <img
          src={Logo}
          alt="Medical Care Logo"
          className="mb-2"
          style={{ height: "140px", width: "140px" }}
        />
        <h5>Medical Care</h5>
        <p className="mb-0">HEALTH CARE</p>
        <p className="mb-0">Monday-Friday 08:00-19:00</p>
        <p className="mb-0">Saturday and Sunday - CLOSED</p>
        <p className="mb-0">+0800 2336 7811</p>
        <p className="mb-0">office@medicare.com</p>
        <p className="mb-0">27th Avenue, Pune, 410501</p>
      </div>
    </div>
  );
};

export default Contact;
