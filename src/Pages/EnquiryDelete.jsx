import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const EnquiryDelete = () => {


    const [patient, setPatient] = useState('')
    const { patientID } = useParams()
    const navigate = useNavigate()


    const accessData = async () => {
        const response = await axios.get(`http://localhost:5000/patients/${patientID}`)
        const result = response.data
        setPatient(result)
    }

    useEffect(() => {
        accessData()
    }, [])

    const deleteData = () => {
        axios.delete(`http://localhost:5000/patients/${patientID}`)
        navigate('/enquirypatientdata')
        alert('Data Deleted Successfully')
    }
    return (
        <div>
            <div className='bg-primary w-50 mx-auto p-4 rounded-3 mt-5 mb-5'>
                <div className='mt-3'>
                    <h2>Patient id -{patient._id}</h2>
                </div>
                <div className='mt-3'>
                    <h2>Patient Full Name - {patient.fullname}</h2>
                </div>
                <div className='mt-3'>
                    <button className='btn btn-danger me-3' onClick={deleteData}>YES</button>
                    <NavLink to='/enquirypatientdata'><button className='btn btn-success'>NO</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default EnquiryDelete
