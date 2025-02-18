import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const PatientData = () => {

    const [patient, setPatient] = useState([])
    const [searchName, setSearchName] = useState('')
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/patients')
            console.log(response)

            const result = response.data
            console.log(result)
            setPatient(result)
        } catch (error) {
            console.error('Error fetching student data:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])



    const handleLogout = () => {
        navigate('/administration')

    }


    const searchHandler = (event) => {
        const search = event.target.value
        setSearchName(search)
    }

    const searchNameHandler = patient.filter((value) => {
        return value.doctor.toLowerCase().includes(searchName.toLowerCase())
    })



    return (


        <div>
            {/* <h1>Student Details</h1> */}
            <div className='mt-3 mb-3 w-50 mx-auto'>
                <input type="text"
                    className='form-control'
                    placeholder='Type Your Doctor Name'
                    value={searchName}
                    onChange={searchHandler}
                />

            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>SR.No</th>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Doctor</th>
                        <th>Fees</th>
                        <th>Appointment Date</th>
                        <th>Write Message</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchNameHandler.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.fullname}</td>
                                    <td>{value.phonenumber}</td>
                                    <td>{value.doctor}</td>
                                    <td>{value.fees}</td>
                                    <td>{value.appointmentdate}</td>
                                    <td>{value.writemessage}</td>
                                    <td>{value.gender}</td>
                                    <td>
                                        <NavLink to={`/update/${value._id}`} ><button className='btn btn-warning me-3' >Edit</button></NavLink>
                                        <NavLink to={`/delete/${value._id}`}><button className='btn btn-danger'>Delete</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <button className='btn btn-warning mt-5 mb-5 w-25' onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>

    )
}

export default PatientData
