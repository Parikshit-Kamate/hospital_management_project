import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const Update = () => {
    const [doctor, setDoctor] = useState('')
    const { register, handleSubmit, setValue } = useForm()

    const doctorFees = {
        Virat: 20000,
        Rohit: 40000,
        Rahul: 60000,
    }

    const doctorHandle = (event) => {
        const selectDoctor = event.target.value
        setDoctor(selectDoctor)
        const selectFees = doctorFees[selectDoctor] || ''
        setValue("fees", selectFees)
    }

    const { patientID } = useParams()

    const accessData = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/patients/${patientID}`)
            setValue('fullname', result.data.fullname)
            setValue('phonenumber', result.data.phonenumber)
            setValue('doctor', result.data.doctor)
            setDoctor(result.data.doctor)
            setValue('fees', result.data.fees)
            setValue('appointmentdate', result.data.appointmentdate)
            setValue('writemessage', result.data.writemessage)
            setValue('gender', result.data.gender)
        } catch (error) {
            console.error("Error fetching data: ", error)
        }
    }

    useEffect(() => {
        accessData()
    }, [patientID])

    const navigate = useNavigate()

    const updateData = (data) => {
        axios.put(`http://localhost:8080/patients/${patientID}`, data)
            .then(() => {
                alert('Data Updated')
                navigate('/patientdata')
            })
            .catch(err => {
                console.error(err)
                alert('Error updating data')
            })
    }

    return (
        <div>
            <div className="container">
                <h3 className="text-center mb-4">MAKE AN APPOINTMENT NOW</h3>
                <form onSubmit={handleSubmit(updateData)}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                placeholder="Enter Your full Name"
                                {...register('fullname')}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                placeholder="XXXXXXXXX23"
                                {...register('phonenumber')}
                            />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div className="col-md-6">
                            <label htmlFor="selectDoctor" className="form-label">Select Doctor</label>
                            <select
                                className="form-select"
                                id="selectDoctor"
                                {...register('doctor')}
                                onChange={doctorHandle}
                                value={doctor}
                            >
                                <option value="">Select Doctor</option>
                                {Object.keys(doctorFees).map((doc) => (
                                    <option key={doc} value={doc}>
                                        {doc}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="fees" className="form-label">Select Fees</label>
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                                placeholder="Select Doctor for Updating the Fees"
                                {...register('fees')}
                            />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div className="col-md-6">
                            <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="appointmentDate"
                                {...register('appointmentdate')}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                placeholder="Enter Your Message"
                                {...register('writemessage')}
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
                                value="Male"
                                {...register('gender')}
                            />
                            <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="female"
                                value="Female"
                                {...register('gender')}
                            />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="preferNotToSay"
                                value="Prefer not to say"
                                {...register('gender')}
                            />
                            <label className="form-check-label" htmlFor="preferNotToSay">
                                Prefer not to say
                            </label>
                        </div>
                    </div>
                    <div className="mt-3 text-center">
                        <button type="submit" className="btn btn-primary">
                            Update Patient Data
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update
