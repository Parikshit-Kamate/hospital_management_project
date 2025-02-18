import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const Appointment = () => {

  const { register, handleSubmit, reset, setValue} = useForm()

  const postData = (data) => {
    axios.post('http://localhost:8080/patients', data)
      .then(() => {
        alert('Data added successfully')
        reset()
      })
      .catch((error) => {
        alert('Error adding data')
        console.error(error)
      })
  }

  const [doctor, setDoctor] = useState('')



  const doctorFees = {
    Virat: 20000,
    Rohit: 40000,
    Rahul: 60000
  }

  const doctorHandle = (event) => {
    const selectDoctor = event.target.value
    setDoctor(selectDoctor)
    const selectFees = doctorFees[selectDoctor]
    setValue("fees", selectFees)
  }


  return (
    <div className="container">
      <h3 className="text-center mb-4">MAKE AN APPOINTMENT NOW</h3>
      <form onSubmit={handleSubmit(postData)}>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter Your full Name"   {...register('fullname')}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="XXXXXXXXX23"  {...register('phonenumber')}
            />
          </div>
        </div>
        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <label htmlFor="selectDoctor" className="form-label">
              Select Doctor
            </label>
            <select className="form-select" id="selectDoctor" {...register('doctor')} onChange={doctorHandle} value={doctor}>
              <option value="">Select Doctor
                </option>
                
                {
                  Object.keys(doctorFees).map((doctor) => {
                    return (
                      <option key={doctor}>
                        {doctor}
                      </option>
                    )
                  })
                }
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="fullName" className="form-label">
              Select Fees
            </label>
            <input type="text"
              className='form-control'
              readOnly
              placeholder='Select Course for Updating the Fees'
              {...register('fees')}

            />

          </div>
        </div>
        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <label htmlFor="appointmentDate" className="form-label">
              Appointment Date
            </label>
            <input
              type="date"
              className="form-control"
              id="appointmentDate"  {...register('appointmentdate')}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              placeholder="Enter Your Message"   {...register('writemessage')}
            ></textarea>
          </div>
        </div>
        <div className="mt-3">
          <label className="form-label d-block">Gender</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male" {...register('gender')}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Female" {...register('gender')}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="preferNotToSay"
              value="Prefer not to say" {...register('gender')}
            />
            <label className="form-check-label" htmlFor="preferNotToSay">
              Prefer not to say
            </label>
          </div>
        </div>
        <div className="mt-3 text-center">
          <button type="submit" className="btn btn-primary">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
